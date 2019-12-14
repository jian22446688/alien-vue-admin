<!--
 * @Description: layout 组件
 * @Author: Cary
 * @Date: 2019-10-21 11:28:41
 -->
<template>
  <div :style="getPanelStyle(region)">
    <slot/>
  </div>
</template>

<script>
export default {
  name: 'CLayoutPanel',
  components: {},
  props: {
    region: {
      type: String,
      default: 'top',
      validator: function(value) {
        return ['top', 'bottom', 'left', 'right', 'center'].indexOf(value) !== -1
      }
    }
  },
  data() {
    return {}
  },
  computed: {},
  mounted() {
    let tagname = this.$slots && this.$slots.default
    console.log('tagname', tagname)
  },
  methods: {
    getPanelStyle(region) {
      let style = {
        border: '1px solid #ccc'
      }
      if (region === 'top') {
        style.width = '100%'
        style.height = '50px'
      }
      return style
    }
  }
}

</script>
<style lang='scss' scoped>

</style>
