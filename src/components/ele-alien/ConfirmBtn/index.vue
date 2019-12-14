<template>
  <el-popover v-model="visable" :width="width" placement="top">
    <p>{{ title }}</p>
    <div style="text-align: right; margin: 0">
      <el-button size="mini" type="text" @click="tipHandleCancel">{{ cancel }}</el-button>
      <el-button type="primary" size="mini" @click="tipHandleConfirm">{{ confirm }}</el-button>
    </div>
    <el-button slot="reference" :class="iconClass" type="text"/>
  </el-popover>
</template>

<script>
export default {
  name: 'ConfirmBtn',
  props: {
    title: {
      type: String,
      default: '是否删除？'
    },
    cancel: {
      type: String,
      default: '取消'
    },
    iconClass: {
      type: Object,
      default: null
    },
    confirm: {
      type: String,
      default: '确定'
    },
    width: {
      type: Number,
      default: 160
    },
    type: {
      type: String,
      default: 'default'
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
<style >
.c-icon-btn {
  font-size: 14px;
  color: #606266;
}
</style>
