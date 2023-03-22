<template>
  <bf-row :gutter="16">
    <bf-col>
      <div>1</div>
    </bf-col>
    <bf-col>
      <div>1</div>
    </bf-col>
    <bf-col>
      <div>1</div>
    </bf-col>
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

.bf-col div {
  padding: 10px 0;
  text-align: center;
  color: white;
}

// 奇数项
.bf-col:nth-child(odd) div {
  background-color: #1677ff;
}

// 偶数项
.bf-col:nth-child(even) div {
  background-color: #69b1ff;
}
</style>
