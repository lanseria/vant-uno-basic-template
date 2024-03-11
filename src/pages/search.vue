<script lang="ts" setup>
const value = ref('')
</script>

<template>
  <div>
    <var-app-bar title="搜索" />
    <var-input v-model="value" placeholder="请输入文本" />
  </div>
</template>
