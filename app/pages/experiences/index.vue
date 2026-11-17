<template>
  <div>
    <PageHero
      eyebrow="Experiences"
      title="Find the Davao that fits the trip."
      description="Six ways in. Follow the one that sounds like your kind of day."
      image="/images/mount-apo-forest.jpg"
    />

    <div class="bg-cream">
      <section
        v-for="(experience, index) in experiences"
        :id="experience.slug"
        :key="experience.slug"
        class="scroll-mt-28 border-b border-sand py-14 md:py-20"
      >
        <div class="container-page grid items-center gap-8 lg:grid-cols-2">
          <SiteImage
            :src="experience.image"
            :alt="experience.name"
            class="aspect-[4/3] w-full rounded-[1.5rem] object-cover"
            :class="[experience.imagePosition, index % 2 === 1 ? 'lg:order-2' : '']"
          />
          <div>
            <p class="text-xs font-semibold uppercase tracking-[0.22em] text-tropical">0{{ index + 1 }}</p>
            <h2 class="mt-2 font-serif text-4xl text-forest">{{ experience.name }}</h2>
            <p class="mt-4 text-lg leading-relaxed text-muted">{{ experience.description }}</p>
            <ul class="mt-6 flex flex-wrap gap-2">
              <li v-for="place in placesFor(experience.destinationSlugs)" :key="place.slug">
                <NuxtLink
                  :to="`/destinations/${place.slug}`"
                  class="inline-flex rounded-full bg-white px-4 py-2 text-sm font-semibold text-forest shadow-sm"
                >
                  {{ place.name }}
                </NuxtLink>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
const { getExperiences, getDestinations } = useTourismContent()
const { data: experiences } = await useAsyncData('experiences', getExperiences)
const { data: destinations } = await useAsyncData('destinations', getDestinations)

function placesFor(slugs: string[]) {
  return (destinations.value ?? []).filter(item => slugs.includes(item.slug))
}

usePageSeo(
  'Experiences',
  'Explore Davao by interest: nature, islands, food, culture, family days, and wildlife.',
  '/images/kadayawan-parade.jpg',
)
</script>
