import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import Vue2Editor from "vue2-editor";
// import xpay from './galaxy-ui/lib'
// import xsiderbar from './galaxy-ui/lib'
// import galaxyUi from 'galaxyzz-ui'
import galaxyUi from './galaxyZz-ui'
import Code from '@/view/code'
import './assets/publicCss.css'
import scrollTop from './directives/ScrollTop'
// Vue.config.productionTip = false;
// Vue.use(xpay);
// Vue.use(xsiderbar)
Vue.use(galaxyUi);
Vue.use(Vue2Editor);
Vue.component('Code', Code);
Vue.directive('scrollTop', scrollTop)
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
