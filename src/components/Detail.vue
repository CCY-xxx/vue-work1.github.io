<template>
    <div class="detail">
    <Mheader :back="true">详情</Mheader>
    <ul>
      <li>
        <label>书的名称</label>
        <input type="text" v-model="book.bookName" id="bookName">
      </li>
      <li>
        <label>书的信息</label>
        <input type="text" v-model="book.bookInfo" id="bookInfo">
      </li>
      <li>
        <label>书的价格</label>
        <input type="text" v-model.number="book.bookPrice" id="bookPrice">
      </li>
      <li>
        <button @click="update">确认修改</button>
      </li>
    </ul>
    </div>
</template>
<script>
  import Mheader from '../base/Mheader.vue'
  import {findOneBook,updateBook} from "../api";

  export default {
    data(){
      return {
        book:{}
      }
    },
    watch:{//只要数据变化  就重新获取数据
      $route(){
        this.getData();
      }
    },
    methods:{
      async getData(){//通过id 找到某一项后  赋给book
        this.book=await findOneBook(this.bid);
        //如果是空对象  需要跳转回列表页
        Object.keys(this.book).length>0?void 0:this.$router.push('/list');
      },
      async update(){//点击修改图书信息
        await updateBook(this.bid,this.book);
        this.$router.push('/list');//修改完成后跳转页面
      }
    },
    created(){//页面一加载 需要根据id  发送请求
    this.getData();
    },
    components:{
      Mheader
    },
    computed:{
      bid(){
        return this.$route.params.bid;//将路径参数的id映射到bid上
      }
    }
  }
</script>
<style scoped lang="less">
  ul{
    margin:50px 10px 0 10px;
  li{
    label{
      display: block;
      font-size: 20px;
    }
    input{
      margin: 10px 0px;
      height: 25px;
      width: 100%;
    }
    button{
      width: 80px;
      height: 25px;
      background: blue;
      border-radius:8px;
      border: none;
      color: white;
      outline: none;
    }
  }
  }

  .detail{
    position: absolute;
    top: 0px;
    left: 0px;
    bottom: 0px;
    right: 0px;
    z-index: 100;
    background: white;
  }
</style>
