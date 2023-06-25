<template>
  <div class="play">
    <h2>Button组件运行测试</h2>
    <br />

    <bf-button @click="onClick">默认按钮</bf-button>
    <bf-button status="normal">主要按钮</bf-button>
    <bf-button status="success">成功按钮</bf-button>
    <bf-button status="warning">警告按钮</bf-button>
    <bf-button status="danger">危险按钮</bf-button>

    <br /><br />

    <bf-button type="outline">描边按钮</bf-button>
    <bf-button status="normal" type="outline">主要按钮</bf-button>
    <bf-button status="success" type="outline">成功按钮</bf-button>
    <bf-button status="warning" type="outline">警告按钮</bf-button>
    <bf-button status="danger" type="outline">危险按钮</bf-button>
    <br />
    <bf-button type="dashed">虚线按钮</bf-button>
    <bf-button status="normal" type="dashed">主要按钮</bf-button>
    <bf-button status="success" type="dashed">成功按钮</bf-button>
    <bf-button status="warning" type="dashed">警告按钮</bf-button>
    <bf-button status="danger" type="dashed">危险按钮</bf-button>
    <br />
    <bf-button type="text">文字按钮</bf-button>
    <bf-button status="normal" type="text">主要按钮</bf-button>
    <bf-button status="success" type="text">成功按钮</bf-button>
    <bf-button status="warning" type="text">警告按钮</bf-button>
    <bf-button status="danger" type="text">危险按钮</bf-button>

    <br /><br />

    <h2>图标按钮运行测试</h2>
    <br />

    <bf-button icon="bell" status="normal"></bf-button>
    <bf-button icon="bell" status="normal" type="outline"></bf-button>
    <bf-button icon="bell" type="text"></bf-button>
    <bf-button icon="bell" status="normal" round></bf-button>
    <bf-button icon="bell" status="normal" type="outline" round></bf-button>
    <bf-button icon="bell" type="text" round></bf-button>
    <br />
    <bf-button icon="setting">设置</bf-button>
    <bf-button icon="loading" status="normal">加载</bf-button>
    <bf-button icon="bell" status="success">订阅</bf-button>
    <bf-button icon="experiment" status="warning">实验</bf-button>
    <bf-button icon="delete" status="danger">删除</bf-button>
    <br />
    <bf-button icon="setting" type="outline">设置</bf-button>
    <bf-button icon="loading" status="normal" type="outline">加载</bf-button>
    <bf-button icon="bell" status="success" type="outline">订阅</bf-button>
    <bf-button icon="experiment" status="warning" type="outline">实验</bf-button>
    <bf-button icon="delete" status="danger" type="outline">删除</bf-button>
    <br />
    <bf-button icon="setting" type="dashed">设置</bf-button>
    <bf-button icon="loading" status="normal" type="dashed">加载</bf-button>
    <bf-button icon="bell" status="success" type="dashed">订阅</bf-button>
    <bf-button icon="experiment" status="warning" type="dashed">实验</bf-button>
    <bf-button icon="delete" status="danger" type="dashed">删除</bf-button>
    <br />
    <bf-button icon="setting" type="text">设置</bf-button>
    <bf-button icon="loading" status="normal" type="text">加载</bf-button>
    <bf-button icon="bell" status="success" type="text">订阅</bf-button>
    <bf-button icon="experiment" status="warning" type="text">实验</bf-button>
    <bf-button icon="delete" status="danger" type="text">删除</bf-button>
    <br />
    <bf-button icon="setting" disabled>设置</bf-button>
    <bf-button icon="loading" disabled>加载</bf-button>
    <bf-button icon="bell" disabled>订阅</bf-button>
    <bf-button icon="experiment" disabled>实验</bf-button>
    <bf-button icon="delete" disabled>删除</bf-button>
    <br />
    <bf-button icon="setting">展开 <bf-icon name="unfold"></bf-icon></bf-button>
    <bf-button>更多 <bf-icon name="unfold"></bf-icon></bf-button>
  </div>
</template>

<script setup lang="ts">
// 通过模块化的方式导入
// import { BfButton } from '@bf-teams/bfui-vue';
// import { BfIcon } from '@bf-teams/bfui-vue';

// 或者直接通过组件的路径导入
// import BfButton from '@bf-teams/bfui-vue/button'
// import BfIcon from '@bf-teams/bfui-vue/icon'

// methods
const onClick = () => {
  console.log('您点击了按钮')
}
</script>

<style lang="less" scoped>
.play {
  padding-bottom: 200px;

  .bf-button {
    margin-left: 10px;
    margin-bottom: 6px;
  }
}
</style>
