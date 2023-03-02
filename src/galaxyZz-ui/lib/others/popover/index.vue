<template>
  <div>
    <div
      @click="clickShow"
      @mousedown="focusShow"
      @mouseup="focusNotShow"
      ref="reference"
      class="out"
    >
      <slot name="reference"></slot>
      <div ref="content" class="content" :class="typeClass" :style="duration">
        <div class="popTitle">{{ title }}</div>
        <div class="text">{{ content }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    trigger: {
      type: String,
      default: "focus",
      validator: (value) => {
        return ["click", "hover", "focus", "manual"].includes(value);
      },
    },
    title: {
      type: String,
    },
    content: {
      type: String,
    },
    placement: {
      type: String,
      default: "top",
      validator: (value) => {
        return ["bottom", "top"].includes(value);
      },
    },
  },
  watch: {
    isShow(newVal) {
      if (newVal) {
        this.$emit('show');
      }
    }
  },
  data() {
    return {
      isShow: false,
      timer: null,
      referWidth: 0,
      referHeight: 0,
      reference: "",
    };
  },
  computed: {
    typeClass() {
      return {
        [`${this.trigger}`]: this.trigger,
        showPop: this.isShow,
      };
    },
    duration() {
      if (this.placement == "top" || "bottom") {
        return { [`${this.placement}`]: `-${this.referHeight + 2}px` };
      }
    },
  },
  mounted() {
    // this.referWidth = this.$refs.reference.children[0].offsetWidth;
    this.referHeight = this.$refs.content.offsetHeight;
    // console.log(this.$slots);

    if (this.$slots && this.trigger == "hover") {
      this.reference = this.$slots.reference[0].elm;
      //   console.log(this.reference);
      if (this.reference) {
        this.reference.addEventListener("mouseenter", this.changeShow, false);
        this.reference.addEventListener("mouseleave", this.changeShow, false);
      }
    }
  },
  methods: {
    changeShow() {
      this.isShow = !this.isShow;
    },
    clickShow() {
      if (this.trigger == "click") {
        this.changeShow();
      }
    },
    focusShow() {
      if (this.trigger == "focus") {
        this.timer = setTimeout(() => {
          this.changeShow();
        }, 200);
      }
    },
    focusNotShow() {
      if (this.trigger == "focus") {
        clearTimeout(this.timer);
        this.isShow = false;
      }
    }
  },
};
</script>

<style scoped>
.out {
  position: relative;
  z-index: 1;
  /* height: 100%;
  width: 100%; */
  width: auto;
}
.popFade-enter-active,
.popFade-leave-active {
  transition: opacity 0.1s ease-in-out;
}
.popFade-enter,
.popFade-leave-to {
  opacity: 0;
}
.popTitle {
  font-size: 16px;
  padding: 0px 0px 15px 0px;
}
.text {
  font-size: 14px;
}
.content {
  opacity: 0;
  position: absolute;
  background-color: #f1f3f6;
  padding: 18px 20px;
  z-index: 999;
  box-shadow: 2px 2px 8px #c6c7ca;
  border-radius: 5px;
}
.showPop {
  opacity: 1;
}
</style>