<script lang="ts" setup></script>

<template>
  <div>
    <var-app-bar title="配置" />
    <var-button type="primary" @click="toggleDark()">
      <div i-carbon-sun dark:i-carbon-moon />111
    </var-button>
  </div>
</template>
