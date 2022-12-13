<template>
    <ul class="pager">
        <!--        首页-->
        <li class="number"
            :class="{active: this.current===1}"
            @click="setPage(1)">1</li>

        <!--        左边更多-->
        <li class="more left"
            v-if="totalPage>centerSize+2 && current-centerSize/2-1>1"
            @click="setPage(current-jumpSize)">...</li>

        <!--        中间页码-->
        <li class="number"
            v-for="(page,index) in centerPages"
            :class="{active: current===page}"
            :key="index"
            @click="setPage(page)">{{ page }}</li>

        <!--        右边更多-->
        <li class="more right"
            v-if="totalPage>centerSize+2 && current+centerSize/2+1<totalPage"
            @click="setPage(current+jumpSize)">...</li>

        <!--        最后一页-->
        <li class="number"
            v-if="totalPage!==1"
            :class="{active: this.current=== totalPage}"
            @click="setPage(totalPage)">{{ totalPage }}</li>
    </ul>
</template>

<script>
  export default {
    name: "Pager",
    props:{
      totalPage:Number,//数据总页数
      defaultCurrentPage:Number,//默认当前页码
      //中间页码数默认为5
      centerSize:{
        type:Number,
        default(){
          return 5;
        }
      },
      jumpSize:{
        type:Number,
        default(){
          return 5;
        }
      }
    },
    computed:{
      // 中间页码计算
      centerPages(){
        let centerPage=this.current;
        // 若当前页面大于this.current+2(以current为中心右边加两页) +1(尾页)>this.totalPage，则取this.totalPage-3为中心
        if(this.current>this.totalPage-3){
          centerPage=this.totalPage-3;//注意这里是centerPage，不是this.current
        }
        // 若当前页面小于或等于4，则取4为中心
        if(this.current<4){
          centerPage=4;
        }

        if(this.totalPage<=this.centerSize+2){
          // 总页码较少时，则全部显示出来
          const centerArr=[];
          for(let i=2;i<this.totalPage;i++){
            centerArr.push(i);
          }
          return centerArr;
        }
        else{
          // 总页数较大时，只显示中间centerSize个页码
          const centerArr=[];
          for(let i=centerPage-2;i<=centerPage+2;i++){
            centerArr.push(i);
          }
          return centerArr;
        }
      }
    },

    data(){
      return{
        // 因为不可以直接修改props传过来的值，所以在data中用current保存props中默认页面页数defaultCurrentPage的值，用watch监听props中defaultCurrentPage值的改变
        // （前一页、后一页按钮被点击时，会传入新的值，但是data中的current不会更新，用watch监听并赋新的值，可解决该bug）
        current:this.defaultCurrentPage,
      }
    },

    watch:{
      // 监听props中defaultCurrentPage值的改变，更新current的值
      defaultCurrentPage:function(newValue,oldValue){
        this.current=newValue;
      }
    },

    methods:{
      // 上一页、下一页按钮被点击时，页码发生改变，且要传出被点击的页码
      setPage(page){
        // 左边越界
        if(page<1) this.current=1;
        // 右边越界
        else if(page>this.totalPage){
          this.current=this.totalPage;
        }
        // 正常情况
        else{
          this.current=page;
        }
        // 发出pager中页码被改变的事件
        this.$emit('change',this.current);
      },
    }
  }
</script>

<style scoped>
    ul{
        list-style: none;
        height: 30px;
        padding-left: 8px;
    }
 ul li{
      font-size: 14px;
     float: left;
     width:30px;
     height:30px;
     line-height: 30px;
     margin:0 8px 0 0;
     padding:0 6px;
     text-align: center;
     /* border:1px solid #d9d9d9; */
     border-radius:2px;
     transition: all 0.3s;
     user-select: none;
 }
    .active{
       background: #f1f3f6;
    border: none;
    box-shadow: 2px 2px 4px #c6c7ca, -3px -3px 6px #ffffff;
    }

    .more left:hover, .more right:hover{
        background: #7d3990;
    }
</style>
