# Layout 布局

空间布局是体系化视觉设计的起点，用于组织网页的框架结构，可以影响用户的浏览顺序。清晰的布局和数据展示可以帮助用户高效获取信息。

主题目录中关于布局的样式变量：

- `layout/size.css` 尺寸规范

## 尺寸规范 size

为了保持界面布局上的一致性和韵律感，统一设计到开发的布局语言，减少还原损耗，BFUI 对常用的尺寸做出了一些规范。

### 组件尺寸

对于可定义尺寸的典型行内组件，如 Button, Input, Select 等，我们预设了如下对高度的样式变量，它们的值都保持了 8 倍数的原则、具备动态的韵律感。

| 高度 Hight | 样式变量 Variable    | 预设值 Value |
| ---------- | -------------------- | ------------ |
| small      | `--bf-hight-small`   | `24px`       |
| default    | `--bf-hight-default` | `32px`       |
| large      | `--bf-hight-large`   | `40px`       |

### 屏幕尺寸

BFUI 基于常见的屏幕宽度，默认提供了以下几个断点：

| 屏幕 screen | 样式变量 Variable  | 预设值 Value |
| ----------- | ------------------ | ------------ |
| xs          | `--bf-screen-xs`   | `400px`      |
| sm          | `--bf-screen-sm`   | `640px`      |
| md          | `--bf-screen-md`   | `768px`      |
| lg          | `--bf-screen-lg`   | `1024px`     |
| xl          | `--bf-screen-xl`   | `1280px`     |
| xxl         | `--bf-screen-xxl`  | `1536px`     |
| xxxl        | `--bf-screen-xxxl` | `1920px`     |

您可以针对这些断点的值，为不同屏幕宽度应用不同的样式，例如：

```less
@media (max-width: 768px) {
  /* 在屏幕宽度小于等于 768px 时应用的样式 */
}

@media (min-width: 768px) and (max-width: 1024px) {
  /* 在屏幕宽度大于 768px 且小于等于 1024px 时应用的样式 */
}
```

这样可以根据不同的屏幕宽度来调整布局和样式，以提供更好的用户体验。
