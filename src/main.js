import Vue from 'vue'
import App from './App.vue'
// import xpay from './galaxy-ui/lib'
// import xsiderbar from './galaxy-ui/lib'
// import galaxyUi from 'galaxyzz-ui'
import galaxyUi from './galaxyZz-ui'
Vue.config.productionTip = false;
// Vue.use(xpay);
// Vue.use(xsiderbar)
Vue.use(galaxyUi)
new Vue({
  render: h => h(App),
}).$mount('#app')
