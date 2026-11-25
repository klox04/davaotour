<template>
  <section v-if="cards.length" id="experiences" class="bg-transparent py-10 md:py-16">
    <div class="container-page">
      <div class="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-end sm:justify-between">
        <div>
          <p class="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-brand">Experience Davao</p>
          <h2 class="mt-1 text-2xl font-extrabold tracking-tight text-navy sm:text-3xl md:text-4xl">Must-Do Experiences</h2>
        </div>
        <NuxtLink to="/things-to-do" class="inline-flex items-center gap-1 text-sm font-semibold text-brand hover:text-brand-deep">
          View All Experiences
          <Icon name="lucide:arrow-right" class="size-4" />
        </NuxtLink>
      </div>

      <div class="mt-5 grid grid-cols-1 gap-3 sm:mt-6 sm:grid-cols-2 sm:gap-4 xl:grid-cols-4">
        <NuxtLink
          v-for="card in cards"
          :key="card.to"
          :to="card.to"
          class="group relative block h-48 overflow-hidden rounded-2xl sm:h-52"
        >
          <SiteImage
            :src="card.image"
            :alt="card.alt"
            class="h-full w-full object-cover transition duration-700 group-hover:scale-[1.04]"
            :class="card.imagePosition"
          />
          <span class="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />
          <span class="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-4">
            <span class="text-base font-bold leading-tight text-white">{{ card.title }}</span>
            <span class="grid size-8 shrink-0 place-items-center rounded-full bg-white text-navy">
              <Icon name="lucide:arrow-right" class="size-4" />
            </span>
          </span>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  cards: {
    title: string
    image: string
    alt: string
    to: string
    imagePosition?: string
  }[]
}>()
</script>
