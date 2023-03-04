# Dialog 对话框

在浮层中显示的弹出框，用于引导用户相关操作。

## 代码示例

## API

### Dialog Props

| 属性 Props  | 说明                     | 类型    | 默认值  |
| ----------- | ------------------------ | ------- | ------- |
| **visible** | 控制对话框是否显示       | Boolean | `false` |
| **title**   | 对话框标题               | String  | -       |
| **center**  | 是否让对话框内容居中排列 | Boolean | `false` |
| **width**   | 自定义宽度               | String  |         |

### Dialog Events

| 事件 Events   | 说明             | 回调参数 |
| ------------- | ---------------- | -------- |
| **onCancel**  | 点击取消时触发   |          |
| **onConfirm** | 点击确定时触发   |          |
| **onClose**   | 对话框关闭时触发 |          |

### Dialog Slots

| 插槽 Slots   | 说明         |
| ------------ | ------------ |
| **header**   | 自定义页头   |
| **footer**   | 自定义页脚   |
| **onCancel** | 取消时的回调 |
