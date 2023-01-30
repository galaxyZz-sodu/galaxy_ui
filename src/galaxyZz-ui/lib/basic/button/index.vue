<template>
    <button @click="handleClick" class="btn" :class="typeClass">
        <slot></slot>
    </button>
</template>

<script>
export default {
    props: {
        primary: {
            type: Boolean,
            default: true
        },
        plain: {
            type: Boolean,
            default: true
        },
        round: {
            type: Boolean,
            default: false
        },
        size: {
            type: String,
            default: 'mid',
            validator: (value) => {
                return ['mid', 'small', 'large'].includes(value)
            }
        },
        type: {
            type: String,
            require: false,
            default: '',
            validator: (value) => {
                return ['', 'sunk', 'hump'].includes(value)
            }
        }
    },
    computed: {
        typeClass() {
            return {
                [`${this.type}`]: this.type,
                [`${this.size}`]: this.size,
                [`${this.size}Round`]: this.round,
            }
        }
    },
    methods: {
        handleClick(e) {
            this.$emit('click', e)
        }
    }
}
</script>

<style scoped>
    .btn {
        border: none;
        background-color: #f1f3f6;
        box-shadow:  4px 4px 8px #c6c7ca,
                -6px -6px 12px #ffffff;
        border-radius: 5px;
    }
    .hump {
        background: linear-gradient(145deg, #ffffff, #f1f3f6);
    }
    .sunk {
        background: linear-gradient(145deg, #d9dbdd, #ffffff);
    }
    .mid {
        padding: 10px 20px;
        /* height: 40px; */
        /* width: auto; */
    }
    .midRound {
        border-radius: 20px;
    }
    .small {
        padding: 5px 11px;
        width: auto;
    }
    .smallRound {
        border-radius: 20px;
    }
    .large {
        padding: 15px 30px;
        /* width: auto; */
        /* min-width: 100px; */
    }
    .largeRound {
        border-radius: 30px;
    }
</style>