<template>
  <div>
    <PageHero
      eyebrow="Destinations"
      title="Must-visit places in and around the city."
      description="Eight landscapes, from the summit of Mount Apo to a beach a short boat ride away."
      image="/images/lake-venado.jpg"
    />

    <section class="bg-white py-14 md:py-20">
      <div class="container-page">
        <div class="flex flex-wrap gap-2" role="tablist" aria-label="Filter destinations">
          <button
            type="button"
            class="rounded-full px-4 py-2 text-sm font-semibold"
            :class="selected === 'all' ? 'bg-forest text-white' : 'bg-black/[0.04] text-ink'"
            @click="selected = 'all'"
          >
            All
          </button>
          <button
            v-for="experience in experiences"
            :key="experience.slug"
            type="button"
            class="rounded-full px-4 py-2 text-sm font-semibold"
            :class="selected === experience.slug ? 'bg-forest text-white' : 'bg-black/[0.04] text-ink'"
            @click="selected = experience.slug"
          >
            {{ experience.name }}
          </button>
        </div>

        <p class="mt-6 text-sm text-muted">{{ filtered.length }} {{ filtered.length === 1 ? 'place' : 'places' }}</p>

        <div v-if="filtered.length" class="mt-6 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          <DestinationCard v-for="destination in filtered" :key="destination.slug" :destination="destination" />
        </div>
        <p v-else class="mt-10 rounded-3xl bg-white p-8 text-muted">
          Nothing in this category yet. Try another interest, or view every destination.
        </p>
      </div>
    </section>

    <section class="bg-white pb-16 md:pb-24">
      <div class="container-page">
        <div class="relative overflow-hidden rounded-[1.5rem]">
          <SiteImage
            src="/images/peoples-park-2.jpg"
            alt="Davao City with mountains beyond at golden hour"
            class="absolute inset-0 h-full w-full object-cover object-[68%_42%]"
          />
          <div class="absolute inset-0 bg-[linear-gradient(105deg,rgba(255,255,255,0.96)_0%,rgba(255,255,255,0.9)_34%,rgba(255,255,255,0.45)_52%,rgba(255,255,255,0)_68%)]" />
          <div class="relative z-10 grid gap-5 px-5 py-5 sm:grid-cols-[1.15fr_0.85fr] sm:items-end sm:gap-4 sm:px-7 sm:py-6 lg:px-8">
            <div class="max-w-xl">
              <p class="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-brand">Plan your trip</p>
              <h2 class="mt-1.5 font-serif text-2xl font-semibold tracking-tight text-forest-deep sm:text-3xl">
                Plan Your Davao Escape
              </h2>
              <p class="mt-2 max-w-[38ch] text-sm leading-relaxed text-[#4b5560]">
                Turn your destination ideas into a complete trip. Find the best places to stay and essential travel information for a hassle-free visit.
              </p>
              <NuxtLink
                to="/where-to-stay"
                class="mt-4 inline-flex items-center gap-2 rounded-full bg-gold px-4 py-2.5 text-sm font-semibold text-forest-deep transition hover:bg-gold-deep"
              >
                Build My Itinerary
                <Icon name="lucide:arrow-right" class="size-4" />
              </NuxtLink>
            </div>

            <ul class="grid grid-cols-1 gap-2.5 sm:grid-cols-3">
              <li v-for="link in tripLinks" :key="link.label">
                <NuxtLink
                  :to="link.to"
                  class="flex min-h-[4.25rem] flex-col items-center justify-center gap-1.5 rounded-2xl bg-white px-2 py-3 text-center shadow-[0_10px_28px_rgba(14,51,37,0.12)] transition hover:-translate-y-0.5"
                >
                  <Icon :name="link.icon" class="size-4 text-brand" />
                  <span class="text-xs font-semibold text-forest-deep sm:text-sm">{{ link.label }}</span>
                </NuxtLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const { getDestinations, getExperiences } = useTourismContent()
const { data: destinations } = await useAsyncData('destinations', getDestinations)
const { data: experiences } = await useAsyncData('experiences', getExperiences)

const selected = ref('all')

const filtered = computed(() => {
  const list = destinations.value ?? []
  if (selected.value === 'all') return list
  return list.filter(item => item.experiences.includes(selected.value))
})

const tripLinks = [
  { label: 'Where to Stay', to: '/where-to-stay', icon: 'lucide:bed' },
  { label: 'Travel Information', to: '/travel-guide', icon: 'lucide:info' },

]

usePageSeo(
  'Destinations',
  'Mount Apo, Samal Island, the Philippine Eagle Center, People’s Park, and the other places that define a Davao trip.',
  '/images/lake-venado.jpg',
)
</script>
