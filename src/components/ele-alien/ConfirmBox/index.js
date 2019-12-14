/*
 * @Author: Cary
 * @Date: 2019-04-15 11:56:53
 * @Last Modified by: Cary
 * @Last Modified time: 2019-04-30 09:04:09
 */

/*
  参数	说明	类型	可选值	默认值
  title	MessageBox 标题	string	—	—
  message	MessageBox 消息正文内容	string / VNode	—	—
  dangerouslyUseHTMLString	是否将 message 属性作为 HTML 片段处理	boolean	—	false
  type	消息类型，用于显示图标	string	success / info / warning / error	—
  iconClass	自定义图标的类名，会覆盖 type	string	—	—
  customClass	MessageBox 的自定义类名	string	—	—
  callback	若不使用 Promise，可以使用此参数指定 MessageBox 关闭后的回调	function(action, instance)，action 的值为'confirm', 'cancel'或'close', instance 为 MessageBox 实例，可以通过它访问实例上的属性和方法	—	—
  showClose	MessageBox 是否显示右上角关闭按钮	boolean	—	true
  beforeClose	MessageBox 关闭前的回调，会暂停实例的关闭	function(action, instance, done)，action 的值为'confirm', 'cancel'或'close'；instance 为 MessageBox 实例，可以通过它访问实例上的属性和方法；done 用于关闭 MessageBox 实例	—	—
  distinguishCancelAndClose	是否将取消（点击取消按钮）与关闭（点击关闭按钮或遮罩层、按下 ESC 键）进行区分	boolean	—	false
  lockScroll	是否在 MessageBox 出现时将 body 滚动锁定	boolean	—	true
  showCancelButton	是否显示取消按钮	boolean	—	false（以 confirm 和 prompt 方式调用时为 true）
  showConfirmButton	是否显示确定按钮	boolean	—	true
  cancelButtonText	取消按钮的文本内容	string	—	取消
  confirmButtonText	确定按钮的文本内容	string	—	确定
  cancelButtonClass	取消按钮的自定义类名	string	—	—
  confirmButtonClass	确定按钮的自定义类名	string	—	—
  closeOnClickModal	是否可通过点击遮罩关闭 MessageBox	boolean	—	true（以 alert 方式调用时为 false）
  closeOnPressEscape	是否可通过按下 ESC 键关闭 MessageBox	boolean	—	true（以 alert 方式调用时为 false）
  closeOnHashChange	是否在 hashchange 时关闭 MessageBox	boolean	—	true
  showInput	是否显示输入框	boolean	—	false（以 prompt 方式调用时为 true）
  inputPlaceholder	输入框的占位符	string	—	—
  inputType	输入框的类型	string	—	text
  inputValue	输入框的初始文本	string	—	—
  inputPattern	输入框的校验表达式	regexp	—	—
  inputValidator	输入框的校验函数。可以返回布尔值或字符串，若返回一个字符串, 则返回结果会被赋值给 inputErrorMessage	function	—	—
  inputErrorMessage	校验未通过时的提示文本	string	—	输入的数据不合法!
  center	是否居中布局	boolean	—	false
  roundButton	是否使用圆角按钮	boolean	—	false
 */

export default {
  confirmBox({
    component = null,
    componentName = '',
    componentProps = {},
    width = '600',
    confirmValidate = () => {},
    ...rest
  }) {
    const h = this.$createElement
    return new Promise((resolve, reject) => {
      this.$msgbox({
        title: '提示',
        message: h(component, { props: componentProps }),
        showCancelButton: true,
        customClass: 'cc-dialog-width__' + width,
        beforeClose: (action, instance, done) => {
          const cpt = instance.$children.find(child => {
            return child.$options.name === component.name
          })
          confirmValidate(action, cpt, instance, done)
        },
        ...rest
      })
        .then(resolve)
        .catch(reject)
    })
  }
}
