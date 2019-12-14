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
      return (this.appHeight - 50) + 'px'
    }
  },
  watch: {
    appScroll(v, ov) {
      this.$nextTick(() => {
        this.$refs.scrollbar.update()
      })
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
      }
    }
  }
}

</script>
<style lang='scss' scoped>

</style>
