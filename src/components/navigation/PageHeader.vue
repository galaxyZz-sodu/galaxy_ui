<template>
  <div>
    <div class="title">页头</div>
    <div class="secondTitle">基础用法</div>
    <g-pageHeader content="点击返回" @back="goBack"> </g-pageHeader>
    <Code :js="basicUsageJs" :html="basicUsageHTML"></Code>
    <!-- <div class="secondTitle">参数</div> -->
    <div class="tabelTitle">
        pageHeader参数
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
    
        <!-- <div class="secondTitle">事件</div> -->
        <div class="tabelTitle">
            pageHeader事件
        </div>
        <TableScroll>
            <g-table :data="event" class="table">
                <g-table-column prop="eventName" label="事件名称" :width="100"></g-table-column>
                <g-table-column prop="explain" label="解释" :width="300"></g-table-column>
                <g-table-column prop="callBackPara" label="回调参数" :width="200"></g-table-column>
            </g-table>
        </TableScroll>
        
        <!-- <div class="secondTitle">插槽</div> -->
        <div class="tabelTitle">
            pageHeader插槽
        </div>
        <TableScroll>
            <g-table :data="slot" class="table">
                <g-table-column prop="eventName" label="插槽名称" :width="300"></g-table-column>
                <g-table-column prop="explain" label="解释" :width="300"></g-table-column>
            </g-table>
        </TableScroll>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
                
                {
                    parameter: 'content',
                    explain: '内容区文本',
                    type: 'String',
                    select: '-',
                    default: '-'
                }
            ],
            event: [
                {
                    eventName: 'back',
                    explain: '按返回按钮时触发',
                    callBackPara: '-'
                }
            ],
            slot: [
                {
                    eventName: 'title',
                    explain: '标题内容',
                },
                {
                    eventName: 'content',
                    explain: '内容',
                }
            ],
        basicUsageJs: `<p><span style="color: rgb(224, 108, 117);">methods</span>: {</p><p>&nbsp; &nbsp; <span style="color: rgb(97, 175, 239);">goBack</span>() {</p><p>&nbsp; &nbsp; &nbsp; <span style="color: rgb(229, 192, 123);">console</span>.<span style="color: rgb(97, 175, 239);">log</span>(<span style="color: rgb(152, 195, 121);">"返回"</span>);</p><p>&nbsp; &nbsp; },</p><p>}</p>`,
        basicUsageHTML: `<p>&lt;<span style="color: rgb(224, 108, 117);">g-pageHeader</span> <span style="color: rgb(209, 154, 102);">content</span>=<span style="color: rgb(152, 195, 121);">"点击返回"</span> @<span style="color: rgb(209, 154, 102);">back</span>="<span style="color: rgb(224, 108, 117);">goBack</span>"&gt; &lt;/<span style="color: rgb(224, 108, 117);">g-pageHeader</span>&gt;</p>`
    };
  },
  methods: {
    goBack() {
      console.log("返回");
    },
  }
};
</script>

<style scoped>
</style>