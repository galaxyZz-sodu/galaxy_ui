<template>
  <div>
    <div class="title">描述列表</div>
    <div class="secondTitle">基础用法</div>
    <div class="block">
        <g-descriptions title="学生信息">
          <g-descriptions-item label="年龄">24</g-descriptions-item>
          <g-descriptions-item label="性别">男</g-descriptions-item>
          <g-descriptions-item label="专业"><g-tag type="success">计算机科学与技术</g-tag></g-descriptions-item>
          <g-descriptions-item label="班级">一班</g-descriptions-item>
        </g-descriptions>
    </div>
    <Code :jsShow="false" :html="basicUsageHTML"></Code>
    <div class="tabelTitle">
      descriptions参数
    </div>
    <g-table :data="tableData" class="table">
        <g-table-column prop="parameter" label="参数" :width="100"></g-table-column>
        <g-table-column prop="explain" label="解释" :width="150"></g-table-column>
        <g-table-column prop="type" label="数据类型" :width="80"></g-table-column>
        <g-table-column prop="select" label="可选值" :width="170"></g-table-column>
        <g-table-column prop="default" label="默认值" :width="100"></g-table-column>
    </g-table>
    <div class="tabelTitle">
      descriptionsItem参数
    </div>
    <g-table :data="itemData" class="table">
        <g-table-column prop="parameter" label="参数" :width="100"></g-table-column>
        <g-table-column prop="explain" label="解释" :width="150"></g-table-column>
        <g-table-column prop="type" label="数据类型" :width="80"></g-table-column>
        <g-table-column prop="select" label="可选值" :width="170"></g-table-column>
        <g-table-column prop="default" label="默认值" :width="100"></g-table-column>
    </g-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      basicUsageHTML: `<p>&lt;<span style="color: rgb(224, 108, 117);">g-descriptions</span>&nbsp;<span style="color: rgb(209, 154, 102);">title</span>=<span style="color: rgb(152, 195, 121);">"学生信息"</span>&nbsp;&gt;</p><p>&nbsp;&nbsp;&nbsp;&lt;<span style="color: rgb(224, 108, 117);">g-descriptions-item</span>&nbsp;<span style="color: rgb(209, 154, 102);">label</span>=<span style="color: rgb(152, 195, 121);">"年龄"</span>&gt;24&lt;/<span style="color: rgb(224, 108, 117);">g-descriptions-item</span>&gt;</p><p>&nbsp;&nbsp;&nbsp;&lt;<span style="color: rgb(224, 108, 117);">g-descriptions-item</span>&nbsp;<span style="color: rgb(209, 154, 102);">label</span>=<span style="color: rgb(152, 195, 121);">"性别"</span>&gt;男&lt;/<span style="color: rgb(224, 108, 117);">g-descriptions-item</span>&gt;</p><p>&nbsp;&nbsp;&nbsp;&lt;<span style="color: rgb(224, 108, 117);">g-descriptions-item</span>&nbsp;<span style="color: rgb(209, 154, 102);">label</span>=<span style="color: rgb(152, 195, 121);">"专业"</span>&gt;</p><p> &lt;<span style="color: rgb(224, 108, 117);">g-tag</span>&nbsp;<span style="color: rgb(209, 154, 102);">type</span>=<span style="color: rgb(152, 195, 121);">"success"</span>&gt;计算机科学与技术&lt;/<span style="color: rgb(224, 108, 117);">g-tag</span>&gt;</p><p> &lt;/<span style="color: rgb(224, 108, 117);">g-descriptions-item</span>&gt;</p><p>&nbsp;&nbsp;&nbsp;&lt;<span style="color: rgb(224, 108, 117);">g-descriptions-item</span>&nbsp;<span style="color: rgb(209, 154, 102);">label</span>=<span style="color: rgb(152, 195, 121);">"班级"</span>&gt;一班&lt;/<span style="color: rgb(224, 108, 117);">g-descriptions-item</span>&gt;</p><p>&lt;/<span style="color: rgb(224, 108, 117);">g-descriptions</span>&gt;</p>`,
      tableData: [
                {
                    parameter: 'title',
                    explain: '标题',
                    type: 'String',
                    select: '-',
                    default: '-'
                },
                {
                    parameter: 'direction',
                    explain: '信息排列方向',
                    type: 'String',
                    select: 'vertical/horizontal',
                    default: 'horizontal'
                },
                {
                    parameter: 'colunm',
                    explain: '信息列数',
                    type: 'Number',
                    select: '-',
                    default: '3'
                },
                
            ],
            itemData: [
              {
                    parameter: 'label',
                    explain: '信息列数',
                    type: 'Number',
                    select: '-',
                    default: '3'
                },
            ]
    }
  }
};
</script>

<style scoped>
.block {
    box-sizing: border-box;
    width: 700px;
    border: 1px solid #c0c4cc;
    border-radius: 5px;
    padding: 0px 15px;
}
</style>