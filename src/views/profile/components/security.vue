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
          账户密码
        </div>
        <div class="c-text-subheading cc-f-s14">
          绑定手机和邮箱，并设置密码，帐号更安全
        </div>
      </div>
      <div class="control">
        <el-link :underline="false" type="primary">修改</el-link>
      </div>
    </div>
    <el-divider class="cc-mar-t-20 cc-mar-b-20" />
    <div class="item">
      <div>
        <div class="title">
          绑定QQ
        </div>
        <div class="c-text-subheading cc-f-s14">
          绑定QQ和邮箱，并设置密码，帐号更安全
        </div>
      </div>
      <div class="control">
        <el-link :underline="false" type="primary">修改</el-link>
      </div>
    </div>
    <el-divider class="cc-mar-t-20 cc-mar-b-20" />
    <div class="item">
      <div>
        <div class="title">
          绑定邮箱
        </div>
        <div class="c-text-subheading cc-f-s14">
          绑定邮箱，帐号更安全
        </div>
      </div>
      <div class="control">
        <el-link :underline="false" type="primary">修改</el-link>
      </div>
    </div>
    <el-divider class="cc-mar-t-20 cc-mar-b-20" />
    <div class="item">
      <div>
        <div class="title">
          绑定微信
        </div>
        <div class="c-text-subheading cc-f-s14">
          绑定微信实时接收账号动态
        </div>
      </div>
      <div class="control">
        <el-link :underline="false" type="primary">修改</el-link>
      </div>
    </div>
    <el-divider class="cc-mar-t-20 cc-mar-b-20" />
    <div class="item">
      <div>
        <div class="title">
          绑定手机
        </div>
        <div class="c-text-subheading cc-f-s14">
          已绑定手机号：136****6841
        </div>
      </div>
      <div class="control">
        <el-link :underline="false" type="primary">修改</el-link>
      </div>
    </div>
    <el-divider class="cc-mar-t-20 cc-mar-b-20" />
    <div class="item">
      <div>
        <div class="title">
          密保问题
        </div>
        <div class="c-text-subheading cc-f-s14">
          未设置密保问题，密保问题可有效保护账户安全
        </div>
      </div>
      <div class="control">
        <el-link :underline="false" type="primary">修改</el-link>
      </div>
    </div>
    <el-divider class="cc-mar-t-20 cc-mar-b-20" />
    <div class="item">
      <div>
        <div class="title">
          个性域名
        </div>
        <div class="c-text-subheading cc-f-s14">
          已绑定域名：iview.design
        </div>
      </div>
      <div class="control">
        <el-link :underline="false" type="primary">修改</el-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
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
