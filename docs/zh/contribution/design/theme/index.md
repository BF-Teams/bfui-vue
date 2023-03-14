# Theme 主题

我们将组件中部分 **颜色和样式变量** 抽离到了 theme 文件夹中，方便开发者覆盖和扩展。

## 实现原理

我们使用 CSS 变量，结合 `:root` 选择器匹配文档根元素，通过为 html 标签更换不同的 class 类名来实现主题样式的切换。

```js
// 添加类值
document.documentElement.classList.add("dark")

// 移除类值
document.documentElement.classList.remove("dark")
```

## 内置主题

BFUI 内置了 `light` 和 `dark` 两款主题模式，默认显示 light 模式。

每个主题放在单独的目录中，结构一致，只是其中的颜色和样式变量不同：

```sh
# 组件库
components
  ├─ theme/ # 主题目录
  │   ├─ dark/
  │   │   ├─ color/
  │   │   ├─ components/
  │   │   ├─ variable/
  │   │   └─ index.ts
  │   ├─ light/
  │   │   ├─ color/
  │   │   ├─ components/
  │   │   ├─ variable/
  │   │   └─ index.ts
  │   └─ index.ts
```

1. color 目录存放颜色变量，文件包括：
    - 基础色 `base-color.css`
    - 功能色 `functional-color.css`
    - 中性色 `neutral-color.css`
2. variable 目录存放样式变量，比如：
    - 尺寸规范 `size.css`
3. component 目录存放涉及各组件的相关变量

