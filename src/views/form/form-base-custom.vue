<!--
 * @Description: 基础表单
 * @Author: Cary
 * @Date: 2019-12-09 11:01:24
 * @FilePath: f:\vue-project\alien-vue-admin\src\views\form\form-base.vue
 -->
<template>
  <div class="app-container">
    <el-card>
      <h3 class="cc-mar-t-2">表单标题自定义</h3>
      <div>表单包括各种表单项，比如输入框、选择器、开关、单选框、多选框等, 标签自定义</div>
    </el-card>
    <el-card class="cc-mar-t-10">
      <div class="c-form-base-container">
        <el-form ref="form" :model="form" label-width="120px">
          <el-form-item label="活动名称">
            <el-input v-model="form.name" />
          </el-form-item>
          <el-form-item label="活动区域">
            <el-select v-model="form.region" placeholder="请选择活动区域">
              <el-option label="区域一" value="shanghai" />
              <el-option label="区域二" value="beijing" />
            </el-select>
          </el-form-item>
          <el-form-item label="活动时间">
            <el-col :span="11">
              <el-date-picker v-model="form.date1" type="date" placeholder="选择日期" style="width: 100%;"/>
            </el-col>
            <el-col class="line" :span="2">-</el-col>
            <el-col :span="11">
              <el-time-picker v-model="form.date2" placeholder="选择时间" style="width: 100%;"/>
            </el-col>
          </el-form-item>
          <el-form-item label="即时配送">
            <el-switch v-model="form.delivery" />
          </el-form-item>
          <el-form-item label="活动性质">
            <el-checkbox-group v-model="form.type">
              <el-checkbox label="美食/餐厅线上活动" name="type" />
              <el-checkbox label="地推活动" name="type" />
              <el-checkbox label="线下主题活动" name="type" />
              <el-checkbox label="单纯品牌曝光" name="type" />
            </el-checkbox-group>
          </el-form-item>
          <el-form-item label="特殊资源">
            <el-radio-group v-model="form.resource">
              <el-radio label="线上品牌商赞助" />
              <el-radio label="线下场地免费" />
            </el-radio-group>
          </el-form-item>
          <el-form-item label="活动形式">
            <el-input v-model="form.desc" type="textarea" />
          </el-form-item>
          <el-form-item label="活动形式">
            <el-input v-model="form.desc" type="textarea" />
          </el-form-item>
          <el-form-item>
            <div slot="label">
              客户
              <span class="c-text-subheading">（选填）
                <el-tooltip content="这个是自定义" placement="top">
                  <i class="el-icon-warning-outline" />
                </el-tooltip>
              </span>
            </div>
            <el-input v-model="form.custom1" />
          </el-form-item>
          <el-form-item>
            <div slot="label">
              推荐人
              <span class="c-text-subheading">（选填）</span>
            </div>
            <el-input v-model="form.custom2" />
          </el-form-item>
          <el-form-item>
            <div slot="label">
              权证
              <span class="c-text-subheading">（选填）</span>
            </div>
            <div style="display: flex;">
              <el-input v-model="form.custom3" style="width: 100px" />
              <span class="cc-mar-l-6">%</span>
            </div>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">立即创建</el-button>
            <el-button>取消</el-button>
          </el-form-item>
        </el-form>
      </div>
    </el-card>

  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: '',
        custom1: '',
        custom2: '',
        custom3: ''
      }
    }
  },
  computed: {},
  mounted() {},
  methods: {
    onSubmit() {
      console.log('submit!')
    }
  }
}

</script>
<style lang='scss' scoped>
.c-form-base-container {
  width: 650px;
  margin: 0 auto;
}
</style>
