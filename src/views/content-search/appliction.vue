<!--
 * @Description: 文件及简介
 * @Author: Cary
 * @Date: 2019-12-13 11:56:08
 * @FilePath: f:\vue-project\alien-vue-admin\src\views\content-search\project.vue
 -->
<template>
  <div class="app-container">
    <el-card class="cc-mar-b-10">
      <div class="cc-pad-30 cc-ta--c">
        <el-input style="width: 500px;" placeholder="请输入内容" v-model="input2">
          <!-- <el-button slot="append" type="primary">搜索</el-button> -->
        </el-input>
        <el-button slot="append" type="primary" @click="handleSearch">搜索</el-button>
      </div>
    </el-card>
    <el-card class="cc-mar-b-10">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="标签:">
          <div>
            <c-tag-select
              v-model="tags"
              :list="tagList" />
          </div>
        </el-form-item>
         <el-divider></el-divider>
        <el-form-item label="作者:">
          <el-select v-model="form.region" multiple placeholder="请选择活动区域">
            <el-option 
              v-for="item in selectList"
              :key="item.id"
              :label="item.name"
              :value="item.name">
                <el-avatar style="vertical-align: middle;" :size="22" :src="item.avatar"></el-avatar>
                <span>{{ item.name }}</span>
            </el-option>
          </el-select>
        </el-form-item>
         <el-divider></el-divider>
        <el-form-item label="标签:">
          <div>
            <el-radio-group v-model="form.radio">
              <el-radio
                v-for="item in radioList"
                :key="item.id"
                :label="item.name">{{ item.name }}</el-radio>
            </el-radio-group>
          </div>
        </el-form-item>
      </el-form>
    </el-card>
    <el-card class="cc-mar-b-10">
      <el-row :gutter="10">
        <template
          v-for="item in userList">
          <el-col
            :key="item.id"
            :xs="24"
            :sm="12"
            :md="8"
            :lg="6">
            <el-card class="cc-mar-b-10" shadow="hover">
              <div class="c-tiem-group">
                <el-avatar class="item-avatar" size="small" :src="item.avatar" />
                <el-link class="item-avatar-line cc-f-s20" :underline="false">{{ item.name || '' }}</el-link>
              </div>
              <div class="cc-mar-l-36">
                <el-row>
                  <el-col :span="12">
                    <div class="c-text-subheading cc-f-s14">活跃用户</div>
                    <div class="cc-mar-t-10 cc-f-s22">12 <span class="cc-f-s14">万</span></div>
                  </el-col>
                  <el-col :span="12">
                    <div class="c-text-subheading cc-f-s14">新增用户</div>
                    <div class="cc-mar-t-10 cc-f-s22">126,560</div>
                  </el-col>
                </el-row>
              </div>
              <el-divider />
              <el-row class="cc-ta--c">
                <el-col :span="6">
                  <el-tooltip class="item" effect="dark" content="下载" placement="top">
                    <el-link :underline="false"><i class="el-icon-download cc-f-s20" /></el-link>
                  </el-tooltip>
                  <el-divider class="cc-f--right" direction="vertical" />
                </el-col>
                <el-col :span="6">
                  <el-tooltip class="item" effect="dark" content="编辑" placement="top">
                    <el-link :underline="false"><i class="el-icon-edit cc-f-s20" /></el-link>
                  </el-tooltip>
                  <el-divider class="cc-f--right" direction="vertical" />
                </el-col>
                <el-col :span="6">
                  <el-tooltip class="item" effect="dark" content="分享" placement="top">
                    <el-link :underline="false"><i class="el-icon-share cc-f-s20" /></el-link>
                  </el-tooltip>
                  <el-divider class="cc-f--right" direction="vertical" />
                </el-col>
                <el-col :span="6">
                  <el-dropdown>
                    <el-link :underline="false"><i class="el-icon-more-outline cc-f-s20" /></el-link>
                    <el-dropdown-menu slot="dropdown">
                      <el-dropdown-item>黄金糕</el-dropdown-item>
                      <el-dropdown-item>狮子头</el-dropdown-item>
                      <el-dropdown-item>螺蛳粉</el-dropdown-item>
                      <el-dropdown-item disabled>双皮奶</el-dropdown-item>
                      <el-dropdown-item divided>蚵仔煎</el-dropdown-item>
                    </el-dropdown-menu>
                  </el-dropdown>
                </el-col>
              </el-row>
            </el-card>
          </el-col>
        </template>
      </el-row>
      <div class="cc-mar-t-20 cc-ta--c">
        <el-button
        size="small"
        :loading="postLoading"
        round
        @click="handleLoading">加载更多</el-button>
      </div>
    </el-card>
  </div>
</template>

<script>
import { randomRange } from '@/utils/index'
export default {
  components: {},
  data() {
    return {
      input2: '',
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        radio: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      radioList: this.$store.getters.gameAvatarList(6),
      selectList: this.$store.getters.gameAvatarList(12),
      tags: ['花木兰', '阿珂'],
      tagList: [],
      types: ['', 'success', 'info', 'warning', 'danger'],
      userList: [],
      postLoading: false
    }
  },
  computed: {},
  mounted() {
    let arr = this.$store.getters.gameAvatarList(63)
    this.tagList = arr.map(e => e.name)
    this.userList = this.$store.getters.gameAvatarList(12)
  },
  methods: {
    handleSearch() {
      this.userList = this.$store.getters.gameAvatarList(12)
    },

    handleLoading() {
      this.postLoading = true
      setTimeout(() => {
        this.postLoading = false
        let lsit = this.$store.getters.gameAvatarList(8)
        this.userList = this.userList.concat(lsit)
      }, 500)
    }
  }
}

</script>
<style lang='scss' scoped>
.c-tiem-group {
  display: block;
  height: 28px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  word-break: break-all;
  margin-bottom: 10px;
  .item-avatar-line {
    display: inline;
    margin-left: 6px;
    font-size: 14px;
    line-height: 28px;
    vertical-align: top;
    white-space: nowrap;
    vertical-align: middle;
  }
  .item-avatar {
    vertical-align: middle;
    background-color: transparent;
  }
}
</style>
