<template>
  <div>
    <div class="samllTitle">欢迎使用</div>
    <div class="welTitle">GALAXY-UI</div>
    <div class="secondTitle">npm安装</div>
    <div class="suppleTitle">在当前项目命令行窗口中写入以下内容</div>
    <div class="code">npm i galaxyzz-ui -S</div>
    <div class="secondTitle">引入galaxy-ui</div>
    <div class="suppleTitle">在main.js中写入以下内容</div>
    <div class="code">
            <div v-html="importCode"></div>
        </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      importCode:`<p><span style="color: rgb(198, 120, 221);">import</span> <span style="color: rgb(224, 108, 117);">Vue</span> <span style="color: rgb(198, 120, 221);">from</span> <span style="color: rgb(152, 195, 121);">'vue'</span></p><p><span style="color: rgb(198, 120, 221);">import</span> <span style="color: rgb(224, 108, 117);">App</span> <span style="color: rgb(198, 120, 221);">from</span> <span style="color: rgb(152, 195, 121);">'./App.vue'</span></p><p><span style="color: rgb(198, 120, 221);">import</span> <span style="color: rgb(224, 108, 117);">galaxyUi</span> <span style="color: rgb(198, 120, 221);">from</span> <span style="color: rgb(152, 195, 121);">'galaxyzz-ui'</span></p><p><span style="color: rgb(229, 192, 123);">Vue</span>.<span style="color: rgb(224, 108, 117);">config</span>.<span style="color: rgb(224, 108, 117);">productionTip</span> <span style="color: rgb(86, 182, 194);">=</span> <span style="color: rgb(209, 154, 102);">false</span></p><p><br></p><p><span style="color: rgb(229, 192, 123);">Vue</span>.<span style="color: rgb(97, 175, 239);">use</span>(<span style="color: rgb(224, 108, 117);">galaxyUi</span>)</p><p><br></p><p><span style="color: rgb(198, 120, 221);">new</span> <span style="color: rgb(229, 192, 123);">Vue</span>({</p><p>&nbsp; <span style="color: rgb(97, 175, 239);">render</span>: <span style="color: rgb(97, 175, 239);">h</span> <span style="color: rgb(198, 120, 221);">=&gt;</span> <span style="color: rgb(97, 175, 239);">h</span>(<span style="color: rgb(224, 108, 117);">App</span>),</p><p>}).<span style="color: rgb(97, 175, 239);">$mount</span>(<span style="color: rgb(152, 195, 121);">'#app'</span>)</p>`
    }
  }
};
</script>

<style scoped>
.samllTitle {
    padding: 40px 10px 10px;
    font-size: 40px;
}
.welTitle {
  padding: 10px 10px;
  font-size: 100px;
}
</style>