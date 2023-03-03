<template>
  <div class="out">
    <!-- <g-button @click="showInfo">展示</g-button> -->
    <label class="modifyInput" for="originInput">
      <label class="add">+</label>
    </label>
    <input
      type="file"
      @change="addItem"
      accept="image/png,image/jpeg,image/gif"
      id="originInput"
      name="fileInput"
    />
    <div
      class="show"
      :class="{ border: showPicture }"
      v-for="(item, index) in fileList"
      :key="index"
    >
      <img
        id="img1"
        :src="item.url"
        alt=""
        width="140px"
        height="140px"
        v-if="showPicture"
      />
      <div class="text">{{ item.name }}</div>
      <div class="delete" @click="deleteItem(item.name)">x</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fileList: [],
    };
  },
  props: {
    limit: {
      type: Number,
    },
    showPicture: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    showInfo() {
      // console.log(this.fileList);
    },
    deleteItem(name) {
      // console.log(name);
      this.fileList = this.fileList.filter((item) => {
        return item.name != name;
      });
      this.$emit("handleDelete", this.fileList);
      // console.log(this.fileList);
    },
    addItem() {
      var file = document.getElementById("originInput").files[0];
      // console.log(file);
      let that = this;
      if (window.FileReader) {
        var reader = new FileReader();
        // 开始读取
        reader.readAsDataURL(file);
        //监听文件读取结束后事件
        reader.onload = function (e) {
          let fileInfo = {};
          fileInfo.name = file.name;
          fileInfo.url = e.target.result;
          fileInfo.data = file;
          if (that.limit) {
            if (that.fileList.length >= that.limit) {
              that.$emit("exceed");
              return;
            }
          }
          that.fileList.push(fileInfo);
          //e.target.result就是最后的路径地址
          // document.getElementById("img1").setAttribute("src",e.target.result)
          // console.log("***" + e.target.result);
          that.$emit("handleSucceed", that.fileList);
        };
      }
    },
  },
};
</script>

<style scoped>
.border {
  /* border: 1px solid #ccc; */
  border-radius: 5px;
}
.out {
  position: relative;
}
#originInput {
    position: absolute;
    left: 0;
    top: 0;
    clip: rect(0 0 0 0);
  }
img {
    object-fit: cover;
  }
  .modifyInput {
    display: block;
    width: 250px;
    height: 140px;
    border-radius: 5px;
    background: #f1f3f6;
    box-shadow: 4px 4px 4px #c6c7ca inset, -3px -3px 3px #ffffff inset;
    line-height: 110px;
    text-align: center;
    font-size: 80px;
    color: rgb(151, 151, 151);
    transition: box-shadow 0.3s ease-out;
  }
  .modifyInput:hover {
    box-shadow: 2px 2px 2px #c6c7ca inset, -2px -2px 2px #ffffff inset;
  }
  .add {
    transition: 0.3s all ease-out;
  }
  .modifyInput:hover .add {
    color: #4facfe;
  }
  .show {
    margin: 4px 0px;
    padding: 5px 6px;
    width: 320px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: all 0.3s ease-out;
    box-shadow: 4px 4px 4px #c6c7ca inset, -3px -3px 3px #ffffff inset;
  }
  .text {
    transition: all 0.3s ease-out;
    color: rgb(151, 151, 151);
  }
  .delete {
    padding: 10px;
    cursor:pointer;
  }
  .show:hover {
    box-shadow: 2px 2px 2px #c6c7ca inset, -2px -2px 2px #ffffff inset;
  }
  .show:hover .text {
    color: #4facfe;
  }
</style>