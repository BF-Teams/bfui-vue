<template>
  <div>
    <bf-select v-model="selVal1" placeholder="default" :options="selOptions">
    </bf-select>

    <bf-select
      v-model="selVal1"
      placeholder="small"
      :options="selOptions"
      size="small"
    ></bf-select>

    <bf-select
      v-model="selVal1"
      placeholder="mini"
      :options="selOptions"
      size="mini"
    ></bf-select>
  </div>
</template>

<script setup lang="ts">
import { BfSelect } from '@bf-teams/bfui-vue';

import { reactive, ref } from "vue";
const selVal1 = ref("");
const state = reactive({
  selOptions: [
    { label: "中国", value: "zhongguo" },
    { label: "俄罗斯", value: "eluosi" },
    { label: "美国", value: "meiguo" },
    { label: "澳大利亚", value: "aodaliya" },
    { label: "巴基斯坦", value: "bajisitan" },
  ],
});
const { selOptions } = state;
</script>

<style lang="less" scoped></style>
