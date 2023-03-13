<template>
  <Transition name="fade">
    <div
      class="bf-overlay"
      v-show="visible"
      :style="[{ backdropFilter: 'blur(' + blur + 'px)' }, { zIndex: zIndex }]"
    >
      <slot></slot>
      <div class="center-content" v-if="$slots.center">
        <slot name="center"></slot>
      </div></div
  ></Transition>
</template>

<script setup lang="ts">
import { watch } from 'vue';

// props
const props = defineProps({
  visible: {
    type: Boolean,
    default: false,
  },
  blur: {
    type: Number,
    default: 0,
  },
  zIndex: {
    type: Number,
    default: 100,
  },
})

// watch props
watch(() => props.visible, (newVal) => {
  // console.log('传入的visible改变为：', newVal);
  if (newVal) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = ''
  }
})

// emit
defineEmits(['update:visible'])
</script>

<style lang="less" scoped>
@import "../style/overlay.less";
</style>
