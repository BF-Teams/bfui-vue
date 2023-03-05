<template>
  <div>
    <bf-button status="success" size="small" round icon="setting"></bf-button>
    <bf-button status="danger" round icon="delete"></bf-button>
    <bf-button status="normal" size="large" round icon="search"></bf-button>
    <bf-button status="warning" round>赏</bf-button>
    <bf-button status="default" size="small" round icon="close"></bf-button>
    <hr />
    <bf-button status="success" size="small" circle icon="setting"></bf-button>
    <bf-button status="danger" circle icon="delete"></bf-button>
    <bf-button status="normal" size="large" circle icon="search"></bf-button>
    <bf-button status="warning" circle>赏</bf-button>
    <bf-button status="default" size="small" circle icon="close"></bf-button>
  </div>
</template>

<script setup lang="ts">
import { BfButton } from '@bf-teams/bfui-vue';
</script>
