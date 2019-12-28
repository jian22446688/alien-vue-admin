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
        <el-input v-model="input2" style="width: 500px;" placeholder="请输入内容">
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
        <el-divider/>
        <el-form-item label="作者:">
          <el-select v-model="form.region" multiple placeholder="请选择活动区域">
            <el-option
              v-for="item in selectList"
              :key="item.id"
              :label="item.name"
              :value="item.name">
              <el-avatar style="vertical-align: middle;" :size="22" :src="item.avatar"/>
              <span>{{ item.name }}</span>
            </el-option>
          </el-select>
        </el-form-item>
         <el-divider />
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
        <el-col
          v-for="item in prefileList"
          :key="item.id"
          :xs="24"
          :sm="12"
          :md="8"
          :lg="6">
          <el-card :body-style="{ padding: '0px' }" class="cc-mar-b-10" shadow="hover">
            <img width="100%" :src="item.cover" class="image">
            <div style="padding: 20px;">
              <div class="cc-f-s16 cc-fw--b cc-t-no-wrap">{{ item.title }}</div>
              <div class="cc-mar-t-20 c-text-subheading cc-f-s14 cc-t-mr-3">
                {{ item.content }}
              </div>
              <div class="cc-mar-t-20 c-project-control">
                <div class="title c-text-subheading cc-f-s14">{{ item.ftime }} 小时前</div>
                <div class="user">
                  <template
                    v-for="avatar in $store.getters.gameAvatarList(3)">
                    <el-tooltip
                      :key="avatar.id"
                      :content="avatar.name"
                      class="item"
                      effect="dark"
                      placement="top">
                      <el-avatar class="user-img" :size="26" :src="avatar.avatar" />
                    </el-tooltip>
                  </template>
                </div>
              </div>
            </div>
          </el-card>
        </el-col>
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
import { getCommonPrefile } from '@/api/modules/common'
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
      prefileList: [],
      postLoading: false
    }
  },
  computed: {},
  mounted() {
    let arr = this.$store.getters.gameAvatarList(63)
    this.tagList = arr.map(e => e.name)
    getCommonPrefile().then(res => {
      this.prefileList = res.data
    })
  },
  methods: {
    handleSearch() {
      getCommonPrefile().then(res => {
        this.prefileList = res.data
      })
    },

    handleLoading() {
      this.postLoading = true
      getCommonPrefile().then(res => {
        this.postLoading = false
        this.prefileList = this.prefileList.concat(res.data)
      })
    }
  }
}

</script>
<style lang='scss' scoped>
.c-project-control {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  .title {
    line-height: 26px;
  }
  .user {
    line-height: 26px;
    padding-right: 6px;
    .user-img {
      border: #fff solid 1px;
      margin-right: -6px;
    }
  }
}
</style>
