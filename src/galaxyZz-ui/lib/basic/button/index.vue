<template>
    <button @click="handleClick" class="btn" :class="{...typeClass, 'down': isDown, 'enter': isEnter}" @mousedown="onMouseDown" @mouseup="onMouseUp" @mouseenter="onEnter" @mouseleave="onLeave">
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
    data() {
        return {
            isDown: false,
            isEnter: false
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
        },
        onMouseDown() {
            this.isDown = true;
        },
        onMouseUp() {
            this.isDown = false;
        },
        onEnter() {
            this.isEnter = true;
        },
        onLeave() {
            this.isEnter = false;
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
        transition: box-shadow 0.3s ease-out;
        /* transition-duration: 1s; */
    }
    /* .btn:hover {
        box-shadow:  2px 2px 4px #c6c7ca,
                -3px -3px 6px #ffffff;
    } */
    .enter {
        box-shadow:  2px 2px 4px #c6c7ca,
                -3px -3px 6px #ffffff;
    }
    .down {
        box-shadow:  2px 2px 4px transparent,
                -3px -3px 6px transparent;
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