<template>
    <div>
    <Mheader :back="true">首页</Mheader>
      <div class="content">
        <div v-if="loading">
          <loading></loading>
        </div>
        <template v-else>
          <Swiper :swiperSliders="sliders"></Swiper>
          <div class="container">
            <h3>热门图书</h3>
            <ul class="container">
              <li v-for="(hot,index) in hotBooks" :key="index">
                <img :src="hot.bookCover" alt="">
                <span>{{hot.bookName}}</span>
              </li>
            </ul>
          </div>
        </template>

      </div>

    </div>
</template>
<script>
  //1.引入组件  2.注册组件  3.使用组件
  import Mheader from '../base/Mheader.vue';
  import Swiper from '../base/Swiper.vue';
  import loading from '../base/loading.vue';
  import {getAll} from  '../api';
  export default {
     created(){
      // this.getSliders();//获取轮播图
      //  this.getHot();//获取最新图书
       this.getData();
    },

    data(){
      return {
        sliders:[],
        hotBooks:[],
        loading:true
      }
    },
    methods:{

       async getData(){
         let [sliders,hotBooks]=await getAll();//sliders,hotBooks
         this.sliders=sliders;
         this.hotBooks=hotBooks;
         //......轮播图和热门图书已经获取完成
         this.loading=false;
       }
      //给data起别名 对象中的属性名字必须和得到的结果名字一致
      // async getSliders(){
      //   //将获取的数据放到sliders中
      //   this.sliders=await getSliders();
      //
      // },
      // async getHot(){
      //   this.hotBooks=await getHotBook();
      //
      // }
    },
    components:{
      Mheader,Swiper,loading
    }
  }
</script>
<style scoped lang="less">
  h3{
    text-align: center;
  }
.container{
  display: flex;
  flex-wrap: wrap;
  li{
    width: 50%;
  }
}
</style>
