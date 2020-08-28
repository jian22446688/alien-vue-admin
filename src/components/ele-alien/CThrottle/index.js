/*
 * @Description: 高阶组件, 封装按钮节流事件
 * @Author: Cary
 * @Date: 2019-12-21 14:35:00
 * @FilePath: f:\vue-project\vue-admin-se\src\components\CThrottle\index.js
 */

const throttle = function(fn, wait = 50, ctx) {
  let lastCall = 0
  return function(...params) {
    const now = new Date().getTime()
    if (now - lastCall < wait) return
    lastCall = now
    fn.apply(ctx, params)
  }
}
export default {
  name: 'CThrottle',
  abstract: true,
  props: {
    time: Number,
    events: String
  },
  created() {
    this.eventKeys = this.events.split(',')
    this.originMap = {}
    this.throttledMap = {}
  },
  // render函数直接返回slot的vnode，避免外层添加包裹元素
  render(h) {
    const vnode = this.$slots.default[0]
    this.eventKeys.forEach((key) => {
      const target = vnode.data.on[key]
      if (target === this.originMap[key] && this.throttledMap[key]) {
        vnode.data.on[key] = this.throttledMap[key]
      } else if (target) {
        // 将原本的事件处理函数替换成throttle节流后的处理函数
        this.originMap[key] = target
        this.throttledMap[key] = throttle(target, this.time, vnode)
        vnode.data.on[key] = this.throttledMap[key]
      }
    })
    return vnode
  }
}
