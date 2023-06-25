<template>
  <div class="icon-info">图标总数：{{ iconsArray.length }}，点击自动复制 Vue 代码</div>
  <div class="icon-item" v-for="icon in iconsArray" :key="icon.id" @click="copyCode(icon.name)">
    <bf-icon :type="icon.name" :title="`${icon.title}(${icon.name})`" />
  </div>
</template>

<script setup lang="ts">
// 导入 IconPark 图标的全量基本信息
import icons from '@icon-park/vue-next/icons.json'

// data
// 保存 IconPark 图标的全量基本信息，它是一个数组
const iconsArray = icons

// methods
const copyText = async (text: string) => {
  try {
    await navigator.clipboard.writeText(`<bf-icon type="${text}" />`)
    alert('已复制代码' + `<bf-icon type="${text}" />`)
  } catch (err) {
    console.log(err.name, err.message);
  }
}
const copyCode = (type: string) => {
  copyText(type)
}
</script>

<style lang="less" scoped>
.icon-info {
  margin-bottom: 16px;
  color: #ff5858;
}
.icon-item {
  display: inline-block;
  margin: 0 10px 10px 0;
  font-size: 24px;
}
// 鼠标悬浮时，在不影响其他元素的情况下，将图标放大
.icon-item:hover {
  transition: all 0.2s ease-in-out;
  transform: scale(2);
}
// 鼠标点击时，将图标适当缩小
.icon-item:active {
  transform: scale(1.5);
}
</style>
