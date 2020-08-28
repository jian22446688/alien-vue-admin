<!--
 * @Description: 文件及简介
 * @Author: Cary
 * @Date: 2019-06-04 13:45:07
 * @FilePath: \alien-docsf:\vue-project\vue-admin-se\src\components\CCScrollbar\index.vue
 -->
<template>
  <el-scrollbar
    ref="scrollbar"
    :tag="tag"
    :view-style="{ height: getAppHeight }"
    :noresize="noresize">
    <slot/>
  </el-scrollbar>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  components: {},
  props: {
    tag: {
      type: String,
      default: 'div'
    },
    noresize: {
      type: Boolean,
      default: false
    },
    height: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      appHeight: 0
    }
  },
  computed: {
    ...mapGetters([
      'appScroll'
    ]),
    getAppHeight() {
      return (this.appHeight - 50 + this.height) + 'px'
    }
  },
  watch: {
    appScroll(v, ov) {
      this.$nextTick(this.update)
    }
  },
  mounted() {
    this.appMainResize()
  },
  methods: {
    appMainResize() {
      this.appHeight = document.body.clientHeight
      window.onresize = () => {
        this.appHeight = document.body.clientHeight
        this.update()
      }
    },

    getHeight() {
      return (this.appHeight - 50 + this.height)
    },

    update() {
      this.$nextTick(() => {
        this.$refs && this.$refs.scrollbar && this.$refs.scrollbar.update && this.$refs.scrollbar.update()
      })
    }
  }
}

</script>
<style lang='scss' scoped>

</style>
