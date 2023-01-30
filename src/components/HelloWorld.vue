<template>
  <div>
    <transition name="fade">
      <div v-if="true" class="out">
        <div class="title">{{ title }}</div>

        <div class="passw">
          <div class="passTemp" v-for="(item, index) in passNum" :key="index">
            <div v-show="index < password.length" class="icon">
              X
            </div>
          </div>
          
        </div>

        <div class="loading" v-if="loadingShow">
          {{payTitle}}
        </div>
        <div class="loading" v-if="successShow">
          {{successTitle}}
        </div>


        <transition name="errfade">
          <div class="err" v-if="errShow">
            <div class="errIn">
              <div class="errTitle">{{errTitle}}</div>
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
              <div @click="inputNum(i.id)" v-for="(i, index) in keyBoardInfo1" :key="index">
                <div class="number">{{i.id}}</div>
                <!-- <div class="alpet">{{i.info}}</div> -->
              </div>
            </div>
            <div class="one">
              <div @click="inputNum(i.id)" v-for="(i, index) in keyBoardInfo2" :key="index">
                <div class="number">{{i.id}}</div>
                <!-- <div class="alpet">{{i.info}}</div> -->
              </div>
            </div>
            <div class="one">
              <div @click="inputNum(i.id)" v-for="(i, index) in keyBoardInfo3" :key="index">
                <div class="number">{{i.id}}</div>
                <!-- <div class="alpet">{{i.info}}</div> -->
              </div>
            </div>
            <div class="one">
              <div @click="inputNum(i.id)" v-for="(i, index) in keyBoardInfo4" :key="index">
                <div class="number">{{i.id}}</div>
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
  name: "HelloWorld",
  data() {
    return {
      password: '',
      showBoard: true,
      loadingShow: false,
      successShow: false,
      errShow: false,
      keyBoardInfo1: [
        {id: '1', info: ''},
        {id: '2', info: 'ABC'},
        {id: '3', info: 'DEF'},
      ],
      keyBoardInfo2: [
        {id: '4', info: 'GHI'},
        {id: '5', info: 'JKL'},
        {id: '6', info: 'DEF'},
      ],
      keyBoardInfo3: [
        {id: '7', info: ''},
        {id: '8', info: 'ABC'},
        {id: '9', info: 'DEF'},
      ],
      keyBoardInfo4: [
        {id: '', info: ''},
        {id: '0', info: ''},
        {id: 'back', info: ''},
      ],
    }
  },
  props: {
    title: String,
    payTitle: {
      type: String,
      default: '正在支付...'
    },
    show: {
      type: Boolean,
      default: false,
    },
    passNum: {
      type: Number,
      default: 6
    },
    successTitle: {
      type: String,
      default: '支付成功',
      required: false
    },
    errTitle: {
      type: String,
      default: '支付失败',
      require: false
    }
  },
  created() {
    
  },
  methods: {
    inputNum(i) {
      // console.log(i)
      if (i == '') {
        return
      };
      if (i == 'back') {
        if (this.password.length == 0) {
          return;
        }
        let passArr = this.password.split('');
        passArr.pop();
        this.password = passArr.join('')
        // console.log(this.password);
        return;
      }
      this.password = (this.password + i).slice(0, this.passNum)
      // console.log(this.password);
    },
    $success (i) {         
        return new Promise((resolve, reject) => {                
            // 支付成功立即显示成功状态                
            this.successShow = true;                
            // 待指定间隔后，隐藏整个支付弹窗，并resolve 
            this.loadingShow = false;               
            setTimeout(() => {        
                resolve();    
                this.cancel()              
            }, 2000);            
        })        
    },
    $fail() {
      this.errShow = true;
    },
    cancel() {
      this.password = '';
      this.successShow = false;
      this.showBoard = true;
      this.loadingShow = false; 
      this.errShow = false;
      
    },
    onAgain() {
      this.cancel()
    },
    onForget() {
      this.$emit('forget');
      this.cancel()
    }
  },
  watch: {
    password(n) {
      if (n.length == this.passNum) {
        // console.log('haha');
        this.showBoard = false;
        this.loadingShow = true;
        this.$emit('inputEnd', this.password);
      }
    }
  },
  
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.out {
  height: 500px;
  width: 100%;
  background-color: #FFE76F;
  position: fixed;
  bottom: 0;
  left: 0;
  min-width: 200px;
  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.4);
}
.title {
  margin: 10px auto;
  text-align: center;
  font-size: 20px;
  font-weight: 600;
  color: #002EA6;
}
.passw {
  margin-top: 30px;
  display: flex;
  justify-content: center;
}
.passTemp {
  width: 10vw;
  height: 10vw;
  background-color: white;
  margin: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #002EA6;
}
.icon {
  font-size: 30px;
}

.loading {
  text-align: center;
  font-size: 30px;
  margin-top: 80px;
  color: #002EA6;
}
.keyboad {
  position: absolute;
  width: 100%;
  bottom: 0;
}
.one {
  display: flex;
  
  min-height: 40px;
}
.one:nth-child(1), .one:nth-child(2), .one:nth-child(3) {
  border-bottom: 1px solid #85a1e9;
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
  color: #002EA6;
}
.one > div:nth-child(2), .one > div:nth-child(1) {
  border-right: 1px solid #85a1e9;
  /* background-color: red; */
}
.err {
  width: 100%;
  /* height: 30vw; */
  /* background-color: red; */
  position: fixed;
  top: 30%;
  /* border-radius: 0.5rem; */
}
.errIn {
  width: 60vw;
  /* height: 25vw; */
  max-height: 200px;
  background-color: white;
  margin: 0 auto;
  position: relative;
  display: flex;
  flex-direction: column;
  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.4);
}
.errTitle {
  width: 100%;
  font-size: 1.5rem;
  text-align: center;
  padding: 0.8rem 0;
}
.btn {
  display: flex;
  /* position: absolute; */
  width: 100%;
  /* bottom: 0; */
}
.forget {
  flex: 1;
  text-align: center;
  background-color: #FFE76F;
  padding: 10px;
  font-size: 1rem;
}
.again {
  flex:1;
  text-align: center;
  background-color: #002EA6;
  color: white;
  padding: 10px;
  font-size: 1rem;
}
/* .form-main{
        width: 100%;
        flex-shrink: 0;
    } */
    .fade-enter-active, .fade-leave-active {
        transition: all 0.4s ease;
    }
    .fade-enter{
        transform: translateY(100%);
    }
    .fade-enter-to{
        transform: translateY(0);
    }
    .fade-leave{
        transform: translateY(0);
    }
    .fade-leave-to{
        transform: translateY(100%);
    }

    .errfade-enter-active, .errfade-leave-active {
        transition: all 0.4s ease;
    }
    .errfade-enter{
        /* transform: translateY(500%); */
        opacity: 0;
    }
    .errfade-enter-to{
        /* transform: translateY(0); */
        opacity: 1;
    }
    .errfade-leave{
        /* transform: translateY(0); */
        opacity: 1;
    }
    .errfade-leave-to{
        /* transform: translateY(500%); */
        opacity: 0;
    }


    .boardfade-enter-active, .boardfade-leave-active {
        transition: all 0.4s ease;
    }
    .boardfade-enter{
        /* transform: translateY(500%); */
        opacity: 0;
    }
    .boardfade-enter-to{
        /* transform: translateY(0); */
        opacity: 1;
    }
    .boardfade-leave{
        /* transform: translateY(0); */
        opacity: 1;
    }
    .boardfade-leave-to{
        /* transform: translateY(500%); */
        opacity: 0;
    }
</style>
