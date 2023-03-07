<template>
  <div>
    <bf-button status="normal" @click="showDialog">使用插槽</bf-button>

    <bf-dialog v-model:visible="visible" title="标题" :z-index="100">
      <template v-slot:headerRight>
        <bf-button status="normal">按钮</bf-button>
      </template>

      <template v-slot:main> 主体内容 </template>

      <template v-slot:footer>
        <div style="text-align: left;">对话框底部区域，可以放置操作按钮等</div>
      </template>
    </bf-dialog>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { BfButton, BfDialog } from '@bf-teams/bfui-vue';

// data
const visible = ref(false)

// methods
const showDialog = () => {
  visible.value = true
}
</script>
