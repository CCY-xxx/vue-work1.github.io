import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
export default new Router({
  mode:'history',
  routes: [
    {path:'/',redirect:'/home'},
    {
      path: '/home',
      component:()=>import('../components/Home.vue'),
      meta:{keepAlive:true,title:'首页'}
      },
    {
      path: '/list',
      component:()=>import('../components/List.vue'),
      meta:{title:'列表页'}
    },
    //路径参数必须有但是可以随机
    {
      path: '/detail/:bid',
      component:()=>import('../components/Detail.vue'),
      name:'detail',
      meta:{title:'详情页'}
    },
    {
      path: '/collection',
      component:()=>import('../components/Collection.vue'),
      meta:{title:'收藏'}
    },
    {
      path: '/add',
      component:()=>import('../components/Add.vue'),
      meta:{title:'添加'}
    },
    {path:'*',redirect:'/home'}
  ]
})
