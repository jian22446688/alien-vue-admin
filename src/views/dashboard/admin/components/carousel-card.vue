<!--
 * @Description: 文件及简介
 * @Author: Cary
 * @Date: 2019-12-06 09:50:47
 * @FilePath: f:\vue-project\alien-vue-admin\src\views\dashboard\admin\components\carousel-card.vue
 -->
<template>
  <div>
    <el-card>
      <el-carousel
        height="110px"
        :autoplay="false"
        :loop="false"
        indicator-position="none">
        <el-carousel-item>
          <div style="display: flex;">
            <el-row class="carouse-item " v-for="item in 7" :key="item">
              <el-col :span="12">
                <div class="cc-mar-b-20">商店 {{ item }}</div>
                <span class="c-text-subheading65 cc-f-s14">转化率</span>
                <h3 class="cc-mar-b-2 cc-mar-t-6 cc-f-s24 cc-cur--p" @click="handleStores">{{ getStoresP() }}%</h3>
              </el-col>
              <el-col :span="12">
                <div class="cc-pad-t-36">
                  <el-progress type="circle" :width="50" :percentage="25"></el-progress>
                </div>
              </el-col>
            </el-row>
          </div>
        </el-carousel-item>
        <el-carousel-item>
          <div style="display: flex;">
            <el-row class="carouse-item " v-for="item in 4" :key="item">
              <el-col :span="12">
                <div class="cc-mar-b-20">商店 {{ item }}</div>
                <span class="c-text-subheading65 cc-f-s14">转化率</span>
                <h3 class="cc-mar-b-2 cc-mar-t-6 cc-f-s24 cc-cur--p" @click="handleStores">{{ getStoresP() }}%</h3>
              </el-col>
              <el-col :span="12">
                <div class="cc-pad-t-36">
                  <el-progress type="circle" :width="50" :percentage="25"></el-progress>
                </div>
              </el-col>
            </el-row>
          </div>
        </el-carousel-item>
      </el-carousel>
      <div class="cc-mar-t-20">
        <ve-line
          :data="chartData"
          :data-zoom="dataZoom">
        </ve-line>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    this.dataZoom = [
      {
        type: 'slider',
        start: 0,
        end: 100
      }
    ]
    return {
      chartData: {
        columns: ['日期', '成本', '利润', '人力'],
        rows: [
          { '日期': '1月1日', '成本': 15, '利润': 12, '人力': 82 },
          { '日期': '1月2日', '成本': 12, '利润': 25, '人力': 25 },
          { '日期': '1月3日', '成本': 21, '利润': 10, '人力': 50 },
          { '日期': '1月4日', '成本': 41, '利润': 32, '人力': 22 },
          { '日期': '1月5日', '成本': 31, '利润': 30, '人力': 10 },
          { '日期': '1月6日', '成本': 71, '利润': 55, '人力': 35 }
        ]
      },
      rows1: [
        { '日期': '1月1日', '成本': 35, '利润': 32, '人力': 12 },
        { '日期': '1月2日', '成本': 22, '利润': 85, '人力': 25 },
        { '日期': '1月3日', '成本': 51, '利润': 40, '人力': 10 },
        { '日期': '1月4日', '成本': 21, '利润': 32, '人力': 32 },
        { '日期': '1月5日', '成本': 91, '利润': 30, '人力': 30 },
        { '日期': '1月6日', '成本': 71, '利润': 55, '人力': 35 }
      ],
      rows2: [
        { '日期': '1月1日', '成本': 25, '利润': 32, '人力': 12 },
        { '日期': '1月2日', '成本': 32, '利润': 85, '人力': 25 },
        { '日期': '1月3日', '成本': 21, '利润': 60, '人力': 10 },
        { '日期': '1月4日', '成本': 21, '利润': 32, '人力': 22 },
        { '日期': '1月5日', '成本': 91, '利润': 40, '人力': 30 },
        { '日期': '1月6日', '成本': 71, '利润': 55, '人力': 55 }
      ],
      rows3: [
        { '日期': '1月1日', '成本': 25, '利润': 32, '人力': 12 },
        { '日期': '1月2日', '成本': 52, '利润': 75, '人力': 25 },
        { '日期': '1月3日', '成本': 21, '利润': 20, '人力': 20 },
        { '日期': '1月4日', '成本': 21, '利润': 32, '人力': 32 },
        { '日期': '1月5日', '成本': 41, '利润': 40, '人力': 30 },
        { '日期': '1月6日', '成本': 61, '利润': 55, '人力': 45 }
      ],
    }
  },
  computed: {
    
  },
  mounted() {},
  methods: {
    getStoresP(){
      return (Math.random() * 100).toFixed(0)
    },
    handleStores() {
      let rand = Math.ceil(Math.random() * 3);
      this.chartData.rows = this['rows' + rand]
    }
  }
}

</script>
<style lang='scss' scoped>
.carouse-item {
  margin: 8px 20px;
  width: 138px;

  .left {
    width: 50%;
  }
  .right {
    width: 50%;
  }
}
</style>
