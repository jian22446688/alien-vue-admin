<template>
  <div class="user-activity">
    <div
      v-for="item in postList"
      :key="item.id"
      class="post">
      <!-- <div class="user-block">
        <img class="img-circle" :src="'https://wpimg.wallstcn.com/57ed425a-c71e-4201-9428-68760c0537c4.jpg'+avatarPrefix">
        <span class="username text-muted">Iron Man</span>
        <span class="description">Shared publicly - 7:30 PM today</span>
      </div> -->
      <h2 class="cc-tc-t1 cc-t-no-wrap">{{ item.title }}</h2>
      <p>{{ item.content }}</p>
      <div class="cc-mar-t-20 cc-mar-b-20">
        <div class="c-user-name-link">
          <el-avatar :size="20" :src="item.cover" />
          <el-link class="link" type="primary" :underline="false">{{ item.fname }}</el-link>
          <span class="cc-mar-t-4 time"> 发布在 {{ item.ctime }}</span>
        </div>
      </div>
      <ul class="list-inline cc-mar-t-20 cc-mar-b-20">
        <li>
          <span class="link-black text-sm">
            <i class="el-icon-star-off" />
            2621
          </span>
          <el-divider direction="vertical" />
        </li>
        <li>
          <span class="link-black text-sm">
            <i class="el-icon-thumb" />
            2521
          </span>
          <el-divider direction="vertical" />
        </li>
        <li>
          <span class="link-black text-sm">
            <i class="el-icon-chat-dot-round" />
            2821
          </span>
        </li>
      </ul>
      <el-divider />
    </div>
  </div>
</template>

<script>
const avatarPrefix = '?imageView2/1/w/80/h/80'
const carouselPrefix = '?imageView2/2/h/440'
import { getCommonPopular } from '@/api/modules/common'
export default {
  data() {
    return {
      avatarPrefix,
      carouselPrefix,
      postList: []
    }
  },
  computed: {
    getUserAvatar() {
      return this.$store.getters.avatar
    }
  },
  mounted() {
    getCommonPopular().then(res => {
      this.postList = res.data
    })
  }
}
</script>

<style lang="scss" scoped>
.user-activity {
  .user-block {
    .username,
    .description {
      display: block;
      margin-left: 50px;
      padding: 2px 0;
    }

    .username{
      font-size: 16px;
      color: #000;
    }

    :after {
      clear: both;
    }

    .img-circle {
      border-radius: 50%;
      width: 40px;
      height: 40px;
      float: left;
    }

    span {
      font-weight: 500;
      font-size: 12px;
    }
  }

  .post {
    font-size: 14px;
    margin-bottom: 15px;
    color: #909399;

    .image {
      width: 100%;
      height: 100%;

    }

    .user-images {
      padding-top: 20px;
    }
    p {
      line-height: 22px;
    }
  }

  .list-inline {
    padding-left: 0;
    margin-left: -5px;
    list-style: none;

    li {
      display: inline-block;
      padding-right: 5px;
      padding-left: 5px;
      font-size: 13px;
    }

    .link-black {

      &:hover,
      &:focus {
        color: #999;
      }
    }
  }
}

.box-center {
  margin: 0 auto;
  display: table;
}

.text-muted {
  color: #777;
}

.c-user-name-link {
  .link {
    vertical-align: top;
    margin-top: 2px;
  }
  .time {
    display: inline-block;
    vertical-align: top;
    margin-top: 2px;
  }
}

</style>
