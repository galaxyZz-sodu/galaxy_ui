<template>
  <div>
    <transition name="fade">
      <div v-if="isShow" class="out">
        <slot name="title"></slot>
        <div class="title">{{ title }}</div>

        <div class="passw">
          <div class="passTemp" v-for="(item, index) in passNum" :key="index">
            <div v-show="index < password.length" class="icon">X</div>
          </div>
        </div>

        <div class="loading" v-if="loadingShow">
          {{ payTitle }}
        </div>
        <div class="loading" v-if="successShow">
          {{ successTitle }}
        </div>

        <transition name="errfade">
          <div class="err" v-if="errShow">
            <div class="errIn">
              <div class="errTitle">{{ errTitle }}</div>
              <div class="btn">
                <div class="forget" @click="onForget">忘记密码</div>
                <div class="again" @click="onAgain">重新输入</div>
              </div>
            </div>
          </div>
        </transition>

        <transition name="boardfade">
          <div class="keyboad" v-if="showBoard">
            <div class="one">
              <div
                @click="inputNum(i.id)"
                v-for="(i, index) in keyBoardInfo1"
                :key="index"
              >
                <div class="number">{{ i.id }}</div>
                <!-- <div class="alpet">{{i.info}}</div> -->
              </div>
            </div>
            <div class="one">
              <div
                @click="inputNum(i.id)"
                v-for="(i, index) in keyBoardInfo2"
                :key="index"
              >
                <div class="number">{{ i.id }}</div>
                <!-- <div class="alpet">{{i.info}}</div> -->
              </div>
            </div>
            <div class="one">
              <div
                @click="inputNum(i.id)"
                v-for="(i, index) in keyBoardInfo3"
                :key="index"
              >
                <div class="number">{{ i.id }}</div>
                <!-- <div class="alpet">{{i.info}}</div> -->
              </div>
            </div>
            <div class="one">
              <div
                @click="inputNum(i.id)"
                v-for="(i, index) in keyBoardInfo4"
                :key="index"
              >
                <div class="number">{{ i.id }}</div>
                <!-- <div class="alpet">{{i.info}}</div> -->
              </div>
            </div>
          </div>
        </transition>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "Pay",
  data() {
    return {
      password: "",
      showBoard: true,
      loadingShow: false,
      successShow: false,
      errShow: false,
      keyBoardInfo1: [
        { id: "1", info: "" },
        { id: "2", info: "ABC" },
        { id: "3", info: "DEF" },
      ],
      keyBoardInfo2: [
        { id: "4", info: "GHI" },
        { id: "5", info: "JKL" },
        { id: "6", info: "DEF" },
      ],
      keyBoardInfo3: [
        { id: "7", info: "" },
        { id: "8", info: "ABC" },
        { id: "9", info: "DEF" },
      ],
      keyBoardInfo4: [
        { id: "", info: "" },
        { id: "0", info: "" },
        { id: "back", info: "" },
      ],
    };
  },
  props: {
    title: String,
    value: String,
    payTitle: {
      type: String,
      default: "正在支付...",
    },
    isShow: {
      type: Boolean,
      default: false,
    },
    passNum: {
      type: Number,
      default: 6,
    },
    successTitle: {
      type: String,
      default: "支付成功",
      required: false,
    },
    errTitle: {
      type: String,
      default: "支付失败",
      require: false,
    },
  },
  created() {},
  methods: {
    inputNum(i) {
      // console.log(i)
      if (i == "") {
        return;
      }
      if (i == "back") {
        if (this.password.length == 0) {
          return;
        }
        let passArr = this.password.split("");
        passArr.pop();
        this.password = passArr.join("");
        // console.log(this.password);
        return;
      }
      this.password = (this.password + i).slice(0, this.passNum);
      // console.log(this.password);
    },
    $success(i) {
      return new Promise((resolve, reject) => {
        // 支付成功立即显示成功状态
        this.successShow = true;
        // 待指定间隔后，隐藏整个支付弹窗，并resolve
        this.loadingShow = false;
        setTimeout(() => {
          resolve();
          this.cancel();
        }, 2000);
      });
    },
    $fail() {
      this.errShow = true;
    },
    cancel() {
      this.password = "";
      this.successShow = false;
      this.showBoard = true;
      this.loadingShow = false;
      this.errShow = false;
    },
    onAgain() {
      this.cancel();
    },
    onForget() {
      this.$emit("forget");
      this.cancel();
    },
  },
  watch: {
    password(n) {
      if (n.length == this.passNum) {
        // console.log('haha');
        this.showBoard = false;
        this.loadingShow = true;
        this.$emit("inputEnd", this.password);
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.out {
  height: 60vh;
  width: 100%;
  /* background-color: #F4F5F5; */
  /* background-image: linear-gradient(-45deg, #C973FF, #AEBAF8); */
  background: linear-gradient(
    to bottom left,
    rgba(225, 225, 225, 0.2),
    rgba(225, 225, 225, 0.6)
  );
  box-shadow: 0px -2px 6px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(6px);
  position: fixed;
  bottom: 0;
  left: 0;
  min-width: 200px;
  border-top-left-radius: 4vw;
  border-top-right-radius: 4vw;
  /* border-top: 1px solid rgba(255, 255, 255, 0.4); */
}
.title {
  margin: 2vw auto;
  text-align: center;
  font-size: 20px;
  font-weight: 600;
  color: #3c375e;
  /* color: white; */
}
.passw {
  margin-top: 30px;
  display: flex;
  justify-content: center;
}
.passTemp {
  width: 10vw;
  height: 10vw;
  /* background-color: rgba(225, 225, 225, 0.9); */
  /* background: none; */
  border-bottom: 1px solid rgba(255, 255, 255, 0.6);
  border-right: 1px solid rgba(255, 255, 255, 0.6);
  box-shadow: -1px -1px 6px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(6px);
  margin: 1vw;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #3c375e;
  border-radius: 2vw;
}
.icon {
  font-size: 8vw;
}

.loading {
  text-align: center;
  font-size: 30px;
  margin-top: 80px;
  color: black;
}
.keyboad {
  position: absolute;
  width: 100%;
  bottom: 0;
  /* background-color: white; */
  background: linear-gradient(to bottom left, #3cb4d9 10%, #fefffd 90%);
  border-top-left-radius: 4vw;
  border-top-right-radius: 4vw;
}
.one {
  display: flex;
  min-height: 40px;
}
.one:nth-child(1),
.one:nth-child(2),
.one:nth-child(3) {
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
}
.one > div {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* border-right: 1px solid #85a1e9; */
  padding: 10px;
  font-size: 20px;
  
  color: #3c375e;
}
.one > div:nth-child(2),
.one > div:nth-child(1) {
  border-right: 1px solid rgba(0, 0, 0, 0.2);
  /* background-color: red; */
}
.err {
  width: 100%;
  /* height: 30vw; */
  /* background-color: red; */
  position: fixed;
  top: 5vh;
  /* border-radius: 0.5rem; */
}
.errIn {
  width: 60vw;
  /* height: 25vw; */
  max-height: 180px;
  /* background-color: #FEFEFE; */
  margin: 0 auto;
  padding: 2vw;
  position: relative;
  display: flex;
  flex-direction: column;
  border-radius: 2vw;
  border-bottom: 2px solid rgba(255, 255, 255, 0.6);
  border-right: 2px solid rgba(255, 255, 255, 0.6);
  box-shadow: -2px -4px 6px rgba(0, 0, 0, 0.4);
  background: linear-gradient(
    to bottom left,
    rgba(225, 225, 225, 0.8),
    rgba(225, 225, 225, 0.6)
  );
  box-shadow: 0px -2px 6px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(6px);
}
.errTitle {
  color: #3c375e;
  width: 100%;
  font-size: 1.5rem;
  text-align: center;
  padding: 0.8rem 0;
}
.btn {
  display: flex;
  justify-content: space-around;
  /* position: absolute; */
  width: 100%;
  /* bottom: 0; */
}
.forget {
  /* flex: 1; */
  border: none;
  border-bottom: 1px solid rgba(255, 255, 255, 0.6);
  border-right: 1px solid rgba(255, 255, 255, 0.6);
  box-shadow: -1px -1px 6px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(6px);
  background-color: rgba(225, 225, 225, 0.8);
  padding: 6px 20px;
  width: auto;
  border-radius: 5px;
}
.again {
  /* flex:1; */
  text-align: center;
  /* background-color: #AEBAF8; */
  border: none;
  border-bottom: 1px solid rgba(255, 255, 255, 0.6);
  border-right: 1px solid rgba(255, 255, 255, 0.6);
  box-shadow: -1px -1px 6px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(20px);
  background-color: rgba(225, 225, 225, 0.8);
  padding: 6px 20px;
  width: auto;
  border-radius: 5px;
}
/* .form-main{
        width: 100%;
        flex-shrink: 0;
    } */
.fade-enter-active,
.fade-leave-active {
  transition: all 0.4s ease;
}
.fade-enter {
  transform: translateY(100%);
}
.fade-enter-to {
  transform: translateY(0);
}
.fade-leave {
  transform: translateY(0);
}
.fade-leave-to {
  transform: translateY(100%);
}

.errfade-enter-active,
.errfade-leave-active {
  transition: all 0.4s ease;
}
.errfade-enter {
  /* transform: translateY(500%); */
  opacity: 0;
}
.errfade-enter-to {
  /* transform: translateY(0); */
  opacity: 1;
}
.errfade-leave {
  /* transform: translateY(0); */
  opacity: 1;
}
.errfade-leave-to {
  /* transform: translateY(500%); */
  opacity: 0;
}

.boardfade-enter-active,
.boardfade-leave-active {
  transition: all 0.4s ease;
}
.boardfade-enter {
  /* transform: translateY(500%); */
  opacity: 0;
}
.boardfade-enter-to {
  /* transform: translateY(0); */
  opacity: 1;
}
.boardfade-leave {
  /* transform: translateY(0); */
  opacity: 1;
}
.boardfade-leave-to {
  /* transform: translateY(500%); */
  opacity: 0;
}
</style>
