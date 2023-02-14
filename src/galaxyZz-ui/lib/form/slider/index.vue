<template>
  <div class="out">
    <div class="slider" ref="line" @click.self="getLineClick">
      <div
        class="back"
        @click="getLineClick"
        :style="{ width: colorLineWidth + 'px' }"
      ></div>
      <div
        ref="btn"
        class="btn"
        :style="{ left: btnLeft + 'px' }"
        @mousedown.stop="getMousedown"
        @mousemove="getMouseMove"
        @mouseup.stop="getMouseup"
        @mouseover="showPercent"
        @mouseleave="hiddenPercent"
      >
        <div class="percent" v-show="percentShow">{{ percent + "%" }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      btnLeft: -10,
      lineLeft: 0,
      isDown: false,
      // btnL: 0,
      btnDisX: '',
      lineWidth: 0,
      percent: this.value,
      percentShow: false,
    };
  },
  props: {
    value: {
      type: Number,
    },
  },
  computed: {
    colorLineWidth() {
      return this.btnLeft + 10;
    },
  },
  mounted() {
    var line = document.querySelector(".slider");
    this.lineLeft = line.getBoundingClientRect().left;
    this.lineWidth = line.offsetWidth;
    this.btnLeft = this.percent / 100 * this.lineWidth - 10;
    const that  = this;
    window.onresize = () => {
      return (() => {
          that.lineLeft = line.getBoundingClientRect().left;
      })()
    }
  },
  methods: {
    getMousedown(e) {
      this.isDown = true;
      this.btnDisX = e.offsetX
    },
    getMouseMove(e) {
      if (this.isDown) {
        this.btnLeft = e.clientX - this.lineLeft - this.btnDisX;
        if (e.clientX - this.lineLeft < 0) {
          this.btnLeft = -10;
        }
        if (e.clientX - this.lineLeft > this.lineWidth) {
          // this.isDown = false;
          this.btnLeft = this.$refs.line.offsetWidth - 10;
        }
        this.percent = parseInt(
          String(((this.btnLeft + 10) / this.lineWidth) * 100).split(".")[0]
        );
      }
    },
    getMouseup(e) {
      this.isDown = false;
      this.$emit("input", this.percent);
      this.$emit("mouseUp", this.percent);
    },
    getLineClick(e) {
      this.btnLeft = e.clientX - this.lineLeft - 10;
      this.percent = parseInt(
        String(((this.btnLeft + 10) / this.lineWidth) * 100).split(".")[0]
      );
      console.log(this.percent );
      this.$emit("input", this.percent);
    },
    showPercent() {
        this.percentShow = true;
    },
    hiddenPercent() {
        this.percentShow = false;
    }
  },
};
</script>

<style scoped>
.out {
  margin: 10px 10px;
  align-items: center;
}
.slider {
  width: 100%;
  height: 6px;
  background: #f1f3f6;
  max-width: 574px;
  border-radius: 6px;
  box-shadow: 2px 2px 2px #c6c7ca, -2px -2px 6px #ffffff;
  position: relative;
}
.percent {
  /* margin-left: 10px; */
  /* width: 30px;
        height: 20px; */
  padding: 2px 5px;
  /* background-color: red; */
  position: absolute;
  top: -30px;
  left: -10px;
  background-color: #f1f3f6;
  box-shadow: 2px 2px 2px #c6c7ca, -2px -2px 6px #ffffff;
  border-radius: 5px;
}
.back {
  background: linear-gradient(145deg, #4facfe, #00f2fe);
  height: 6px;
  border-radius: 6px;
  position: absolute;
}
.btn {
  width: 20px;
  height: 20px;
  background-color: #4facfe;
  border-radius: 10px;
  position: absolute;
  top: -7px;
  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.2), -4px -4px 8px #ffffff;
}
</style>
