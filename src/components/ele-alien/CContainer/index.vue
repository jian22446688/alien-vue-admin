<!--
 * @Description: 布局容器
 * @Author: Cary
 * @Date: 2019-12-09 16:03:17
 * @FilePath: f:\vue-project\alien-vue-admin\src\views\container\base.vue
 -->
<template>
  <div class="cc-contriner">
    <div
      v-if="$slots['header']"
      class="cc-container__header">
      <slot name="header" />
    </div>
    <div
      ref="containerBody"
      class="cc-container__body">
      <div class="cc-main-contriner">
        <div
          v-if="$slots['left']"
          ref="scroll_left"
          class="c-left"
          :style="{ flex: '0 0 ' + lWidth + 'px' }">
          <el-scrollbar
            ref="scrollbar_left"
            tag="div"
            :view-style="{ height: leftHeight }"
            :noresize="false">
            <div
              ref="bodyel_left"
              class="cc-container__content">
              <slot name="left" />
            </div>
          </el-scrollbar>
        </div>
        <div class="c-center">
          <el-scrollbar
            ref="scrollbar"
            tag="div"
            :view-style="{ height: scrollbarHeight }"
            :noresize="false">
            <div
              ref="bodyel"
              class="cc-container__content">
              <slot />
            </div>
          </el-scrollbar>
        </div>
        <div
          v-if="$slots['right']"
          ref="scroll_right"
          class="c-right"
          :style="{ flex: '0 0 ' + rWidth + 'px' }">
          <el-scrollbar
            ref="scrollbar_right"
            tag="div"
            :view-style="{ height: rightHeight }"
            :noresize="false">
            <div
              ref="bodyel_right"
              class="cc-container__content">
              <slot name="right" />
            </div>
          </el-scrollbar>
        </div>
      </div>
    </div>
    <div
      v-if="$slots['footer']"
      class="cc-container__footer">
      <slot name="footer" />
    </div>
  </div>
</template>

<script>
import {
  addResizeListener,
  removeResizeListener
} from 'element-ui/src/utils/resize-event'

const throttle = (func, delay) => {
  let prev = Date.now()
  return () => {
    let now = Date.now()
    if (now - prev >= delay) {
      func()
      prev = Date.now()
    }
  }
}

export default {
  name: 'CContainer',
  props: {
    lWidth: {
      type: Number,
      default: () => 120
    },
    rWidth: {
      type: Number,
      default: () => 120
    }
  },
  data() {
    return {
      scrollbarHeight: '0px',
      leftHeight: '0px',
      rightHeight: '0px'
    }
  },
  beforeDestroy() {
    removeResizeListener(this.$refs['containerBody'], this.containerUpdate)
    removeResizeListener(this.$refs['bodyel_left'], this.onResizeEl)
    removeResizeListener(this.$refs['bodyel_right'], this.onResizeEl)
    removeResizeListener(this.$refs['bodyel'], this.onResizeEl)
  },
  mounted() {
    this.$nextTick(this.update)
    addResizeListener(this.$refs['containerBody'], throttle(this.update, 300))
    addResizeListener(this.$refs['bodyel'], throttle(this.onResizeEl, 100))
    this.$refs['bodyel_left'] && addResizeListener(this.$refs['bodyel_left'], throttle(this.onResizeEl, 100))
    this.$refs['bodyel_right'] && addResizeListener(this.$refs['bodyel_right'], throttle(this.onResizeEl, 100))
  },
  methods: {
    update() {
      const _ref = this.$refs
      // 获取高度值
      if (!_ref['containerBody']) return
      this.scrollbarHeight = _ref['containerBody'].offsetHeight + 'px'
      this.leftHeight = _ref['scroll_left'] && _ref['scroll_left'].offsetHeight + 'px'
      this.rightHeight = _ref['scroll_right'] && _ref['scroll_right'].offsetHeight + 'px'
      this.$nextTick(() => {
        _ref['scrollbar'] && _ref['scrollbar'].update()
        _ref['scrollbar_left'] && _ref['scrollbar_left'].update()
        _ref['scrollbar_right'] && _ref['scrollbar_right'].update()
      })
    },
    doBodyUpdate() {
      setTimeout(() => {
        this.$nextTick(() => {
          let width = document.body.scrollWidth
          document.body.style.width = (width + 1) + 'px'
          this.$nextTick(() => {
            document.body.style.width = (width - 1) + 'px'
          })
        })
      }, 1000)
    },
    onResizeEl() {
      this.$refs['scrollbar'] && this.$nextTick(this.$refs['scrollbar'].update)
      this.$refs['scrollbar_left'] && this.$nextTick(this.$refs['scrollbar_left'].update)
      this.$refs['scrollbar_right'] && this.$nextTick(this.$refs['scrollbar_right'].update)
    }
  }
}
</script>
<style lang='scss' scoped>
.cc-contriner {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  .cc-container__header {
    border-bottom: 1px solid #cfd7e5;
    background: #fff;
    line-height: 46px;
    padding: 0 10px;
  }
  .cc-container__body {
    flex-grow: 1;
    height: 100%;
    overflow: auto;
    overflow-y: hidden;
  }
  .cc-container__footer {
    border-top: 1px solid #cfd7e5;
    background: #fff;
    line-height: 46px;
    padding: 0 10px;
  }
  .cc-container__content, .c-left, .c-right {
    padding: 2px
  }
  .cc-main-contriner {
    height: 100%;
    display: flex;
    .c-left, .c-right {
      max-width: 260px;
      min-width: 100px;
      display: inline-block;
    }
    .c-center {
      flex: 1 auto;
      flex: 1;
      min-width: 0;
    }
    .c-left {
      border-right: 1px solid #cfd7e5;
    }
    .c-right {
      border-left: 1px solid #cfd7e5;
    }
  }
}
</style>
