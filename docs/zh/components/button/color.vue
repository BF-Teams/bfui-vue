<template>
  <div>
    <bf-button class="btn1" icon="cloud-upload">投稿</bf-button>
    <bf-button class="btn1" icon="delete" disabled>删除</bf-button>

    <br /><br />

    <bf-button class="btn2" icon="experiment">渐变色</bf-button>
    <bf-button
      class="btn3"
      status="warning"
      icon="bell"
      style="width: 200px; height: 50px; font-size: 16px;"
      >自定义长宽等样式</bf-button
    >

    <br /><br />

    <bf-button
      class="btn4"
      status="normal"
      icon="bell"
      style="width: 30px; height: 30px; padding: 0;"
    ></bf-button>
    <bf-button
      class="btn4"
      status="normal"
      icon="bell"
      style="width: 30px; height: 30px; padding: 0; border-radius: 15px;"
    ></bf-button>
    <bf-button
      class="btn4"
      status="normal"
      icon="bell"
      style="width: 40px; height: 40px; padding: 0; border-radius: 20px;"
    ></bf-button>
    <bf-button
      class="btn4"
      status="success"
      icon="setting"
      style="width: 50px; height: 50px; padding: 0; font-size: 20px; border-radius: 15px;"
    ></bf-button>

    <br /><br />

    <bf-button class="btn5" status="normal">登录</bf-button>
  </div>
</template>

<script setup lang="ts">
import { BfButton } from '@bf-teams/bfui-vue';
</script>

<style lang="less" scoped>
.btn1 {
  background-color: #ff668f !important;
  color: white;
}
.btn1:hover {
  background-color: #ff8fa9 !important;
  color: white;
}
.btn1:active {
  background-color: #ff668f !important;
  color: white;
}

.btn2 {
  background: linear-gradient( -45deg, #8eff61, #47caff );
}

.btn5 {
  width: 300px;
  height: 50px;
  border-radius: 25px;
  font-size: 16px;
  letter-spacing: 20px;
  text-indent: 20px;
}
</style>
