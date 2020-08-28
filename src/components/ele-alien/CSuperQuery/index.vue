<!--
 * @Description: 所有的筛选对象
 * @Author: Cary
 * @Date: 2019-06-05 14:36:59
 -->
<template>
  <el-row :gutter="10">
    <template v-for="form in getForms">
      <el-col
        v-if="!form.hidden"
        :key="form.id"
        :span="form.span"
        :class="{'cc-margin-b-10': form.type !== 'empty'}">
        <div class="cc-super-query__body">
          <template v-if="form.type === 'radio'">
            <el-radio-group
              v-if="form.list"
              v-model="form.value"
              :text-color="form.textColor"
              :fill="form.fill"
              @change="handleChange($event, form.callback)">
              <el-radio
                v-for="radio in form.list"
                :key="radio.label"
                :label="radio.name"
                :disabled="radio.disabled"
                :border="radio.border">{{ radio.label }}</el-radio>
            </el-radio-group>
          </template>
          <template v-else-if="form.type === 'radio-button'">
            <el-radio-group
              v-if="form.list"
              v-model="form.value"
              :text-color="form.textColor"
              :fill="form.fill"
              @change="handleChange($event, form.callback)">
              <el-radio-button
                v-for="radio in form.list"
                :key="radio.lable"
                :label="radio.label"
                :disabled="radio.disabled"/>
            </el-radio-group>
          </template>
          <template v-else-if="form.type === 'checkbox'">
            <el-checkbox-group
              v-if="form.list"
              v-model="form.value"
              :text-color="form.textColor"
              :fill="form.fill"
              :disabled="form.disabled"
              :min="form.min"
              :max="form.max"
              @change="handleChange($event, form.callback)">
              <el-checkbox
                v-for="checkbox in form.list"
                :key="checkbox.label"
                :label="checkbox.label"
                :false-label="checkbox.falseLabel"
                :border="checkbox.border"
                :true-label="checkbox.trueLabel"
                :disabled="checkbox.disabled">{{ checkbox.text || '' }}</el-checkbox>
            </el-checkbox-group>
            <div v-else style="line-height: 30px;">
              <el-checkbox
                v-model="form.value"
                :false-label="form.falseLabel"
                :border="form.border"
                :indeterminate="form.indeterminate"
                :true-label="form.trueLabel"
                :disabled="form.disabled">
                {{ form.label }}
              </el-checkbox>
            </div>
          </template>
          <template v-else-if="form.type === 'checkbox-button'">
            <el-checkbox-group
              v-if="form.list"
              v-model="form.value"
              :text-color="form.textColor"
              :fill="form.fill"
              :disabled="form.disabled"
              :min="form.min"
              :max="form.max"
              @change="handleChange($event, form.callback)">
              <el-checkbox-button
                v-for="checkbox in form.list"
                :key="checkbox.lable"
                :label="checkbox.label"
                :checked="checkbox.checked"
                :disabled="checkbox.disabled"/>
            </el-checkbox-group>
          </template>
          <template v-else-if="form.type === 'input'">
            <el-input
              v-model="form.value"
              :maxlength="form.maxlength"
              :minlength="form.minlength"
              :clearable="form.clearable"
              :disabled="form.disabled"
              :prefix-icon="form.prefixIcon"
              :suffix-icon="form.suffixIcon"
              :readonly="form.readonly"
              :placeholder="form.placeholder"/>
          </template>
          <template v-else-if="form.type === 'input-number'">
            <el-input-number
              v-model="form.value"
              :min="form.min"
              :max="form.max"
              :style="form.style"
              :label="form.label"
              @change="handleChange($event, form.callback)"/>
          </template>
          <template v-else-if="form.type === 'select'">
            <el-select
              v-model="form.value"
              :style="form.style"
              :placeholder="form.placeholder"
              :multiple="form.multiple"
              :collapse-tags="form.collapseTags"
              :disabled="form.disabled"
              :clearable="form.clearable"
              :filterable="form.filterable"
              :allow-create="form.allowCreate"
              :filter-method="form.filterMethod"
              :remote="form.remote"
              :loading="form.loading"
              :loading-text="form.loadingText"
              :no-match-text="form.noMatchText"
              :no-data-text="form.noDataText"
              :popper-class="form.popperClass"
              :reserve-keyword="form.reserveKeyword"
              :default-first-option="form.defaultFirstOption"
              :automatic-dropdown="form.automaticDropdown"
              @change="handleChange($event, form.callback)">
              <el-option
                v-for="select in form.list"
                :key="select.name"
                :label="form.propLabel ? select[form.propLabel] : select.label"
                :value="form.propValue ? select[form.propValue] : select.value"/>
            </el-select>
          </template>
          <template v-else-if="form.type === 'cascader'">
            <el-cascader
              v-model="form.value"
              :style="form.style"
              :options="form.list"
              :props="form.props"
              :separator="form.separator"
              :popper-class="form.popperClass"
              :placeholder="form.placeholder"
              :disabled="form.disabled"
              :clearable="form.clearable"
              :filterable="form.filterable"
              :check-strictly="form.checkStrictly"
              :show-all-levels="form.showAllLevels === undefined ? true : form.showAllLevels"
              @change="handleChange($event, form.callback)"/>
          </template>
          <template v-else-if="form.type === 'cascader-single'">
            <el-cascader
              ref="mySingleCascader"
              v-model="form.value"
              :style="form.style"
              :options="form.list"
              :props="_getCascaderProps(form.props)"
              :separator="form.separator"
              :popper-class="form.popperClass"
              :placeholder="form.placeholder"
              :disabled="form.disabled"
              :clearable="form.clearable"
              :filterable="form.filterable"
              :check-strictly="form.checkStrictly"
              :show-all-levels="form.showAllLevels === undefined ? true : form.showAllLevels"
              @change="_handleCascaderChange($event, form.callback)"
              @expand-change="_handleCascaderExpandChange"
              @visible-change="_handleCascaderVisibleChange">
              <template
                v-if="!_getCascaderProps(form.props).multiple"
                slot-scope="{ node, data }">
                <div
                  style="max-width: 130px; padding-left: 0; padding-right: 0"
                  class="cc-hide-text"
                  :class="{'el-cascader-node': true, 'is-disabled': data[_getCascaderProps(form.props).disabled] === true }"
                  @click.stop="_handleCascaderItemChange(node, data, form)">
                  {{ data[_getCascaderProps(form.props).label] }}
                </div>
              </template>
            </el-cascader>
          </template>
          <template v-else-if="form.type === 'switch'">
            <el-switch
              v-model="form.value"
              :style="form.style"
              :active-color="form.activeColor"
              :inactive-color="form.inactiveColor"
              :disabled="form.disabled"
              :active-icon-class="form.activeIconClass"
              :inactive-icon-class="form.inactiveIconClass"
              :active-text="form.activeText"
              :inactive-text="form.inactiveText"
              :active-value="form.activeValue"
              :inactive-value="form.inactiveValue"
              :name="form.name"
              @change="handleChange($event, form.callback)"/>
          </template>
          <template v-else-if="form.type === 'slider'">
            <el-slider
              v-model="form.value"
              :min="form.min"
              :max="form.max"
              :disabled="form.disabled"
              :step="form.step"
              :show-input="form.showInput"
              :show-input-controls="form.showInputControls"
              :show-stops="form.showStops"
              :show-tooltip="form.showTooltip"
              :format-tooltip="form.formatTooltip"
              :range="form.range"
              :vertical="form.vertical"
              :height="form.height"
              :label="form.label"
              :debounce="form.debounce"
              :tooltip-class="form.tooltipClass"
              :marks="form.marks"/>
          </template>
          <template v-else-if="form.type === 'timepicker'">
            <el-time-select
              v-model="form.value"
              :picker-options="form.pickerOptions"
              :placeholder="form.placeholder"
              :readonly="form.readonly"
              :disabled="form.disabled"
              :editable="form.editable"
              :style="form.style"
              :clearable="form.clearable"
              :start-placeholder="form.startPlaceholder"
              :end-placeholder="form.endPlaceholder"
              :is-range="form.isRange"
              :arrow-control="form.arrowControl"
              :align="form.align"
              :popper-class="form.popperClass"
              :range-separator="form.rangeSeparator"
              :value-format="form.valueFormat"
              :default-value="form.defaultValue"
              :prefix-icon="form.prefixIcon"
              :clear-icon="form.clearIcon"
              @change="handleChange($event, form.callback)"/>
          </template>
          <template v-else-if="form.type === 'datepicker'">
            <el-date-picker
              v-model="form.value"
              :type="form.mode || 'date'"
              :placeholder="form.placeholder"
              :readonly="form.readonly"
              :disabled="form.disabled"
              :editable="form.editable"
              :clearable="form.clearable"
              :format="form.format"
              :align="form.align"
              :style="form.style"
              :range-separator="form.rangeSeparator"
              :value-format="form.valueFormat"
              :default-value="form.defaultValue"
              :default-time="form.defaultTime"
              :popper-class="form.popperClass"
              :unlink-panels="form.unlinkPanels"
              :picker-options="form.pickerOptions"
              :start-placeholder="form.startPlaceholder"
              :end-placeholder="form.endPlaceholder"
              :prefix-icon="form.prefixIcon"
              :clear-icon="form.clearIcon"
              @change="handleChange($event, form.callback)"/>
          </template>
          <template v-else-if="form.type === 'select-page'">
            <CSelectPage
              v-model="form.value"
              :option="form.option"
              :table-interface="form.tableInterface"
              :table-header="form.tableHeader"/>
          </template>
          <template v-else-if="form.type === 'empty'">
            {{ "" }}
          </template>
          <template v-else-if="form.type === 'slot'">
            <slot :name="form.slot"/>
          </template>
          <template v-else>
            <div>此组件无效</div>
          </template>
        </div>
      </el-col>
    </template>
  </el-row>
</template>

<script>
export default {
  components: {},
  props: {
    options: {
      type: Object,
      default: null
    }
  },
  data() {
    return {
      option: this.options
    }
  },
  computed: {
    getForms() {
      if (!this.option.forms) return []
      return this.option.forms
    }
  },
  mounted() {},
  methods: {
    getValueObj() {
      let item = {}
      if (this.option && this.option.forms) {
        this.option.forms.forEach(t => {
          if (t.name !== undefined && t.value != null) {
            item[t.name] = t.value
          }
        })
      } else {
        console.error('super query option form. error')
        return {}
      }
      return item
    },

    getValueList() {
      let list = []
      if (this.option && this.option.forms) {
        this.option.forms.forEach(t => {
          if (t.name !== undefined && t.value !== undefined && t.value !== null) {
            list.push({ name: t.name, value: t.value, operate: t.operate || 'eq' })
          }
        })
      } else {
        console.error('super query option form. error')
        return []
      }
      return list
    },

    getFormList() {
      return this.option && this.option.forms ? this.option.forms : undefined
    },

    getFormObj(key, value) {
      if (this.option && this.option.forms) {
        return this.option.forms.filter(f => f[key] === value)
      } else {
        console.error('super query option form. error')
      }
    },

    setFormValue(name, val) {
      this.setFormEdit(name, 'value', val)
    },

    setFormList(name, list) {
      this.setFormEdit(name, 'list', list)
    },

    setFormEdit(name, key, val) {
      if (this.option && this.option.forms) {
        this.option.forms.find(t => {
          if (t.name === name) {
            if (t[key] === undefined) t[key] = null
            this.$set(t, key, val)
            return true
          }
        })
      } else {
        console.error('super query option form. error')
      }
    },

    resetValue(arr) {
      if (arr) {
        if (this.option && this.option.forms) {
          this.option.forms.forEach(t => {
            if (arr.indexOf(t.name) === -1) {
              if (t.defaultVal) {
                this.$set(t, 'value', t.defaultVal)
              } else {
                this.$set(t, 'value', undefined)
              }
            }
          })
          return
        } else {
          console.error('super query option form. error')
          return
        }
      }
      if (this.option && this.option.forms) {
        this.option.forms.forEach(t => {
          if (t.defaultVal) {
            this.$set(t, 'value', t.defaultVal)
          } else {
            this.$set(t, 'value', undefined)
          }
        })
      } else {
        console.error('super query option form. error')
        return
      }
    },

    _getCascaderProps(props) {
      let pro = {
        label: 'label',
        value: 'value',
        disabled: 'disabled',
        children: 'children',
        leaf: 'leaf',
        checkStrictly: !props.multiple,
        expandTrigger: 'hover'
      }
      return Object.assign(pro, props)
    },

    _handleCascaderExpandChange(e) {
      this._hideCascaderRadio()
    },

    _handleCascaderVisibleChange(isshow) {
      isshow && this._hideCascaderRadio()
    },

    _handleCascaderItemChange(node, data, form) {
      const { disabled } = this._getCascaderProps(form.props)
      if (data[disabled] === true) return
      const { path } = node
      this.$set(form, 'value', path)
      this.$nextTick(() => {
        this._hideCascaderDropDownVisible()
        form.callback && form.callback(path)
      })
    },

    _handleCascaderChange(e, call) {
      call && call(e)
    },

    _hideCascaderDropDownVisible() {
      let arr = this.$refs.mySingleCascader
      arr.map(e => {
        e.toggleDropDownVisible(false)
      })
    },

    _hideCascaderRadio() {
      // let scs = this.$refs.mySingleCascader
      // scs.map(p => {
      //   console.log(p)
      //   let radios = p.$el.getElementsByClassName('el-radio')
      //   this.$nextTick(function() {
      //     for (let i = 0; i < radios.length; i++) {
      //       radios[i].style.display = 'none'
      //     }
      //   })
      // })
    },

    handleChange(val, callback) {
      callback && callback(val)
    }
  }
}

</script>
