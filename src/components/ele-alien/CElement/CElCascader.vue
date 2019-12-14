<!--
 * @Description: 可以单选某项
 * @Author: Cary
 * @Date: 2019-09-20 16:01:45
 -->
<template>
  <el-cascader
    ref="myCascader"
    :options="options"
    :value="value"
    clearable
    filterable
    collapse-tags
    :props="getProps"
    @change="handleChange"
    @expand-change="handleExpandChange"
    @visible-change="handleVisibleChange">
    <template v-if="!getProps.multiple" slot-scope="{ node, data }">
      <div @click.stop="handleItemChange(node, data)">{{ data[getProps.label] }}</div>
    </template>
  </el-cascader>
</template>

<script>
export default {
  name: 'CelCascader',
  components: {},
  props: {
    value: {
      type: [String, Array],
      default: ''
    },
    options: {
      type: Array,
      default: () => []
    },
    props: {
      type: Object,
      default: () => {
        return {
          checkStrictly: true,
          expandTrigger: 'hover'
        }
      }
    }
  },
  data() {
    return {}
  },
  computed: {
    getProps() {
      let pr = this.props
      pr['checkStrictly'] = !pr.multiple
      return pr
    }
  },
  watch: {
    value(val) {
      this.$emit('change', val)
    }
  },
  mounted() {},
  methods: {
    handleExpandChange(e) {
      this.hideRadio()
      this.$emit('expand-change', e)
    },
    handleVisibleChange(isshow) {
      isshow && this.hideRadio()
      this.$emit('visible-change', isshow)
    },
    handleItemChange(node, data) {
      const { path } = node
      this.myCascaderValue = path
      this.$emit('input', path)
      this.$nextTick(() => { this.$refs.myCascader.toggleDropDownVisible(false) })
    },
    handleChange(e) {
      if (e.length > 0) {
        this.$emit('input', e)
      } else {
        this.$nextTick(() => { this.$refs.myCascader.toggleDropDownVisible(false) })
        this.$emit('input', [])
      }
    },
    hideRadio() {
      const { panel } = this.$refs.myCascader
      let radios = panel.$el.getElementsByClassName('el-radio')
      this.$nextTick(() => {
        for (let i = 0; i < radios.length; i++) {
          radios[i].style.display = 'none'
        }
      })
    }
  }
}

</script>
<style lang='scss'>
</style>
