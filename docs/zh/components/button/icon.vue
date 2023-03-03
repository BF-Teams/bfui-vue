<template>
  <div>
    <div style="margin-bottom: 8px;">纯图标按钮，两种方法效果相同：</div>
    <bf-button icon="bell" status="primary"></bf-button>
    <bf-button icon="bell" status="primary" type="outline"></bf-button>
    <bf-button icon="bell" type="text"></bf-button>
    <bf-button icon="bell" status="primary" round></bf-button>
    <bf-button icon="bell" status="primary" type="outline" round></bf-button>
    <bf-button icon="bell" type="text" round></bf-button>
    <br />
    <bf-button status="primary"><bf-icon name="bell"></bf-icon></bf-button>
    <bf-button status="primary" type="outline"><bf-icon name="bell"></bf-icon></bf-button>
    <bf-button type="text"><bf-icon name="bell"></bf-icon></bf-button>
    <bf-button status="primary" round><bf-icon name="bell"></bf-icon></bf-button>
    <bf-button status="primary" type="outline" round><bf-icon name="bell"></bf-icon></bf-button>
    <bf-button type="text" round><bf-icon name="bell"></bf-icon></bf-button>
    <br />
    <div style="margin: 10px 0;">图标在文字前面：</div>
    <bf-button icon="setting">设置</bf-button>
    <bf-button icon="loading" status="primary">加载</bf-button>
    <bf-button icon="bell" status="success">订阅</bf-button>
    <bf-button icon="experiment" status="warning">实验</bf-button>
    <bf-button icon="delete" status="danger">删除</bf-button>
    <br />
    <bf-button icon="setting" type="outline">设置</bf-button>
    <bf-button icon="loading" status="primary" type="outline">加载</bf-button>
    <bf-button icon="bell" status="success" type="outline">订阅</bf-button>
    <bf-button icon="experiment" status="warning" type="outline">实验</bf-button>
    <bf-button icon="delete" status="danger" type="outline">删除</bf-button>
    <br />
    <bf-button icon="setting" type="dashed">设置</bf-button>
    <bf-button icon="loading" status="primary" type="dashed">加载</bf-button>
    <bf-button icon="bell" status="success" type="dashed">订阅</bf-button>
    <bf-button icon="experiment" status="warning" type="dashed">实验</bf-button>
    <bf-button icon="delete" status="danger" type="dashed">删除</bf-button>
    <br />
    <bf-button icon="setting" type="text">设置</bf-button>
    <bf-button icon="loading" status="primary" type="text">加载</bf-button>
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
    <div style="margin: 10px 0;">图标在文字后面，注意请在文字后留空格：</div>
    <bf-button>设置 <bf-icon name="setting"></bf-icon></bf-button>
    <bf-button status="primary">加载 <bf-icon name="loading"></bf-icon></bf-button>
    <bf-button status="success">订阅 <bf-icon name="bell"></bf-icon></bf-button>
    <bf-button status="warning">实验 <bf-icon name="experiment"></bf-icon></bf-button>
    <bf-button status="danger">删除 <bf-icon name="delete"></bf-icon></bf-button>
    <br />
    <div style="margin: 10px 0;">两种方法结合，可以自定义文字前后图标的显示：</div>
    <bf-button icon="setting">展开</bf-button>
    <bf-button icon="setting">展开 <bf-icon name="unfold"></bf-icon></bf-button>
    <bf-button>更多 <bf-icon name="unfold"></bf-icon></bf-button>
  </div>
</template>

<script setup lang="ts">
import { BfButton, BfIcon } from '@bf-teams/bfui-vue';
</script>

<style lang="less" scoped>
.bf-button {
  margin-bottom: 10px;
}
</style>
