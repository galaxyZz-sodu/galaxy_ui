<template>
    <div>
      <div class="title">
            穿梭框
        </div>
        <div class="secondTitle">
            基础用法
        </div>
        <g-transfer :isDrag="true" :width="200" :height="150" v-model="value" :data="data"></g-transfer>
        <g-button style="margin-top: 20px;" @click="getValue">获取value</g-button>
        <Code :js="basicUsageJs" :html="basicUsageHTML"></Code>
        <div class="tabelTitle">
            transfer参数
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
      const generateData = () => {
        const data = [];
        for (let i = 1; i <= 15; i++) {
          data.push({
            key: i,
            label: '备选项' + i,
            disabled: i % 4 === 0
          });
        }
        return data;
      };
      return {
        data: generateData(),
        value: [1, 4],
        basicUsageJs: `<p><span style="color: rgb(97, 175, 239);">data</span>() {</p><p>&nbsp; &nbsp; &nbsp; <span style="color: rgb(198, 120, 221);">const</span> <span style="color: rgb(97, 175, 239);">generateData</span> <span style="color: rgb(86, 182, 194);">=</span> () <span style="color: rgb(198, 120, 221);">=&gt;</span> {</p><p>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color: rgb(198, 120, 221);">const</span> <span style="color: rgb(229, 192, 123);">data</span> <span style="color: rgb(86, 182, 194);">=</span> [];</p><p>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color: rgb(198, 120, 221);">for</span> (<span style="color: rgb(198, 120, 221);">let</span> <span style="color: rgb(224, 108, 117);">i</span> <span style="color: rgb(86, 182, 194);">=</span> <span style="color: rgb(209, 154, 102);">1</span>; <span style="color: rgb(224, 108, 117);">i</span> <span style="color: rgb(86, 182, 194);">&lt;=</span> <span style="color: rgb(209, 154, 102);">15</span>; <span style="color: rgb(224, 108, 117);">i</span><span style="color: rgb(86, 182, 194);">++</span>) {</p><p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span style="color: rgb(229, 192, 123);">data</span>.<span style="color: rgb(97, 175, 239);">push</span>({</p><p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span style="color: rgb(224, 108, 117);">key</span>: <span style="color: rgb(224, 108, 117);">i</span>,</p><p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span style="color: rgb(224, 108, 117);">label</span>: <span style="color: rgb(152, 195, 121);">'备选项'</span> <span style="color: rgb(86, 182, 194);">+</span> <span style="color: rgb(224, 108, 117);">i</span>,</p><p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span style="color: rgb(224, 108, 117);">disabled</span>: <span style="color: rgb(224, 108, 117);">i</span> <span style="color: rgb(86, 182, 194);">%</span> <span style="color: rgb(209, 154, 102);">4</span> <span style="color: rgb(86, 182, 194);">===</span> <span style="color: rgb(209, 154, 102);">0</span></p><p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; });</p><p>&nbsp; &nbsp; &nbsp; &nbsp; }</p><p>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color: rgb(198, 120, 221);">return</span> <span style="color: rgb(229, 192, 123);">data</span>;</p><p>&nbsp; &nbsp; &nbsp; };</p><p>&nbsp; &nbsp; &nbsp; <span style="color: rgb(198, 120, 221);">return</span> {</p><p>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color: rgb(224, 108, 117);">data</span>: <span style="color: rgb(97, 175, 239);">generateData</span>(),</p><p>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color: rgb(224, 108, 117);">value</span>: [<span style="color: rgb(209, 154, 102);">1</span>, <span style="color: rgb(209, 154, 102);">4</span>],</p><p>&nbsp; &nbsp; &nbsp; };</p><p>},</p>`,
        basicUsageHTML: `<p>&lt;<span style="color: rgb(224, 108, 117);">g-transfer</span> <span style="color: rgb(209, 154, 102);">v-model</span>="<span style="color: rgb(224, 108, 117);">value</span>" :<span style="color: rgb(209, 154, 102);">data</span>="<span style="color: rgb(224, 108, 117);">data</span>"&gt;&lt;/<span style="color: rgb(224, 108, 117);">g-transfer</span>&gt;</p>`,
        tableData: [
                {
                    parameter: 'v-model',
                    explain: '绑定值',
                    type: 'Array',
                    select: '-',
                    default: '-'
                },
                {
                    parameter: 'data',
                    explain: 'Transfer数据源',
                    type: 'array[{ key, label, disabled }]',
                    select: '-',
                    default: '[]'
                },
                {
                    parameter: 'isDrag',
                    explain: '选项是否可拖拽',
                    type: 'Boolean',
                    select: '-',
                    default: 'false'
                },
                {
                    parameter: 'width',
                    explain: 'Transfer宽度',
                    type: 'Number',
                    select: '-',
                    default: '150'
                },
                {
                    parameter: 'height',
                    explain: 'Transfer高度',
                    type: 'Number',
                    select: '-',
                    default: '200'
                },
            ],
      };
    },
    methods: {
      getValue() {
        console.log(this.value);
      }
    }
}
</script>

<style scoped>

</style>