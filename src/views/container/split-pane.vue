<!--
 * @Description: 四边布局
 * @Author: Cary
 * @Date: 2019-12-09 16:03:17
 * @FilePath: f:\vue-project\alien-vue-admin\src\views\container\base.vue
 -->
<template>
  <div class="app-container">
    <div class="split-container">
      <split-pane :default-percent='30' split="vertical" @resize="resize">
        <div slot="paneL" class="left-container split-item">
          A
        </div>
        <split-pane slot="paneR" split="horizontal">
          <split-pane slot="paneL" :min-percent='20' :default-percent='30' split="vertical" @resize="resize">
            <div slot="paneL" class="top-container split-item">
              A
            </div>
            <div slot="paneR" class="left-container split-item">
              B
            </div>
          </split-pane>
          <split-pane slot="paneR" :min-percent='20' :default-percent='30' split="horizontal" @resize="resize">
            <div slot="paneL" class="top-container split-item">
              A
            </div>
            <div slot="paneR" class="left-container split-item">
              B
            </div>
          </split-pane>
        </split-pane>
      </split-pane>
    </div>
  </div>
</template>

<script>

import SplitPane from 'vue-splitpane'
import { getCommonContainerList } from '@/api/modules/common.js'
  export default {
    components: {
      SplitPane
    },
    data() {
      return {
        tabPosition: 'left',
        tabList: [],
        iconList: this.$store.getters.eleIcon(60)
      }
    },
    mounted() {
      getCommonContainerList().then(res => {
        this.tabList = res.data
      })
    },
    methods: {
      resize() {

      }
    }
  }
</script>
<style lang='scss' scoped>
.split-container {
  position: relative;
  height: calc(100vh - 120px);
  border: #d1d1d1 1px solid;
}

.split-item {
  padding: 20px;
}


</style>
