<!--
 * @Description: 通用的组件
 * @Author: Cary
 * @Date: 2019-12-12 15:49:15
 * @FilePath: \alien-docsf:\vue-project\alien-vue-admin\src\views\aline-commponent\index.vue
 -->
<template>
  <div class="app-contraner">
    <el-row :gutter="16">
      <el-col :span="12">
        <el-card header="图标选择器">
          <icon-select v-model="icon" filterable clearable />
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'Common',
  components: {},
  data() {
    return {
      icon: ''
    }
  },
  computed: {},
  mounted() {},
  methods: {}
}

</script>
<style lang='scss' scoped>

</style>
