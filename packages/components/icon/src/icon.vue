<template>
  <svg class="icon" aria-hidden="true">
    <use :xlink:href="iconUse"></use>
  </svg>
  <slot></slot>
</template>

<script lang="ts">

import { defineComponent, computed } from 'vue';
import "public/assets/iconfont.js"
// import "at.alicdn.com/t/c/font_3903618_3yylxbsrixc.js"

export default defineComponent({
  name: "BfIcon",
  props: {
    iconName: {
      type: String,
    },
  },
  setup(props) {
    // props.type;
    const { iconName } = props
    const iconUse = computed(() => {
      console.log(iconName);
      return "#icon-" + iconName;
    })
    return {
      iconUse
    }
  }

})
</script>

<style type="text/css">
/* @import url("http://at.alicdn.com/t/c/font_3903618_dkos6nu14bj.js"); */
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
