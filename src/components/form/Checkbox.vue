<template>
    <div>
        <!-- <g-button>Check</g-button> -->
        <div class="title">多选框</div>
        <div class="secondTitle">基础用法</div>
        <g-checkbox v-model="check" @change="changeCheck" :options="options"></g-checkbox>
        <g-table :data="tableData">
            <g-table-column prop="parameter" label="参数" :width="100"></g-table-column>
            <g-table-column prop="explain" label="解释" :width="200"></g-table-column>
            <g-table-column prop="type" label="数据类型" :width="100"></g-table-column>
            <g-table-column prop="select" label="可选值" :width="100"></g-table-column>
            <g-table-column prop="default" label="默认值" :width="100"></g-table-column>
        </g-table>
    </div>
</template>

<script>
export default {
    data() {
        return {
            options: ['haha', 'xixi'],
            check: [],
            tableData: [
                {
                    parameter: 'options',
                    explain: '多选框的具体选项',
                    type: 'Array',
                    select: '-',
                    default: '-'
                },
                {
                    parameter: 'options',
                    explain: '多选框的具体选项',
                    type: 'Array',
                    select: '-',
                    default: '-'
                }
            ]
        }
    },
    methods: {
        changeCheck() {
            console.log(this.check);
        }
    }
}
</script>

<style scoped>
    
</style>