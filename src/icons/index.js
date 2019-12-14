/*
 * @Description: 文件及简介
 * @Author: Cary
 * @Date: 2019-12-04 14:29:30
 * @FilePath: f:\vue-project\alien-vue-admin\src\icons\index.js
 */
import Vue from 'vue'
import SvgIcon from '@/components/SvgIcon'// svg component

// import iconfont
import './iconfont/iconfont'

// register globally
Vue.component('svg-icon', SvgIcon)

const req = require.context('./svg', false, /\.svg$/)
const requireAll = requireContext => requireContext.keys().map(requireContext)
requireAll(req)
