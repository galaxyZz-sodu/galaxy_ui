<template>
  <div>
    <div class="carouselOut" :style="{ height: height + 'px', width: width + 'px'}">
      <div class="content" :style="{ left: contentLeft + 'px', width: imgConut * width + 'px' }">
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
      <div class="carRoundList">
        <div class="carRound" :class="{nowCarRound: imgIndex == i}" v-for="(i, index) in imgConut" :key="index"></div>
      </div>
    </div>
  </div>
</template>

<script>
import "../../icon/iconfont.css";
export default {
  data() {
    return {
      contentLeft: 0,
      imgConut: 0,
      imgIndex: 1
    };
  },
  props: {
    height: {
      type: Number,
      default: 200,
    },
    width: {
      type: Number,
      default: 350
    },
    auto: {
      type: Boolean,
      default: false
    },
    circle: {
      type: Boolean,
      default: true
    }
  },
  mounted() {
    console.log(this.$slots.default.length);
    this.imgConut = this.$slots.default.length;
    if (this.auto) {
      let timer = setInterval(() => {
          this.contentLeft -= this.width;
          this.imgIndex++;
          if (this.imgIndex == this.imgConut) {
            clearInterval(timer);
          }
      }, 3000);
      return timer;
    }
    
  },
  methods: {
    slideLeft() {
      if (this.imgIndex > 1) {
        this.contentLeft += this.width;
        this.imgIndex--;
      }
      
    },
    slideRight() {
      if (this.imgIndex < this.imgConut) {
        this.contentLeft -= this.width;
        this.imgIndex++;
      }
      
    },
  },
};
</script>

<style scoped>
.carouselOut {
  background-color: #f1f3f6;
  box-shadow: 2px 2px 6px #c6c7ca, -4px -6px 12px #ffffff;
  border-radius: 5px;
  position: relative;
  overflow: hidden;
}
.content {
  position: absolute;
  transition: left 0.2s ease;
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
  opacity: 0;
  transition: all 0.4s ease;
}
.carRoundList {
  position: absolute;
  z-index: 9;
  display: flex;
  bottom: 2px;
  left: 50%;
  transform: translate(-50%, 0);
}
.carRound {
  margin: 6px;
  width: 8px;
  height: 8px;
  border-radius: 4px;
  background-color: rgba(255, 255, 255, 0.6);

}
.nowCarRound {
  background-color: #ffffff;
}
.carouselOut:hover .rightArrow {
  opacity: 1;
}
.carouselOut:hover .leftArrow {
  opacity: 1;
}

</style>