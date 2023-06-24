<template>
  <div class="play">
    <h2>Icon组件运行测试</h2>
    <br />

    <bf-icon name="setting" />
    <bf-icon name="experiment" />
    <bf-icon name="bell" />
    <bf-icon name="loading" />
    <br />
    <bf-icon name="setting" spin />
    <bf-icon name="experiment" spin />
    <bf-icon name="bell" spin />
    <bf-icon name="loading" spin />
  </div>
</template>

<script setup lang="ts">
import BfIcon from '@bf-teams/bfui-vue/icon';
</script>

<style lang="less" scoped>
.play {
  font-size: 30px;
  padding-bottom: 200px;
}
</style>
