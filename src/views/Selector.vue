<template>
  <div>
    <bf-selector
      v-model="selVal1"
      placeholder="默认大小"
      :options="selOptions"
    >
    </bf-selector>
    <bf-selector
      v-model="selVal1"
      placeholder="小一点的"
      :options="selOptions"
      size="small"
    ></bf-selector>
    <bf-selector
      v-model="selVal1"
      placeholder="mini型的"
      :options="selOptions"
      size="mini"
    ></bf-selector>
  </div>
</template>


<script setup>
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

<script>
import { BfSelector } from '@bf-teams/bfui-vue';
export default {
  name: "selector",
  components: {BfSelector}
}
</script>

<style scoped>

</style>
