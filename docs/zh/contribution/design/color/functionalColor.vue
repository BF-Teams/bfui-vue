<template>
  <div class="card">
    <div class="card-bg">
      <div class="bg-light"></div>
      <div class="bg-dark"></div>
    </div>
    <div class="card-main">
      <div
        class="color-item"
        v-for="(color, index) in functionalColorList"
        :key="index"
        :style="[
          { background: color.value }]"
        @click="copyValue(color.value)"
      >
        <div class="base-color">{{ color.baseColor }}</div>
        <div class="function">{{ color.function }}</div>
        <div class="color-value">{{ color.value }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from "vue"

// data
const functionalColorList = reactive([
  {
    function: 'Normal / Link',
    functionName: '主要 / 链接',
    baseColor: 'Bule-6',
    value: '#1677ff'
  },
  {
    function: 'Success / Normal',
    functionName: '成功 / 正常',
    baseColor: 'Green-6',
    value: '#52c41a'
  },
  {
    function: 'Warning / Alert',
    functionName: '警告 / 提醒',
    baseColor: 'Orange-5',
    value: '#ff8629'
  },
  {
    function: 'Danger / Error',
    functionName: '危险 / 错误',
    baseColor: 'Red-5',
    value: '#ff4d4f'
  },
])

// methods
const copyText = async (text: string) => {
  try {
    await navigator.clipboard.writeText(text)
  } catch (err) {
    console.log(err.name, err.message);
  }
}
const copyValue = (colorValue: string) => {
  copyText(colorValue)
}
</script>

<style lang="less" scoped>
.card {
  // width: 500px;
  height: 300px;
  background-color: black;

  .card-bg {
    width: 100%;
    height: 100%;
    .bg-light {
      background: white;
      display: inline-block;
      width: 50%;
      height: 100%;
    }
    .bg-dark {
      background: black;
      display: inline-block;
      width: 50%;
      height: 100%;
    }
  }

  .card-main {
    position: relative;
    top: -300px;
    height: 100%;
    width: 80%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .color-item {
      height: 40px;
      width: 100%;
      border-radius: 5px;
      margin: 4px 0;
      padding: 10px;
      font-size: 16px;
      line-height: 20px;
      display: flex;
      justify-content: space-between;
      color: rgba(255, 255, 255, 1);
      opacity: .9;
      .color-value {
        opacity: 0;
        transition: all .2s;
      }
    }
    .color-item:hover {
      .function {
        font-weight: bold;
      }
      .color-value {
        opacity: 1;
      }
    }
  }
}
</style>
