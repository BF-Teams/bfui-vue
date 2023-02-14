<template>
  <div>
    <bf-button>默认按钮</bf-button>
    <bf-button status="primary">主要按钮</bf-button>
    <bf-button status="success">成功按钮</bf-button>
    <bf-button status="warning">警告按钮</bf-button>
    <bf-button status="danger">危险按钮</bf-button>
    <br />
    <bf-button type="outline">描边按钮</bf-button>
    <bf-button status="primary" type="outline">主要按钮</bf-button>
    <bf-button status="success" type="outline">成功按钮</bf-button>
    <bf-button status="warning" type="outline">警告按钮</bf-button>
    <bf-button status="danger" type="outline">危险按钮</bf-button>
    <br />
    <bf-button type="dashed">虚线按钮</bf-button>
    <bf-button status="primary" type="dashed">主要按钮</bf-button>
    <bf-button status="success" type="dashed">成功按钮</bf-button>
    <bf-button status="warning" type="dashed">警告按钮</bf-button>
    <bf-button status="danger" type="dashed">危险按钮</bf-button>
    <br />
    <bf-button type="text">文字按钮</bf-button>
    <bf-button status="primary" type="text">主要按钮</bf-button>
    <bf-button status="success" type="text">成功按钮</bf-button>
    <bf-button status="warning" type="text">警告按钮</bf-button>
    <bf-button status="danger" type="text">危险按钮</bf-button>
  </div>
</template>

<script setup lang="ts">
import { BfButton } from '@bf-teams/bfui-vue';
</script>

<style lang="less" scoped>
.bf-button + .bf-button {
  margin-bottom: 10px;
}
</style>
