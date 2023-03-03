<template>
  <div>
    <bf-overlay></bf-overlay>
    <div class="bf-dialog_wrap">
      <div class="bf-dialog">
        <div class="bf-dialog_header">
          <div class="bf-dialog_title">{{ title }}</div>
          <bf-button round icon="close"></bf-button>
        </div>
        <div class="bf-dialog_body"></div>
        <div class="bf-dialog_footer">
          <bf-button>取消</bf-button>
          <bf-button status="primary">确认</bf-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent} from 'vue'
import BfOverlay from '@bf-teams/bfui-vue/overlay'
import BfButton from '@bf-teams/bfui-vue/button';

export default defineComponent({
  name: "BfDialog",
  components: {
    BfOverlay,
    BfButton,
  },
  props: {
    title: {
      type: String,
      default: "",
    },
    type: {
      type: String,
      default: "default",
    },
  },
  // setup(props, { emit }) {
  // },
});
</script>

<style lang="less" scoped>
@import "../style/dialog.less";
</style>
