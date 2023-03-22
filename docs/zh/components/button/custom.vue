<template>
  <div>
    <bf-button class="btn1" icon="cloud-upload">投稿</bf-button>
    <bf-button class="btn1" icon="add">关注</bf-button>
    <bf-button
      class="btn1"
      style="border: 1px solid #ff668f; background: white !important; color: #ff668f;"
      >为TA充电</bf-button
    >
    <bf-button class="btn1" icon="delete" disabled>删除</bf-button>

    <br /><br />

    <bf-button class="btn2" icon="experiment">渐变色</bf-button>

    <bf-button
      class="btn3"
      status="normal"
      icon="bell"
      style="width: 30px; height: 30px; padding: 0;"
    ></bf-button>

    <bf-button
      class="btn3"
      status="normal"
      icon="bell"
      style="width: 50px; height: 50px; padding: 0; font-size: 20px"
    ></bf-button>

    <bf-button
      class="btn3"
      status="success"
      icon="setting"
      style="width: 60px; height: 60px; padding: 0; font-size: 30px; border-radius: 15px;"
    ></bf-button>

    <bf-button
      class="btn3"
      status="normal"
      icon="voice"
      style="width: 80px; height: 80px; padding: 0; border-radius: 40px; font-size: 40px;"
    ></bf-button>

    <br /><br />

    <bf-button
      class="btn4"
      status="warning"
      icon="bell"
      style="width: 325px; height: 45px; font-size: 16px;"
      >自定义宽高和字体等</bf-button
    >

    <br /><br />

    <bf-button class="btn5" status="normal">登录</bf-button>

    <br /><br />

    <bf-button class="btn6">bfui 流光溢彩</bf-button>
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

.bf-button.btn5 {
  width: 300px;
  height: 50px;
  border-radius: 25px;
  font-size: 16px;
  letter-spacing: 20px;
  text-indent: 20px;
}

.bf-button.btn6 {
  position: relative;
  font-size: 24px;
  font-weight: bold;
  padding: 0;
  // 角度渐变
  background: linear-gradient(90deg, #03a9f4, #f441a5, #ffeb3b, #03a9f4);
  background-size: 400%;
  width: 320px;
  height: 80px;
  line-height: 80px;
  color: white;
  border-radius: 50px;
  z-index: 1;
  // 英文字母大写
  text-transform: uppercase;
  // 动画
  animation: flowing 8s infinite;
}
// 利用伪元素为按钮增加模糊背景和线条流光
.btn6::before{
	content: "";
	position: absolute;
	left: -5px;
	right: -5px;
	top:-5px;
	bottom: -5px;
	background: linear-gradient(90deg, #03a9f4, #f441a5, #ffeb3b, #03a9f4);
	background-size: 400%;
	border-radius: 50px;
	filter: blur(10px);
	z-index: -1;
  // 动画
  animation: flowing 8s infinite;
}
// 定义流光动画
@keyframes flowing{
	100%{
		background-position: -400% 0;
	}
}
</style>
