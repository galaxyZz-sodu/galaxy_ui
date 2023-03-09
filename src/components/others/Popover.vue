<template>
    <div>
        <div class="title">
            弹出框
        </div>
        <div class="secondTitle">
            基础用法
        </div>
        <div class="out">
            <g-popover class="item" trigger="click" placement="bottom" content="你是谁" title="你好">
                <g-button slot="reference">click触发</g-button>
            </g-popover>
            <g-popover class="item" trigger="hover" placement="bottom" content="你是谁" title="你好">
                <g-button slot="reference">hover触发</g-button>
            </g-popover>
            <g-popover class="item" trigger="focus" placement="bottom" content="你是谁" title="你好">
                <g-button slot="reference">focus触发</g-button>
            </g-popover>
        </div>
        
        <Code :jsShow="false" :html="basicUsageHTML"></Code>
        <div class="tabelTitle">
            popover参数
        </div>
        <g-table :data="tableData" class="table">
            <g-table-column prop="parameter" label="参数" :width="100"></g-table-column>
            <g-table-column prop="explain" label="解释" :width="100"></g-table-column>
            <g-table-column prop="type" label="数据类型" :width="100"></g-table-column>
            <g-table-column prop="select" label="可选值" :width="200"></g-table-column>
            <g-table-column prop="default" label="默认值" :width="100"></g-table-column>
        </g-table>
        <div class="tabelTitle">
            popover插槽
        </div>
        <g-table :data="slotData" class="table">
            <g-table-column prop="parameter" label="参数" :width="200"></g-table-column>
            <g-table-column prop="explain" label="解释" :width="300"></g-table-column>
        </g-table>
        <div class="tabelTitle">
            popover事件
        </div>
        <g-table :data="event" class="table">
            <g-table-column prop="eventName" label="事件名称" :width="100"></g-table-column>
            <g-table-column prop="explain" label="解释" :width="400"></g-table-column>
            <g-table-column prop="callBackPara" label="回调参数" :width="100"></g-table-column>
        </g-table>
    </div>
</template>

<script>
export default {
    data() {
        return {
            basicUsageHTML: `<p>&lt;<span style="color: rgb(224, 108, 117);">g-popover</span> <span style="color: rgb(209, 154, 102);">trigger</span>=<span style="color: rgb(152, 195, 121);">"click"</span> <span style="color: rgb(209, 154, 102);">placement</span>=<span style="color: rgb(152, 195, 121);">"bottom"</span> <span style="color: rgb(209, 154, 102);">content</span>=<span style="color: rgb(152, 195, 121);">"你是谁"</span> <span style="color: rgb(209, 154, 102);">title</span>=<span style="color: rgb(152, 195, 121);">"你好"</span>&gt;</p><p>&nbsp; &nbsp; &lt;<span style="color: rgb(224, 108, 117);">g-button</span> <span style="color: rgb(209, 154, 102);">slot</span>=<span style="color: rgb(152, 195, 121);">"reference"</span>&gt;click触发&lt;/<span style="color: rgb(224, 108, 117);">g-button</span>&gt;</p><p>&lt;/<span style="color: rgb(224, 108, 117);">g-popover</span>&gt;</p><p>&lt;<span style="color: rgb(224, 108, 117);">g-popover</span> <span style="color: rgb(209, 154, 102);">trigger</span>=<span style="color: rgb(152, 195, 121);">"hover"</span> <span style="color: rgb(209, 154, 102);">placement</span>=<span style="color: rgb(152, 195, 121);">"bottom"</span> <span style="color: rgb(209, 154, 102);">content</span>=<span style="color: rgb(152, 195, 121);">"你是谁"</span> <span style="color: rgb(209, 154, 102);">title</span>=<span style="color: rgb(152, 195, 121);">"你好"</span>&gt;</p><p>&nbsp; &nbsp; &lt;<span style="color: rgb(224, 108, 117);">g-button</span> <span style="color: rgb(209, 154, 102);">slot</span>=<span style="color: rgb(152, 195, 121);">"reference"</span>&gt;hover触发&lt;/<span style="color: rgb(224, 108, 117);">g-button</span>&gt;</p><p>&lt;/<span style="color: rgb(224, 108, 117);">g-popover</span>&gt;</p><p>&lt;<span style="color: rgb(224, 108, 117);">g-popover</span> <span style="color: rgb(209, 154, 102);">trigger</span>=<span style="color: rgb(152, 195, 121);">"focus"</span> <span style="color: rgb(209, 154, 102);">placement</span>=<span style="color: rgb(152, 195, 121);">"bottom"</span> <span style="color: rgb(209, 154, 102);">content</span>=<span style="color: rgb(152, 195, 121);">"你是谁"</span> <span style="color: rgb(209, 154, 102);">title</span>=<span style="color: rgb(152, 195, 121);">"你好"</span>&gt;</p><p>&nbsp; &nbsp; &lt;<span style="color: rgb(224, 108, 117);">g-button</span> <span style="color: rgb(209, 154, 102);">slot</span>=<span style="color: rgb(152, 195, 121);">"reference"</span>&gt;focus触发&lt;/<span style="color: rgb(224, 108, 117);">g-button</span>&gt;</p><p>&lt;/<span style="color: rgb(224, 108, 117);">g-popover</span>&gt;</p>`,
            tableData: [
                {
                    parameter: 'trigger',
                    explain: '触发方式',
                    type: 'String',
                    select: 'click/focus/hover',
                    default: 'click'
                },
                {
                    parameter: 'placement',
                    explain: '出现位置',
                    type: 'String',
                    select: 'top/bottom',
                    default: 'top'
                },
                {
                    parameter: 'content',
                    explain: '显示内容',
                    type: 'String',
                    select: '-',
                    default: '-'
                },
                {
                    parameter: 'title',
                    explain: '标题',
                    type: 'String',
                    select: '-',
                    default: '-'
                }
            ],
            slotData: [
                {
                    parameter: 'reference',
                    explain: '触发popver显示的HTML元素'
                }
            ],
            event: [
                {
                    eventName: 'show',
                    explain: '当弹出框显示时调用',
                    callBackPara: '-'
                }
            ]
        }
    },
    methods: {
        getShow() {
            console.log('hhhaa');
        }
    },
}
</script>

<style scoped lang="less">
    .out {
        display: flex;
        .item {
            margin-right: 10px;
        }
    }
</style>