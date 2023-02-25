<template>
  <svg class="bf-icon" :class="{'is-spin': spin,}" aria-hidden="true">
    <use :xlink:href="'#icon-' + name"></use>
  </svg>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
// import "./iconfont"

export default defineComponent({
  name: "BfIcon",
  props: {
    name: {
      type: String,
      default: '',
    },
    spin: {
      type: Boolean,
      defaute: false,
    }
  },
  setup() {
  }

})
</script>

<style lang="less" scoped>
@import "../style/icon.less";
</style>
