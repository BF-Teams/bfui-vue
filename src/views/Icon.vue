<template>
  <div class="play">
    <h2>Icon组件运行测试</h2>
    <br />

    <bf-icons name="setting" />
    <bf-icons name="experiment" />
    <bf-icons name="bell" />
    <bf-icons name="loading" />
    <br />
    <bf-icons name="setting" spin />
    <bf-icons name="experiment" spin />
    <bf-icons name="bell" spin />
    <bf-icons name="loading" spin />

    <bf-icon type="MessageEmoji" />
    <bf-icon type="message-emoji" />
  </div>
</template>

<script setup lang="ts">
import BfIcons from '@bf-teams/bfui-vue/icon';
</script>

<style lang="less" scoped>
.play {
  font-size: 30px;
  padding-bottom: 200px;
}
</style>
