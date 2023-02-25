<template>
  <div>
    <div class="title">水印</div>
    <div class="secondTitle">基础用法</div>
    <div
      v-waterMark='{
        imgUrl:
          "https://pic.5tu.cn/uploads/allimg/2107/pic_5tu_big_6263316_e0beb62983b846b941ba2f62571dd8f4.jpg",
        text: "这是水印",
        textColor: "red",
      }'
    ></div>
    <Code :jsShow="false" :html="basicUsageHTML"></Code>
  </div>
</template>

<script>
export default {
    data() {
        return {
            basicUsageHTML: `<p>&lt;<span style="color: rgb(224, 108, 117);">div</span></p><p>&nbsp; <span style="color: rgb(209, 154, 102);">v-waterMark</span>='{</p><p>&nbsp; &nbsp; <span style="color: rgb(224, 108, 117);">imgUrl</span>:</p><p>&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: rgb(152, 195, 121);">"https://pic.5tu.cn/uploads/allimg/2107/pic_5tu_big.jpg"</span>,</p><p>&nbsp; &nbsp; <span style="color: rgb(224, 108, 117);">text</span>: <span style="color: rgb(152, 195, 121);">"这是水印"</span>,</p><p>&nbsp; &nbsp; <span style="color: rgb(224, 108, 117);">textColor</span>: <span style="color: rgb(152, 195, 121);">"red"</span>,</p><p>&nbsp; }'</p><p>&gt;&lt;/<span style="color: rgb(224, 108, 117);">div</span>&gt;</p>`
        }
    }
};
</script>

<style scoped>
</style>