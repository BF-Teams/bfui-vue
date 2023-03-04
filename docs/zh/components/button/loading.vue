<template>
  <div>
    <bf-button status="primary" icon="save" @click="onSave" :loading="loading">保存</bf-button>
    {{ msg }}
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue"
import { BfButton } from '@bf-teams/bfui-vue';

// data
const loading = ref(false)
const msg = ref('(点击试试)')

// methods
const onSave = () => {
  // console.log('正在保存…')
  msg.value = '正在保存…'
  loading.value = true
  setTimeout(
    function() {
      // console.log('保存成功！')
      msg.value = '保存成功！'
      loading.value = false
    }, 3000
  )
}
</script>
