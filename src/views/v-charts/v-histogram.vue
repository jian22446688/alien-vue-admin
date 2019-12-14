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
          <ve-histogram :data="getChartData(7)" :colors="vchartColor"/>
        </el-card>
      </el-col>
      <el-col :sm="24" :lg="12">
        <el-card class="cc-mar-b-10">
          <ve-histogram :data="getChartData(7)" :settings="chartSettings" :colors="vchartColor"/>
        </el-card>
      </el-col>
      <el-col :sm="24" :lg="12">
        <el-card class="cc-mar-b-10">
          <ve-histogram :data="getChartData(7)" :settings="chartShowLineSettings" :colors="vchartColor"/>
        </el-card>
      </el-col>
      <el-col :sm="24" :lg="12">
        <el-card class="cc-mar-b-10">
          <ve-histogram :data="getChartData(7)" :settings="chartStackSettings" :colors="vchartColor"/>
        </el-card>
      </el-col>
      <el-col :sm="24" :lg="12">
        <el-card class="cc-mar-b-10">
          <ve-histogram :data="getChartData(7)" :extend="chartShowNumtExtend" :colors="vchartColor"/>
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
      metrics: ['访问用户', '下单用户'],
      dimension: ['日期']
    }
    this.chartShowLineSettings = {
      showLine: ['下单用户']
    }
    this.chartStackSettings = {
      stack: { '用户': ['访问用户', '下单用户'] }
    }
    this.chartShowNumtExtend = {
      series: { label: { show: true, position: "top" } }
    }

    return {
      chartData: {
        columns: ['日期', '访问用户', '下单用户', '下单率'],
        rows: [
          { '日期': '1/1', '访问用户': 1393, '下单用户': 1093, '下单率': 0.32 },
          { '日期': '1/2', '访问用户': 3530, '下单用户': 3230, '下单率': 0.26 },
          { '日期': '1/3', '访问用户': 2923, '下单用户': 2623, '下单率': 0.76 },
          { '日期': '1/4', '访问用户': 1723, '下单用户': 1423, '下单率': 0.49 },
          { '日期': '1/5', '访问用户': 3792, '下单用户': 3492, '下单率': 0.323 },
          { '日期': '1/6', '访问用户': 4593, '下单用户': 4293, '下单率': 0.78 }
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
