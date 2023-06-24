# Icon 图标

Icon 作为UI构成中重要的元素，一定程度上影响UI界面整体呈现出的风格。

<script setup>
import Name from './name.vue'
import Spin from './spin.vue'
</script>

## 代码示例

### 图标名称(name)

使用 name 名称来选择图标，大小和颜色继承自容器样式。

<div class="demo-block">

<Name />

::: details 查看代码
<<< @/zh/components/icon/name.vue
:::

</div>

### 是否旋转(spin)

使用 spin 来定义图标是否自旋转。

<div class="demo-block">

<Spin />

::: details 查看代码
<<< @/zh/components/icon/spin.vue
:::

</div>

## 图标列表

::: tip
常用图标库正在完善挑选中，稍后发布所收录的全部图标名称，尽请期待~
:::

## API

### Icon Props

| 属性 Attribute | 说明 Description | 类型 Type | 默认值 Default |
| -------------- | ---------------- | --------- | -------------- |
| **name**       | 图标名称         | String    | -              |
| **spin**       | 是否自旋转       | Boolean   | `false`        |
