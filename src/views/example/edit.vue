<!--
 * @Description: 文件及简介
 * @Author: Cary
 * @Date: 2019-12-14 16:48:37
 * @FilePath: f:\vue-project\alien-vue-admin\src\views\example\edit.vue
 -->
<template>
  <article-detail :is-edit="true" />
</template>

<script>
import ArticleDetail from './components/ArticleDetail'

export default {
  name: 'EditForm',
  components: { ArticleDetail }
}
</script>
