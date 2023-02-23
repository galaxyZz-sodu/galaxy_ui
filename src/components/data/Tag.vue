<template>
  <div>
    <div class="title">标签</div>
    <div class="secondTitle">基础用法</div>
    <g-tag>你好</g-tag>
    <Code :jsShow="false" :html="basicUsageHTML"></Code>
  </div>
</template>

<script>
export default {
  data() {
    return {
      basicUsageHTML:
        '<p>&lt;<span style="color: rgb(224, 108, 117);">g-tag</span>&gt;你好&lt;/<span style="color: rgb(224, 108, 117);">g-tag</span>&gt;</p>',
    };
  },
};
</script>

<style scoped>
</style>