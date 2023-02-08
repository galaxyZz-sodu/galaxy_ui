<template>
  <div>
    <g-button @click="showDialog = true">打开对话框</g-button>
    <g-dialog :modal="true" :visible="showDialog" title="提示" width="30%">
      

      <span slot="footer">
        <g-button class="btn" @click="showDialog = false">取消</g-button>
        <g-button class="btn" @click="showDialog = false">确定</g-button>
      </span>
    </g-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showDialog: false,
    };
  },
};
</script>

<style scoped>
.btn {
    margin-left: 40px;
}
</style>