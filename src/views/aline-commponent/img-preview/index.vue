<!--
 * @Description: 文件及简介
 * @Author: Cary
 * @Date: 2019-12-12 15:49:15
 * @FilePath: f:\vue-project\alien-vue-admin\src\views\aline-commponent\index.vue
 -->
<template>
  <div class="app-container">
    <el-card>
      <div class="c-img-body">
        <div class="cc-ta--c cc-pad-10" v-for="(item, i) in imgsArr" :key="item.id">
          <el-image
            style="width: 300px;height: 300px;"
            :src="item.img"
            fit="fit"
            :preview-src-list="previewSrcList"
            @click="handleImgClick(item, i)"/>
            <div class="cc-t-no-wrap">
              {{ item.title }}
            </div>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script>
import { getCommonImgList } from '@/api/modules/common.js'
export default {
  components: {},
  data() {
    return {
      imgsArr: [],
      group: 0, // request param
      previewSrcList: []
    }
  },
  computed: {},
  created() {
    this.getData()
  },
  mounted() {},
  methods: {
    getData() {
      getCommonImgList().then(res => {
        this.imgsArr = res.data
        this.previewSrcList = res.data.map(e => e.img)
      })
    },
    handleImgClick(item, index) {
      console.log('index', item)
    }
  }
}

</script>
<style lang='scss' scoped>
.c-img-body {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  
}
</style>
