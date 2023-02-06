<template>
    <div>

        <div class="title">
            滑块
        </div>
        <div class="secondTitle">
            基础用法
        </div>
        <g-slider class="slider" v-model="percent"></g-slider>
        <Code :js="basicUsageJs" :html="basicUsageHTML"></Code>
    </div>
</template>

<script>
export default {
    data() {
        return {
            percent: 0
        }
    }
}
</script>

<style scoped>

</style>