<template>
    <div>
        <div class="title">
            面包屑
        </div>
        <div class="secondTitle">
            基础用法
        </div>
        <g-breadcrumb>
            <g-breadcrumb-item :to="{path: '/'}">张三</g-breadcrumb-item>
            <g-breadcrumb-item :to="{path: '/badage'}">李四</g-breadcrumb-item>
            <g-breadcrumb-item>王五</g-breadcrumb-item>
        </g-breadcrumb>
        <Code :jsShow="false" :html="basicUsageHTML"></Code>
    </div>
</template>

<script>
export default {
    data() {
        return {
            basicUsageHTML: `<p>&lt;<span style="color: rgb(224, 108, 117);">g-breadcrumb</span>&gt;</p><p>&nbsp; &nbsp; &lt;<span style="color: rgb(224, 108, 117);">g-breadcrumb-item</span> :<span style="color: rgb(209, 154, 102);">to</span>="{<span style="color: rgb(224, 108, 117);">path</span>: <span style="color: rgb(152, 195, 121);">'/'</span>}"&gt;张三&lt;/<span style="color: rgb(224, 108, 117);">g-breadcrumb-item</span>&gt;</p><p>&nbsp; &nbsp; &lt;<span style="color: rgb(224, 108, 117);">g-breadcrumb-item</span> :<span style="color: rgb(209, 154, 102);">to</span>="{<span style="color: rgb(224, 108, 117);">path</span>: <span style="color: rgb(152, 195, 121);">'/badage'</span>}"&gt;李四&lt;/<span style="color: rgb(224, 108, 117);">g-breadcrumb-item</span>&gt;</p><p>&nbsp; &nbsp; &lt;<span style="color: rgb(224, 108, 117);">g-breadcrumb-item</span>&gt;王五&lt;/<span style="color: rgb(224, 108, 117);">g-breadcrumb-item</span>&gt;</p><p>&lt;/<span style="color: rgb(224, 108, 117);">g-breadcrumb</span>&gt;</p>`
        }
    }
}
</script>

<style scoped>

</style>