<template>
    <div class="out">
        <div class="option" v-for="(item, index) in options" :key="index">
           <div class="btn" :class="{btnSelect: isSelect(item)}" @click="selectChange(item)">
            <div class="back" :class="{isSelect: isSelect(item)}"></div>
           </div>
           <div class="text">
            {{item}}
           </div>
           
            
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            select: []
        }
    },
    props: {
        options: {
            type: Array,
        },
        value: {
            type: Array
        }

    },
    methods: {
        isSelect(item) {
            return this.select.indexOf(item) !== -1;
        },
        selectChange(item) {
            let itemIndex = this.select.indexOf(item);
            if (itemIndex !== -1) {
                this.select.splice(itemIndex, 1);
            } else {
                this.select.push(item);
            };
            this.$emit('input', this.select);
            this.$emit('change')
        }
    },
    mounted() {
        this.select = this.value;
        // console.log('haha',this.select);
    }
}
</script>

<style scoped>
    .out {
        display: flex;
    }
    .option {
        display: flex;
        margin-right: 15px;
        line-height: 20px;
    }
    .btn {
        width: 20px;
        height: 20px;
        position: relative;
        margin-right: 5px;
        background: #f1f3f6;
        border-radius: 2px;
        transition: all 0.4s;
        box-shadow:  2px 2px 4px #c6c7ca,
                -4px -4px 6px #ffffff;
    }
    .btnSelect {
        box-shadow: none;
    }
    .back {
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        opacity: 0;
        border-radius: 2px;
        box-shadow:  3px 3px 6px rgba(17, 20, 21, 0.3) inset;
        background: linear-gradient(145deg, #00f2fe, #4facfe);
        transition: all 0.4s;
    }
    .isSelect {
        opacity: 1;
        
    }
</style>