<!--
 * @Description: 四边布局
 * @Author: Cary
 * @Date: 2019-12-09 16:03:17
 * @FilePath: f:\vue-project\alien-vue-admin\src\views\container\base.vue
 -->
<template>
  <div class="cc-contriner">
    <c-container :l-width="128" :r-width="230">
      <div slot="left" >
        <el-tabs :tab-position="tabPosition" style="height: 100%;">
          <el-tab-pane
            v-for="item in tabList"
            :key="item.id"
            :label="item.title"/>
        </el-tabs>
      </div>
      <div slot="right">
        <div class="c-right-control">
          <div
            v-for="item in iconList"
            :key="item.id"
            :span="8"
            class="cc-mar-t-10 c-item">
            <el-link :underline="false"><i :class="[item['icon']]" class=" cc-f-s30"/></el-link>
          </div>
        </div>
      </div>
      <div class="cc-pad-10">
        <div class="cc-ta--c">
           <h1>网站快速成型工具</h1>
            <p>Element，一套为开发者、设计师和产品经理准备的基于 Vue 2.0 的桌面端组件库</p>
        </div>
        <div>
          <h2>Element</h2>
          <p>Element，一套为开发者、设计师和产品经理准备的基于 Vue 2.0 的桌面端组件库</p>
          <p>
            <strong>一致性</strong> Consistency
          </p>
          <ul>
            <li>
              <p>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</p>
            </li>
            <li>
              <p>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</p>
            </li>
          </ul>
          <p>
            <strong>反馈</strong> Feedback
          </p>
          <ul>
            <li>
              <p>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</p>
            </li>
            <li>
              <p>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</p>
            </li>
          </ul>
          <p>
            <strong>效率</strong> Efficiency
          </p>
          <ul>
            <li>
              <p>简化流程：设计简洁直观的操作流程；</p>
            </li>
            <li>
              <p>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</p>
            </li>
            <li>
              <p>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</p>
            </li>
          </ul>
          <p>
            <strong>可控</strong> Controllability
          </p>
          <ul>
            <li>
              <p>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</p>
            </li>
            <li>
              <p>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</p>
            </li>
          </ul>
          <ul>
            <li>
              <p>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</p>
            </li>
            <li>
              <p>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</p>
            </li>
          </ul>
          <p>
            <strong>效率</strong> Efficiency
          </p>
          <ul>
            <li>
              <p>简化流程：设计简洁直观的操作流程；</p>
            </li>
            <li>
              <p>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</p>
            </li>
            <li>
              <p>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</p>
            </li>
          </ul>
          <p>
            <strong>可控</strong> Controllability
          </p>
          <ul>
            <li>
              <p>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</p>
            </li>
            <li>
              <p>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</p>
            </li>
          </ul>
          <p>
            <strong>可控</strong> Controllability
          </p>
          <ul>
            <li>
              <p>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</p>
            </li>
            <li>
              <p>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</p>
            </li>
          </ul>
        </div>
      </div>
    </c-container>
  </div>
</template>

<script>
import { getCommonContainerList } from '@/api/modules/common.js'
  export default {
    components: {},
    data() {
      return {
        tabPosition: 'left',
        tabList: [],
        iconList: this.$store.getters.eleIcon(60)
      }
    },
    mounted() {
      getCommonContainerList().then(res => {
        this.tabList = res.data
      })
    }
  }
</script>
<style lang='scss' scoped>
.c-right-control {
  display: flex;
  flex-wrap: wrap;
  .c-item {
    padding: 20px
  }
}
</style>
