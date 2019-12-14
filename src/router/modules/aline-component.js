/*
 * @Description: 文件及简介
 * @Author: Cary
 * @Date: 2019-12-12 10:07:18
 * @FilePath: f:\vue-project\alien-vue-admin\src\router\modules\demo.js
 */

/* Layout */
import Layout from '@/layout'

const doms = [
  {
    path: '/alien-components',
    component: Layout,
    redirect: '/index',
    alwaysShow: true,
    meta: {
      title: '超强组件',
      icon: 'pic'
    },
    children: [
      {
        path: '/index',
        component: () => import('@/views/aline-commponent/img-preview/index'),
        name: 'ImgPreview',
        meta: { title: '图片查看器', icon: 'pic' }
      },
      {
        path: '/tagselect',
        component: () => import('@/views/aline-commponent/c-tag-select'),
        name: 'TagSelect',
        meta: { title: '标签选择器', icon: 'pic' }
      },
      {
        path: '/c-super-tool',
        component: () => import('@/views/aline-commponent/c-super-tool'),
        name: 'CSuperTool',
        meta: { title: '工具操作栏', icon: 'pic' }
      },
      {
        path: '/table-base',
        component: () => import('@/views/aline-commponent/c-super-table/table-base'),
        name: 'TableBase',
        meta: { title: '基础表格', icon: 'pic' }
      },
      {
        path: '/table-operation',
        component: () => import('@/views/aline-commponent/c-super-table/table-operation'),
        name: 'TableOperation',
        meta: { title: '表格操作', icon: 'pic' }
      },
      {
        path: '/table-children',
        component: () => import('@/views/aline-commponent/c-super-table/table-children'),
        name: 'TableChildren',
        meta: { title: '表格展开行', icon: 'pic' }
      },
      // img-preview
    ]
  }
]

export default doms
