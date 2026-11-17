<template>
  <article v-if="destination">
    <PageHero
      :eyebrow="destination.location"
      :title="destination.name"
      :description="destination.summary"
      :image="destination.image"
      :image-position="destination.imagePosition"
    />

    <section class="bg-cream py-14 md:py-20">
      <div class="container-page grid gap-10 lg:grid-cols-[1.4fr_0.8fr]">
        <div class="space-y-4 text-lg leading-relaxed text-ink/85">
          <p v-for="paragraph in destination.description" :key="paragraph">{{ paragraph }}</p>
        </div>
        <aside class="h-fit rounded-[1.5rem] bg-white p-6 shadow-[0_10px_30px_rgba(22,75,53,0.05)]">
          <p class="text-xs font-semibold uppercase tracking-[0.2em] text-tropical">At a glance</p>
          <p class="mt-3 flex items-start gap-2 text-sm text-ink">
            <Icon name="lucide:map-pin" class="mt-0.5 size-4 text-gold" />
            {{ destination.location }}
          </p>
          <ul class="mt-4 space-y-2">
            <li v-for="highlight in destination.highlights" :key="highlight" class="rounded-full bg-cream px-3 py-2 text-sm text-forest">
              {{ highlight }}
            </li>
          </ul>
          <p v-if="destination.practical" class="mt-5 text-sm leading-relaxed text-muted">
            {{ destination.practical }}
          </p>
          <NuxtLink to="/contact" class="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-forest">
            Ask the tourism office
            <Icon name="lucide:arrow-right" class="size-4" />
          </NuxtLink>
        </aside>
      </div>

      <div class="container-page mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <SiteImage
          v-for="image in destination.gallery"
          :key="image"
          :src="image"
          :alt="`${destination.name} in Davao`"
          class="aspect-[4/3] w-full rounded-[1.3rem] object-cover"
        />
      </div>
    </section>

    <section class="bg-white py-16">
      <div class="container-page">
        <h2 class="font-serif text-3xl text-forest">Continue exploring</h2>
        <div class="mt-6 grid gap-5 md:grid-cols-3">
          <DestinationCard v-for="item in related" :key="item.slug" :destination="item" />
        </div>
      </div>
    </section>
  </article>
</template>

<script setup lang="ts">
const route = useRoute()
const { getDestinations } = useTourismContent()
const { data: destinations } = await useAsyncData('destinations', getDestinations)

const destination = computed(() =>
  destinations.value?.find(item => item.slug === String(route.params.slug)),
)

const current = destination.value

if (!current) {
  throw createError({ statusCode: 404, statusMessage: 'Destination not found' })
}

const related = computed(() =>
  (destinations.value ?? []).filter(item => item.slug !== destination.value?.slug).slice(0, 3),
)

watch(destination, (value) => {
  if (destinations.value && !value) {
    showError(createError({ statusCode: 404, statusMessage: 'Destination not found' }))
  }
})

useSeoMeta({
  title: computed(() => destination.value ? `${destination.value.name} · Davao City Tourism` : 'Destination'),
  description: computed(() => destination.value?.summary ?? ''),
  ogTitle: computed(() => destination.value ? `${destination.value.name} · Davao City Tourism` : 'Destination'),
  ogDescription: computed(() => destination.value?.summary ?? ''),
  ogImage: computed(() => destination.value?.image ?? '/images/mount-apo-peak.jpg'),
  twitterCard: 'summary_large_image',
})
</script>
