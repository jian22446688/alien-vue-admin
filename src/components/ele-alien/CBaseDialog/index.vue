<!--
 * @Description: 所有的有内容的弹出框基础组件
 * @Author: Cary
 * @Date: 2019-11-06 14:23:53
 * @FilePath: \alien-docsf:\vue-project\vue-admin-se\src\components\CBaseDialog\index.vue
 -->
<template>
  <el-dialog
    top="20vh"
    custom-class="cc-base-dialog"
    :title="option.title"
    :visible.sync="dialogVisible"
    :width="option.width"
    :destroy-on-close="true"
    :close-on-click-modal="false"
    :before-close="handleBeforeClose"
    @close="handleClose">
    <el-scrollbar
      ref="scrollbar"
      tag="div"
      wrap-class="cc-base-dialog__wrap"
      :noresize="true">
      <div style="padding-right: 10px;">
        <slot/>
      </div>
    </el-scrollbar>
    <span v-if="isfooter" slot="footer" class="dialog-footer">
      <el-button @click="handleCancel">{{ cancelButtonText }}</el-button>
      <el-button
        type="primary"
        :loading="confirmButtonLoading"
        @click="handleConfirm">
        {{ confirmButtonLoading ? confirmButtonLoadingText : confirmButtonText }}
      </el-button>
    </span>
  </el-dialog>
</template>

<script>
export default {
  name: 'CBaseDialog',

  components: {},

  props: {
    value: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: '提示'
    },
    width: {
      type: String,
      default: '420px',
      validator: (val) => {
        return ['420px', '820px', '960px'].indexOf(val) !== -1
      }
    },
    isfooter: {
      type: Boolean,
      default: true
    },
    close: {
      type: Function,
      default: () => {},
      required: true
    }
  },

  data() {
    return {
      dialogVisible: false,
      option: {
        title: this.title || '提示',
        width: this.width || '420px'
      },
      cancelButtonText: '取消',
      confirmButtonText: '确定',
      confirmButtonLoadingText: '请求中...',
      confirmButtonLoading: false,
      mh: '530px'
    }
  },

  watch: {
    value(val) {
      this.dialogVisible = val
    }
  },
  mounted() {
    this.dialogVisible = this.value
  },
  methods: {

    handleClose() {
      this.$emit('input', this.dialogVisible)
    },

    handleBeforeClose(done) {
      done()
      this.close && this.close('close', this, this.doClose)
    },

    handleCancel() {
      this.close && this.close('cancel', this, this.doClose)
    },

    handleConfirm() {
      this.close && this.close('confirm', this, this.doClose)
    },

    doClose() {
      if (!this.dialogVisible) return
      this.dialogVisible = false
      this.$emit('input', this.dialogVisible)
    },

    setButtonLoading(loading) {
      this.confirmButtonLoading = loading
    }
  }
}

</script>
<style lang='scss'>
.cc-base-dialog {
  .el-dialog__footer {
    padding: 10px 15px;
    padding-top: 0px;
  }
  .el-dialog__headerbtn {
    top: 15px;
  }
  .el-dialog__header {
    padding: 15px 15px
  }
  .el-dialog__body {
    position: relative;
    padding: 10px 15px;
    padding-top: 0px;
    color: #606266;
    font-size: 14px;
  }
}
.cc-base-dialog__wrap {
  max-height: 630px
}
</style>
