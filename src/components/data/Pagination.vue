<template>
  <div>
    <div class="title">分页</div>
    <div class="secondTitle">基础用法</div>
    <g-pagination
      :total="200"
      :defaultPageSize="10"
      :defaultCurrentPage="currentPage"
      @change="pagiChange"
    ></g-pagination>
    <Code :js="basicUsageJs" :html="basicUsageHTML"></Code>
    <div class="tabelTitle">
        pagination事件
    </div>
    <TableScroll>
      <g-table :data="tableData" class="table">
        <g-table-column
          prop="parameter"
          label="参数"
          :width="170"
        ></g-table-column>
        <g-table-column prop="explain" label="解释" :width="160"></g-table-column>
        <g-table-column
          prop="type"
          label="数据类型"
          :width="100"
        ></g-table-column>
        <g-table-column
          prop="select"
          label="可选值"
          :width="100"
        ></g-table-column>
        <g-table-column
          prop="default"
          label="默认值"
          :width="100"
        ></g-table-column>
      </g-table>
    </TableScroll>
    
    <div class="tabelTitle">
        pagination事件
    </div>
    <TableScroll>
      <g-table :data="event" class="table">
        <g-table-column
          prop="eventName"
          label="参数"
          :width="100"
        ></g-table-column>
        <g-table-column prop="explain" label="解释" :width="400"></g-table-column>
        <g-table-column
          prop="callBackPara"
          label="回调参数"
          :width="100"
        ></g-table-column>
      </g-table>
    </TableScroll>
    
    <!-- <g-button @click="click">12</g-button> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      basicUsageHTML:
        '<p>&lt;<span style="color: rgb(224, 108, 117);">g-pagination</span> :<span style="color: rgb(209, 154, 102);">total</span>="<span style="color: rgb(209, 154, 102);">200</span>" :<span style="color: rgb(209, 154, 102);">defaultPageSize</span>="<span style="color: rgb(209, 154, 102);">10</span>" :<span style="color: rgb(209, 154, 102);">defaultCurrentPage</span>="<span style="color: rgb(224, 108, 117);">5</span>" @<span style="color: rgb(209, 154, 102);">change</span>="<span style="color: rgb(224, 108, 117);">pagiChange</span>"&gt;&lt;/<span style="color: rgb(224, 108, 117);">g-pagination</span>&gt;</p>',
      basicUsageJs:
        '<p><span style="color: rgb(224, 108, 117);">methods</span>: {</p><p>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color: rgb(97, 175, 239);">pagiChange</span>(<span style="color: rgb(224, 108, 117);">page</span>) {</p><p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span style="color: rgb(229, 192, 123);">console</span>.<span style="color: rgb(97, 175, 239);">log</span>(<span style="color: rgb(224, 108, 117);">page</span>);</p><p>&nbsp; &nbsp; &nbsp; &nbsp; }</p><p>}</p>',
      currentPage: 5,
      tableData: [
        {
          parameter: "total",
          explain: "数据总数",
          type: "Number",
          select: "-",
          default: "100",
        },
        {
          parameter: "defaultPageSize",
          explain: "默认每页数据的条数",
          type: "Number",
          select: "-",
          default: "10",
        },
        {
          parameter: "defaultCurrentPage",
          explain: "默认当前页数",
          type: "Number",
          select: "-",
          default: "1",
        },
      ],
      event: [
        {
          eventName: "change",
          explain: "当页码发生改变时调用",
          callBackPara: "改变后的页码",
        },
      ],
    };
  },
  methods: {
    pagiChange(page) {
      console.log(page);
    },
  },
};
</script>

<style scoped>
</style>