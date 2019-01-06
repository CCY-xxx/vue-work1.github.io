<template>
    <div class="footer">
      <router-link to="/home">
      <i class="iconfont icon-shouye"></i>
        <span>首页</span>
      </router-link>
      <router-link to="/list">
      <i class="iconfont icon-liebiaoyemian"></i>
        <span>列表页</span>
      </router-link>
      <router-link to="/collection">
      <i class="iconfont icon-shoucang"></i>
        <span>收藏</span>
      </router-link>
      <router-link to="/add">
      <i class="iconfont icon-add"></i>
        <span> 添加</span>
      </router-link>

    </div>
</template>
<!--
display:flex
flex-direction:row/column
justify-content:center  垂直居中
align-item:center 横向居中
flex:1  每份占1
-->
<style scoped lang="less">
.footer{
  position: fixed;
  left: 0px;
  bottom: 0px;
  width: 100%;
  height: 50px;
  display: flex;
  background: goldenrod;
  border-top: 1px solid black;
  a{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex: 1;
    color:chartreuse;
  }
  a .router-link-active{
    color:red;
  }
}
</style>
