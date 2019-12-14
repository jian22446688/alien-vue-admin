# 项目中开发遇见的问题

## 高级布局组件 `npm install vue-grid-layout --save`

::: tip
中文文档
https://github.com/jbaysolutions/vue-grid-layout/blob/HEAD/README-zh_CN.md
:::

``` vue
<grid-layout
  :layout.sync="layout"
  :col-num="12"
  :row-height="30"
  :is-draggable="true"
  :is-resizable="true"
  :is-mirrored="false"
  :vertical-compact="true"
  :margin="[10, 10]"
  :use-css-transforms="true">
  <grid-item v-for="item in layout"
    :x="item.x"
    :y="item.y"
    :w="item.w"
    :h="item.h"
    :i="item.i"
    :key="item.i">
      {{item.i}}
  </grid-item>
</grid-layout>

```

## 分割区域组件

``` sh

npm install vue-splitpane

#import
import splitPane from 'vue-splitpane'

# use as global component
Vue.component('split-pane', splitPane);


```

## 瀑布流组件

`npm install vue-waterfall-easy --save-dev`

https://github.com/lfyfly/vue-waterfall-easy/blob/master/README-CN.md

