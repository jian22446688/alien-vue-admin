<template>
  <p class="c-table-title">{{ getTitle }}</p>
</template>
<script>
export default {
  computed: { getTitle() { return this.$route.meta.title } }
}
</script>
