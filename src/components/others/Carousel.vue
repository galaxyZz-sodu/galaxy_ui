<template>
  <div>
    <g-carousel height="200px" width="300px">
      <g-carousel-item v-for="item in 4" :key="item">
        <img src="https://pic.5tu.cn/uploads/allimg/2107/pic_5tu_big_6263316_e0beb62983b846b941ba2f62571dd8f4.jpg" alt="">
      </g-carousel-item>
    </g-carousel>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
</style>