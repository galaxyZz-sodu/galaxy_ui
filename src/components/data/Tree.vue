<template>
    <div>
        <div class="title">树型控件</div>
        <div class="secondTitle">基础用法</div>
        <g-tree :data="treeData"></g-tree>
        <Code :js="basicUsageJs" :html="basicUsageHTML"></Code>
    </div>
</template>

<script>
export default {
    data() {
        return {
            treeData: [
                {
                    label: "1",
                    children: [
                        {
                            label: "11",
                        }
                    ]
                },
                {
                    label: "2"
                },
            ],
            basicUsageJs: '<p><span style="color: rgb(97, 175, 239);">data</span>() {</p><p>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color: rgb(198, 120, 221);">return</span> {</p><p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span style="color: rgb(224, 108, 117);">treeData</span>: [</p><p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; {</p><p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span style="color: rgb(224, 108, 117);">label</span>: <span style="color: rgb(152, 195, 121);">"1"</span>,</p><p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span style="color: rgb(224, 108, 117);">children</span>: [</p><p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; {</p><p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span style="color: rgb(224, 108, 117);">label</span>: <span style="color: rgb(152, 195, 121);">"11"</span>,</p><p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; }</p><p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ]</p><p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; },</p><p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; {</p><p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span style="color: rgb(224, 108, 117);">label</span>: <span style="color: rgb(152, 195, 121);">"2"</span></p><p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; },</p><p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ]</p><p>&nbsp; &nbsp; &nbsp; &nbsp; }</p><p>}</p>',
            basicUsageHTML: '<p>&lt;<span style="color: rgb(224, 108, 117);">g-tree</span> :<span style="color: rgb(209, 154, 102);">data</span>="<span style="color: rgb(224, 108, 117);">treeData</span>"&gt;&lt;/<span style="color: rgb(224, 108, 117);">g-tree</span>&gt;</p>'
        }
    }
}
</script>

<style scoped>

</style>