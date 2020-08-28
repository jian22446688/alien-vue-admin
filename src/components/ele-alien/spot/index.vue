<!--
 * @Description: 文件及简介
 * @Author: Cary
 * @Date: 2020-05-29 16:48:49
 * @FilePath: \alien-docsf:\vue-project\vue-admin-se\src\components\spot\index.vue
-->
<template>
  <i :style="{ backgroundColor: color }" class="c-spot-body"/>
</template>

<script>
export default {
  components: {},
  props: {
    color: {
      type: String,
      default: '#00c464'
    }
  },
  data() {
    return {}
  },
  computed: {},
  mounted() {},
  methods: {}
}
</script>

<style lang='scss' scoped>
.c-spot-body {
  width: 8px;
  height: 8px;
  display: inline-block;
  border-radius: 50%;
}
</style>
