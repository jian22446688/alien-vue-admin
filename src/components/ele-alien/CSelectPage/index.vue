<!--
 * @Description: 大型分页选择器
 * @Author: Cary
 * @Date: 2019-06-05 14:36:59
 -->
<template>
  <el-select
    ref="mySelect"
    v-model="filLabel"
    :filterable="option.filterable"
    :filter-method="filterMethod"
    :placeholder="option.palceholder"
    style="width: 100%"
    clearable
    @clear="handleClear"
    @visible-change="handleVisibleChange">
    <div slot="empty" class="table-box" style="max-width: 545px;">
      <c-super-table
        v-if="isVisible"
        ref="mySelectTable"
        :table-interface="tableInterface"
        :options="optionData"
        @current-change="handleCurrentChange"/>
    </div>
  </el-select>
</template>
<script>
export default {
  components: {},
  props: {
    value: {
      type: String,
      default: ''
    },
    option: {
      type: Object,
      default: null
    },
    tableInterface: {
      type: Function,
      default: null,
      required: true
    },
    tableHeader: {
      type: Array,
      required: false,
      default: null
    }
  },
  data() {
    return {
      filLabel: '',
      idField: '',
      isVisible: false,
      optionData: {
        tableOption: {
          height: 350,
          size: 'mini',
          highlightCurrentRow: true
        },
        tableHeader: this.tableHeader,
        pagination: {
          background: false,
          small: true,
          pagerCount: 5,
          layout: 'total, prev, pager, next, jumper',
          isRefreshButton: true
        }
      }
    }
  },
  methods: {
    init(obj) {
      let p = typeof obj === 'object' ? 1 : obj
      let params = { pageSize: this.pageSize, page: p || this.currentPage }
      if (typeof obj === 'object') params = Object.assign(params, obj)
      this.tableLoading = true
      this.tableInterface(params).then(res => {
        this.tableData = res.data.items
        this.currentPage = res.data.page
        this.pageTotal = res.data.total
        // 使用了 elementui 中的 el-scrollbar 刷新滚动条
        // this.$store.commit('SET_APP_SCROLLBAR')
        this.tableLoading = false
      }).catch(err => {
        console.log(err)
        this.tableLoading = false
      })
    },
    handleCurrentChange(row, cloumn) {
      // this.$refs.singleTable.setCurrentRow(row);
      if (!row) {
        this.filLabel = undefined
        return
      }
      this.filLabel = row[this.option.label]
      this.idField = row[this.option.idField]
      this.$emit('input', this.idField)
      this.$refs.mySelect.toggleMenu()
      if (this.option && this.option.callback) {
        this.option.callback(row, cloumn)
      }
    },
    handleVisibleChange(visible) {
      if (visible && this.isVisible === false) {
        this.isVisible = true
      }
    },
    filterMethod(val) {
      if (!this.option) return
      let name = this.option.filterName
      let query = {}
      query[name] = val
      this.$refs.mySelectTable.updateList(query)
    },
    handleClear() {
      this.$refs.mySelectTable.setCurrentRow()
    }
  }
}

</script>
<style lang='scss' scoped>
  .search {
    margin-bottom: 6px;
  }
  .table-box {
    padding: 10px;
    width: 480px;
    min-width: 365px;
    max-width: 645px;
    max-height: 500px;
  }
  .table-page {
    margin-top: 6px;
  }
</style>
