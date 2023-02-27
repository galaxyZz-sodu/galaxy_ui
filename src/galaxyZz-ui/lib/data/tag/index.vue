<template>
    <div class="out">
        <div class="in" :class="typeClass">
            <slot></slot>  
        </div>
              
    </div>
</template>

<script>
export default {
    props: {
        type: {
            type: String,
            default: 'info',
            validator: (value) => {
                return ['success', 'info', 'warning', 'danger'].includes(value)
            }
        }
    },
    computed: {
        typeClass() {
            return {
                [`${this.type}`]: this.type,
            }
        }
    }
}
</script>

<style scoped>
    .in {
        font-size: 12px;
        padding: 6px 10px;
        display: inline-block;
        background-color: #f1f3f6;
        box-shadow:  2px 2px 6px #c6c7ca,
                -4px -4px 8px #ffffff;
        border-radius: 5px;
    }
    .success {
        background-color: #f0f9eb;
        color: #67c23a;
    }
    .warning {
        background-color: #fdf6ec;
        color: #e6a23c;
    }
    .danger {
        background-color: #fef0f0;
        color: #f56c6c;
    }
</style>