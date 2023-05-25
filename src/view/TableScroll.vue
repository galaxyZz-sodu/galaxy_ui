<template>
    <div class="scroll">
        <slot></slot>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.scroll {
    overflow-y: auto;
}

/* 整个滚动条 */
::-webkit-scrollbar {
  /* 对应纵向滚动条的宽度 */
  width: 10px;
  /* 对应横向滚动条的宽度 */
  height: 10px;
}

/* 滚动条上的滚动滑块 */
::-webkit-scrollbar-thumb {
  background-color: rgb(225, 225, 225);
  border-radius: 32px;
}

/* 滚动条轨道 */
::-webkit-scrollbar-track {
  background-color: transparent;
  border-radius: 32px;
}
</style>
