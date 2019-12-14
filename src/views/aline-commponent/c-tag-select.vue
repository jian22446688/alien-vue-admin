<!--
 * @Description: 标签选择器
 * @Author: Cary
 * @Date: 2019-12-12 17:49:35
 * @FilePath: f:\vue-project\alien-vue-admin\src\views\aline-commponent\c-tag-select.vue
 -->
<template>
  <div class="app-container">
    <el-card>
      <div>
        超强组件 - 标签多选择的使用
      </div>
    </el-card>
    <el-card class="cc-mar-t-10">
      <c-tag-select
        v-model="tags"
        :list="tagList" />
    </el-card>
    <el-card class="cc-mar-t-10">
      <c-tag-select
        v-model="tags"
        :list="tagList"
        type="success"
        :is-expanded="false" />
    </el-card>
    <el-card class="cc-mar-t-10">
      <c-tag-select
        v-model="tags"
        :list="tagList"
        type="info"
        :is-all-br="true"
        :is-expanded="false" />
    </el-card>
    <el-card class="cc-mar-t-10">
      <c-tag-select
        v-model="tags"
        :list="tagList"
        :is-all-br="true"
        type="warning" />
    </el-card>
    <el-card class="cc-mar-t-10">
      <c-tag-select
        v-model="tags"
        :list="tagList"
        type="danger" />
    </el-card>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      tags: ['花木兰', '阿珂'],
      tagList: []
    }
  },
  computed: {},
  mounted() {
    let arr = this.$store.getters.gameAvatarList(63)
    this.tagList = arr.map(e => e.name)
  },
  methods: {}
}

</script>
<style lang='scss' scoped>

</style>
