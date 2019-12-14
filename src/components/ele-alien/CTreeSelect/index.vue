<!--
 * @Description: 树形选择器
 * @Author: Cary
 * @Date: 2019-08-27 08:59:33
 -->
<template>
  <el-select
    ref="myElSelect"
    v-model="selectval"
    :clearable="clearable"
    :filterable="filterable && !multiple"
    :placeholder="placeholder"
    :multiple="multiple"
    :collapse-tags="collapseTags"
    :filter-method="handleSelectFilterMethod"
    @remove-tag="handleMultipleRemoveTag"
    @clear="clearHandle">
    <el-option
      v-show="false"
      value="_value-c-tree-select"
      label="label-c-tree-select" />
    <template v-if="multiple">
      <template v-for="item in tempOption">
        <el-option
          v-show="false"
          :key="item[props.value]"
          :value="item[props.value]"
          :label="item[props.label]"/>
      </template>
    </template>
    <el-scrollbar
      ref="scrollbar"
      tag="div"
      :noresize="false">
      <el-tree
        ref="selectTree"
        :accordion="false"
        :data="options"
        :props="props"
        :node-key="props.value"
        :filter-node-method="filterNode"
        :default-expanded-keys="defaultExpandedKey"
        :expand-on-click-node="false">
        <div slot-scope="{ node, data }" class="custom-tree-node">
          <div
            class="el-tree-node__label"
            :class="{ 'el-tag': node['isActive'], 'isDisabled': node['disabled'] }"
            @click="handleTreeItemClick(node, data)">
            {{ node.label }}
          </div>
        </div>
      </el-tree>
    </el-scrollbar>
  </el-select>
</template>

<script>

const isString = val => Object.prototype.toString.call(val) === '[object String]'
const isArray = val => Object.prototype.toString.call(val) === '[object Array]'

export default {
  name: 'CTreeSelect',
  props: {
    value: {
      type: [Array, String],
      default: ''
    },

    props: {
      type: Object,
      default: () => {
        return {
          value: 'id',
          label: 'title',
          children: 'children'
        }
      }
    },

    placeholder: {
      type: String,
      default: '请选择'
    },

    options: {
      type: Array,
      default: () => []
    },

    clearable: {
      type: Boolean,
      default: true
    },

    filterable: {
      type: Boolean,
      default: false
    },

    multiple: {
      type: Boolean,
      default: false
    },

    collapseTags: {
      type: Boolean,
      default: false
    }

  },
  data() {
    return {
      selectval: undefined,
      defaultExpandedKey: [],
      filterText: '',
      multipleOptionList: [],
      multipleOptionKeys: [],
      tempOption: [],
      myTree: null
    }
  },
  watch: {
    value(nval, oval) {
      this.selectval = nval
      this.initHandle()
    },
    filterText(val) {
      this.$refs.selectTree.filter(val)
    }
  },
  created() {
    let tarr = []
    const trreToFlat = arr => {
      arr.map(e => {
        let te = JSON.parse(JSON.stringify(e))
        e[this.props['children']] && trreToFlat(e[this.props['children']])
        delete te[this.props['children']]
        tarr.push(te)
      })
    }
    trreToFlat(this.options)
    this.tempOption = tarr
    this.selectval = this.value
  },
  mounted() {
    this.myTree = this.$refs.selectTree
    this.initHandle()
  },
  methods: {
    initHandle() {
      if (this.multiple) {
        if (!isArray(this.selectval)) {
          throw new Error('c-tree-select value In multiple must be a Array')
        }
        this.defaultExpandedKey = this.selectval
        isArray(this.selectval) && this.selectval.map(e => {
          this._isActiveNode(e, true)
        })
      } else {
        if (!isString(this.selectval)) {
          throw new Error('c-tree-select value must be a String')
        }
        this._isActiveNode(this.selectval, true)
        this.defaultExpandedKey = [this.selectval]
      }
    },

    clearHandle() {
      this.defaultExpandedKey = []
      isArray(this.tempOption) && this.tempOption.map(e => {
        this._isActiveNode(e, false)
      })
      this.$emit('clear')
    },

    filterNode(value, data) {
      if (!value) return true
      return data[this.props.label].indexOf(value) !== -1
    },

    handleSelectFilterMethod(val) {
      this.myTree.filter(val)
    },

    handleMultipleRemoveTag(val) {
      this._isActiveNode(val, false)
      this.$emit('remove-tag', val)
    },

    handleTreeItemClick(node, data) {
      if (node['disabled']) return
      if (this.multiple) {
        // todo 多选状态
        let _isactive = !node['isActive']
        this.$set(node, 'isActive', _isactive)
        if (!isArray(this.selectval)) {
          throw new Error('c-tree-select value In multiple must be a Array')
        }
        this.selectval = this.selectval.filter(e => node['key'] !== e)
        _isactive && this.selectval.push(node['key'])
      } else {
        // todo 单选状态
        if (this.selectval) {
          this._isActiveNode(this.selectval, false)
          this.selectval = node['key']
        }
        this.selectval = node['key']
        this.$set(node, 'isActive', true)
      }
      this.$emit('change', data)
      this.$emit('input', this.selectval)
      !this.multiple && this.$refs['myElSelect'].handleClose()
    },

    _isActiveNode(val, isbool) {
      let _node = this.myTree.getNode(val)
      _node && this.$set(_node, 'isActive', isbool)
    }
  }
}
</script>
<style lang="scss" scoped>
.custom-tree-node {
  width: 100%;
  margin-right: 10px;
  .el-tree-node__label {
    padding: 0;
  }
  .el-tag {
    display: block;
    height: auto;
    line-height: 1.3;
    font-size: 14px;
    padding: 0;
  }
  .isDisabled {
    color: #d5d9db;
    cursor: not-allowed;
  }
}
</style>
