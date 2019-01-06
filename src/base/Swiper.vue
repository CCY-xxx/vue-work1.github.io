<template>
  <swiper :options="swiperOption">
    <swiper-slide v-for="(slide, index) in swiperSliders" :key="index">
      <img :src="slide" alt=""></swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
  export default {
    name: 'carousel',
    props:['swiperSliders'],//this.swiperSliders
    data() {
      return {
        swiperOption: {
          autoplay:3500,
          setWrapperSize:true,
          pagination: {
            el: '.swiper-pagination'
          },
          observeParents:true,
        },

      }
    }
  }
</script>
<style scoped>
  img{
    width: 100%;
  }
</style>
