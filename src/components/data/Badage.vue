<template>
  <div>
    <div class="title">标记</div>
    <div class="secondTitle">基础用法</div>
    <g-badge :value="value" :max="99" :hidden="false">
      <g-button>消息</g-button>
    </g-badge>
    <Code :js="basicUsageJs" :html="basicUsageHTML"></Code>

    <div class="secondTitle">改变标记颜色</div>
    <g-badge class="color-change" :value="value" :max="99" :hidden="false">
      <g-button>消息</g-button>
    </g-badge>
    <g-badge
      class="color-change"
      type="primary"
      :value="value"
      :max="99"
      :hidden="false"
    >
      <g-button>消息</g-button>
    </g-badge>
    <g-badge
      class="color-change"
      type="warning"
      :value="value"
      :max="99"
      :hidden="false"
    >
      <g-button>消息</g-button>
    </g-badge>
    <Code :jsShow="false" :html="changeColorHTML"></Code>
    <div class="tabelTitle">
        badage参数
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
      value: 4,
      basicUsageJs:
        '<p><span style="color: rgb(97, 175, 239);">data</span>() {</p><p>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color: rgb(198, 120, 221);">return</span> {</p><p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span style="color: rgb(224, 108, 117);">value</span>: <span style="color: rgb(209, 154, 102);">4</span></p><p>&nbsp; &nbsp; &nbsp; &nbsp; }</p><p>}</p>',
      basicUsageHTML:
        '<p>&lt;<span style="color: rgb(224, 108, 117);">g-badge</span> :<span style="color: rgb(209, 154, 102);">value</span>="<span style="color: rgb(224, 108, 117);">value</span>" :<span style="color: rgb(209, 154, 102);">max</span>="<span style="color: rgb(209, 154, 102);">99</span>" :<span style="color: rgb(209, 154, 102);">hidden</span>="<span style="color: rgb(209, 154, 102);">false</span>"&gt;</p><p>&nbsp; &nbsp; &nbsp; &lt;<span style="color: rgb(224, 108, 117);">g-button</span>&gt;消息&lt;/<span style="color: rgb(224, 108, 117);">g-button</span>&gt;</p><p>&lt;/<span style="color: rgb(224, 108, 117);">g-badge</span>&gt;</p>',
      changeColorJs: "",
      changeColorHTML:
        '<p>&lt;<span style="color: rgb(224, 108, 117);">g-badge</span> :<span style="color: rgb(209, 154, 102);">value</span>="<span style="color: rgb(224, 108, 117);">value</span>" :<span style="color: rgb(209, 154, 102);">max</span>="<span style="color: rgb(209, 154, 102);">99</span>" :<span style="color: rgb(209, 154, 102);">hidden</span>="<span style="color: rgb(209, 154, 102);">false</span>"&gt;</p><p>&nbsp; &nbsp; &nbsp; &lt;<span style="color: rgb(224, 108, 117);">g-button</span>&gt;消息&lt;/<span style="color: rgb(224, 108, 117);">g-button</span>&gt;</p><p>&lt;/<span style="color: rgb(224, 108, 117);">g-badge</span>&gt;</p><p>&lt;<span style="color: rgb(224, 108, 117);">g-badge</span> <span style="color: rgb(209, 154, 102);">type</span>=<span style="color: rgb(152, 195, 121);">"primary"</span> :<span style="color: rgb(209, 154, 102);">value</span>="<span style="color: rgb(224, 108, 117);">value</span>" :<span style="color: rgb(209, 154, 102);">max</span>="<span style="color: rgb(209, 154, 102);">99</span>" :<span style="color: rgb(209, 154, 102);">hidden</span>="<span style="color: rgb(209, 154, 102);">false</span>"&gt;</p><p>&nbsp; &nbsp; &nbsp; &lt;<span style="color: rgb(224, 108, 117);">g-button</span>&gt;消息&lt;/<span style="color: rgb(224, 108, 117);">g-button</span>&gt;</p><p>&lt;/<span style="color: rgb(224, 108, 117);">g-badge</span>&gt;</p><p>&lt;<span style="color: rgb(224, 108, 117);">g-badge</span> <span style="color: rgb(209, 154, 102);">type</span>=<span style="color: rgb(152, 195, 121);">"warning"</span> :<span style="color: rgb(209, 154, 102);">value</span>="<span style="color: rgb(224, 108, 117);">value</span>" :<span style="color: rgb(209, 154, 102);">max</span>="<span style="color: rgb(209, 154, 102);">99</span>" :<span style="color: rgb(209, 154, 102);">hidden</span>="<span style="color: rgb(209, 154, 102);">false</span>"&gt;</p><p>&nbsp; &nbsp; &nbsp; &lt;<span style="color: rgb(224, 108, 117);">g-button</span>&gt;消息&lt;/<span style="color: rgb(224, 108, 117);">g-button</span>&gt;</p><p>&lt;/<span style="color: rgb(224, 108, 117);">g-badge</span>&gt;</p>',
      tableData: [
          {
              parameter: 'value',
              explain: '标记显示的数值',
              type: 'Number',
              select: '-',
              default: '-'
          },
          {
              parameter: 'max',
              explain: '标记显示的最大数值',
              type: 'Number',
              select: '-',
              default: '-'
          },
          {
              parameter: 'hidden',
              explain: '标记是否显示',
              type: 'Boolean',
              select: 'true/false',
              default: 'false'
          },
      ],
    };
  },
};
</script>

<style scoped>
.color-change {
  margin-right: 30px;
}
</style>