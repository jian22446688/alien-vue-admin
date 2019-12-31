<template>
  <div class="app-container">
    <el-card>
      <h3>高级筛选 <el-button type="text" @click="searchExpanded = !searchExpanded">{{ getExpandText }}</el-button></h3>
      <el-form v-show="searchExpanded" ref="form" :model="form" label-width="100px">
        <el-form-item label="客户分类">
          <c-tag-select
            v-model="tags1"
            :list="tagList1"
            :is-expanded="false" />
        </el-form-item>
        <el-form-item label="客户类型">
          <c-tag-select
            v-model="tags2"
            :list="tagList2"
            :is-expanded="false" />
        </el-form-item>
        <el-form-item label="客户状态">
          <c-tag-select
            v-model="tags3"
            :list="tagList3"
            :is-expanded="false" />
        </el-form-item>
        <el-form-item label="客户星级">
          <c-tag-select
            v-model="tags4"
            :list="tagList4"
            :is-expanded="false" />
        </el-form-item>
        <el-form-item label="下次跟进时间">
          <c-tag-select
            v-model="tags5"
            :list="tagList5"
            :is-expanded="false" />
        </el-form-item>
        <el-form-item label="首字母筛选">
          <c-tag-select
            v-model="tags6"
            :list="tagList6"
            :is-expanded="false" />
        </el-form-item>
        <el-form-item label="所属行业">
          <c-tag-select
            v-model="tags7"
            :list="tagList7" />
        </el-form-item>
        <el-form-item label="归属人员">
          <el-select v-model="form.region" placeholder="请选择归属人员">
            <el-option label="区域一" value="shanghai"/>
            <el-option label="区域二" value="beijing"/>
          </el-select>
        </el-form-item>
        <el-form-item label="">
          <el-button type="text">查询</el-button>
          <el-button type="text">保存为快捷搜索</el-button>
          <el-button type="text">清除全部搜索条件</el-button>
        </el-form-item>
      </el-form>
    </el-card>
    <el-card class="cc-mar-t-10">
      <div class="c-table-control">
        <div>
          <el-button type="primary" icon="el-icon-plus" @click="handleControlAdd">添加</el-button>
          <el-button icon="el-icon-download">导入</el-button>
          <el-button icon="el-icon-upload2">导出</el-button>
          <el-button icon="el-icon-tickets">新建任务</el-button>
          <el-button icon="el-icon-refresh">转移客户</el-button>
          <el-button icon="el-icon-guide">转入公海</el-button>
          <el-button icon="el-icon-connection">合并客户</el-button>
          <el-button icon="el-icon-edit">批量编辑</el-button>
        </div>
        <div>
          <el-checkbox v-model="form.checked">跟进模式</el-checkbox>
          <el-tooltip content="当对列表客户写跟进时,会自动将刚刚写过跟进的客户排到最后。" placement="top">
            <i class="el-icon-question"/>
          </el-tooltip>
          <el-button icon="el-icon-d-caret">排序</el-button>
          <el-button icon="el-icon-date">列表</el-button>
        </div>
      </div>
      <div class="cc-mar-t-10">
        <c-super-table
          ref="myTable"
          :table-interface="tableInter"
          :options="optionData" />
      </div>
    </el-card>
  </div>
</template>
<script>
import { getCommonTableList } from '@/api/modules/common'
export default {
  components: {},
  data() {
    return {
      tableInter: getCommonTableList,
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: '',
        value1: null,
        checked: false
      },
      tags1: [],
      tags2: [],
      tags3: [],
      tags4: [],
      tags6: [],
      tags7: [],
      tagList1: ['我的客户', '下属客户', '重点客户', '我协作的', '下属协作的', '今日新增', '公海客户', '垃圾客户'],
      tagList2: ['企业客户', '个人客户'],
      tagList3: ['正在跟进', '正在试用', '准备购买', '准备付款', '已经购买', '暂时搁置'],
      tagList4: ['一星', '二星', '三星', '四星', '五星'],
      tagList5: ['今天', '明天', '本周', '下周', '本月', '下月'],
      tagList6: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'J', 'H', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '#'],
      tagList7: [],
      optionData: {
        tableOption: {
          height: '570px',
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
        ],
        pagination: {
          // isShow: false,
          background: true
        }
      },
      searchExpanded: true
    }
  },
  computed: {
    getExpandText() {
      return this.searchExpanded ? '展开' : '收起'
    }
  },
  mounted() {
    let arr = this.$store.getters.gameAvatarList(63)
    this.tagList7 = arr.map(e => e.name)
  },
  methods: {
    handleSearchExpanded() {
      this.searchExpanded = !this.searchExpanded
    },
    handleControlAdd() {
      this.$router.push({
        path: 'create-user'
      })
    }
  }
}
</script>
<style lang='scss' scoped>
.c-table-control {
  display: flex;
  justify-content: space-between;
}
</style>
