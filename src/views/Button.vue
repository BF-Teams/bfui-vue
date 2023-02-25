<template>
  <div class="play">
    <h2>Button组件运行测试</h2>
    <br />

    <bf-button>默认按钮</bf-button>
    <bf-button status="primary">主要按钮</bf-button>
    <bf-button status="success">成功按钮</bf-button>
    <bf-button status="warning">警告按钮</bf-button>
    <bf-button status="danger">危险按钮</bf-button>

    <br /><br />

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

    <br /><br />

    <bf-button @click="fn">默认按钮</bf-button>
    <bf-button icon="setting" disabled>加载中</bf-button>
    <bf-button icon="loading" disabled>禁止使用</bf-button>

    <br /><br />

    <h2>Icon组件运行测试</h2>
    <br />
    <bf-icon name="setting" />
    <bf-icon name="experiment" />
    <bf-icon name="bell" />
    <bf-icon name="loading" />
  </div>
</template>

<script setup lang="ts">
import { BfButton, BfIcon } from '@bf-teams/bfui-vue';
// import '@bf-teams/bfui-vue';

function fn() {
  console.log('123');
}
</script>

<style lang="less" scoped>
// 相邻按钮
.bf-button + .bf-button {
  margin-left: 10px;
  margin-bottom: 5px;
}
</style>
