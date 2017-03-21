// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// 引入vue.js库
import Vue from 'vue'
// 引入vue-resource插件
import VueResource from 'vue-resource'
import App from './App'
import router from './router'
import './common/styles/index.styl'

Vue.use(VueResource)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
router.push('goods')
