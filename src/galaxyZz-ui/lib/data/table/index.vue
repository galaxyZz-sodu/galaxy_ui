<template>
  <div>
    <div class="container">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
    };
  },
  props: {
    data: {
        type: Array,
    },
    border: {
        type: Boolean,
        default: false
    },
    stripe: {
      type: Boolean,
      default: false,
    }
  },
  mounted() {
    // console.log(this.data);
  },
  provide() {
    return {
      data: this.data,
      isBorder: this.border,
      isStripe: this.stripe
    };
  },
};
</script>

<style scoped>
.container {
  display: flex;
}
</style>
