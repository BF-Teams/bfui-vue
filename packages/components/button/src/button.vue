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
    <bf-icons class="bf-button_icon" v-if="buttonIcon" :name="buttonIcon" :spin="iconSpin" />
    <span class="bf-button_text" v-if="$slots.default">
      <slot></slot>
    </span>
  </button>
</template>

<script lang="ts">
export default {
  name: 'BfButton',
};
</script>

<script setup lang="ts">
import { ref, watch } from "vue"
import BfIcons from "@bf-teams/bfui-vue/icon";

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
watch(() => props.loading, (isLoading) => {
  // 当传入的 loading 值为 true 时，修改为加载图标并旋转
  if (isLoading) {
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
  // 当按钮处于非禁用状态时，才抛出点击事件
  if (!props.disabled) {
    emit('click')
  }
}
</script>

<style lang="less" scoped>
@import "../style/button.less";
</style>
