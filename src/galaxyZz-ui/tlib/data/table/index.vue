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
      MaxmunRowHeight: new Array(this.data.length).fill(0)
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
    setTimeout(() => {
      for (let i = 0; i < this.$slots.default.length; i++) {
        for (let j = 0; j < this.$slots.default[i].componentInstance.$refs.colunm.length; j++) {
          let nowRowHeight = this.$slots.default[i].componentInstance.$refs.colunm[j].offsetHeight
          this.MaxmunRowHeight[j] = Math.max(this.MaxmunRowHeight[j], nowRowHeight)
          // if (j == 10) break
        }
        // if (i == 10) break
      }
    })
  },
  provide() {
    return {
      data: this.data,
      isBorder: this.border,
      isStripe: this.stripe,
      MaxmunRowHeight: this.MaxmunRowHeight
    };
  },
};
</script>

<style scoped>
.container {
  display: flex;
}
</style>
