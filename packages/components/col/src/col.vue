<template>
  <div class="bf-col" :class="colClass">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

// props
const props = defineProps({
  span: { type: Number },
})

// computed
const colClass = computed(() => {
  const classes: string[] = []
  // 注意 JavaScript 中数字 0 也等于 false
  if (props.span || props.span === 0) {
    classes.push(`bf-col-${props.span}`)
  }

  return classes
})
</script>

<style lang="less" scoped>
@import "../style/col.less";
</style>
