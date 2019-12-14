<!--
 * @Description: 瀑布流
 * @Author: Cary
 * @Date: 2019-12-12 15:49:15
 * @FilePath: f:\vue-project\alien-vue-admin\src\views\aline-commponent\index.vue
 -->
<template>
  <div class="app-container">
    <div class="c-water-body">
      <waterfall-easy
        :max-cols="4"
        :imgs-arr="imgsArr"
        @click="clickFn"
        @scrollReachBottom="getData"/>
    </div>
  </div>
</template>

<script>
import waterfallEasy from 'vue-waterfall-easy'
import { getCommonWterImgList } from '@/api/modules/common.js'
export default {
  components: {
    waterfallEasy
  },
  data() {
    return {
      imgsArr: [],
      group: 0 // request param
    }
  },
  computed: {},
  created() {
    this.getData()
  },
  mounted() {},
  methods: {
    getData() {
      getCommonWterImgList().then(res => {
        this.imgsArr = this.imgsArr.concat(res.data)
      })
    },
    clickFn(event, { index, value }) {
      // 阻止a标签跳转
      event.preventDefault()
      // 只有当点击到图片时才进行操作
      if (event.target.tagName.toLowerCase() === 'img') {
        console.log('img clicked', index, value)
      }
    }
  }
}

</script>
<style lang='scss' scoped>
.c-water-body {
  width: 100%;
  height: 780px;
}
</style>
