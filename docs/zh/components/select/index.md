# Select 选择器

下拉选择器用于展示一组相关联的数据选项集合，用户可以从中选择内容。

<script setup>
import Size from './size.vue'
</script>

## 代码示例

### 选择器尺寸(size)

使用 size 来定义选择器尺寸，支持 `default`、`small` 和 `mini`。

<div class="demo-block">

<Size />

::: details 查看代码

<<< @/zh/components/select/size.vue

:::

</div>

## API

### Select Props

| 属性 Attribute | 说明 Description          | 类型 Type | 默认值 Default |
| -------------- | ------------------------- | --------- | -------------- |
| **size**       | 选择器尺寸                | String    | `default`      |
| **width**      | 选择器宽度                | String    | `260px`        |
| **height**     | 选择器高度                | String    | `30px`         |
| **options**    | 选择器                    | Array     | `[]`           |
| **labelFiled** | 默认需要显示的 label 字段 | String    | `label`        |
| **valueFiled** | 默认需要显示的 value 字段 | String    | `value`        |
| **multiple**   | 是否多选                  | Boolean   | `false`        |
