<!--
 * @Description: 最强工具按钮组
 * @Author: Cary
 * @Date: 2019-06-05 14:36:59
 -->
<template>
  <div class="supertool">
    <div v-if="!getInputSearch.hidden" class="supertool-input">
      <el-input
        v-model="searchInput"
        :placeholder="getInputSearch.placeholder"
        class="c-input-fillet"
        @keyup.enter.native="hanldeSearchBtnClick">
        <el-button
          slot="suffix"
          style="margin-right: 2px;"
          type="text"
          icon="el-icon-search"
          class="btn-icon"
          @click="hanldeSearchBtnClick"/>
      </el-input>
    </div>
    <div class="supertool-btns">
      <template v-for="btn in getShowBtns">
        <template v-if="btn.hidden || btn.hidden === undefined">
          <template v-if="btn.tip">
            <el-tooltip
              :key="btn.name"
              v-model="btn.tipActiv"
              :content="btn.tip"
              :enterable="false"
              effect="dark"
              placement="bottom">
              <div style="display: inline-block">
                <template v-if="btn.delete">
                  <el-popover :key="btn.name" v-model="btn.deleteActiv" width="160" placement="top">
                    <p>{{ btn.delete.title || '是否删除' }}</p>
                    <div style="text-align: right; margin: 0">
                      <el-button size="mini" type="text" @click="hanldeCancelClick(btn)">取消</el-button>
                      <el-button type="primary" size="mini" @click="hanldeConfirmClick(btn, btn.callback)">确定</el-button>
                    </div>
                    <el-button
                      slot="reference"
                      :key="btn.name"
                      :icon="btn.eicon"
                      :type="btn.type"
                      :disabled="btn.disabled"
                      circle
                      class="btn-item"
                      @click="hanldeDeleteShow(btn)">
                      <svg-icon v-if="!btn.eicon" :icon-class="btn.icon"/>
                    </el-button>
                  </el-popover>
                </template>
                <template v-else-if="btn.component">
                  <el-popover
                    ref="tools_popover"
                    v-model="btn.popoverActiv"
                    placement="bottom"
                    trigger="click"
                    style="max-width: 1000px">
                    <div id="super_componnetn">
                      <slot :name="btn.component"/>
                    </div>
                    <el-button
                      slot="reference"
                      :key="btn.name"
                      :icon="btn.eicon"
                      :type="btn.type"
                      :disabled="btn.disabled"
                      circle
                      class="btn-item"
                      @click="hanldeMoreClick(btn, btn.callback)">
                      <svg-icon v-if="!btn.eicon" :icon-class="btn.icon"/>
                    </el-button>
                  </el-popover>
                </template>
                <template v-else>
                  <el-button
                    :key="btn.name"
                    :icon="btn.eicon"
                    :type="btn.type"
                    :disabled="btn.disabled"
                    circle
                    class="btn-item"
                    @click="hanldeMoreClick(btn, btn.callback)">
                    <svg-icon v-if="!btn.eicon" :icon-class="btn.icon"/>
                  </el-button>
                </template>
              </div>
            </el-tooltip>
          </template>
          <template v-else-if="btn.delete">
            <el-popover :key="btn.name" width="160">
              <p>title</p>
              <div style="text-align: right; margin: 0">
                <el-button size="mini" type="text" @click="hanldeCancelClick(btn)">取消</el-button>
                <el-button type="primary" size="mini" @click="hanldeConfirmClick(btn, btn.callback)">确定</el-button>
              </div>
              <el-button
                v-if="btn.eicon"
                slot="reference"
                :key="btn.name"
                :icon="btn.eicon"
                :type="btn.type"
                :disabled="btn.disabled"
                circle
                class="btn-item"
                @click="hanldeDeleteShow(btn)">
                <svg-icon v-if="!btn.eicon" :icon-class="btn.icon"/>
              </el-button>
            </el-popover>
          </template>
          <template v-else>
            <template v-if="btn.component">
              <el-popover
                :key="btn.name"
                placement="bottom-end"
                trigger="click">
                <div id="super_componnetn">
                  <slot :name="btn.component"/>
                </div>
                <el-button
                  slot="reference"
                  :key="btn.name"
                  :icon="btn.eicon"
                  :type="btn.type"
                  :disabled="btn.disabled"
                  circle
                  class="btn-item"
                  @click="hanldeMoreClick(btn, btn.callback)">
                  <svg-icon v-if="!btn.eicon" :icon-class="btn.icon"/>
                </el-button>
              </el-popover>
            </template>
            <template v-else>
              <el-button
                v-if="btn.eicon"
                :key="btn.name"
                :type="btn.type"
                :icon="btn.eicon"
                :disabled="btn.disabled"
                class="btn-item"
                circle
                @click="hanldeMoreClick(btn.callback)">
                <svg-icon v-if="!btn.eicon" :icon-class="btn.icon"/>
              </el-button>
            </template>
          </template>
        </template>
      </template>
      <template v-if="getBtnLength > maxBtnCount">
        <el-dropdown trigger="hover">
          <el-button icon="el-icon-more" class="btn-more" circle/>
          <el-dropdown-menu slot="dropdown">
            <template v-for="b in getHideBtnsGroup">
              <el-dropdown-item
                v-if="b.hidden || b.hidden === undefined"
                :key="b.name"
                :icon="b.eicon"
                :disabled="b.disabled"
                @click.native="hanldeMoreBtns(b, b.callback)">
                <svg-icon v-if="b.icon" :icon-class="b.icon" style="margin-right: 5px;"/>{{ b.title ? b.title : b.name }}
              </el-dropdown-item>
            </template>
          </el-dropdown-menu>
        </el-dropdown>
      </template>
    </div>
  </div>
</template>

<script>

export default {
  components: {},
  props: {
    options: {
      type: Object,
      default: null,
      required: true
    },
    btnCount: {
      type: Number,
      default: 3
    }
  },
  data() {
    return {
      maxBtnCount: 3,
      deleteActiv: false,
      option: {
        btns: []
      },
      searchInput: ''
    }
  },
  computed: {
    getInputSearch() {
      return this.option.input
    },
    getBtns() {
      let btns = this.option.btns.map((b, i) => {
        if (!b.name) b.name = 'super_btns_' + i
        return b
      })
      return btns
    },
    getShowBtns() {
      if (this.option.btns.length <= this.maxBtnCount) return this.option.btns
      let btns = this.option.btns.map((b, i) => {
        if (!b.name) { b.name = 'super_btns_' + i }
        if (i < this.maxBtnCount) return b
      })
      btns.length = this.maxBtnCount
      return btns
    },
    getBtnLength() {
      return this.option.btns.length
    },
    getHideBtnsGroup() {
      let btns = []
      this.option.btns.forEach((b, i) => {
        if (!(i < this.maxBtnCount)) btns.push(b)
      })
      return btns
    }
  },
  watch: {
    $route(old) {
      if (Array.isArray(this.$refs.tools_popover)) {
        this.$refs.tools_popover.map(e => { e.doClose() })
      }
    },
    btnCount() {
      this.maxBtnCount = this.btnCount
    }
  },
  created() {
    this.maxBtnCount = this.btnCount
    let defalutOption = {
      btns: [
        {
          name: 'btn_1',
          title: 'btn_1',
          type: 'primary',
          tip: '主要的按钮',
          icon: null,
          eicon: 'el-icon-edit',
          callback: () => {},
          component: null, // popover 弹出框组件显示的内容
          delete: {
            title: '是否确定删除'
          }
        }
      ],
      input: {
        placeholder: '请输入内容'
      }
    }
    this.option = Object.assign(defalutOption, this.options)
    this.option.btns = this.option.btns.filter(b => !b.hidden)
  },
  mounted() {},
  methods: {
    setBtnActive(btn, active = true) {
      if (!btn) return
      if (btn && active) {
        this.$set(btn, 'type', 'primary')
      } else {
        this.$set(btn, 'type', '')
      }
    },
    getInputValue() {
      return this.searchInput
    },
    setInputValue(value = '') {
      this.searchInput = value
    },
    hidePopover(btn) {
      if (typeof btn !== 'object' || !btn) return
      this.$set(btn, 'popoverActiv', false)
    },
    hanldeMoreClick(btn, callback) {
      if (btn.delete) this.$set(btn, 'tipActiv', false)
      if (btn.component) this.$set(btn, 'tipActiv', false)
      if (callback) callback(btn)
    },
    hanldeMoreBtns(btn, callback) {
      if (callback) callback(btn)
    },
    hanldeDeleteShow(btn) {
      if (btn.delete) this.$set(btn, 'tipActiv', false)
      // this.$set(btn, 'deleteActiv', true)
    },
    hanldeConfirmClick(btn, callback) {
      this.$set(btn, 'deleteActiv', false)
      if (callback) callback(btn)
    },
    hanldeCancelClick(btn) {
      this.$set(btn, 'deleteActiv', false)
    },
    hanldeSearchBtnClick() {
      this.$emit('input-search', this.searchInput)
    },
    setBtnValue(name, key, value) {
      if (!this.option.btns) return
      let btn = this.option.btns.find(e => e.name === name)
      btn && this.$set(btn, key, value)
    }
  }
}

</script>
<style lang='scss' scoped>
.supertool {
  line-height: 49px;
  &-input {
    width: 230px;
    display: inline-block;
    .btn-icon {
      width: 26px;
      padding-top: 8px;
      font-size: 14px;
    }
  }
  &-btns {
    display: inline-block;
    .btn-item {
      margin-left: 10px;
    }
    .btn-more {
      margin-left: 6px;
      transform: rotate(90deg);
    }
  }

}
</style>
