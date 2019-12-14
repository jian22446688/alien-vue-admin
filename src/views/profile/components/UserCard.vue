<template>
  <el-card style="margin-bottom:20px;">
    <div class="user-profile">
      <div class="box-center">
        <el-avatar :size="100" :src="user.avatar" />
      </div>
      <div class="box-center">
        <div class="user-name text-center cc-f-s20">{{ user.name }}</div>
        <div class="user-role text-center text-muted">{{ user.role | uppercaseFirst }}</div>
      </div>
    </div>

    <div class="user-bio">
      <div class="c-user-info c-text-subheading65 cc-f-s14">
        <p><i class="el-icon-set-up" />交互专家</p>
        <p><i class="el-icon-guide" />某某某事业群－某某平台部－某某技术部－WEB前端</p>
        <p><i class="el-icon-location-information" />广东省深圳市</p>
      </div>

      <el-divider />

      <tag-group :list="['设计语言', 'Element', 'Vue', '海纳百川', '川妹子']" class="cc-mar-t-20" />

      <div class="user-education user-bio-section">
        <div class="user-bio-section-header"><svg-icon icon-class="education" />
          <span class="cc-pad-l-4">教育背景</span>
        </div>
        <div class="user-bio-section-body">
          <div class="text-muted">
            天津大学计算机科学系
          </div>
        </div>
      </div>
      <div class="user-skills user-bio-section">
        <div class="user-bio-section-header"><svg-icon icon-class="skill" />
          <span class="cc-pad-l-4">技能</span>
        </div>
        <div class="user-bio-section-body">
          <div class="progress-item">
            <span>Vue</span>
            <el-progress :percentage="70" />
          </div>
          <div class="progress-item">
            <span>JavaScript</span>
            <el-progress :percentage="18" />
          </div>
          <div class="progress-item">
            <span>Css</span>
            <el-progress :percentage="12" />
          </div>
          <div class="progress-item">
            <span>ESLint</span>
            <el-progress :percentage="100" status="success" />
          </div>
        </div>
      </div>
      <el-divider />
      <div class="cc-mar-t-20">
        <div class="cc-tc-b cc-mar-b-10">团队</div>
        <el-row>
          <el-col
            v-for="item in $store.getters.gameAvatarList(9)"
            :key="item.id"
            :span="12">
            <a href="#" class="c-tiem-group">
              <el-avatar class="item-avatar" size="small" :src="item.avatar" />
              <el-link class="item-avatar-line" :underline="false">{{ item.name }}</el-link>
            </a>
          </el-col>
        </el-row>
      </div>

    </div>
  </el-card>
</template>

<script>
import TagGroup from './tag-group'

export default {
  components: { TagGroup },
  props: {
    user: {
      type: Object,
      default: () => {
        return {
          name: '',
          email: '',
          avatar: '',
          roles: ''
        }
      }
    }
  },
  computed: {
    getUserAvatar() {
      return this.$store.getters.avatar
    }
  }
}
</script>

<style lang="scss" scoped>
.box-center {
  margin: 0 auto;
  display: table;
}

.text-muted {
  color: #777;
}

.user-profile {
  .user-name {
    font-weight: bold;
  }

  .box-center {
    padding-top: 10px;
  }

  .user-role {
    padding-top: 10px;
    font-weight: 400;
    font-size: 14px;
  }

  .box-social {
    padding-top: 30px;

    .el-table {
      border-top: 1px solid #dfe6ec;
    }
  }

  .user-follow {
    padding-top: 20px;
  }
}

.user-bio {
  margin-top: 20px;
  color: #606266;
  .user-bio-section {
    font-size: 14px;
    padding: 15px 0;

    .user-bio-section-header {
      border-bottom: 1px solid #dfe6ec;
      padding-bottom: 10px;
      margin-bottom: 10px;
      font-weight: bold;
    }
  }
  .c-user-info {
    p {
      position: relative;
      padding-left: 26px;
      i {
        position: absolute;
        left: 0;
      }
    }
  }

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
}
</style>
