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
          <ve-tree :data="chartData" />
        </el-card>
      </el-col>
      <el-col :sm="24" :lg="12">
        <el-card class="cc-mar-b-10">
          <ve-tree :data="chartData1" :settings="chartSettings" />
        </el-card>
      </el-col>
      <el-col :sm="24" :lg="12">
        <el-card class="cc-mar-b-10">
          <ve-tree :data="chartData" :settings="chartLayoutSettings" />
        </el-card>
      </el-col>
      <el-col :sm="24" :lg="12">
        <el-card class="cc-mar-b-10">
          <ve-tree :data="chartData" :settings="chartVerticalSettings" />
        </el-card>
      </el-col>

    </el-row>
  </div>
</template>

<script>
import { randomRange } from '@/utils'
const treeData = {
  name: 'f',
  value: 1,
  link: 'https://ele.me',
  children: [
    {
      name: 'a',
      value: 1,
      link: 'https://ele.me',
      children: [
        {
          name: 'a-a',
          link: 'https://ele.me',
          value: 2
        },
        {
          name: 'a-b',
          link: 'https://ele.me',
          value: 2
        }
      ]
    },
    {
      name: 'b',
      value: 1,
      link: 'https://ele.me',
      children: [
        {
          name: 'b-a',
          link: 'https://ele.me',
          value: 2
        },
        {
          name: 'b-b',
          link: 'https://ele.me',
          value: 2
        }
      ]
    },
    {
      name: 'c',
      value: 3,
      link: 'https://ele.me',
      children: [
        {
          name: 'c-a',
          link: 'https://ele.me',
          value: 4
        },
        {
          name: 'c-b',
          link: 'https://ele.me',
          value: 2
        }
      ]
    },
    {
      name: 'd',
      value: 3,
      link: 'https://ele.me',
      children: [
        {
          name: 'd-a',
          link: 'https://ele.me',
          value: 4
        },
        {
          name: 'd-b',
          link: 'https://ele.me',
          value: 2
        }
      ]
    }
  ]
}
export default {
  components: {},
  data() {
    this.chartLayoutSettings = {
      seriesMap: {
        tree1: {
          layout: 'radial'
        }
      }
    }
    this.chartVerticalSettings = {
      seriesMap: {
        tree1: {
          orient: 'vertical'
        }
      }
    }
    this.chartSettings = {
      seriesMap: {
        tree1: {
          top: '5%',
          left: '7%',
          bottom: '2%',
          right: '60%'
        },
        tree2: {
          top: '20%',
          left: '60%',
          bottom: '22%',
          right: '18%'
        }
      }
    }
    return {
      chartData: {
        columns: ['name', 'value'],
        rows: [
          {
            name: 'tree1',
            value: [treeData]
          }
        ]
      },
      chartData1: {
        columns: ['name', 'value'],
        rows: [
          {
            name: 'tree1',
            value: [treeData]
          },
          {
            name: 'tree2',
            value: [treeData]
          }
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
