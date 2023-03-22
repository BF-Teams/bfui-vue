# Grid 栅格

栅格是以规则的网格阵列来指导和规范网页中的版面布局以及信息分布，提高界面内布局的一致性，使页面排版美观、舒适。

我们的栅格化系统基于弹性布局来实现，将区域分成了 24 等份。

<script setup>
import Basic from './basic.vue'
import Span from './span.vue'
</script>

## 代码示例

### 基础用法

使用 `Row` 和 `Col` 组件，可以创建一个基本的栅格系统，`Col` 必须放在 `Row` 里面。

当不指定特定宽度时，所有的栅格将自然地平分并撑满每一行的空间，且默认高度相等。

<div class="demo-block">

<Basic></Basic>

::: details 查看代码
<<< @/zh/components/grid/basic.vue
:::

</div>


### 占位格数(span)

当你的需求不是等宽栅格的时候，可以通过在 `Col` 上使用 span 属性来设置栅格的占位格数，取值范围是 `0~24`，为 0 时相当于 `display: none`。

- 若每行中的 `栅格占位总数`＝ `24`，正好占满一行；
- 若每行中的 `栅格占位总数`＜ `24`，会有剩余空间；
- 若每行中的 `栅格占位总数`＞ `24`，会被挤成多行；

如果某行有剩余空间，并且存在没有指定宽度的自适应栅格，则它们将继续分配可用空间，如下方示例中加了 “auto” 标签的栅格。

<div class="demo-block">

<Span></Span>

::: details 查看代码
<<< @/zh/components/grid/span.vue
:::

</div>


## API

### Col Props

| 属性 Attribute | 说明 Description                            | 类型 Type | 默认值 Default |
| -------------- | ------------------------------------------- | --------- | -------------- |
| **span**       | 栅格占位格数，为 0 时相当于 `display: none;` | Number    | -              |
