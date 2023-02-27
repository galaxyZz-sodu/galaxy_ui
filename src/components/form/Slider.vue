<template>
    <div>

        <div class="title">
            滑块
        </div>
        <div class="secondTitle">
            基础用法
        </div>
        <!-- <div>{{percent}}</div> -->
        <g-slider v-model="percent" @mouseUp="getMouseUp"></g-slider>
        <Code :js="basicUsageJs" :html="basicUsageHTML"></Code>
        <g-table :data="tableData" class="table">
            <g-table-column prop="parameter" label="参数" :width="100"></g-table-column>
            <g-table-column prop="explain" label="解释" :width="200"></g-table-column>
            <g-table-column prop="type" label="数据类型" :width="100"></g-table-column>
            <g-table-column prop="select" label="可选值" :width="100"></g-table-column>
            <g-table-column prop="default" label="默认值" :width="100"></g-table-column>
        </g-table>

        <g-table :data="event" class="table">
            <g-table-column prop="eventName" label="事件名" :width="100"></g-table-column>
            <g-table-column prop="explain" label="解释" :width="300"></g-table-column>
            <g-table-column prop="callBackPara" label="回调参数" :width="200"></g-table-column>
        </g-table>
    </div>
</template>

<script>
export default {
    data() {
        return {
            percent: 40,
            basicUsageJs: '<p><span style="color: rgb(97, 175, 239);">data</span>() {</p><p>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color: rgb(198, 120, 221);">return</span> {</p><p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span style="color: rgb(224, 108, 117);">percent</span>: <span style="color: rgb(209, 154, 102);">40</span></p><p>&nbsp; &nbsp; &nbsp; &nbsp; }</p><p>}</p>',
            basicUsageHTML: '<p>&lt;<span style="color: rgb(224, 108, 117);">g-slider</span> <span style="color: rgb(209, 154, 102);">v-model</span>="<span style="color: rgb(224, 108, 117);">percent</span>"&gt;&lt;/<span style="color: rgb(224, 108, 117);">g-slider</span>&gt;</p>',
            tableData: [
                
                {
                    parameter: 'v-model',
                    explain: '百分比数值',
                    type: 'Number',
                    select: '0 - 100',
                    default: '0'
                }
            ],
            event: [
                {
                    eventName: 'mouseUp',
                    explain: '放开鼠标时触发的事件',
                    callBackPara: '当前的百分比数值'
                }
                
            ]

        }
    },
    methods: {
        getMouseUp(per) {
            console.log(per);
        }
    }
}
</script>

<style scoped>

</style>