# 快速上手

::: tip
请等待稳定版本发布后再体验~
:::

## 全局引入

在项目的 `main.js` 或 `main.ts` 等入口文件中引入 BFUI 组件库全部组件：

```ts
import '@bf-teams/bfui-vue'; // 全局引入BFUI组件
import '@bf-teams/bfui-vue/theme'; // 全局引入BFUI主题
```

## 按需引入

以 Button 组建为例，具体组件的引入可查看相应组件演示代码：

```vue
<script setup lang="ts">
import { BfButton } from '@bf-teams/bfui-vue';
</script>
```

按需引入组件后同样需要在入口文件中引入 BFUI 主题：

```ts
// 根据需求自主选择
import '@bf-teams/bfui-vue/theme'; // 引入BFUI主题（包括light和dark）
import '@bf-teams/bfui-vue/theme/light'; // 只引入light主题
import '@bf-teams/bfui-vue/theme/dark'; // 只引入dark主题
```

## 主题定制

组件库内置了 `light` 和 `dark` 两款主题，可以实现基本的亮暗模式切换，请见 [Theme 主题](../contribution/design/theme/)。

- 如果对颜色和样式有修改的需求，可对相关 CSS 变量进行覆盖替换；
- 如需要大幅度自定义相关样式：
  1. 将 `node_modules/@bf-teams/bfui-vue/theme/dark` 主题目录复制到项目合适的位置；
  2. 起一个主题的名字，比如 “coffee”，然后将 `dark` 文件夹重命名为 `coffee` ；
  3. 将项目引入的 BFUI 主题替换为自定义的主题 `import '@/assets/theme/coffee';`；
  4. 根据需求修改 `coffee` 主题目录下的各种颜色和样式变量。
