<script lang="ts" setup></script>

<template>
  <div>
    <van-nav-bar title="配置" />
    <van-button type="primary" @click="toggleDark()">
      <div i-carbon-sun dark:i-carbon-moon />
    </van-button>
  </div>
</template>
