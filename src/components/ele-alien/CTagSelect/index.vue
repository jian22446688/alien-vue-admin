<!--
 * @Description: CTagSelect
 * @Author: Cary
 * @Date: 2019-11-30 16:26:27 light plain dark medium / small / mini
 * @FilePath: \alien-docsf:\vue-project\vue-admin-se\src\components\CTagSelect\index.vue
 -->
<template>
  <div>
    <div v-if="isAllBr">
      <el-tag
        :type="type"
        :effect="isAllSelect ? 'dark' : 'plain'"
        class="c-tag-sapn"
        @click="handleAllSelectClick">全部</el-tag>
    </div>
    <div
      :class="{ 'c-tag-select-with-expanded': isExpanded, 'is-tag-select-expanded': expandedActive || !isExpanded }"
      class="c-tag-select">
      <el-tag
        v-if="!isAllBr"
        :type="type"
        :effect="isAllSelect ? 'dark' : 'plain'"
        class="c-tag-sapn"
        @click="handleAllSelectClick">全部</el-tag>
      <template v-for="item in node">
        <el-tag
          :key="item.cid"
          :type="type"
          :effect="item.isActive ? 'dark' : 'plain'"
          class="c-tag-sapn"
          @click="handleNodeClick(item)">
          {{ item.value || '空标签' }}
        </el-tag>
      </template>
      <el-button
        v-if="isExpanded"
        class="c-tag-expand-btn"
        type="text"
        @click="expandedActive = !expandedActive">
        {{ expandedActive ? '展开' : '收起' }}
        <i :class="{ 'el-icon-arrow-down': expandedActive, 'el-icon-arrow-up': !expandedActive}"/>
      </el-button>
    </div>
  </div>
</template>

<script>
const isArray = val => Object.prototype.toString.call(val) === '[object Array]'
export default {
  name: 'CTagSelect',
  components: {},
  props: {
    list: {
      type: Array,
      default: () => []
    },
    type: {
      type: String,
      default: ''
    },
    value: {
      type: Array,
      default: () => []
    },
    isAllBr: {
      type: Boolean,
      default: false
    },
    isExpanded: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      isSelectExpanded: true,
      expandedActive: false,
      isAllSelect: false,
      node: [],
      selectNode: []
    }
  },
  watch: {
    value(nval, oval) {
      this.initNode()
    },
    list() {
      this.initNode()
    }
  },
  mounted() {
    this.initNode()
  },
  methods: {
    initNode() {
      if (isArray(this.list)) {
        this.node = this.list.map((e, i) => {
          return {
            cid: 'c_' + i + '_' + e,
            value: e,
            isActive: undefined,
            isDisabled: undefined
          }
        })
      }
      if (isArray(this.value) && isArray(this.node)) {
        this.value.map(e => {
          this.node.map(n => {
            if (n.value === e) n.isActive = true
          })
        })
        if (this.value.length === this.node.length) {
          this.isAllSelect = true
        } else {
          this.isAllSelect = false
        }
      }
    },

    handleAllSelectClick() {
      if (!isArray(this.value) && !isArray(this.node)) return
      if (this.value.length === this.node.length) {
        this.node.map(e => {
          e.isActive = undefined
        })
      } else {
        this.node.map(e => {
          e.isActive = true
        })
      }
      this._nodeStateChange()
    },

    handleNodeClick(item) {
      item.isActive = !item.isActive
      this._nodeStateChange()
    },

    _nodeStateChange() {
      this.selectNode = this.node.filter(f => f.isActive).map(m => m.value)
      this.$emit('input', this.selectNode)
      if (this.selectNode.length === this.node.length) {
        this.isAllSelect = true
      } else {
        this.isAllSelect = false
      }
      this.$emit('change', this.selectNode)
    }
  }
}

</script>
<style lang='scss' scoped>
.c-tag-select {
  max-height: 37px;
  line-height: 35px;
  overflow: hidden;
  position: relative;
}
.is-tag-select-expanded {
  max-height: 230px;
}
.c-tag-select-with-expanded {
  padding-right: 46px;
}
.c-tag-expand-btn {
  position: absolute;
  top: 0;
  right: 0;
}
.c-tag-sapn {
  margin-right: 10px;
}
</style>
