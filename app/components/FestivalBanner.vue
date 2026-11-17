<template>
  <section v-if="title" class="bg-white pb-12 md:pb-16">
    <div class="container-page">
      <NuxtLink
        :to="to"
        class="grid overflow-hidden rounded-[1.35rem] bg-magenta text-white lg:grid-cols-[1.15fr_0.85fr]"
      >
        <span class="relative min-h-56 lg:min-h-[280px]">
          <SiteImage :src="image" :alt="title" class="absolute inset-0 h-full w-full object-cover object-[center_25%]" />
          <svg class="absolute inset-y-0 -right-px hidden h-full w-24 text-magenta lg:block" viewBox="0 0 100 280" preserveAspectRatio="none" aria-hidden="true">
            <path d="M100 0C28 40 18 110 42 160c20 42 8 80-10 120H100Z" fill="currentColor" />
          </svg>
        </span>
        <span class="relative flex flex-col justify-center px-6 py-8 sm:px-10 lg:py-10">
          <img
            src="/images/festival-pattern.png"
            alt=""
            class="pointer-events-none absolute -right-4 top-1/2 h-[130%] w-auto max-w-none -translate-y-1/2"
          >
          <span class="relative z-10 text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-white/80">Davao’s iconic festival</span>
          <span class="relative z-10 mt-2 font-sans text-4xl font-extrabold tracking-tight sm:text-5xl">{{ title }}</span>
          <span class="relative z-10 mt-3 max-w-sm text-sm leading-relaxed text-white/85">{{ summary }}</span>
          <span class="relative z-10 mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-festive px-4 py-2 text-sm font-semibold text-navy">
            Learn More
            <Icon name="lucide:arrow-right" class="size-4" />
          </span>
        </span>
      </NuxtLink>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  summary: string
  image: string
  to: string
}>()
</script>
