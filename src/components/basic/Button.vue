<template>
    <div>
        <div class="title">
            按钮
        </div>
        <div class="secondTitle">基础用法</div>
        <g-button>按钮</g-button>
        <g-button type="sunk">按钮</g-button>
        <g-button type="hump">按钮</g-button>
        <vue-editor style="width: 400px" v-model="content" />
        <div>{{content}}</div>
        <div class="thirdTitle">
            template
        </div>
        <div class="code">
            <div v-html="typeContent"></div>
        </div>
        <div class="secondTitle">自定义大小和圆角</div>
        <g-button size="small" :round="true">按钮</g-button>
        <g-button size="mid" :round="true">按钮</g-button>
        <g-button size="large" :round="true">按钮</g-button>
        <div class="code">
            <div v-html="sizeContent"></div>
        </div>
        <div class="tabelTitle">
            button参数
        </div>
        <g-table :data="tableData" class="table">
            <g-table-column prop="parameter" label="参数" :width="100"></g-table-column>
            <g-table-column prop="explain" label="解释" :width="150"></g-table-column>
            <g-table-column prop="type" label="数据类型" :width="100"></g-table-column>
            <g-table-column prop="select" label="可选值" :width="150"></g-table-column>
            <g-table-column prop="default" label="默认值" :width="100"></g-table-column>
        </g-table>
    </div>
    
</template>

<script>
import { VueEditor } from "vue2-editor";
export default {
    components: {VueEditor},
    data() {
        return {
            content: '',
            typeContent: '<p>&lt;<span style="color: rgb(224, 108, 117);">g-button</span> &gt;按钮&lt;/<span style="color: rgb(224, 108, 117);">g-button</span>&gt;</p><p>&lt;<span style="color: rgb(224, 108, 117);">g-button</span> <span style="color: rgb(209, 154, 102);">type</span>=<span style="color: rgb(152, 195, 121);">"sunk"</span>&gt;按钮&lt;/<span style="color: rgb(224, 108, 117);">g-button</span>&gt;</p><p>&lt;<span style="color: rgb(224, 108, 117);">g-button</span> <span style="color: rgb(209, 154, 102);">type</span>=<span style="color: rgb(152, 195, 121);">"hump"</span>&gt;按钮&lt;/<span style="color: rgb(224, 108, 117);">g-button</span>&gt;</p>',
            sizeContent: '<p>&lt;<span style="color: rgb(224, 108, 117);">g-button</span> <span style="color: rgb(209, 154, 102);">size</span>=<span style="color: rgb(152, 195, 121);">"small"</span> :<span style="color: rgb(209, 154, 102);">round</span>="<span style="color: rgb(209, 154, 102);">true</span>"&gt;按钮&lt;/<span style="color: rgb(224, 108, 117);">g-button</span>&gt;</p><p>&lt;<span style="color: rgb(224, 108, 117);">g-button</span> <span style="color: rgb(209, 154, 102);">size</span>=<span style="color: rgb(152, 195, 121);">"mid"</span> :<span style="color: rgb(209, 154, 102);">round</span>="<span style="color: rgb(209, 154, 102);">true</span>"&gt;按钮&lt;/<span style="color: rgb(224, 108, 117);">g-button</span>&gt;</p><p>&lt;<span style="color: rgb(224, 108, 117);">g-button</span> <span style="color: rgb(209, 154, 102);">size</span>=<span style="color: rgb(152, 195, 121);">"large"</span> :<span style="color: rgb(209, 154, 102);">round</span>="<span style="color: rgb(209, 154, 102);">true</span>"&gt;按钮&lt;/<span style="color: rgb(224, 108, 117);">g-button</span>&gt;</p>',
            tableData: [
                {
                    parameter: 'type',
                    explain: '按钮样式类型',
                    type: 'String',
                    select: 'sunk/hump',
                    default: '-'
                },
                {
                    parameter: 'size',
                    explain: '按钮尺寸',
                    type: 'String',
                    select: 'small/mid/large',
                    default: 'mid'
                },
                {
                    parameter: 'round',
                    explain: '是否添加圆角',
                    type: 'Boolean',
                    select: 'true/false',
                    default: 'false'
                }
            ],
        }
    }
}
</script>

<style scoped>
    /* @import '@/assets/publicCss.css'; */
    button {
        margin: 5px;
    }
    /* .title {
        font-size: 30px;
        padding: 30px 10px;
    }
    .secondTitle {
        font-size: 25px;
        padding: 30px 10px;
    }
    .code {
        border: 1px solid #c0c4cc;
        border-radius: 5px;
        width: 700px;
        padding: 20px;
    } */
</style>