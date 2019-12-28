<!--
 * @Description: 文件及简介
 * @Author: Cary
 * @Date: 2019-12-10 16:41:47
 * @FilePath: f:\vue-project\alien-vue-admin\src\views\grid-layout\index.vue
 -->
<template>
  <div class="app-container">
    <el-card>
      vue grid layout是一个网格布局系统，类似于Gridster，用于vue.js。
    </el-card>
    <div class="cc-mar-t-10">
      <grid-layout
        :layout.sync="layout"
        :col-num="12"
        :row-height="50"
        :is-draggable="true"
        :is-resizable="true"
        :is-mirrored="false"
        :vertical-compact="true"
        :margin="[10, 10]"
        :use-css-transforms="true">
        <grid-item
          v-for="item in layout"
          :key="item.i"
          :x="item.x"
          :y="item.y"
          :w="item.w"
          :h="item.h"
          :i="item.i">
          <div class="c-drag-pa">
            <div class="c-drag-header">
              {{ item.i }}
            </div>
            <div class="c-drag-content" />
          </div>
        </grid-item>
      </grid-layout>
    </div>
  </div>
</template>

<script>
import VueGridLayout from 'vue-grid-layout'
export default {
  components: {
    GridLayout: VueGridLayout.GridLayout,
    GridItem: VueGridLayout.GridItem
  },
  data() {
    var testLayout = [
      { x: 0, y: 0, w: 12, h: 4, i: '0' },
      { x: 0, y: 4, w: 4, h: 5, i: '1' },
      { x: 4, y: 0, w: 2, h: 5, i: '2' },
      { x: 6, y: 0, w: 6, h: 3, i: '3' },
      { x: 6, y: 2, w: 6, h: 2, i: '4' },
      { x: 0, y: 7, w: 2, h: 5, i: '5' },
      { x: 2, y: 7, w: 2, h: 5, i: '6' },
      { x: 4, y: 7, w: 2, h: 5, i: '7' },
      { x: 6, y: 7, w: 2, h: 5, i: '8' },
      { x: 8, y: 7, w: 2, h: 5, i: '9' },
      { x: 10, y: 7, w: 2, h: 5, i: '10' }
    ]
    return {
      layout: testLayout
    }
  },
  computed: {},
  mounted() {},
  methods: {}
}

</script>
<style lang='scss' scoped>
.c-drag-pa {
  width: 100%;
  height: 100%;
  box-shadow: 0 2px 12px 0 rgba(0,0,0,0.1);
  .c-drag-header {
    padding: 0 20px;
    line-height: 46px;
    border-bottom: 1px solid #eaeaea;
  }
  .c-drag-content {
    padding: 20px;
  }
}
</style>
