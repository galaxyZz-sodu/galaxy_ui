<template>
    <div class="transferOut">
        <div class="frame" :style="{width: width + 'px', height: height + 'px'}" @drop="dropToLeft($event,'item')" @dragover="allowDrop($event)">
            <div class="transferTop">
                <div class="check" :class="{'isSelect': isLeftAllSelect}" @click="clickAllSelectLeft"></div>
                <div class="transferTitle">选项栏一</div>
            </div>
            <div class="transferContent" :style="{height: height - 30 + 'px'}">
                <div class="li" v-for="item in leftData" :key="item.key" :draggable="!item.disabled && isDrag" @dragstart="drag($event, item.key)">
                    <div class="check" :class="{'isSelect': slelectLeftList.indexOf(item.key) != -1, 'isDisabledCheck': item.disabled}" @click="clickSelectBoxLeft(item.key, item.disabled)"></div>
                    <div class="text" :class="{'isDisabledText': item.disabled}">
                        {{item.label}}
                    </div>
                </div>
            </div>
            
        </div>
        <div class="transferBtn" @click="clickBtnLeft">
            +
        </div>
        <div class="transferBtn" @click="clickBtnRight">
            >
        </div>
        <div class="frame" :style="{width: width + 'px', height: height + 'px'}" @drop="dropToRight($event,'item')" @dragover="allowDrop($event)">
            <div class="transferTop">
                <div class="check" :class="{'isSelect': isRightAllSelect}" @click="clickAllSelectRight"></div>
                <div class="transferTitle">选项栏一</div>
            </div>
            <div class="transferContent" :style="{height: height - 30 + 'px'}">
                <div class="li" v-for="item in rightData" :key="item.key" :draggable="!item.disabled && isDrag" @dragstart="drag($event, item.key)">
                    <div class="check" :class="{'isSelect': slelectRightList.indexOf(item.key) != -1, 'isDisabledCheck': item.disabled}" @click="clickSelectBoxRight(item.key, item.disabled)"></div>
                    <div v-show="value.indexOf(item.key) !== -1"  :class="{'isDisabledText': item.disabled}">
                        {{item.label}}
                    </div>
                </div>
            </div>
            
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            slelectLeftList: [],
            slelectRightList: [],
            transferValue: this.value,
            isLeftAllSelect: false,
            isRightAllSelect: false,
            dragKey: ''
        }
    },
    props: {
        data: {
            type: Array,
            default: []
        },
        value: {
            type: Array
        },
        width: {
            type: Number,
            default: 150
        },
        height: {
            type: Number,
            default: 200
        },
        isDrag: {
            type: Boolean,
            default: false
        }
    },
    computed: {
        leftData() {
            return this.data.filter(item => {
                return this.transferValue.indexOf(item.key) == -1;
            })
        },
        rightData() {
            return this.data.filter(item => {
                return this.transferValue.indexOf(item.key) != -1
            })
        },
    },
    methods: {
        clickSelectBoxLeft(key, disabled) {
            if (disabled) return;
            let index = this.slelectLeftList.indexOf(key);
            index == -1 ? this.slelectLeftList.push(key) : this.slelectLeftList.splice(index, 1);
        },
        clickSelectBoxRight(key, disabled) {
            if (disabled) return;
            let index = this.slelectRightList.indexOf(key);
            index == -1 ? this.slelectRightList.push(key) : this.slelectRightList.splice(index, 1);
        },
        clickBtnRight() {
            for (let i in this.slelectLeftList) {
                this.transferValue.push(this.slelectLeftList[i])
            }
            this.slelectLeftList = [];
            this.isLeftAllSelect = false;
            this.$emit('input', this.transferValue);
        },
        clickBtnLeft() {
            for (let i in this.slelectRightList) {
                let deleindex = this.transferValue.indexOf(this.slelectRightList[i]);
                this.transferValue.splice(deleindex, 1);
            };
            this.slelectRightList = [];
            this.isRightAllSelect = false;
            this.$emit('input', this.transferValue);
        },
        clickAllSelectLeft() {
            this.isLeftAllSelect = !this.isLeftAllSelect
            this.leftData.forEach(item => {
                if (item.disabled) return;
                let index = this.slelectLeftList.indexOf(item.key);
                index == -1 ? this.slelectLeftList.push(item.key) : this.slelectLeftList.splice(index, 1);
                if (index != -1 && this.isLeftAllSelect) {
                    this.slelectLeftList.push(item.key);
                } else if (index == -1 && !this.isLeftAllSelect) {
                    this.slelectLeftList.splice(index, 1);
                }
            });
        },
        clickAllSelectRight() {
            this.isRightAllSelect = !this.isRightAllSelect;
            this.rightData.forEach(item => {
                if (item.disabled) return;
                let index = this.slelectRightList.indexOf(item.key);
                index == -1 ? this.slelectRightList.push(item.key) : this.slelectRightList.splice(index, 1);
                if (index != -1 && this.isRightAllSelect) {
                    this.slelectRightList.push(item.key);
                } else if (index == -1 && !this.isRightAllSelect) {
                    this.slelectRightList.splice(index, 1);
                }
            });
        },
        // 拖拽
        drag(ev, key) {
            // console.log("拖动", key);
            this.dragKey = key;
        },
        // 允许放下拖拽
        allowDrop(ev) {
            ev.preventDefault();
        },
        // 放下事件
        dropToRight(ev, item) {
            ev.preventDefault();
            if (!this.dragKey) return;
            this.transferValue.push(this.dragKey);
            this.$emit('input', this.transferValue);
            this.dragKey = '';
        },
        dropToLeft(ev, item) {
            ev.preventDefault();
            let deleindex = this.transferValue.indexOf(this.dragKey);
            this.transferValue.splice(deleindex, 1);
            this.$emit('input', this.transferValue);
            this.dragKey = '';
        },
    },
    mounted() {}
}
</script>

<style scoped>
.transferOut {
    display: flex;
    align-items: center;
}
.transferTitle {
    padding: 5px 6px;
    font-size: 18px;
}
.frame {
    padding: 10px;
    background-color: #f1f3f6;
    box-shadow:  4px 4px 8px #c6c7ca,
            -6px -6px 12px #ffffff;
    border-radius: 5px;
}

.transferTop {
    display: flex;
    align-items: center;
}
.transferContent {
    overflow: auto;
}
.li {
    padding: 4px 5px;
    display: flex;
    align-items: center;
}
.check {
    width: 16px;
    height: 16px;
    background: #f1f3f6;
    border-radius: 2px;
    transition: all 0.4s ease-out;
    box-shadow:  2px 2px 4px #c6c7ca,
            -4px -4px 6px #ffffff;
    margin-right: 5px;
}
.isSelect {
    box-shadow:  2px 3px 6px rgba(17, 20, 21, 0.2) inset;
    background: linear-gradient(145deg, #00f2fe, #4facfe);
    transition: all 0.4s ease-out;
}
.isDisabledCheck {
    background-color: #c6c7ca;
    box-shadow: none;
}
.isDisabledText {
    color: #c6c7ca;
}
.transferBtn {
    height: 20px;
    margin: 0 10px;
    padding: 10px;
    border: none;
    background-color: #f1f3f6;
    box-shadow:  4px 4px 8px #c6c7ca,
            -6px -6px 12px #ffffff;
    border-radius: 5px;
    transition: box-shadow 0.3s ease-out;
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
  background-color: rgba(225, 225, 225, 0.6);
  border-radius: 32px;
}

/* 滚动条轨道 */
::-webkit-scrollbar-track {
  background-color: transparent;
  border-radius: 32px;
}
</style>