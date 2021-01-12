import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
// FastClick
import FastClick from 'fastclick'
// 移动端适配
import 'amfe-flexible'
// 全局样式表
import './assets/css/global.css'
// 导入iconfont
import './assets/fonts/iconfont.css'

// FastClick绑定body
FastClick.attach(document.body)

// 全局注册axios
Vue.prototype.$axios = axios

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
