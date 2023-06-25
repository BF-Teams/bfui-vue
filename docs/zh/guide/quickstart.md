# 快速上手

如果您是通过包管理器安装，并希望配合打包工具使用，本节将介绍如何在项目中使用 BFUI。

## 全局引入

### 1. 完整导入

如果您的项目大规模使用 BFUI 组件库提供的组件，使用完整导入的方式更为方便，它会将所有组件注册为全局组件，使您在任何 Vue 实例中皆可使用。但是由于会在构建时将组件库的所有组件都打包到输出中，会使产物体积偏大。

在项目的 `main.js` 或 `main.ts` 等入口文件中全局引入 BFUI 组件库全部组件、完整主题样式，并通过 `app.use()` 注册为全局组件：

```ts:line-numbers{5-6,13}
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

import BFUI from '@bf-teams/bfui-vue'; // 完整导入BFUI
import '@bf-teams/bfui-vue/theme'; // 完整导入BFUI主题

import './assets/main.css';

const app = createApp(App);

app.use(router);
app.use(BFUI); // 全局注册BFUI

app.mount('#app');
```

### 2. 按需导入

如果您对打包产物大小有严格的要求，可以通过按需引入具体组件的方式来使用，这种方式只在需要时才将组件打包到输出中。

使用按需导入的方式，您仍需在项目引入组件库的全局样式变量（选择其一即可）：

```ts
import '@bf-teams/bfui-vue/theme'; // 完整导入BFUI主题（包括light和dark）
import '@bf-teams/bfui-vue/theme/light'; // 只导入light主题
import '@bf-teams/bfui-vue/theme/dark'; // 只导入dark主题
```

#### (1) 手动按需导入

借助 Webpack 或 Rollup 等支持 [Tree Shaking](https://webpack.js.org/guides/tree-shaking/) 特性的构建工具，可以达到按需引入的使用效果。

```ts:line-numbers{5,8-10}
import { createApp } from 'vue';
import App from './app.vue';

// 手动按需导入BFUI
import { BfButton, BfCol, BfRow } from '@bf-teams/bfui-vue';

// 全局注册已导入的组件
app.use(BfButton);
app.use(BfCol);
app.use(BfRow);
```

#### (2) 自动按需导入

首先你需要安装 `unplugin-vue-components` 和 `unplugin-auto-import` 这两款插件。

::: code-group

```sh [npm]
npm install -D unplugin-vue-components unplugin-auto-import
```

```sh [pnpm]
pnpm add -D unplugin-vue-components unplugin-auto-import
```

```sh [yarn]
yarn add -D unplugin-vue-components unplugin-auto-import
```

:::

此功能暂未实现，有需要的话可参考 [Element-Plus](https://element-plus.gitee.io/zh-CN/guide/quickstart.html#自动导入-推荐) 的处理方式。

## 局部引入

以 Button 组件为例，通过模块化的方式导入：

```vue:line-numbers{10}
<template>
  <bf-button>默认按钮</bf-button>
  <bf-button status="normal">主要按钮</bf-button>
  <bf-button status="success">成功按钮</bf-button>
  <bf-button status="warning">警告按钮</bf-button>
  <bf-button status="danger">危险按钮</bf-button>
</template>

<script setup lang="ts">
import { BfButton } from '@bf-teams/bfui-vue';
</script>
```

或者直接通过组件的路径导入：

```vue:line-numbers{10}
<template>
  <bf-button>默认按钮</bf-button>
  <bf-button status="normal">主要按钮</bf-button>
  <bf-button status="success">成功按钮</bf-button>
  <bf-button status="warning">警告按钮</bf-button>
  <bf-button status="danger">危险按钮</bf-button>
</template>

<script setup lang="ts">
import BfButton from '@bf-teams/bfui-vue/button'
</script>
```
