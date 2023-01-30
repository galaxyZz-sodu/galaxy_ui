import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import Vue2Editor from "vue2-editor";
// import xpay from './galaxy-ui/lib'
// import xsiderbar from './galaxy-ui/lib'
// import galaxyUi from 'galaxyzz-ui'
import galaxyUi from './galaxyZz-ui'

import './assets/publicCss.css'
Vue.config.productionTip = false;
// Vue.use(xpay);
// Vue.use(xsiderbar)
Vue.use(galaxyUi);
Vue.use(Vue2Editor);
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
