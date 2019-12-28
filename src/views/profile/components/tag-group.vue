<!--
 * @Description: 标签组
 * @Author: Cary
 * @Date: 2019-12-07 14:23:19
 * @FilePath: f:\vue-project\alien-vue-admin\src\views\profile\components\tag-group.vue
 -->
<template>
  <div class="c-tag-box cc-mar-t-20">
    <div class="cc-tc-b">标签</div>
    <div class="cc-mar-t-10">
      <el-tag
        v-for="(item, i) in tempList"
        :key="i"
        class="tag-item"
        type="info">
        {{ item || '' }}
      </el-tag>
      <template v-if="isadd">
        <el-input
          v-if="isAdd"
          v-model="inputVal"
          class="c-tag-input"
          @keydown.enter.native="handleInputTagEnter"/>
        <el-button v-else class="c-tag-add" icon="el-icon-plus" @click="handleAddTag"/>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    list: {
      type: Array,
      default: () => []
    },
    isadd: {
      type: Boolean,
      default: () => true
    }
  },
  data() {
    return {
      isAdd: false,
      inputVal: '',
      tempList: []
    }
  },
  watch: {
    list(val) {
      this.tempList = val
    }
  },
  mounted() {
    this.tempList = this.list
  },
  methods: {
    handleAddTag() {
      this.isAdd = true
    },

    handleInputTagEnter() {
      if (this.inputVal === '') return
      if (Array.isArray(this.tempList)) {
        this.tempList.push(this.inputVal)
        this.$emit('change', this.tempList)
        this.inputVal = ''
        this.isAdd = false
      } else {
        throw new Error('tag-group list not Array')
      }
    }
  }
}

</script>
<style lang='scss'>
.c-tag-box {
  .tag-item {
    margin-bottom: 6px;
    margin-right: 6px;
  }
  .c-tag-add {
    padding: 4px 10px
  }
  .c-tag-input {
    width: 80px;
    input {
      margin-top: 2px;
      height: 24px;
      line-height: 24px;
    }
  }
}
</style>
