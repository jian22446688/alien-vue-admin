<!--
 * @Description: 图标选择器
 * @Author: Cary
 * @Date: 2020-07-29 10:49:37
 * @FilePath: \alien-docsf:\vue-project\vue-admin-se\src\components\IconSelect\index.vue
-->
<template>
  <el-popover
    placement="bottom-start"
    title=""
    :width="minWidth"
    :disabled="inputDisabled"
    trigger="click">
    <el-input
      ref="myInput"
      slot="reference"
      v-model="iconName"
      :readonly="!filterable"
      :placeholder="placeholder"
      clearable
      @input="debouncesOnInput">
      <span slot="prefix" class="cc-mar-l-4">
        <svg-icon v-if="iconName" :icon-class="iconName" style="height: 32px;width: 16px;" />
        <i v-else class="el-icon-search"/>
      </span>
    </el-input>
    <div style="border: 1px solid #eaeefb">
      <el-scrollbar
        ref="scrollbar"
        tag="div"
        :view-style="{ height: '230px' }"
        :noresize="false">
        <ul class="icon-contriner">
          <li
            v-for="item in iconList"
            :key="item"
            class="cc-vh-container item"
            :class="{ adtive: iconName === item }"
            @click="handleSelected(item)">
            <span class="">
              <svg-icon class="icon" :icon-class="item" style="height: 22px;width: 16px;" />
              <div class="icon-title cc-hide-text">{{ item }}</div>
            </span>
          </li>
        </ul>
      </el-scrollbar>
    </div>
    <!-- <el-scrollbar
      ref="scrollbar"
      tag="div"
      :view-style="{height: '230px'}"
      :noresize="true">
      <div class="cc-flex--wrap cc-pad-l-2">
        <div
          v-for="item in iconList" :key="item"
          class="cc-pad-t-4 cc-bc-b icon-contriner">
          <svg-icon :icon-class="item" style="height: 22px;width: 16px;" />
          <div class="icon-title">{{ item }}</div>
        </div>
      </div>
    </el-scrollbar> -->
  </el-popover>
</template>

<script>
import icons from './Icons'
import { debounces } from '@/utils'
export default {
  inject: {
    elForm: {
      default: ''
    },
    elFormItem: {
      default: ''
    }
  },
  props: {
    value: {
      type: [String, Object],
      default: ''
    },
    filterable: {
      type: Boolean,
      default: false
    },
    placeholder: {
      type: String,
      default: '请选择图标'
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      iconName: '',
      minWidth: 200,
      iconList: icons
    }
  },
  computed: {
    inputDisabled() {
      return this.disabled || (this.elForm || {}).disabled
    }
  },
  watch: {
    value(val) {
      this.$emit('input', val)
      if (!val) {
        this.iconName = ''
      } else {
        this.iconName = val
      }
    }
  },
  created() {
    this.debouncesOnInput = debounces(this.hanldeInput, 300)
  },
  mounted() {
    this.minWidth = this.$refs['myInput'].$el.getBoundingClientRect().width
    this.updateSrollbar()
  },
  methods: {
    hanldeInput(val) {
      this.iconList = icons
      if (val) {
        this.iconList = this.iconList.filter(f => f.indexOf(val) !== -1)
      } else {
        this.$emit('input', '')
      }
      this.updateSrollbar()
    },
    handleSelected(name) {
      this.iconName = name
      this.$emit('change', name)
      this.$emit('input', name)
      document.body.click()
    },
    reset() {
      this.name = ''
      this.iconList = icons
    },

    updateSrollbar() {
      setTimeout(() => {
        this.$nextTick(() => {
          this.$refs['scrollbar'] && this.$refs['scrollbar'].update()
        })
      }, 800)
    }
  }
}
</script>
<style lang='scss' scoped>
.icon-contriner {
  list-style: none;
  // border: 1px solid #eaeefb;
  margin: 0;
  border-radius: 4px;
  display: flex;
  flex-wrap: wrap;
  .item {
    width: 16.88%;
    text-align: center;
    height: 60px;
    color: #666;
    font-size: 13px;
    border-right: 1px solid #eee;
    border-bottom: 1px solid #eee;
    margin-right: -1px;
    margin-bottom: -1px;
    .icon {
      width: 1em;
      height: 1em;
      vertical-align: -0.15em;
      fill: currentColor;
      overflow: hidden;
    }
    .icon-title {
      width: 60px;
      padding: 0 3px;

      font-size: 10px;
    }
  }
  .item:hover {
    background-color: rgba($color: #34C759, $alpha: 0.2);
  }
  .adtive {
    background-color: rgba($color: #34C759, $alpha: 0.2);
  }
}
</style>
