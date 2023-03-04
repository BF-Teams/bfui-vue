<template>
  <div>
    <bf-overlay v-show="visible"></bf-overlay>
    <div class="bf-dialog_wrap" v-show="visible">
      <div class="bf-dialog">
        <div class="bf-dialog_header">
          <div class="bf-dialog_title">{{ title }}</div>
          <bf-button icon="close" type="text" round></bf-button>
        </div>
        <div class="bf-dialog_body" :style="{ textAlign: center ? 'center' : 'left' }">
          <div class="bf-dalog_content">确定跳转到文档首页？</div>
        </div>
        <div class="bf-dialog_footer">
          <bf-button>取消</bf-button>
          <bf-button status="primary">确定</bf-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import BfOverlay from '@bf-teams/bfui-vue/overlay'
import BfButton from '@bf-teams/bfui-vue/button';

export default defineComponent({
  name: "BfDialog",
  components: {
    BfOverlay,
    BfButton,
  },
  props: {
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
  },
  setup() {
    // props, { emit }
    // const onCancel = (context) => {
    //   console.log('点击了取消按钮', context);
    // };
  },
});
</script>

<style lang="less" scoped>
@import "../style/dialog.less";
</style>
