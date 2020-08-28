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
    <el-row :gutter="10">
      <template v-for="form in getForms">
        <el-col
          v-if="!form.hidden"
          :key="form.fid"
          :span="form.span || 12">
          <el-form-item
            v-tips.child="form.tip"
            v-bind="form"
            :label="form.itemLabel">
            <template v-if="form.ctype === 'radio'">
              <el-radio-group
                v-if="form.list"
                v-model="getValue[form.prop]"
                :style="form.cstyle"
                v-bind="form"
                @change="handleChange($event, form.callback)">
                <el-radio
                  v-for="radio in form.list"
                  :key="radio.label"
                  :style="radio.cstyle"
                  v-bind="radio">{{ radio.value }}</el-radio>
              </el-radio-group>
            </template>
            <template v-else-if="form.ctype === 'radio-button'">
              <el-radio-group
                v-if="form.list"
                v-model="getValue[form.prop]"
                v-bind="form"
                :style="form.cstyle"
                @change="handleChange($event, form.callback)">
                <el-radio-button
                  v-for="radio in form.list"
                  :key="radio.lable"
                  v-bind="radio"
                  :style="radio.cstyle"/>
              </el-radio-group>
            </template>
            <template v-else-if="form.ctype === 'checkbox'">
              <el-checkbox-group
                v-if="form.list"
                v-model="getValue[form.prop]"
                v-bind="form"
                :style="form.cstyle"
                @change="handleChange($event, form.callback)">
                <el-checkbox
                  v-for="checkbox in form.list"
                  :key="checkbox.label"
                  :style="checkbox.cstyle"
                  v-bind="checkbox">{{ checkbox.text || '' }}</el-checkbox>
              </el-checkbox-group>
              <div v-else style="line-height: 30px;">
                <el-checkbox
                  v-model="getValue[form.prop]"
                  v-bind="form"
                  :style="checkbox.cstyle"
                  checkbox>
                  {{ form.label }}
                </el-checkbox>
              </div>
            </template>
            <template v-else-if="form.ctype === 'checkbox-button'">
              <el-checkbox-group
                v-if="form.list"
                v-model="getValue[form.prop]"
                v-bind="form"
                :style="form.cstyle"
                @change="handleChange($event, form.callback)">
                <el-checkbox-button
                  v-for="checkbox in form.list"
                  :key="checkbox.lable"
                  :style="checkbox.cstyle || {}"
                  v-bind="checkbox"/>
              </el-checkbox-group>
            </template>
            <template v-else-if="form.ctype === 'input'">
              <el-input
                v-model="getValue[form.prop]"
                v-bind="form"
                :style="form.cstyle"
                @change="handleChange($event, form.callback)">
                <span v-if="form.prefix" slot="prefix" class="cc-mar-l-6">{{ form.prefix }}</span>
                <span v-if="form.suffix" slot="suffix" class="cc-mar-l-6">{{ form.suffix }}</span>
              </el-input>
            </template>
            <template v-else-if="form.ctype === 'input-number'">
              <el-input-number
                v-model="getValue[form.prop]"
                v-bind="form"
                :style="form.cstyle"
                @change="handleChange($event, form.callback)"/>
            </template>
            <template v-else-if="form.ctype === 'select'">
              <el-select
                v-model="getValue[form.prop]"
                v-bind="form"
                :style="form.cstyle"
                @change="handleChange($event, form.callback)">
                <el-option
                  v-for="select in form.list"
                  :key="select.name"
                  :label="form.propLabel ? select[form.propLabel] : select.label"
                  :value="form.propValue ? select[form.propValue] : select.value"
                  :style="select.cstyle || {}"/>
              </el-select>
            </template>
            <template v-else-if="form.ctype === 'cascader'">
              <el-cascader
                v-model="getValue[form.prop]"
                v-bind="form"
                :style="form.cstyle"
                @change="handleChange($event, form.callback)"/>
            </template>
            <template v-else-if="form.ctype === 'cascader-single'">
              <el-cascader
                ref="mySingleCascader"
                v-model="getValue[form.prop]"
                v-bind="form"
                :style="form.cstyle"
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
            <template v-else-if="form.ctype === 'switch'">
              <el-switch
                v-model="getValue[form.prop]"
                v-bind="form"
                :style="form.cstyle"
                @change="handleChange($event, form.callback)"/>
            </template>
            <template v-else-if="form.ctype === 'slider'">
              <el-slider
                v-model="getValue[form.prop]"
                v-bind="form"
                :style="form.cstyle"/>
            </template>
            <template v-else-if="form.ctype === 'timepicker'">
              <el-time-select
                v-model="getValue[form.prop]"
                v-bind="form"
                :style="form.cstyle"
                @change="handleChange($event, form.callback)"/>
            </template>
            <template v-else-if="form.ctype === 'datepicker'">
              <el-date-picker
                v-model="getValue[form.prop]"
                :type="form.mode || 'date'"
                v-bind="form"
                :style="form.cstyle"
                @change="handleChange($event, form.callback)"/>
            </template>
            <template v-else-if="form.ctype === 'empty'">
              <div v-bind="form" :style="form.cstyle"/>
            </template>
            <template v-else>
              <div>此组件无效</div>
            </template>
          </el-form-item>
          <template v-if="form.ctype === 'slot'">
            <slot :name="form.slot"/>
          </template>
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
      <!-- <slot name="ssss"/> -->
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
        forms: [],
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
      return this.option.forms.map((e, index) => {
        e.fid = 'sf_' + index + 1
        if (!e.placecholder && e.itemLabel) {
          e.placecholder = e.itemLabel + this.filterFormTyep(e.ctype)
        }
        return e
      })
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
      if (typeof key === 'object') {
        this.$set(this.option, 'value', key)
        return
      }
      this.$set(this.option.value, key, val)
    },

    setFormList(name, list) {
      this.setFormEdit(name, 'list', list)
    },

    setFormEdit(name, key, val) {
      if (this.option && this.option.forms) {
        this.option.forms.find(t => {
          if (t.prop === name) {
            if (t[key] === undefined) t[key] = null
            this.$set(t, key, val)
            return true
          }
        })
      } else {
        console.error('super query option form. error')
      }
    },

    getValues() {
      return this.getValue
    },

    getForm() {
      return this.$refs[this.option.ref]
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
    },

    filterFormTyep(type) {
      let tempTyep = {
        input: '请输入',
        select: '请选择',
        'input-number': '请输入'
      }
      return tempTyep[type] || ''
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
