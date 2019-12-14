/*
 * @Description: 文件及简介
 * @Author: Cary
 * @Date: 2019-12-04 14:29:30
 * @FilePath: f:\vue-project\alien-vue-admin\src\main.js
 */
import Vue from 'vue'
import Cookies from 'js-cookie'
import 'normalize.css/normalize.css' // a modern alternative to CSS resets
import Element from 'element-ui'
import './styles/element-variables.scss'
import '@/styles/index.scss' // global css
import App from './App'
import store from './store'
import router from './router'

import './icons' // icon
import './permission' // permission control
import './utils/error-log' // error log

import VCharts from 'v-charts'

import * as filters from './filters' // global filters

// 添加本人自定义超强组件

import Alien from '@/components/ele-alien'

Vue.use(Alien)

/**
 * If you don't want to use mock-server
 * you want to use MockJs for mock api
 * you can execute: mockXHR()
 *
 * Currently MockJs will be used in the production environment,
 * please remove it before going online! ! !
 */
import { mockXHR } from '../mock'
if (process.env.NODE_ENV === 'production') {
  mockXHR()
}

Vue.use(Element, {
  // size: Cookies.get('size') || 'small' // set element-ui default size
  size: 'small' // set element-ui default size
})

Vue.use(VCharts)

// register global utility filters
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
