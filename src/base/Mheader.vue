<template>
    <div class="header">
    <slot></slot>
      <i class="iconfont icon-iconfont-edu11"
      v-if="back" @click="goBack"></i>
    </div>
</template>
<script>

  export default {
    props:{
      back:{
        type:Boolean,
        default:false
      }
    },
    methods:{
      goBack(){
        this.$router.go(-1);
      }
    }
  }
</script>
<style scoped lang="less">
.header{
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  background: aquamarine;
  height: 40px;
  text-align: center;
  line-height: 40px;
  font-weight: bold;
  i{
    position: absolute;
    left:10px;
    font-size: 20px;
  }
}
</style>
