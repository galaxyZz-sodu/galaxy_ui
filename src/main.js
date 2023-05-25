import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import Vue2Editor from "vue2-editor";
// import xpay from './galaxy-ui/lib'
// import xsiderbar from './galaxy-ui/lib'
// import galaxyUi from 'galaxyzz-ui'
// 引入压缩包
// import galaxyUi from './galaxyZz-ui/lib/index.js'
// import './galaxyZz-ui/lib/lib-style/index.min.css'

// 引入源文件
import galaxyUi from './galaxyZz-ui/tlib/index'

import Code from '@/view/code'
import TableScroll from '@/view/TableScroll'
import './assets/publicCss.css'
import scrollTop from './directives/ScrollTop'
// Vue.config.productionTip = false;
// Vue.use(xpay);
// Vue.use(xsiderbar)
Vue.use(galaxyUi);
Vue.use(Vue2Editor);
Vue.component('Code', Code);
Vue.component('TableScroll', TableScroll)
Vue.directive('scrollTop', scrollTop)
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
