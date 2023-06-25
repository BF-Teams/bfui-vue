<template>
  <div>
    <div style="margin-bottom: 8px;">纯图标按钮，两种方法效果相同：</div>
    <bf-button icon="bell" status="normal"></bf-button>
    <bf-button icon="bell" status="normal" type="outline"></bf-button>
    <bf-button icon="bell" type="text"></bf-button>
    <bf-button icon="bell" status="normal" round></bf-button>
    <bf-button icon="bell" status="normal" type="outline" round></bf-button>
    <bf-button icon="bell" type="text" round></bf-button>
    <br />
    <bf-button status="normal"><bf-icons name="bell"></bf-icons></bf-button>
    <bf-button status="normal" type="outline"><bf-icons name="bell"></bf-icons></bf-button>
    <bf-button type="text"><bf-icons name="bell"></bf-icons></bf-button>
    <bf-button status="normal" round><bf-icons name="bell"></bf-icons></bf-button>
    <bf-button status="normal" type="outline" round><bf-icons name="bell"></bf-icons></bf-button>
    <bf-button type="text" round><bf-icons name="bell"></bf-icons></bf-button>
    <hr />
    <div style="margin: 10px 0;">图标在文字前面（使用 Button 组件的 icon 属性）：</div>
    <bf-button icon="setting">默认按钮</bf-button>
    <bf-button icon="loading" status="normal">加载</bf-button>
    <bf-button icon="bell" status="success">订阅</bf-button>
    <bf-button icon="experiment" status="warning">实验</bf-button>
    <bf-button icon="delete" status="danger">删除</bf-button>
    <br />
    <bf-button icon="setting" type="outline">边框按钮</bf-button>
    <bf-button icon="loading" status="normal" type="outline">加载</bf-button>
    <bf-button icon="bell" status="success" type="outline">订阅</bf-button>
    <bf-button icon="experiment" status="warning" type="outline">实验</bf-button>
    <bf-button icon="delete" status="danger" type="outline">删除</bf-button>
    <br />
    <bf-button icon="setting" type="dashed">虚线按钮</bf-button>
    <bf-button icon="loading" status="normal" type="dashed">加载</bf-button>
    <bf-button icon="bell" status="success" type="dashed">订阅</bf-button>
    <bf-button icon="experiment" status="warning" type="dashed">实验</bf-button>
    <bf-button icon="delete" status="danger" type="dashed">删除</bf-button>
    <br />
    <bf-button icon="setting" type="text">文字按钮</bf-button>
    <bf-button icon="loading" status="normal" type="text">加载</bf-button>
    <bf-button icon="bell" status="success" type="text">订阅</bf-button>
    <bf-button icon="experiment" status="warning" type="text">实验</bf-button>
    <bf-button icon="delete" status="danger" type="text">删除</bf-button>
    <br />
    <bf-button icon="setting" disabled>禁用按钮</bf-button>
    <bf-button icon="loading" disabled>禁用</bf-button>
    <bf-button icon="bell" disabled>禁用</bf-button>
    <bf-button icon="experiment" disabled>禁用</bf-button>
    <bf-button icon="delete" disabled>禁用</bf-button>
    <hr />
    <div style="margin: 10px 0;">图标在文字后面（在 Button 中直接放置 Icon 组件）：</div>
    <bf-button>设置 <bf-icons name="setting"></bf-icons></bf-button>
    <bf-button status="normal">加载 <bf-icons name="loading"></bf-icons></bf-button>
    <bf-button status="success">订阅 <bf-icons name="bell"></bf-icons></bf-button>
    <bf-button status="warning">实验 <bf-icons name="experiment"></bf-icons></bf-button>
    <bf-button status="danger">删除 <bf-icons name="delete"></bf-icons></bf-button>
    <hr />
    <div style="margin: 10px 0;">两种方法结合，可以自定义文字前后图标的显示：</div>
    <bf-button icon="setting">展开</bf-button>
    <bf-button icon="setting">展开 <bf-icons name="unfold"></bf-icons></bf-button>
    <bf-button>更多 <bf-icons name="unfold"></bf-icons></bf-button>
  </div>
</template>

<style lang="less" scoped>
.bf-button {
  margin-bottom: 16px;
}
</style>
