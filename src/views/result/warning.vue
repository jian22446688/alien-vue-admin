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
        警告页面
      </div>
    </el-card>
    <el-card class="cc-mar-b-10">
      <div class="c-title">
        <div class="cc-ta--c">
          <i style="font-size: 80px; color: #FE9D62" class="el-icon-warning" />
          <h3>信息警告</h3>
          <div class="c-text-subheading cc-f-s14">请核对并以下信息后，再做打算。</div>
        </div>
        <div class="c-steps3-box">
          <div class="c-steps3-item">
            <span>您提交的内容有如下问题警告：</span>
          </div>
          <div class="c-steps3-item">
            <span class="cc-mar-r-10"><i style="color: #FE9D62" class="el-icon-warning-outline" /> 您的账户可能已被冻结:</span>
            <el-link type="primary" :underline="false">立即查看<i class="el-icon-arrow-right" /></el-link>
          </div>
          <div class="c-steps3-item">
            <span class="cc-mar-r-10"><i style="color: #FE9D62" class="el-icon-warning-outline" /> 您的账户可能还不具备申请资格:</span>
            <el-link type="primary" :underline="false">立即查看<i class="el-icon-arrow-right" /></el-link>
          </div>
          <div class="c-steps3-item">
            <span class="cc-mar-r-10"><i style="color: #FE9D62" class="el-icon-warning-outline" />请您确认是否继续:</span>
            <el-link type="primary" :underline="false">确认继续<i class="el-icon-arrow-right" /></el-link>
          </div>
        </div>
        <div class="cc-ta--c">
          <el-button type="primary">返回修改</el-button>
          <el-button>继续确认</el-button>
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
