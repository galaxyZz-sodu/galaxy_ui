<template>
  <div>
    <div class="title">进度条</div>
    <div class="secondTitle">基础用法</div>
    <g-progress :percentage="percent" :strokeWidth="10"></g-progress>
    <g-button class="btn" @click="reduce">减少</g-button>
    <g-button class="btn" @click="increase">增加</g-button>
    <Code :js="basicUsageJs" :html="basicUsageHTML"></Code>
    <div class="tabelTitle">
        progress参数
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
    
  </div>
</template>

<script>
export default {
    data() {
        return {
            percent: 0,
            basicUsageJs: '<p><span style="color: rgb(97, 175, 239);">data</span>() {</p><p>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color: rgb(198, 120, 221);">return</span> {</p><p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span style="color: rgb(224, 108, 117);">percent</span>: <span style="color: rgb(209, 154, 102);">0</span></p><p>&nbsp; &nbsp; &nbsp; &nbsp; }</p><p>},</p><p><span style="color: rgb(224, 108, 117);">methods</span>: {</p><p>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color: rgb(97, 175, 239);">reduce</span>() {</p><p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span style="color: rgb(198, 120, 221);">if</span> (<span style="color: rgb(229, 192, 123);">this</span>.<span style="color: rgb(224, 108, 117);">percent</span><span style="color: rgb(86, 182, 194);">&lt;=</span><span style="color: rgb(209, 154, 102);">0</span>) {</p><p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span style="color: rgb(229, 192, 123);">this</span>.<span style="color: rgb(224, 108, 117);">percent</span> <span style="color: rgb(86, 182, 194);">==</span> <span style="color: rgb(209, 154, 102);">0</span>;</p><p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; } <span style="color: rgb(198, 120, 221);">else</span> {</p><p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span style="color: rgb(229, 192, 123);">this</span>.<span style="color: rgb(224, 108, 117);">percent</span><span style="color: rgb(86, 182, 194);">-=</span><span style="color: rgb(209, 154, 102);">10</span></p><p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; }</p><p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </p><p>&nbsp; &nbsp; &nbsp; &nbsp; },</p><p>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color: rgb(97, 175, 239);">increase</span>() {</p><p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span style="color: rgb(198, 120, 221);">if</span> (<span style="color: rgb(229, 192, 123);">this</span>.<span style="color: rgb(224, 108, 117);">percent</span><span style="color: rgb(86, 182, 194);">&gt;=</span><span style="color: rgb(209, 154, 102);">100</span>) {</p><p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span style="color: rgb(229, 192, 123);">this</span>.<span style="color: rgb(224, 108, 117);">percent</span> <span style="color: rgb(86, 182, 194);">==</span> <span style="color: rgb(209, 154, 102);">100</span>;</p><p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; } <span style="color: rgb(198, 120, 221);">else</span> {</p><p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span style="color: rgb(229, 192, 123);">this</span>.<span style="color: rgb(224, 108, 117);">percent</span><span style="color: rgb(86, 182, 194);">+=</span><span style="color: rgb(209, 154, 102);">10</span>;</p><p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; }</p><p>&nbsp; &nbsp; &nbsp; &nbsp; }</p><p>}</p>',
            basicUsageHTML: '<p>&lt;<span style="color: rgb(224, 108, 117);">g-progress</span> :<span style="color: rgb(209, 154, 102);">percentage</span>="<span style="color: rgb(224, 108, 117);">percent</span>" :<span style="color: rgb(209, 154, 102);">strokeWidth</span>="<span style="color: rgb(209, 154, 102);">10</span>"&gt;&lt;/<span style="color: rgb(224, 108, 117);">g-progress</span>&gt;</p><p>&lt;<span style="color: rgb(224, 108, 117);">g-button</span> <span style="color: rgb(209, 154, 102);">class</span>=<span style="color: rgb(152, 195, 121);">"btn"</span> @<span style="color: rgb(209, 154, 102);">click</span>="<span style="color: rgb(224, 108, 117);">reduce</span>"&gt;减少&lt;/<span style="color: rgb(224, 108, 117);">g-button</span>&gt;</p><p>&lt;<span style="color: rgb(224, 108, 117);">g-button</span> <span style="color: rgb(209, 154, 102);">class</span>=<span style="color: rgb(152, 195, 121);">"btn"</span> @<span style="color: rgb(209, 154, 102);">click</span>="<span style="color: rgb(224, 108, 117);">increase</span>"&gt;增加&lt;/<span style="color: rgb(224, 108, 117);">g-button</span>&gt;</p>',
            tableData: [
                {
                    parameter: 'percentage',
                    explain: '当前进度数',
                    type: 'Number',
                    select: '-',
                    default: '0'
                },
                {
                    parameter: 'strokeWidth',
                    explain: '进度条宽度',
                    type: 'Number',
                    select: '-',
                    default: '6'
                }
            ],
        }
    },
    methods: {
        reduce() {
            if (this.percent<=0) {
                this.percent == 0;
            } else {
                this.percent-=10
            }
            
        },
        increase() {
            if (this.percent>=100) {
                this.percent == 100;
            } else {
                this.percent+=10;
            }
        }
    }
};
</script>

<style scoped>
.btn {
    margin: 10px;
}
</style>