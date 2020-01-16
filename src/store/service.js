/*
 * @Description: 数据状态服务
 * @Author: Cary
 * @Date: 2019-08-30 10:19:11
 */
import { randomRange } from '@/utils/index'
export default {

  /**
   * 获取王者荣耀人物信息
   * @param {vuex} state
   * @param {number} rang
   */
  getGameAvatarList(state, rang) {
    let list = state.demoData.list
    if (rang >= list.length) return list
    let arr = []
    while (arr.length < rang) {
      if (arr.length >= rang) break
      const tar = list[randomRange(0, list.length)]
      const ids = arr.map(e => e.id)
      if (!ids.includes(tar.id)) {
        arr.push(tar)
      }
    }
    return arr
  },

  /**
   * element-ui 图标
   * @param {Vuex} state
   * @param {*} num 数量
   */
  getEleIconList(state, num) {
    let list = state.demoData.elementIcon
    if (num >= list.length) return list
    let arr = []
    while (arr.length < num) {
      if (arr.length >= num) break
      const tar = list[randomRange(0, list.length)]
      const ids = arr.map(e => e.id)
      if (!ids.includes(tar.id)) {
        arr.push(tar)
      }
    }
    return arr
  }
}
