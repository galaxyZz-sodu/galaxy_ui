<template>
    <div class="out">
        <div class="progress" :style="{height: strokeWidth + 'px', borderRadius: (strokeWidth / 2) + 'px'}">
            <div class="back" 
            :style="{width: percent + '%', height: strokeWidth + 'px', borderRadius: (strokeWidth / 2) + 'px', background: color}"></div>
        </div>
        <div class="text">{{percent + '%'}}</div>
    </div>
</template>

<script>
export default {
    props: {
        percentage: {
            type: Number,
            default: 0,
        },
        strokeWidth: {
            type: Number,
            default: 6
        },
        color: {
            type: String
        }
    },
    computed: {
        percent() {
            if (this.percentage > 100) {
                return 100;
            } else if (this.percentage < 0) {
                return 0;
            } else {
                return this.percentage
            }
        }
    }
}
</script>

<style scoped>
    .out {
        display: flex;
        align-items: center;
    }
    .text {
        margin-left: 5px;
    }
    .progress {
        width: 300px;
        height: 6px;
        border-radius: 3px;
        box-shadow:  2px 2px 4px #c6c7ca,
                -4px -4px 8px #ffffff;
        
    }
    .back {
        width: 0;
        height: 6px;
        border-radius: 3px;
        background: linear-gradient(145deg, #00f2fe, #4facfe);
        transition: all 0.2s ease;
    }
</style>
