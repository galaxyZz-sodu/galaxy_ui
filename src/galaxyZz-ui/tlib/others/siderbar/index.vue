<template>
    <div>
        <transition name="sider">
            <div class="out" v-if="isShow" :class="{mid: width == 'mid', small: width == 'small', large: width == 'large'}">
                <div class="inner">
                    <slot name="header"></slot>
                    <siderBar class="siderBar" :listdata="data"></siderBar>
                </div>
            </div>
        </transition>
    </div>
    
</template>

<script>

export default {
    data() {
        return {

        }
    },
    props: {
        data: {
            type: Array,
            require: true
        },
        isShow: {
            type: Boolean,   
            default: false
        },           
        width: {
            type: String,
            default: 'mid'                                                       
        }                                     
    },   
    components: {
        'siderBar': () => import('./siderbar')
    }
}
</script>

<style scoped>
    .small {
        width: 20%;
    }
    .mid {
        width: 40%;
    }
    .large {
        width: 70%;
    }
    .out {
        position: fixed;
        z-index: 99;
        overflow-y: auto;
        overflow-x: hidden;
        left: 0;
        top: 0;
        /* width: 80%; */
        height: 100%;
        padding: 20px 30px;
        /* background-color: #F4F5F5; */
        /* background-image: linear-gradient(-45deg, #C973FF, #AEBAF8); */
        /* box-shadow: 2px 0px 4px rgba(0, 0, 0, 0.3); */
        background: linear-gradient(
            to bottom left,
            rgba(225, 225, 225, 0.2),
            rgba(225, 225, 225, 0.4)
            
        );
        box-shadow: 2px -5px 6px rgba(0, 0, 0, 0.4);
        backdrop-filter: blur(6px);
        /* border-top-right-radius: 0.5rem;
        border-bottom-right-radius: 0.5rem; */
    }
    .inner {
        /* background-color: linear-gradient(-45deg, #C973FF, #AEBAF8); */
        /* background-color: red; */
        padding-top: 1rem;
        width: 80%;
        /* box-shadow: -3px -3px 6px rgba(0, 0, 0, 0.9); */
    }
    .siderBar {

    }
    .sider-enter-active, .sider-leave-active {
        transition: all 0.4s ease;
    }
    .sider-enter{
        transform: translateX(-100%);
        /* opacity: 0; */
    }
    .sider-enter-to{
        /* transform: translateY(0); */
        transform: translateX(0);
        /* opacity: 1; */
    }
    .sider-leave{
        /* transform: translateY(0); */
        transform: translateX(0);
        /* opacity: 1; */
    }
    .sider-leave-to{
        /* transform: translateY(500%); */
        transform: translateX(-100%);
        /* opacity: 0; */
    }
</style>