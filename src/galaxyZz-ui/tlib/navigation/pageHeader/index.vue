<template>
    <div class="out">
        <div class="back" @click="goBack">
            <div class="text">
                <div v-if="!hasTitleSlot">返回</div>
                <slot name="title"></slot>
            </div>
        </div>
        <div class="content">
            <div v-if="!hasContentSlot">{{content}}</div>
            <slot name="content"></slot>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        content: {
            type: String,
        }
    },
    data() {
        return {
            hasTitleSlot: false,
            hasContentSlot: false
        }
    },
    methods: {
        goBack() {
            this.$emit('back')
        }
    },
    mounted() {
        this.hasTitleSlot = this.$slots.hasOwnProperty("title");
        this.hasContentSlot = this.$slots.hasOwnProperty("content");
    }
}
</script>

<style scoped>
.out {
    display: flex;
    /* justify-content: center; */
    align-items: center;
}
.back {
background-color: #f1f3f6;
    box-shadow: 3px 2px 6px #c6c7ca, -2px -3px 20px #ffffff;
    padding: 8px 15px;
    margin-right: 6px;
    transform: skewX(-30deg);
    transition: 0.3s all ease-out;
}
.text {
    font-size: 14px;
    transform: skewX(30deg);
    cursor:pointer;
    transition: 0.3s all ease-out;
}
.text:hover {
    color: #4facfe;
}
.content {
    margin-left: 20px;
    font-size: 18px;
}
.back:hover {
    box-shadow: 1px 1px 3px #c6c7ca, -1px -1px 10px #ffffff;
}
</style>
