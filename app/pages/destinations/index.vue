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

usePageSeo(
  'Destinations',
  'Mount Apo, Samal Island, the Philippine Eagle Center, People’s Park, and the other places that define a Davao trip.',
  '/images/lake-venado.jpg',
)
</script>
