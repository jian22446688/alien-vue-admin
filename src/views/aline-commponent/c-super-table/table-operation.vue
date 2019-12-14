<!--
 * @Description: 超强表格-基础使用
 * @Author: Cary
 * @Date: 2019-12-14 09:30:13
 * @FilePath: f:\vue-project\alien-vue-admin\src\views\aline-commponent\c-super-table\table-base.vue
 -->
<template>
  <div class="app-container">
    <el-card class="cc-mar-b-10">
      <div>
        CSuperTable 封装了 table 和 pagination 组件
        <el-link
          type="primary"
          target="_blank"
          href="http://cccary.gitee.io/alien-docs/alien-commponent/CSuperTable.html">
          组件文档
        </el-link>
      </div>
    </el-card>
    <el-card class="cc-mar-b-10">
      <div slot="header">
        操作按钮
      </div>
      <div>
        <c-super-table
          ref="myTable"
          :table-interface="tableInter"
          :options="optionData"
          @delete="handleTable0Delete"
          @edit="handleTable0Edit" />
      </div>
    </el-card>
    <el-card class="cc-mar-b-10">
      <div slot="header">
        操作按钮-图标类型
      </div>
      <div>
        <c-super-table
          ref="myTable"
          :table-interface="tableInter"
          :options="optionData1"
          @delete="handleTable0Delete"
          @edit="handleTable0Edit" />
      </div>
    </el-card>
    <el-card class="cc-mar-b-10">
      <div slot="header">
        操作按钮-单个行内编辑
      </div>
      <div>
        <c-super-table
          ref="myTable"
          :table-interface="tableInter"
          :options="optionData2" />
      </div>
    </el-card>

  </div>
</template>

<script>
import { getCommonTableList } from '@/api/modules/common'
import { randomRange } from '@/utils/index'
export default {
  components: {},
  data() {
    return {
      icons: [
        'cutlery',
        'ketchup',
        'potholder',
        'pancakes',
        'saltpepper',
        'taco',
        'soup',
        'butterflyknife',
        'biblehand',
        'corpse',
        'hemp',
        'hourglass',
        'policebadge',
        'policegun',
        'bow',
        'calendar2',
        'gender'
      ],
      types: ['', 'success', 'info', 'warning', 'danger'],
      tableInter: getCommonTableList,
      optionData: {
        tableOption: {
          height: '300px',
        },
        tableHeader: [
          // { type: 'selection', width: '60' },
          { type: 'index', label: '序号', width: '80', sortable: true },
          { label: '日期', prop: 'date', width: '100' },
          { label: '姓名', prop: 'name', width: '130' },
          { label: '省份', prop: 'province', width: '150' },
          { label: '市区', prop: 'city', width: '150' },
          { label: '地址', prop: 'address' },
          { label: '邮编', prop: 'zip', width: '150' },
          {
            label: '操作',
            width: '120',
            control: {
              delete: { type: 'text', text: '删除' }, // icon-ashbin
              edit: { type: 'text', text: '编辑' },
            }
          }
        ],
        pagination: {
          background: true
        }
      },
      optionData1: {
        tableOption: {
          height: '300px',
        },
        tableHeader: [
          // { type: 'selection', width: '60' },
          { type: 'index', label: '序号', width: '80', sortable: true },
          { label: '日期', prop: 'date', width: '100' },
          { label: '姓名', prop: 'name', width: '130' },
          { label: '省份', prop: 'province', width: '150' },
          { label: '市区', prop: 'city', width: '150' },
          { label: '地址', prop: 'address' },
          { label: '邮编', prop: 'zip', width: '150' },
          {
            label: '操作',
            width: '120',
            control: {
              delete: { type: 'text', icon: 'ashbin', size: '23px' },
              edit: { type: 'text', icon: 'confirm', size: '23px' },
            }
          }
        ],
        pagination: {
          background: true
        }
      },
      optionData2: {
        tableOption: {
          height: '300px'
        },
        tableHeader: [
          // { type: 'selection', width: '60' },
          { type: 'index', label: '序号', width: '80', sortable: true },
          { label: '日期', prop: 'date', width: '100' },
          { type: 'edit',
            isEdit: 'editactive',
            label: '姓名',
            prop: 'name',
            width: '230',
            callback: this.handleTable3EditInput
          },
          { label: '省份', prop: 'province', width: '150' },
          { label: '市区', prop: 'city', width: '150' },
          { label: '地址', prop: 'address' },
          { type: 'edit',
            isEdit: 'zipactive',
            label: '邮编',
            prop: 'zip',
            width: '200',
            callback: this.handleTable3EditZip
          },
          {
            type: 'action',
            label: '操作',
            width: '100',
            buttons: [
              {
                tip: '设置名字',
                icon: 'set',
                size: '26px',
                callback: this.handleTable3Set
              },
              {
                tip: '设置编号',
                icon: 'calculator',
                size: '26px',
                callback: this.handleTable3zipSet
              }
            ]
          }
        ],
        pagination: {
          background: true
        }
      }
    }
  },
  computed: {},
  mounted() {},
  methods: {
    getTypes() {
      return this.types[randomRange(0, this.types.length - 1)]
    },

    getIcons() {
      return this.icons[randomRange(0, this.icons.length - 1)]
    },

    hanldeShowImage(row) {
      return [row.img]
    },

    handleTable0Delete(index, row) {
      this.$notify({
        title: '成功',
        message: row['name'] + ' 删除成功',
        type: 'success'
      })
    },

    handleTable3Set(row) {
      this.$set(row, 'editactive', true)
    },

    handleTable3zipSet(row) {
      this.$set(row, 'zipactive', true)
    },

    handleTable3EditInput(row) {
      this.$set(row, 'editactive_loding', true)
      setTimeout(() => {
        this.$notify({
          title: '成功',
          message: row['name'] + ' 修改成功',
          type: 'success'
        })
        this.$set(row, 'editactive_loding', false)
        row['editactive'] = false
      }, 500)
    },

    handleTable3EditZip(row) {
      this.$set(row, 'zipactive_loding', true)
      setTimeout(() => {
        this.$notify({
          title: '成功',
          message: row['zip'] + ' 修改成功',
          type: 'success'
        })
        this.$set(row, 'zipactive_loding', false)
        row['zipactive'] = false
      }, 500)
    },

    handleTable0Edit(index, row) {
      this.$notify({
        title: '成功',
        message: '编辑 ' + row['name'],
        type: 'success'
      })
    },

    handleTable3Link(index, row) {
      console.log(row)
      this.$notify({
        title: '成功',
        message: row['address'],
        type: 'success'
      })
    }
  }
}

</script>
<style lang='scss' scoped>

</style>
