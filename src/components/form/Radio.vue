<template>
    <div>
        <div class="title">
            单选框
        </div>
        <div class="secondTitle">
            基础用法
        </div>
        <g-radio v-model="select" label="1">选项一</g-radio>
        <g-radio v-model="select" label="2">选项二</g-radio>
        <g-radio v-model="select" label="3">选项三</g-radio>
        <Code :html="basicUsageHTML" :js="basicUsageJs"></Code>
    </div>
</template>

<script>
export default {
    data() {
        return {
            select: '',
            basicUsageHTML: '<p>&lt;<span style="color: rgb(224, 108, 117);">g-radio</span> <span style="color: rgb(209, 154, 102);">v-model</span>="<span style="color: rgb(224, 108, 117);">select</span>" <span style="color: rgb(209, 154, 102);">label</span>=<span style="color: rgb(152, 195, 121);">"1"</span>&gt;选项一&lt;/<span style="color: rgb(224, 108, 117);">g-radio</span>&gt;</p><p> &lt;<span style="color: rgb(224, 108, 117);">g-radio</span> <span style="color: rgb(209, 154, 102);">v-model</span>="<span style="color: rgb(224, 108, 117);">select</span>" <span style="color: rgb(209, 154, 102);">label</span>=<span style="color: rgb(152, 195, 121);">"2"</span>&gt;选项二&lt;/<span style="color: rgb(224, 108, 117);">g-radio</span>&gt;</p><p>&lt;<span style="color: rgb(224, 108, 117);">g-radio</span> <span style="color: rgb(209, 154, 102);">v-model</span>="<span style="color: rgb(224, 108, 117);">select</span>" <span style="color: rgb(209, 154, 102);">label</span>=<span style="color: rgb(152, 195, 121);">"3"</span>&gt;选项三&lt;/<span style="color: rgb(224, 108, 117);">g-radio</span>&gt;</p>',
            basicUsageJs: '<p><span style="color: rgb(97, 175, 239);">data</span>() {</p><p>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color: rgb(198, 120, 221);">return</span> {</p><p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span style="color: rgb(224, 108, 117);">select</span>: <span style="color: rgb(152, 195, 121);">""</span></p><p>&nbsp; &nbsp; &nbsp; &nbsp; }</p><p>}</p>'
        }
    }
}
</script>

<style scoped>

</style>