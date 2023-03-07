<template>
  <div>
    <bf-button status="normal" @click="showDialog1">标题左对齐</bf-button>
    <bf-button status="normal" @click="showDialog2">标题居中</bf-button>

    <bf-dialog v-model:visible="visible1" title="标题" :z-index="100">
      <template v-slot:main> 默认对话框标题文字左对齐 </template>
    </bf-dialog>

    <bf-dialog v-model:visible="visible2" title="标题" center :z-index="100">
      <template v-slot:main> 通过 center 属性可设置对话框标题居中对齐 </template>
    </bf-dialog>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { BfButton, BfDialog } from '@bf-teams/bfui-vue';

// data
const visible1 = ref(false)
const visible2 = ref(false)

// methods
const showDialog1 = () => {
  visible1.value = true
}
const showDialog2 = () => {
  visible2.value = true
}
</script>
