# Dialog 对话框

在浮层中显示的弹出框，用于引导用户相关操作。

<script setup>
import TitleCenter from './center.vue'
import Size from './size.vue'
import Top from './top.vue'
import Blur from './blur.vue'
import Slots from './slots.vue'
</script>

## 代码示例

### 标题居中(center)

- 通过 `v-model:visible` 双向绑定对话框显示状态，通过 `title` 设置标题文字。
- 使用 `z-index` 设置层级，可以解决被页面其他元素遮挡的情况，默认值为 `100`。
- 使用 `center` 定义对话框的标题是否居中，默认左对齐。

<div class="demo-block">

<TitleCenter />

::: details 查看代码
<<< @/zh/components/dialog/center.vue
:::

</div>

### 对话框尺寸(size)

使用 size 定义对话框的尺寸，可选值为 `small`、`medium`、`large`，默认为 `small`。

- small：常用于内容简短的弹窗提示，或引导用户进行简单操作反馈。
- medium：常用于展示信息和进行稍复杂的交互，如登陆注册、编辑资料等。
- large：常用于展示大量内容或进行更复杂的交互，作用不亚于一个二级页面。

<div class="demo-block">

<Size />

::: details 查看代码
<<< @/zh/components/dialog/size.vue
:::

</div>

### 顶部距离(top)

如果感到对话框默认的居中位置有些偏下（尤其是对于 `size="small"` 类型的），这时可以使用 `top` 设置对话框距离页面顶部的距离，比如 `4vh`、`30px` 等。

<div class="demo-block">

<Top />

::: details 查看代码
<<< @/zh/components/dialog/top.vue
:::

</div>

### 背景模糊(blur)

通过 blur 属性设置遮罩层背景滤镜的模糊度(单位是 px)，默认值为 `0`，即不模糊。

<div class="demo-block">

<Blur />

::: details 查看代码
<<< @/zh/components/dialog/blur.vue
:::

</div>

### 使用插槽(slot)

通过使用具名插槽可以自定义对话框内容和样式。

- `headerRight`：对话框顶部右侧区域，可以放置按钮等。
- `main`：对话框主体区域，放置要展示或交互的元素内容。
- `footer`：对话框底部区域，可以放置操作按钮等。

<div class="demo-block">

<Slots />

::: details 查看代码
<<< @/zh/components/dialog/slots.vue
:::

</div>

## API

### Dialog Props

| 属性 Attribute | 说明 Description     | 类型 Type | 默认值 Default |
| -------------- | -------------------- | --------- | -------------- |
| **visible**    | 控制对话框是否显示   | Boolean   | `false`        |
| **title**      | 对话框标题           | String    | -              |
| **center**     | 对话框标题是否居中   | Boolean   | `false`        |
| **z-index**    | 对话框层级           | Number    | 100            |
| **top**        | 对话框距离顶部的距离 | String    | -              |

### Dialog Slots

| 插槽 Slot       | 说明 Description   |
| --------------- | ------------------ |
| **headerRight** | 自定义头部右侧区域 |
| **main**        | 自定义对话框内容   |
| **footer**      | 自定义页脚         |
