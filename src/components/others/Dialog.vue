<template>
  <div>
    <div class="title">对话框</div>
    <div class="secondTitle">基础用法</div>
    <g-button @click="showDialog = true">打开对话框</g-button>
    <g-dialog :modal="true" :visible="showDialog" title="提示" width="400px">
      <div slot="footer">
        <div class="buttom">
          <g-button class="btn" @click="showDialog = false">取消</g-button>
          <g-button class="btn" @click="showDialog = false">确定</g-button>
        </div>
      </div>
    </g-dialog>

    <Code :js="basicUsageJs" :html="basicUsageHTML"></Code>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showDialog: false,
      basicUsageJs: `<p><span style="color: rgb(97, 175, 239);">data</span>() {</p><p>&nbsp; &nbsp; <span style="color: rgb(198, 120, 221);">return</span> {</p><p>&nbsp; &nbsp; &nbsp; <span style="color: rgb(224, 108, 117);">showDialog</span>: <span style="color: rgb(209, 154, 102);">false</span></p><p>&nbsp; &nbsp; }</p><p>}</p>`,
      basicUsageHTML: `<p>&lt;<span style="color: rgb(224, 108, 117);">g-button</span> @<span style="color: rgb(209, 154, 102);">click</span>="<span style="color: rgb(224, 108, 117);">showDialog</span> <span style="color: rgb(86, 182, 194);">=</span> <span style="color: rgb(209, 154, 102);">true</span>"&gt;打开对话框&lt;/<span style="color: rgb(224, 108, 117);">g-button</span>&gt;</p><p>&lt;<span style="color: rgb(224, 108, 117);">g-dialog</span> :<span style="color: rgb(209, 154, 102);">modal</span>="<span style="color: rgb(209, 154, 102);">true</span>" :<span style="color: rgb(209, 154, 102);">visible</span>="<span style="color: rgb(224, 108, 117);">showDialog</span>" <span style="color: rgb(209, 154, 102);">title</span>=<span style="color: rgb(152, 195, 121);">"提示"</span> <span style="color: rgb(209, 154, 102);">width</span>=<span style="color: rgb(152, 195, 121);">"400px"</span>&gt;</p><p>&nbsp; &lt;<span style="color: rgb(224, 108, 117);">div</span> <span style="color: rgb(209, 154, 102);">slot</span>=<span style="color: rgb(152, 195, 121);">"footer"</span>&gt;</p><p>&nbsp; &nbsp; &nbsp; &lt;<span style="color: rgb(224, 108, 117);">g-button</span> <span style="color: rgb(209, 154, 102);">class</span>=<span style="color: rgb(152, 195, 121);">"btn"</span> @<span style="color: rgb(209, 154, 102);">click</span>="<span style="color: rgb(224, 108, 117);">showDialog</span> <span style="color: rgb(86, 182, 194);">=</span> <span style="color: rgb(209, 154, 102);">false</span>"&gt;取消&lt;/<span style="color: rgb(224, 108, 117);">g-button</span>&gt;</p><p>&nbsp; &nbsp; &nbsp; &lt;<span style="color: rgb(224, 108, 117);">g-button</span> <span style="color: rgb(209, 154, 102);">class</span>=<span style="color: rgb(152, 195, 121);">"btn"</span> @<span style="color: rgb(209, 154, 102);">click</span>="<span style="color: rgb(224, 108, 117);">showDialog</span> <span style="color: rgb(86, 182, 194);">=</span> <span style="color: rgb(209, 154, 102);">false</span>"&gt;确定&lt;/<span style="color: rgb(224, 108, 117);">g-button</span>&gt;</p><p>&nbsp; &lt;/<span style="color: rgb(224, 108, 117);">div</span>&gt;</p><p>&lt;/<span style="color: rgb(224, 108, 117);">g-dialog</span>&gt;</p>`,
    };
  },
};
</script>

<style scoped>
/* .btn {
  margin-left: 40px;
} */
.buttom {
  width: 400px;
  display: flex;
  justify-content: space-around;
  /* background-color: red; */
}
</style>