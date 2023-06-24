<template>
  <div>
    <bf-button status="normal" icon="save" @click="onSave" :loading="loading">保存</bf-button>
    <span style="padding-left: 10px;">{{ msg }}</span>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue"

// data
const loading = ref(false)
const msg = ref('点击试试')

// methods
const onSave = () => {
  // 当非加载状态时才会执行相关代码，防止用户频繁点击
  if (!loading.value) {
    msg.value = '正在保存…'
    loading.value = true
    setTimeout(
      function () {
        msg.value = '保存成功！'
        loading.value = false
      }, 3000
    )
  }
}
</script>
