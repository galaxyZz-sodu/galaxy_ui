<template>
    <div>
        <div class="thirdTitle">
            template
        </div>
            <div class="code">
                <div class="scroll">
                    <div v-html="html"></div>
                </div>
            </div>
        <div class="thirdTitle" v-if="jsShow">
            javascript
        </div>
        <div class="autoSroll">
            <div class="code" v-if="jsShow">
                <div class="scroll" v-html="js"></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        html: {
            type: String
        },
        js: {
            type: String
        },
        jsShow: {
            type: Boolean,
            default: true
        }
    }
}
</script>
<style lang="less" scoped>
    .scroll {
        width: 500px;
        height: 100%;
    }

    
/* 整个滚动条 */
::-webkit-scrollbar {
  /* 对应纵向滚动条的宽度 */
  width: 10px;
  /* 对应横向滚动条的宽度 */
  height: 10px;
}

/* 滚动条上的滚动滑块 */
::-webkit-scrollbar-thumb {
  background-color: rgb(225, 225, 225);
  border-radius: 32px;
}

/* 滚动条轨道 */
::-webkit-scrollbar-track {
  background-color: transparent;
  border-radius: 32px;
}
</style>