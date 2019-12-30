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
        基础功能
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
        分页功能
      </div>
      <div>
        <c-super-table
          ref="myTable"
          :table-interface="tableInter"
          :options="optionData1" />
      </div>
    </el-card>
    <el-card class="cc-mar-b-10">
      <div slot="header">
        图片和链接
      </div>
      <div>
        <c-super-table
          ref="myTable"
          :table-interface="tableInter"
          :options="optionData2" />
      </div>
    </el-card>
    <el-card class="cc-mar-b-10">
      <div slot="header">
        自定义列 type: 'slot', slot: 'tags'
      </div>
      <div>
        <c-super-table
          ref="myTable"
          :table-interface="tableInter"
          :options="optionData3">
          <el-table-column
            prop="tags"
            label="标签"
            width="120"
            slot="tags">
            <template slot-scope="{row}">
              <el-tag
                v-for="tag in row.tags"
                :type="getTypes()"
                :key="tag"
                class="cc-mar-l-4 cc-mar-b-4">{{ tag }}</el-tag>
            </template>
          </el-table-column>
          <el-table-column
            prop="tags"
            label="图标"
            width="120"
            slot="icon">
            <template slot-scope="{row}">
              <svg-icon :icon-class="getIcons()" class="cc-f-s20" />
            </template>
          </el-table-column>
        </c-super-table>
      </div>
    </el-card>
    <el-card class="cc-mar-b-10">
      <div slot="header">
        自定义头
      </div>
      <div>
        <c-super-table
          ref="myTable"
          :table-interface="tableInter"
          :options="optionData4">
          <el-table-column
            prop="address"
            label="地址"
            slot="headercustom"
            :render-header="getRenderHeader" />
           
          <el-table-column
            prop="city"
            label="市区"
            slot="headercustom1"
            :render-header="getRenderHeader1" />
        </c-super-table>
      </div>
    </el-card>
    <el-card class="cc-mar-b-10">
      <div slot="header">
        添加列和删除列
      </div>
      <div>
        <div>
          <el-button type="primary" @click="handleBtnTableAdd">添加</el-button>
          <el-button type="danger" @click="handleBtnTableDel">删除</el-button>
        </div>
        <c-super-table
          ref="myTable"
          :table-interface="tableInter"
          :options="optionData5" />
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
          { label: '邮编', prop: 'zip', width: '150' }
          // { type: 'image', label: '照片', prop: 'img_url', width: '60', callback: this.hanldeShowImage },
        ],
        pagination: {
          isShow: false,
          background: true
        }
      },
      optionData1: {
        tableOption: {
          height: '300px',
        },
        tableHeader: [
          { type: 'selection', width: '60' },
          { type: 'index', label: '序号', width: '80', sortable: true },
          { label: '日期', prop: 'date', width: '100' },
          { label: '姓名', prop: 'name', width: '130' },
          { label: '省份', prop: 'province', width: '150' },
          { label: '市区', prop: 'city', width: '150' },
          { label: '地址', prop: 'address' },
          { label: '邮编', prop: 'zip', width: '150' }
          // { type: 'image', label: '照片', prop: 'img_url', width: '60', callback: this.hanldeShowImage },
        ],
        pagination: {
          background: true
        }
      },
      optionData2: {
        tableOption: {
          height: '300px',
        },
        tableHeader: [
          { type: 'selection', width: '60' },
          { type: 'index', label: '序号', width: '80', sortable: true },
          { label: '日期', prop: 'date', width: '100', sortable: true },
          { label: '姓名', prop: 'name', width: '130' },
          { type: 'image', label: '照片', prop: 'img', width: '60', callback: this.hanldeShowImage },
          { label: '省份', prop: 'province', width: '150' },
          { label: '市区', prop: 'city', width: '150' },
          { type: 'link', label: '地址', prop: 'address', callback: this.handleTable3Link },
          { label: '邮编', prop: 'zip', width: '150' },
        ],
        pagination: {
          
        }
      },
      optionData3: {
        tableOption: {
          height: '300px',
        },
        tableHeader: [
          // { type: 'selection', width: '60' },
          { type: 'index', label: '序号', width: '80', sortable: true },
          { label: '日期', prop: 'date', width: '100', sortable: true },
          { label: '姓名', prop: 'name', width: '130' },
          { type: 'slot', slot: 'tags' },
          { label: '省份', prop: 'province', width: '150' },
          { label: '市区', prop: 'city', width: '150' },
          { label: '地址', prop: 'address', callback: this.handleTable3Link },
          { type: 'slot', slot: 'icon', label: '图标', prop: 'address' },
          { label: '邮编', prop: 'zip', width: '150' },
        ],
        pagination: {
          
        }
      },
      optionData4: {
        tableOption: {
          height: '300px',
        },
        tableHeader: [
          // { type: 'selection', width: '60' },
          { type: 'index', label: '序号', width: '80', sortable: true },
          { label: '日期', prop: 'date', width: '100', sortable: true },
          { label: '姓名', prop: 'name', width: '130' },
          { label: '省份', prop: 'province', width: '150' },
          { label: '市区', prop: 'city', width: '150' },
          { type: 'slot', slot: 'headercustom1', label: '市区', prop: 'city', width: '150' },
          // { label: '地址', prop: 'address', callback: this.handleTable3Link },
          { type: 'slot', slot: 'headercustom', label: '图标', prop: 'address' },
          { label: '邮编', prop: 'zip', width: '150' },
        ],
        pagination: {
          background: true
        }
      },
      optionData5: {
        tableOption: {
          height: '300px',
        },
        tableHeader: [
          // { type: 'selection', width: '60' },
          { type: 'index', label: '序号', width: '80', sortable: true },
          { label: '日期', prop: 'date', width: '100', sortable: true },
          { label: '姓名', prop: 'name', width: '130' },
          { label: '省份', prop: 'province', width: '150' },
          { label: '市区', prop: 'city', width: '150' },
          { label: '邮编', prop: 'zip', width: '150' }
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

    handleTable3Link(index, row) {
      console.log(row)
      this.$notify({
        title: '成功',
        message: row['address'],
        type: 'success'
      })
    },

    getRenderHeader(h,  { column, $index }) {
      return h('div', [
        h('span', {
          class: 'cc-mar-r-4'
        }, column['label']),
        h('el-tooltip', {
          props: {
            content: '提示:这个是家里的地址',
            placement: 'top'
          }
        }, [
          h('i', {
            class: 'el-icon-warning-outline'
          })
        ]),
      ])
    },

    getRenderHeader1(h,  { column, $index }) {
      return h('div', [
        h('span', {
          class: 'cc-mar-r-4'
        }, column['label']),
        h('el-tooltip', {
          props: {
            content: '提示:这个是市区的按钮',
            placement: 'top'
          }
        }, [
          h('el-button', {
            props: {
              size: 'mini',
              circle: true,
              type: 'success',
              icon: 'el-icon-warning-outline'
            }
          })
        ]),
      ])
    },

    handleBtnTableAdd() {
      this.optionData5.tableHeader.push({ label: '标题', prop: 'title', width: '150' })
    },

    handleBtnTableDel() {
      let arrlength = this.optionData5.tableHeader.length
      this.optionData5.tableHeader.splice(arrlength - 1, 1)
    }
  }
}

</script>
<style lang='scss' scoped>

</style>
