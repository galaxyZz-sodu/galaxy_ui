<template>
  <div>
    <div class="title">走马灯</div>
    <div class="secondTitle">基础用法</div>
    <g-carousel :height="230" :width="450">
      <g-carousel-item v-for="item in 4" :key="item">
        <img style="width: 450px" src="https://pic.5tu.cn/uploads/allimg/2107/pic_5tu_big_6263316_e0beb62983b846b941ba2f62571dd8f4.jpg" alt="">
      </g-carousel-item>
    </g-carousel>
    <Code :jsShow="false" :html="basicUsageHTML"></Code>
    <div class="tabelTitle">
        carousel参数
    </div>
    <TableScroll>
      <g-table :data="tableData" class="table">
          <g-table-column prop="parameter" label="参数" :width="100"></g-table-column>
          <g-table-column prop="explain" label="解释" :width="150"></g-table-column>
          <g-table-column prop="type" label="数据类型" :width="150"></g-table-column>
          <g-table-column prop="select" label="可选值" :width="150"></g-table-column>
          <g-table-column prop="default" label="默认值" :width="100"></g-table-column>
      </g-table>
    </TableScroll>
  </div>
</template>

<script>
export default {
  data() {
    return {
      basicUsageJs: ``,
      basicUsageHTML: `<p>&lt;<span style="color: rgb(224, 108, 117);">g-carousel</span> :<span style="color: rgb(209, 154, 102);">height</span>="<span style="color: rgb(209, 154, 102);">230</span>" :<span style="color: rgb(209, 154, 102);">width</span>="<span style="color: rgb(209, 154, 102);">350</span>"&gt;</p><p>&nbsp; &lt;<span style="color: rgb(224, 108, 117);">g-carousel-item</span> <span style="color: rgb(209, 154, 102);">v-for</span>="<span style="color: rgb(224, 108, 117);">item</span> <span style="color: rgb(198, 120, 221);">in</span> <span style="color: rgb(209, 154, 102);">4</span>" :<span style="color: rgb(209, 154, 102);">key</span>="<span style="color: rgb(224, 108, 117);">item</span>"&gt;</p><p>&nbsp; &nbsp; &lt;<span style="color: rgb(224, 108, 117);">img</span> <span style="color: rgb(209, 154, 102);">style</span>=<span style="color: rgb(152, 195, 121);">"width: 350px"</span> <span style="color: rgb(209, 154, 102);">src</span>=<span style="color: rgb(152, 195, 121);">"https://pic_5tu_big_6263316_e0beb62983b846b941ba2f62571dd8f4.jpg"</span> <span style="color: rgb(209, 154, 102);">alt</span>=<span style="color: rgb(152, 195, 121);">""</span>&gt;</p><p>&nbsp; &lt;/<span style="color: rgb(224, 108, 117);">g-carousel-item</span>&gt;</p><p>&lt;/<span style="color: rgb(224, 108, 117);">g-carousel</span>&gt;</p>`,
      tableData: [
                {
                    parameter: 'width',
                    explain: '走马灯宽度',
                    type: 'Number',
                    select: '-',
                    default: '350'
                },
                {
                    parameter: 'height',
                    explain: '走马灯高度',
                    type: 'Number',
                    select: '-',
                    default: '200'
                },
                {
                    parameter: 'auto',
                    explain: '自动播放',
                    type: 'Boolean',
                    select: '-',
                    default: 'false'
                },
            ],
    }
  }
};
</script>

<style scoped>
</style>