import VueRouter from 'vue-router'
import Vue from 'vue' 
import basic from './basic'
import data from './data'
import form from './form'
import navigation from './navigation'
import others from './others'
// import Demo1 from '../pages/demo-1.vue'
// import Demo2 from '../pages/demo-2.vue'
Vue.use(VueRouter)
 
export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: () => import('@/components/Welcome.vue'),
            // redirect: {
            //     path: '/button'
            // }
        },
        ...basic,
        ...form,
        ...data,
        ...navigation,
        ...others
    ]
})
