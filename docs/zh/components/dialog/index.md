# Dialog 对话框

在浮层中显示的弹出框，用于引导用户相关操作。

## 代码示例

## API

### Dialog Props

| 属性 Props | 说明                                           | 类型    | 默认值  |
| ---------- | ---------------------------------------------- | ------- | ------- |
| **title**  | 对话框标题                                     | String  | -       |
| **name**   | 是否异步关闭                                   | Boolean | `false` |
| **width**  | 自定义宽度                                     | String  |         |
| **center** | 是否让 Dialog 的 header 和 footer 部分居中排列 | Boolean | `false` |

### Dialog Events

| 事件 Events   | 说明             | 回调参数 |
| ------------- | ---------------- | -------- |
| **onConfirm** | 确认时触发       |          |
| **onCancel**  | 取消时触发       |          |
| **onClose**   | 关闭对话框时触发 |          |


### Dialog Slots

| 插槽 Slots   | 说明         |
| ------------ | ------------ |
| **header**   | 自定义页头   |
| **footer**   | 自定义页脚   |
| **onCancel** | 取消时的回调 |

