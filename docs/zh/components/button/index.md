# Button 按钮

常用的操作按钮。

<script setup>
import Status from './status.vue'
import Ghost from './ghost.vue'
import Type from './type.vue'
import Round from './round.vue'
import Circle from './circle.vue'
import Size from './size.vue'
import Disabled from './disabled.vue'
import DisabledTest from './disabledTest.vue'
import Icon from './icon.vue'
import Loading from './loading.vue'
import Block from './block.vue'
import Custom from './custom.vue'
</script>

## 代码示例

### 按钮状态(status)

使用 status 来定义按钮的状态，对应不同的按钮颜色。

可选值为 `normal`、`success`、`warning`、`danger` 四种状态，默认为 `default`。

其中默认按钮字体颜色继承自外部容器。

<div class="demo-block">

<Status />

::: details 查看代码
<<< @/zh/components/button/status.vue{3-7,12}
:::

</div>

### 按钮类型(type)

使用 type 来定义按钮的类型，对应不同的边框样式。

可选值为 `outline`、`dashed`、`text` 三种类型，默认为 `default`。

其中文字类型的按钮也是有背景色的，只是没有边框。想要没有背景色的文字按钮请通过 ghost 属性定义成幽灵按钮。

<div class="demo-block">

<Type />

::: details 查看代码
<<< @/zh/components/button/type.vue{3-7,9-13,15-19,21-25,30}
:::

</div>

### 幽灵按钮(ghost)

使用 ghost 来定义按钮是否为幽灵按钮。

幽灵按钮背景透明，默认字体颜色继承自外部容器，常用于有色背景上。

<div class="demo-block">

<Ghost />

::: details 查看代码
<<< @/zh/components/button/ghost.vue
:::

</div>

### 按钮尺寸(size)

使用 size 来定义按钮的尺寸大小。

支持 `small`、`default`、`large` 三种尺寸，默认为 `default`。

<div class="demo-block">

<Size />

::: details 查看代码
<<< @/zh/components/button/size.vue
:::

</div>

### 圆角按钮(round)

使用 round 来定义按钮是否圆角。

<div class="demo-block">

<Round />

::: details 查看代码
<<< @/zh/components/button/round.vue
:::

</div>

### 圆形按钮(circle)

使用 circle 来定义设置按钮是否为圆形，常用于图标按钮或单字符按钮。

注意 round 与 circle 的不同之处，前者并不是正圆形。

<div class="demo-block">

<Circle />

::: details 查看代码
<<< @/zh/components/button/circle.vue
:::

</div>

### 禁用按钮(disabled)

使用 disabled 来定义按钮是否被禁用。

<div class="demo-block">

<Disabled />

::: details 查看代码
<<< @/zh/components/button/disabled.vue
:::

</div>


### 图标按钮(icon)

可以使用 Button 组件的 icon 属性来定义图标，也可以直接在 Button 内放置 Icon 组件。

- 对于纯图标按钮，两种方法的效果相同；
- 对于文字图标按钮，使用后者需要在文字后手动添加空格，以确保文字与图标的间距。

<div class="demo-block">

<Icon />

::: details 查看代码
<<< @/zh/components/button/icon.vue
:::

</div>

### 加载按钮(loading)

使用 loading 来定义按钮是否处于加载中。

<div class="demo-block">

<Loading />

::: details 查看代码
<<< @/zh/components/button/loading.vue
:::

</div>

### 宽按钮(block)

Block 按钮在宽度上充满其所在的父容器，常见于移动端和一些表单场景中。

<div class="demo-block">

<Block />

::: details 查看代码
<<< @/zh/components/button/block.vue
:::

</div>

### 自定义样式

考虑到按钮的背景、文字、悬浮和点击样式都会影响按钮的整体美观性，故不再提供单独参数来定义按钮颜色。如有需求，请直接通过 CSS 控制按钮颜色或其他样式。

简单样式可以在 `style` 属性直接采用内联写法，复杂样式就通过内嵌和外部 CSS 来实现。发挥创造力可以实现渐变色、方形、圆角矩形、流光动画等更复杂样式按钮。如果某样式未生效可能是由于优先级不足，可尝试添加 `!important` 提高应用优先权。

<div class="demo-block">

<Custom />

::: details 查看代码
<<< @/zh/components/button/custom.vue
:::

</div>

## API

### Button Props

| 属性 Props   | 说明                                                         | 类型 Type | 默认值 Default |
| ------------ | ------------------------------------------------------------ | --------- | -------------- |
| **status**   | 设置按钮状态（按钮颜色），<br />可选值为 `normal`、`success`、`warning`、`danger` | String    | `default`      |
| **type**     | 设置按钮类型（边框样式），<br />可选值为 `outline`、`dashed`、`text`，<br />分别表现为：描边按钮、虚线按钮、文字按钮 | String    | `default`      |
| **ghost**    | 幽灵属性，使内容反色，背景透明，常用在有色背景上。           | Boolean   | `false`        |
| **size**     | 调节尺寸大小，<br />可选值为 `small`、`default`、`large`     | String    | `default`      |
| **round**    | 设置按钮是否圆角                                             | Boolean   | `false`        |
| **circle**   | 设置按钮是否为圆形                                           | Boolean   | `false`        |
| **disabled** | 是否为禁用状态                                               | Boolean   | `false`        |
| **icon**     | 设置按钮的图标                                               | String    | -              |
| **loading**  | 是否为加载中状态<br />(相当于 disabled 属性 + icon 属性)     | Boolean   | `false`        |
| **block**    | 是否为块级元素，宽度将撑满父容器                             | Boolean   | `false`        |

### Button Events

| 事件 Events | 说明           | 回调参数            |
| ----------- | -------------- | ------------------- |
| **click**   | 点击按钮时触发 | `event: MouseEvent` |
