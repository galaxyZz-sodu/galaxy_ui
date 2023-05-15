<template>
    <div class="out" @scroll="isScroll">
        <div>
            <div ref="min" class="min" @mousemove.stop="getMouseMove" @mouseover.stop="getMouseOver" @mouseleave.stop="getMouseLeave">
                <img class="min-img" :style="{width: width + 'px'}" :src="imgUrl" alt="">
                <div v-if="MaskShow" :style="{left: maskX + 'px', top: maskY + 'px', width: maskWidth + 'px', height: maskWidth + 'px'}" class="mask"></div>
            </div>
        </div>
        
        <div class="big" :class="{'big-hid':!MaskShow || maxRightDistance < 0}" 
        :style="{left: width + 5 + 'px', width: width + 'px', height: width + 'px'}">
            <img :style="{left: bigMoveX + 'px', top: bigMoveY + 'px', width: width * (width / maskWidth) + 'px'}" class="big-img" :src="imgUrl" alt="">
        </div>

        <div class="big-2" :class="{'big-hid':!MaskShow || maxRightDistance >= 0}" 
        :style="{left: 0, top: minHeight + 5 + 'px', width: width + 'px', height: width + 'px'}">
            <img :style="{left: bigMoveX + 'px', top: bigMoveY + 'px', width: width * (width / maskWidth) + 'px'}" class="big-img" :src="imgUrl" alt="">
        </div>
    </div>
    
</template>

<script>
export default {
    data() {
        return {
            outX: 0,
            outY: 0,
            mouseX: 0,
            mouseY: 0,
            originTop: 0,
            nowTop: 0,
            maskW: this.maskWidth,
            minHeight: 0,
            MaskShow: false,
            isCrossBorder: false,
            maxRightDistance: 0,
            bigRightSiderInstance: 0,
            screenWidth: 0,
            scrollY: 0
        }
    },
    props: {
        imgUrl: {
            type: String
        },
        width: {
            type: Number,
            default: 500
        },
        maskWidth: {
            type: Number,
            default: 100
        }
    },
    computed: {
        bigStyle() {
            return {
                'big-right': this.maxRightDistance > 0,
                'big-bottom': this.maxRightDistance <= 0
            }
        }
    },
    watch: {
        screenWidth(val){
        // 为了避免频繁触发resize函数导致页面卡顿，使用定时器
        if(!this.timer){
            // 一旦监听到的screenWidth值改变，就将其重新赋给data里的screenWidth
            this.screenWidth = val;
            this.maxRightDistance = this.screenWidth - this.bigRightSiderInstance;
            this.timer = true
            let that = this
            setTimeout(function(){
                // 打印screenWidth变化的值
                // console.log(that.maxRightDistance)
                that.timer = false
            },400)
        }
    
  }

    },
    computed: {
        // scrollY() {
        //     return this.originTop - this.$refs.min.getBoundingClientRect().top;
        // },
        maskX() {
            if (this.mouseX - this.outX <= this.maskWidth / 2) {
                return 0;
            } else if (this.mouseX - this.outX >= this.width - this.maskWidth / 2) {
                return this.width - this.maskWidth;
            } else {
                return this.mouseX - this.outX - this.maskWidth / 2
            }
        },
        maskY() {
            if (this.mouseY - this.outY +this.scrollY  < this.maskWidth / 2) {
                return 0;
            } else if (this.mouseY - this.outY + this.scrollY >= this.minHeight - this.maskWidth / 2) {
                return this.minHeight - this.maskWidth ;
            } else {
                return this.mouseY - this.outY + this.scrollY  - this.maskWidth / 2;
            }
            
        },
        bigMoveX() {
            return this.maskX * -(this.width / this.maskWidth)
        },
        bigMoveY() {
            return this.maskY * -(this.width / this.maskWidth)
        }
    },
    methods: {
        getMouseMove(e) {
            this.mouseX = e.pageX;
            this.mouseY = e.pageY;
            this.nowTop = e.pageY
            this.scrollY = this.originTop - this.$refs.min.getBoundingClientRect().top
            // console.log('yyy',this.scrollY);
            // console.log('666',this.$refs.min.getBoundingClientRect().top);
            // console.log('x',this.mouseX)
            // console.log(e.clientY );
            // console.log(e.pageY);
            // console.log('nowTop',this.nowTop)
            // console.log('bd',document.body.scrollTop)
        },
        getMouseOver() {
            this.MaskShow = true;
        },
        getMouseLeave() {
            this.MaskShow = false;
        },
        getElementLeftAndTop(element){
            // console.log('scroll',element.scrollTop)
            var left = element.offsetLeft;// 当前元素左边距
            var top= element.offsetTop;// 当前元素上边距
            var parent= element.offsetParent;// 当前元素的父级元素
            // console.log(parent)
            while (parent!== null){
                left += parent.offsetLeft;// 累加左边距
                top+= parent.offsetTop;// 累加上边距
                parent= parent.offsetParent;// 依次获取父元素
                // console.log(parent)
                
            }
            // console.log(left)
                // console.log('eleTop',top)
            this.outX = left;
            // console.log('or', this.originTop);
            // console.log('now',element.getBoundingClientRect().top)
            
            this.outY = top;
        },
        isScroll() {
            // console.log('j')
        }
    },
    mounted() {
        // console.log('87', this.$refs.min.getBoundingClientRect().top);
        var outImg = document.querySelector('.out');
        var minImg = document.querySelector('.min');
        var bigImg = document.querySelector('.big');
        this.originTop = minImg.getBoundingClientRect().top;
        // 获取原图片到文档左侧和顶部的距离
        this.getElementLeftAndTop(minImg);
        // this.maxRightDistance = window.innerWidth - bigImg.getBoundingClientRect().right;
        this.bigRightSiderInstance = bigImg.getBoundingClientRect().right;
        // console.log('outX',this.outX);
        // console.log('outy',this.outY);
        this.minHeight = minImg.offsetHeight;
        this.maxRightDistance = window.innerWidth - this.bigRightSiderInstance;
        const that = this
        window.onresize = () => {
            return (() => {
                // window.screenWidth = document.body.clientWidth
                that.screenWidth = window.innerWidth;
                that.getElementLeftAndTop(minImg);
            })()
        }
        // window.onscroll = () => {
        //     return (() => {
        //         console.log('gun');
        //     })()
            
        // }
    }
}
</script>

<style scoped>
    .out {
        /* margin: 100px; */
        position: relative;
    }
    .big {
        position: absolute;
        top: 0;
        overflow: hidden;
        z-index: 99;
    }
    .big-2 {
        position: absolute;
        overflow: hidden;
        z-index: 99;
    }
    .big-img {
        margin: 0;
        position: absolute;
    }
    .big-hid {
        opacity: 0;
    }
    .mask {
        position: absolute;
        background-color: rgba(225, 225, 225, 0.3);
    }

</style>
