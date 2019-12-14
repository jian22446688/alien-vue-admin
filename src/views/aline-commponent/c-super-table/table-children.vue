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
        树形数据
      </div>
      <div>
        <c-super-table
          ref="myTable"
          :table-interface="tableInter"
          :options="optionData" />
      </div>
    </el-card>
    <el-card class="cc-mar-b-10">
      <div slot="header">
        展开行
      </div>
      <div>
        <c-super-table
          ref="myTable"
          :table-interface="tableInter"
          :options="optionData1">
          <el-table-column slot="expand" type="expand">
            <template slot-scope="{ row }">
              <el-row>
                <el-col :span="12">
                  <el-form label-position="left" label-width="100">
                    <el-form-item label="日期">
                      <span>{{ row.date }}</span>
                    </el-form-item>
                    <el-form-item label="姓名">
                      <span>{{ row.name }}</span>
                    </el-form-item>
                    <el-form-item label="省份">
                      <span>{{ row.province }}</span>
                    </el-form-item>
                  </el-form>
                </el-col>
                <el-col :span="12">
                  <el-form label-position="left" label-width="100">
                    <el-form-item label="市区">
                      <span>{{ row.city }}</span>
                    </el-form-item>
                    <el-form-item label="地址">
                      <span>{{ row.address }}</span>
                    </el-form-item>
                    <el-form-item label="邮编">
                      <span>{{ row.zip }}</span>
                    </el-form-item>
                  </el-form>
                </el-col>
              </el-row>
            </template>
          </el-table-column>
        </c-super-table>
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
          rowKey: 'gid',
          treeProps: { children: 'childrenlist' },
          height: '300px',
        },
        tableHeader: [
          // { type: 'selection', width: '60' },
          // { type: 'index', label: '序号', width: '80', sortable: true },
          { label: '日期', prop: 'date', width: '120' },
          { label: '姓名', prop: 'name', width: '130' },
          { label: '省份', prop: 'province', width: '150' },
          { label: '市区', prop: 'city', width: '150' },
          { label: '地址', prop: 'address' },
          { label: '邮编', prop: 'zip', width: '150' }
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
          // { type: 'index', label: '序号', width: '80', sortable: true },
          { type: 'slot', slot: 'expand', width: '60' },
          { label: '日期', prop: 'date', width: '120' },
          { label: '姓名', prop: 'name', width: '130' },
          { label: '省份', prop: 'province', width: '150' },
          { label: '市区', prop: 'city', width: '150' },
          { label: '地址', prop: 'address' },
          { label: '邮编', prop: 'zip', width: '150' }
        ],
        pagination: {
          background: true
        }
      },
      
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
    }

  }
}

</script>
<style lang='scss' scoped>

</style>
