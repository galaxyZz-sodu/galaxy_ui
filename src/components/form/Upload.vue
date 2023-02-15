<template>
    <div>
        <div class="title">
            开关
        </div>
        <div class="secondTitle">
            基础用法
        </div>
        <g-upload :showPicture="true" @handleSucceed="getSucceed" :limit="3" @handleDelete="getDelete" @exceed="getExceed"></g-upload>
    </div>
</template>

<script>
export default {
    methods: {
        getSucceed(flieList) {
            console.log('完成', flieList);
        },
        getDelete(fileList) {
            console.log('删除', fileList);
        },
        getExceed() {
            console.log('超出限制')
        }
    }
}
</script>

<style scoped>

</style>