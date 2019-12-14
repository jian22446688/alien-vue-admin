<!--
 * @Description: 文件及简介
 * @Author: Cary
 * @Date: 2019-12-06 17:59:22
 * @FilePath: f:\vue-project\alien-vue-admin\src\views\v-charts\v-line.vue
 -->
<template>
  <div class="app-container">
    <el-card class="cc-mar-b-10">
      使用图表需要安装: v-charts echarts 
      <el-link href="https://v-charts.js.org/#/" type="primary">v-charts 文档</el-link>
    </el-card>
    <el-row :gutter="10">
      <el-col :sm="24" :lg="12">
        <el-card class="cc-mar-b-10">
          <ve-funnel :data="chartData" :colors="vchartColor"/>
        </el-card>
      </el-col>
      <el-col :sm="24" :lg="12">
        <el-card class="cc-mar-b-10">
          <ve-funnel :data="chartData" :settings="chartSettings" :colors="vchartColor"/>
        </el-card>
      </el-col>
      <el-col :sm="24" :lg="12">
        <el-card class="cc-mar-b-10">
          <ve-funnel :data="chartData1" :settings="chartSequenceSettings" :colors="vchartColor"/>
        </el-card>
      </el-col>
      <el-col :sm="24" :lg="12">
        <el-card class="cc-mar-b-10">
          <ve-funnel :data="chartData" :settings="chartAscendingSettings" :colors="vchartColor"/>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { randomRange } from '@/utils'
export default {
  components: {},
  data() {
    this.vchartColor = ['#95a2ff', '#fa8080', '#ffc076', '#fae768', '#87e885', '#3cb9fc', '#73abf5', '#cb9bff',
      '#434348', '#90ed7d', '#f7a35c', '#8085e9​​​​​​​'
    ]
    this.chartSettings = {
      dimension: '状态1',
      metrics: '数值'
    }
    this.chartUseDefaultSettings = {
      useDefaultOrder: true,
      filterZero: true
    }
    this.chartAscendingSettings = {
      ascending: true
    }
    this.chartSequenceSettings = {
      useDefaultOrder: true,
      filterZero: true
    }

    return {
      chartData: {
        columns: ['状态', '状态1', '数值'],
        rows: [
          { '状态': '展示', '状态1': '展示1', '数值': 900 },
          { '状态': '访问', '状态1': '访问1', '数值': 600 },
          { '状态': '点击', '状态1': '点击1', '数值': 300 },
          { '状态': '订单', '状态1': '订单1', '数值': 100 }
        ]
      },
      chartData1: {
        columns: ['状态', '数值'],
        rows: [
          { '状态': '展示', '数值': 900 },
          { '状态': '访问', '数值': 100 },
          { '状态': '零', '数值': 0 },
          { '状态': '点击', '数值': 300 },
          { '状态': '订单', '数值': 200 }
        ]
      }
    }
  },
  computed: {},
  mounted() {},
  methods: {
    getChartData(num) {
      let rows = []
      let columns = ['日期', '访问用户', '下单用户', '下单率']
      for (let i = 0; i < num; i++) {
        rows.push({ 
          '日期': '1/' + (1 + i),
          '访问用户': randomRange(1000, 6000),
          '下单用户': randomRange(1000, 6000),
          '下单率': randomRange(1, 30)
        })
      }
      return { rows, columns }
    }
  }
}

</script>
<style lang='scss' scoped>

</style>
