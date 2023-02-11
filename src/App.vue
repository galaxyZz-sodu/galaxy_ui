<template>
  <div class="back">
    <div class="out">
      <SiderBar2 class="siderBar"></SiderBar2>
      <div class="content" v-scrollTop>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import SiderBar2 from "@/components/SiderBar2.vue";
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  data() {
    return {};
  },
  components: {
    HelloWorld,
    SiderBar2,
  },
  methods: {},
  created() {},
  mounted() {
    let con = document.querySelector(".content");
    con.scrollTo(0, 0);
    // this.$nextTick(() => {
    //   console.log('hss');
    // })
  },
};
</script>

<style scoped lang="less">
.back {
  // height: 100vh;
  min-width: 1140px;
  background-color: #f1f3f6;
}
.out {
  width: 1140px;
  height: 100vh;
  margin: 0 auto;
  position: relative;
  // background: red;
  // background-color: #f1f3f6;
  .siderBar {
    // overflow: auto;
    position: absolute;
    left: 0;
  }
  .content {
    position: absolute;
    left: 280px;
    padding: 20px 10px;

    overflow-y: scroll;
    overflow-x: hidden;
    // background-color: red;
    max-height: 700px;
  }
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
