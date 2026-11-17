<template>
  <div>
    <PageHero
      eyebrow="Travel Guide"
      title="Plan your Davao trip."
      description="Flights, boats, weather, and the questions visitors ask before they pack."
      image="/images/peoples-park.jpg"
    />
    <section class="bg-sand py-14 md:py-20">
      <div class="container-page">
        <TravelGuide :topics="topics ?? []" :faqs="faqs ?? []" />
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const { getGuide, getFaqs } = useTourismContent()
const { data: topics } = await useAsyncData('guide', getGuide)
const { data: faqs } = await useAsyncData('faqs', getFaqs)

usePageSeo(
  'Travel Guide',
  'How to reach Davao, how to get around, when to visit, and what to ask the tourism office.',
  '/images/peoples-park.jpg',
)
</script>
