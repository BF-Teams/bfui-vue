<template>
  <div>
    <bf-button status="normal" @click="showOverlay">模糊滤镜</bf-button>

    <bf-overlay v-model:visible="visible" :blur="2" @click.self="hideOverlay"></bf-overlay>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { BfButton, BfOverlay } from '@bf-teams/bfui-vue';

// data
const visible = ref(false)

// methods
const showOverlay = () => {
  visible.value = true
}
const hideOverlay = () => {
  visible.value = false
}
</script>
