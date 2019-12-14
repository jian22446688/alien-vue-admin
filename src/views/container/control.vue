<!--
 * @Description: 带控制按钮布局容器
 * @Author: Cary
 * @Date: 2019-12-09 16:03:17
 * @FilePath: f:\vue-project\alien-vue-admin\src\views\container\base.vue
 -->
<template>
  <div class="cc-contriner">
    <c-container>
      <div slot="header">
        <span>基本容器头
          <el-button type="primary" icon="el-icon-edit" />
          <el-button type="primary" plain icon="el-icon-edit" />
          <el-button icon="el-icon-search" circle />
          <el-button type="primary" icon="el-icon-edit" circle />
          <el-button type="success" icon="el-icon-check" circle />
          <el-button type="info" icon="el-icon-message" circle />
          <el-button type="warning" icon="el-icon-star-off" circle />
          <el-button type="danger" icon="el-icon-delete" circle />
        </span>
        <div class="cc-f--right">
          <el-button type="primary" icon="el-icon-edit" />
          <el-button type="primary" plain icon="el-icon-edit" />
          <el-button icon="el-icon-search" circle />
          <el-button type="primary" icon="el-icon-edit" circle />
          <el-button type="success" icon="el-icon-check" circle />
          <el-button type="info" icon="el-icon-message" circle />
          <el-button type="warning" icon="el-icon-star-off" circle />
          <el-button type="danger" icon="el-icon-delete" circle />
        </div>
      </div>
      <div slot="footer">
        <span>基本容器底
          <el-link type="primary" :underline="false"><i class="cc-f-s20 el-icon-edit"/></el-link>
          <el-link type="success" :underline="false"><i class="cc-f-s20 el-icon-check"/></el-link>
          <el-link type="warning" :underline="false"><i class="cc-f-s20 el-icon-star-off"/></el-link>
          <el-link type="danger" :underline="false"><i class="cc-f-s20 el-icon-delete"/></el-link>
          <el-link type="info" :underline="false"><i class="cc-f-s20 el-icon-message"/></el-link>
        </span>
        <div class="cc-f--right">
          <el-link type="primary" :underline="false"><i class="cc-f-s20 el-icon-edit"/></el-link>
          <el-link type="success" :underline="false"><i class="cc-f-s20 el-icon-check"/></el-link>
          <el-link type="warning" :underline="false"><i class="cc-f-s20 el-icon-star-off"/></el-link>
          <el-link type="danger" :underline="false"><i class="cc-f-s20 el-icon-delete"/></el-link>
          <el-link type="info" :underline="false"><i class="cc-f-s20 el-icon-message"/></el-link>
        </div>
      </div>
      <div class="cc-pad-10">
        <div class="cc-ta--c">
          <h1>网站快速成型工具</h1>
          <p>Element，一套为开发者、设计师和产品经理准备的基于 Vue 2.0 的桌面端组件库</p>
        </div>
      </div>
    </c-container>
  </div>
</template>

<script>
  export default {
    components: {},
    data() {
      return {}
    }
  }
</script>
<style lang='scss' scoped>
</style>
