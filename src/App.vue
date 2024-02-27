<script setup lang="ts">
</script>

<template>
  <VanConfigProvider :theme="theme">
    <main text="gray-700 dark:gray-200">
      <RouterView />
      <van-tabbar route>
        <van-tabbar-item replace to="/" icon="home-o">
          首页
        </van-tabbar-item>
        <van-tabbar-item replace to="/search" icon="search">
          搜索
        </van-tabbar-item>

        <van-tabbar-item replace to="/setting" icon="setting-o">
          配置
        </van-tabbar-item>
      </van-tabbar>
    </main>
  </VanConfigProvider>
</template>
