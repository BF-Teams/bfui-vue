<template>
  <bf-row>
    <bf-col>100%</bf-col>
  </bf-row>
  <bf-row>
    <bf-col>1/2</bf-col>
    <bf-col>1/2</bf-col>
  </bf-row>
  <bf-row>
    <bf-col>1/3</bf-col>
    <bf-col>1/3</bf-col>
    <bf-col>1/3</bf-col>
  </bf-row>
  <bf-row>
    <bf-col>1/4</bf-col>
    <bf-col>1/4</bf-col>
    <bf-col>1/4</bf-col>
    <bf-col>1/4</bf-col>
  </bf-row>
  <bf-row>
    <bf-col>1/6</bf-col>
    <bf-col>1/6</bf-col>
    <bf-col>1/6</bf-col>
    <bf-col>1/6</bf-col>
    <bf-col>1/6</bf-col>
    <bf-col>1/6</bf-col>
  </bf-row>
  <bf-row>
    <bf-col>高度撑满，即使内容没有填满空间。</bf-col>
    <bf-col>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum mollis velit non gravida
      venenatis. Praesent consequat lectus purus, ut scelerisque velit condimentum eu. Maecenas
      sagittis ante ut turpis varius interdum. Quisque tellus ipsum, eleifend non ipsum id, suscipit
      ultricies neque.
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
