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
// vuescroll
import vuescroll from 'vuescroll'

// vant按需引入
import 'vant/lib/index.css'
import {
  Button,
  NoticeBar,
  Divider,
  Dialog,
  Tab,
  Tabs,
  Swipe,
  SwipeItem,
  Field,
  Search,
  Pagination,
  Form,
  DatetimePicker,
  Popup,
  Calendar,
  CellGroup,
  Uploader,
  Radio,
  RadioGroup,
  Picker,
  Toast,
  SwipeCell
} from 'vant'

Vue.use(Button)
Vue.use(NoticeBar)
Vue.use(Divider)
Vue.use(Dialog)
Vue.use(Tab)
Vue.use(Tabs)
Vue.use(Swipe)
Vue.use(SwipeItem)
Vue.use(Field)
Vue.use(Search)
Vue.use(Pagination)
Vue.use(Form)
Vue.use(DatetimePicker)
Vue.use(Popup)
Vue.use(Calendar)
Vue.use(CellGroup)
Vue.use(Uploader)
Vue.use(Radio)
Vue.use(RadioGroup)
Vue.use(Picker)
Vue.use(Toast)
Vue.use(SwipeCell)

Vue.use(vuescroll)

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
