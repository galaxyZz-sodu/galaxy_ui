<template>
    <div>
        <div class="title">
            计数器
        </div>
        <div class="secondTitle">
            基础用法
        </div>
        <g-input-number v-model="number" :min="0" :max="10" ></g-input-number>
        <div class="thirdTitle">
            template
        </div>
        <div class="code">
            <div v-html="basicUsageHTML"></div>
        </div>
        <div class="thirdTitle">
            javascript
        </div>
        <div class="code">
            <div v-html="basicUsageJs"></div>
        </div>

        <div class="secondTitle">
            输入事件
        </div>
        <div class="suppleTitle">
            当输入框内容发生改变时触发
        </div>

        <g-input-number v-model="number" :min="0" :max="10" @change="inputChange"></g-input-number>
        <div class="thirdTitle">
            template
        </div>
        <div class="code">
            <div v-html="eventHTML"></div>
        </div>
        <div class="thirdTitle">
            javascript
        </div>
        <div class="code">
            <div v-html="eventJs"></div>
        </div>
        <div class="tabelTitle">
            inputNumber参数
        </div>
        <g-table :data="tableData" class="table">
            <g-table-column prop="parameter" label="参数" :width="100"></g-table-column>
            <g-table-column prop="explain" label="解释" :width="150"></g-table-column>
            <g-table-column prop="type" label="数据类型" :width="100"></g-table-column>
            <g-table-column prop="select" label="可选值" :width="150"></g-table-column>
            <g-table-column prop="default" label="默认值" :width="100"></g-table-column>
        </g-table>

        <div class="tabelTitle">
            inputNumber事件
        </div>
        <g-table :data="event" class="table">
            <g-table-column prop="eventName" label="参数" :width="100"></g-table-column>
            <g-table-column prop="explain" label="解释" :width="400"></g-table-column>
            <g-table-column prop="callBackPara" label="回调参数" :width="100"></g-table-column>
        </g-table>
    </div>
</template>

<script>
export default {
    data() {
        return {
            number: 0,
            basicUsageHTML: '<p>&lt;<span style="color: rgb(224, 108, 117);">g-input-number</span> <span style="color: rgb(209, 154, 102);">v-model</span>="<span style="color: rgb(224, 108, 117);">number</span>" :<span style="color: rgb(209, 154, 102);">min</span>="<span style="color: rgb(209, 154, 102);">0</span>" :<span style="color: rgb(209, 154, 102);">max</span>="<span style="color: rgb(209, 154, 102);">10</span>" &gt;&lt;/<span style="color: rgb(224, 108, 117);">g-input-number</span>&gt;</p>',
            basicUsageJs: '<p><span style="color: rgb(97, 175, 239);">data</span>() {</p><p>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color: rgb(198, 120, 221);">return</span> {</p><p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span style="color: rgb(224, 108, 117);">number</span>: <span style="color: rgb(209, 154, 102);">0</span>,</p><p>&nbsp; &nbsp; &nbsp; &nbsp; }</p><p>}</p>',
            eventHTML: '<p>&lt;<span style="color: rgb(224, 108, 117);">g-input-number</span> <span style="color: rgb(209, 154, 102);">v-model</span>="<span style="color: rgb(224, 108, 117);">number</span>" :<span style="color: rgb(209, 154, 102);">min</span>="<span style="color: rgb(209, 154, 102);">0</span>" :<span style="color: rgb(209, 154, 102);">max</span>="<span style="color: rgb(209, 154, 102);">10</span>" @<span style="color: rgb(209, 154, 102);">change</span>="<span style="color: rgb(224, 108, 117);">inputChange</span>"&gt;&lt;/<span style="color: rgb(224, 108, 117);">g-input-number</span>&gt;</p>',
            eventJs: '<p><span style="color: rgb(224, 108, 117);">methods</span>: {</p><p>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color: rgb(97, 175, 239);">inputChange</span>() {</p><p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span style="color: rgb(229, 192, 123);">console</span>.<span style="color: rgb(97, 175, 239);">log</span>(<span style="color: rgb(229, 192, 123);">this</span>.<span style="color: rgb(224, 108, 117);">number</span>);</p><p>&nbsp; &nbsp; &nbsp; &nbsp; }</p><p>}</p>',
            tableData: [
                {
                    parameter: 'v-model',
                    explain: '当前数值',
                    type: 'Number',
                    select: '-',
                    default: '-'
                },
                {
                    parameter: 'min',
                    explain: '计数器最小值',
                    type: 'Number',
                    select: '-',
                    default: '-'
                },
                {
                    parameter: 'max',
                    explain: '计数器最大值',
                    type: 'Number',
                    select: '-',
                    default: '-'
                }
            ],
            event: [
                {
                    eventName: 'change',
                    explain: '当数值发生改变时调用',
                    callBackPara: '-'
                }
            ]
        }
    },
    methods: {
        inputChange() {
            console.log(this.number);
        }
    }
}
</script>

<style scoped>

</style>