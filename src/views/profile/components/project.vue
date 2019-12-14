<!--
 * @Description: 文件及简介
 * @Author: Cary
 * @Date: 2019-12-07 16:22:01
 * @FilePath: f:\vue-project\alien-vue-admin\src\views\profile\components\project.vue
 -->
<template>
  <div>
    <el-row :gutter="10">
      <el-col
        v-for="item in prefileList"
        :key="item.id"
        :sm="24"
        :md="12"
        :lg="8">
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
  </div>
</template>

<script>
import { getCommonPrefile } from '@/api/modules/common'
export default {
  components: {},
  data() {
    return {
      prefileList: []
    }
  },
  computed: {},
  mounted() {
    getCommonPrefile().then(res => {
      this.prefileList = res.data
    })
  },
  methods: {}
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
