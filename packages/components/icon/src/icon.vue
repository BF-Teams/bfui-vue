<template>
  <svg class="bf-icon" :class="{ 'is-spin': spin, }" aria-hidden="true">
    <use :xlink:href="'#icon-' + name"></use>
  </svg>
</template>

<script setup lang="ts">
// props
defineProps({
  name: { type: String, default: '' },
  spin: { type: Boolean, defaute: false }
})
</script>

<style lang="less" scoped>
@import "../style/icon.less";
</style>
