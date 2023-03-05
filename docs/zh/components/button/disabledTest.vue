<template>
  <div>
    <bf-button status="success" size="large" @click="onClick" :disabled="currentStateIsDisable"
      >点击执行</bf-button
    >

    <br /><br />

    <span>{{ '当前是否禁用状态：' + currentStateIsDisable }}</span>

    <hr />

    <bf-button size="small" status="normal" @click="enableButton">点击启用</bf-button>
    <bf-button size="small" status="danger" @click="disableButton">点击禁用</bf-button>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue"
import { BfButton } from '@bf-teams/bfui-vue';

// data
const currentStateIsDisable = ref(true)

// methods
const onClick = () => {
  console.log('执行成功！')
}
const enableButton = () => {
  currentStateIsDisable.value = false
}
const disableButton = () => {
  currentStateIsDisable.value = true
}
</script>
