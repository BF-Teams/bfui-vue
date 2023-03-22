<template>
  <div>
    <div class="card" v-for="(color, index) in baseColorList" :key="index">
      <div class="card-title">
        <div class="color-name">{{ color.colorName }}</div>
        <div class="color-desc">{{ color.colorDesc }}</div>
      </div>
      <div class="card-main">
        <div
          class="color-item"
          v-for="(item, index) in color.items"
          :key="index"
          :style="[
          { background: item.value },
          { color: item.id < 6 ? 'rgba(0, 0, 0, 0.85)' : 'rgba(255, 255, 255, 0.85)' }
        ]"
          @click="copyValue(item.value)"
        >
          <span class="color-text">{{ color.color + '-' + item.id }}</span>
          <span class="color-value">{{ item.value }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from "vue"

// data
const baseColorList = reactive([
  {
    color: 'Green',
    colorName: '清新绿',
    colorDesc: '健康自然',
    items: [
      { id: 1, value: '#f6ffed' },
      { id: 2, value: '#d9f7be' },
      { id: 3, value: '#b7eb8f' },
      { id: 4, value: '#95de64' },
      { id: 5, value: '#73d13d' },
      { id: 6, value: '#52c41a' },
      { id: 7, value: '#389e0d' },
      { id: 8, value: '#237804' },
      { id: 9, value: '#135200' },
      { id: 10, value: '#092b00' }
    ]
  },
  {
    color: 'Cyan',
    colorName: '翡翠青',
    colorDesc: '古朴坚强',
    items: [
      { id: 1, value: '#e6fffb' },
      { id: 2, value: '#b5f5ec' },
      { id: 3, value: '#87e8de' },
      { id: 4, value: '#5cdbd3' },
      { id: 5, value: '#36cfc9' },
      { id: 6, value: '#13c2c2' },
      { id: 7, value: '#08979c' },
      { id: 8, value: '#006d75' },
      { id: 9, value: '#00474f' },
      { id: 10, value: '#002329' }
    ]
  },
  {
    color: 'Bule',
    colorName: '深海蓝',
    colorDesc: '沉静梦幻',
    items: [
      { id: 1, value: '#e6f4ff' },
      { id: 2, value: '#bae0ff' },
      { id: 3, value: '#91caff' },
      { id: 4, value: '#69b1ff' },
      { id: 5, value: '#4096ff' },
      { id: 6, value: '#1677ff' },
      { id: 7, value: '#0958d9' },
      { id: 8, value: '#003eb3' },
      { id: 9, value: '#002c8c' },
      { id: 10, value: '#001d66' }
    ]
  },
  {
    color: 'Gold',
    colorName: '闪光金',
    colorDesc: '明快荣耀',
    items: [
      { id: 1, value: '#ffffe6' },
      { id: 2, value: '#fffda3' },
      { id: 3, value: '#fff87a' },
      { id: 4, value: '#fff152' },
      { id: 5, value: '#ffe629' },
      { id: 6, value: '#ffd700' },
      { id: 7, value: '#d9b100' },
      { id: 8, value: '#b38c00' },
      { id: 9, value: '#8c6900' },
      { id: 10, value: '#664900' }
    ]
  },
  {
    color: 'Orange',
    colorName: '活力橙',
    colorDesc: '兴奋活泼',
    items: [
      { id: 1, value: '#fff4e6' },
      { id: 2, value: '#ffd4a3' },
      { id: 3, value: '#ffbd7a' },
      { id: 4, value: '#ffa352' },
      { id: 5, value: '#ff8629' },
      { id: 6, value: '#ff6500' },
      { id: 7, value: '#d94f00' },
      { id: 8, value: '#b33b00' },
      { id: 9, value: '#8c2a00' },
      { id: 10, value: '#661b00' }
    ]
  },
  {
    color: 'Red',
    colorName: '烈焰红',
    colorDesc: '热情奔放',
    items: [
      { id: 1, value: '#fff1f0' },
      { id: 2, value: '#ffccc7' },
      { id: 3, value: '#ffa39e' },
      { id: 4, value: '#ff7875' },
      { id: 5, value: '#ff4d4f' },
      { id: 6, value: '#f5222d' },
      { id: 7, value: '#cf1322' },
      { id: 8, value: '#a8071a' },
      { id: 9, value: '#820014' },
      { id: 10, value: '#5c0011' }
    ]
  },
  {
    color: 'Pink',
    colorName: '浪漫粉',
    colorDesc: '甜美可爱',
    items: [
      { id: 1, value: '#fff0f2' },
      { id: 2, value: '#ffe0e6' },
      { id: 3, value: '#ffb8c6' },
      { id: 4, value: '#ff8fa9' },
      { id: 5, value: '#ff668f' },
      { id: 6, value: '#ff3c75' },
      { id: 7, value: '#d92964' },
      { id: 8, value: '#b31951' },
      { id: 9, value: '#8c0d40' },
      { id: 10, value: '#660831' }
    ]
  },
  {
    color: 'Gray',
    colorName: '泼墨灰',
    colorDesc: '朴素雅致',
    items: [
      { id: 1, value: '#ffffff' },
      { id: 2, value: '#fafafa' },
      { id: 3, value: '#f5f5f5' },
      { id: 4, value: '#f0f0f0' },
      { id: 5, value: '#d9d9d9' },
      { id: 6, value: '#bfbfbf' },
      { id: 7, value: '#8c8c8c' },
      { id: 8, value: '#595959' },
      { id: 9, value: '#434343' },
      { id: 10, value: '#262626' },
      { id: 11, value: '#1f1f1f' },
      { id: 12, value: '#141414' },
      { id: 13, value: '#000000' }
    ]
  },
  {
    color: 'Purple',
    colorName: '豪气紫',
    colorDesc: '高贵优雅',
    items: [
      { id: 1, value: '#f9f0ff' },
      { id: 2, value: '#efdbff' },
      { id: 3, value: '#d3adf7' },
      { id: 4, value: '#b37feb' },
      { id: 5, value: '#9254de' },
      { id: 6, value: '#722ed1' },
      { id: 7, value: '#531dab' },
      { id: 8, value: '#391085' },
      { id: 9, value: '#22075e' },
      { id: 10, value: '#120338' }
    ]
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
  border: 1px solid var(--bf-color-border);
  border-radius: 10px 10px 0 0;
  display: inline-block;
  width: 31%;
  margin: 20px 1%;

  .card-title {
    color: #5c6b77;
    font-weight: 500;
    font-size: 22px;
    text-align: center;
    margin: 10px;

    .color-desc {
      color: #777;
      font-weight: lighter;
      font-size: 14px;
    }
  }

  .card-main {
    .color-item {
      position: relative;
      height: 36px;
      line-height: 36px;
      padding: 0 12px;
      font-size: 14px;
      transition: all 0.2s;

      .color-value {
        float: right;
        font-size: 12px;
        opacity: 0;
        transition: all 0.5s;
      }

      // 屏幕宽度小于550px时
      @media screen and (max-width: 550px) {
        .color-value {
          display: none;
        }
      }
    }

    .color-item:hover {
      margin-right: -10px;
      border-radius: 0 4px 4px 0;
    }
  }

  .card-main:hover .color-item .color-value {
    opacity: 1;
  }
}
</style>
