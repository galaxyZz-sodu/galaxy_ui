<template>
    <div class="out">
        <div>
            <div class="min" @mousemove.stop="getMouseMove" @mouseover.stop="getMouseOver" @mouseleave.stop="getMouseLeave">
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
            maskW: this.maskWidth,
            minHeight: 0,
            MaskShow: false,
            isCrossBorder: false,
            maxRightDistance: 0,
            bigRightSiderInstance: 0,
            screenWidth: 0
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
            if (this.mouseY - this.outY < this.maskWidth / 2) {
                return 0;
            } else if (this.mouseY - this.outY >= this.minHeight - this.maskWidth / 2) {
                return this.minHeight - this.maskWidth;
            } else {
                return this.mouseY - this.outY - this.maskWidth / 2;
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
        },
        getMouseOver() {
            this.MaskShow = true;
        },
        getMouseLeave() {
            this.MaskShow = false;
        }
    },
    mounted() {
        var outImg = document.querySelector('.out');
        var minImg = document.querySelector('.min');
        var bigImg = document.querySelector('.big');
        
        // this.maxRightDistance = window.innerWidth - bigImg.getBoundingClientRect().right;
        this.bigRightSiderInstance = bigImg.getBoundingClientRect().right;
        this.outX = outImg.offsetLeft;
        this.outY = outImg.offsetTop;
        this.minHeight = minImg.offsetHeight;
        this.maxRightDistance = window.innerWidth - this.bigRightSiderInstance;
        const that = this
        window.onresize = () => {
            return (() => {
                // window.screenWidth = document.body.clientWidth
                that.screenWidth = window.innerWidth
            })()
        }
    }
}
</script>

<style scoped>
    .out {
        margin: 100px;
        position: relative;
    }
    .big {
        position: absolute;
        top: 0;
        overflow: hidden;
    }
    .big-2 {
        position: absolute;
        overflow: hidden;
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
