<template>
  <section class="hero relative z-20 overflow-hidden" aria-roledescription="carousel" aria-label="Davao City scenery">
    <div class="hero-photo relative isolate overflow-hidden bg-forest-deep">
      <SiteImage
        v-for="(slide, index) in slides"
        :key="slide.src"
        :src="slide.src"
        :alt="slide.alt"
        :priority="index === 0"
        class="absolute inset-0 h-full w-full object-cover transition-opacity duration-700 motion-reduce:transition-none"
        :aria-hidden="index === active ? undefined : 'true'"
        :class="[slide.position, index === active ? 'opacity-100' : 'opacity-0']"
      />
      <div class="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
    </div>

    <svg class="hero-curve pointer-events-none absolute inset-0 hidden h-full w-full md:block" viewBox="0 0 1000 410" preserveAspectRatio="none" aria-hidden="true">
      <path fill="#f6c332" d="M0 0H593C481 13 424 81 405 186C388 288 359 360 264 410H0Z" />
      <path fill="#087136" d="M0 0H614C470 13 425 76 405 186C416 108 431 44 480 0Z" />
      <path fill="currentColor" d="M0 0H480C431 44 416 108 405 186C386 311 329 376 193 410H0Z" />
    </svg>

    <div class="hero-copy relative z-10">
      <p class="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.25em] text-brand md:text-[clamp(0.65rem,1.35vw,1rem)]">
        Davao City
        <span class="h-px w-9 bg-brand/75 md:w-[3.6vw]" />
      </p>
      <h1 class="mt-[0.2em] text-[clamp(2.65rem,7.5vw,3.5rem)] font-extrabold leading-[0.94] tracking-[-0.045em] text-forest-deep md:text-[clamp(2rem,4.65vw,5.8rem)]">
        Nature, Culture,<br>
        Adventure.
      </h1>
      <p class="mt-1 font-script text-[clamp(2.75rem,4.7vw,5.8rem)] leading-none text-[#c77e00]">Life is Here.</p>
      <p class="mt-[0.8em] max-w-[36ch] text-sm leading-snug text-navy md:text-[clamp(0.75rem,1.25vw,1.3rem)]">
        Discover the Philippines’ crown jewel in Mindanao — where majestic mountains, rich culture, vibrant festivals, and warm Dabawenyo hospitality await.
      </p>
      <NuxtLink
        to="/explore"
        class="mt-[1.15em] inline-flex w-fit items-center gap-4 rounded-full bg-[#086731] px-[1.35em] py-[0.65em] text-sm font-semibold text-white transition-colors hover:bg-forest-deep md:text-[clamp(0.75rem,1.25vw,1.25rem)]"
      >
        Explore Davao
        <Icon name="lucide:arrow-right" class="size-[1.15em]" />
      </NuxtLink>

      <div class="mt-3 flex w-fit items-center md:mt-[1.7vw]" aria-label="Choose a carousel image">
        <button
          v-for="(slide, index) in slides"
          :key="slide.src"
          type="button"
          class="grid h-6 min-w-4 place-items-center px-0.5"
          :aria-label="`Show image ${index + 1}`"
          :aria-current="index === active ? 'true' : undefined"
          @click="show(index)"
        >
          <span class="h-1.5 rounded-full motion-safe:transition-all" :class="index === active ? 'w-4 bg-[#086731]' : 'w-1.5 bg-[#a8cdb6]'" />
        </button>
      </div>
    </div>

    <div class="absolute bottom-5 right-[4%] z-10 flex items-center gap-3 md:bottom-[7.5%] md:gap-[2vw]">
      <p class="flex items-center gap-2 text-white drop-shadow">
        <Icon name="lucide:map-pin" class="size-5" />
        <span class="text-xs font-semibold leading-tight md:text-[clamp(0.75rem,1.25vw,1.25rem)]">
          Mount Apo
          <span class="block text-[0.8em] font-normal">Davao City</span>
        </span>
      </p>
      <div class="flex gap-2">
        <button type="button" class="hero-arrow" aria-label="Previous image" @click="step(-1)">
          <Icon name="lucide:chevron-left" class="size-1/2" />
        </button>
        <button type="button" class="hero-arrow" aria-label="Next image" @click="step(1)">
          <Icon name="lucide:chevron-right" class="size-1/2" />
        </button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const slides = [
  {
    src: '/images/images (1).jpeg',
    alt: 'Mount Apo above clouds and green Kapatagan highlands, framed by a tree fern',
    position: 'object-center md:origin-right md:scale-110 md:object-bottom',
  },
  {
    src: '/images/hero-apo-banner.jpg',
    alt: 'Mount Apo at sunrise above a sea of clouds and forest',
    position: 'object-[center_45%]',
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

<style scoped>
.hero {
  display: flex;
  flex-direction: column;
  min-height: 100svh;
  background: #fafbfa;
}

.hero-curve {
  color: #fafbfa;
}

.hero-copy {
  padding: 2.25rem 6% 1rem;
}

.hero-photo {
  order: 1;
  flex: 1 0 auto;
  min-height: 16rem;
  aspect-ratio: 1.75;
}

.hero-arrow {
  display: grid;
  width: clamp(2rem, 3.15vw, 3.5rem);
  aspect-ratio: 1;
  place-items: center;
  border-radius: 50%;
  background: #fafbfa;
  color: #086731;
  transition: background-color 150ms;
}

.hero-arrow:hover {
  background: #e2f0e7;
}

@media (min-width: 768px) {
  .hero {
    justify-content: center;
  }

  .hero-photo {
    position: absolute;
    inset: 0 0 0 23%;
    aspect-ratio: auto;
  }

  .hero-copy {
    width: 43%;
    padding-block: 2.1vw 0.75vw;
    padding-inline: 6vw 0;
  }
}
</style>
