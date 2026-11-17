<template>
  <section id="experiences" ref="root" class="bg-cream py-20 md:py-28">
    <div class="container-page">
      <div class="max-w-2xl" data-reveal-group>
        <p data-reveal class="text-xs font-semibold uppercase tracking-[0.22em] text-tropical">Explore by experience</p>
        <h2 data-reveal class="mt-3 font-serif text-4xl leading-tight text-forest sm:text-5xl">
          Find Your Davao Experience
        </h2>
      </div>
      <div class="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-6" data-reveal-group>
        <div v-for="experience in experiences" :key="experience.slug" data-reveal>
          <ExperienceCard :experience="experience" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { Experience } from '~/types/content'

defineProps<{ experiences: Experience[] }>()

const root = ref<HTMLElement | null>(null)
useScrollReveal(root)
</script>
