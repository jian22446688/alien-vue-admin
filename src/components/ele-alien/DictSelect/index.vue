<!--
 * @Description: 字典表组件
 * @Author: Cary
 * @Date: 2020-06-28 14:42:54
 * @FilePath: \alien-docsf:\vue-project\vue-admin-se\src\components\DictSelect\index.vue
-->
<template>
  <el-select v-model="selectVal" v-bind="$attrs" @change="handleSelectChange">
    <el-option v-for="item in list" :key="item.id" :label="item[propLabel]" :value="item[propValue]"/>
  </el-select>
</template>

<script>
export default {
  components: {},
  inheritAttrs: true,
  props: {
    value: {
      type: [String, Array],
      required: true
    },
    codeType: {
      type: String,
      default: ''
    },
    propLabel: {
      type: String,
      default: 'text'
    },
    propValue: {
      type: String,
      default: 'id'
    }
  },
  data() {
    return {
      selectVal: null,
      list: []
    }
  },
  computed: {},
  watch: {
    selectVal(val) {
      this.$emit('input', val)
    }
  },
  created() {
    let { multiple } = this.$attrs
    if (multiple && !Array.isArray(this.value)) {
      this.$emit('input', [])
    }
    if (!multiple && Array.isArray(this.value)) {
      this.$emit('input', '')
    }
    let getCode = this.$store.getters.getallCodeTable
    this.list = getCode(this.codeType)
    this.selectVal = this.value
  },
  mounted() {},
  methods: {
    handleSelectChange(val) {
      this.$emit('change', val)
    }
  }
}
</script>

<style lang='scss' scoped>
</style>
