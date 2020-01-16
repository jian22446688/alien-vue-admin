<template>
  <div>
    <h3>测试组件</h3>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {

    }
  },
  computed: {},
  mounted() {
    console.log('ddddd')
  },
  methods: {},
  destroyed() {
    console.log('destroyed')
    this.$el.parentNode.removeChild(this.$el)
  }
}
</script>
<style lang='scss' scoped>

</style>
