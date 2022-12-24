<template>
    <div class="flex stepsOut">
        <slot></slot>
    </div>
</template>

<script>
export default {
    data() {
        return {
            slotLen: this.$slots.default.length,
            // activeIndex: this.active
        }
    },
    props: {
        active: {
            type: Number,
            default: 0,
        },
        direction: {
            type: String,

        }
    },
    mounted() {
        // console.log(this.$slots.default.length);
    },
    provide() {
        return {
            slotLen: this.slotLen,
            activeIndex: () => {
                return this.active
            }
        }
    }
}
</script>

<style scoped>
.stepsOut {
    margin-bottom: 30px;
}
    .flex {
        display: flex;
    }
</style>
