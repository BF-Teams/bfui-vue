<template>
  <div class="bf-row" :style="rowStyle">
    <slot></slot>
  </div>
</template>

<script lang="ts">
export default {
  name: 'BfRow',
};
</script>

<script setup lang="ts">
import { computed, provide } from 'vue';
import type { CSSProperties } from 'vue';

// props
const props = defineProps({
  gutter: { type: Number, default: 0 },
})

// provide
provide(
  'gutter', props.gutter
)

// computed
const rowStyle = computed(() => {
  const styles: CSSProperties = {}
  // 注意 JavaScript 中数字 0 也等于 false
  if (props.gutter) {
    styles.marginLeft = styles.marginRight = `-${props.gutter / 2}px`
  }

  return styles
})
</script>

<style lang="less" scoped>
@import "../style/row.less";
</style>
