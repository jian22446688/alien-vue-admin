<template>
  <el-popover v-model="visable" :width="width" placement="top">
    <p>{{ title }}</p>
    <div style="text-align: right; margin: 0">
      <el-button size="mini" type="text" @click="tipHandleCancel">{{ cancel }}</el-button>
      <el-button type="primary" size="mini" @click="tipHandleConfirm">{{ confirm }}</el-button>
    </div>
    <el-button
      slot="reference"
      :style="btnStyle"
      :type="type"
      :size="size"
      :class="iconClass"
      @click="handleClick">
      <slot/>
    </el-button>
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
    btnStyle: {
      type: Object,
      default: null
    },
    iconClass: {
      type: Object,
      default: null
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
    },
    type: {
      type: String,
      default: 'default'
    },
    size: {
      type: String,
      default: ''
    },
    icon: {
      type: String,
      default: ''
    },
    nativeType: {
      type: String,
      default: 'button'
    }
  },
  data() {
    return {
      visable: false
    }
  },
  methods: {
    handleClick(evt) {
      this.$emit('click', evt)
    },
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
