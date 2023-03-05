<template>
  <div class="card">
    <div class="card-bg">
      <div class="bg-light"></div>
      <div class="bg-dark"></div>
    </div>
    <div class="card-main">
      <div
        class="color-item"
        v-for="(color, index) in brandColorList"
        :key="index"
        :style="[
          { background: color.value }]"
        @click="copyValue(color.value)"
      >
        <div class="base-color">{{ color.baseColor }}</div>
        <div class="usage">{{ color.usage }}</div>
        <div class="color-value">{{ color.value }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from "vue"

// data
const brandColorList = reactive([
  {
    usage: 'Brand Color',
    usageName: '主题色',
    baseColor: 'Bule-6',
    value: '#1677ff'
  },
  {
    usage: 'Normal',
    usageName: '常规',
    baseColor: 'Bule-6',
    value: '#1677ff'
  },
  {
    usage: 'Hover',
    usageName: '鼠标悬停',
    baseColor: 'Bule-5',
    value: '#4096ff'
  },
  {
    usage: 'Click / Active',
    usageName: '单击',
    baseColor: 'Bule-7',
    value: '#0958d9'
  },
  {
    usage: 'Selected background Color',
    usageName: '成功',
    baseColor: 'Bule-1',
    value: '#e6f4ff'
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
      line-height: 18px;
      display: flex;
      justify-content: space-between;
      color: rgba(0, 0, 0, 1);
      opacity: .9;
      border: 1px solid rgb(64, 150, 255);
      .color-value {
        opacity: 0;
        transition: all .2s;
      }
    }
    .color-item:hover {
      .usage {
        font-weight: bold;
      }
      .color-value {
        opacity: 1;
      }
    }
  }
}
</style>
