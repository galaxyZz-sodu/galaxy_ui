<template>
    <div class="out">
        <input type="text" :value="data" @click.stop="changeShow">
        <div class="ul" v-if="isShow">
            <div @click="onSelect(item, index)" :class="{liSelect: index == nowIndex}" v-for="(item, index) in selects" :key="index" class="li">
                {{item}}
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            data: this.value,
            isShow: false,
            nowIndex: -1
        }
    },
    props: {
        selects: {
            type: Array,
            default: []
        },
        value: {
            type: String
        }
    },
    mounted() {
        document.addEventListener('click', (e) => {
            let className = e.target.className;
            if (this.isShow == true) {
                if (className !== 'ul' && className !== 'li') {
                    this.isShow = false; 
                }
            }
        })
    },
    methods: {
        onSelect(item, index) {
            this.data = item;
            this.nowIndex = index;
            this.$emit('input', this.data);
            this.$emit('change')
            this.isShow = !this.isShow;
        },
        changeShow() {
            this.isShow = !this.isShow;
        }
    }
}
</script>

<style scoped>
    .out {
        width: 240px;
        height: 40px;
        background: #f1f3f6;
        box-shadow:  3px 3px 3px #c6c7ca inset,
                -3px -3px 3px #ffffff inset;
        border-radius: 40px;
        display: flex;
        justify-content: center;
        position: relative;
        transition: 0.3s all ease-out;
    }
    .out:hover {
        box-shadow: 1.5px 1.5px 2px #c6c7ca inset, -1.5px -1.5px 2px #ffffff inset;
    }
    input {
        width: 200px;
        background-color: transparent;
        outline: none;
        padding: 3px 5px;
        font-size: 20px;
        border: none;
    }
    .ul {
        position: absolute;
        top: 44px;
        background-color: #f1f3f6;
        box-shadow:  2px 2px 8px #c6c7ca;
        border-radius: 5px;
        width: 240px;
        padding: 2px;
    }
    .li {
        margin: 4px 2px;
        padding: 4px 20px;
        border-radius: 5px;
        transition: 0.3s all ease-out;
    }
    .liSelect {
        /* background-color: aqua; */
        /* background: linear-gradient(145deg,#4facfe, #00f2fe); */
        /* color: #f1f3f6; */
        box-shadow:  2px 2px 3px #c6c7ca,
                -2px -2px 3px #ffffff;
    }
    .li:hover {
        /* background-color: aqua; */

        /* background: linear-gradient(145deg,#4facfe, #00f2fe); */
        /* color: #f1f3f6; */
        box-shadow:  2px 2px 3px #c6c7ca,
                -2px -2px 3px #ffffff;
    }

</style>
