<template>
    <div>
        <div class="title">
            上传
        </div>
        <div class="secondTitle">
            基础用法
        </div>
        <g-upload :showPicture="true" @handleSucceed="getSucceed" :limit="3" @handleDelete="getDelete" @exceed="getExceed"></g-upload>
        <Code :js="basicUsageJs" :html="basicUsageHTML"></Code>
        <div class="tabelTitle">
            upload参数
        </div>
        <g-table :data="tableData" class="table">
            <g-table-column prop="parameter" label="参数" :width="100"></g-table-column>
            <g-table-column prop="explain" label="解释" :width="200"></g-table-column>
            <g-table-column prop="type" label="数据类型" :width="100"></g-table-column>
            <g-table-column prop="select" label="可选值" :width="100"></g-table-column>
            <g-table-column prop="default" label="默认值" :width="100"></g-table-column>
        </g-table>
        <div class="tabelTitle">
            upload事件
        </div>
        <g-table :data="event" class="table">
            <g-table-column prop="eventName" label="事件名" :width="150"></g-table-column>
            <g-table-column prop="explain" label="解释" :width="250"></g-table-column>
            <g-table-column prop="callBackPara" label="回调参数" :width="200"></g-table-column>
        </g-table>
        <div class="tabelTitle">
            step插槽
        </div>
        <g-table :data="slotData" class="table">
            <g-table-column prop="parameter" label="参数" :width="200"></g-table-column>
            <g-table-column prop="explain" label="解释" :width="300"></g-table-column>
        </g-table>
    </div>
</template>

<script>
export default {
    data() {
        return {
            basicUsageJs: `<p><span style="color: rgb(224, 108, 117);">methods</span>: {</p><p>&nbsp; &nbsp; <span style="color: rgb(97, 175, 239);">getSucceed</span>(<span style="color: rgb(224, 108, 117);">flieList</span>) {</p><p>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color: rgb(229, 192, 123);">console</span>.<span style="color: rgb(97, 175, 239);">log</span>(<span style="color: rgb(152, 195, 121);">'完成'</span>, <span style="color: rgb(224, 108, 117);">flieList</span>);</p><p>&nbsp; &nbsp; },</p><p>&nbsp; &nbsp; <span style="color: rgb(97, 175, 239);">getDelete</span>(<span style="color: rgb(224, 108, 117);">fileList</span>) {</p><p>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color: rgb(229, 192, 123);">console</span>.<span style="color: rgb(97, 175, 239);">log</span>(<span style="color: rgb(152, 195, 121);">'删除'</span>, <span style="color: rgb(224, 108, 117);">fileList</span>);</p><p>&nbsp; &nbsp; },</p><p>&nbsp; &nbsp; <span style="color: rgb(97, 175, 239);">getExceed</span>() {</p><p>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color: rgb(229, 192, 123);">console</span>.<span style="color: rgb(97, 175, 239);">log</span>(<span style="color: rgb(152, 195, 121);">'超出限制'</span>)</p><p>&nbsp; &nbsp; }</p><p>}</p>`,
            basicUsageHTML: `<p>&lt;<span style="color: rgb(224, 108, 117);">g-upload</span> :<span style="color: rgb(209, 154, 102);">showPicture</span>="<span style="color: rgb(209, 154, 102);">true</span>" @<span style="color: rgb(209, 154, 102);">handleSucceed</span>="<span style="color: rgb(224, 108, 117);">getSucceed</span>" :<span style="color: rgb(209, 154, 102);">limit</span>="<span style="color: rgb(209, 154, 102);">3</span>" @<span style="color: rgb(209, 154, 102);">handleDelete</span>="<span style="color: rgb(224, 108, 117);">getDelete</span>" @<span style="color: rgb(209, 154, 102);">exceed</span>="<span style="color: rgb(224, 108, 117);">getExceed</span>"&gt;</p><p>&lt;/<span style="color: rgb(224, 108, 117);">g-upload</span>&gt;</p>`,
            tableData: [
                
                {
                    parameter: 'showPicture',
                    explain: '是否展示图片',
                    type: 'Boolean',
                    select: '-',
                    default: 'false'
                },
                {
                    parameter: 'limit',
                    explain: '文件最大上传数量',
                    type: 'Number',
                    select: '-',
                    default: '-'
                }
            ],
            event: [
                {
                    eventName: 'handleSucceed',
                    explain: '上传成功时触发',
                    callBackPara: '当前已上传文件信息列表'
                },
                {
                    eventName: 'handleDelete',
                    explain: '删除文件时触发',
                    callBackPara: '当前已上传文件信息列表'
                },
                {
                    eventName: 'exceed',
                    explain: '超出数量限制时触发',
                    callBackPara: '-'
                },
            ],
            slotData: [
                {
                    parameter: 'content',
                    explain: '选择框内容'
                },
            ],
        }
    },
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