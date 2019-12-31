/*
 * @Description: 文件及简介
 * @Author: Cary
 * @Date: 2019-12-12 10:07:18
 * @FilePath: f:\vue-project\alien-vue-admin\src\router\modules\demo.js
 */

/* Layout */
import Layout from '@/layout'
import AlineComponent from './aline-component'

const doms = [
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    meta: {
      title: '仪表面板',
      icon: 'dashboard'
    },
    children: [
      {
        path: '/dashboard',
        component: () => import('@/views/dashboard/index'),
        name: 'Dashboard',
        meta: { title: '数据分析', icon: 'dashboard', affix: true }
      },
      {
        path: 'monitor',
        component: () => import('@/views/dashboard/monitor/index'),
        name: 'Monitor',
        meta: { title: '监控页面', icon: 'dashboard' }
      },
      {
        path: 'workbench',
        component: () => import('@/views/dashboard/workbench/index'),
        name: 'Workbench',
        meta: { title: '工作台', icon: 'dashboard' }
      }
    ]
  },
  {
    path: '/v-charts',
    component: Layout,
    redirect: '/line',
    meta: {
      title: 'V-Charts',
      icon: 'dashboard'
    },
    children: [
      {
        path: 'line',
        component: () => import('@/views/v-charts/v-line'),
        name: 'VLine',
        meta: { title: '折线图', icon: 'documentation' }
      },
      {
        path: 'histogram',
        component: () => import('@/views/v-charts/v-histogram'),
        name: 'Histogram',
        meta: { title: '柱状图', icon: 'documentation' }
      },
      {
        path: 'bar',
        component: () => import('@/views/v-charts/v-bar'),
        name: 'Bar',
        meta: { title: '条形图', icon: 'documentation' }
      },
      {
        path: 'pie',
        component: () => import('@/views/v-charts/v-pie'),
        name: 'Pie',
        meta: { title: '饼形图', icon: 'documentation' }
      },
      {
        path: 'ring',
        component: () => import('@/views/v-charts/v-ring'),
        name: 'Ring',
        meta: { title: '环形图', icon: 'documentation' }
      },
      {
        path: 'funnel',
        component: () => import('@/views/v-charts/v-funnel'),
        name: 'Funnel',
        meta: { title: '漏斗图', icon: 'documentation' }
      },
      {
        path: 'radar',
        component: () => import('@/views/v-charts/v-radar'),
        name: 'Radar',
        meta: { title: '雷达图', icon: 'documentation' }
      },
      {
        path: 'map',
        component: () => import('@/views/v-charts/v-map'),
        name: 'Map',
        meta: { title: '地图', icon: 'documentation' }
      },
      {
        path: 'tree',
        component: () => import('@/views/v-charts/v-tree'),
        name: 'Tree',
        meta: { title: '树形图', icon: 'documentation' }
      }
    ]
  },
  {
    path: '/form',
    component: Layout,
    redirect: '/base',
    meta: {
      title: '数据表单',
      icon: 'tab'
    },
    children: [
      {
        path: 'base',
        component: () => import('@/views/form/form-base'),
        name: 'Base',
        meta: { title: '基础表单', icon: 'tab' }
      },
      {
        path: 'custom',
        component: () => import('@/views/form/form-base-custom'),
        name: 'Custom',
        meta: { title: '标签自定义', icon: 'tab' }
      },
      {
        path: 'steps',
        component: () => import('@/views/form/form-steps'),
        name: 'Steps',
        meta: { title: '步骤表单', icon: 'tab' }
      },
      {
        path: 'info',
        component: () => import('@/views/form/form-info'),
        name: 'Info',
        meta: { title: '表单详情', icon: 'tab' }
      },
      {
        path: 'create-user',
        component: () => import('@/views/form/form-create-user'),
        name: 'CreateUser',
        meta: { title: '创建表单', icon: 'tab' }
      },
      {
        path: 'table-search',
        component: () => import('@/views/form/form-table-search'),
        name: 'TableSearch',
        meta: { title: '高级查询', icon: 'tab' }
      }
    ]
  },
  {
    path: '/container',
    component: Layout,
    redirect: '/base',
    meta: {
      title: '布局容器',
      icon: 'tab'
    },
    children: [
      {
        path: 'full',
        component: () => import('@/views/container/base'),
        name: 'Full',
        meta: { title: '基础容器', icon: 'tab' }
      },
      {
        path: 'round',
        component: () => import('@/views/container/round'),
        name: 'Round',
        meta: { title: '四边布局', icon: 'tab' }
      },
      {
        path: 'round-1',
        component: () => import('@/views/container/round-1'),
        name: 'Round1',
        meta: { title: '四边布局一', icon: 'tab' }
      },
      {
        path: 'nesting',
        component: () => import('@/views/container/nesting'),
        name: 'Nesting',
        meta: { title: '嵌套布局', icon: 'tab' }
      },
      {
        path: 'control',
        component: () => import('@/views/container/control'),
        name: 'Control',
        meta: { title: '控制按钮', icon: 'tab' }
      },
      {
        path: 'split-pane',
        component: () => import('@/views/container/split-pane'),
        name: 'SplitPane',
        meta: { title: '划分区域', icon: 'tab' }
      },
      {
        path: '/waterfall',
        component: () => import('@/views/aline-commponent/img-preview/waterfall'),
        name: 'WaterFall',
        meta: { title: '瀑布流', icon: 'pic' }
      }
    ]
  },
  {
    path: '/grid-layout',
    component: Layout,
    redirect: '/index',
    meta: {
      title: '网格布局',
      icon: 'tab'
    },
    children: [
      {
        path: 'index',
        component: () => import('@/views/grid-layout/index'),
        name: 'Index',
        meta: { title: '网格布局', icon: 'tab' }
      },
      {
        path: 'drag',
        component: () => import('@/views/grid-layout/drag'),
        name: 'Drag',
        meta: { title: '布局拖动', icon: 'tab' }
      },
      {
        path: 'resize',
        component: () => import('@/views/grid-layout/resize'),
        name: 'Resize',
        meta: { title: '改变大小', icon: 'tab' }
      }
    ]
  },
  {
    path: '/icon',
    component: Layout,
    redirect: '/index',
    meta: {
      title: '图标库',
      icon: 'icon'
    },
    children: [
      {
        path: 'index',
        component: () => import('@/views/icons/element-ui-icon'),
        name: 'Icons',
        meta: { title: 'Element-ui-icon', icon: 'icon' }
      },
      {
        path: 'iconfont',
        component: () => import('@/views/icons/iconfont-icon'),
        name: 'Icons',
        meta: { title: '阿里云图标', icon: 'icon' }
      },
      {
        path: 'iconfont-colour',
        component: () => import('@/views/icons/iconfont-colour'),
        name: 'Icons',
        meta: { title: '彩色图标', icon: 'icon' }
      }
    ]
  },
  ...AlineComponent,
  {
    path: '/content-search',
    component: Layout,
    redirect: '/article',
    meta: {
      title: '搜索页面',
      icon: 'search'
    },
    children: [
      {
        path: 'article',
        component: () => import('@/views/content-search/article'),
        name: 'Article',
        meta: { title: '搜索文章', icon: 'tab' }
      },
      {
        path: 'project',
        component: () => import('@/views/content-search/project'),
        name: 'Project',
        meta: { title: '搜索项目', icon: 'tab' }
      },
      {
        path: 'appliction',
        component: () => import('@/views/content-search/appliction'),
        name: 'Appliction',
        meta: { title: '搜索应用', icon: 'tab' }
      }
    ]
  },
  {
    path: '/result',
    component: Layout,
    redirect: '/success',
    meta: {
      title: '反馈页面',
      icon: 'search'
    },
    children: [
      {
        path: 'success',
        component: () => import('@/views/result/success'),
        name: 'Success',
        meta: { title: '成功页面', icon: 'tab' }
      },
      {
        path: 'warning',
        component: () => import('@/views/result/warning'),
        name: 'Warning',
        meta: { title: '警告页面', icon: 'tab' }
      },
      {
        path: 'error',
        component: () => import('@/views/result/error'),
        name: 'Error',
        meta: { title: '错误页面', icon: 'tab' }
      },
      {
        path: '403',
        component: () => import('@/views/result/403'),
        name: 'Error403',
        meta: { title: '403页面', icon: 'tab' }
      },
      {
        path: '404',
        component: () => import('@/views/result/404'),
        name: 'Error404',
        meta: { title: '404页面', icon: 'tab' }
      },
      {
        path: '500',
        component: () => import('@/views/result/500'),
        name: 'Error500',
        meta: { title: '500页面', icon: 'tab' }
      }
    ]
  }
]

export default doms
