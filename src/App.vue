<template>
  <div id="app" >
    <g-button @click="isPayOpen = !isPayOpen">支付栏</g-button>
    <g-button type="hump" @click.stop="isSiderOpen = !isSiderOpen">侧边栏</g-button>
    <g-pay
    ref="pays"
    title="请输入支付密码" 
    :passNum="6" 
    :isShow="isPayOpen"
    @inputEnd="inputEnd"
    @forget="onForget" >
      
    </g-pay>

    <g-siderbar
    :data="sliderData"
    :isShow="isSiderOpen"
    width="large"
    @click.stop="haha"
    >
    <template slot="header">
      
    </template>
    </g-siderbar>
    
    <g-input v-model="message" style="width: 500px">
      <div slot="right">
      </div>
    </g-input>
    <g-button   @click="getMessage" style="width: 100px; margin: 20px auto">
      <div style="color:red;">开始</div>
    </g-button>

    <g-steps :active="stepActive" style="margin-left: 20px">
      <g-step></g-step>
    <g-step></g-step>
    <g-step></g-step>
    <g-step></g-step>
    <g-step></g-step>
    <g-step></g-step>
    <g-step>
      <template slot="icon">
        <span class="iconfont icon-duigou"></span>
      </template>
    </g-step>
    <g-step>
      <template slot="title">
        hahaerre
      </template>  
      <template slot="icon">
        1
      </template>
    </g-step> 
    </g-steps>
    <g-button @click="changeStepActive">下一个进度</g-button>

    <!-- <g-dialog :modal="true" :visible="showDialog" title="提示" width="30%">
      haha
      <span slot="footer">
        <g-button type="hump" @click="showDialog = false">取消</g-button>
        <g-button type="hump" @click="showDialog = false">确定</g-button>
      </span>
    </g-dialog>
    <g-button type="hump" @click="showDialog = !showDialog">提示框</g-button>
    <g-switch activeText="开启" inactiveText="关闭" v-model="switchOpen" @change="swiChange"></g-switch>
    <g-radio v-model="select" label="1">xixi</g-radio>
    <g-radio v-model="select" label="2">xixi</g-radio>
    <g-radio v-model="select" label="3">xixi</g-radio>
    <g-checkbox v-model="check" @change="changeCheck" :options="['haha', 'xixi']"></g-checkbox>
    <g-input-number :max="10" :min="1" v-model="inputNum" @change="inputNumChange"></g-input-number>

    <g-select v-model="selectValue" @change="selectChange" :selects="['苹果', '香蕉', '西瓜']"> </g-select>
    <g-slider class="slider" v-model="percent"></g-slider>
    <g-progress :percentage="percent" :strokeWidth="20"></g-progress>
    <g-tag v-for="item in tagInfo" :key="item.name" style="margin-top: 10px">{{item.name}}</g-tag>
    <g-badge :value="4" :max="99" :hidden="false" type="warning">
      <g-button type="hump">消息</g-button>
    </g-badge>

    <g-tree :data="data"></g-tree>

    <g-pagination :total="300" @change="pageChange"></g-pagination>

    <g-rate v-model="rateNum" @change="rateChange"></g-rate>

    <g-table :data="tableData"></g-table> -->

    <!-- <g-magnifier :maskWidth="100" :width="500" imgUrl="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/4/8/169fd81e7d7cc8ad~tplv-t2oaga2asx-zoom-crop-mark:3024:3024:3024:1702.awebp"></g-magnifier> -->
    <!-- <div v-waterMark="{text:'129K',textColor:'rgba(225, 225, 225, 0.3)', imgUrl:'https://imgconvert.csdnimg.cn/aHR0cHM6Ly9pbWcucGhwLmNuL3VwbG9hZC9pbWFnZS83OTQvMzAzLzU2NC8xNTc5NjE0NzgyODY2MDExLnBuZw?x-oss-process=image/format,png'}">
      
    </div> -->
    
    <!-- <g-carousel style="margin-top: 20px" height="250px">
      <g-carousel-item  v-for="item in 4" :key="item">
        <img  src="https://imgconvert.csdnimg.cn/aHR0cHM6Ly9pbWcucGhwLmNuL3VwbG9hZC9pbWFnZS83OTQvMzAzLzU2NC8xNTc5NjE0NzgyODY2MDExLnBuZw?x-oss-process=image/format,png" alt="">
      </g-carousel-item>
    </g-carousel> -->

    
  </div>

  
  
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  data(){
    return {
      stepActive: 0,
      showDialog: false,
      rateNum: 4,
      tagInfo:[
        {name: '嘻嘻'},
        {name: '哈哈'}
      ],
      percent: 0,
      switchOpen: true,
      message: '',
      isPayOpen: false,
      isSiderOpen: false,
      select: '1',
      selectValue: '',
      check:[],
      inputNum: 1,
      sliderData: [
        {
          name: '头部',
          child: [
            {name: '嘻嘻'},
            {name: '哈哈',child: [
            {name: 'shag'},
            {name: 'cji'}
          ]},
          ],
          func: function() {
            console.log('哈哈')
          }
        },
        {
          name: '身体',
          child: [
            {
              name: '霍霍',
              func: function() {
            console.log('霍霍')
          }
            }
          ]
        },
        {
          name: '脚部'
        }
      ],
      data: [{
          label: '一级 1',
          children: [{
            label: '二级 1-1',
            children: [{
              label: '三级 1-1-1'
            }]
          }]
        }, {
          label: '一级 2',
          children: [{
            label: '二级 2-1',
            children: [{
              label: '三级 2-1-1'
            }]
          }, {
            label: '二级 2-2',
            children: [{
              label: '三级 2-2-1'
            }]
          }]
        }, {
          label: '一级 3',
          children: [{
            label: '二级 3-1',
            children: [{
              label: '三级 3-1-1'
            }]
          }, {
            label: '二级 3-2',
            children: [{
              label: '三级 3-2-1'
            }]
          }]
        }],
       tableData: [{
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1517 弄'
          }, {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄'
          }, {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          }]
    }
    
  },
  components: {
    HelloWorld
  },
  methods: {
    changeStepActive() {
      if (this.stepActive < 8) {
        this.stepActive++;
      } else {
        this.stepActive = 0
      }
      // this.stepActive += 1;
      console.log(this.stepActive)
    },
    openhaha() {
      this.isOpen = false;
    },
    rateChange(index) {
      console.log(index)
    },
    swiChange() {
      console.log(this.switchOpen)
    },
    getMessage() {
      console.log(this.message)
    },
    changeCheck() {
      console.log(this.check)
    },
    inputEnd(password) {
      console.log(password);
      setTimeout(() => {
          if (password == '111111') {
          this.$refs.pays.$success(true).then((res) => {
            // console.log('成功');
            this.isPayOpen = false;
          })
        } else {
          this.$refs.pays.$fail()
        }
      }, 2000)
      // console.log('cc',password);
    },
    selectChange() {
      console.log(this.selectValue)
    },
    onForget() {
      console.log('跳转找回密码');
      this.isPayOpen = false;
    },
    inputNumChange() {
      console.log(this.inputNum);
    },
    haha() {
      return
    },
    pageChange(current) {
      console.log(current);
    }
  },
  created() {
    
  },
  mounted() {
    // setInterval(() => {
    //   this.percent += 1
    //   if (this.percent > 100) {
    //     return
    //   }
    // }, 100)
  }
}
</script>

<style scoped>
body {
  width: 100%;
  /* display: flex; */
}
button {
  margin-left: 20px;
  /* color: #5679A6; */
}
.slot {
  /* background-color: red; */
  height: 40px;
  line-height: 40px;
}
.slider {
  /* margin: 10px 20px; */
}
#app {
  /* padding: 0 20px; */
  background-size:100%;
  /* font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale; */
  /* text-align: center; */
  /* color: #2c3e50; */
  /* margin-top: 60px; */
  /* background-color: red; */
  /* color: #5679A6; */
  background: #f1f3f6;
  height: 700px;
}
</style>
