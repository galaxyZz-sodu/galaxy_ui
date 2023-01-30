<template>
  <div class="out">

    <SiderBar2 class="siderBar"></SiderBar2>
    <div class="content">
      <router-view></router-view>
    </div>
    
  </div>

  
  
</template>

<script>
import SiderBar2 from '@/components/SiderBar2.vue'
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  data(){
    return {
    }
    
  },
  components: {
    HelloWorld,
    SiderBar2
  },
  methods: {
    
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

<style scoped lang="less">
.out {
  width: 1140px;
  height: 100%;
  margin: 0 auto;
  position: relative;
  background: red;
  .siderBar {
    // overflow: auto;
    position: absolute;
    left: 0;
  }
  .content {
    position: absolute;
    left: 280px;
    padding: 20px 10px;
  }
}
  
</style>
