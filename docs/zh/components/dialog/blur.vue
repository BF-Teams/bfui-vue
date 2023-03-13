<template>
  <div>
    <bf-button status="normal" @click="showDialog">背景模糊</bf-button>

    <bf-dialog v-model:visible="visible" title="标题" :z-index="100" :blur="2">
      <template v-slot:main> 主体内容 </template>

      <template v-slot:footer>
        <bf-button type="outline" @click="onCancel">取消</bf-button>
        <bf-button status="normal" @click="onConfirm">确定</bf-button>
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
const onCancel = () => {
  console.log('已取消')
  visible.value = false
}
const onConfirm = () => {
  console.log('操作成功')
  visible.value = false
}
</script>
