<template>
    <div>
        <!-- <g-button>Check</g-button> -->
        <div class="title">多选框</div>
        <div class="secondTitle">基础用法</div>
        <g-checkbox v-model="check" @change="changeCheck" :options="options">
        </g-checkbox>
        <div class="thirdTitle">
            template
        </div>
        <div class="code">
            <div v-html="basicUsageHtml"></div>
        </div>
        <div class="thirdTitle">
            javascript
        </div>
        <div class="code">
            <div v-html="basicUsageJs"></div>
        </div>
        <g-table :data="tableData" class="table">
            <g-table-column prop="parameter" label="参数" :width="100"></g-table-column>
            <g-table-column prop="explain" label="解释" :width="200"></g-table-column>
            <g-table-column prop="type" label="数据类型" :width="100"></g-table-column>
            <g-table-column prop="select" label="可选值" :width="100"></g-table-column>
            <g-table-column prop="default" label="默认值" :width="100"></g-table-column>
        </g-table>

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
            options: ['选项一', '选项二'],
            basicUsageHtml: '<p>&lt;<span style="color: rgb(224, 108, 117);">g-checkbox</span> <span style="color: rgb(209, 154, 102);">v-model</span>="<span style="color: rgb(224, 108, 117);">check</span>" :<span style="color: rgb(209, 154, 102);">options</span>="<span style="color: rgb(224, 108, 117);">options</span>"&gt;</p><p>&lt;/<span style="color: rgb(224, 108, 117);">g-checkbox</span>&gt;</p>',
            basicUsageJs: '<p><span style="color: rgb(97, 175, 239);">data</span>() {</p><p>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color: rgb(198, 120, 221);">return</span> {</p><p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<span style="color: rgb(224, 108, 117);">options</span>: [<span style="color: rgb(152, 195, 121);">"选项一"</span>, <span style="color: rgb(152, 195, 121);">"选项二"</span>],</p><p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<span style="color: rgb(224, 108, 117);">check</span>: [],</p><p><span style="color: rgb(224, 108, 117);">&nbsp; &nbsp; &nbsp; &nbsp; }</span></p><p><span style="color: rgb(224, 108, 117);">}</span></p>',
            check: [],
            tableData: [
                {
                    parameter: 'options',
                    explain: '多选框的具体选项',
                    type: 'Array',
                    select: '-',
                    default: '-'
                },
                {
                    parameter: 'v-model',
                    explain: '已选中的项',
                    type: 'Array',
                    select: '-',
                    default: '-'
                }
            ],
            event: [
                {
                    eventName: 'change',
                    explain: '当选项发生改变时调用',
                    callBackPara: '-'
                }
                
            ]
        }
    },
    methods: {
        changeCheck() {
            console.log(this.check);
        }
    }
}
</script>

<style scoped>
    /* .table {
        margin-top: 50px;
    } */
    .code {
        /* margin-top: 5px; */
    }
</style>