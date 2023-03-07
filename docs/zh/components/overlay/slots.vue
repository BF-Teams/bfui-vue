<template>
  <div>
    <bf-button status="normal" @click="showOverlay1">center插槽</bf-button>
    <bf-button status="normal" @click="showOverlay2">默认插槽</bf-button>

    <bf-overlay v-model:visible="visible1" :z-index="100" @click.self="hideOverlay1">
      <template v-slot:center>
        <div style="padding: 20px; background: white; color: black; border-radius: 10px;">
          通过center插槽嵌入居中内容
        </div>
      </template>
    </bf-overlay>

    <bf-overlay v-model:visible="visible2" :z-index="100" @click.self="hideOverlay2">
      <div style="padding: 20px; background: white; color: black;">通过默认插槽嵌入任意内容</div>
    </bf-overlay>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { BfButton, BfOverlay } from '@bf-teams/bfui-vue';

// data
const visible1 = ref(false)
const visible2 = ref(false)

// methods
const showOverlay1 = () => {
  visible1.value = true
}
const hideOverlay1 = () => {
  visible1.value = false
}
const showOverlay2 = () => {
  visible2.value = true
}
const hideOverlay2 = () => {
  visible2.value = false
}
</script>
