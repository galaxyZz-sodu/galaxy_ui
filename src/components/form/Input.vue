<template>
    <div>
        <div class="title">
            输入框
        </div>
        <div class="secondTitle">
            基础用法
        </div>
        <g-input v-model="message" style="width: 300px" @change="inputChange"></g-input>
        <Code :js="basicUsageJs" :html="basicUsageHTML"></Code>
        <div class="secondTitle">
            输入事件
        </div>
        <div class="suppleTitle">
            当输入框内容发生改变时触发
        </div>
        <g-input v-model="message" style="width: 300px" @change="inputChange"></g-input>
        <Code :js="eventJs" :html="eventHTML"></Code>
    </div>
</template>

<script>
export default {
    data() {
        return {
            basicUsageHTML: '<p>&lt;<span style="color: rgb(224, 108, 117);">g-input</span> <span style="color: rgb(209, 154, 102);">v-model</span>="<span style="color: rgb(224, 108, 117);">message</span>" <span style="color: rgb(209, 154, 102);">style</span>=<span style="color: rgb(152, 195, 121);">"width: 300px"</span>&gt;&lt;/<span style="color: rgb(224, 108, 117);">g-input</span>&gt;</p>',
            basicUsageJs: '<p><span style="color: rgb(97, 175, 239);">data</span>() {</p><p>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color: rgb(198, 120, 221);">return</span> {</p><p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span style="color: rgb(224, 108, 117);">message</span>: <span style="color: rgb(152, 195, 121);">""</span></p><p>&nbsp; &nbsp; &nbsp; &nbsp; }</p><p>}</p>',
            eventHTML: '<p>&lt;<span style="color: rgb(224, 108, 117);">g-input</span> <span style="color: rgb(209, 154, 102);">v-model</span>="<span style="color: rgb(224, 108, 117);">message</span>" <span style="color: rgb(209, 154, 102);">style</span>=<span style="color: rgb(152, 195, 121);">"width: 300px"</span> @<span style="color: rgb(209, 154, 102);">change</span>="<span style="color: rgb(224, 108, 117);">inputChange</span>"&gt;&lt;/<span style="color: rgb(224, 108, 117);">g-input</span>&gt;</p>',
            eventJs: '<p><span style="color: rgb(224, 108, 117);">methods</span>: {</p><p>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color: rgb(97, 175, 239);">inputChange</span>() {</p><p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span style="color: rgb(229, 192, 123);">console</span>.<span style="color: rgb(97, 175, 239);">log</span>(<span style="color: rgb(229, 192, 123);">this</span>.<span style="color: rgb(224, 108, 117);">message</span>);</p><p>&nbsp; &nbsp; &nbsp; &nbsp; }</p><p>}</p>',
            message: ''
        }
    },
    methods: {
        inputChange() {
            console.log(this.message);
        }
    }
}
</script>

<style scoped>

</style>