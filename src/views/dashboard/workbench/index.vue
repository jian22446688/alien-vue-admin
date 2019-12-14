<!--
 * @Description: 监控页面
 * @Author: Cary
 * @Date: 2019-12-06 11:04:10
 * @FilePath: f:\vue-project\alien-vue-admin\src\views\dashboard\workbench\index.vue
 -->
<template>
  <div class="app-container">
    <el-card>
      <div class="c-user-info">
        <div class="user">
          <div class="avatar">
            <img :src="getUserAvatar" alt="">
          </div>
          <div class="title">
            <div>早安，{{ getUserName }}，祝你开心每一天！</div>
            <div class="c-text-subheading cc-f-s14 cc-mar-t-10">交互专家 |蚂蚁金服－某某某事业群－某某平台部－某某技术部－UED</div>
          </div>
        </div>
        <div class="word cc-f--right">
          <dir class="word-item ">
            <div class="c-text-subheading cc-f-s14">项目数</div>
            <div class="cc-mar-t-10 cc-f-s20">56</div>
          </dir>
          <div class="word-line" />
          <dir class="word-item">
            <div class="c-text-subheading cc-f-s14">团队内排名</div>
            <div class="cc-mar-t-10 cc-f-s20">8/ 24</div>
          </dir>
          <div class="word-line" />
          <dir class="word-item">
            <div class="c-text-subheading cc-f-s14">项目访问</div>
            <div class="cc-mar-t-10 cc-f-s20">2,223</div>
          </dir>
        </div>
      </div>
    </el-card>
    <el-row :gutter="10" class="cc-mar-t-10">
      <el-col :xs="24" :sm="24" :lg="18">
        <el-card :body-style="{ padding: '10px' }" class="cc-mar-b-10">
          <div slot="header">
            <span>进行中的项目</span>
            <el-button style="float: right; padding: 3px 0" type="text">全部项目</el-button>
          </div>
          <el-row>
            <el-col
              v-for="item in $store.getters.gameAvatarList(9)"
              :key="item.id"
              :span="8">
              <el-card shadow="hover">
                <div class="c-content-item">
                  <div class="">
                    <a href="#" class="c-tiem-group">
                      <el-avatar class="item-avatar" size="small" :src="item.avatar" />
                      <el-link class="item-avatar-line" :underline="false">{{ item.name }}</el-link>
                    </a>
                  </div>
                  <div class="item-content cc-mar-t-6"><span class="c-text-subheading cc-f-s14">希望是一个好东西，也许是最好的，好东西是不会</span></div>
                  <div class="item-footer cc-mar-t-6">
                    <el-link class="c-text-subheading" :underline="false">无下划线</el-link>
                    <div class="c-text-subheading cc-f-s14 cc-f--right">2 小时前</div>
                  </div>
                </div>
              </el-card>
            </el-col>
          </el-row>
        </el-card>
        <el-card class="cc-mar-b-10">
          <div slot="header">
            <span>动态</span>
            <el-button style="float: right; padding: 3px 0" type="text">全部</el-button>
          </div>
          <div>
            <div
              v-for="(item, index) in $store.getters.gameAvatarList(6)"
              :key="item.id">
              <div
                class="c-hot-item">
                <div class="hot-avatar">
                  <el-avatar :size="46" :src="item.avatar" />
                </div>
                <div class="hot-content">
                  <div class="cc-f-s14" style="line-height: 26px">
                    {{ item.name }} 在
                    <el-link type="primary" :underline="false">高逼格设计天团</el-link>
                    新建项目
                    <el-link type="primary" :underline="false">六月迭代</el-link>
                  </div>
                  <div class="c-text-subheading cc-f-s12 cc-mar-t-2">2 小时前</div>
                </div>
              </div>
              <el-divider v-if="index !== 5" />
            </div>
          </div>
        </el-card>
      </el-col>
      <el-col :xs="24" :sm="12" :lg="6">
        <el-card>
          <div slot="header">
            <span>快速开始 / 便捷导航</span>
          </div>
          <div>
            <el-link :underline="false" class="cc-mar-6">操作一</el-link>
            <el-link :underline="false" class="cc-mar-6">操作二</el-link>
            <el-link :underline="false" class="cc-mar-6">操作三</el-link>
            <el-link :underline="false" class="cc-mar-6">操作四</el-link>
            <el-link :underline="false" class="cc-mar-6">操作五</el-link>
            <el-button class="cc-pad-4" type="success" icon="el-icon-plus" plain>添加</el-button>
          </div>
        </el-card>
        <el-card class="cc-mar-t-10">
          <div slot="header">
            <span>攻击指数</span>
          </div>
          <div>
            <ve-radar height="300px" :data="chartData" />
          </div>
        </el-card>
        <el-card class="cc-mar-t-10">
          <div slot="header">
            <span>团队</span>
          </div>
          <el-row>
            <el-col
              v-for="item in $store.getters.gameAvatarList(12)"
              :key="item.id"
              :span="12">
              <div class="cc-mar-b-6">
                <a href="#" class="c-tiem-group">
                  <el-avatar class="item-avatar" size="small" :src="item.avatar" />
                  <el-link class="item-avatar-line" :underline="false">{{ item.name }}</el-link>
                </a>
              </div>
            </el-col>
          </el-row>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      chartData: {
        columns: ['日期', '访问用户', '下单用户', '下单率'],
        rows: [
          { '日期': '1/1', '访问用户': 1393, '下单用户': 1093, '下单率': 0.32 },
          { '日期': '1/2', '访问用户': 3530, '下单用户': 3230, '下单率': 0.26 },
          { '日期': '1/3', '访问用户': 2923, '下单用户': 2623, '下单率': 0.76 }
        ]
      }
    }
  },
  computed: {
    getUserAvatar() {
      return this.$store.getters.avatar
    },
    getUserName() {
      return this.$store.getters.name
    }
  },
  mounted() {},
  methods: {}
}

</script>
<style lang='scss' scoped>

.c-user-info {
  display: flex;
  width: 100%;
  .user {
    display: flex;
    .avatar {
      flex: 0 1 72px;
      width: 72px;
      height: 72px;
      border-radius: 72px;
      overflow: hidden;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .title {
      position: relative;
      flex: 1 1 auto;
      font-size: 20px;
      margin-left: 14px;
      margin-top: 10px;
      line-height: 22px;
    }
  }
  .word {
    flex: 1 1 auto;
    min-width: 242px;
    margin-left: 88px;
    margin-right: 10px;
    text-align: right;
    line-height: 22px;
    padding-top: 10px;
    .word-item {
      position: relative;
      margin: 0;
      padding: 0;
      display: inline-block;
    }
    .word-line {
      display: inline-block;
      width: 1px;
      height: 40px;
      background-color: #e8e8e8;
      margin: 0 16px;
    }
  }
}

.item-avatar {
  vertical-align: middle;
}

.item-avatar-name {
  display: inline-block;
  height: 28px;
  margin-left: 6px;
  font-size: 14px;
  line-height: 28px;
  vertical-align: top;
  white-space: nowrap;
}

.item-avatar-line {
  display: inline;
  margin-left: 6px;
  font-size: 14px;
  line-height: 28px;
  vertical-align: top;
  white-space: nowrap;
  vertical-align: middle;
}

.c-tiem-group {
  display: block;
  height: 28px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  word-break: break-all;
}

.c-hot-item {
    display: flex;
    flex: 1 1;
    align-items: flex-start;
}

.hot-avatar {
  margin-right: 10px;
}

.hot-content {
  flex: 1 0;
}

</style>
