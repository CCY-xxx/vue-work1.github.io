<template>
  <div>
    <Mheader>列表页</Mheader>
    <div class="content" ref="scroll" @scroll="loadMore">
      <ul>
        <router-link v-for="(book,index) in books" :to="{name:'detail',params:{bid:book.bookId}}"
        :key="index" tag="li">
          <img v-lazy="book.bookCover" alt="">
          <div>
            <h4>{{book.bookName}}</h4>
            <p>{{book.bookInfo}}</p>
            <b>{{book.bookPrice}}</b>
            <div class="btn-list">
              <button @click.stop="remove(book.bookId)">删除</button>
              <button @click.stop>添加</button>
            </div>

          </div>
        </router-link>
      </ul>
      <div @click="more" class="more">加载更多</div>
    </div>
  </div>
</template>
<script>
  import Mheader from '../base/Mheader.vue';
  import {pagination, removeBook} from "../api";


  export default {
    data() {//offset代表的是偏移量  hasMore是否有更多
      return {
        books: [],
        offset:0,
        hasMore:true,
        isLoading:false
      }
    },
    mounted(){
      let scroll=this.$refs.scroll;//获取到要拖拽的元素
      let top =scroll.offsetTop;
      let distance=0;
      scroll.addEventListener('touchstart',(e)=>{
        //滚动条在最顶端的时候 并且当前盒子在最顶端时 才继续走
        if(scroll.scrollTop!=0||scroll.offsetTop!=top) return;
        let start=e.touches[0].pageY;//手指点击的开始
        let move=(e)=>{
          let current=e.touches[0].pageY;
          let distance=current-start;//求的拉动的距离  负的就不要了
          if(distance>0){
            if(distance<=50){
              scroll.style.top=top+distance+'px';
            }else{
              distance=50;
              scroll.style.top=50+top+'px';
            }
          }else{
            //如果不在考虑的范围内 移除掉move和end事件
            scroll.removeEventListener('touchmove',move);
            scroll.removeEventListener('touchend',end);
          }
        };

        let end=(e)=>{
          clearInterval(this.timer1);
          this.timer1=setInterval(()=>{// 一共distance 每次-1
            if(distance<=0){
              clearInterval(this.timer1);
              distance=0;
              scroll.removeEventListener('touchmove',move);
              scroll.removeEventListener('touchend',end);
              scroll.style.top=top+'px';
              this.books=[];//先清空数据
              this.offset=0;
              this.getData();
              return
            }
            distance-=1;
            scroll.style.top=top+distance+'px';
          },1)
        };
        scroll.addEventListener('touchmove',move);
        scroll.addEventListener('touchend',end);
      },false);
    },
    methods: {
      loadMore(){// 卷去的高度  当前可见区域  总高度
        //触发scroll事件  可能触发n次  先进来开一个定时器 下次触发时将上次的定时器清除
        clearTimeout(this.timer);//防抖
       this.timer=setTimeout(()=>{
          let {scrollTop,clientHeight,scrollHeight}= this.$refs.scroll;
         if(scrollTop+clientHeight+20>scrollHeight){
           this.getData();//获取更多
         }
        },500);
      },
      more(){
        this.getData();
      },
      async remove(id) {
        await removeBook(id);//删除某一项
        //要删除前台数据
        this.books = this.books.filter(item => item.bookId !== id);
      },
      async getData() {
        if(this.hasMore&&!this.isLoading){//有更多的时候获取数据
          this.isLoading=true;
          let {hasMore,books} = await pagination(this.offset);
          this.books=[...this.books,...books];//获取的书放到books属性上
          this.hasMore=hasMore;
          this.isLoading=false;
          this.offset=this.books.length;//维护偏移量  就是总书的长度
        }

      }

    },
    created() {
      this.getData();
    },
    components: {
      Mheader
    }
  }
</script>
<style scoped lang="less">
  .content ul {
    padding: 10px;
  }

  .content ul li {
    display: flex;
    padding: 10px 0px;
    border: 1px solid black;
  }

  .content ul li img {
    width: 130px;
    height: 150px;
  }

  .content h4 {
    font-size: 20px;
    line-height: 25px;
  }

  .content p {
    color: #345567;
    line-height: 25px;
  }

  .content b {
    color: red;
  }

  .content button {
    display: block;
    width: 60px;
    height: 25px;
    background: orange;
    color: #fff;
    border: none;
    border-radius: 15px;
  }
  .more{
    margin: 10px;
    background: aqua;
    height: 30px;
    line-height: 30px;
    text-align: center;
    font-size: 20px;
  }
  .btn-list{
    display: flex;
    justify-content: space-around;
  }
</style>
