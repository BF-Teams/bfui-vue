<template>
  <div class="bf-col" :class="colClass" :style="colStyle">
    <slot></slot>
  </div>
</template>

<script lang="ts">
export default {
  name: 'BfCol',
};
</script>

<script setup lang="ts">
import { computed, inject } from 'vue';
import type { CSSProperties } from 'vue';

// props
const props = defineProps({
  span: { type: Number },
})

// inject
const gutter = Number(inject('gutter'))

// computed
const colClass = computed(() => {
  const classes: string[] = []
  // 注意 JavaScript 中数字 0 也等于 false
  if (props.span || props.span === 0) {
    classes.push(`bf-col-${props.span}`)
  }

  return classes
})

const colStyle = computed(() => {
  const styles: CSSProperties = {}
  // 注意 JavaScript 中数字 0 也等于 false
  if (gutter) {
    styles.paddingLeft = styles.paddingRight = `${gutter / 2}px`
  }

  return styles
})
</script>

<style lang="less" scoped>
@import "../style/col.less";
</style>
