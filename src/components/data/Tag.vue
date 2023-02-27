<template>
  <div>
    <div class="title">标签</div>
    <div class="secondTitle">基础用法</div>
    <div class="out">
      <g-tag class="item">你好</g-tag>
      <g-tag class="item" type="success">你好</g-tag>
      <g-tag class="item" type="warning">你好</g-tag>
      <g-tag class="item" type="danger">你好</g-tag>
    </div>

    <Code :jsShow="false" :html="basicUsageHTML"></Code>
  </div>
</template>

<script>
export default {
  data() {
    return {
      basicUsageHTML:
        `<p>&lt;<span style="color: rgb(224, 108, 117);">g-tag</span>&gt;你好&lt;/<span style="color: rgb(224, 108, 117);">g-tag</span>&gt;</p><p>&lt;<span style="color: rgb(224, 108, 117);">g-tag</span> <span style="color: rgb(209, 154, 102);">type</span>=<span style="color: rgb(152, 195, 121);">"success"</span>&gt;你好&lt;/<span style="color: rgb(224, 108, 117);">g-tag</span>&gt;</p><p>&lt;<span style="color: rgb(224, 108, 117);">g-tag</span> <span style="color: rgb(209, 154, 102);">type</span>=<span style="color: rgb(152, 195, 121);">"warning"</span>&gt;你好&lt;/<span style="color: rgb(224, 108, 117);">g-tag</span>&gt;</p><p>&lt;<span style="color: rgb(224, 108, 117);">g-tag</span> <span style="color: rgb(209, 154, 102);">type</span>=<span style="color: rgb(152, 195, 121);">"danger"</span>&gt;你好&lt;/<span style="color: rgb(224, 108, 117);">g-tag</span>&gt;</p>`,
    };
  },
};
</script>

<style scoped>
.out {
  display: flex;
}
.item {
  margin-right: 10px;
}
</style>