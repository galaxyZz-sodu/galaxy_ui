<template>
    <div class="out">
        <div v-show="!hidden" class="pop" :class="typeClass">
            {{maxValue}}
        </div>
            <slot></slot>
    </div>
</template>

<script>
export default {
    props: {
        value: {
            // type:  Number || String
        },
        type: {
            type: String,
            default: '',
            validator: (value) => {
                return ['','primary', 'warning'].includes(value);
            }
        },
    
        max: {
            type: Number
        },
        hidden: {
            type: Boolean,
            default: false
        }
    },
    computed: {
        maxValue() {
            if (typeof(this.value) == 'number' && this.max) {
                return this.value > this.max ? `${this.max}+` : this.value
            } else {
                return this.value
            }
        },
        typeClass() {
                return {
                    [`${this.type}`]: this.type
                }
            }
    }
}
</script>

<style scoped>
    .out {
        /* width: auto; */
        /* background-color: red; */
        display: inline-block;
        position: relative;
    }
    .pop {
        font-size: 12px;
        position: absolute;
        right: 10px;
        top: 0;
        transform: translateX(80%) translateY(-50%);
        padding: 2px 6px;
        background-image: linear-gradient(to right, #f78ca0 0%, #f9748f 19%, #fd868c 60%, #fe9a8b 100%);
        border-radius: 10px;
        color: #f1f3f6;
        box-shadow:  2px 2px 6px rgba(0, 0, 0, 0.2),
                -4px -4px 8px #ffffff;
    }
    .primary {
        background-image: linear-gradient(145deg,#4facfe, #00f2fe);
    }
    .warning {
        background-image: linear-gradient(120deg, #f6d365 0%, #fda085 100%);
    }
</style>
