<!--
 * @Description: 文件及简介
 * @Author: Cary
 * @Date: 2019-12-07 16:21:35
 * @FilePath: f:\vue-project\alien-vue-admin\src\views\profile\components\application.vue
 -->
<template>
  <div>
    <el-row :gutter="10">
      <template
        v-for="item in userList">
        <el-col :key="item.id" :sm="24" :md="12" :lg="8">
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
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      userList: this.$store.getters.gameAvatarList(12)
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
