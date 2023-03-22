<template>
  <div class="bf-row">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
// props
defineProps({
  status: { type: String, default: "default" },
})
</script>

<style lang="less" scoped>
@import "../style/row.less";
</style>
