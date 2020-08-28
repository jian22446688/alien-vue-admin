<!--
 * @Description: 文件及简介
 * @Author: Cary
 * @Date: 2020-01-17 15:48:11
 * @FilePath: \excel-to-jsonf:\vue-project\vue-admin-se\src\components\CDeltip\index.vue
 -->
<template>
  <el-popover v-model="visable" :width="width" placement="top">
    <p>{{ title }}</p>
    <div style="text-align: right; margin: 0">
      <el-button size="mini" type="text" @click="tipHandleCancel">{{ cancel }}</el-button>
      <el-button type="primary" size="mini" @click="tipHandleConfirm">{{ confirm }}</el-button>
    </div>
    <slot slot="reference" />
  </el-popover>
</template>

<script>
export default {
  name: 'CCBtnTip',
  props: {
    title: {
      type: String,
      default: '是否删除？'
    },
    cancel: {
      type: String,
      default: '取消'
    },
    confirm: {
      type: String,
      default: '确定'
    },
    width: {
      type: Number,
      default: 160
    }
  },
  data() {
    return {
      visable: false
    }
  },
  methods: {
    tipHandleConfirm(evt) {
      this.visable = false
      this.$emit('confirm', evt)
    },
    tipHandleCancel(evt) {
      this.visable = false
      this.$emit('cancel', evt)
    }
  }
}
</script>
<style lang='scss' scoped>
.c-icon-btn {
  font-size: 14px;
  color: #000;
}
</style>
