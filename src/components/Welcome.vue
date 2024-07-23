<template>
  <div>
    <div class="samllTitle">欢迎使用</div>
    <div class="welTitle">GALAXY-UI</div>
    <div class="secondTitle">npm安装</div>
    <div class="suppleTitle">在当前项目命令行窗口中写入以下内容</div>
    <div class="code">npm i galaxyzz-ui -S</div>
    <div class="secondTitle">全局引入galaxy-ui</div>
    <div class="suppleTitle">在main.js中写入以下内容即可全局引入</div>
    <div class="code">
        <div v-html="importCode"></div>
    </div>

    <div class="secondTitle">按需引入galaxy-ui</div>
    <div class="suppleTitle">首先下载babel-plugin-component</div>
    <div class="code">npm i babel-plugin-component -S</div>
    <div class="suppleTitle needTitle">在根目录babel.config.js中进行如下配置，再重启项目</div>
    <div class="code">
        <div v-html="babelCode"></div>
    </div>
    <div class="suppleTitle needTitle">在组件中就可以进行按需引入了</div>
    <div class="code">
        <div v-html="componentCode"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      importCode:`<p><span style="color: rgb(198, 120, 221);">import</span> <span style="color: rgb(224, 108, 117);">Vue</span> <span style="color: rgb(198, 120, 221);">from</span> <span style="color: rgb(152, 195, 121);">'vue'</span></p><p><span style="color: rgb(198, 120, 221);">import</span> <span style="color: rgb(224, 108, 117);">App</span> <span style="color: rgb(198, 120, 221);">from</span> <span style="color: rgb(152, 195, 121);">'./App.vue'</span></p><p><span style="color: rgb(198, 120, 221);">import</span> <span style="color: rgb(224, 108, 117);">galaxyUi</span> <span style="color: rgb(198, 120, 221);">from</span> <span style="color: rgb(152, 195, 121);">'galaxyzz-ui'</span></p><p><span style="color: rgb(198, 120, 221);">import</span> <span style="color: rgb(152, 195, 121);">'galaxyzz-ui/lib/lib-style/index.min.css'</span></p><p><br></p><p><span style="color: rgb(229, 192, 123);">Vue</span>.<span style="color: rgb(224, 108, 117);">config</span>.<span style="color: rgb(224, 108, 117);">productionTip</span> <span style="color: rgb(86, 182, 194);">=</span> <span style="color: rgb(209, 154, 102);">false</span></p><p><span style="color: rgb(229, 192, 123);">Vue</span>.<span style="color: rgb(97, 175, 239);">use</span>(<span style="color: rgb(224, 108, 117);">galaxyUi</span>)</p><p><br></p><p><span style="color: rgb(198, 120, 221);">new</span> <span style="color: rgb(229, 192, 123);">Vue</span>({</p><p>&nbsp; <span style="color: rgb(97, 175, 239);">render</span>: <span style="color: rgb(97, 175, 239);">h</span> <span style="color: rgb(198, 120, 221);">=&gt;</span> <span style="color: rgb(97, 175, 239);">h</span>(<span style="color: rgb(224, 108, 117);">App</span>),</p><p>}).<span style="color: rgb(97, 175, 239);">$mount</span>(<span style="color: rgb(152, 195, 121);">'#app'</span>)</p>`,
      babelCode: `<p><span style="color: rgb(229, 192, 123);">module</span>.<span style="color: rgb(229, 192, 123);">exports</span> <span style="color: rgb(86, 182, 194);">=</span> {</p><p>&nbsp; &nbsp; <span style="color: rgb(224, 108, 117);">presets</span>: [<span style="color: rgb(152, 195, 121);">"@vue/cli-plugin-babel/preset"</span>],</p><p>&nbsp; &nbsp; <span style="color: rgb(224, 108, 117);">plugins</span>: [</p><p>&nbsp; &nbsp; &nbsp; &nbsp; [</p><p>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color: rgb(152, 195, 121);">'component'</span>,</p><p>&nbsp; &nbsp; &nbsp; &nbsp; {</p><p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span style="color: rgb(224, 108, 117);">libraryName</span>: <span style="color: rgb(152, 195, 121);">'galaxyzz-ui'</span>,</p><p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span style="color: rgb(224, 108, 117);">styleLibrary</span>: {</p><p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span style="color: rgb(152, 195, 121);">"name"</span>: <span style="color: rgb(152, 195, 121);">"~node_modules/galaxyzz-ui/lib/lib-style"</span></p><p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; }</p><p>&nbsp; &nbsp; &nbsp; &nbsp; }</p><p>&nbsp; &nbsp; &nbsp; &nbsp; ],</p><p>&nbsp; &nbsp; ]</p><p>};</p>`,
      componentCode: `<p>&lt;<span style="color: rgb(224, 108, 117);">template</span>&gt;</p><p>&nbsp; &lt;<span style="color: rgb(224, 108, 117);">div</span> <span style="color: rgb(97, 175, 239);">id</span>=<span style="color: rgb(152, 195, 121);">"app"</span>&gt;</p><p>&nbsp; &nbsp; &lt;<span style="color: rgb(224, 108, 117);">g-button</span>&gt;你好&lt;/<span style="color: rgb(224, 108, 117);">g-button</span>&gt;</p><p>&nbsp; &nbsp; &lt;<span style="color: rgb(224, 108, 117);">g-slider</span> <span style="color: rgb(209, 154, 102);">v-model</span>="<span style="color: rgb(224, 108, 117);">percent</span>"&gt;&lt;/<span style="color: rgb(224, 108, 117);">g-slider</span>&gt;</p><p>&nbsp; &lt;/<span style="color: rgb(224, 108, 117);">div</span>&gt;</p><p>&lt;/<span style="color: rgb(224, 108, 117);">template</span>&gt;</p><p><br></p><p>&lt;<span style="color: rgb(224, 108, 117);">script</span>&gt;</p><p><span style="color: rgb(198, 120, 221);"> import</span> <span style="color: rgb(224, 108, 117);">Vue</span> <span style="color: rgb(198, 120, 221);">from</span> <span style="color: rgb(152, 195, 121);">'vue'</span></p><p><span style="color: rgb(198, 120, 221);"> import</span> {<span style="color: rgb(224, 108, 117);">Button</span>, <span style="color: rgb(224, 108, 117);">slider</span>} <span style="color: rgb(198, 120, 221);">from</span> <span style="color: rgb(152, 195, 121);">'galaxyzz-ui'</span></p><p><span style="color: rgb(229, 192, 123);"> Vue</span>.<span style="color: rgb(97, 175, 239);">use</span>(<span style="color: rgb(224, 108, 117);">Button</span>);</p><p><span style="color: rgb(229, 192, 123);"> Vue</span>.<span style="color: rgb(97, 175, 239);">use</span>(<span style="color: rgb(224, 108, 117);">slider</span>);</p><p><span style="color: rgb(198, 120, 221);"> export</span> <span style="color: rgb(198, 120, 221);">default</span> {</p><p>&nbsp; <span style="color: rgb(224, 108, 117);">name</span>: <span style="color: rgb(152, 195, 121);">'App'</span>,</p><p>&nbsp; <span style="color: rgb(97, 175, 239);">data</span>() {</p><p>&nbsp; &nbsp; <span style="color: rgb(198, 120, 221);">return</span> {</p><p>&nbsp; &nbsp; &nbsp; <span style="color: rgb(224, 108, 117);">percent</span>: <span style="color: rgb(209, 154, 102);">30</span></p><p>&nbsp; &nbsp; }</p><p>&nbsp; },</p><p> }</p><p>&lt;/<span style="color: rgb(224, 108, 117);">script</span>&gt;</p>`,
    }
  }
};
</script>

<style scoped>
/* .samllTitle {
    padding: 40px 10px 10px;
    font-size: 3vw;
}
.welTitle {
  padding: 10px 10px;
  font-size: 5rem;
} */
.needTitle {
  margin-top: 30px;
}

@media screen and (max-width: 450px) {
  .samllTitle {
      padding: 10px 10px 10px;
      font-size: 7vw;
  }
  .welTitle {
    padding: 10px 10px;
    font-size: 15vw;
  }
}
@media screen and (min-width: 450px) {
  .samllTitle {
      padding: 40px 10px 10px;
      font-size: 30px;
  }
  .welTitle {
    padding: 10px 10px;
    font-size: 100px;
  }

}
</style>