<template>
  <button
    @click="onClick"
    class="bf-button"
    :class="[
    `bf-button-status-${status}`,
    `bf-button-type-${type}`,
    `bf-button-size-${size}`,
    {
      'is-round': round,
      'is-circle': circle,
      'is-disabled': disabled,
      'is-loading': buttonLoading,
      'is-ghost': ghost,
      'is-block': block,
    },
  ]"
    :disabled="disabled"
  >
    <bf-icon class="bf-button_icon" v-if="buttonIcon" :name="buttonIcon" :spin="iconSpin" />
    <span class="bf-button_text" v-if="$slots.default">
      <slot></slot>
    </span>
  </button>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, watch, ref } from "vue"
import { BfIcon } from "@bf-teams/bfui-vue";

// props
const props = defineProps({
  status: { type: String, default: "default" },
  type: { type: String, default: "default" },
  ghost: { type: Boolean, default: false },
  round: { type: Boolean, default: false },
  circle: { type: Boolean, default: false },
  size: { type: String, default: "default" },
  disabled: { type: Boolean, default: false },
  icon: { type: String, default: "" },
  loading: { type: Boolean, default: false },
  block: { type: Boolean, default: false },
})

// data
const buttonIcon = ref(props.icon)
const buttonLoading = ref(props.loading)
const iconSpin = ref(false)

// watch props
watch(() => props.loading, (newVal) => {
  // console.log('传入的loading改变为：', newVal);
  if (newVal) {
    buttonLoading.value = true
    buttonIcon.value = 'loading'
    iconSpin.value = true
  } else {
    buttonLoading.value = false
    buttonIcon.value = props.icon
    iconSpin.value = false
  }
})

// emit
const emit = defineEmits(['click'])
// methods
const onClick = () => {
  emit('click')
}
</script>

<style lang="less" scoped>
@import "../style/button.less";
</style>
