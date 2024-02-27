<script lang="ts" setup>
const value = ref('')
</script>

<template>
  <div>
    <van-nav-bar title="搜索" />
    <van-search v-model="value" placeholder="请输入搜索关键词" />
  </div>
</template>
