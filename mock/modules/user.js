/*
 * @Description: 用户数据
 * @Author: Cary
 * @Date: 2020-01-15 10:09:06
 * @FilePath: \excel-to-jsonf:\vue-project\alien-vue-admin\mock\modules\user.js
 */
import Mock from 'mockjs'
import UserObj from '../data/user.js'
import * as DB from '../db/data'
export default [
  {
    url: '/user/message/list',
    type: 'get',
    response: config => {
      // const { importance, type, title, page = 1, limit = 20, sort } = config.query
      return Mock.mock({
        code: 20000,
        'data|3-9': [
          {
            id: '@guid',
            title: '@ctitle(6, 30)',
            sort: '@integer(1)',
            'name|+1': UserObj.getGameAvatarList(20).map(e => e.name),
            'account': "@last",
            'stauts|1-2': true,
            'department|+1': ['开发部','战略部','备案部','经济部','人事部','技术部','财务部'],
            'position|+1': ['大厅经理','董事长','客户经理','经纪人','财务专员'],
            'phone': '@zip',
            created: '@date',
            remark: '@cparagraph()',
            'dictSystem|+1': ['是', '否'],
            ename: '@word'
          }
        ]
      })
    }
  },
  {
    url: '/menu/message/list',
    type: 'get',
    response: config => {
      // const { importance, type, title, page = 1, limit = 20, sort } = config.query
      return Mock.mock({
        code: 20000,
        data: DB.system_menu
      })
    }
  }
]