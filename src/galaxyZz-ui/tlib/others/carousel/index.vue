<template>
  <div>
    <div class="out" :style="{ height: height }">
      <div class="content" :style="{ left: contentLeft + 'px' }">
        <slot></slot>
      </div>
      <transition name="leftShow">
        <div class="leftArrow" @click="slideLeft" :class="{}">
          <span class="iconfont icon-zuojiantou"></span>
        </div>
      </transition>

      <transition name="rightShow">
        <div class="rightArrow" @click="slideRight" :class="{}">
          <span class="iconfont icon-youjiantou"></span>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import "../../icon/iconfont.css";
export default {
  data() {
    return {
      contentLeft: 0,
    };
  },
  props: {
    height: {
      type: String,
      default: "200px",
    },
  },
  mounted() {
    let count = document.getElementsByTagName("g-carousel-item").length;
    console.log(count);
    // setInterval(() => {
    //     this.contentLeft -= 350
    // }, 3000);
  },
  methods: {
    slideLeft() {
      this.contentLeft += 350;
    },
    slideRight() {
      this.contentLeft -= 350;
    },
  },
};
</script>

<style scoped>
.out {
  width: 350px;
  background-color: #f1f3f6;
  box-shadow: 2px 2px 6px #c6c7ca, -4px -6px 12px #ffffff;
  border-radius: 5px;
  position: relative;

  overflow: hidden;
}
.content {
  width: 1750px;
  position: absolute;
  transition: left 0.2s ease;
  /* left: -200px; */
  /* float: left; */
}
span {
  font-size: 16px;
  color: white;
}
.leftArrow {
  position: absolute;
  top: 45%;
  left: 4%;
  width: 30px;
  height: 30px;
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 15px;
  text-align: center;
  line-height: 30px;
  z-index: 9;
  opacity: 0;
  transition: all 0.4s ease;
}
.rightArrow {
  position: absolute;
  top: 45%;
  right: 4%;
  width: 30px;
  height: 30px;
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 15px;
  text-align: center;
  line-height: 30px;
  z-index: 9;
  /* display: none; */
  opacity: 0;
  transition: all 0.4s ease;
}
.out:hover .rightArrow {
  opacity: 1;
}
.out:hover .leftArrow {
  opacity: 1;
}

</style>