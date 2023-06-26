# 主题切换

我们使用 CSS 变量，结合 `:root` 选择器匹配文档根元素，通过为 html 标签更换不同的 class 类名来实现主题样式的切换。关于 BFUI 的设计理念和规范，请见组件设计的 [Values 价值观](../contribution/design/values/index.md)。

```js
// 添加类值
document.documentElement.classList.add("dark")

// 移除类值
document.documentElement.classList.remove("dark")
```

## 内置主题

组件库内置了 `light` 和 `dark` 两款主题，可以实现基本的亮暗模式切换。

我们将组件中部分 **颜色和样式变量** 抽离到了 theme 文件夹中，方便开发者覆盖和扩展。


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
2. component 目录存放涉及各组件的相关变量
3. variable 目录存放其他样式变量，比如：
    - 尺寸规范 `size.css`

## 创建新的主题

- 如果对颜色和样式有修改的需求，可对相关 CSS 变量进行覆盖替换；
- 如需要大幅度自定义相关样式：
  1. 将 `node_modules/@bf-teams/bfui-vue/theme/dark` 主题目录复制到项目合适的位置；
  2. 起一个主题的名字，比如 “coffee”，然后将 `dark` 文件夹重命名为 `coffee` ；
  3. 将项目引入的 BFUI 主题替换为自定义的主题 `import '@/assets/theme/coffee';`；
  4. 根据需求修改 `coffee` 主题目录下的各种颜色和样式变量。
