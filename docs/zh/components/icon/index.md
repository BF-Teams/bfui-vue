# Icon 图标

Icon 作为 UI 构成中重要的元素，一定程度上影响 UI 界面整体呈现出的风格。

<script setup>
import Type from './type.vue'
import Theme from './theme.vue'
import Size from './size.vue'
import Fill from './fill.vue'
import Spin from './spin.vue'
import StrokeWidth from './strokeWidth.vue'
import StrokeLinecap from './strokeLinecap.vue'
import StrokeLinejoin from './strokeLinejoin.vue'
import IconList from './iconList.vue'
</script>

## 使用方法

### 安装图标组件包

图标相对其他基础组件较为独立，你需要安装 [`@icon-park/vue-next`](https://www.npmjs.com/package/@icon-park/vue-next) 图标组件包：

:::code-group

```sh [npm]
npm install @icon-park/vue-next --save
```

```sh [pnpm]
pnpm add @icon-park/vue-next
```

```sh [yarn]
yarn add @icon-park/vue-next
```

:::

### 引入图标样式

图标组件的使用方式和 BFUI 相似，可以按情况选择 **全局注册** 或 **局部注册**。

无论选择何种注册方式，别忘了都需要在项目的 `main.js` 或 `main.ts` 等入口文件中引入图标库样式（整个项目只需引入一次）：

```ts
import '@icon-park/vue-next/styles/index.css'; // 引入IconPark图标库样式
```

:::tip

使用图标有两种方式，你可以选择使用「**具名 Icon 组件**」，或者选择更加灵活的「万能 **Icon 组件**」，你只能选择其中一种使用方式。每种使用方式又可以选择“全局引入”还是“局部引入”。

| 对比 | 使用具名 Icon 组件                                                       | 使用万能 Icon 组件                                                             |
| ---- | ------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| 优点 | 可以选择按需引入，减少打包体积；<br />也可以选择全部引入，提升开发效率； | 可以任意指定图标名称，代码比较灵活；<br />图标代码书写一致，视觉上也比较统一； |
| 缺点 | 代码比较固定，灵活性较小；                                               | 使用该组件就是全部引入，产物体积偏大；                                         |

:::

### 1. 使用具名 Icon 组件

> 如果对要使用的图标名称很确定，可以使用具名的 Icon 组件，也就是写成固定代码。使用这种方式的好处是你可以选择按需导入，减小打包体积。

#### (1) 全局注册

如果项目中对图标的使用量较大，还是推荐全部引入并注册安装。虽然我们建议按需加载图标，因为这样可以大大减少编译代码量，但是直接引用所有图标可以让你在项目的 Vue 实例中直接使用具名 Icon 组件，从而降低开发成本、节省开发时间、提升开发效率：

```ts:line-numbers{7-8,13}
import {createApp} from 'vue';
import App from './App.vue';

import BFUI from '@bf-teams/bfui-vue'; // 完整导入BFUI
import '@bf-teams/bfui-vue/theme'; // 完整导入BFUI主题

import { install } from '@icon-park/vue-next/es/all'; // 引入IconPark图标库 // [!code focus]
import '@icon-park/vue-next/styles/index.css'; // 引入IconPark图标库样式 // [!code focus]

const app = createApp(App);

app.use(BFUI); // 全局注册BFUI
install(app, 'bf-icon'); // 全局注册IconPark图标库 // [!code focus]

app.mount('#app');
```

然后就可以直接在 Vue 中使用，如 `home` 图标：

```vue:line-numbers
<template>
  <div>
    <bf-icon-home theme="filled" /> // [!code focus]
    <bf-icon-thumbs-up theme="outline" /> // [!code focus]
    <bf-icon-setting-two theme="outline" /> // [!code focus]
  </div>
</template>
```

#### (2) 局部注册

如果对图标的使用量较小，或者对打包产物大小有严格的要求，可以手动按需引入：

```vue:line-numbers{10-14}
<template>
  <div>
    <bf-icon-home theme="filled" /> // [!code focus]
    <bf-icon-thumbs-up theme="outline" /> // [!code focus]
    <bf-icon-setting-two theme="outline" /> // [!code focus]
  </div>
</template>

<script setup lang="ts">
import { // [!code focus]
  Home as BfIconHome, // [!code focus]
  ThumbsUp as BfIconThumbsUp, // [!code focus]
  SettingTwo as BfIconSettingTwo // [!code focus]
} from '@icon-park/vue-next'; // [!code focus]
</script>
```

### 2. 使用万能 Icon 组件

> 如果对要使用的图标名称无法提前确定（如远程动态加载菜单等的场景下），或者不想将代码写成固定的，你应该使用下面的万能 Icon 组件，而不是去使用上面的具名 Icon 组件。

#### (1) 全局注册

你可以在项目的入口文件中（如 `main.ts`、`main.js`），**全局引入** 并注册 Icon 组件，它提供了用于指定图标名称的 type 属性：

```ts:line-numbers
import {createApp} from 'vue';
import App from './App.vue';
import {install} from '@icon-park/vue-next/es/all';

import BFUI from '@bf-teams/bfui-vue'; // 完整导入BFUI
import '@bf-teams/bfui-vue/theme'; // 完整导入BFUI主题

//import { install } from '@icon-park/vue-next/es/all'; // 引入IconPark图标库 // [!code --]
import { IconPark as BfIcon } from '@icon-park/vue-next/es/all'; // 引入Icon组件 // [!code focus] // [!code ++]
import '@icon-park/vue-next/styles/index.css'; // 引入IconPark图标库样式

const app = createApp(App);

app.use(BFUI); // 全局注册BFUI
// install(app, 'bf-icon'); // 全局注册IconPark图标库 // [!code --]
app.component('bf-icon', BfIcon); // 全局注册Icon组件 // [!code focus] // [!code ++]

app.mount('#app');
```

#### (2) 局部注册

你也可以直接在 Vue 文件中 **局部引入** 并使用：

```vue:line-numbers{3-4,9}
<template>
  <div>
    <bf-icon type="MessageEmoji" /> // [!code focus]
    <bf-icon type="message-emoji" /> // [!code focus]
  </div>
</template>

<script setup lang="ts">
import { IconPark as BfIcon } from '@icon-park/vue-next/es/all'; // [!code focus]
</script>
```

## 代码示例

以下示例代码均使用「**万能 Icon 组件**」的方式，如果您选择「**具名 Icon 组件**」的方式，只需将示例代码稍作变化即可。

### 图标名称(type)

使用 type 属性来为万能 Icon 组件指定图标名称，其大小和颜色默认继承自外部容器。

<div class="demo-block">

<Type />

::: details 查看代码
<<< @/zh/components/icon/type.vue
:::

</div>

### 图标风格(theme)

使用 theme 属性来指定图标的风格，可以是以下四种风格，默认为 `outline`：

<div class="demo-block">

<Theme />

::: details 查看代码
<<< @/zh/components/icon/theme.vue
:::

</div>

### 图标大小(size)

图标大小默认继承自外部容器，但是可以通过 size 属性进行设置，值为数字或字符串。

- 当为数字时，单位是 `px`；

- 当为字符串时，可以自行指定单位，如 `2em` 等；

<div class="demo-block">

<Size />

::: details 查看代码
<<< @/zh/components/icon/size.vue
:::

</div>

### 描边颜色(fill)

图标颜色默认继承自外部容器，但是可以通过 fill 属性进行设置，值为字符串或字符串数组。

- 当图标风格(theme)为 **线性 outline** 时，可接收一个颜色字符串，

  如 `fill="#333"`，表示描边颜色；

- 当图标风格(theme)为 **填充 filled** 时，可接收一个颜色字符串，

  如 `fill="#333"`，表示填充颜色；

- 当图标风格(theme)为 **双色 two-tone** 时，可接收两个颜色字符串组成的数组，

  如 `:fill="['#333' ,'#2F88FF']"`，表示描边颜色、填充颜色；

- 当图标风格(theme)为 **多色 multi-color** 时，可接收四个颜色字符串组成的数组，

  如 `:fill="['#333' ,'#2F88FF' ,'#FFF' ,'#43CCF8']"`，表示外部描边颜色、外部填充颜色、内部描边颜色、内部填充颜色；

<div class="demo-block">

<Fill />

::: details 查看代码
<<< @/zh/components/icon/fill.vue
:::

</div>

### 是否旋转(spin)

使用 spin 来定义是否使用动画旋转图标，为 `true` 时每秒顺时针自旋 360 度。

<div class="demo-block">

<Spin />

::: details 查看代码
<<< @/zh/components/icon/spin.vue
:::

</div>

### 线段粗细(strokeWidth)

在 SVG 中，此属性用于设置形状边框的宽度。单位为像素，数值越大，边框越粗。

这里用于控制图标线条的笔触宽度，最小为 `1`，默认为 `4`。

<div class="demo-block">

<StrokeWidth />

::: details 查看代码
<<< @/zh/components/icon/strokeWidth.vue
:::

</div>

### 端点类型(strokeLinecap)

在 SVG 中，此属性用于设置在开放子路径的末尾使用的笔触形状。

这里用于指定图标线条的端点样式，可以是以下三种类型，默认为 round。

- `'butt'`：方头端点，线条端点与路径的端点重合，没有任何延伸或收缩；

- `'round'`：圆头端点，线条端点是圆形的，会根据线条的宽度和高度进行缩放；

- `'square'`：平头端点，线条端点是方形的，会根据线条的宽度和高度进行缩放，并在端点处添加一个垂直向下的线段；

<div class="demo-block">

<StrokeLinecap />

::: details 查看代码
<<< @/zh/components/icon/strokeLinecap.vue
:::

</div>

### 拐点类型(strokeLinejoin)

在 SVG 中，此属性用于设置两条描边线交界处的形状。

这里用于指定图标线条在连接处的形状，可以是以下三种类型，默认为 round。

- `'miter'`：方头节点，两个线条在连接处以尖角相交，内角和外角的距离由 miterLimit 属性控制；

- `'round'`：圆头节点，两个线条在连接处以圆角相交，半径等于线条的宽度；

- `'bevel'`：平头节点，两个线条在连接处以斜接的形式相交，内角和外角都会被截断，不会产生斜角；

<div class="demo-block">
<StrokeLinejoin />

::: details 查看代码
<<< @/zh/components/icon/strokeLinejoin.vue
:::

</div>

## 图标列表

::: tip

下方为所有图标列表，推荐前往 [IconPark](https://iconpark.oceanengine.com/official) 筛选和定制图标，以及调整各参数值。

:::

<IconList />

## API

### Icon Props

| 属性 Attribute     | 说明 Description | 类型 Type                                                    | 默认值 Default   |
| ------------------ | ---------------- | ------------------------------------------------------------ | ---------------- |
| **type**           | 图标名称         | String                                                       | -                |
| **theme**          | 图标风格（颜色） | 线性：`'outline'`<br />填充：`'filled'`<br />双色：`'two-tone'` <br />多色：`'multi-color'` | `'outline'`      |
| **size**           | 图标大小         | `number/string `                                             | `'1em'`          |
| **fill**           | 描边颜色         | `string/string[]`                                            | `'currentColor'` |
| **spin**           | 使用动画旋转图标 | Boolean                                                      | `false`          |
| **strokeWidth**    | 线段粗细         | number                                                       | 4                |
| **strokeLinecap**  | 端点类型         | 方头端点：`'butt'`；<br />圆头端点：`'round'`；<br />平头端点：`'square'`； | `'round'`        |
| **strokeLinejoin** | 拐点类型         | 方头节点：`'miter'`；<br />圆头节点：`'round'`；<br />平头节点：`'bevel'`； | `'round'`        |
