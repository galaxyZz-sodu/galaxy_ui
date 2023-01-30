<template>
  <div class="step_out">
    <div class="iconOut">
      <div :class="['icon']">
        <div
          :class="['defaultIcon', { 'current-color': isCurrent }]"
          v-if="!isFinish"
        >
          <span v-if="isDefaultIcon">
            {{ currentIndex + 1 }}
          </span>
          <slot name="icon" v-else></slot>
        </div>
        <div :class="['succeedIcon', { 'finish-color': isFinish }]" v-else>
          <span class="iconfont icon-duigou"></span>
        </div>
      </div>
      <div
        :class="[
          'title',
          { 'finish-color': isFinish, 'current-color': isCurrent },
        ]"
      >
        <slot name="title"></slot>
      </div>
    </div>

    <div :class="['line', { 'line-finish': isFinish }]"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentIndex: -1,
      isDefaultIcon: true,
    };
  },
  computed: {
    activeIndex() {
      return this.activeIndex;
    },
    isFinish() {
      return this.currentIndex < this.activeIndex();
    },
    isCurrent() {
      return this.currentIndex == this.activeIndex();
    },
  },
  // watch: {
  //     activeIndex(oldValue, newValue) {
  //         console.log('haha',oldValue)
  //         console.log(newValue)
  //     }
  // },
  inject: ["slotLen", "activeIndex"],
  mounted() {
    this.currentIndex = this.$parent.$children.findIndex(
      (e) => e._uid === this._uid
    );
    // console.log(this.$slots);
    // console.log(this.$slots.hasOwnProperty("icon"));
    this.isDefaultIcon = !this.$slots.hasOwnProperty("icon");
  },
};
</script>

<style scoped>
.step_out {
  position: relative;
  width: 115px;
}
.iconOut {
  position: relative;
  z-index: 9;
}
.icon {
  width: 30px;
  height: 30px;
  background-color: #f1f3f6;
  border-radius: 15px;
  text-align: center;
  line-height: 30px;
  transition: all 0.3 ease;
  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.2), -3px -4px 6px #ffffff;
}

.line {
  width: 100px;
  height: 2px;
  background-color: #c0c4cc;
  position: absolute;
  top: 15px;
  left: 15px;
}
.line-finish {
  background-image: linear-gradient(120deg, #d4fc79 0%, #96e6a1 100%);
}
.title {
  margin: 5px 10px;
  font-size: 18px;
  color: #c0c4cc;
}
.defaultIcon {
  color: #c0c4cc;
}
.step_out:last-of-type .line {
  display: none;
}
.finish-color {
  color: #43e97b;
}
.current-color {
  color: black;
}
</style>