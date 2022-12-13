<template>
    <div class="out">
        <div class="li" v-for="(item, index) in listdata" :key="index">
            <div @click="changeShow(item.name, item.func)" class="name">{{item.name}}</div>
            <transition name="siderChild">
                <siderBar
                v-show="isShowArr[index]?.show && item.child"
                :listdata="item.child"
                ></siderBar>
            </transition>
            
        </div>
    </div>
</template>
<script>
export default {
    name: 'siderBar',
    data() {
        return {
            showChild: false,
            // myListdata: [],
            isShowArr: []
        }
    },
    computed: {
        isShow() {
            return (this.listdata || []).map((item) => {
                let obj = {show: false, title: ''};
                obj.title = item.name;
                return obj
            })
        },
    },
    watch: {
        
    },
    methods: {
        changeShow(name, func = this.kong) {
            this.isShowArr.forEach((item) => {
                if (item.title == name) {
                    item.show = !item.show;
                    // console.log(this.isShowArr);
                }
            });
            func();
        },
        kong() {
            return
        }
    },
    props: {
        listdata: {
            type: Array,
            require: false
        }
    },
    components: {
    },
    mounted() {
        // console.log(this.isShow);

        (this.listdata || []).forEach((item, index) => {
            let obj = {show: false, title: ''};
            obj.title = item.name;
            this.$set(this.isShowArr, index, obj)
        });

        
        // this.myListdata = this.listdata
    }
}
</script>
<style scoped>
    .out {
        padding: 0 20px ;
        width: 100%; 
        position: relative;
        /* background-color: aliceblue; */
        /* opacity: 0.7; */
        border-bottom: 2px solid rgba(255, 255, 255, 0.4);
        border-right: 2px solid rgba(255, 255, 255, 0.4);
        backdrop-filter: blur(6px);
        box-shadow: -2px -2px 6px rgba(0, 0, 0, 0.3);
        border-radius: 0.5rem;
    }
    .li {
        
    }
    .name {
        padding: 10px 0;
        text-align:left;
        font-size: 1rem;
        color: #3C375E;
        transition: height 1s easy;
    }
    .siderChild-enter-active, .siderChild-leave-active {
        transition: all 0.4s;
    }
    .siderChild-enter{
        /* transform: translateX(100px);
        opacity: 0; */
        height: 0;
        /* z-index: -1; */
    }
    .siderChild-enter-to{
        /* transform: translateX(0); */
        /* transform: translateY(0); */
        /* opacity: 1; */
        height: 20px;
        /* z-index: 1; */
    }
    .siderChild-leave{
        /* transform: translateY(0); */
        transform: translateX(0);
        opacity: 1;
    }
    .siderChild-leave-to{
        /* transform: translateY(500%); */
        transform: translateX(100%);
        opacity: 0;
    }
</style>