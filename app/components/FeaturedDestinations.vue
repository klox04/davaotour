<template>
  <section id="destinations" ref="root" class="bg-white py-20 md:py-28">
    <div class="container-page">
      <div class="flex flex-wrap items-end justify-between gap-4" data-reveal-group>
        <div>
          <p data-reveal class="text-xs font-semibold uppercase tracking-[0.22em] text-tropical">Featured destinations</p>
          <h2 data-reveal class="mt-3 max-w-xl font-serif text-4xl leading-tight text-forest sm:text-5xl">
            Explore Davao’s Must-Visit Places
          </h2>
        </div>
        <NuxtLink data-reveal to="/destinations" class="inline-flex items-center gap-2 text-sm font-semibold text-forest">
          View All Destinations
          <Icon name="lucide:arrow-right" class="size-4" />
        </NuxtLink>
      </div>

      <div class="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-4" data-reveal-group>
        <div v-for="destination in destinations" :key="destination.slug" data-reveal>
          <DestinationCard :destination="destination" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { Destination } from '~/types/content'

defineProps<{ destinations: Destination[] }>()

const root = ref<HTMLElement | null>(null)
useScrollReveal(root)
</script>
