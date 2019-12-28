<!--
 * @Description: 文件及简介
 * @Author: Cary
 * @Date: 2019-12-13 11:53:46
 * @FilePath: f:\vue-project\alien-vue-admin\src\views\content-search\article.vue
 -->
<template>
  <div class="app-container">
    <el-card class="cc-mar-b-10">
      <div class="cc-pad-30 cc-ta--c">
        <el-input style="width: 500px;" placeholder="请输入内容" v-model="input2"/>
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
      <div
        v-for="(item, index) in postList"
        :key="item.id">
        <div class="article">
          <div class="content">
            <el-link
              class="cc-f-s16"
              style="display: block"
              :underline="false">{{ item.title }}</el-link>
            <div class="tags">
              <el-tag
                v-for="tag in getTagList()"
                :key="tag.id"
                style="margin-right: 6px"
                :type="getTypes()">{{ tag.name }}</el-tag>
            </div>
            <p class="subhead c-text-subheading cc-f-s14">
              {{ item.content }}
            </p>
            <div class="cc-mar-t-20 cc-mar-b-20">
              <div class="c-user-name-link">
                <el-avatar :size="20" :src="item.cover" />
                <el-link class="link" type="primary" :underline="false">{{ item.fname }}</el-link>
                <span class="cc-mar-t-4 time"> 发布在 {{ item.ctime }}</span>
              </div>
            </div>
            <ul class="list-inline cc-mar-t-10 cc-mar-b-10">
              <li>
                <el-link class="icon-link" :underline="false">
                  <i class="el-icon-star-off" />
                  2621
                </el-link>
                <el-divider direction="vertical" />
              </li>
              <li>
                <el-link class="icon-link" :underline="false">
                  <i class="el-icon-thumb" />
                  2621
                </el-link>
                <el-divider direction="vertical" />
              </li>
              <li>
                <el-link class="icon-link" :underline="false">
                  <i class="el-icon-chat-dot-round" />
                  2621
                </el-link>
              </li>
            </ul>
          </div>
          <div class="cover">
            <el-image :src="item.thumbnail" />
          </div>
        </div>
        <el-divider v-if="(index + 1) !== postList.length" />
        <div v-if="(index + 1) === postList.length" class="cc-mar-t-20 cc-ta--c">
           <el-button
            size="small"
            :loading="postLoading"
            round
            @click="handleLoading">加载更多</el-button>
        </div>
      </div>
      
    </el-card>
  </div>
</template>

<script>
import { getCommonPopular } from '@/api/modules/common'
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
      postList: [],
      postLoading: false
    }
  },
  computed: {},
  mounted() {
    let arr = this.$store.getters.gameAvatarList(63)
    this.tagList = arr.map(e => e.name)
    getCommonPopular().then(res => {
      this.postList = res.data
    })
  },
  methods: {
    getTagList() {
      return this.$store.getters.gameAvatarList(randomRange(3, 6))
    },

    getTypes() {
      return this.types[randomRange(0, this.types.length - 1)]
    },

    handleSearch() {
      getCommonPopular().then(res => {
        this.postList = res.data
      })
    },

    handleLoading() {
      this.postLoading = true
      getCommonPopular().then(res => {
        this.postLoading = false
        this.postList = this.postList.concat(res.data)
      })
    }
  }
}

</script>
<style lang='scss' scoped>
.article {
  display: flex;
  .content {
    padding-top: 10px; 
    flex-basis: calc(100% - 300px);
  }
  .tags {
    margin: 16px 0;
  }
  .subhead {
    max-width: 680px;
    line-height: 18px;
  }
  .cover {
    width: 300px;
    margin-left: 16px;
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
.c-user-name-link {
  .link {
    vertical-align: top;
    margin-top: 2px;
  }
  .time {
    display: inline-block;
    vertical-align: top;
    margin-top: 2px;
    font-size: 14px;
    color: #8c8d8f;
  }
}
</style>
