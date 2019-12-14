<!--
 * @Description: 用户信息
 * @Author: Cary
 * @Date: 2019-12-04 14:29:31
 * @FilePath: f:\vue-project\alien-vue-admin\src\views\profile\index.vue
 -->
<template>
  <div class="app-container">
    <div v-if="user">
      <el-row :gutter="10">
        <el-col :span="6" :xs="24">
          <user-card :user="user" />
        </el-col>
        <el-col :span="18" :xs="24">
          <el-card>
            <el-tabs v-model="activeTab">
              <el-tab-pane label="热门文章" name="activity">
                <activity />
              </el-tab-pane>
              <el-tab-pane label="应用程序" name="application">
                <application />
              </el-tab-pane>
              <el-tab-pane label="项目列表" name="project">
                <project />
              </el-tab-pane>
              <el-tab-pane label="账户信息" name="account">
                <account :user="user" />
              </el-tab-pane>
              <el-tab-pane label="安全设置" name="security">
                <security />
              </el-tab-pane>
              <el-tab-pane label="账号绑定" name="account-bind">
                <account-bind />
              </el-tab-pane>
              <el-tab-pane label="消息通知" name="message">
                <message />
              </el-tab-pane>
              <el-tab-pane label="时间线" name="timeline">
                <timeline />
              </el-tab-pane>
            </el-tabs>
          </el-card>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import UserCard from './components/UserCard'
import Activity from './components/Activity'
import Timeline from './components/Timeline'
import Account from './components/Account'
import Application from './components/application'
import Project from './components/project'
import Security from './components/security'
import AccountBind from './components/account-bind'
import Message from './components/message'

export default {
  name: 'Profile',
  components: {
    UserCard,
    Activity,
    Timeline,
    Account,
    Application,
    Project,
    Security,
    AccountBind,
    Message
  },
  data() {
    return {
      user: {},
      activeTab: 'activity'
    }
  },
  computed: {
    ...mapGetters([
      'name',
      'avatar',
      'roles'
    ])
  },
  created() {
    this.getUser()
  },
  methods: {
    getUser() {
      this.user = {
        name: this.name,
        role: this.roles.join(' | '),
        email: 'admin@test.com',
        avatar: this.avatar
      }
    }
  }
}
</script>
