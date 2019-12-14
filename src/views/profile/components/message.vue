<!--
 * @Description: 安全设置
 * @Author: Cary
 * @Date: 2019-12-13 17:44:43
 * @FilePath: f:\vue-project\alien-vue-admin\src\views\profile\components\security.vue
 -->
<template>
  <div class="c-security-content">
    <div class="item">
      <div>
        <div class="title">
          陌生人私信
        </div>
        <div class="c-text-subheading cc-f-s14">
          未关注的人向您发私信时的通知
        </div>
      </div>
      <div class="control">
        <el-switch v-model="switch_1" />
      </div>
    </div>
    <el-divider class="cc-mar-t-20 cc-mar-b-20" />
    <div class="item">
      <div>
        <div class="title">
          允许添加好友
        </div>
        <div class="c-text-subheading cc-f-s14">
          是否允许陌生人添加好友
        </div>
      </div>
      <div class="control">
        <el-switch v-model="switch_2" />
      </div>
    </div>
    <el-divider class="cc-mar-t-20 cc-mar-b-20" />
    <div class="item">
      <div>
        <div class="title">
          邀请/评论消息
        </div>
        <div class="c-text-subheading cc-f-s14">
          有人对我发出邀请时，我会收到消息通知
        </div>
      </div>
      <div class="control">
        <el-switch v-model="switch_3" />
      </div>
    </div>
    <el-divider class="cc-mar-t-20 cc-mar-b-20" />
    <div class="item">
      <div>
        <div class="title">
          赞同/赞赏消息设置
        </div>
        <div class="c-text-subheading cc-f-s14">
          有人对我赞同或赞赏时，我会收到消息通知
        </div>
      </div>
      <div class="control">
        <el-switch v-model="switch_4" />
      </div>
    </div>
    <el-divider class="cc-mar-t-20 cc-mar-b-20" />
    <div class="item">
      <div>
        <div class="title">
          邮件设置
        </div>
        <div class="c-text-subheading cc-f-s14">
          重要事件发生时，我将会收到邮件提醒
        </div>
      </div>
      <div class="control">
        <el-switch v-model="switch_5" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      switch_1: false,
      switch_2: true,
      switch_3: false,
      switch_4: false,
      switch_5: true
    }
  },
  computed: {},
  mounted() {},
  methods: {}
}

</script>
<style lang='scss' scoped>
.c-security-content {
  padding: 10px 10px;
  .item {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-self: center;
    justify-content: space-between;
    margin: 10px 0;
    .title {
      color: #000000;
      margin-bottom: 10px;
    }
    .control {
      align-self: center;
    }
  }
}
</style>
