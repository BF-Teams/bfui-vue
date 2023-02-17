<template>
  <div>
    <bf-button>默认按钮</bf-button>
    <bf-button status="primary">主要按钮</bf-button>
    <bf-button status="success">成功按钮</bf-button>
    <bf-button status="warning">警告按钮</bf-button>
    <bf-button status="danger">危险按钮</bf-button>
    <br />
    <bf-button ghost>幽灵按钮</bf-button>
    <bf-button status="primary" ghost>幽灵按钮</bf-button>
    <bf-button status="success" ghost>幽灵按钮</bf-button>
    <bf-button status="warning" ghost>幽灵按钮</bf-button>
    <bf-button status="danger" ghost>幽灵按钮</bf-button>
    <br />
    <bf-button type="dashed" ghost>幽灵按钮</bf-button>
    <bf-button status="primary" type="dashed" ghost>幽灵按钮</bf-button>
    <bf-button status="success" type="dashed" ghost>幽灵按钮</bf-button>
    <bf-button status="warning" type="dashed" ghost>幽灵按钮</bf-button>
    <bf-button status="danger" type="dashed" ghost>幽灵按钮</bf-button>
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
