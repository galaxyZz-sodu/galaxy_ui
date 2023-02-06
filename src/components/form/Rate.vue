<template>
    <div>
        <div class="title">
            评分
        </div>
        <div class="secondTitle">
            基础用法
        </div>
        <g-rate v-model="rateNum"></g-rate>
        <Code :js="basicUsageJs" :html="basicUsageHTML"></Code>
        <div class="secondTitle">
            改变事件
        </div>
        <g-rate v-model="rateNum" @change="rateChange"></g-rate>
        <Code :js="eventJs" :html="eventHTML"></Code>
    </div>
</template>

<script>
export default {
    data() {
        return {
            rateNum: 0,
            basicUsageHTML: '<p>&lt;<span style="color: rgb(224, 108, 117);">g-rate</span> <span style="color: rgb(209, 154, 102);">v-model</span>="<span style="color: rgb(224, 108, 117);">rateNum</span>"&gt;&lt;/<span style="color: rgb(224, 108, 117);">g-rate</span>&gt;</p>',
            basicUsageJs: '<p><span style="color: rgb(97, 175, 239);">data</span>() {</p><p>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color: rgb(198, 120, 221);">return</span> {</p><p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span style="color: rgb(224, 108, 117);">rateNum</span>: <span style="color: rgb(209, 154, 102);">0</span>,</p><p>&nbsp; &nbsp; &nbsp; &nbsp; }</p><p>}</p>',
            eventHTML: '<p>&lt;<span style="color: rgb(224, 108, 117);">g-rate</span> <span style="color: rgb(209, 154, 102);">v-model</span>="<span style="color: rgb(224, 108, 117);">rateNum</span>" @<span style="color: rgb(209, 154, 102);">change</span>="<span style="color: rgb(224, 108, 117);">rateChange</span>"&gt;&lt;/<span style="color: rgb(224, 108, 117);">g-rate</span>&gt;</p>',
            eventJs: '<p><span style="color: rgb(224, 108, 117);">methods</span>: {</p><p>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color: rgb(97, 175, 239);">rateChange</span>() {</p><p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span style="color: rgb(229, 192, 123);">console</span>.<span style="color: rgb(97, 175, 239);">log</span>(<span style="color: rgb(229, 192, 123);">this</span>.<span style="color: rgb(224, 108, 117);">rateNum</span>);</p><p>&nbsp; &nbsp; &nbsp; &nbsp; }</p><p>}</p>'
        }
    },
    methods: {
        rateChange() {
            console.log(this.rateNum);
        }
    }
}
</script>

<style scoped>

</style>