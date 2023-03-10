<template>
    <div>
        <div class="title">
            开关
        </div>
        <div class="secondTitle">
            基础用法
        </div>
        <g-switch v-model="switchOpen"></g-switch>
        <Code :js="basicUsageJs" :html="basicUsageHTML"></Code>
        <div class="secondTitle">
            设置开关两侧文本
        </div>
        <g-switch activeText="开启" inactiveText="关闭" v-model="switchOpen2"></g-switch>
        <Code :js="textJs" :html="textHTML"></Code>
        <div class="secondTitle">
            开关事件
        </div>
        <g-switch v-model="switchOpen3" @change="swiChange"></g-switch>
        <Code :js="eventJs" :html="eventHTML"></Code>
        <div class="tabelTitle">
            switch参数
        </div>
        <g-table :data="tableData" class="table">
            <g-table-column prop="parameter" label="参数" :width="100"></g-table-column>
            <g-table-column prop="explain" label="解释" :width="200"></g-table-column>
            <g-table-column prop="type" label="数据类型" :width="100"></g-table-column>
            <g-table-column prop="select" label="可选值" :width="100"></g-table-column>
            <g-table-column prop="default" label="默认值" :width="100"></g-table-column>
        </g-table>
    </div>
</template>

<script>
export default {
    data() {
        return {
            switchOpen: false,
            switchOpen2: false,
            switchOpen3: false,
            basicUsageJs: '<p><span style="color: rgb(97, 175, 239);">data</span>() {</p><p>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color: rgb(198, 120, 221);">return</span> {</p><p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span style="color: rgb(224, 108, 117);">switchOpen</span>: <span style="color: rgb(209, 154, 102);">false</span></p><p>&nbsp; &nbsp; &nbsp; &nbsp; }</p><p>}</p>',
            basicUsageHTML: '<p>&lt;<span style="color: rgb(224, 108, 117);">g-switch</span> <span style="color: rgb(209, 154, 102);">v-model</span>="<span style="color: rgb(224, 108, 117);">switchOpen</span>"&gt;&lt;/<span style="color: rgb(224, 108, 117);">g-switch</span>&gt;</p>',
            textJs: '<p><span style="color: rgb(97, 175, 239);">data</span>() {</p><p>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color: rgb(198, 120, 221);">return</span> {</p><p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span style="color: rgb(224, 108, 117);">switchOpen2</span>: <span style="color: rgb(209, 154, 102);">false</span></p><p>&nbsp; &nbsp; &nbsp; &nbsp; }</p><p>}</p>',
            textHTML: '<p>&lt;<span style="color: rgb(224, 108, 117);">g-switch</span> <span style="color: rgb(209, 154, 102);">activeText</span>=<span style="color: rgb(152, 195, 121);">"开启"</span> <span style="color: rgb(209, 154, 102);">inactiveText</span>=<span style="color: rgb(152, 195, 121);">"关闭"</span> <span style="color: rgb(209, 154, 102);">v-model</span>="<span style="color: rgb(224, 108, 117);">switchOpen2</span>"&gt;&lt;/<span style="color: rgb(224, 108, 117);">g-switch</span>&gt;</p>',
            eventJs: '<p><span style="color: rgb(224, 108, 117);">methods</span>: {</p><p>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color: rgb(97, 175, 239);">swiChange</span>() {</p><p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span style="color: rgb(229, 192, 123);">console</span>.<span style="color: rgb(97, 175, 239);">log</span>(<span style="color: rgb(229, 192, 123);">this</span>.<span style="color: rgb(224, 108, 117);">switchOpen3</span>);</p><p>&nbsp; &nbsp; &nbsp; &nbsp; }</p><p>}</p>',
            eventHTML: '<p>&lt;<span style="color: rgb(224, 108, 117);">g-switch</span> <span style="color: rgb(209, 154, 102);">v-model</span>="<span style="color: rgb(224, 108, 117);">switchOpen3</span>" @<span style="color: rgb(209, 154, 102);">change</span>="<span style="color: rgb(224, 108, 117);">swiChange</span>"&gt;&lt;/<span style="color: rgb(224, 108, 117);">g-switch</span>&gt;</p>',
            tableData: [
                {
                    parameter: 'v-model',
                    explain: '绑定值',
                    type: 'Boolean',
                    select: 'true/false',
                    default: '-'
                },
                {
                    parameter: 'activeText',
                    explain: '打开文字描述',
                    type: 'String',
                    select: '-',
                    default: '-'
                },
                {
                    parameter: 'inactiveText',
                    explain: '关闭文字描述',
                    type: 'String',
                    select: '-',
                    default: '-'
                },
                {
                    parameter: 'disabled',
                    explain: '是否禁用',
                    type: 'Boolean',
                    select: 'true/false',
                    default: 'false'
                }
            ],
        }
    },
    methods: {
        swiChange() {
            console.log(this.switchOpen3);
        }
    }
}
</script>

<style scoped>

</style>