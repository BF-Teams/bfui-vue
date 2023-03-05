<template>
  <div>
    <bf-button status="normal" size="small">小型按钮</bf-button>
    <bf-button status="normal" size="small" type="outline">小型按钮</bf-button>
    <bf-button status="normal" size="small" round>小型按钮</bf-button>
    <bf-button status="normal" size="small" round type="outline">小型按钮</bf-button>
    <br />
    <bf-button status="normal" size="default">默认按钮</bf-button>
    <bf-button status="normal" type="outline">默认按钮</bf-button>
    <bf-button status="normal" round>默认按钮</bf-button>
    <bf-button status="normal" round type="outline">默认按钮</bf-button>
    <br />
    <bf-button status="normal" size="large">大型按钮</bf-button>
    <bf-button status="normal" size="large" type="outline">大型按钮</bf-button>
    <bf-button status="normal" size="large" round>大型按钮</bf-button>
    <bf-button status="normal" size="large" round type="outline">大型按钮</bf-button>
    <br />
  </div>
</template>

<script setup lang="ts">
import { BfButton } from '@bf-teams/bfui-vue';
</script>

<style lang="less" scoped>
.bf-button {
  margin-bottom: 15px;
}
</style>
