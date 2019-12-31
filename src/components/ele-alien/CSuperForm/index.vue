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
            v-bind="form">
            <template v-if="form.type === 'radio'">
              <el-radio-group
                v-if="form.list"
                v-model="getValue[form.prop]"
                v-bind="form"
                @change="handleChange($event, form.callback)">
                <el-radio
                  v-for="radio in form.list"
                  :key="radio.label"
                  v-bind="radio">{{ radio.label }}</el-radio>
              </el-radio-group>
            </template>
            <template v-else-if="form.type === 'radio-button'">
              <el-radio-group
                v-if="form.list"
                v-model="getValue[form.prop]"
                v-bind="form"
                @change="handleChange($event, form.callback)">
                <el-radio-button
                  v-for="radio in form.list"
                  :key="radio.lable"
                  v-bind="radio"/>
              </el-radio-group>
            </template>
            <template v-else-if="form.type === 'checkbox'">
              <el-checkbox-group
                v-if="form.list"
                v-model="getValue[form.prop]"
                v-bind="from"
                @change="handleChange($event, form.callback)">
                <el-checkbox
                  v-for="checkbox in form.list"
                  :key="checkbox.label"
                  v-bind="checkbox">{{ checkbox.text || '' }}</el-checkbox>
              </el-checkbox-group>
              <div v-else style="line-height: 30px;">
                <el-checkbox
                  v-model="getValue[form.prop]"
                  v-bind="form">
                  {{ form.label }}
                </el-checkbox>
              </div>
            </template>
            <template v-else-if="form.type === 'checkbox-button'">
              <el-checkbox-group
                v-if="form.list"
                v-model="getValue[form.prop]"
                v-bind="form"
                @change="handleChange($event, form.callback)">
                <el-checkbox-button
                  v-for="checkbox in form.list"
                  :key="checkbox.lable"
                  v-bind="checkbox"/>
              </el-checkbox-group>
            </template>
            <template v-else-if="form.type === 'input'">
              <el-input
                v-model="getValue[form.prop]"
                v-bind="form"/>
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
                v-bind="form"
                @change="handleChange($event, form.callback)">
                <el-option
                  v-for="select in form.list"
                  :key="select.name"
                  v-bind="form"/>
              </el-select>
            </template>
            <template v-else-if="form.type === 'cascader'">
              <el-cascader
                v-model="getValue[form.prop]"
                v-bind="form"
                @change="handleChange($event, form.callback)"/>
            </template>
            <template v-else-if="form.type === 'cascader-single'">
              <el-cascader
                ref="mySingleCascader"
                v-model="getValue[form.prop]"
                v-bind="form"
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
                v-bind="form"
                @change="handleChange($event, form.callback)"/>
            </template>
            <template v-else-if="form.type === 'slider'">
              <el-slider
                v-model="getValue[form.prop]"
                v-bind="form"/>
            </template>
            <template v-else-if="form.type === 'timepicker'">
              <el-time-select
                v-model="getValue[form.prop]"
                v-bind="form"
                @change="handleChange($event, form.callback)"/>
            </template>
            <template v-else-if="form.type === 'datepicker'">
              <el-date-picker
                v-model="getValue[form.prop]"
                :type="form.mode || 'date'"
                v-bind="form"
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
