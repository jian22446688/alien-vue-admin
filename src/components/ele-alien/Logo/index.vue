<template>
  <div class="logo">
    <!-- <img src="@/assets/404_images/404.png" alt=""> -->
    <!-- <img src="@/assets/logo.png" alt=""> -->
    <router-link to="/">
      <img src="@/assets/logo3.png" alt="">
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'Name',
  components: {},
  data() {
    return {
    }
  },

  computed: {},

  watch: {
  },
  mounted() {},
  methods: {}
}

</script>
<style lang='scss' scoped>
  .logo {
    display: inline-block;
    width: 100%;
    height: 32px;
    text-align: center;
    img {
      height: 32px;
    }
  }
</style>
