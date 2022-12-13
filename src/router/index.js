import VueRouter from 'vue-router'
import Vue from 'vue' 
// import Demo1 from '../pages/demo-1.vue'
// import Demo2 from '../pages/demo-2.vue'
Vue.use(VueRouter)
 
export default new VueRouter({
    routes: [
        {
            path: '/demo1',
            component: Demo1,
        },
        {
            path: '/demo2',
            component: Demo2,
        },
    ]
})
