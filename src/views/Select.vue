<template>
  <div>
    <h2>Select组件运行测试</h2>
    <br />

    <bf-select v-model="selVal1" placeholder="默认大小" :options="selOptions">
    </bf-select>
    <bf-select
      v-model="selVal1"
      placeholder="小一点的"
      :options="selOptions"
      size="small"
    ></bf-select>
    <bf-select
      v-model="selVal1"
      placeholder="mini型的"
      :options="selOptions"
      size="mini"
    ></bf-select>
  </div>
</template>

<script lang="ts">
import { BfSelect } from '@bf-teams/bfui-vue';

export default {
  components: {
    BfSelect
  }
}
</script>

<script setup lang="ts">
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

<style scoped></style>
