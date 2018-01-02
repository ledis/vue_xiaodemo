// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import axios from 'axios'
import $ from 'jquery'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import vueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
Vue.use(vueAwesomeSwiper)

//关于axios配置
axios.interceptors.request.use(function (config) {
    // 发送请求
    return config;
  }, function (error) {
  
    return Promise.reject(error);
  });
 
// Add a response interceptor
axios.interceptors.response.use(function (response) {
    // 配置请求回来的消息

    return response;
  }, function (error) {
    // Do something with response error
    return Promise.reject(error);
  });

import animate from 'animate.css'
import storage from '@/utils/storage.js'
Vue.config.productionTip = false

require('./assets/css/base.css');//引公用css
//将常用工具方法扩展成Vue实例
Vue.prototype.$axios=axios
Vue.prototype.$storage=storage;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
