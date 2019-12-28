<template>
  <el-row :gutter="10" class="panel-group">
    <el-col :xs="12" :sm="12" :lg="6" class="card-panel-col">
      <el-card>
        <div class="cc-clearfix">
          <div class="cc-clearfix">
            <div class="cc-f--left c-text-subheading cc-f-s12">总销售额</div>
            <div class="cc-f--right">
              <el-tooltip class="item" effect="dark" content="指标说明" placement="top">
                <i class="el-icon-warning-outline" />
              </el-tooltip>
            </div>
          </div>
          <div>
            <span class="cc-f-s30">¥ 126,560</span>
          </div>
          <div class="cc-mar-t-30">
            <span class="c-text-subheading65 cc-f-s14">周同比 11%</span>
            <span class="c-text-subheading65 cc-f-s14">日同比 12%</span>
          </div>
          <el-divider />
          <div>
            <span class="c-text-subheading65 cc-f-s14">日销售额 ¥ 12,423</span>
          </div>
        </div>
      </el-card>
    </el-col>
    <el-col :xs="12" :sm="12" :lg="6" class="card-panel-col">
      <el-card>
        <div class="cc-clearfix">
          <div class="cc-clearfix">
            <div class="cc-f--left c-text-subheading cc-f-s12">访问总量</div>
            <div class="cc-f--right">
              <el-tooltip class="item" effect="dark" content="指标说明" placement="top">
                <i class="el-icon-warning-outline" />
              </el-tooltip>
            </div>
          </div>
          <div>
            <span class="cc-f-s30">¥ 126,560</span>
          </div>
          <div class>
            <ve-line
              :data="chartData"
              height="48px"
              :colors="vchartColor"
              :settings="chartSettings"
              :extend="chartOption" />
          </div>
          <el-divider />
          <div>
            <span class="c-text-subheading65 cc-f-s14">日访问量 1,234</span>
          </div>
        </div>
      </el-card>
    </el-col>
    <el-col :xs="12" :sm="12" :lg="6" class="card-panel-col">
      <el-card>
        <div class="cc-clearfix">
          <div class="cc-clearfix">
            <div class="cc-f--left c-text-subheading cc-f-s12">支付笔数</div>
            <div class="cc-f--right">
              <el-tooltip class="item" effect="dark" content="指标说明" placement="top">
                <i class="el-icon-warning-outline" />
              </el-tooltip>
            </div>
          </div>
          <div>
            <span class="cc-f-s30">¥ 126,560</span>
          </div>
          <div class>
            <ve-histogram
              :data="chartData"
              height="48px"
              :colors="vchartColor"
              :settings="chartSettings"
              :extend="chartOption" />
          </div>
          <el-divider />
          <div>
            <span class="c-text-subheading65 cc-f-s14">转化率 60%</span>
          </div>
        </div>
      </el-card>
    </el-col>
    <el-col :xs="12" :sm="12" :lg="6" class="card-panel-col">
      <el-card>
        <div>
          <div class="cc-clearfix">
            <div class="cc-f--left c-text-subheading cc-f-s12">运营活动效果</div>
            <div class="cc-f--right">
              <el-tooltip class="item" effect="dark" content="指标说明" placement="top">
                <i class="el-icon-warning-outline" />
              </el-tooltip>
            </div>
          </div>
          <div>
            <span class="cc-f-s30">78%</span>
          </div>
          <div class="cc-mar-t-22">
            <el-progress
              :text-inside="true"
              :stroke-width="26"
              :percentage="78" />
          </div>
          <el-divider />
          <div>
            <span class="c-text-subheading65 cc-f-s14">周同比 12%</span>
            <span class="c-text-subheading65 cc-f-s14">日同比 11%</span>
          </div>
        </div>
      </el-card>
    </el-col>
    <el-col :span="24">
      <el-row :gutter="10">
        <el-col :xs="12" :sm="6" :lg="3">
          <el-card class="cc-mar-b-10 cc-ta--c">
            <div class="cc-f-s26 cc-mar-b-10">
              <svg-icon icon-class="maid" />
            </div>
            <div class="cc-f-s14">用户</div>
          </el-card>
        </el-col>
        <el-col :xs="12" :sm="6" :lg="3">
          <el-card class="cc-mar-b-10 cc-ta--c">
            <div class="cc-f-s26 cc-mar-b-10">
              <svg-icon icon-class="pokemonegg" />
            </div>
            <div class="cc-f-s14">设备</div>
          </el-card>
        </el-col>
        <el-col :xs="12" :sm="6" :lg="3">
          <el-card class="cc-mar-b-10 cc-ta--c">
            <div class="cc-f-s26 cc-mar-b-10">
              <svg-icon icon-class="rainbow" />
            </div>
            <div class="cc-f-s14">浏览</div>
          </el-card>
        </el-col>
        <el-col :xs="12" :sm="6" :lg="3">
          <el-card class="cc-mar-b-10 cc-ta--c">
            <div class="cc-f-s26 cc-mar-b-10">
              <svg-icon icon-class="dumpster1" />
            </div>
            <div class="cc-f-s14">仓库</div>
          </el-card>
        </el-col>
        <el-col :xs="12" :sm="6" :lg="3">
          <el-card class="cc-mar-b-10 cc-ta--c">
            <div class="cc-f-s26 cc-mar-b-10">
              <svg-icon icon-class="taco" />
            </div>
            <div class="cc-f-s14">收益</div>
          </el-card>
        </el-col>
        <el-col :xs="12" :sm="6" :lg="3">
          <el-card class="cc-mar-b-10 cc-ta--c">
            <div class="cc-f-s26 cc-mar-b-10">
              <svg-icon icon-class="mixture" />
            </div>
            <div class="cc-f-s14">安全</div>
          </el-card>
        </el-col>
        <el-col :xs="12" :sm="6" :lg="3">
          <el-card class="cc-mar-b-10 cc-ta--c">
            <div class="cc-f-s26 cc-mar-b-10">
              <svg-icon icon-class="vipinvitation" />
            </div>
            <div class="cc-f-s14">VIP</div>
          </el-card>
        </el-col>
        <el-col :xs="12" :sm="6" :lg="3">
          <el-card class="cc-mar-b-10 cc-ta--c">
            <div class="cc-f-s26 cc-mar-b-10">
              <svg-icon icon-class="bin" />
            </div>
            <div class="cc-f-s14">坏境</div>
          </el-card>
        </el-col>
      </el-row>
    </el-col>
    <el-col :span="24" class="cc-mar-b-10">
      <el-card class="c-panelgroup-card">
        <div slot="header" class="clearfix">
          <el-tabs
            v-model="activeName"
            class="cc-f--left cc-h-20 cc-mar-t-4"
            @tab-click="handleTabsClick">
            <el-tab-pane label="用户管理" name="first" />
            <el-tab-pane label="配置管理" name="second" />
          </el-tabs>
          <div class="cc-f--right">
            <el-button
              v-for="btn in tabBtns"
              :key="btn.id"
              style="padding: 3px 0"
              :style="{ 'color': !btn.isActive ? '#696969' : '' }"
              type="text"
              @click="handleCardTabsClick(btn)">{{ btn.label }}</el-button>
            <span class="cc-mar-l-10">
              <el-date-picker
                v-model="datePicker"
                type="daterange"
                range-separator="至"
                start-placeholder="开始日期"
                end-placeholder="结束日期" />
            </span>
          </div>
        </div>
        <ve-histogram v-if="tabsChange" :data="chartLineData" />
        <ve-line v-else :data="chartLineData" :settings="chartLineSettings" />
      </el-card>
    </el-col>

    <el-col :xs="24" :sm="24" :lg="12" class="cc-mar-b-10">
      <el-card>
        <div slot="header" class="clearfix">
          <span>线上热门搜索</span>
          <el-dropdown class="cc-f--right">
            <el-button class="cc-f--right" style="padding: 3px 0" type="text">操作按钮</el-button>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>操作一</el-dropdown-item>
              <el-dropdown-item>操作二</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
        <el-row :gutter="20">
          <el-col :span="12">
            <div class="cc-clearfix">
              <div class="cc-clearfix">
                <div class="cc-f--left c-text-subheading cc-f-s12">搜索用户数</div>
                <div class="cc-f--right">
                  <el-tooltip class="item" effect="dark" content="指标说明" placement="top">
                    <i class="el-icon-warning-outline" />
                  </el-tooltip>
                </div>
              </div>
              <div>
                <span class="cc-f-s30">¥ 126,560</span>
              </div>
              <div class>
                <ve-line
                  :data="chartData"
                  height="48px"
                  :colors="vchartColor"
                  :settings="chartSettings"
                  :extend="chartOption" />
              </div>
            </div>
          </el-col>
          <el-col :span="12">
            <div class="cc-clearfix">
              <div class="cc-clearfix">
                <div class="cc-f--left c-text-subheading cc-f-s12">人均搜索次数</div>
                <div class="cc-f--right">
                  <el-tooltip class="item" effect="dark" content="指标说明" placement="top">
                    <i class="el-icon-warning-outline" />
                  </el-tooltip>
                </div>
              </div>
              <div>
                <span class="cc-f-s30">¥ 126,560</span>
              </div>
              <div class>
                <ve-line
                  :data="chartData"
                  :colors="vchartColor"
                  :settings="chartSettings"
                  :extend="chartOption"
                  height="48px" />
              </div>
            </div>
          </el-col>
        </el-row>
        <div class="cc-mar-t-20">
          <el-table :data="tableData" height="243" border style="width: 100%">
            <el-table-column prop="date" label="日期" width="120" />
            <el-table-column prop="name" label="姓名" width="120" />
            <el-table-column prop="address" label="地址" />
          </el-table>
          <div class="cc-clearfix">
            <el-pagination
              class="cc-f--right cc-mar-t-10"
              background
              small
              layout="prev, pager, next"
              :total="1000" />
          </div>
        </div>
      </el-card>
    </el-col>
    <el-col :xs="24" :sm="24" :lg="12" class="cc-mar-b-10">
      <el-card>
        <div slot="header" class>
          <span>销售额类别占比</span>
          <div class="cc-f--right" style="margin-top: -6px">
            <el-radio-group v-model="radio1">
              <el-radio-button label="上海" />
              <el-radio-button label="北京" />
              <el-radio-button label="广州" />
              <el-radio-button label="深圳" />
            </el-radio-group>
            <el-dropdown class="cc-f--right">
              <el-button type="text" icon="el-icon-more" class="cc-mar-l-10" />
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>操作一</el-dropdown-item>
                <el-dropdown-item>操作二</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
        </div>
        <ve-pie :data="chartLineData" :colors="vchartColor" :settings="chartPieSettings" />
      </el-card>
    </el-col>
  </el-row>
</template>

<script>
// 获得某月的天数
function getMonthDays(myMonth) {
  let _date = new Date()
  var monthStartDate = new Date(_date.getFullYear(), _date.getMonth(), 1)
  var monthEndDate = new Date(_date.getFullYear(), _date.getMonth() + 1, 1)
  var days = (monthEndDate - monthStartDate) / (1000 * 60 * 60 * 24)
  return days
}
export default {
  data() {
    this.chartSettings = {
      area: true
    }
    this.chartLineSettings = {
      axisSite: {
        right: ['下单率']
      },
      yAxisType: ['KMB', 'percent'],
      yAxisName: ['数值', '比率'],
      // 调整边距
      grid: {
        top: '-0px',
        bottom: '-68px'
      }
    }
    this.chartPieSettings = {
      legend: {
        type: 'scroll',
        orient: 'vertical',
        right: 10,
        top: 20,
        bottom: 20,
        x: 'left'
      },
      tooltip: {
        show: true
      }
    }
    this.vchartColor = [
      '#95a2ff',
      '#fa8080',
      '#ffc076',
      '#fae768',
      '#87e885',
      '#3cb9fc',
      '#73abf5',
      '#cb9bff',
      '#434348',
      '#90ed7d',
      '#f7a35c',
      '#8085e9​​​​​​​'
    ]
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
      tooltip: {
        trigger: 'axis',
        // 隐藏鼠标滑过隐藏线
        axisPointer: {
          type: 'none'
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
      }
    }
    return {
      radio1: '上海',
      activeName: 'first',
      tabsChange: false,
      chartData: {
        columns: ['日期', '访问用户'],
        rows: [
          {
            日期: '1',
            访问用户: 1393
          },
          {
            日期: '2',
            访问用户: 3530
          },
          {
            日期: '2',
            访问用户: 2923
          },
          {
            日期: '3',
            访问用户: 1723
          },
          {
            日期: '4',
            访问用户: 3792
          },
          {
            日期: '5',
            访问用户: 4593
          },
          {
            日期: '6',
            访问用户: 4793
          },
          {
            日期: '7',
            访问用户: 4292
          },
          {
            日期: '8',
            访问用户: 4122
          },
          {
            日期: '9',
            访问用户: 1422
          },
          {
            日期: '10',
            访问用户: 4593
          },
          {
            日期: '11',
            访问用户: 4793
          },
          {
            日期: '12',
            访问用户: 4292
          },
          {
            日期: '13',
            访问用户: 4122
          },
          {
            日期: '14',
            访问用户: 1422
          }
        ]
      },
      chartLineData: {
        columns: ['日期', '访问用户', '下单用户', '下单率'],
        rows: [
          {
            日期: '1/1',
            访问用户: 1393,
            下单用户: 1093,
            下单率: 0.32
          },
          {
            日期: '1/2',
            访问用户: 3530,
            下单用户: 3230,
            下单率: 0.26
          },
          {
            日期: '1/3',
            访问用户: 2923,
            下单用户: 2623,
            下单率: 0.76
          },
          {
            日期: '1/4',
            访问用户: 1723,
            下单用户: 1423,
            下单率: 0.49
          },
          {
            日期: '1/5',
            访问用户: 3792,
            下单用户: 3492,
            下单率: 0.323
          },
          {
            日期: '1/6',
            访问用户: 4593,
            下单用户: 4293,
            下单率: 0.78
          }
        ]
      },
      rows1: [
        {
          日期: '1/1',
          访问用户: 6393,
          下单用户: 4093,
          下单率: 0.32
        },
        {
          日期: '1/2',
          访问用户: 3530,
          下单用户: 3230,
          下单率: 2.26
        },
        {
          日期: '1/3',
          访问用户: 2923,
          下单用户: 4623,
          下单率: 1.76
        },
        {
          日期: '1/4',
          访问用户: 3723,
          下单用户: 1423,
          下单率: 0.49
        },
        {
          日期: '1/5',
          访问用户: 2792,
          下单用户: 2492,
          下单率: 3.323
        },
        {
          日期: '1/6',
          访问用户: 3593,
          下单用户: 1293,
          下单率: 1.78
        }
      ],
      rows2: [
        {
          日期: '1/1',
          访问用户: 2393,
          下单用户: 2093,
          下单率: 0.32
        },
        {
          日期: '1/2',
          访问用户: 4530,
          下单用户: 3230,
          下单率: 2.26
        },
        {
          日期: '1/3',
          访问用户: 5923,
          下单用户: 2623,
          下单率: 0.76
        },
        {
          日期: '1/4',
          访问用户: 6723,
          下单用户: 1423,
          下单率: 1.49
        },
        {
          日期: '1/5',
          访问用户: 3792,
          下单用户: 2492,
          下单率: 2.323
        },
        {
          日期: '1/6',
          访问用户: 2593,
          下单用户: 1293,
          下单率: 1.78
        }
      ],
      rows3: [
        {
          日期: '1/1',
          访问用户: 1393,
          下单用户: 1093,
          下单率: 0.32
        },
        {
          日期: '1/2',
          访问用户: 3530,
          下单用户: 3230,
          下单率: 0.26
        },
        {
          日期: '1/3',
          访问用户: 2923,
          下单用户: 2623,
          下单率: 0.76
        },
        {
          日期: '1/4',
          访问用户: 1723,
          下单用户: 1423,
          下单率: 0.49
        },
        {
          日期: '1/5',
          访问用户: 3792,
          下单用户: 3492,
          下单率: 0.323
        },
        {
          日期: '1/6',
          访问用户: 4593,
          下单用户: 4293,
          下单率: 0.78
        }
      ],
      tabBtns: [
        {
          id: 'btn_1',
          label: '今日',
          isActive: true
        },
        {
          id: 'btn_2',
          label: '本周',
          isActive: false
        },
        {
          id: 'btn_3',
          label: '本月',
          isActive: false
        },
        {
          id: 'btn_4',
          label: '全年',
          isActive: false
        }
      ],
      datePicker: [new Date(), new Date()],
      tableData: [
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-08',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-06',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-07',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }
      ]
    }
  },
  methods: {
    handleSetLineChartData(type) {
      this.$emit('handleSetLineChartData', type)
    },
    handleTabsClick(tab) {
      if (tab.name === 'second') {
        this.tabsChange = true
      } else {
        this.tabsChange = false
      }
    },
    handleCardTabsClick(btn) {
      this.tabBtns.map(b => {
        b.isActive = false
      })
      btn.isActive = true
      if (btn.id === 'btn_1') {
        this.datePicker = [new Date(), new Date()]
        this.chartLineData.rows = this.rows3
      } else if (btn.id === 'btn_2') {
        let _date = new Date()
        let start = new Date(
          _date.getFullYear(),
          _date.getMonth(),
          _date.getDate() - _date.getDay() + 1
        )
        let end = new Date(
          _date.getFullYear(),
          _date.getMonth(),
          _date.getDate() + (7 - _date.getDay())
        )
        this.datePicker = [start, end]
        this.chartLineData.rows = this.rows1
      } else if (btn.id === 'btn_3') {
        let _date = new Date()
        let start = new Date(_date.getFullYear(), _date.getMonth(), 1)
        let end = new Date(
          _date.getFullYear(),
          _date.getMonth(),
          getMonthDays(_date.getMonth())
        )
        this.datePicker = [start, end]
        this.chartLineData.rows = this.rows2
      } else if (btn.id === 'btn_4') {
        let _date = new Date()
        let start = new Date(_date.getFullYear(), 0, 1)
        let end = new Date(
          _date.getFullYear(),
          _date.getMonth(),
          getMonthDays(11)
        )
        this.datePicker = [start, end]
        this.chartLineData.rows = this.rows1
      }
    }
  }
}
</script>

<style lang='scss' scoped>
  .panel-group {
    .card-panel-col {
      margin-bottom: 10px;
    }

    .card-panel {
      height: 108px;
      cursor: pointer;
      font-size: 12px;
      position: relative;
      overflow: hidden;
      color: #666;
      background: #fff;
      box-shadow: 4px 4px 40px rgba(0, 0, 0, 0.05);
      border-color: rgba(0, 0, 0, 0.05);
    }
  }

  @media (max-width: 550px) {
    .card-panel-description {
      display: none;
    }

    .card-panel-icon-wrapper {
      float: none !important;
      width: 100%;
      height: 100%;
      margin: 0 !important;

      .svg-icon {
        display: block;
        margin: 14px auto !important;
        float: none !important;
      }
    }
  }
</style>
