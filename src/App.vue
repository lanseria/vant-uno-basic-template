<script setup lang="ts">
</script>

<template>
  <VanConfigProvider :theme="theme">
    <main font-sans p="x-4 y-10" text="center gray-700 dark:gray-200">
      <RouterView />
    </main>
  </VanConfigProvider>
</template>
