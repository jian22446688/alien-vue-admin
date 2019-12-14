<!--
 * @Description: 文件及简介
 * @Author: Cary
 * @Date: 2019-12-12 11:15:37
 * @FilePath: f:\vue-project\alien-vue-admin\src\views\icons\element-ui-icon.vue
 -->
<template>
  <div class="app-container">
    <el-card>
      <div>
        使用的是Element-UI 项目中的所有图标. 图标数量: {{ iconList.length }}
      </div>
    </el-card>
    <el-card class="cc-mar-t-10">
      <div class="c-icon-grid">
         <div v-for="icon in iconList" :key="icon.id" class="c-icon-item">
          <i class="c-icon-tip" :class="[icon.icon]"/>
          <p class="cc-mar-2 cc-f-s14 c-text-subheading65">{{ icon.icon }}</p>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      iconList: this.$store.getters.eleIcon(999)
    }
  },
  computed: {},
  mounted() {},
  methods: {}
}

</script>
<style lang='scss' scoped>

.c-icon-grid {
  position: relative;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  text-align: center;
  .c-icon-item {
    height: 80px;
    margin: 10px;
    cursor: pointer;
    color: #909399;
    font-size: 36px;
  }
  .c-icon-tip {
    transition: all 0.3s ease-in-out;
  }
  .c-icon-tip:hover {
    transform: scale(1.3);
  }
}


</style>
