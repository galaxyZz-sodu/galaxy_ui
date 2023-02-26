<template>
    <div>
        <div class="title">表格</div>
        <div class="secondTitle">基础用法</div>
        <g-table :data="tableData" class="table">
            <g-table-column prop="name" label="姓名" :width="150"></g-table-column>
            <g-table-column prop="age" label="年级" :width="150"></g-table-column>
            <g-table-column prop="subject" label="专业" :width="100"></g-table-column>
        </g-table>
        <Code :js="basicUsageJs" :html="basicUsageHTML"></Code>
    
        <div class="secondTitle">边框</div>
        <g-table :data="tableData" :border="true">
            <g-table-column prop="name" label="姓名" :width="150"></g-table-column>
            <g-table-column prop="age" label="年级" :width="150"></g-table-column>
            <g-table-column prop="subject" label="专业" :width="100"></g-table-column>
        </g-table>
        <Code :jsShow="false" :html="borderHTML"></Code>

        <div class="secondTitle">斑马纹表格</div>
        <g-table :data="tableData" :stripe="true">
            <g-table-column prop="name" label="姓名" :width="150"></g-table-column>
            <g-table-column prop="age" label="年级" :width="150"></g-table-column>
            <g-table-column prop="subject" label="专业" :width="100"></g-table-column>
        </g-table>
        <Code :jsShow="false" :html="stripeHTML"></Code>
    </div>
</template>

<script>
export default {
    data() {
        return {
            tableData: [
                {
                    name: '张三',
                    age: '20',
                    subject: '网络工程',
                    
                },
                {
                    name: '李四',
                    age: '21',
                    subject: '软件工程',
                    
                }
            ],
            basicUsageJs: `<p><span style="color: rgb(97, 175, 239);">data</span>() {</p><p>&nbsp; &nbsp; <span style="color: rgb(198, 120, 221);">return</span> {</p><p>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color: rgb(224, 108, 117);">tableData</span>: [</p><p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; {</p><p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span style="color: rgb(224, 108, 117);">name</span>: <span style="color: rgb(152, 195, 121);">'张三'</span>,</p><p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span style="color: rgb(224, 108, 117);">age</span>: <span style="color: rgb(152, 195, 121);">'20'</span>,</p><p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span style="color: rgb(224, 108, 117);">subject</span>: <span style="color: rgb(152, 195, 121);">'网络工程'</span></p><p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; },</p><p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; {</p><p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span style="color: rgb(224, 108, 117);">name</span>: <span style="color: rgb(152, 195, 121);">'李四'</span>,</p><p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span style="color: rgb(224, 108, 117);">age</span>: <span style="color: rgb(152, 195, 121);">'21'</span>,</p><p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span style="color: rgb(224, 108, 117);">subject</span>: <span style="color: rgb(152, 195, 121);">'软件工程'</span></p><p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; }</p><p>&nbsp; &nbsp; &nbsp; &nbsp; ],</p><p>&nbsp; &nbsp; }</p><p>}</p>`,
            basicUsageHTML: `<p>&lt;<span style="color: rgb(224, 108, 117);">g-table</span> :<span style="color: rgb(209, 154, 102);">data</span>="<span style="color: rgb(224, 108, 117);">tableData</span>" <span style="color: rgb(209, 154, 102);">class</span>=<span style="color: rgb(152, 195, 121);">"table"</span>&gt;</p><p>&nbsp; &nbsp; &nbsp;&lt;<span style="color: rgb(224, 108, 117);">g-table-column</span> <span style="color: rgb(209, 154, 102);">prop</span>=<span style="color: rgb(152, 195, 121);">"name"</span> <span style="color: rgb(209, 154, 102);">label</span>=<span style="color: rgb(152, 195, 121);">"姓名"</span> :<span style="color: rgb(209, 154, 102);">width</span>="<span style="color: rgb(209, 154, 102);">150</span>"&gt;&lt;/<span style="color: rgb(224, 108, 117);">g-table-column</span>&gt;</p><p>&nbsp; &nbsp; &nbsp;&lt;<span style="color: rgb(224, 108, 117);">g-table-column</span> <span style="color: rgb(209, 154, 102);">prop</span>=<span style="color: rgb(152, 195, 121);">"age"</span> <span style="color: rgb(209, 154, 102);">label</span>=<span style="color: rgb(152, 195, 121);">"年级"</span> :<span style="color: rgb(209, 154, 102);">width</span>="<span style="color: rgb(209, 154, 102);">150</span>"&gt;&lt;/<span style="color: rgb(224, 108, 117);">g-table-column</span>&gt;</p><p>&nbsp; &nbsp; &nbsp;&lt;<span style="color: rgb(224, 108, 117);">g-table-column</span> <span style="color: rgb(209, 154, 102);">prop</span>=<span style="color: rgb(152, 195, 121);">"subject"</span> <span style="color: rgb(209, 154, 102);">label</span>=<span style="color: rgb(152, 195, 121);">"专业"</span> :<span style="color: rgb(209, 154, 102);">width</span>="<span style="color: rgb(209, 154, 102);">100</span>"&gt;&lt;/<span style="color: rgb(224, 108, 117);">g-table-column</span>&gt;</p><p>&lt;/<span style="color: rgb(224, 108, 117);">g-table</span>&gt;</p>`,
            borderHTML: `<p>&lt;<span style="color: rgb(224, 108, 117);">g-table</span> :<span style="color: rgb(209, 154, 102);">data</span>="<span style="color: rgb(224, 108, 117);">tableData</span>" :<span style="color: rgb(209, 154, 102);">border</span>="<span style="color: rgb(209, 154, 102);">true</span>"&gt;</p><p>&nbsp; &nbsp; &nbsp;&lt;<span style="color: rgb(224, 108, 117);">g-table-column</span> <span style="color: rgb(209, 154, 102);">prop</span>=<span style="color: rgb(152, 195, 121);">"name"</span> <span style="color: rgb(209, 154, 102);">label</span>=<span style="color: rgb(152, 195, 121);">"姓名"</span> :<span style="color: rgb(209, 154, 102);">width</span>="<span style="color: rgb(209, 154, 102);">150</span>"&gt;&lt;/<span style="color: rgb(224, 108, 117);">g-table-column</span>&gt;</p><p>&nbsp; &nbsp; &nbsp;&lt;<span style="color: rgb(224, 108, 117);">g-table-column</span> <span style="color: rgb(209, 154, 102);">prop</span>=<span style="color: rgb(152, 195, 121);">"age"</span> <span style="color: rgb(209, 154, 102);">label</span>=<span style="color: rgb(152, 195, 121);">"年级"</span> :<span style="color: rgb(209, 154, 102);">width</span>="<span style="color: rgb(209, 154, 102);">150</span>"&gt;&lt;/<span style="color: rgb(224, 108, 117);">g-table-column</span>&gt;</p><p>&nbsp; &nbsp; &nbsp;&lt;<span style="color: rgb(224, 108, 117);">g-table-column</span> <span style="color: rgb(209, 154, 102);">prop</span>=<span style="color: rgb(152, 195, 121);">"subject"</span> <span style="color: rgb(209, 154, 102);">label</span>=<span style="color: rgb(152, 195, 121);">"专业"</span> :<span style="color: rgb(209, 154, 102);">width</span>="<span style="color: rgb(209, 154, 102);">100</span>"&gt;&lt;/<span style="color: rgb(224, 108, 117);">g-table-column</span>&gt;</p><p>&lt;/<span style="color: rgb(224, 108, 117);">g-table</span>&gt;</p>`,
            stripeHTML: `<p>&lt;<span style="color: rgb(224, 108, 117);">g-table</span> :<span style="color: rgb(209, 154, 102);">data</span>="<span style="color: rgb(224, 108, 117);">tableData</span>" :<span style="color: rgb(209, 154, 102);">stripe</span>="<span style="color: rgb(209, 154, 102);">true</span>"&gt;</p><p>&nbsp; &nbsp; &lt;<span style="color: rgb(224, 108, 117);">g-table-column</span> <span style="color: rgb(209, 154, 102);">prop</span>=<span style="color: rgb(152, 195, 121);">"name"</span> <span style="color: rgb(209, 154, 102);">label</span>=<span style="color: rgb(152, 195, 121);">"姓名"</span> :<span style="color: rgb(209, 154, 102);">width</span>="<span style="color: rgb(209, 154, 102);">150</span>"&gt;&lt;/<span style="color: rgb(224, 108, 117);">g-table-column</span>&gt;</p><p>&nbsp; &nbsp; &lt;<span style="color: rgb(224, 108, 117);">g-table-column</span> <span style="color: rgb(209, 154, 102);">prop</span>=<span style="color: rgb(152, 195, 121);">"age"</span> <span style="color: rgb(209, 154, 102);">label</span>=<span style="color: rgb(152, 195, 121);">"年级"</span> :<span style="color: rgb(209, 154, 102);">width</span>="<span style="color: rgb(209, 154, 102);">150</span>"&gt;&lt;/<span style="color: rgb(224, 108, 117);">g-table-column</span>&gt;</p><p>&nbsp; &nbsp; &lt;<span style="color: rgb(224, 108, 117);">g-table-column</span> <span style="color: rgb(209, 154, 102);">prop</span>=<span style="color: rgb(152, 195, 121);">"subject"</span> <span style="color: rgb(209, 154, 102);">label</span>=<span style="color: rgb(152, 195, 121);">"专业"</span> :<span style="color: rgb(209, 154, 102);">width</span>="<span style="color: rgb(209, 154, 102);">100</span>"&gt;&lt;/<span style="color: rgb(224, 108, 117);">g-table-column</span>&gt;</p><p>&lt;/<span style="color: rgb(224, 108, 117);">g-table</span>&gt;</p>`
        }
    }
}
</script>

<style scoped>

</style>