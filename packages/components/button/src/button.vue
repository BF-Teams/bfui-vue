<template>
  <button
    class="bf-button"
    :class="[
    `bf-button-status-${status}`,
    `bf-button-type-${type}`,
    `bf-button-size-${size}`,
    {
      'is-round': round,
      'is-disabled': disabled,
      'is-loading': loading,
      'is-ghost': ghost,
    },
  ]"
    :disabled="disabled"
    @click="handleClick"
  >
    <i v-if="icon" :class="icon"></i>
    <!-- i和span之间要有间隙，如果没有span就没有间隙，所以做一下判断 -->
    <!-- $slots.default：可以得到使用的插槽 -->
    <span v-if="$slots.default">
      <slot></slot>
    </span>
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: "BfButton",
  props: {
    status: {
      type: String,
      default: "default",
    },
    type: {
      type: String,
      default: "default",
    },
    round: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
      default: "default",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    icon: {
      type: String,
      default: "",
    },
    loading: {
      type: Boolean,
      default: false,
    },
    color: {
      type: String,
      default: "default",
    },
    ghost: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['click'],
  setup(props, { emit }) {
    props.type // <-- 类型：string
    emit('click') // <-- 类型检查 / 自动补全

    const handleClick = function (e: Event) {
      this.$emit("click", e);
    }

    return {
      handleClick
    }
  }
});
</script>

<style lang="less" scoped>
@import '../style/button.less';
</style>
