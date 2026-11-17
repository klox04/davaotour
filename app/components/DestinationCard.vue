<template>
  <NuxtLink
    :to="`/destinations/${destination.slug}`"
    class="group flex h-full flex-col overflow-hidden rounded-[1.4rem] bg-card text-white shadow-[0_14px_40px_rgba(20,53,40,0.12)] transition duration-500 hover:-translate-y-1.5 hover:shadow-[0_22px_50px_rgba(20,53,40,0.22)]"
  >
    <div class="relative aspect-[16/11] overflow-hidden">
      <SiteImage
        :src="destination.image"
        :alt="destination.name"
        class="h-full w-full object-cover transition duration-700 group-hover:scale-105"
        :class="destination.imagePosition || 'object-center'"
      />
    </div>
    <div class="flex flex-1 flex-col p-4 sm:p-5">
      <p class="flex items-center gap-1.5 text-xs text-white/75">
        <Icon name="lucide:map-pin" class="size-3.5 shrink-0 text-gold" />
        {{ destination.location }}
      </p>
      <h3 class="mt-2 font-serif text-[1.35rem] leading-tight">
        {{ destination.name }}
      </h3>
      <p class="mt-2 line-clamp-3 text-sm leading-relaxed text-white/75">
        {{ destination.summary }}
      </p>
      <span class="mt-auto inline-flex items-center gap-1 pt-4 text-sm font-semibold text-gold">
        Explore More
        <Icon name="lucide:arrow-right" class="size-4 transition group-hover:translate-x-1" />
      </span>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
import type { Destination } from '~/types/content'

defineProps<{ destination: Destination }>()
</script>
