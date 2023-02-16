<template>
  <div>
    <bf-button status="primary" size="small">小型按钮</bf-button>
    <bf-button status="primary" size="small" type="outline">小型按钮</bf-button>
    <bf-button status="primary" size="small" round>小型按钮</bf-button>
    <bf-button status="primary" size="small" round type="outline">小型按钮</bf-button>
    <br />
    <bf-button status="primary" size="default">默认按钮</bf-button>
    <bf-button status="primary" type="outline">默认按钮</bf-button>
    <bf-button status="primary" round>默认按钮</bf-button>
    <bf-button status="primary" round type="outline">默认按钮</bf-button>
    <br />
    <bf-button status="primary" size="large">大型按钮</bf-button>
    <bf-button status="primary" size="large" type="outline">大型按钮</bf-button>
    <bf-button status="primary" size="large" round>大型按钮</bf-button>
    <bf-button status="primary" size="large" round type="outline">大型按钮</bf-button>
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
