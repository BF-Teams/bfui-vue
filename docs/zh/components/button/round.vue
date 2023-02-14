<template>
  <div>
    <bf-button>默认按钮</bf-button>
    <bf-button status="primary">主要按钮</bf-button>
    <bf-button status="success">成功按钮</bf-button>
    <bf-button status="warning">警告按钮</bf-button>
    <bf-button status="danger">危险按钮</bf-button>
    <br />
    <bf-button round>圆角按钮</bf-button>
    <bf-button status="primary" round>主要按钮</bf-button>
    <bf-button status="success" round>成功按钮</bf-button>
    <bf-button status="warning" round>警告按钮</bf-button>
    <bf-button status="danger" round>危险按钮</bf-button>
    <br />
    <bf-button type="outline" round>描边按钮</bf-button>
    <bf-button status="primary" type="outline" round>主要按钮</bf-button>
    <bf-button status="success" type="outline" round>成功按钮</bf-button>
    <bf-button status="warning" type="outline" round>警告按钮</bf-button>
    <bf-button status="danger" type="outline" round>危险按钮</bf-button>
    <br />
    <bf-button type="dashed" round>虚线按钮</bf-button>
    <bf-button status="primary" type="dashed" round>主要按钮</bf-button>
    <bf-button status="success" type="dashed" round>成功按钮</bf-button>
    <bf-button status="warning" type="dashed" round>警告按钮</bf-button>
    <bf-button status="danger" type="dashed" round>危险按钮</bf-button>
    <br />
    <bf-button type="text" round>文字按钮</bf-button>
    <bf-button status="primary" type="text" round>主要按钮</bf-button>
    <bf-button status="success" type="text" round>成功按钮</bf-button>
    <bf-button status="warning" type="text" round>警告按钮</bf-button>
    <bf-button status="danger" type="text" round>危险按钮</bf-button>
  </div>
</template>

<script setup lang="ts">
import { BfButton } from '@bf-teams/bfui-vue';
</script>

<style lang="less" scoped>
.bf-button {
  margin-bottom: 10px;
}
</style>
