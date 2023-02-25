# Select 选择器

用于从一组相关联的数据集合中进行选择。

<script setup>
import Size from './size.vue'
</script>

## 代码示例

### 选择器尺寸(name)

使用 size 来定义选择器尺寸，支持 `default`、`small` 和 `mini`。

<div class="demo-block">

<Size />

::: details 查看代码

<<< @/zh/components/select/size.vue

:::

</div>



## API

| 属性 Props     | 说明                      | 类型 Type | 默认值 Default |
| -------------- | ------------------------- | --------- | -------------- |
| **size**       | 选择器尺寸                | String    | `default`      |
| **width**      | 选择器宽度                | String    | `260px`        |
| **height**     | 选择器高度                | String    | `30px`         |
| **options**    | 选择器                    | Array   | `[]`        |
| **labelFiled** | 默认需要显示的 label 字段 | String   | `label`        |
| **valueFiled** | 默认需要显示的 value 字段 | String   | `value`        |
| **multiple**   | 是否多选                  | Boolean   | `false`        |
