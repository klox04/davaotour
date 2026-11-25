<template>
  <section class="bg-white pb-14 md:pb-20">
    <div class="relative min-h-[380px] overflow-hidden">
      <SiteImage
        :src="image"
        :alt="alt"
        class="absolute inset-0 h-full w-full object-cover object-[center_40%]"
      />
      <div class="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/10" />
      <div class="container-page relative flex min-h-[380px] flex-col justify-center py-14">
        <h2 class="text-4xl font-extrabold tracking-tight text-white sm:text-6xl">Taste Davao</h2>
        <p class="mt-4 max-w-md text-sm leading-relaxed text-white/90 sm:text-base">
          From the world-famous Davao durian to fresh local flavors, experience a culinary journey like no other.
        </p>
        <NuxtLink
          to="/things-to-do#food-gastronomy"
          class="mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-navy transition hover:bg-festive"
        >
          Discover Davao Food
          <Icon name="lucide:arrow-right" class="size-4" />
        </NuxtLink>
      </div>
      <svg class="pointer-events-none absolute bottom-0 right-0 h-24 w-56 sm:h-28 sm:w-72" viewBox="0 0 280 100" preserveAspectRatio="none" aria-hidden="true">
        <path d="M0 70c40-20 70-10 110 0s70 10 110-8 40-16 60-6v44H0Z" fill="#E85A9B" />
        <path d="M40 80c40-12 70-4 110 2s80 6 130-6v24H40Z" fill="#FFDB55" />
        <path d="M80 88c50-8 80 2 120 0s50-6 80-2v14H80Z" fill="#1E9BBB" />
      </svg>
    </div>
  </section>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
  image: string
  alt: string
}>(), {
  image: '/images/durian-basket.jpg',
  alt: 'A basket of Davao durian',
})
</script>
