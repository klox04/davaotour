<template>
  <div>
    <PageHero
      eyebrow="Events & Festivals"
      :title="cultureIntro.title"
      :description="cultureIntro.summary"
      image="/images/kadayawan-parade.jpg"
      image-position="object-[center_30%]"
    />

    <section class=" py-14 md:py-20">
      <div class="container-page grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
        <SiteImage
          src="/images/kadayawan.jpg"
          alt="Children in traditional festival attire at Kadayawan"
          class="aspect-[5/4] w-full rounded-[1.75rem] object-cover object-[center_20%] shadow-[0_18px_44px_rgba(14,51,37,0.1)]"
        />
        <div>
          <p class="font-serif text-[0.78rem] font-semibold uppercase tracking-[0.2em] text-gold">
            Featured Festival
          </p>
          <h2 class="mt-3 font-serif text-4xl font-semibold tracking-tight text-forest-deep sm:text-5xl">
            Kadayawan Festival
          </h2>
          <p class="mt-4 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            The name comes from “Madayaw,” a word for what is good, beautiful, and of value. Every August, Davao thanks the harvest and the indigenous cultures of the city. The Indak-indak street-dancing parade and the floral floats are the public heart of the week.
          </p>
          <div class="mt-7 flex flex-wrap gap-3">
            <NuxtLink
              to="#experiences"
              class="inline-flex items-center gap-2 rounded-full bg-forest px-5 py-3 text-sm font-semibold text-white transition hover:bg-forest-deep"
            >
              Experience Kadayawan
              <Icon name="lucide:arrow-right" class="size-4" aria-hidden="true" />
            </NuxtLink>
            <button
              type="button"
              class="inline-flex items-center gap-2 rounded-full border border-forest/25 bg-white px-5 py-3 text-sm font-semibold text-forest transition hover:border-forest/45 hover:bg-sand"
              @click="openVideo"
            >
              <Icon name="lucide:play" class="size-4" aria-hidden="true" />
              Watch Highlights
            </button>
          </div>
        </div>
      </div>
    </section>

    <Teleport to="body">
      <dialog
        ref="videoDialog"
        data-lenis-prevent
        class="fixed left-1/2 top-1/2 z-[60] m-0 w-[min(960px,calc(100%-1.5rem))] -translate-x-1/2 -translate-y-1/2 rounded-[1.4rem] border-0 bg-forest-deep p-3 text-white shadow-2xl open:flex open:flex-col backdrop:bg-black/70"
        aria-label="Kadayawan festival highlights video"
        @close="onVideoDialogClose"
        @click="onVideoBackdropClick"
      >
        <div class="min-w-0" @click.stop>
          <div class="overflow-hidden rounded-2xl bg-black">
            <video
              ref="videoEl"
              class="aspect-video max-h-[min(75vh,720px)] w-full"
              controls
              playsinline
              preload="metadata"
              poster="/images/kadayawan.jpg"
            >
              <source src="/video/kadayawan.mp4" type="video/mp4">
              Your browser does not support the video tag.
            </video>
          </div>
          <div class="flex items-center justify-between gap-3 px-2 py-3">
            <p class="text-sm font-medium">Kadayawan Festival Highlights</p>
            <button
              type="button"
              class="rounded-full bg-gold px-4 py-2 text-sm font-semibold text-ink transition hover:bg-gold-deep"
              @click="closeVideo"
            >
              Close
            </button>
          </div>
        </div>
      </dialog>
    </Teleport>

    <section id="experiences" class="scroll-mt-28 pb-16 md:pb-24">
      <div class="container-page">
        <div class="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p class="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-gold">Explore</p>
            <h2 class="mt-2 max-w-xl font-serif text-3xl font-semibold tracking-tight text-forest-deep sm:text-4xl">
              Davao’s Festivals &amp; Cultural Experiences
            </h2>
          </div>
          <NuxtLink
            to="/things-to-do"
            class="inline-flex shrink-0 items-center gap-1.5 text-sm font-semibold text-forest hover:text-forest-deep"
          >
            View All Events &amp; Festivals
            <Icon name="lucide:arrow-right" class="size-4" aria-hidden="true" />
          </NuxtLink>
        </div>

        <div class="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <article
            v-for="item in experienceCards"
            :key="item.title"
            class="group relative flex flex-col overflow-hidden rounded-[1.35rem] bg-white shadow-[0_12px_32px_rgba(14,51,37,0.08)]"
          >
            <SiteImage
              :src="item.image"
              :alt="item.title"
              class="aspect-[4/3] w-full object-cover"
            />
            <div class="flex flex-1 flex-col p-4 pb-12 sm:p-5 sm:pb-14">
              <h3 class="text-base font-bold tracking-tight text-forest-deep sm:text-lg">
                {{ item.title }}
              </h3>
              <p class="mt-2 text-sm leading-relaxed text-muted">
                {{ item.summary }}
              </p>
            </div>
            <span
              class="absolute bottom-4 right-4 grid size-8 place-items-center rounded-full bg-forest text-white transition group-hover:bg-forest-deep"
              aria-hidden="true"
            >
              <Icon name="lucide:arrow-right" class="size-3.5" />
            </span>
          </article>
        </div>
      </div>
    </section>

    <section id="peoples" class="relative scroll-mt-28 bg-forest-deep text-white">
      <div class="pointer-events-none absolute inset-x-0 top-0 z-10 -translate-y-[1px]" aria-hidden="true">
        <svg viewBox="0 0 1440 48" preserveAspectRatio="none" class="block h-8 w-full md:h-10">
          <path fill="currentColor" d="M0,32 C240,48 480,8 720,24 C960,40 1200,8 1440,28 L1440,0 L0,0 Z" />
        </svg>
      </div>

      <div class="container-page py-16 md:py-20">
        <div class="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-end lg:gap-12">
          <div>
            <h2 class="font-serif text-4xl font-semibold tracking-tight sm:text-5xl">
              Peoples of the City
            </h2>
            <span class="mt-3 block h-1 w-16 rounded-full bg-gold" aria-hidden="true" />
          </div>
          <p class="max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg">
            These are living communities. A cultural village during Kadayawan is an introduction, not the whole story. Museums such as Museo Dabawenyo are a respectful next step.
          </p>
        </div>

        <div class="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          <article
            v-for="community in communities"
            :key="community.name"
            class="group relative overflow-hidden rounded-[1.35rem] bg-white/[0.07] ring-1 ring-white/10"
          >
            <SiteImage
              :src="community.image"
              :alt="community.name"
              class="aspect-[16/10] w-full object-cover"
            />
            <div class="p-4 pb-12 sm:p-5 sm:pb-14">
              <h3 class="font-serif text-xl font-semibold tracking-tight sm:text-[1.35rem]">
                {{ community.name }}
              </h3>
              <p class="mt-2 text-sm leading-relaxed text-white/75">
                {{ community.summary }}
              </p>
            </div>
            <span
              class="absolute bottom-4 right-4 grid size-8 place-items-center rounded-full bg-tropical/40 text-white transition group-hover:bg-tropical"
              aria-hidden="true"
            >
              <Icon name="lucide:arrow-right" class="size-3.5" />
            </span>
          </article>
        </div>
      </div>

      <div class="pointer-events-none absolute inset-x-0 bottom-0 z-10 translate-y-[1px] text-white" aria-hidden="true">
        <svg viewBox="0 0 1440 48" preserveAspectRatio="none" class="block h-8 w-full rotate-180 md:h-10">
          <path fill="currentColor" d="M0,32 C240,48 480,8 720,24 C960,40 1200,8 1440,28 L1440,0 L0,0 Z" />
        </svg>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { useLenis } from 'lenis/vue'
import { communities, cultureIntro } from '~/data/culture'

const { getCulture } = useTourismContent()
const { data: highlights } = await useAsyncData('culture', getCulture)

const experienceCards = computed(() =>
  (highlights.value ?? []).filter(item => item.title !== 'Kadayawan Festival'),
)

const lenis = useLenis()
const videoDialog = ref<HTMLDialogElement | null>(null)
const videoEl = ref<HTMLVideoElement | null>(null)

async function openVideo() {
  await nextTick()
  if (!videoDialog.value?.open) videoDialog.value?.showModal()
  lenis.value?.stop()
  document.body.style.overflow = 'hidden'
  await nextTick()
  void videoEl.value?.play().catch(() => {})
}

function closeVideo() {
  videoDialog.value?.close()
}

function onVideoDialogClose() {
  if (videoEl.value) {
    videoEl.value.pause()
    videoEl.value.currentTime = 0
  }
  lenis.value?.start()
  document.body.style.overflow = ''
}

function onVideoBackdropClick(event: MouseEvent) {
  if (event.target === videoDialog.value) closeVideo()
}

onUnmounted(() => {
  if (videoDialog.value?.open) videoDialog.value.close()
  document.body.style.overflow = ''
})

usePageSeo(
  'Events & Festivals',
  'Kadayawan Festival, indigenous heritage, and the celebrations that give Davao its color.',
  '/images/kadayawan-parade.jpg',
)
</script>
