<template>
  <article class="bg-white pb-16 pt-24 md:pb-24 md:pt-28">
    <div class="container-page">
      <p class="text-xs font-semibold uppercase tracking-[0.22em] text-tropical">Credits</p>
      <h1 class="mt-3 font-serif text-4xl text-forest sm:text-5xl">Photo credits</h1>
      <p class="mt-4 max-w-2xl text-muted">
        The photographs are documentary images of Davao and Philippine subjects, shared by their authors on Wikimedia Commons. Titles link to the original files.
      </p>
      <ul class="mt-10 divide-y divide-sand rounded-[1.4rem] bg-white">
        <li v-for="credit in photoCredits" :key="credit.file" class="grid gap-3 p-4 sm:grid-cols-[7rem_1fr] sm:items-center">
          <img :src="credit.file" alt="" class="h-16 w-full rounded-xl object-cover sm:w-28">
          <div class="text-sm">
            <a :href="credit.sourceUrl" class="font-semibold text-forest hover:underline" target="_blank" rel="noopener noreferrer">
              {{ credit.title }}
            </a>
            <p class="mt-1 text-muted">{{ credit.author }}</p>
            <p class="text-earth">{{ credit.license }}</p>
          </div>
        </li>
      </ul>
    </div>
  </article>
</template>

<script setup lang="ts">
import { photoCredits } from '~/data/credits'

usePageSeo(
  'Photo Credits',
  'Authors and licenses for the Davao photographs used on this visitor guide.',
)
</script>
