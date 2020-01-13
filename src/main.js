import Vue from 'vue'
// import { getWSID } from './api/message'
import 'normalize.css/normalize.css' // A modern alternative to CSS resets

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import '../element-variables.scss'
import locale from 'element-ui/lib/locale/lang/zh-CN' // lang i18n

import '@/styles/index.scss' // global css

import App from './App'
import store from './store'
import router from './router'

import '@/icons' // icon
import '@/permission' // permission control

// 自定义滚动条
import vuescroll from 'vuescroll/dist/vuescroll-native'

Vue.use(vuescroll) // install the vuescroll first
Vue.prototype.$vuescrollConfig = {
  bar: {
    background: 'rgba(120, 120, 120, 0.4)',
    size: '6px',
    onlyShowBarOnScroll: false,
    keepShow: true
  }
}

Vue.use(ElementUI, { locale })

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
