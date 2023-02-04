# Button 按钮

常用的操作按钮。


结合其他组件库中该组件常用功能，我们初步拟定实现如下功能的开发：

### Button Props

| 属性 Props  | 说明                                                         | 类型    | 默认值    |
| ----------- | ------------------------------------------------------------ | ------- | --------- |
| **type**    | 设置按钮类型，控制边框样式，可选值为 `default`、 `primary`、` dashed`、`outline`、`text`，分别表现为：默认按钮、主要按钮、虚线按钮、描边按钮、文字按钮 | String  | `default` |
| **circle**  | 按钮形状是否圆角                                             | Boolean | `false`   |
| **size**    | 调节尺寸大小，可选值为 `small`、`default`、`large`           | String  | `default` |
| **disable** | 是否为禁用状态                                               | Boolean | `false`   |
| **icon**    | 设置按钮的图标                                               | String  | -         |
| **loading** | 是否为加载中状态（相当于disable属性 + icon属性）             | Boolean | `false`   |
| **status**  | 设置按钮状态，可选值为 `default` 、`primary`、`success`、`warning`、`danger`，后三者背景颜色分别为“绿黄红”。(若与color属性同时存在，此属性会失效) | String  | `default` |
| **color**   | 自定义按钮颜色，可选值参考css属性，支持颜色名称、十六进制值、rgb代码，也支持传入`linear-gradient`渐变色等。(此属性会覆盖status属性) | String  | -         |
| **ghost**   | 幽灵属性，使内容反色，背景透明，常用在有色背景上。           | Boolean | `false`   |

### Button Events

| 事件 Events | 说明           | 回调参数            |
| ----------- | -------------- | ------------------- |
| **click**   | 点击按钮时触发 | `event: MouseEvent` |

以上仅为初步设想，在开发过程中可能有所调整，此外按钮组功能暂不实现。
