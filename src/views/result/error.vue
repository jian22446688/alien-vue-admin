<!--
 * @Description: 文件及简介
 * @Author: Cary
 * @Date: 2019-12-13 16:56:54
 * @FilePath: f:\vue-project\alien-vue-admin\src\views\result\error.vue
 -->
<template>
  <div class="app-container">
    <el-card class="cc-mar-b-10">
      <div>
        错误页面
      </div>
    </el-card>
    <el-card class="cc-mar-b-10">
      <div class="c-title">
        <div class="cc-ta--c">
          <i style="font-size: 80px; color: #F5222D" class="el-icon-error" />
          <h3>提交失败</h3>
          <div class="c-text-subheading cc-f-s14">请核对并修改以下信息后，再重新提交。</div>
        </div>
        <div class="c-steps3-box">
          <div class="c-steps3-item">
            <span>您提交的内容有如下错误：</span>
          </div>
          <div class="c-steps3-item">
            <span class="cc-mar-r-10"><i style="color: #F5222D" class="el-icon-circle-close" /> 您的账户已被冻结:</span>
            <el-link type="primary" :underline="false">立即冻结<i class="el-icon-arrow-right" /></el-link>
          </div>
          <div class="c-steps3-item">
            <span class="cc-mar-r-10"><i style="color: #F5222D" class="el-icon-circle-close" /> 您的账户还不具备申请资格:</span>
            <el-link type="primary" :underline="false">立即升级<i class="el-icon-arrow-right" /></el-link>
          </div>
        </div>
        <div class="cc-ta--c">
          <el-button type="primary">返回修改</el-button>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
    }
  },
  computed: {},
  mounted() {},
  methods: {}
}

</script>
<style lang='scss' scoped>
.c-title {
  max-width: 700px;
  margin: 0 auto;
}
.c-steps3-box {
  margin: 26px 0;
  padding: 26px;
  background-color: #fafafa;
  .c-steps3-item {
    margin: 20px 0
  }
}
</style>
