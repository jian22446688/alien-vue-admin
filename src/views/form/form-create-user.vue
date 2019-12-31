<!--
 * @Description: 创建表单
 * @Author: Cary
 * @Date: 2019-12-09 11:01:24
 * @FilePath: f:\vue-project\alien-vue-admin\src\views\form\form-base.vue
 -->
<template>
  <div class="app-container">
    <el-card>
      <el-row>
        <el-col :span="11">
          <h3>基础信息</h3>
          <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="客户名称" required>
              <el-input v-model="form.name"/>
            </el-form-item>
            <el-form-item label="助记名称">
              <el-input v-model="form.name"/>
            </el-form-item>
            <el-form-item label="所属行业" required>
              <el-select v-model="form.region" style="width: 100%" placeholder="请选择活动区域">
                <el-option label="区域一" value="shanghai"/>
                <el-option label="区域二" value="beijing"/>
              </el-select>
            </el-form-item>
            <el-form-item label="客户类型" required>
              <el-radio-group v-model="form.resource">
                <el-radio label="企业客户"></el-radio>
                <el-radio label="个人客户"></el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item label="客户状态" required>
              <el-select v-model="form.region" style="width: 100%" placeholder="请选择活动区域">
                <el-option label="区域一" value="shanghai"/>
                <el-option label="区域二" value="beijing"/>
              </el-select>
            </el-form-item>
            <el-form-item label="客户星级" required>
              <el-rate v-model="form.value1" style="line-height: 44px;" />
            </el-form-item>
            <el-form-item label="客户来源">
              <el-select v-model="form.region" style="width: 100%" placeholder="请选择活动区域">
                <el-option label="区域一" value="shanghai"/>
                <el-option label="区域二" value="beijing"/>
              </el-select>
            </el-form-item>
            <el-form-item label="归属人员" required>
              <el-select v-model="form.region" style="width: 100%" placeholder="请选择活动区域">
                <el-option label="区域一" value="shanghai"/>
                <el-option label="区域二" value="beijing"/>
              </el-select>
            </el-form-item>
            <h3>附加信息</h3>
            <el-form-item label="所在地区">
              <el-select v-model="form.region" style="width: 100%" placeholder="请选择活动区域">
                <el-option label="区域一" value="shanghai"/>
                <el-option label="区域二" value="beijing"/>
              </el-select>
            </el-form-item>
            <el-form-item label="详细地址" required>
              <el-input v-model="form.name"/>
            </el-form-item>
            <el-form-item label="上级客户" required>
              <el-input v-model="form.name"/>
            </el-form-item>
            <el-form-item label="备注信息" required>
              <el-input type="textarea" v-model="form.desc"/>
            </el-form-item>
            <el-form-item label="">
              <el-checkbox-group v-model="form.type">
                <el-checkbox label="创建下次跟进任务" name="type"/>
              </el-checkbox-group>
            </el-form-item>
            <el-form-item label="跟进时间" required>
              <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"/>
            </el-form-item>
            <el-form-item label="跟进内容">
              <el-input v-model="form.desc"></el-input>
            </el-form-item>
            <el-form-item label="跟进人员" required>
              <el-select v-model="form.region" style="width: 100%" placeholder="请选择活动区域">
                <el-option label="区域一" value="shanghai"/>
                <el-option label="区域二" value="beijing"/>
              </el-select>
            </el-form-item>
            <el-form-item label="任务提醒">
              <el-select v-model="form.region" style="width: 100%" placeholder="请选择活动区域">
                <el-option label="区域一" value="shanghai"/>
                <el-option label="区域二" value="beijing"/>
              </el-select>
            </el-form-item>
            <el-form-item label="提醒方式">
              <el-checkbox-group v-model="form.type">
                <el-checkbox label="系统消息" name="type"/>
                <el-checkbox label="邮件通知" name="emeil"/>
                <el-checkbox label="短信通知" name="msg"/>
              </el-checkbox-group>
            </el-form-item>
          </el-form>
        </el-col>
        <el-col :span="2">
          <div class="c-line">
            <div></div>
          </div>
        </el-col>
        <el-col :span="11">
          <h3>首要联系人</h3>
          <el-form ref="form" :model="form" label-width="100px">
            <el-form-item label="联系人姓名" required>
              <el-input v-model="form.name"/>
            </el-form-item>
            <el-form-item label="尊称" required>
              <el-radio-group v-model="form.resource">
                <el-radio label="先生"></el-radio>
                <el-radio label="女士"></el-radio>
                <el-radio label="未知"></el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item label="角色">
              <el-select v-model="form.region" style="width: 100%" placeholder="请选择活动区域">
                <el-option label="区域一" value="shanghai"/>
                <el-option label="区域二" value="beijing"/>
              </el-select>
            </el-form-item>
            <el-form-item label="生日">
              <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"/>
            </el-form-item>
            <el-form-item label="部门职务">
              <el-input v-model="form.name"/>
            </el-form-item>
            <el-form-item label="手机号码">
              <el-input v-model="form.name"/>
            </el-form-item>
            <el-form-item label="固定电话">
              <el-input v-model="form.name"/>
            </el-form-item>
            <el-form-item label="传真号码">
              <el-input v-model="form.name"/>
            </el-form-item>
            <el-form-item label="电子邮箱">
              <el-input v-model="form.name"/>
            </el-form-item>
            <el-form-item label="微信账号">
              <el-input v-model="form.name"/>
            </el-form-item>
            <el-form-item label="QQ号码">
              <el-input v-model="form.name"/>
            </el-form-item>
            <el-form-item label="所在地区">
              <el-select v-model="form.region" style="width: 100%" placeholder="请选择活动区域">
                <el-option label="区域一" value="shanghai"/>
                <el-option label="区域二" value="beijing"/>
              </el-select>
            </el-form-item>
            <el-form-item label="详细地址">
              <el-input v-model="form.name"/>
            </el-form-item>
            <el-form-item label="备注信息">
              <el-input type="textarea" v-model="form.desc"></el-input>
            </el-form-item>
          </el-form>
        </el-col>
        <el-col :span="24">
          <el-button type="primary" @click="onSubmit">立即创建</el-button>
          <el-button>取消</el-button>
          <el-button>重置</el-button>
        </el-col>
      </el-row>
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
        value1: null
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
.c-line {
  width: 1px;
  height: 1000px;
  background-color: rgb(236, 239, 243);
  margin: 0 auto;
}
.c-line__temp {
  height: 100%;
  width: 2px;
  background-color: aquamarine;
}
</style>
