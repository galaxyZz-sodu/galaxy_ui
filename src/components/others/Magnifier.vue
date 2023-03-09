<template>
    <div>
        <div class="title">
            放大镜
        </div>
        <div class="secondTitle">
            基础用法
        </div>
        <g-magnifier imgUrl="https://pic.5tu.cn/uploads/allimg/2107/pic_5tu_big_6263316_e0beb62983b846b941ba2f62571dd8f4.jpg"
        :width="350"
        :maskWidth="50"
        >
        </g-magnifier>
        <Code :jsShow="false" :html="basicUsageHTML"></Code>
        <div class="tabelTitle">
            magnifier参数
        </div>
        <g-table :data="tableData" class="table">
            <g-table-column prop="parameter" label="参数" :width="100"></g-table-column>
            <g-table-column prop="explain" label="解释" :width="150"></g-table-column>
            <g-table-column prop="type" label="数据类型" :width="150"></g-table-column>
            <g-table-column prop="select" label="可选值" :width="150"></g-table-column>
            <g-table-column prop="default" label="默认值" :width="100"></g-table-column>
        </g-table>
    </div>
</template>

<script>
export default {
    data() {
        return {
            basicUsageHTML:'<p>&lt;<span style="color: rgb(224, 108, 117);">g-magnifier</span> <span style="color: rgb(209, 154, 102);">imgUrl</span>=<span style="color: rgb(152, 195, 121);">"https://pic.5tu.cn/uploads/allimg/2107/pic_5tu_big.jpg"</span></p><p>:<span style="color: rgb(209, 154, 102);">width</span>="<span style="color: rgb(209, 154, 102);">350</span>"</p><p>:<span style="color: rgb(209, 154, 102);">maskWidth</span>="<span style="color: rgb(209, 154, 102);">50</span>"</p><p>&gt;</p><p>&lt;/<span style="color: rgb(224, 108, 117);">g-magnifier</span>&gt;</p>',
            tableData: [
                {
                    parameter: 'imgUrl',
                    explain: '图片url地址',
                    type: 'String',
                    select: '-',
                    default: '-'
                },
                {
                    parameter: 'width',
                    explain: '图片宽度',
                    type: 'Number',
                    select: '-',
                    default: '-'
                },
                {
                    parameter: 'maskWidth',
                    explain: '遮罩宽度',
                    type: 'Number',
                    select: '-',
                    default: '-'
                },
            ],
        }
    }
}
</script>

<style scoped>

</style>