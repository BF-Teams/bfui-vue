<template>
  <div>
    <bf-button status="normal" @click="showOverlay">显示遮罩层</bf-button>

    <bf-overlay v-model:visible="visible" :z-index="100" @click.self="hideOverlay"></bf-overlay>
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
