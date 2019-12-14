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
          <ve-line :data="getChartData(7)" :colors="vchartColor"/>
        </el-card>
      </el-col>
      <el-col :sm="24" :lg="12">
        <el-card class="cc-mar-b-10">
          <ve-line :data="getChartData(5)" :settings="chartSettings"  :colors="vchartColor"/>
        </el-card>
      </el-col>
      <el-col :sm="24" :lg="12">
        <el-card class="cc-mar-b-10">
           <ve-line :data="getChartData(8)" :settings="chartAreaSettings" :colors="vchartColor"/>
        </el-card>
      </el-col>
      <el-col :sm="24" :lg="12">
        <el-card class="cc-mar-b-10">
           <ve-line :data="getChartData(6)" :extend="extend" :colors="vchartColor"/>
        </el-card>
      </el-col>
      <el-col :sm="24" :lg="12">
        <el-card class="cc-mar-b-10">
           <ve-line :data="getChartData(6)" :extend="extendShowdot"  :colors="vchartColor"/>
        </el-card>
      </el-col>
      <el-col :sm="24" :lg="12">
        <el-card class="cc-mar-b-10">
           <ve-line :data="getChartData(6)" :settings="chartHideXYSettings" :extend="extendHideXY"  :colors="vchartColor"/>
        </el-card>
      </el-col>
      <el-col :sm="24" :lg="12">
        <el-card class="cc-mar-b-10">
           <ve-scatter :data="getChartData(6)" :colors="vchartColor"/>
        </el-card>
      </el-col>
      <el-col :sm="24" :lg="12"></el-col>
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
    this.chartAreaSettings = {
      stack: { '用户': ['访问用户', '下单用户'] },
      area: true
    }
    this.extend = {
      series: {
        label: {
          normal: {
            show: true
          }
        }
      }
    }
    this.chartHideXYSettings = {
      area: true
    }
    this.extendHideXY = {
      // 隐藏底部
      xAxis: {
        show: false
      },
      // 隐藏左侧
      yAxis: {
        show: false
      },
      legend: {
        show: false
      },
      tooltip: {
        trigger: 'axis',
        // 隐藏鼠标滑过隐藏线
        axisPointer: {
          type: 'none',
        }
      },
      series: {
        // 隐藏线条
        lineStyle: {
          opacity: 0
        },
        // 取消每项的圆点
        itemStyle: {
          opacity: 1
        }
      },
      // 调整边距
      grid: {
        top: '-0px',
        left: '-66px',
        right: '-20px',
        bottom: '-18px',
      },
    }
    this.extendShowdot = {
      legend: {
        show: false
      },
      tooltip: {
        trigger: 'axis',
        // 隐藏鼠标滑过隐藏线
        axisPointer: {
          type: 'none',
        }
      },
      series: {
        // 隐藏线条
        lineStyle: {
          opacity: 0
        },
        // 取消每项的圆点
        itemStyle: {
          opacity: 1
        }
      },
      
    }
    return {
      chartData: {
        columns: ['日期', '访问用户', '下单用户', '下单率'],
        rows: []
      }
    }
  },
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
