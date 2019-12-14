/*
 * @Description: 通用的数据
 * @Author: Cary
 * @Date: 2019-12-09 10:08:26
 * @FilePath: f:\vue-project\alien-vue-admin\mock\modules\common.js
 */
import Mock from 'mockjs'

const List = []
const count = 100

const baseContent = '<p>I am testing data, I am testing data.</p><p><img src="https://wpimg.wallstcn.com/4c69009c-0fd4-4153-b112-6cb53d1cf943"></p>'
const image_uri = 'https://wpimg.wallstcn.com/e4558086-631c-425c-9430-56ffb46e70b3'

for (let i = 0; i < count; i++) {
  List.push(Mock.mock({
    id: '@increment',
    timestamp: +Mock.Random.date('T'),
    author: '@first',
    reviewer: '@first',
    title: '@title(5, 10)',
    content_short: 'mock data',
    content: baseContent,
    forecast: '@float(0, 100, 2, 2)',
    importance: '@integer(1, 3)',
    'type|1': ['CN', 'US', 'JP', 'EU'],
    'status|1': ['published', 'draft', 'deleted'],
    display_time: '@datetime',
    comment_disabled: true,
    pageviews: '@integer(300, 5000)',
    image_uri,
    platforms: ['a-platform']
  }))
}

export default [
  {
    url: '/common/popular',
    type: 'get',
    response: config => {
      // const { importance, type, title, page = 1, limit = 20, sort } = config.query
      return Mock.mock({
        code: 20000,
        'data|3-9': [
          {
            id: '@guid',
            title: '@ctitle(6, 30)',
            content: '@cparagraph(1, 6)',
            'ftime|1-9': 3,
            'fname': '@cname()',
            'ctime': '@time(yyyy-MM-dd hh:mm)',
            'cover': '@image(60x60,@color, #FFF, C)',
            thumbnail: '@image(404x230, @color, #FFF, Alien-admin)'
          }
        ]
      })
    }
  },
  {
    url: '/common/prefile',
    type: 'get',
    response: config => {
      // const { importance, type, title, page = 1, limit = 20, sort } = config.query
      return Mock.mock({
        code: 20000,
        'data|3-16': [
          {
            id: '@guid',
            title: '@ctitle(3, 20)',
            content: '@cparagraph',
            'ftime|1-9': 3,
            'cover': '@image(404x230, @color, #FFF, Alien-admin)'
          }
        ]
      })
    }
  },
  {
    url: '/common/containerList',
    type: 'get',
    response: config => {
      // const { importance, type, title, page = 1, limit = 20, sort } = config.query
      return Mock.mock({
        code: 20000,
        'data|20-40': [
          {
            id: '@guid',
            title: '@ctitle(5)'
          }
        ]
      })
    }
  },
  {
    url: '/common/wterimglist',
    type: 'get',
    response: config => {
      // const { importance, type, title, page = 1, limit = 20, sort } = config.query
      return Mock.mock({
        code: 20000,
        'data|20-40': [
          {
            id: '@guid',
            src: '@image(, @color, #FFF, Alien-admin)',
            // src: '@image(404x200  , @color, #FFF, Alien-admin)',
            href: '@url()'
          }
        ]
      })
    }
  },
  {
    url: '/common/imglist',
    type: 'get',
    response: config => {
      // const { importance, type, title, page = 1, limit = 20, sort } = config.query
      return Mock.mock({
        code: 20000,
        'data|20-40': [
          {
            id: '@guid',
            title: '@ctitle(5, 9)',
            img: '@image(300x300, @color, #FFF, Alien-admin)',
            // src: '@image(404x200  , @color, #FFF, Alien-admin)',
            href: '@url()'
          }
        ]
      })
    }
  },
  {
    url: '/common/tableList',
    type: 'post',
    response: config => {
      // const { importance, type, title, page = 1, limit = 20, sort } = config.query
      const { pageSize, page } = config.body
      return Mock.mock({
        code: 20000,
        data: {
          "total": 360,
          "pageSize": 10,
          "page": page,
          'items|20-40': [
            {
              id: '@id',
              gid: '@guid',
              title: '@ctitle(5, 9)',
              img: '@image(500x500, @color, #FFF, Alien-admin)',
              href: '@url()',
              date: '@date("yyyy-MM-dd")',
              name: '@cname',
              province: '@province',
              city: '@city()',
              "tags|1-3": [
                "@cname"
              ],
              address: '@county(true)',
              zip: '@zip',
              'childrenlist|2-6': [
                {
                  id: '@id',
                  gid: '@guid',
                  title: '@ctitle(5, 9)',
                  img: '@image(500x500, @color, #FFF, Alien-admin)',
                  href: '@url()',
                  date: '@date("yyyy-MM-dd")',
                  name: '@cname',
                  province: '@province',
                  city: '@city()',
                  "tags|1-3": [
                    "@cname"
                  ],
                  address: '@county(true)',
                  zip: '@zip'
                }
              ]
            }
          ]
        }
      })
    }
  }
]

