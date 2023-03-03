# Button 按钮

常用的操作按钮。

<script setup>
import Status from './status.vue'
import Type from './type.vue'
import Round from './round.vue'
import Size from './size.vue'
import Disabled from './disabled.vue'
import Icon from './icon.vue'
import Ghost from './ghost.vue'
</script>


## 代码示例

### 按钮状态(status)

使用 status 来定义按钮的状态，对应不同的按钮颜色。

支持 `default`、`primary`、`success`、`warning`、`danger` 五种状态，默认为 `default`。

<div class="demo-block">

<Status />

::: details 查看代码
<<< @/zh/components/button/status.vue{3-7,12}
:::

</div>

::: tip 提示
若与 `color` 属性同时存在，`status` 属性会失效。
:::


### 按钮类型(type)

使用 type 来定义按钮的类型，对应不同的边框样式。

支持 `default`、`outline`、`dashed`、`text` 四种类型，默认为 `default`。

<div class="demo-block">

<Type />

::: details 查看代码
<<< @/zh/components/button/type.vue{3-7,9-13,15-19,21-25,30}
:::

</div>


### 按钮形状(round)

使用 round 来定义按钮的形状，设置按钮是否圆角。

<div class="demo-block">

<Round />

::: details 查看代码
<<< @/zh/components/button/round.vue
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

对于纯图标按钮，两种方法的效果相同，唯一区别是后者需要确保引入 Icon 组件。

<div class="demo-block">

<Icon />

::: details 查看代码
<<< @/zh/components/button/icon.vue
:::

</div>

### 加载按钮(loading)

使用 loading 来定义按钮是否处于加载中。


### 自定义颜色(color)

使用 color 来自定义按钮的颜色，目前仅支持16进制颜色代码。

### 幽灵按钮(ghost)

使用 ghost 来定义按钮是否为幽灵按钮。

幽灵按钮与描边按钮相像，但是背景透明，常用于有色背景上。

<div class="demo-block">

<Ghost />

::: details 查看代码
<<< @/zh/components/button/ghost.vue
:::

</div>



## API

结合其他组件库中该组件常用功能，我们将逐步实现如下功能的开发。

### Button Props

| 属性 Props  | 说明                                                                                                                                                     | 类型 Type | 默认值 Default |
| ----------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | -------------- |
| **status**  | 设置按钮状态（按钮颜色），<br />可选值为 `primary`、`success`、`warning`、`danger`，<br />(若与 color 属性同时存在，此属性会失效)                        | String    | `default`      |
| **type**    | 设置按钮类型（边框样式），<br />可选值为 `outline`、`dashed`、`text`，<br />分别表现为：描边按钮、虚线按钮、文字按钮                                     | String    | `default`      |
| **round**  | 设置按钮形状（是否圆角）                                                                                                                                 | Boolean   | `false`        |
| **size**    | 调节尺寸大小，<br />可选值为 `small`、`default`、`large`                                                                                                 | String    | `default`      |
| **disabled** | 是否为禁用状态                                                                                                                                           | Boolean   | `false`        |
| **icon**    | 设置按钮的图标                                                                                                                                           | String    | -              |
| **loading** | 是否为加载中状态<br />(相当于 disabled 属性 + icon 属性)                                                                                               | Boolean   | `false`        |
| **color**   | 自定义按钮颜色，<br />可选值参考 css 属性，支持颜色名称、十六进制值、rgb 代码，也支持传入`linear-gradient`渐变色等。<br />(此属性会覆盖住 status 属性) | String    | -              |
| **ghost**   | 幽灵属性，使内容反色，背景透明，常用在有色背景上。                                                                                                       | Boolean   | `false`        |

### Button Events

| 事件 Events | 说明           | 回调参数            |
| ----------- | -------------- | ------------------- |
| **click**   | 点击按钮时触发 | `event: MouseEvent` |

以上仅为初步设想，在开发过程中可能有所调整，此外按钮组功能暂不实现。
