<template>
  <div :style="lineStyle" class="c-line"/>
</template>

<script>
export default {
  components: {},
  props: {
    lineStyle: {
      type: Object,
      default: null
    }
  },
  data() {
    return {
    }
  },
  computed: {},
  mounted() {},
  methods: {}
}

</script>
<style lang='scss' scoped>
.c-line {
    clear: both;
    width: 100%;
    min-width: 100%;
    height: 1px;
    box-sizing: border-box;
    margin: 24px 0;
    padding: 0;
    font-size: 14px;
    font-variant: tabular-nums;
    line-height: 1.5;
    font-feature-settings: "tnum";
    background: #e8e8e8;
}
</style>
