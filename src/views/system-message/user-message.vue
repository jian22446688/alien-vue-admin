<!--
 * @Description: 用户管理
 * @Author: Cary
 * @Date: 2020-01-15 09:24:59
 * @FilePath: \alien-docsf:\vue-project\alien-vue-admin\src\views\system-message\user-message.vue
 -->
<template>
  <div class='app-container'>
    <el-card>
      <el-row>
        <el-col :span='4'>
          <el-tree
            :data='data'
            show-checkbox
            node-key='id'
            default-expand-all
            :default-expanded-keys='[2, 3]'
            :default-checked-keys='[5]'
            :props='defaultProps'/>
        </el-col>
        <el-col :span='20'>
          <div style='width: 100%' class='cc-mar-b-10'>
            <el-input v-model='form.name' style='width: 200px' placeholder='账号/姓名/手机号' />
            <el-date-picker
              type='date'
              placeholder='选择日期'
              v-model='form.date1'
              style='width: 200px'
            />
            <el-button type='primary' icon='el-icon-search' @click='onSubmit'>搜索</el-button>
            <el-button type='primary' icon='el-icon-plus' @click='onSubmit'>添加</el-button>
            <el-button icon='el-icon-download' @click='onSubmit'>导出</el-button>
          </div>
          <c-super-table ref='myTable' :table-interface='tableInter' :options='optionData'>
            <el-table-column width='60' slot='temp_stauts' label='状态'>
              <template slot-scope='{ row }' >
                <el-switch
                  v-model='row.stauts'
                  active-color='#13ce66'
                  inactive-color='#ff4949'>
                </el-switch>
              </template>
            </el-table-column>
            <el-table-column width='380' slot='temp_action' label='状态'>
              <template slot-scope='{ row }' >
                <el-button size='mini'>修改</el-button>
                <el-button type='danger' size='mini'>删除</el-button>
                <el-button type='primary' size='mini'>分配角色</el-button>
                <el-button type='warning' size='mini'>重置密码</el-button>
              </template>
            </el-table-column>
          </c-super-table>
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>

<script>
import { getUserMessageList } from '@/api/user'
export default {
  components: {},
  data() {
    return {
      tableInter: getUserMessageList,
      optionData: {
        tableOption: {
          height: '720',
          bottomOffset: 34
        },
        tableHeader: [
          { type: 'selection', width: '60' },
          { type: 'index', label: '序号', width: '50', sortable: true },
          { label: '账号', prop: 'account' },
          { label: '名称', prop: 'name'},
          { label: '部门', prop: 'department' },
          { label: '职位', prop: 'position' },
          { label: '电话', prop: 'phone' },
          { label: '创建时间', prop: 'created' },
          { type: 'slot', label: '状态', slot: 'temp_stauts', prop: 'stauts', width: '150' },
          { type: 'slot', label: '状态', slot: 'temp_action', prop: 'stauts', width: '150' }

        ],
        pagination: {
          isShow: false,
          background: true
        }
      },
      data: [
        {
          checked: true,
          children: [
            {
              checked: '',
              children: [
                {
                  checked: '',
                  children: [],
                  disabled: '',
                  id: 25,
                  nodeId: '25',
                  nodeParentId: '24',
                  pid: 24,
                  spread: false,
                  title: '开发部'
                },
                {
                  checked: '',
                  children: [],
                  disabled: '',
                  id: 26,
                  nodeId: '26',
                  nodeParentId: '24',
                  pid: 24,
                  spread: false,
                  title: '运营部'
                },
                {
                  checked: '',
                  children: [],
                  disabled: '',
                  id: 27,
                  nodeId: '27',
                  nodeParentId: '24',
                  pid: 24,
                  spread: false,
                  title: '战略部'
                }
              ],
              disabled: '',
              id: 24,
              nodeId: '24',
              nodeParentId: '0',
              pid: 0,
              spread: true,
              title: '总公司'
            }
          ],
          disabled: '',
          id: 0,
          nodeId: '0',
          nodeParentId: '-1',
          pid: -1,
          spread: true,
          title: '顶级'
        }
      ],

      defaultProps: {
        children: 'children',
        label: 'title'
      },
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      }
    }
  },
  computed: {},
  mounted() {},
  methods: {
    onSubmit() {
      console.log('submit!')
    }
  }
}
</script>

<style lang='scss' scoped>
.c-left {
  flex: 0 0 220px
}
</style>
