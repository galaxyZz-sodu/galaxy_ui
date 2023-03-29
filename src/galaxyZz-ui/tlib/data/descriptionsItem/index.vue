<template>
    <div class="out" :class="{isVertical: direction == 'vertical'}" :style="{width: `${100 / colunm}%`}">
        <div class="label">{{label}}:</div>
        <div :class="{isVerticalSlot: direction == 'vertical'}">
            <slot></slot>
        </div>
        
    </div>
</template>

<script>
export default {
    props: {
        label: {
            type: String
        }
    },
    inject: ['direction', 'colunm'],
    mounted() {
        console.log(this.direction);
    }
}
</script>

<style scoped>
.out {
    /* flex: 1; */
    box-sizing: border-box;
    /* width: 33.3%; */
    display: flex;
    padding: 10px 0px;
    align-items: center;
    /* justify-content: center; */
}
.isVertical {
    display: block;
}
.isVerticalSlot {
    margin-top: 4px;
}
.label {
    margin-right: 6px;
}
</style>
