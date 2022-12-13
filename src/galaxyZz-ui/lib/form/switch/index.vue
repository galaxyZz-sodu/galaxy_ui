<template>
    <div class="body">
        <div class="inactive" v-if="inactiveText">{{inactiveText}}</div>
        <div class="out"  v-on:click="onClick"> 
            <div class="back" :class="{open: value}"></div>
            <div class="circle" :class="[value ? 'circleOpen' : 'circleClose']"></div>
        </div>
        <div class="active" v-if="activeText">{{activeText}}</div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            value_1: this.value
        }
    },
    props: {
        value: {
            type: Boolean,
        },
        activeText: {
            type: String
        },
        inactiveText: {
            type: String
        }
    },
    methods: {
        onClick() {
            this.value_1 = !this.value_1
            this.$emit('input', this.value_1);
            this.$emit('change')
        }
    }
}
</script>

<style scoped>
    .body {
        display: flex;
        align-items: center;
    }
    .active {
        margin-left: 5px;
    }
    .inactive {
        margin-right: 5px;
    }
    .out {
        width: 40px;
        height: 20px;
        position: relative;
        box-shadow:  2px 2px 2px #c6c7ca inset,
                -2px -2px 3px #ffffff inset;
        border-radius: 10px;
        background: #f1f3f6;
        position: relative;
        /* padding-top: 2px;
        padding-left: 2px; */
        box-sizing: border-box;
        /* transition: padding-left 0.4s; */
        /* transition:  background-color 0.4s; */
    }
    
    .back {
        position: absolute;
        background: linear-gradient(145deg, #00f2fe, #4facfe);
        box-shadow:  3px 3px 6px rgba(17, 20, 21, 0.3) inset;
        border-radius: 10px;
        width: 100%;
        height: 100%;
        opacity: 0;
        transition: all 0.4s;
    }
    .open {
        opacity: 1;
    }
    .circle {
        width: 16px;
        height: 16px;
        position: absolute;
        top: 2px;
        left: 2px;
        transition: all 0.4s;
        border-radius: 8px;
        box-shadow:  2px 2px 12px #c6c7ca,
                -4px -4px 12px #ffffff;
        background: linear-gradient(145deg, #d9dbdd, #ffffff);
        
    }
    
    .circleOpen {
        box-shadow: 2px 2px 12px #c6c7ca;
        left: 22px;
    }
</style>

