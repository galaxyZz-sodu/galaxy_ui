<template>
  <div class="back">
    <div class="out">
      <SiderBar3 class="siderBar3" @changeSiderShow="changeShow"></SiderBar3>
      <SiderBar2 class="siderBar" :style="{display: !isSiderBar2Show && innerWidth < 450 ? 'none' : 'block' ,}"></SiderBar2>
      <div class="content" v-scrollTop>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import SiderBar2 from "@/components/SiderBar2.vue";
import HelloWorld from "./components/HelloWorld.vue";
import SiderBar3 from './components/SiderBar3.vue'
export default {
  name: "App",
  data() {
    return {
      isSiderBar2Show: false,
      innerWidth: window.innerWidth
    };
  },
  components: {
    HelloWorld,
    SiderBar2,
    SiderBar3
  },
  watch: {
    innerWidth: function(n, o) {
      // console.log(n);
    }
  },
  methods: {
    changeShow() {
      this.isSiderBar2Show = !this.isSiderBar2Show;
    }
  },
  created() {},
  mounted() {
    let con = document.querySelector(".content");
    con.scrollTo(0, 0);
    this.innerWidth = window.innerWidth;
    window.onresize = () => {
      return (() => {
        this.innerWidth = window.innerWidth;
      })()
    }
  },
};
</script>

<style scoped lang="less">
// @media screen and (max-width: 1030px) {
//   .out {
//     background-color: #f1f3f6;
//     width: 800px;
//     .siderBar {
//       display: none;
//     }
//     .content {
//       padding: 20px 10px;
//       box-sizing: border-box;
//     }
//   }
// }
@media screen and (max-width: 450px) {
  .out {
    background-color: #f1f3f6;
    width: 100%;
    // .siderBar {
    //   display: none;
    // }
    .content {
      padding: 20px 10px;
      max-width: 450px;
      box-sizing: border-box;
      overflow: hidden;
    }
  }
  .back {
  // height: 100vh;
  max-width: 450px;
  background-color: #f1f3f6;
}
}
@media screen and (min-width: 450px) {
  .out {
  // width: 1140px;
  width: 80%;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  .siderBar3 {
    display: none;
  }
  .content {
    padding: 20px 10px;
    box-sizing: border-box;
    overflow-y: scroll;
    overflow-x: hidden;
    width: 100%;
    // overflow-x: auto;
    max-height: 100vh;
  }
}
.back {
  // height: 100vh;
  // min-width: 1140px;
  background-color: #f1f3f6;
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
