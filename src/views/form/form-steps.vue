<!--
 * @Description: 基础表单
 * @Author: Cary
 * @Date: 2019-12-09 11:01:24
 * @FilePath: f:\vue-project\alien-vue-admin\src\views\form\form-base.vue
 -->
<template>
  <div class="app-container">
    <el-card>
      <h3 class="cc-mar-t-2">基础表单</h3>
      <div>表单包括各种表单项，比如输入框、选择器、开关、单选框、多选框等。</div>
    </el-card>
    <el-card class="cc-mar-t-20">
      <div class="c-form-base-container">
        <div class="cc-mar-b-30">
          <el-steps :active="curSteps" align-center>
            <el-step title="填写转账信息" />
            <el-step title="确认转账信息" />
            <el-step title="完成" />
          </el-steps>
        </div>
        <el-form
          v-if="curSteps === 0"
          ref="form"
          :model="form"
          label-width="120px">
          <el-form-item label="付款账户:">
            <el-select v-model="form.region" placeholder="请选择活动区域">
              <el-option label="区域一" value="shanghai" />
              <el-option label="区域二" value="beijing" />
            </el-select>
          </el-form-item>
          <el-form-item label="付款账户:">
            <el-input v-model="form.selectval" placeholder="请输入内容" class="c-my-form-steps">
              <el-select slot="prepend" v-model="select" placeholder="请选择">
                <el-option label="餐厅名" value="zhang1" />
                <el-option label="订单号" value="zhang12" />
                <el-option label="用户电话" value="zhang13" />
              </el-select>
            </el-input>
          </el-form-item>
          <el-form-item label="收款人姓名:">
            <el-input v-model="form.name" placeholder="请输入收款人姓名" />
          </el-form-item>
          <el-form-item label="转账金额:">
            <el-input v-model="form.je" placeholder="请输入金额">
              <span slot="prefix"> ￥</span>
            </el-input>
          </el-form-item>
          <el-form-item>
            <el-button
              type="primary"
              :loading="loadingSteps1"
              @click="handleNext">下一步</el-button>
          </el-form-item>
        </el-form>
        <div v-else-if="curSteps === 1">
          <el-alert
            title="确认转账后，资金将直接打入对方账户，无法退回。"
            type="success"
            show-icon>
          </el-alert>
          <div class="cc-h-20" />
          <el-form
            ref="form"
            :model="form"
            label-width="120px">
            <el-form-item label="付款账户:">
              <div class="c-text-subheading">
                {{ getRegionTitle }}
              </div>
            </el-form-item>
            <el-form-item label="付款账户:">
              <div class="c-text-subheading">
                {{ form.selectval }}
              </div>
            </el-form-item>
            <el-form-item label="收款人姓名:">
              <div class="c-text-subheading">
                {{ form.name }}
              </div>
            </el-form-item>
            <el-form-item label="转账金额:">
              <div class="c-text-subheading">
                <span class="cc-f-s20">{{ form.je }}</span>
                <span class="cc-f-s14">元</span>
              </div>
            </el-form-item>
          </el-form>
          <el-divider />
          <el-form
            ref="form"
            :model="form"
            label-width="120px">
            <el-form-item label="支付密码:">
              <el-input v-model="form.password" type="password" placeholder="请输入收款人姓名" />
            </el-form-item>
            <el-form-item>
              <el-button
                type="primary"
                :loading="loadingSteps2"
                @click="onSubmit">提交</el-button>
              <el-button @click="onUpper">上一步</el-button>
            </el-form-item>
          </el-form>
        </div>
        <div v-else-if="curSteps === 2">
          <div class="cc-ta--c">
            <i style="font-size: 60px" class="el-icon-success cc-tc-p" />
            <h3>操作成功</h3>
            <div class="c-text-subheading cc-f-s14">预计两小时内到账</div>
          </div>
          <div class="c-steps3-box">
            <div class="c-steps3-item">
              <span>付款账户:</span>
              <span class="c-text-subheading">{{ getRegionTitle }}</span>
            </div>
            <div class="c-steps3-item">
              <span>收款账户:</span>
              <span class="c-text-subheading">{{ form.selectval }}</span>
            </div>
            <div class="c-steps3-item">
              <span>收款人姓名:</span>
              <span class="c-text-subheading">{{ form.name }}</span>
            </div>
            <div class="c-steps3-item">
              <span>收款人姓名:</span>
              <span class="c-text-subheading">
                <span class="cc-f-s20">{{ form.je }}</span>
                <span class="cc-f-s14">元</span>
              </span>
            </div>
          </div>
          <div class="cc-ta--c">
            <el-button
              type="primary"
              :loading="loadingSteps3"
              @click="handleToNoe">再转一笔</el-button>
            <el-button @click="onUpper">查看账单</el-button>
          </div>
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
      curSteps: 0,
      select: '',
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        selectval: 'zhang1',
        select: 'zhang1',
        delivery: false,
        type: [],
        resource: '',
        desc: '',
        je: '',
        password: ''
      },
      loadingSteps1: false,
      loadingSteps2: false,
      loadingSteps3: false
    }
  },
  computed: {
    getRegionTitle() {
      if (this.form.region === 'shanghai') {
        return '区域一'
      } else if (this.form.region === 'beijing') {
        return '区域二'
      }
      return ''
    }
  },
  mounted() {},
  methods: {
    onSubmit() {
      this.loadingSteps2 = true
      setTimeout(() => {
        this.loadingSteps2 = false
        this.curSteps++
      }, 800)
    },
    onUpper() {
      this.curSteps--
    },
    handleNext() {
      this.loadingSteps1 = true
      setTimeout(() => {
        this.loadingSteps1 = false
        this.curSteps++
      }, 800);
    },
    handleToNoe() {
      this.loadingSteps3 = true
      setTimeout(() => {
        this.loadingSteps3 = false
        this.curSteps = 0
      }, 800)
    }
  }
}

</script>
<style lang='scss' scoped>
.c-form-base-container {
  width: 650px;
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
