<template>
  <article class="flex h-full flex-col overflow-hidden rounded-[1.6rem] bg-card text-white">
    <div class="grid flex-1 md:grid-cols-2">
      <SiteImage
        src="/images/kadayawan-parade.jpg"
        alt="Kadayawan Festival dancers in colorful costumes"
        class="h-64 w-full object-cover object-[center_30%] md:h-full"
      />
      <div class="flex flex-col p-6 sm:p-7">
        <p class="text-xs font-semibold uppercase tracking-[0.22em] text-gold">Culture & festivals</p>
        <h2 class="mt-3 font-serif text-3xl leading-tight sm:text-4xl">A City of Culture and Celebration</h2>
        <p class="mt-3 text-sm leading-relaxed text-white/75">
          From Kadayawan’s street dances to indigenous cloth and community fiestas, Davao celebrates in full color.
        </p>
        <ul class="mt-5 space-y-3">
          <li v-for="item in highlights" :key="item.title" class="flex items-center gap-3">
            <SiteImage :src="item.image" :alt="item.title" class="size-12 shrink-0 rounded-xl object-cover" />
            <span class="text-sm font-medium">{{ item.title }}</span>
          </li>
        </ul>
        <NuxtLink
          to="/events-festivals"
          class="mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-gold px-4 py-2.5 text-sm font-semibold text-ink transition hover:bg-gold-deep"
        >
          Explore Our Culture
          <Icon name="lucide:arrow-right" class="size-4" />
        </NuxtLink>
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
import type { CultureHighlight } from '~/types/content'

defineProps<{ highlights: CultureHighlight[] }>()
</script>
