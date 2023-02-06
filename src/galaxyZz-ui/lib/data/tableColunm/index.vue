<template>
    <div :class="['columnOut', {columnOutBorder: isBorder}]">
        <div class="label" :class="['column', {'border-lable': isBorder, 'columnBorder': isBorder}]" :style="{width: width + 'px'}">
            <slot name="label" v-if="isLableSlot"></slot>
            <span  v-else>{{label}}</span>
        </div>
        <div :class="['column', {'columnBorder': isBorder, 'colunmStripe': isStripe}]" :style="{width: width + 'px'}" class="content" v-for="(i, index) in columnData" :key="index">
            <div>{{i}}</div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isLableSlot: false
        }
    },
    props: {
        prop: {
            type: String
        },
        label: {
            type: String,
        },
        width: {
            type: Number,
            default: 200
        }
    },
    inject: ['data', 'isBorder', 'isStripe'],
    computed: {
        columnData() {
            let columnData = [];
            for (let item of this.data) {
                columnData.push(item[this.prop])
            };
            return columnData;
        }
    },
    mounted() {
        // console.log(this.data);
        this.isLableSlot = this.$slots.hasOwnProperty('label')
    }
}
</script>

<style scoped>
.columnOutBorder {
    border-right: 1px solid #c0c4cc;
}
.columnOut:first-of-type .columnBorder {
    /* background-color: red; */
    border-left: 1px solid #c0c4cc;
}
.label {
    font-size: 16px;
    color: #909399;
}
.border-lable {
    border-top: 1px solid #c0c4cc ;
}
    .column {
        border-bottom: 1px solid #c0c4cc;
        height: 48px;
        padding: 0 4px;
        line-height: 48px;
    }
    .columnContent div {
        /* margin: ; */
    }
    .colunmStripe:nth-of-type(2n - 1) {
        background-color: rgba(204, 204, 204, 0.3);
    }
</style>