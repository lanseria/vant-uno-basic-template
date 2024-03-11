<script setup lang="ts">
const router = useRouter()
const active = ref('/')
function handleChange(active: any) {
  router.push(active)
}
</script>

<template>
  <var-style-provider>
    <main text="gray-700 dark:gray-200">
      <RouterView />
      <var-bottom-navigation v-model:active="active" @change="handleChange">
        <var-bottom-navigation-item name="/" label="首页" icon="home" />
        <var-bottom-navigation-item name="search" label="搜索" icon="magnify" />
        <var-bottom-navigation-item name="setting" label="设置" icon="heart" />
      </var-bottom-navigation>
    </main>
  </var-style-provider>
</template>
