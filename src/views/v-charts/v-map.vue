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
          <ve-map :data="chartData" :colors="vchartColor"/>
        </el-card>
      </el-col>
      <el-col :sm="24" :lg="12">
        <el-card class="cc-mar-b-10">
          <ve-map :data="chartData1" :settings="chartPositionSettings" :colors="vchartColor"/>
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
    this.chartPositionSettings = {
      position: 'province/beijing',
      dimension: '位置',
      metrics: ['人口', '面积'],
      dataType: {
        '面积': 'KMB'
      }
    }
    
    return {
      chartData: {
        columns: ['位置', '税收', '人口', '面积'],
        rows: [
          { '位置': '吉林', '税收': 123, '人口': 123, '面积': 92134 },
          { '位置': '北京', '税收': 1223, '人口': 2123, '面积': 29234 },
          { '位置': '上海', '税收': 2123, '人口': 1243, '面积': 94234 },
          { '位置': '浙江', '税收': 4123, '人口': 5123, '面积': 29234 }
        ]
      },
      chartData1: {
        columns: ['位置', '人口'],
        rows: [
          { '位置': '延庆区', '人口': 123 },
          { '位置': '密云区', '人口': 1223 },
          { '位置': '平谷区', '人口': 2123 },
          { '位置': '海淀区', '人口': 4123 }
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
