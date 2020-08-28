<!--
 * @Description: SuperTable
 * @Author: Cary
 * @Date: 2019-06-05 14:36:59
 -->
<template>
  <div class="super-table">
    <slot name="tableHeader"/>
    <el-table
      ref="csuptable"
      v-loading="tableLoading"
      :data="getTableList"
      v-bind="getOptionTable"
      @current-change="handleTableCurrentChange"
      @selection-change="handleSelectionChange"
      @expand-change="handleExpandChange">
      <template v-for="item in getOptionTableHeader">
        <el-table-column
          v-if="item.control"
          :key="item.hid"
          v-bind="item">
          <template slot-scope="scope">
            <el-button
              v-if="item.control.check"
              type="text"
              class="c-control-btn cc-margin-l-0"
              @click="handleCheck(scope.$index, scope.row)">
              {{ item.control.check.icon ? '' : item.control.check.text }}
              <svg-icon v-if="item.control.check.icon" :icon-class="item.control.check.icon"/>
            </el-button>
            <el-button
              v-if="item.control.edit"
              type="text"
              class="c-control-btn cc-margin-l-0"
              @click="handleEdit(scope.$index, scope.row)">
              {{ item.control.edit.icon ? '' : item.control.edit.text }}
              <svg-icon v-if="item.control.edit.icon" :icon-class="item.control.edit.icon"/>
            </el-button>
            <c-btn-tip
              v-if="item.control.delete"
              :type="item.control.delete.type"
              :title="item.control.delete.title"
              :icon-class="{ 'c-control-btn': true }"
              class="c-control-btn"
              @confirm="handleDelete(scope.$index, scope.row)">
              {{ item.control.delete.icon ? '' : item.control.delete.text }}
              <svg-icon v-if="item.control.delete.icon" :icon-class="item.control.delete.icon"/>
            </c-btn-tip>
          </template>
        </el-table-column>
        <el-table-column
          v-else-if="item.type === 'action'"
          :key="item.hid"
          v-bind="item">
          <template slot-scope="scope">
            <template v-for="(btn, ij) in item.buttons">
              <el-tooltip
                v-if="btn.tip"
                :key="ij"
                :effect="btn.effect || 'dark'"
                :content="btn.tip || '无提示'"
                :enterable="false"
                :placement="btn.placement || 'top'">
                <el-button
                  v-if="!scope.row['cc_' + btn.hidleKey]"
                  type="text"
                  style="padding: 0; margin-right: 6px"
                  class="c-control-btn cc-margin-l-0"
                  :disabled="scope.row['cc_' + btn.disableKey]"
                  @click="handleClick(scope.row, btn.callback)">
                  {{ btn.icon ? '' : btn.text }}
                  <svg-icon v-if="btn.icon" :icon-class="btn.icon"/>
                </el-button>
              </el-tooltip>
              <template v-else-if="btn.type === 'del'">
                <c-btn-tip
                  v-if="!scope.row['cc_' + btn.hidleKey]"
                  :key="ij"
                  type="text"
                  :title="btn.title || '无标题'"
                  :icon-class="{ 'c-control-btn': true }"
                  class="c-control-btn"
                  @confirm="handleClick(scope.row, btn.callback)">
                  {{ btn.icon ? '' : btn.text }}
                  <svg-icon v-if="btn.icon" :icon-class="btn.icon"/>
                </c-btn-tip>
              </template>
              <template v-else>
                <el-button
                  v-if="!scope.row['cc_' + btn.hidleKey]"
                  :key="ij"
                  :disabled="scope.row['cc_' + btn.disableKey]"
                  type="text"
                  style="padding: 0; margin-right: 6px"
                  class="c-control-btn cc-margin-l-0"
                  @click="handleClick(scope.row, btn.callback)">
                  {{ btn.icon ? '' : btn.text }}
                  <svg-icon v-if="btn.icon" :icon-class="btn.icon"/>
                </el-button>
              </template>
            </template>
          </template>
        </el-table-column>
        <el-table-column
          v-else-if="item.type === 'image'"
          :key="item.hid"
          v-bind="item">
          <template slot-scope="scope">
            <el-button
              type="text"
              class="c-control-btn cc-margin-l-0"
              icon="el-icon-picture"
              @click="handleClickImage(scope.row, item.prop, item.callback)"/>
          </template>
        </el-table-column>
        <el-table-column
          v-else-if="item.type === 'audio'"
          :key="item.hid"
          v-bind="item"
          width="200">
          <template slot-scope="scope">
            <!-- https://wdd.js.org/element-audio/static/falling-star.mp3 -->
            <vue-audio :src="handleAudioCallback(scope.row, item.prop, item.callback)"/>
          </template>
        </el-table-column>
        <el-table-column
          v-else-if="item.type === 'index'"
          :key="item.hid"
          v-bind="item">
          <template slot-scope="scope">
            {{ ((currentPage - 1) * pageSize + scope.$index + 1 ) }}
          </template>
        </el-table-column>
        <el-table-column
          v-else-if="item.type === 'link'"
          :key="item.hid"
          v-bind="item">
          <template slot-scope="scope">
            <template v-if="item.buttons">
              <el-link
                v-for="(btn, ij) in item.buttons"
                :key="ij"
                :type="btn.color"
                :disabled="scope.row['cc_' + btn.disabled]"
                :icon="btn.icon"
                :underline="btn.underline"
                @click.native="{{ btn.callback ? btn.callback(scope.$index, scope.row)
                  : handleLinkClick(scope.$index, scope.row)}}">{{ scope.row[btn.prop] }}</el-link>
            </template>
            <template v-else>
              <el-link
                :type="item.color || 'primary'"
                :disabled="scope.row['cc_' + item.disabled]"
                :icon="item.icon"
                :underline="item.underline"
                @click.native="{{ item.callback ? item.callback(scope.$index, scope.row)
                  : handleLinkClick(scope.$index, scope.row)}}">{{ scope.row[item.prop] }}</el-link>
            </template>
          </template>
        </el-table-column>
        <el-table-column
          v-else-if="item.type === 'tooltip'"
          :key="item.hid"
          v-bind="item">
          <template slot-scope="scope">
            <el-tooltip v-if="item.tipValue" :content="scope.row[item.tipValue]" effect="dark" placement="top">
              <span>{{ scope.row[item.prop] }}</span>
            </el-tooltip>
            <div v-else>
              {{ scope.row[item.prop] }}
            </div>
          </template>
        </el-table-column>
        <el-table-column
          v-else-if="item.type === 'filter'"
          :key="item.hid"
          v-bind="item">
          <template slot-scope="scope">
            <div>
              {{ handleFilter(scope.row, item.callback) }}
            </div>
          </template>
        </el-table-column>
        <el-table-column
          v-else-if="item.type === 'html'"
          :key="item.hid"
          v-bind="item">
          <template slot-scope="scope">
            <div v-html="handleHtmlCallback(scope.row, item.callback)"/>
          </template>
        </el-table-column>
        <el-table-column
          v-else-if="item.type === 'edit'"
          :key="item.hid"
          min-width="80px"
          v-bind="item">
          <template slot-scope="{row}">
            <template v-if="row[item.isEdit]">
              <div class="edit-control">
                <div>
                  <el-input v-model="row[item.prop]" />
                </div>
                <div class="edit-btns">
                  <el-button
                    style="padding: 5px; margin-top: 4px"
                    size="mini"
                    type="primary"
                    icon="el-icon-check"
                    :loading="row[item.isEdit + '_loding']"
                    circle
                    @click="handleClick(row, item.callback)"/>
                  <el-button
                    style="padding: 5px; margin-top: 4px; margin-left: 0"
                    size="mini"
                    icon="el-icon-close"
                    circle
                    @click="$set(row, item.isEdit, false)" />
                </div>
              </div>
            </template>
            <span v-else>{{ item.filter ? item.filter(row[item.prop]) : row[item.prop] }}</span>
          </template>
        </el-table-column>
        <template v-else-if="item.type === 'slot'">
          <slot :name="item.slot"/>
        </template>
        <el-table-column
          v-else
          :key="item.hid"
          v-bind="item"/>
      </template>
    </el-table>
    <div
      v-if="getOptionPagination.isShow"
      class="pagination clearfix">
      <el-pagination
        :small="getOptionPagination.small"
        :background="getOptionPagination.background"
        :page-count="getOptionPagination.pageCount"
        :pager-count="getOptionPagination.pagerCount"
        :layout="getOptionPagination.layout"
        :prev-text="getOptionPagination.prevText"
        :next-text="getOptionPagination.nextText"
        :disabled="getOptionPagination.disabled"
        :hide-on-single-page="getOptionPagination.hideSinglePage"
        :current-page="currentPage"
        :page-sizes="getOptionPagination.pageSizes"
        :page-size="pageSize"
        :total="pageTotal"
        @size-change="handlePageSize"
        @current-change="handleCurrentChange"/>
    </div>
    <div
      v-if="getOptionPagination.isRefreshButton"
      style="margin-right: 10px"
      class="pagination clearfix">
      <el-button
        type="text"
        icon="el-icon-refresh"
        class="refresh c-control-btn"
        @click="handleRefreshClick"/>
    </div>
    <!-- 图片查看器 -->
    <CPhotoPreview v-model="imagePreviewVisible" :imgs="imagePreviewValue"/>
  </div>
</template>

<script>
/* 表格加分页组件详情
  必须要的参数 *
  * tableInterface  返回定义的接口 Promise 对象
  * options         常用的设置 {} 对象
  * small: false,
    background: false,
    pageCount: 0,
    pagerCount: 7,
    layout: 'total, sizes, prev, pager, next, jumper',
    pageSizes: [20, 30, 50, 100],
    prevText: '',
    nextText: '',
    disabled: false,
    hideSinglePage: false
  Slot name="tableheader"
*/

/**
 * 如果target(也就是FirstOBJ[key])存在，
 * 且是对象的话再去调用deepObjectMerge，
 * 否则就是FirstOBJ[key]里面没这个对象，需要与SecondOBJ[key]合并
 */
function deepObjectMerge(FirstOBJ, SecondOBJ) { // 深度合并对象
  for (var key in SecondOBJ) {
    if (FirstOBJ) {
      FirstOBJ[key] = FirstOBJ[key] && FirstOBJ[key].toString() === '[object Object]'
        ? deepObjectMerge(FirstOBJ[key], SecondOBJ[key]) : FirstOBJ[key] = SecondOBJ[key]
    }
  }
  return FirstOBJ
}

// 用于生成uuid
function S4() {
  return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1)
}
function guid() {
  return (S4() + S4() + '-' + S4() + '-' + S4() + '-' + S4() + '-' + S4() + S4() + S4())
}
import { addResizeListener, removeResizeListener } from 'element-ui/src/utils/resize-event'
import { parseTime } from '@/utils/index.js'
export default {
  name: 'CSuperTable',
  components: {},
  props: {
    tableInterface: {
      type: Function,
      default: null
    },
    list: {
      type: Array,
      default: null
    },
    options: {
      type: Object,
      required: false,
      default: null
    }
  },
  data() {
    return {
      option: {},
      tableLoading: false,
      multipleSelection: [],
      result: null,
      tableData: [],
      queryData: {},
      // imgPreview
      imagePreviewVisible: false,
      imagePreviewValue: '',
      // pagination
      currentPage: 1,
      pageSize: 20,
      pageTotal: 0,
      multipeHeader: null,
      filterData: null
    }
  },
  computed: {
    getOptionTableHeader() {
      this.option.tableHeader.map((t, i) => {
        if (!t.hid) t.hid = 't_h_' + i
        if (!t['showOverflowTooltip'] || !t['show-overflow-tooltip']) {
          t['showOverflowTooltip'] = true
        }
      })
      return this.option.tableHeader
    },

    getOptionPagination() {
      return this.option.pagination
    },

    getOptionTable() {
      return this.option.tableOption
    },

    getTableList() {
      let result = this.result ? this.result.items : undefined
      if (result) {
        result.forEach(e => {
          if (e.id === undefined) e.id = guid()
        })
      } else {
        if (Array.isArray(this.result)) {
          result = this.result
          result.forEach(e => {
            if (e.id === undefined) e.id = guid()
          })
        }
      }
      return result
    }
  },
  created() {
    let defaultOption = {
      queryHeader: {
        isReset: true,
        input: [
          {
            type: 'input'
          }
        ]
      },
      exportHeader: null,
      tableOption: {
        isCancel: false,
        stripe: false,
        bottomOffset: null,
        border: false,
        size: null,
        fit: true,
        showHeader: true,
        highlightCurrentRow: false,
        rowKey: 'id',
        emptyText: '暂无数据'
      },
      tableHeader: [
        {
          type: 'index',
          label: '#',
          prop: 'index',
          width: '60',
          sortable: false,
          align: 'left'
        },
        {
          type: null,
          label: '日期',
          prop: 'date',
          width: '180',
          sortable: true,
          align: 'left'
        }
      ],
      pagination: {
        isShow: true,
        small: false,
        background: false,
        pageCount: 0,
        pagerCount: 7,
        layout: 'total, sizes, prev, pager, next, jumper',
        pageSizes: [20, 30, 50, 100],
        prevText: '',
        nextText: '',
        disabled: false,
        hideSinglePage: false,
        isRefreshButton: false
      }
    }

    this.option = deepObjectMerge(defaultOption, this.options)
    if (!this.getOptionTable.isCancel && !this.list) {
      this.$nextTick(() => { this.init(1) })
    }
    if (this.list) {
      this.$nextTick(() => {
        this.$set(this.option.pagination, 'isShow', false)
        if (this.list) {
          this.result = this.preFilterData(this.list)
        }
      })
    }
  },
  mounted() {
    let myTab = this.$refs['csuptable']
    let el = myTab.$el
    // const { componentInstance: $table } = myTab.$vnode
    this._resizeListener = () => {
      this._doResize(el, myTab.$vnode)
    }
    this.$nextTick(() => {
      this._doResize(el, myTab.$vnode)
    })
    addResizeListener(document.body, this._resizeListener)
  },
  destroyed() {
    removeResizeListener(document.body, this._resizeListener)
  },
  methods: {
    init(obj) {
      let p = typeof obj === 'object' ? 1 : obj
      let params = { pageSize: this.pageSize, page: p || this.currentPage }
      if (typeof obj === 'object') params = deepObjectMerge(params, obj)
      this.queryData = Object.assign(this.queryData, params)
      this.tableLoading = true
      if (!this.tableInterface) return
      this.tableInterface(this.queryData).then(res => {
        this.result = this.preFilterData(res.data)
        if (this.result.page) {
          this.currentPage = this.result.page
          this.pageTotal = this.result.total
        }
        // 使用了 elementui 中的 el-scrollbar 刷新滚动条
        this.tableLoading = false
        this.$emit('interface', this.result)
        this.$nextTick(() => {
          this.$refs['csuptable'] && this.$refs['csuptable'].doLayout()
        })
        this.$store.commit('SET_APP_SCROLLBAR')
      }).catch(err => {
        console.error(err)
        this.tableLoading = false
      })
    },

    /** 所有的对外开放公共方法 **/
    /** **************************/
    /**
     * 更新数据以及条件查询 {}
     */
    updateList(obj = 1) {
      this.queryData = {}
      if (this.list) {
        if (Array.isArray(obj)) {
          this.$nextTick(() => {
            this.result = obj
          })
        }
      } else {
        this.init(obj)
      }
    },

    getDataList() {
      return this.result
    },

    setList(list) {
      if (!list || !Array.isArray(list)) return
      this.result = this.preFilterData(list)
    },

    getSelectionList() {
      return this.multipleSelection
    },

    getTableHeader() {
      if (this.option.exportHeader) return this.option.exportHeader
      return this.option.tableHeader
    },

    /**
     * 添加数据表头
     * this.$refs.myTable.addHeader({ label: '团队建设啊', prop: 'TDJS' })
     */
    addHeader(obj) {
      if (typeof obj !== 'object') throw new Error('super_table add header error')
      let headerArr = this.option['tableHeader']
      let isHeader = headerArr.find(e => e.prop === obj.prop || e.label === obj.label)
      if (isHeader) return
      let time = new Date()
      headerArr.splice(headerArr.length - 1, 0, Object.assign(obj, { hid: 't_h_' + time.getTime() }))
    },

    /**
     * 删除一列
     * this.$refs.myTable.delHeader('prop')
     */
    delHeader(obj) {
      if (typeof obj !== 'string') throw new Error('super_table del header error')
      let headerArr = this.option['tableHeader']
      if (Array.isArray(headerArr)) {
        let index = headerArr.findIndex(e => obj === e.name || obj === e.prop || obj === e.label)
        if (index !== -1) {
          headerArr.splice(index, 1)
        }
      } else {
        throw new Error('super_table del header error')
      }
    },

    /**
     * 网络请求数据过滤
     * param filterfun funciton
     */
    setFilterData(filterfun) {
      this.filterData = filterfun
    },

    // table methods
    // doLayout 此方法不用, 应该是 element-ui 的bug 数据多了滚动条不会更新
    // 每次更新数据的时候, 为了更新滚动条, 都执行了这个方法
    // doLayout() {
    //   this.$refs['csuptable'].doLayout()
    // },

    toggleRowSelection(row, selected) {
      this.$refs['csuptable'].toggleRowSelection(row, selected)
    },

    toggleAllSelection() {
      this.$refs['csuptable'].toggleAllSelection()
    },

    toggleRowExpansion(row, expanded) {
      this.$refs['csuptable'].toggleRowExpansion(row, expanded)
    },

    setCurrentRow(row) {
      this.$refs['csuptable'].setCurrentRow(row)
    },

    sort(prop, order) {
      this.$refs['csuptable'].sort(prop, order)
    },

    clearSort() {
      this.$refs['csuptable'].clearSort()
    },

    clearSelection() {
      this.$refs['csuptable'].clearSelection()
    },

    clearFilter(columnKey) {
      this.$refs['csuptable'].clearFilter(columnKey)
    },

    /** 过滤方法 ***/
    /** *******************/
    handleFilter(row, callback) {
      if (callback) return callback(row)
      return 'filter empty'
    },

    handleAudioCallback(row, prop, callback) {
      if (callback) return callback(row)
      return row[prop]
    },

    handleHtmlCallback(row, callback) {
      if (callback) return callback(row)
      return 'html empty'
    },

    /** 所有的事件方法 ***/
    /** *******************/
    handleSelectionChange(val) {
      this.multipleSelection = val
      this.$emit('selection', val)
    },

    handleExpandChange() {
      this.$emit('expand-change', ...arguments)
    },

    handleClick(e, call) {
      call && call(e)
    },

    handleDelete(index, row) {
      this.$emit('delete', index, row)
    },

    handleCheck(index, row) {
      this.$emit('check', index, row)
    },

    handleEdit(index, row) {
      this.$emit('edit', index, row)
    },

    handleClickImage(row, prop, callback) {
      if (callback) {
        this.imagePreviewVisible = true
        this.imagePreviewValue = callback(row)
        return
      }
      if (prop) {
        this.imagePreviewVisible = true
        this.imagePreviewValue = row[prop]
        return
      }
      console.error('images url empty')
    },

    handleTableCurrentChange(row, cloumn) {
      this.$emit('current-change', row, cloumn)
    },

    showImage(url = '') {
      this.imagePreviewVisible = true
      this.imagePreviewValue = url
    },

    handleLinkClick() {
      console.error('link callback empty')
    },

    handlePageSize(size) {
      this.currentPage = 1
      this.pageSize = size
      this.init(1)
    },

    handleCurrentChange(value) {
      this.currentPage = value
      this.init()
    },

    handleRefreshClick() {
      this.updateList()
    },

    preFilterData(data) {
      if (this.filterData) { return this.filterData(data) }
      return data
    },

    exportData() {
      if (this.multipeHeader) {
        this.exprotMultipeHeader(this.multipleSelection)
      } else {
        this.onExportExcel(this.multipleSelection)
      }
    },

    /**
     * 导出合计数据, 方法只是把 id 最后一个 序号改成 '合计'
     */
    exportExcel(list, issum) {
      if (list) {
        this.onExportExcel(list, issum)
      }
    },

    /**
     * 导出合计多级表头数据, 方法只是把 id 最后一个 序号改成 '合计'
     */
    exprotMultipeExcel(list, issum) {
      if (list) {
        this.exprotMultipeHeader(list, issum)
      }
    },

    exprotMultipe() {
      let params = { pageSize: 9999999, page: 1 }
      this.queryData = Object.assign(this.queryData, params)
      this.tableLoading = true
      this.tableInterface(this.queryData).then(res => {
        let result
        if (Array.isArray(res.data)) {
          result = res.data
        } else {
          result = res.data.items
        }
        result = this.preFilterData(result)
        if (this.multipeHeader) {
          this.exprotMultipeHeader(result)
        } else {
          this.onExportExcel(result)
        }
        this.tableLoading = false
      }).catch(err => {
        console.log(err)
        this.tableLoading = false
      })
    },

    onExportExcel(list, issum = false) {
      // TODO 导出数据
      if (list.length < 1) {
        this.$message({ type: 'warning', message: '请选择要导出的数据' })
        return
      }
      list = list.map((obj, i) => {
        obj.id = (i + 1) + ''
        if (issum && list.length - 1 === i) { obj.id = '合计' }
        return obj
      })
      this.tableLoading = true
      import('@/vendor/Export2Excel').then(excel => {
        let exportData = {}
        exportData.id = '序号'
        let header = this.getTableHeader()
        header.forEach(it => {
          if (!(it.type && it.type === 'image') && it.prop) {
            exportData[it.prop] = it.label
          }
        })
        const data = this.formatJson(Object.keys(exportData), list)
        excel.export_json_to_excel({
          header: Object.values(exportData),
          data,
          filename: 'excel-' + parseTime(new Date()),
          autoWidth: this.autoWidth,
          bookType: this.bookType
        })
        this.tableLoading = false
      }).catch(e => {
        console.error('export Excel', e)
        this.tableLoading = false
      })
    },

    /**
     * 设置多级表头的属性,
     * 先设置在导出
     * const multiHeader = [['序号', '区域', '区经姓名', '店组数量', '区域人数', '带看组数', '', '', '本日成交单量', '', '', '', '', '本日成交单量', '', '', '', '', '本月成交单量', '', '', '', '', '本月新增业务', '', '', '', '']]
     * const headersss = ['', '', '', '', '', '求购带看', '求组带看', '总计', '三方', '代办', '租赁', '新房', '总计', '三方', '代办', '租赁', '新房', '总计', '三方', '代办', '租赁', '新房', '总计', '三方', '代办', '租赁', '新房', '总计']
     * const filterVal = ['id', 'kname', 'ulevel', 'status', 'entertype', 'status', 'status', 'status', 'status', 'status', 'status', 'status', 'status', 'status', 'status', 'status', 'status', 'status', 'status', 'status', 'status', 'status', 'status', 'status', 'status', 'status', 'status', 'status']
     * const merges = ['A1:A2', 'B1:B2', 'C1:C2', 'D1:D2', 'E1:E2', 'F1:H1', 'I1:M1', 'N1:R1', 'S1:W1', 'X1:AB1']
     */
    setMultipeHeader(headerObj) {
      this.multipeHeader = headerObj
    },

    exprotMultipeHeader(list, issum = false) {
      // TODO 导出数据
      if (list.length < 1) {
        this.$message({ type: 'warning', message: '请选择要导出的数据' })
        return
      }
      if (!(this.multipeHeader &&
        this.multipeHeader.multiHeader &&
        this.multipeHeader.header &&
        this.multipeHeader.filter &&
        this.multipeHeader.merges)) {
        console.error('请设置多表头: setMultipeHeader')
        return
      }
      list = list.map((obj, i) => {
        obj.id = (i + 1) + ''
        if (issum && list.length - 1 === i) { obj.id = '合计' }
        return obj
      })
      this.tableLoading = true
      import('@/vendor/Export2Excel').then(excel => {
        let exportData = {}
        exportData.id = '序号'
        let multiHeader = this.multipeHeader.multiHeader
        let header = this.multipeHeader.header
        let filterVal = this.multipeHeader.filter
        let merges = this.multipeHeader.merges
        filterVal.unshift('id')
        let data = this.formatJson(filterVal, list)
        excel.export_json_to_excel({
          multiHeader,
          header,
          data,
          merges,
          filename: 'excel-' + parseTime(new Date()),
          autoWidth: this.autoWidth,
          bookType: this.bookType
        })
        this.tableLoading = false
      }).catch(e => {
        console.error('export Excel', e)
        this.tableLoading = false
      })
    },

    formatJson(filterVal, jsonData) {
      return jsonData.map(v => filterVal.map(j => {
        if (j === 'timestamp') {
          return parseTime(v[j])
        } else {
          return v[j]
        }
      }))
    },

    _doResize(el, vnode) {
      const { componentInstance: $table } = vnode
      const bottomOffset = this.option.tableOption.bottomOffset
      if (!$table.height || !$table || !bottomOffset) {
        // console.error(`el-$table must set the height. Such as height='100px'`)
        return
      }
      const height = window.innerHeight - el.getBoundingClientRect().top - bottomOffset
      $table.layout.setHeight(height)
      $table.doLayout()
    }
  }
}

</script>
<style lang='scss' scoped>
  .super-table {
    width: 100%;
    height: 100%;
  }
  .clearfix {
    &:after {
      visibility: hidden;
      display: block;
      font-size: 0;
      content: " ";
      clear: both;
      height: 0;
    }
  }
  .pagination {
    float: right;
    margin-bottom: 16px;
    margin-top: 20px;
  }
  .refresh {
    padding-top: 4px;
    padding-bottom: 2px;
  }
  .image-preview {
    position: relative;
    user-select: none;
    width: 960px;
    height: 560px;
    text-align: center;
    .img-defalut {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
    img {
      max-width: 100%;
      max-height: 100%;
    }
  }
  // .el-link {
  //   font-size: 12px;
  // }
  .edit-control {
    display: flex;
    flex-direction: row;
  }
  .edit-btns {
    margin-left: 4px;
    width: 90px
  }

</style>
