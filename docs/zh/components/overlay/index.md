# Overlay 遮罩层

创建一个遮罩层，用于强调特定的页面元素，并阻止用户进行其他操作。

<script setup>
import zIndex from './zIndex.vue'
import Blur from './blur.vue'
import Slots from './slots.vue'
</script>

## 代码示例

### 基础使用(visible)

- 遮罩层的显示与否通过 `v-model:visible` 进行双向绑定。
- 使用 `z-index` 属性设置层级，可以解决被页面其他元素遮挡的情况，默认值为`100`。
- 可以在遮罩层上通过 `@click.self` 绑定点击事件来实现关闭遮罩层的功能。其中 `.self` 是保证只在点击遮罩层元素本身时才会触发绑定的事件，而点击其内部嵌入的子元素时不触发该事件。

<div class="demo-block">

<zIndex />

::: details 查看代码
<<< @/zh/components/overlay/zIndex.vue
:::

</div>

### 背景模糊(blur)

通过 blur 属性设置遮罩层背景滤镜的模糊度(单位是 px)，默认值为 `0`，即不模糊。

<div class="demo-block">

<Blur />

::: details 查看代码
<<< @/zh/components/overlay/blur.vue
:::

</div>

### 使用插槽(slot)

- 通过 center 插槽 `<template v-slot:center></template>` 可以嵌入居中元素和内容。
- 不想元素居中的话，可以直接通过 default 默认插槽在遮罩层上嵌入任意内容，并自行定义样式，一般用于封装其他反馈组件。

<div class="demo-block">

<Slots />

::: details 查看代码
<<< @/zh/components/overlay/slots.vue
:::

</div>

:::tip

具名插槽有对应的简写形式，如 `<template v-slot:default>` 可以简写为 `<template #default>`

```vue
<bf-overlay v-model:visible="visible2" :z-index="100" @click.self="hideOverlay2">
  <template #default>
    <div style="padding: 20px; background: white; color: black;">
      通过 default 插槽嵌入任意内容，自行定义样式
    </div>
  </template>
</bf-overlay>
```

由于所有位于顶级的非 `<template>` 节点都被隐式地视为默认插槽的内容。所以使用默认 default 插槽可以不使用 `<template>` 标签包裹自定义元素，即下方写法的渲染效果相同：

```vue
<bf-overlay v-model:visible="visible2" :z-index="100" @click.self="hideOverlay2">
  <!-- 隐式的默认插槽 -->
  <div style="padding: 20px; background: white; color: black;">
    通过 default 插槽嵌入任意内容，自行定义样式
  </div>
</bf-overlay>
```

:::

## API

### Overlay Props

| 属性 Props  | 说明                        | 类型    | 默认值  |
| ----------- | --------------------------- | ------- | ------- |
| **visible** | 控制遮罩层是否显示          | Boolean | `false` |
| **blur**    | 设置遮罩层模糊度，单位是 px | Number  | `0`     |

### Overlay Slots

| 插槽 Slots  | 说明                           |
| ----------- | ------------------------------ |
| **center**  | 嵌入的元素自动居中             |
| **default** | 默认插槽，用于自定义元素和样式 |
