/*
 * 项目中所有的单项提示信息
 * @Description: 文件及简介
 * @Author: Cary
 * @Date: 2019-06-04 09:41:48
 */

export default class Ctips {
  constructor(context) {
    this._vue = context
    this._instance = null
  }
  static getInstance() {
    if (!this._instance) {
      this._instance = new Ctips()
      return this._instance
    }
    return this._instance
  }

  /**
   * element-ui 提示信息
   * @param {String} type info, success, ,warning, error
   * @param {*} msg 提示信息
   */
  $message(type, msg = '提示') {
    return this._vue.$message({ type: type, message: msg, duration: 2000 })
  }

  /**
   * element-ui 弹出确认框
   * @param {String} title 提示信息标题
   * @param {String} msg 提示信息内容
   */
  $confirm(title = '提示信息', msg = '是否删除') {
    return this._vue.$confirm(msg, title, {
      distinguishCancelAndClose: true,
      confirmButtonText: '确定',
      cancelButtonText: '取消'
    })
  }

  /**
   * 右侧边提示信息
   * @param {String} title 提示标题
   * @param {String} msg 内容信息
   * @param {String} type 提示类型
   */
  $notify(title = '提示信息', msg = '提示', type) {
    this._vue.$notify({
      title: title,
      message: msg,
      type: type
    })
  }
}
