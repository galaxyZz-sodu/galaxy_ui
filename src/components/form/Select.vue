<template>
    <div>
        <div class="title">
            选择器
        </div>
        <div class="secondTitle">
            基础用法
        </div>
        <g-select v-model="selectValue" @change="selectChange" :selects="fruits"> 
        </g-select>
        <Code :js="basicUsageJs" :html="basicUsageHTML"></Code>
        <div class="tabelTitle">
            select参数
        </div>
        <TableScroll>
            <g-table :data="tableData" class="table">
                <g-table-column prop="parameter" label="参数" :width="100"></g-table-column>
                <g-table-column prop="explain" label="解释" :width="200"></g-table-column>
                <g-table-column prop="type" label="数据类型" :width="100"></g-table-column>
                <g-table-column prop="select" label="可选值" :width="100"></g-table-column>
                <g-table-column prop="default" label="默认值" :width="100"></g-table-column>
            </g-table>
        </TableScroll>
        <div class="tabelTitle">
            select事件
        </div>
        <TableScroll>
            <g-table :data="event" class="table">
                <g-table-column prop="eventName" label="参数" :width="100"></g-table-column>
                <g-table-column prop="explain" label="解释" :width="400"></g-table-column>
                <g-table-column prop="callBackPara" label="回调参数" :width="100"></g-table-column>
            </g-table>
        </TableScroll>
    </div>
</template>

<script>
export default {
    data() {
        return {
            selectValue: '',
            fruits: ['苹果', '香蕉', '西瓜'],
            basicUsageJs: '<p><span style="color: rgb(97, 175, 239);">data</span>() {</p><p>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color: rgb(198, 120, 221);">return</span> {</p><p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span style="color: rgb(224, 108, 117);">selectValue</span>: <span style="color: rgb(152, 195, 121);">""</span>,</p><p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span style="color: rgb(224, 108, 117);">fruits</span>: [<span style="color: rgb(152, 195, 121);">"苹果"</span>, <span style="color: rgb(152, 195, 121);">"香蕉"</span>, <span style="color: rgb(152, 195, 121);">"西瓜"</span>]</p><p>&nbsp; &nbsp; &nbsp; &nbsp; }</p><p>}</p>',
            basicUsageHTML: '<p>&lt;<span style="color: rgb(224, 108, 117);">g-select</span> <span style="color: rgb(209, 154, 102);">v-model</span>="<span style="color: rgb(224, 108, 117);">selectValue</span>" @<span style="color: rgb(209, 154, 102);">change</span>="<span style="color: rgb(224, 108, 117);">selectChange</span>" :<span style="color: rgb(209, 154, 102);">selects</span>="<span style="color: rgb(224, 108, 117);">fruits</span>"&gt; </p><p>&lt;/<span style="color: rgb(224, 108, 117);">g-select</span>&gt;</p>',
            tableData: [
                {
                    parameter: 'selects',
                    explain: '选择器可选项',
                    type: 'Array',
                    select: '-',
                    default: '-'
                },
                {
                    parameter: 'v-model',
                    explain: '已选中的项',
                    type: 'String',
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
        selectChange() {
            console.log(this.selectChange);
        }
    }
}
</script>

<style scoped>

</style>