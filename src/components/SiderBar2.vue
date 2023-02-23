<template>
    <div>
        <div class="out">
            <div class="guide" @click="goHome">
                <div class="siderTitle">开发指南</div>
            </div>
            
            <div class="component">
                <div class="siderTitle">组件</div>

                <div class="ul">
                    <div class="liTitle">
                        Basic
                    </div>
                    <div @click="goLi">
                        <div class="li" :class="{isSelect: selectName == i.router}" v-for="(i, index) in basic" :key="index" v-bind:data-router="i.router">
                            {{i.name}}
                        </div>
                    </div>
                    
                </div>

                <div class="ul">
                    <div class="liTitle">
                        Form
                    </div>
                    <div @click="goLi">
                        <div class="li" :class="{isSelect: selectName == i.router}" v-for="(i, index) in form" :key="index" v-bind:data-router="i.router">
                            {{i.name}}
                        </div>
                    </div>
                </div>

                <div class="ul">
                    <div class="liTitle">
                        Data
                    </div>
                    <div @click="goLi">
                        <div class="li" :class="{isSelect: selectName == i.router}" v-for="(i, index) in data" :key="index"  v-bind:data-router="i.router">
                            {{i.name}}
                        </div>
                    </div>
                    
                </div>

                <div class="ul">
                    <div class="liTitle">
                        Navigation
                    </div>
                    <div @click="goLi">
                        <div class="li" :class="{isSelect: selectName == i.router}" v-for="(i, index) in navigation" :key="index" v-bind:data-router="i.router">
                            {{i.name}}
                        </div>
                    </div>
                    
                </div>

                <div class="ul">
                    <div class="liTitle">
                        Others
                    </div>
                    <div @click="goLi">
                        <div class="li" :class="{isSelect: selectName == i.router}" v-for="(i, index) in others" :key="index" v-bind:data-router="i.router">
                            {{i.name}}
                        </div>
                    </div>
                    
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
            ],
            others: [
                {name: 'Carousel 走马灯', router: 'carousel'},
                {name: 'Dialog 对话框', router: 'dialog'},
                {name: 'Magnifier 放大镜', router: 'magnifier'},
                {name: 'Popover 弹出框', router: 'popover'},
                {name: 'WaterMark 水印', router: 'waterMark'},
            ]
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
            this.$router.push({
                path: '/'
            })
        }
    },
}
</script>

<style lang="less" scoped>
.out {
    overflow-y: scroll;
    // background-color: red;
    width: 240px;
    height: 100%;
    max-height: 700px;
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
</style>