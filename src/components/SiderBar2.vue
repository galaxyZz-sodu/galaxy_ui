<template>
    <div>
        <div class="out">
            <div class="guide" @click="goHome">
                <div class="siderTitle">开发指南</div>
            </div>
            
            <div class="component">
                <div class="siderTitle">组件</div>

                <div class="ul">
                    <div class="liTitle" :class="{'liTitleSelect': basicShow}" @click="liShow('basic')">
                        Basic
                    </div>
                    <transition name="li">
                        <div @click="goLi" v-if="basicShow">
                            <div class="li" :class="{isSelect: selectName == i.router}" v-for="(i, index) in basic" :key="index" v-bind:data-router="i.router">
                                {{i.name}}
                            </div>
                        </div>
                    </transition>
                </div>

                <div class="ul">
                    <div class="liTitle" :class="{'liTitleSelect': formShow}" @click="liShow('form')">
                        Form
                    </div>
                    <transition name="li">
                        <div @click="goLi" v-if="formShow">
                            <div class="li" :class="{isSelect: selectName == i.router}" v-for="(i, index) in form" :key="index" v-bind:data-router="i.router">
                                {{i.name}}
                            </div>
                        </div>
                    </transition>
                </div>

                <div class="ul">
                    <div class="liTitle" :class="{'liTitleSelect': dataShow}" @click="liShow('data')">
                        Data
                    </div>
                    <transition name="li">
                        <div @click="goLi" v-if="dataShow">
                            <div class="li" :class="{isSelect: selectName == i.router}" v-for="(i, index) in data" :key="index"  v-bind:data-router="i.router">
                                {{i.name}}
                            </div>
                        </div>
                    </transition>
                </div>

                <div class="ul">
                    <div class="liTitle" :class="{'liTitleSelect': navigationShow}" @click="liShow('navigation')">
                        Navigation
                    </div>
                    <transition name="li">
                        <div @click="goLi" v-if="navigationShow">
                            <div class="li" :class="{isSelect: selectName == i.router}" v-for="(i, index) in navigation" :key="index" v-bind:data-router="i.router">
                                {{i.name}}
                            </div>
                        </div>
                    </transition>
                </div>

                <div class="ul">
                    <div class="liTitle" :class="{'liTitleSelect': othersShow}" @click="liShow('others')">
                        Others
                    </div>
                    <transition name="li">
                        <div @click="goLi" v-if="othersShow">
                            <div class="li" :class="{isSelect: selectName == i.router}" v-for="(i, index) in others" :key="index" v-bind:data-router="i.router">
                                {{i.name}}
                            </div>
                        </div>
                    </transition>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "SiderBar2",
    data() {
        return {
            basic: [
                {name: 'Button 按钮', router: 'button'}
            ],
            selectName: '',
            data: [
                {name: 'Badage 标记', router: 'badage'},
                {name: 'Pagination 分页', router: 'pagination'},
                {name: 'Progress 进度条', router: 'progress'},
                {name: 'Table 表格', router: 'table'},
                {name: 'Tag 标签', router: 'tag'},
                {name: 'Tree 树形控件', router: 'tree'},
                {name: 'Descriptions 描述列表', router:'descriptions'}
            ],
            form: [
                {name: 'Checkbox 多选框', router: 'checkbox'},
                {name: 'Input 输入框', router: 'input'},
                {name: 'InputNumber 计数器', router: 'inputNumber'},
                {name: 'Radio 单选框', router: 'radio'},
                {name: 'Rate 评分', router: 'rate'},
                {name: 'Select 选择器', router: 'select'},
                {name: 'slider 滑块', router: 'slider'},
                {name: 'Switch 开关', router: 'switch'},
                {name: 'Upload 上传', router: 'upload'},
            ],
            navigation: [
                {name: 'Steps 步骤条', router: 'steps'},
                {name: 'Breadcrumb 面包屑', router: 'breadcrumb'},
                {name: 'PageHeader 页头', router: 'pageHeader'}
            ],
            others: [
                {name: 'Carousel 走马灯', router: 'carousel'},
                {name: 'Dialog 对话框', router: 'dialog'},
                {name: 'Magnifier 放大镜', router: 'magnifier'},
                {name: 'Popover 弹出框', router: 'popover'},
                {name: 'WaterMark 水印', router: 'waterMark'},
            ],
            basicShow: false,
            dataShow: false,
            navigationShow: false,
            formShow: false,
            othersShow: false
        }
    },
    methods: {
        goLi(e) {
            console.log(e.target.dataset.router);
            this.selectName = e.target.dataset.router
            this.$router.push({
                path: `/${e.target.dataset.router}`
            })
        },
        goHome() {
            this.selectName = ''
            this.$router.push({
                path: '/'
            })
        },
        liShow(title) {
            switch (title) {
                case 'basic':
                    this.basicShow = !this.basicShow;
                    break;
                case 'data':
                    this.dataShow = !this.dataShow;
                    break;
                case 'navigation':
                    this.navigationShow = !this.navigationShow;
                    break;
                case 'form':
                    this.formShow = !this.formShow;
                    break;
                case 'others':
                    this.othersShow = !this.othersShow
            }
            
        }
    },
}
</script>

<style lang="less" scoped>
.out {
    overflow-y: scroll;
    // background-color: red;
    box-sizing: border-box;
    width: 240px;
    // height: 100vh;
    max-height: 100vh;
    padding: 10px 20px;
    /* 隐藏滚动条 */
   scrollbar-width: none; /* firefox */
   -ms-overflow-style: none; /* IE 10+ */
   .guide {
    cursor:pointer;
   }
    .siderTitle {
        font-size: 20px;
        height: 40px;
        line-height: 40px;
        
    }
    .component {
        .ul {
            margin-top: 30px;
            
            .liTitle {
                font-size: 12px;
                color: #999999;
                transition: 0.3s all ease-out;
                cursor:pointer;
            }
            .liTitle:hover {
                color: black!important;
            }
            .liTitleSelect {
                color: black;
            }
            .li {
                padding: 10px 5px;
                transition: 0.3s all ease-out;
                cursor:pointer;
            }
            .li:hover {
                background-color: rgb(225, 225, 225);
            }
            .isSelect {
                background-color: rgb(225, 225, 225);
            }
        }
    }
}
.out::-webkit-scrollbar {
    display: none; /* Chrome Safari */
}
 .li-enter-active, .li-leave-active {
        transition: all 0.2s ease-in-out;
    }
    .li-enter{
        transform: translateX(-100%);
        opacity: 0;
    }
    // .li-enter-to{
        
    // }
    // .li-leave{
        
    // }
    .li-leave-to{
        transform: translateX(110%);
       opacity: 0;
    }
    
</style>