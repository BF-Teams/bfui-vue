<template>
  <div>
    <bf-button>默认按钮</bf-button>
    <bf-button status="normal">主要按钮</bf-button>
    <bf-button status="success">成功按钮</bf-button>
    <bf-button status="warning">警告按钮</bf-button>
    <bf-button status="danger">危险按钮</bf-button>
    <br />
    <bf-button type="outline">描边类型</bf-button>
    <bf-button status="normal" type="outline">描边类型</bf-button>
    <bf-button status="success" type="outline">描边类型</bf-button>
    <bf-button status="warning" type="outline">描边类型</bf-button>
    <bf-button status="danger" type="outline">描边类型</bf-button>
    <br />
    <bf-button type="dashed">虚线类型</bf-button>
    <bf-button status="normal" type="dashed">虚线类型</bf-button>
    <bf-button status="success" type="dashed">虚线类型</bf-button>
    <bf-button status="warning" type="dashed">虚线类型</bf-button>
    <bf-button status="danger" type="dashed">虚线类型</bf-button>
    <br />
    <bf-button type="text">文字类型</bf-button>
    <bf-button status="normal" type="text">文字类型</bf-button>
    <bf-button status="success" type="text">文字类型</bf-button>
    <bf-button status="warning" type="text">文字类型</bf-button>
    <bf-button status="danger" type="text">文字类型</bf-button>
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
