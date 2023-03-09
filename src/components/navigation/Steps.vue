<template>
  <div>
    <div class="title">步骤条</div>
    <div class="secondTitle">基础用法</div>
    <g-steps :active="stepActive" style="margin-left: 20px">
      <g-step></g-step>
      <g-step></g-step>
      <g-step></g-step>
      <g-step>
        <template slot="icon">xx</template>
        <template slot="title">步骤4</template>
      </g-step>
    </g-steps>

    <g-button @click="stepActive <= 3 ? stepActive++ : (stepActive = 0)"
      >下一步</g-button>
    <Code :js="basicUsageJs" :html="basicUsageHTML"></Code>
    <div class="tabelTitle">
        steps参数
    </div>
    <g-table :data="stepsData" class="table">
        <g-table-column prop="parameter" label="参数" :width="100"></g-table-column>
        <g-table-column prop="explain" label="解释" :width="150"></g-table-column>
        <g-table-column prop="type" label="数据类型" :width="150"></g-table-column>
        <g-table-column prop="select" label="可选值" :width="150"></g-table-column>
        <g-table-column prop="default" label="默认值" :width="100"></g-table-column>
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
      stepActive: 0,
      basicUsageJs: '<p><span style="color: rgb(97, 175, 239);">data</span>() {</p><p>&nbsp; &nbsp; <span style="color: rgb(198, 120, 221);">return</span> {</p><p>&nbsp; &nbsp; &nbsp; <span style="color: rgb(224, 108, 117);">stepActive</span>: <span style="color: rgb(209, 154, 102);">0</span>,</p><p>&nbsp; &nbsp; };</p><p>}</p>',
      basicUsageHTML: '<p>&lt;<span style="color: rgb(224, 108, 117);">g-steps</span> :<span style="color: rgb(209, 154, 102);">active</span>="<span style="color: rgb(224, 108, 117);">stepActive</span>" <span style="color: rgb(209, 154, 102);">style</span>=<span style="color: rgb(152, 195, 121);">"margin-left: 20px"</span>&gt;</p><p>&nbsp; &nbsp; &nbsp; &lt;<span style="color: rgb(224, 108, 117);">g-step</span>&gt;&lt;/<span style="color: rgb(224, 108, 117);">g-step</span>&gt;</p><p>&nbsp; &nbsp; &nbsp; &lt;<span style="color: rgb(224, 108, 117);">g-step</span>&gt;&lt;/<span style="color: rgb(224, 108, 117);">g-step</span>&gt;</p><p>&nbsp; &nbsp; &nbsp; &lt;<span style="color: rgb(224, 108, 117);">g-step</span>&gt;&lt;/<span style="color: rgb(224, 108, 117);">g-step</span>&gt;</p><p>&nbsp; &nbsp; &nbsp; &lt;<span style="color: rgb(224, 108, 117);">g-step</span>&gt;</p><p>&nbsp; &nbsp; &nbsp; &nbsp; &lt;<span style="color: rgb(224, 108, 117);">template</span> <span style="color: rgb(209, 154, 102);">slot</span>=<span style="color: rgb(152, 195, 121);">"icon"</span>&gt;xx&lt;/<span style="color: rgb(224, 108, 117);">template</span>&gt;</p><p>&nbsp; &nbsp; &nbsp; &nbsp; &lt;<span style="color: rgb(224, 108, 117);">template</span> <span style="color: rgb(209, 154, 102);">slot</span>=<span style="color: rgb(152, 195, 121);">"title"</span>&gt;步骤4&lt;/<span style="color: rgb(224, 108, 117);">template</span>&gt;</p><p>&nbsp; &nbsp; &nbsp; &lt;/<span style="color: rgb(224, 108, 117);">g-step</span>&gt;</p><p>&lt;/<span style="color: rgb(224, 108, 117);">g-steps</span>&gt;</p><p>&nbsp; &nbsp; </p><p>&lt;<span style="color: rgb(224, 108, 117);">g-button</span> @<span style="color: rgb(209, 154, 102);">click</span>="<span style="color: rgb(224, 108, 117);">stepActive</span> <span style="color: rgb(86, 182, 194);">&lt;=</span> <span style="color: rgb(209, 154, 102);">3</span> <span style="color: rgb(198, 120, 221);">?</span> <span style="color: rgb(224, 108, 117);">stepActive</span><span style="color: rgb(86, 182, 194);">++</span> <span style="color: rgb(198, 120, 221);">:</span> (<span style="color: rgb(224, 108, 117);">stepActive</span> <span style="color: rgb(86, 182, 194);">=</span> <span style="color: rgb(209, 154, 102);">0</span>)"&gt;下一步&lt;/<span style="color: rgb(224, 108, 117);">g-button</span>&gt;</p>',
      stepsData: [
          {
              parameter: 'active',
              explain: '当前激活步骤',
              type: 'Number',
              select: '-',
              default: '-'
          },
      ],
      slotData: [
          {
              parameter: 'icon',
              explain: '自定义图标'
          },
          {
              parameter: 'title',
              explain: '自定义标题'
          }
      ],
    };
  }
};
</script>

<style scoped>
</style>