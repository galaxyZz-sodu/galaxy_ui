<template>
  <div class="out">
    <div class="btn" @click="onClick" :class="{ btnSelect: value == label }">
      <div class="back" :class="{ select: value == label }"></div>
    </div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: String
    },
    label: {
      type: String
    },
  },
  data() {
    return {
      isSelect: this.value,
    };
  },
  methods: {
    onClick() {
      this.isSelect = this.label;
      this.$emit("input", this.isSelect);
    },
  },
};
</script>

<style scoped>
.out {
  display: flex;
  align-items: center;
  width: 100%;
  margin: 5px 0;
}
.btn {
  width: 20px;
  height: 20px;
  position: relative;
  margin-right: 5px;
  background: #f1f3f6;
  box-shadow: 2px 2px 4px #c6c7ca, -4px -4px 6px #ffffff;
  border-radius: 10px;
}
.btnSelect {
  box-shadow: none;
}
.back {
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  left: 0;
  top: 0;
  opacity: 0;
  box-shadow: 3px 3px 6px rgba(17, 20, 21, 0.3) inset;
  background: linear-gradient(145deg, #00f2fe, #4facfe);
  transition: all 0.4s;
}
.select {
  opacity: 1;
}
</style>