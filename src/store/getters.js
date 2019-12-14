/*
 * @Description: 文件及简介
 * @Author: Cary
 * @Date: 2019-12-04 14:29:30
 * @FilePath: f:\vue-project\alien-vue-admin\src\store\getters.js
 */
import service from './service'
const getters = {
  sidebar: state => state.app.sidebar,
  size: state => state.app.size,
  device: state => state.app.device,
  visitedViews: state => state.tagsView.visitedViews,
  cachedViews: state => state.tagsView.cachedViews,
  token: state => state.user.token,
  avatar: state => state.user.avatar,
  name: state => state.user.name,
  introduction: state => state.user.introduction,
  roles: state => state.user.roles,
  permission_routes: state => state.permission.routes,
  errorLogs: state => state.errorLog.logs,
  gameAvatarList: state => rang => service.getGameAvatarList(state, rang),
  eleIcon: state => num => service.getEleIconList(state, num)
}
export default getters
