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
        成功页面
      </div>
    </el-card>
    <el-card class="cc-mar-b-10">
      <div class="c-title">
        <div class="cc-ta--c">
          <i style="font-size: 80px; color: #1890FF" class="el-icon-success" />
          <h3>操作成功</h3>
          <div class="c-text-subheading cc-f-s14">提交结果页用于反馈一系列操作任务的处理结果，如果仅是简单操作，使用 Message 全局提示反馈即可。灰色区域可以显示一些补充的信息。</div>
        </div>
        <div class="c-steps3-box">
          <div class="c-steps3-item">
            <span>姓名:</span>
            <span class="c-text-subheading">Cary</span>
          </div>
          <div class="c-steps3-item">
            <span>性别:</span>
            <span class="c-text-subheading">男</span>
          </div>
        </div>
        <div class="cc-ta--c">
          <el-button type="primary">返回列表</el-button>
          <el-button>查看项目</el-button>
          <el-button>打印</el-button>
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
