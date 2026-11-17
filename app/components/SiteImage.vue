<template>
  <img
    :src="src"
    :alt="alt"
    :loading="priority ? 'eager' : 'lazy'"
    :fetchpriority="priority ? 'high' : 'auto'"
    decoding="async"
  >
</template>

<script setup lang="ts">
withDefaults(defineProps<{
  src: string
  alt: string
  priority?: boolean
}>(), {
  priority: false,
})
</script>
