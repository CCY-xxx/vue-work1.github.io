// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
Vue.config.productionTip = false

/* eslint-disable no-new */
//导入轮播图插件
import VueAwesomeSwiper from 'vue-awesome-swiper';
//使用轮播图插件
Vue.use(VueAwesomeSwiper);
import 'swiper/dist/css/swiper.css';
//图片懒加载
import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: 'http://p0.so.qhimgs1.com/bdr/_240_/t019eafd72cc07cff7a.png',
  loading: 'http://p2.so.qhimgs1.com/bdr/_240_/t01b853de8cc37bdd72.gif',
  attempt: 1
});
router.beforeEach(function(to,from,next){
  document.title=to.meta.title;
  next();
})
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
