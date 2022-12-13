<template>
    <div>
        <div v-for="(i, index) in data" :key="index" class="out">
            <div class="content" @click="changeShow(i.label)">
                <div v-show="hasChild(i)" class="arrow" :class="{rotate: showObj[i.label]}">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" t="1668477477978" class="icon-arrow" viewBox="0 0 1024 1024" version="1.1" p-id="1472" width="10" height="10"><path d="M288.791335 65.582671l446.41733 446.417329-446.41733 446.417329z" p-id="1473"/></svg>
                </div>
                <div class="label">{{i.label}}</div>
            </div>
            <transition name="childTree">
                <tree class="child" v-show="showObj[i.label] && i.children" :data="i.children" ></tree>
            </transition>
            
        </div>
        
    </div>
</template>

<script>
export default {
    name: 'tree',
    data() {
        return {
            showObj: {}
        }
    },
    computed: {
        isShow() {
            return function(label) {
                return this.showObj[label]
            }
        }
    },
    props: {
        data: {
            
        }
    },
    methods: {
        hasChild(i) {
            return i.hasOwnProperty('children')
        },
        // isShow(label) {
        //     return this.showObj[label]
        // },
        changeShow(label) {
            // console.log(this.showObj[label])
            this.showObj[label] = !this.showObj[label];
            console.log(this.showObj)
        }
    },
    mounted() {
        this.data?.forEach((i) => {
            this.$set(this.showObj, i.label, false)
            // this.showObj[i.label] = false;
        });
    }
}
</script>

<style scoped>
    .out {
        margin-left: 20px;
    }
    .content {
        display: flex;
        user-select:none;
    }
    .arrow {
        
        transition: all 0.3s;
    }
    .icon-arrow {
        color: red;
    }
    /* .child {
        overflow: hidden;
        height: 0;
        transition: height 0.3s;
    }
    .childShow {
        overflow: auto;
        height: 30px;
    } */
    .rotate {
        transform: rotate(90deg);
    }
    .childTree-enter-active{
        transition: all 0.4s;
    }
    .childTree-enter{
        opacity: 0; 
        /* height: 0; */
    }
    .childTree-enter-to{
        opacity: 1;
        /* height: 100%; */
    }
    .childTree-leave{
        /* height: 22px; */
        opacity: 1;
    }
    .childTree-leave-to{
        /* transform: translateY(500%); */
        /* height: 0; */
        opacity: 0; 
    }
</style>