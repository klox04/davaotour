<template>
  <section v-if="title" class="bg-transparent pb-10 md:pb-16">
    <div  class="container-page">
      <NuxtLink
        :to="to"
        class="grid overflow-hidden rounded-[1.2rem] bg-magenta text-white sm:rounded-[1.35rem] lg:grid-cols-[1.15fr_0.85fr]"
      >
        <span class="relative min-h-48 sm:min-h-56 lg:min-h-[280px]">
          <SiteImage :src="image" :alt="title" class="absolute inset-0 h-full w-full object-cover object-[center_25%]" />
          <svg class="absolute inset-y-0 -right-px hidden h-full w-24 text-magenta lg:block" viewBox="0 0 100 280" preserveAspectRatio="none" aria-hidden="true">
            <path d="M100 0C28 40 18 110 42 160c20 42 8 80-10 120H100Z" fill="currentColor" />
          </svg>
        </span>
        <span class="relative flex flex-col justify-center overflow-hidden px-5 py-7 sm:px-10 sm:py-8 lg:py-10">
          <img
            src="/images/festival-pattern.png"
            alt=""
            class="pointer-events-none absolute -right-6 top-1/2 hidden h-[130%] w-auto max-w-none -translate-y-1/2 sm:block"
          >
          <span class="relative z-10 text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-white/80">Davao’s iconic festival</span>
          <span class="relative z-10 mt-2 font-sans text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">{{ title }}</span>
          <span class="relative z-10 mt-3 max-w-sm text-sm leading-relaxed text-white/85">{{ summary }}</span>
          <span class="relative z-10 mt-5 inline-flex w-fit items-center gap-2 rounded-full bg-festive px-4 py-2 text-sm font-semibold text-navy sm:mt-6">
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
