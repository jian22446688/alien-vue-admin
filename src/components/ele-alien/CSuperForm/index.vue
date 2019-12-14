<!--
 * @Description: 超强form表单
 * @Author: Cary
 * @Date: 2019-09-27 08:22:08
 -->
<template>
  <el-form
    :ref="getOption.ref"
    :model="getValue"
    :rules="getRules"
    class="cc-super-form"
    v-bind="getOption">
    <el-row>
      <template v-for="form in getForms">
        <el-col
          v-if="!form.hidden"
          :key="form.prop"
          :span="form.span || 12">
          <el-form-item
            :label="form.itemLabel"
            :prop="form.prop">
            <template v-if="form.type === 'radio'">
              <el-radio-group
                v-if="form.list"
                v-model="getValue[form.prop]"
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
                v-model="getValue[form.prop]"
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
                v-model="getValue[form.prop]"
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
                  v-model="getValue[form.prop]"
                  :false-label="form.falseLabel"
                  :border="form.border"
                  :true-label="form.trueLabel"
                  :disabled="form.disabled">
                  {{ form.label }}
                </el-checkbox>
              </div>
            </template>
            <template v-else-if="form.type === 'checkbox-button'">
              <el-checkbox-group
                v-if="form.list"
                v-model="getValue[form.prop]"
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
                v-model="getValue[form.prop]"
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
                v-model="getValue[form.prop]"
                v-bind="form"
                @change="handleChange($event, form.callback)"/>
            </template>
            <template v-else-if="form.type === 'select'">
              <el-select
                v-model="getValue[form.prop]"
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
                v-model="getValue[form.prop]"
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
                v-model="getValue[form.prop]"
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
                v-model="getValue[form.prop]"
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
                v-model="getValue[form.prop]"
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
                v-model="getValue[form.prop]"
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
                v-model="getValue[form.prop]"
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
            <template v-else-if="form.type === 'slot'">
              <slot :name="form.slot"/>
            </template>
          </el-form-item>
        </el-col>
      </template>
      <el-col v-if="getOption.isShowSubmit" :span="24">
        <el-form-item>
          <el-button
            :loading="getOption.submitLoading"
            type="primary"
            @click="submitForm(getOption.ref)">{{ getOption.submitText || '提交' }}</el-button>
          <el-button @click="resetForm(getOption.ref)">{{ getOption.resetText || '重置' }}</el-button>
        </el-form-item>
      </el-col>
    </el-row>
  </el-form>
</template>

<script>
export default {
  components: {},
  props: {
    options: {
      type: Object,
      default: () => {
        return {
          ref: 'c_super_form' + this._uid
        }
      }
    }
  },
  data() {
    return {
      option: Object.assign({
        action: undefined,
        value: {},
        rules: undefined,
        ref: 'c_super_form' + this._uid,
        isShowSubmit: true,
        beforeSubmit: undefined,
        actionCallback: undefined,
        onValidateError: undefined,
        submitLoading: false,
        submitLoadingText: '请求中...',
        submitText: '提交',
        resetText: '重置'
      }, this.options)
    }
  },
  computed: {
    getOption() {
      return this.option
    },

    getForms() {
      if (!this.option.forms) return []
      return this.option.forms
    },

    getValue() {
      return this.option.value
    },

    getRules() {
      return this.option.rules
    }
  },
  methods: {
    handleChange(val, callback) {
      callback && callback(val)
    },

    setValue(key, val) {
      if (!key) return
      this.$set(this.option.value, key, val)
    },

    getValues() {
      return this.getValue
    },

    setSubmitText(text) {
      this.$set(this.option, 'submitText', text)
    },

    setSubmitLoading(loading) {
      this.$set(this.option, 'submitLoading', loading)
    },

    _runAction() {
      let opt = this.option
      if (opt && opt.action instanceof Promise) {
        this.setSubmitText(opt.submitLoadingText)
        this.$set(this.option, 'submitLoading', true)
        opt.action(opt.value).then(res => {
          this.setSubmitText(opt.submitText)
          this.$set(this.option, 'submitLoading', false)
          opt.actionCallback && opt.actionCallback(res)
        }).catch(e => {
          this.setSubmitText(opt.submitText)
          this.$set(this.option, 'submitLoading', false)
        })
      }
    },

    submitForm(formName) {
      let opt = this.option
      if (!formName) return
      console.log('ddd')
      this.$refs[formName].validate((valid, obj) => {
        if (valid) {
          if (opt && opt.beforeSubmit instanceof Function) {
            if (opt.beforeSubmit(opt.value, this) === true) this._runAction()
          } else {
            this._runAction()
          }
        } else {
          opt.onValidateError && opt.onValidateError(obj)
          console.log('error submit!!')
          return false
        }
      })
    },

    isValidate() {
      return this.$refs[this.option.ref].validate()
    },

    resetForm(formName) {
      this.$refs[formName].resetFields()
    }
  }
}

</script>
<style lang='scss' scoped>
.cc-super-form {
  .el-input-number--small {
    width: 100%;
  }
}

</style>
