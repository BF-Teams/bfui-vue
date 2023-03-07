# Overlay 遮罩层

创建一个遮罩层，用于强调特定的页面元素，并阻止用户进行其他操作。

<script setup>
import zIndex from './zIndex.vue'
import slots from './slots.vue'
</script>

## 代码示例

### 基础使用

- 遮罩层的显示与否通过 `v-model:visible` 进行双向绑定。
- 使用 `z-index` 属性设置层级，可以解决被页面其他元素遮挡的情况，默认值为`100`。
- 可以在遮罩层上通过 `@click.self` 绑定点击事件来实现关闭遮罩层的功能。其中 `.self` 是保证只在点击遮罩层元素本身时才会触发绑定的事件，而点击其内部嵌入的子元素时不触发该事件。

<div class="demo-block">

<zIndex />

::: details 查看代码
<<< @/zh/components/overlay/zIndex.vue
:::

</div>


### 嵌入内容

- 通过center插槽 `<template v-slot:center></template>` 可以嵌入居中元素和内容。
- 不想元素居中的话，可以直接通过默认插槽在遮罩层上嵌入任意内容，一般用于封装其他反馈组件。使用默认插槽无需用 `<template>` 标签包裹自定义元素。

<div class="demo-block">

<slots />

::: details 查看代码
<<< @/zh/components/overlay/slots.vue
:::

</div>
