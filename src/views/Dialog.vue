<template>
  <div class="play">
    <h2>Dialog组件运行测试</h2>
    <br />

    <bf-dialog v-model:visible="visible" title="对话框标题"></bf-dialog>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { BfDialog } from '@bf-teams/bfui-vue';

const visible = ref(false)
</script>

<style lang="less" scoped></style>
