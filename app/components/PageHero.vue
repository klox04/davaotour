<template>
  <section class="relative isolate min-h-[46vh] overflow-hidden">
    <SiteImage
      :src="image"
      :alt="title"
      priority
      class="absolute inset-0 h-full w-full object-cover"
      :class="imagePosition || 'object-center'"
    />
    <div class="absolute inset-0 bg-gradient-to-t from-forest-deep/85 via-forest-deep/40 to-black/25" />
    <div class="container-page relative z-10 flex min-h-[46vh] flex-col justify-end pb-12 pt-16">
      <nav aria-label="Breadcrumb" class="text-sm text-white/75">
        <ol class="flex flex-wrap items-center gap-2">
          <li><NuxtLink to="/" class="hover:text-gold">Home</NuxtLink></li>
          <li aria-hidden="true">/</li>
          <li class="text-white">{{ eyebrow }}</li>
        </ol>
      </nav>
      <p class="mt-4 text-xs font-semibold uppercase tracking-[0.22em] text-gold">{{ eyebrow }}</p>
      <h1 class="mt-3 max-w-3xl font-serif text-4xl leading-[1.05] text-white sm:text-6xl">
        {{ title }}
      </h1>
      <p v-if="description" class="mt-4 max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg">
        {{ description }}
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  eyebrow: string
  title: string
  description?: string
  image: string
  imagePosition?: string
}>()
</script>
