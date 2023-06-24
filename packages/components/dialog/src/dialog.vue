<template>
  <div>
    <bf-overlay
      v-show="visible"
      :style="[{ zIndex: zIndex }]"
      @click.self="onClose"
      :blur="blur"
    ></bf-overlay>

    <Transition name="bounce">
      <div
        class="bf-dialog_wrap"
        v-if="visible"
        :style="[{ zIndex: zIndex }]"
        @click.self="onClose"
      >
        <div
          class="bf-dialog"
          :class="[
      `bf-dialog-size-${size}`,
    ]"
          :style="[{ zIndex: zIndex }, { position: 'fixed' }, { top: top }]"
        >
          <div class="bf-dialog_layout">
            <div class="bf-dialog_header">
              <div class="header_left">
                <bf-button
                  @click="onClose"
                  icon="close"
                  type="text"
                  circle
                  style="width: 36px; height: 36px;"
                ></bf-button>
              </div>
              <div class="header_center" :style="{ textAlign: center ? 'center' : 'left' }">
                <div class="bf-dialog_title">{{ title }}</div>
              </div>
              <div class="header_right">
                <slot name="headerRight"></slot>
              </div>
            </div>

            <div class="bf-dialog_main">
              <slot name="main"></slot>
            </div>
            <div class="bf-dialog_footer">
              <slot name="footer"></slot>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script lang="ts">
export default {
  name: 'BfDialog',
};
</script>

<script setup lang="ts">
import { watch } from 'vue';

// props
const props = defineProps({
  visible: {
    type: Boolean,
    default: false,
  },
  title: {
    type: String,
    default: "",
  },
  center: {
    type: Boolean,
    default: false,
  },
  size: {
    type: String,
    default: "small",
  },
  zIndex: {
    type: Number,
    default: 100,
  },
  top: {
    type: String,
    default: "auto",
  },
  blur: {
    type: Number,
    default: 0,
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
const emits = defineEmits(['update:visible'])

// methods
const onClose = () => {
  emits('update:visible', false)
}
</script>

<style lang="less" scoped>
@import "../style/dialog.less";
</style>
