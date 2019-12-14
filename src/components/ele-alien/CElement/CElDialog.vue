<!--
 * @Description: 自定义的弹出框
 * @Author: Cary
 * @Date: 2019-09-21 15:42:32
 -->
<template>
  <transition
    name="el-zoom-in-bottom"
    @after-enter="afterEnter"
    @after-leave="afterLeave">
    <div
      v-show="visible"
      class="c-c-el-dialog el-dialog__wrapper"
      @click.self="handleWrapperClick">
      <div
        ref="dialog"
        :key="key"
        role="dialog"
        aria-modal="true"
        :aria-label="title || 'dialog'"
        :class="['el-dialog', { 'is-fullscreen': fullscreen, 'el-dialog--center': center }, customClass]"
        :style="style">
        <div class="el-dialog__header">
          <slot name="title">
            <span class="el-dialog__title">{{ title }}</span>
          </slot>
          <button
            v-if="showClose"
            type="button"
            class="el-dialog__headerbtn"
            aria-label="Close"
            @click="handleClose">
            <i class="el-dialog__close el-icon el-icon-close"/>
          </button>
        </div>
        <div v-if="rendered" class="el-dialog__body">
          <el-scrollbar
            ref="scrollbar"
            tag="div"
            :view-style="{ maxHeight: '500px' }"
            :noresize="false">
            <slot/>
          </el-scrollbar>
        </div>
        <div v-if="$slots.footer" class="el-dialog__footer">
          <slot name="footer"/>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import Popup from 'element-ui/src/utils/popup'
import Migrating from 'element-ui/src/mixins/migrating'
import emitter from 'element-ui/src/mixins/emitter'

export default {
  name: 'CElDialog',

  mixins: [Popup, emitter, Migrating],

  props: {
    title: {
      type: String,
      default: ''
    },

    modal: {
      type: Boolean,
      default: true
    },

    modalAppendToBody: {
      type: Boolean,
      default: true
    },

    appendToBody: {
      type: Boolean,
      default: false
    },

    lockScroll: {
      type: Boolean,
      default: true
    },

    closeOnClickModal: {
      type: Boolean,
      default: true
    },

    closeOnPressEscape: {
      type: Boolean,
      default: true
    },

    showClose: {
      type: Boolean,
      default: true
    },

    width: String,

    fullscreen: Boolean,

    customClass: {
      type: String,
      default: ''
    },

    top: {
      type: String,
      default: ''
    },
    beforeClose: Function,
    center: {
      type: Boolean,
      default: false
    },

    destroyOnClose: Boolean
  },

  data() {
    return {
      closed: false,
      key: 0
    }
  },
  computed: {
    style() {
      let style = {}
      if (!this.fullscreen) {
        style.marginTop = this.top
        style.marginBottom = this.bottom
        if (this.width) {
          style.width = this.width
        }
      }
      return style
    }
  },
  watch: {
    visible(val) {
      if (val) {
        this.closed = false
        this.$emit('open')
        this.$el.addEventListener('scroll', this.updatePopper)
        this.$nextTick(() => {
          this.$refs.dialog.scrollTop = 0
        })
        if (this.appendToBody) {
          document.body.appendChild(this.$el)
        }
      } else {
        this.$el.removeEventListener('scroll', this.updatePopper)
        if (!this.closed) this.$emit('close')
        if (this.destroyOnClose) {
          this.$nextTick(() => {
            this.key++
          })
        }
      }
    }
  },
  mounted() {
    if (this.visible) {
      this.rendered = true
      this.open()
      if (this.appendToBody) {
        document.body.appendChild(this.$el)
      }
    }
  },
  destroyed() {
    // if appendToBody is true, remove DOM node after destroy
    if (this.appendToBody && this.$el && this.$el.parentNode) {
      this.$el.parentNode.removeChild(this.$el)
    }
  },
  methods: {
    getMigratingConfig() {
      return {
        props: {
          'size': 'size is removed.'
        }
      }
    },
    handleWrapperClick() {
      if (!this.closeOnClickModal) return
      this.handleClose()
    },
    handleClose() {
      if (typeof this.beforeClose === 'function') {
        this.beforeClose(this.hide)
      } else {
        this.hide()
      }
    },
    hide(cancel) {
      if (cancel !== false) {
        this.$emit('update:visible', false)
        this.$emit('close')
        this.closed = true
      }
    },
    updatePopper() {
      this.broadcast('ElSelectDropdown', 'updatePopper')
      this.broadcast('ElDropdownMenu', 'updatePopper')
    },
    afterEnter() {
      this.$emit('opened')
    },
    afterLeave() {
      this.$emit('closed')
    }
  }
}
</script>
