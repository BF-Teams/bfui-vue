<template>
  <bf-row>
    <bf-col :span="24">24</bf-col>
  </bf-row>
  <bf-row>
    <bf-col :span="12">12</bf-col>
    <bf-col :span="12">12</bf-col>
  </bf-row>
  <bf-row>
    <bf-col :span="8">8</bf-col>
    <bf-col :span="8">8</bf-col>
    <bf-col :span="8">8</bf-col>
  </bf-row>
  <bf-row>
    <bf-col :span="6">6</bf-col>
    <bf-col :span="6">6</bf-col>
    <bf-col :span="6">6</bf-col>
    <bf-col :span="6">6</bf-col>
  </bf-row>
  <bf-row>
    <bf-col :span="4">4</bf-col>
    <bf-col :span="4">4</bf-col>
    <bf-col :span="4">4</bf-col>
    <bf-col :span="4">4</bf-col>
    <bf-col :span="4">4</bf-col>
    <bf-col :span="4">4</bf-col>
  </bf-row>

  <hr />
  栅格占位总数小于 24 时会有剩余空间：
  <br /><br />

  <bf-row>
    <bf-col :span="8">8</bf-col>
    <bf-col :span="6">6</bf-col>
    <bf-col :span="4">4</bf-col>
  </bf-row>
  <bf-row>
    <bf-col :span="1">1</bf-col>
    <bf-col :span="2">2</bf-col>
    <bf-col :span="3">3</bf-col>
    <bf-col :span="5">5</bf-col>
  </bf-row>

  <hr />
  栅格占位总数大于 24 时将被挤换行：
  <br /><br />

  <bf-row>
    <bf-col :span="8">8</bf-col>
    <bf-col :span="12">12</bf-col>
    <bf-col :span="6">6</bf-col>
    <bf-col :span="4">4</bf-col>
  </bf-row>

  <hr />
  未指定宽度的栅格将自适应地继续平分可用空间：
  <br /><br />

  <bf-row>
    <bf-col>auto</bf-col>
    <bf-col :span="6">6</bf-col>
  </bf-row>
  <bf-row>
    <bf-col :span="6">6</bf-col>
    <bf-col>auto</bf-col>
    <bf-col :span="4">4</bf-col>
  </bf-row>
  <bf-row>
    <bf-col>auto</bf-col>
    <bf-col :span="4">4</bf-col>
    <bf-col>auto</bf-col>
    <bf-col :span="4">4</bf-col>
  </bf-row>
</template>

<script setup lang="ts">
import { BfRow, BfCol } from '@bf-teams/bfui-vue';
</script>

<style lang="less" scoped>
.bf-row {
  background-color: var(--bf-color-background);
  margin-bottom: 16px;
}

.bf-row:last-child {
  margin-bottom: 0;
}

.bf-col {
  padding: 10px;
  text-align: center;
  color: white;
}

// 奇数项
.bf-col:nth-child(odd) {
  background-color: #1677ff;
}

// 偶数项
.bf-col:nth-child(even) {
  background-color: #69b1ff;
}
</style>
