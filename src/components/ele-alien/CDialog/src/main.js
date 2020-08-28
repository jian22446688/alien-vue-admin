/*
 * @Description: 命令方式弹出框
 * @Author: Cary
 * @Date: 2020-01-07 15:38:26
 */
import Vue from 'vue'
import Main from './main.vue'
import Form from './form.vue'
import { isVNode } from 'element-ui/src/utils/vdom'
const CdialogConstructor = Vue.extend(Main)

let instance
let instances = []
let seed = 1

/**
 * 判断是否vue 对象
 * @param {*} vm
 */
const isVue = vm => {
  if (!vm) return false
  return vm.render && vm.render instanceof Function
}

const CDialog = function(options) {
  if (Vue.prototype.$isServer) return
  options = options || {}
  let id = 'cdialog_' + seed++
  let isForm = (typeof options.message === 'object' && !isVue(options.message))
  if (isForm) {
    const CdialogForm = Vue.extend(Form)
    instance = new CdialogForm({ data: options })
    instance.id = id
  } else {
    instance = new CdialogConstructor({ data: options })
    instance.id = id
  }
  if (isVNode(options.footer)) {
    instance.$slots.footer = [options.footer]
  }
  instance.$mount()
  document.body.appendChild(instance.$el)
  if (isForm) return instance
  if (typeof options.message === 'function' && options.message() instanceof Promise) {
    options.message().then(res => {
      const TempVue = Vue.extend(res.default)
      Vue.nextTick(() => {
        instance.message = new TempVue({
          el: instance.$refs.default,
          data: { dialogData: Object.assign({}, { instance: instance }, options.data) }
        })
      })
      instances.push(instance)
    })
  } else {
    if (!(options.message && options.message['_scopeId'])) {
      throw new Error('Vue file must be imported')
    }
    const TempVue = Vue.extend(options.message)
    Vue.nextTick(() => {
      instance.message = new TempVue({
        el: instance.$refs.default,
        data: { dialogData: Object.assign({}, { instance: instance }, options.data) }
      })
    })
    instances.push(instance)
    return instance
  }
}

CDialog.closeAll = function() {
  for (let i = instances.length - 1; i >= 0; i--) {
    instances[i].close()
  }
}

export default CDialog
