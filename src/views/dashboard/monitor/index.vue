<!--
 * @Description: 监控页面
 * @Author: Cary
 * @Date: 2019-12-06 11:03:11
 * @FilePath: f:\vue-project\alien-vue-admin\src\views\dashboard\monitor\index.vue
 -->
<template>
  <div class="app-container">
    <el-row :gutter="10" class="cc-mar-b-10">
      <el-col :xs="24" :sm="24" :lg="18">
        <el-card>
          <div slot="header">
            <span>活动实时交易情况</span>
          </div>
          <div>
            <el-row class="cc-mar-b-20">
              <el-col :span="6">
                <div class="cc-mar-t-10 c-text-subheading cc-f-s14">总销售额</div>
                <div class="cc-mar-t-10 cc-f-s24">126,560 <span class="cc-f-s16">元</span></div>
              </el-col>
              <el-col :span="6">
                <div class="cc-mar-t-10 c-text-subheading cc-f-s14">销售目标完成率</div>
                <div class="cc-mar-t-10 cc-f-s24">92%</div>
              </el-col>
              <el-col :span="6">
                <div class="cc-mar-t-10 c-text-subheading cc-f-s14">活动剩余时间</div>
                <div class="cc-mar-t-10 cc-f-s24">0</div>
              </el-col>
              <el-col :span="6">
                <div class="cc-mar-t-10 c-text-subheading cc-f-s14">每秒交易总额</div>
                <div class="cc-mar-t-10 cc-f-s24">126,560 <span class="cc-f-s16">元</span></div>
              </el-col>
            </el-row>
            <ve-scatter
              height="300px"
              :data="chartData"
              :colors="vchartColor"
              :settings="chartSettings"/>
          </div>
        </el-card>
      </el-col>
      <el-col :xs="12" :sm="24" :lg="6">
        <el-card>
          <div slot="header">
            <span>活动情况预测</span>
          </div>
          <div>
            <div class="cc-mar-t-10 c-text-subheading cc-f-s14">总销售额</div>
            <div class="cc-mar-t-10 cc-f-s24">126,560 <span class="cc-f-s16">元</span></div>
          </div>
          <div class="cc-mar-t-10">
            <ve-line
              height="48px"
              :data="chartLineData"
              :colors="vchartColor"
              :settings="chartLineSettings"
              :extend="chartOption"/>
          </div>
        </el-card>
        <el-card class="cc-mar-t-10">
          <div slot="header">
            <span>券核效率</span>
          </div>
          <div class="cc-ta--c cc-pad-t-12 cc-pad-b-12">
            <el-progress
              type="circle"
              :stroke-width="12"
              :percentage="56"/>
          </div>
        </el-card>
      </el-col>
    </el-row>
    <el-row :gutter="10">
      <el-col :xs="24" :sm="12" :lg="6">
        <el-card>
          <div slot="header" class="clearfix">
            <span>热门搜索</span>
          </div>
          <div>
            <ve-wordcloud
              height="222px"
              :data="chartWordcloudData"
              :settings="chartWordcloudSettings"/>
          </div>
        </el-card>
      </el-col>
      <el-col :xs="24" :sm="12" :lg="6">
        <el-card>
          <div slot="header" class="clearfix">
            <span>资源剩余</span>
          </div>
          <div style="position: relative">
            <ve-liquidfill
              height="222px"
              :colors="vchartColor"
              :settings="chartLiquidfillSettings"
              :data="chartLiquidfillData"/>
            <div class="c-liquidfill-title cc-f-s14">补贴资金剩余</div>
          </div>
        </el-card>
      </el-col>
      <el-col :xs="24" :sm="12" :lg="12">
        <el-card>
          <div slot="header" class="clearfix">
            <span>各品类占比</span>
          </div>
          <el-row :gutter="10">
            <el-col :span="8" class=" cc-mar-b-40">
              <div class="cc-ta--c">
                <div class="cc-mar-t-20 cc-mar-b-40">
                  招聘类
                </div>
                <el-progress type="circle" color="#ffc076" :width="100" :stroke-width="12" :percentage="25"/>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="cc-ta--c">
                <div class="cc-mar-t-20 cc-mar-b-40">
                  产品类
                </div>
                <el-progress type="circle" color="#fa8080" :width="100" :stroke-width="12" :percentage="25"/>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="cc-ta--c">
                <div class="cc-mar-t-20 cc-mar-b-40">
                  技术类
                </div>
                <el-progress type="circle" color="#95a2ff" :width="100" :stroke-width="12" :percentage="25"/>
              </div>
            </el-col>
          </el-row>
        </el-card>
      </el-col>
    </el-row>
    <div class="cc-h-20"/>
    <div class="cc-h-20"/>
    <div class="cc-h-20"/>
    <div class="cc-h-20"/>
    <div class="cc-h-20"/>
    <div class="cc-h-20"/>
    <div class="cc-h-20"/>
    <div class="cc-h-20"/>
    <div class="cc-h-20"/>
    <div class="cc-h-20"/>
    <div class="cc-h-20"/>
    <div class="cc-h-20"/>
  </div>
</template>

<script>
function getRows (){
  return [
    { 'word': 'visualMap', 'count': 22199 },
    { 'word': 'continuous', 'count': 10288 },
    { 'word': 'contoller', 'count': 620 },
    { 'word': 'series', 'count': 274470 },
    { 'word': 'gauge', 'count': 12311 },
    { 'word': 'detail', 'count': 1206 },
    { 'word': 'piecewise', 'count': 4885 },
    { 'word': 'textStyle', 'count': 32294 },
    { 'word': 'markPoint', 'count': 18574 },
    { 'word': 'pie', 'count': 38929 },
    { 'word': 'roseType', 'count': 969 },
    { 'word': 'label', 'count': 37517 },
    { 'word': 'emphasis', 'count': 12053 },
    { 'word': 'yAxis', 'count': 57299 },
    { 'word': 'name', 'count': 15418 },
    { 'word': 'type', 'count': 22905 },
    { 'word': 'gridIndex', 'count': 5146 },
    { 'word': 'normal', 'count': 49487 },
    { 'word': 'itemStyle', 'count': 33837 },
    { 'word': 'min', 'count': 4500 },
    { 'word': 'silent', 'count': 5744 },
    { 'word': 'animation', 'count': 4840 },
    { 'word': 'offsetCenter', 'count': 232 },
    { 'word': 'inverse', 'count': 3706 },
    { 'word': 'borderColor', 'count': 4812 },
    { 'word': 'markLine', 'count': 16578 },
    { 'word': 'line', 'count': 76970 },
    { 'word': 'radiusAxis', 'count': 6704 },
    { 'word': 'radar', 'count': 15964 },
    { 'word': 'data', 'count': 60679 },
    { 'word': 'dataZoom', 'count': 24347 },
    { 'word': 'tooltip', 'count': 43420 },
    { 'word': 'toolbox', 'count': 25222 },
    { 'word': 'geo', 'count': 16904 },
    { 'word': 'parallelAxis', 'count': 4029 }
  ]
}
export default {
  components: {},
  data() {
    this.chartLiquidfillSettings = {
      seriesMap: {
        '上海': {
          amplitude: '3%',
          radius: '200px',
          color: ['#1890ff', 'green', 'yellow'],
          backgroundStyle: {
            color: '#fff',
            opacity: 0,
            borderWidth: 4,
            borderColor: '#1890FF'
          },
          emphasis: {
            itemStyle: {
              opacity: 0.8
            }
          },
          outline: {
            borderDistance: 2,
            itemStyle: {
              borderColor: '#1890FF',
              borderWidth: 2,
              shadowBlur: 0
            }
          },
          itemStyle: {
            borderWidth: 2,
            shadowBlur: 0
          },
          label: {
            color: '#000',
            fontSize: 22,
            position: ['50%', '30%'],
          }
        }
      }
    }
    this.chartSettings = {
      dimension: '日期',
      metrics: ['年龄', '下单用户'],
    }
    this.vchartColor = ['#95a2ff', '#fa8080', '#ffc076', '#fae768', '#87e885', '#3cb9fc', '#73abf5', '#cb9bff', '#434348', '#90ed7d', '#f7a35c', '#8085e9​​​​​​​']
    this.chartWordcloudSettings = {
      color: this.vchartColor
    }
    // 95a2ff - fa8080 - ffc076 - fae768 - 87e885 - 3cb9fc - 73abf5 - cb9bff - 434348 - 90ed7d - f7a35c - 8085e9​​​​​​​
    this.chartOption = {
      // 隐藏底部
      xAxis: {
        show: false
      },
      // 隐藏左侧
      yAxis: {
        show: false
      },
      geo: {
        show: false
      },
      legend: {
        show: false
      },
      // 调整边距
      grid: {
        top: '-0px',
        left: '-66px',
        right: '-20px',
        bottom: '-18px'
      },
      tooltip : {
        trigger: 'axis',
        // 隐藏鼠标滑过隐藏线
        axisPointer: {
          type: 'none'
        }
      },
      series:{
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
    this.chartLineSettings = {
      area: true,
    }
    return {
      chartWordcloudData: {
        columns: ['word', 'count'],
        rows: getRows()
      },
      chartLiquidfillData: {
        columns: ['city', 'percent'],
        rows: [{
          city: '上海',
          percent: 0.56
        }]
      },
      chartLineData: {
        columns: ['日期', '访问用户'],
        rows: [
          { '日期': '1', '访问用户': 1393 },
          { '日期': '2', '访问用户': 3530 },
          { '日期': '2', '访问用户': 2923 },
          { '日期': '3', '访问用户': 1723 },
          { '日期': '4', '访问用户': 3792 },
          { '日期': '5', '访问用户': 4593 },
          { '日期': '6', '访问用户': 4793 },
          { '日期': '7', '访问用户': 4292 },
          { '日期': '8', '访问用户': 4122 },
          { '日期': '9', '访问用户': 1422 },
          { '日期': '10', '访问用户': 4593 },
          { '日期': '11', '访问用户': 4793 },
          { '日期': '12', '访问用户': 4292 },
          { '日期': '13', '访问用户': 4122 },
          { '日期': '14', '访问用户': 1422 }
        ]
      },
      chartData: {
        columns: ['日期', '访问用户', '下单用户', '年龄'],
        rows: {
          '上海': [
            { '日期': '1/1', '访问用户': 123, '年龄': 3, '下单用户': 1244 },
            { '日期': '1/2', '访问用户': 1223, '年龄': 6, '下单用户': 2344 },
            { '日期': '1/3', '访问用户': 7123, '年龄': 9, '下单用户': 3245 },
            { '日期': '1/4', '访问用户': 4123, '年龄': 12, '下单用户': 4355 },
            { '日期': '1/5', '访问用户': 3123, '年龄': 15, '下单用户': 4564 },
            { '日期': '1/6', '访问用户': 2323, '年龄': 20, '下单用户': 6537 }
          ],
          '北京': [
            { '日期': '1/1', '访问用户': 123, '年龄': 3, '下单用户': 1244 },
            { '日期': '1/2', '访问用户': 1273, '年龄': 6, '下单用户': 2344 },
            { '日期': '1/3', '访问用户': 3123, '年龄': 15, '下单用户': 4564 },
            { '日期': '1/4', '访问用户': 2123, '年龄': 9, '下单用户': 3245 },
            { '日期': '1/5', '访问用户': 4103, '年龄': 12, '下单用户': 4355 },
            { '日期': '1/6', '访问用户': 7123, '年龄': 10, '下单用户': 3567 }
          ],
          '广州': [
            { '日期': '1/1', '访问用户': 123, '年龄': 3, '下单用户': 1244 },
            { '日期': '1/2', '访问用户': 1223, '年龄': 6, '下单用户': 2344 },
            { '日期': '1/3', '访问用户': 2123, '年龄': 30, '下单用户': 3245 },
            { '日期': '1/5', '访问用户': 4123, '年龄': 12, '下单用户': 4355 },
            { '日期': '1/4', '访问用户': 5123, '年龄': 18, '下单用户': 4564 },
            { '日期': '1/6', '访问用户': 3843, '年龄': 30, '下单用户': 4850 }
          ]
        }
      }
    }
  },
  computed: {},
  mounted() {},
  methods: {}
}

</script>
<style lang='scss' scoped>
.c-liquidfill-title {
  position: absolute;
  top: 34px;
  left: 50%;
  transform: translateX(-50%);
}

</style>
