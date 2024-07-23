<template>
    <div>
        <div class="out">  
            <div class="icon" @click="showSider">=</div>
        </div>
    </div>
    
</template>

<script>
export default {
    methods: {
        showSider() {
            this.$emit('changeSiderShow')
        }
    }
}
</script>

<style lang="less" scoped>
    .out {
        width: 100%;
        height: 60px;
        background-color: f1f3f6;
        display: flex;
        align-items: center;
        box-shadow: 2px 0px 6px rgba(0, 0, 0, 0.5);
         .icon {
            padding: 15px;
            font-size: 30px;
            cursor: pointer;
         }
    }
</style>
