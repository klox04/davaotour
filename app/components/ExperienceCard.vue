<template>
  <NuxtLink
    :to="`/things-to-do#${experience.slug}`"
    class="group flex h-full flex-col overflow-hidden rounded-[1.3rem] bg-card text-white shadow-[0_12px_30px_rgba(20,53,40,0.1)] transition duration-500 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(20,53,40,0.18)]"
  >
    <div class="relative aspect-[4/3] overflow-hidden">
      <SiteImage
        :src="experience.image"
        :alt="experience.name"
        class="h-full w-full object-cover transition duration-700 group-hover:scale-105"
        :class="experience.imagePosition || 'object-center'"
      />
    </div>
    <div class="flex flex-1 flex-col p-4">
      <h3 class="font-serif text-lg leading-tight">{{ experience.name }}</h3>
      <p class="mt-2 line-clamp-3 text-xs leading-relaxed text-white/75 sm:text-sm">
        {{ experience.summary }}
      </p>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
import type { Experience } from '~/types/content'

defineProps<{ experience: Experience }>()
</script>
