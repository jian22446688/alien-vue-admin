/*
 * @Description: 文件及简介
 * @Author: Cary
 * @Date: 2020-08-03 17:37:00
 * @FilePath: \alien-docsf:\vue-project\alien-vue-admin\src\components\ele-alien\IconSelect\Icons.js
 */
const req = require.context('../../../icons/select-svg', false, /\.svg$/)
const requireAll = requireContext => requireContext.keys()

const re = /\.\/(.*)\.svg/

const icons = requireAll(req).map(i => {
  return i.match(re)[1]
})

export default icons
