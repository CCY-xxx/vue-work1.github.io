<template>
<div>
  <transition>
    <keep-alive name="fadeIn">
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
  </transition>
  <transition name="fadeIn">
    <router-view v-if="!$route.meta.keepAlive"></router-view>
  </transition>

<Tab></Tab>
</div>
</template>
<script>
  import Tab from './base/Tab.vue'
export default {
components:{
  Tab
}
}

</script>
<style lang="less">
  *{margin:0;padding:0;}
  ul,li{list-style: none}
  a{text-decoration: none}
  .content{
    position: fixed;
    width: 100%;
    top: 40px;
    bottom: 50px;
    overflow: auto;
  }
  .fadeIn-enter{
  opacity: 0;
  }
  .fadeIn-enter-active{
    transition:all 1s linear;
  }
  .fadeIn-leave-active{
    transition:all 1s linear;
    opacity: 0;
  }
</style>
