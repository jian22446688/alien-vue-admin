<!--
 * @Description: 文件及简介
 * @Author: Cary
 * @Date: 2019-12-04 14:29:31
 * @FilePath: f:\vue-project\alien-vue-admin\src\views\profile\components\Timeline.vue
 -->
<template>
  <div class="block">
    <el-timeline>
      <el-timeline-item v-for="(item,index) of timeline" :key="index" :timestamp="item.timestamp" placement="top">
        <el-card>
          <h4>{{ item.title }}</h4>
          <p>{{ item.content }}</p>
        </el-card>
      </el-timeline-item>
    </el-timeline>
  </div>
</template>

<script>
export default {
  data() {
    return {
      timeline: [
        {
          timestamp: '2019/12/3',
          title: 'Cary create alien vue admin',
          content: 'Cary first committed 2019/12/3 18:30'
        },
        {
          timestamp: '2019/12/5',
          title: 'Update Github template',
          content: 'PanJiaChen committed 2019/4/21 20:46'
        },
        {
          timestamp: '2019/12/6',
          title: 'Build Template',
          content: 'PanJiaChen committed 2019/4/22 20:46'
        },
        {
          timestamp: '2019/12/7',
          title: 'Release New Version',
          content: 'PanJiaChen committed 2019/4/23 20:46'
        }
      ]
    }
  }
}
</script>
