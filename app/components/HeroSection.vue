<template>
  <section class="relative z-20 bg-navy" aria-roledescription="carousel" aria-label="Davao City scenery">
    <div class="relative h-[calc(100svh-4.25rem)] min-h-[560px] overflow-hidden">
      <SiteImage
        v-for="(slide, index) in slides"
        :key="slide.src"
        :src="slide.src"
        :alt="slide.alt"
        :priority="index === 0"
        class="absolute inset-0 h-full w-full object-cover transition duration-700 motion-reduce:transition-none"
        :aria-hidden="index === active ? undefined : 'true'"
        :class="[slide.position, index === active ? 'opacity-100' : 'opacity-0']"
      />
      <div class="absolute inset-0 bg-gradient-to-r from-black/45 via-black/15 to-transparent" />

      <div class="container-page relative z-10 flex h-full flex-col justify-center pb-24 pt-8">
        <p class="flex items-center gap-3 text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-white">
          Davao City
          <span class="h-px w-10 bg-white/80" />
        </p>
        <h1 class="mt-3 max-w-xl text-[clamp(2.7rem,4.6vw,4.15rem)] font-extrabold leading-[0.95] tracking-[-0.035em] text-white">
          Nature, Culture,<br>
          Adventure.
        </h1>
        <p class="mt-1 font-script text-[clamp(2.6rem,4.2vw,3.6rem)] leading-none text-[#f0c84b]">Life is Here.</p>
        <p class="mt-4 max-w-sm text-[0.92rem] leading-relaxed text-white/95">
          Discover the Philippines’ crown jewel in Mindanao — where majestic mountains, rich culture, vibrant festivals, and warm Dabawenyo hospitality await.
        </p>
        <NuxtLink
          to="/explore"
          class="mt-5 inline-flex w-fit items-center gap-3 rounded-full bg-white py-1.5 pl-5 pr-1.5 text-sm font-semibold text-navy shadow-sm transition hover:bg-white/90"
        >
          Explore Davao
          <span class="grid size-8 place-items-center rounded-full border border-navy/20">
            <Icon name="lucide:arrow-right" class="size-4" />
          </span>
        </NuxtLink>
      </div>

      <p class="absolute bottom-[22%] right-6 z-10 hidden items-center gap-2 text-white drop-shadow md:flex lg:right-14">
        <Icon name="lucide:map-pin" class="size-5" />
        <span class="text-sm font-semibold leading-tight">
          Mount Apo
          <span class="block text-xs font-normal text-white/85">Davao City</span>
        </span>
      </p>

      <div class="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 items-center gap-1.5">
        <button
          v-for="(slide, index) in slides"
          :key="slide.src"
          type="button"
          class="size-2 rounded-full transition"
          :class="index === active ? 'bg-white' : 'bg-white/45'"
          :aria-label="`Show image ${index + 1}`"
          :aria-current="index === active ? 'true' : undefined"
          @click="show(index)"
        />
      </div>

      <div class="absolute bottom-7 right-4 z-10 flex gap-2 sm:right-8">
        <button type="button" class="grid size-9 place-items-center rounded-full bg-white/80 text-navy/70 backdrop-blur-sm transition hover:bg-white" aria-label="Previous image" @click="step(-1)">
          <Icon name="lucide:chevron-left" class="size-4" />
        </button>
        <button type="button" class="grid size-9 place-items-center rounded-full bg-white/80 text-navy/70 backdrop-blur-sm transition hover:bg-white" aria-label="Next image" @click="step(1)">
          <Icon name="lucide:chevron-right" class="size-4" />
        </button>
      </div>
    </div>

    <!-- <svg class="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-8 w-full" viewBox="0 0 1440 48" preserveAspectRatio="none" aria-hidden="true">
      <path d="M0 30c80-18 140-8 220 2s150 8 230-8 160-20 250-6 180 18 270 4 160-22 240-8 150 16 230 6v28H0Z" fill="#E85A9B" />
      <path d="M0 36c120-10 180 4 280 2s170-16 270-6 200 14 300 2 180-14 270-4 160 10 220 4v14H0Z" fill="#FFDB55" />
      <path d="M0 40c160-6 220 6 340 2s220-10 320-2 200 8 300 2 180-8 240-2v8H0Z" fill="#087A42" />
      <path d="M0 44c200-4 280 4 420 1s260-6 380-1 240 4 380 1v3H0Z" fill="#1E9BBB" />
    </svg>

    <img
      src="/images/flower.png"
      alt=""
      class="pointer-events-none absolute bottom-0 -left-4 z-20 w-40 sm:w-52 lg:-left-6 lg:w-64"
    > -->
  </section>
</template>

<script setup lang="ts">
const slides = [
  {
    src: '/images/hero-apo-banner.jpg',
    alt: 'Mount Apo at sunrise above a sea of clouds and forest',
    position: 'object-[center_45%]',
  },
  {
    src: '/images/mount-apo-kapatagan.jpg',
    alt: 'Green highlands on the Kapatagan side of Mount Apo',
    position: 'object-center',
  },
  {
    src: '/images/mount-apo-forest.jpg',
    alt: 'Mossy forest on the slopes of Mount Apo',
    position: 'object-center',
  },
  {
    src: '/images/lake-venado.jpg',
    alt: 'Lake Venado in the Mount Apo landscape',
    position: 'object-center',
  },
]

const active = ref(0)
let timer: ReturnType<typeof setInterval> | undefined

function show(index: number) {
  active.value = (index + slides.length) % slides.length
}

function step(direction: number) {
  show(active.value + direction)
}

onMounted(() => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
  timer = setInterval(() => step(1), 7000)
})

onUnmounted(() => clearInterval(timer))
</script>
