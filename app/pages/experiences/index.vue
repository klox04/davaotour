<script setup lang="ts">
const route = useRoute()
await navigateTo(
  { path: '/things-to-do', hash: route.hash || undefined, query: route.query },
  { redirectCode: 301, replace: true },
)
</script>

<template>
  <div />
</template>
