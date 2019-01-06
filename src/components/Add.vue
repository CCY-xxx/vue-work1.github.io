<template>
    <div>
      <Mheader>添加</Mheader>
      <div class="content">
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
            <label>书的封面</label>
            <input type="text" v-model="book.bookCover" id="bookcover">
          </li>
          <li>
            <button @click="add">添加</button>
          </li>
        </ul>
      </div>
    </div>
</template>
<script>
  import Mheader from  '../base/Mheader.vue'
  import {addBook} from "../api";

  export default {
    data(){
      return {
        book:{}
      }
    },
    methods:{
      async add(){
        await addBook(this.book);
        this.$router.push('list');
      }
    },
    created() {
    },
    components:{
      Mheader
    }
  }
</script>
<style scoped lang="less">
  ul{
    margin:50px 10px 0 10px;
  li {
    label {
      display: block;
      font-size: 25px;
    }
    button{
      display: block;
      width: 60px;
      height: 25px;
      background: blue;
      color: #fff;
      border: none;
      border-radius: 15px;
    }
  }
    input {
      margin: 10px 0px;
      height: 25px;
      width: 100%;
    }
  }
</style>
