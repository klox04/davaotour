<template>
  <article>
    <div class="grid items-center gap-6 md:grid-cols-[1.05fr_0.95fr]">
      <SiteImage
        src="/images/durian-basket.jpg"
        alt="A woven basket filled with ripe Davao durian"
        class="aspect-[4/5] w-full rounded-[1.5rem] object-cover sm:aspect-[5/4]"
      />
      <div>
        <p class="text-xs font-semibold uppercase tracking-[0.22em] text-tropical">Davao’s local flavors</p>
        <h2 class="mt-3 font-serif text-4xl leading-tight text-forest sm:text-5xl">A Taste of Davao</h2>
        <p class="mt-4 text-base leading-relaxed text-muted">
          Discover the flavors that make Davao a destination worth savoring.
        </p>
      </div>
    </div>
    <ul class="mt-6 grid grid-cols-3 gap-3 sm:grid-cols-6">
      <li v-for="flavor in flavors" :key="flavor.slug" class="text-center">
        <SiteImage
          :src="flavor.image"
          :alt="flavor.name"
          class="mx-auto size-16 rounded-full object-cover ring-2 ring-sand sm:size-[4.5rem]"
        />
        <span class="mt-2 block text-xs font-medium text-ink">{{ flavor.name }}</span>
      </li>
    </ul>
  </article>
</template>

<script setup lang="ts">
import type { Flavor } from '~/types/content'

defineProps<{ flavors: Flavor[] }>()
</script>
