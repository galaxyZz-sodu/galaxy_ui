<template>
  <div class="out">
    <div
      class="btn"
      :class="{ disabled: data <= min, enter: isEnter && data > min,
        down: isDown,}"
      @click="minus"
      @mousedown="onMouseDown"
      @mouseup="onMouseUp"
      @mouseenter="onEnter"
      @mouseleave="onLeave"
    >
      <div>-</div>
    </div>
    <div class="content">
      <input type="number" v-bind:value="data" v-on:input="onInput" />
    </div>
    <div
      class="btn"
      :class="{
        disabled: data >= max,
        enter: isEnter2 && data < max,
        down: isDown2,
      }"
      @click="add"
      @blur="onBlur"
      @mousedown="onMouseDownAdd"
      @mouseup="onMouseUpAdd"
      @mouseenter="onEnterAdd"
      @mouseleave="onLeaveAdd"
    >
      <div>+</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: this.value,
      isDown: false,
      isEnter: false,
      isDown2: false,
      isEnter2: false,
    };
  },
  props: {
    value: {
      type: Number,
      default: 1,
    },
    min: {
      type: Number,
    },
    max: {
      type: Number,
    },
  },
  watch: {
    data() {
      this.$emit("change");
    },
  },
  methods: {
    minus() {
      let nowData = this.data;
      nowData = nowData - 1;
      if (nowData > this.max || nowData < this.min) {
        return;
      }
      this.data--;
      this.$emit("input", this.data);
    },
    add() {
      let nowData = this.data;
      nowData = nowData + 1;
      if (nowData > this.max || nowData < this.min) {
        return;
      }
      this.data++;
      this.$emit("input", this.data);
    },
    onInput(e) {
      let number = parseInt(e.target.value);
      if (number > this.max || number < this.min) {
        return;
      }
      this.data = number;
      this.$emit("input", number);
    },
    onBlur() {},
    onMouseDown() {
      this.isDown = true;
    },
    onMouseUp() {
      this.isDown = false;
    },
    onEnter() {
      this.isEnter = true;
    },
    onLeave() {
      this.isEnter = false;
    },
    onMouseDownAdd() {
      this.isDown2 = true;
    },
    onMouseUpAdd() {
      this.isDown2 = false;
    },
    onEnterAdd() {
      this.isEnter2 = true;
    },
    onLeaveAdd() {
      this.isEnter2 = false;
    },
  },
};
</script>

<style scoped>
/* 去除number input默认样式 */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
}
/* 在Firefox浏览器下 */
input[type="number"] {
  -moz-appearance: textfield;
}
.out {
  width: 180px;
  height: 40px;
  background: #f1f3f6;
  /* background: linear-gradient(145deg, #d9dbdd, #ffffff); */
  box-shadow: 3px 3px 3px #c6c7ca inset, -3px -3px 3px #ffffff inset;
  border-radius: 40px;
  display: flex;
  box-sizing: border-box;
  padding: 0 4px;
  align-items: center;
}
.btn {
  width: 36px;
  height: 36px;
  background: #f1f3f6;
  box-shadow: 2px 2px 4px #c6c7ca, -4px -4px 6px #ffffff;
  border-radius: 18px;
  text-align: center;
  line-height: 34px;
  font-size: 26px;
  cursor: pointer;
  user-select: none;
  transition: all 0.4s;
}
.disabled {
  box-shadow: none;
  background-color: transparent;
}
.content {
  flex: 1;
  text-align: center;
}
.content > input {
  width: 80px;
  background-color: transparent;
  outline: none;
  padding: 3px 0px;
  text-align: center;
  font-size: 20px;
  border: none;
}
.enter {
  box-shadow: 1px 1px 2px #c6c7ca, -2px -2px 3px #ffffff;
}
.down {
  box-shadow: 2px 2px 4px transparent, -3px -3px 6px transparent;
}
</style>