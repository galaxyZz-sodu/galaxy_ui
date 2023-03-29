<template>
  <div v-if="visible" class="out">
    <div v-if="modal" class="wrap"></div>
    <div class="container" :style="{ width: width }">
      <div class="title">{{ title }}</div>
      <div class="content">
        <slot></slot>
      </div>
      <div class="footer">
        <slot name="footer"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShow: true,
    };
  },
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
    },
    width: {
      type: String,
      default: "50%",
    },
    top: {
      type: String,
    },
    modal: {
      type: Boolean,
      default: true,
    },
  },
};
</script>

<style scoped>
.out {
  position: fixed;
  z-index: 999;
}
.wrap {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 200;
}
.container {
  position: fixed;
  top: -50px;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  width: 50%;
  height: 25%;
  /* border-bottom: 1px solid rgba(255, 255, 255, 0.6);
        border-right: 1px solid rgba(255, 255, 255, 0.6); */
  box-shadow: -2px -2px 6px rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(6px);
  background: #f1f3f6;
  border-radius: 5px;
  z-index: 201;
  padding: 10px 15px;
}
.title {
  font-size: 20px;
}
.content {
  margin-top: 40px;
}
.footer {
  position: absolute;
  left: 0;
  bottom: 15px;
  /* background-color: red; */
}
</style>