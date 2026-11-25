<template>
  <div class="overflow-x-clip bg-transparent">
    <HeroSection />
    <div ref="revealRoot">
      <div data-reveal-group>
        <div data-reveal>
          <CategoryNav />
        </div>
      </div>

      <div data-reveal-group>
        <div data-reveal>
          <MustDoSection :cards="mustDo" />
        </div>
      </div>

      <div data-reveal-group>
        <div data-reveal>
          <FestivalBanner
            v-if="festival"
            :title="festival.title"
            :summary="festivalSummary"
            :image="festival.image"
            to="/events-festivals"
          />
        </div>
      </div>

      <div data-reveal-group>
        <div data-reveal>
          <TripPlanSection :events="events" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { office } from '~/data/site'
import type { Destination } from '~/types/content'

const { getDestinations, getExperiences, getFlavors, getCulture } = useTourismContent()

const { data: destinations } = await useAsyncData('destinations', getDestinations)
const { data: experiences } = await useAsyncData('experiences', getExperiences)
const { data: flavors } = await useAsyncData('flavors', getFlavors)
const { data: culture } = await useAsyncData('culture', getCulture)

interface HomeCard {
  title: string
  image: string
  alt: string
  to: string
  imagePosition?: string
}

function destinationCard(item: Destination): HomeCard {
  return {
    title: item.name,
    image: item.image,
    alt: item.name,
    to: `/destinations/${item.slug}`,
    imagePosition: item.imagePosition,
  }
}

const mustDo = computed(() => {
  const places = destinations.value ?? []
  const activities = experiences.value ?? []
  const tastes = flavors.value ?? []
  const place = (slug: string) => places.find(item => item.slug === slug)
  const activity = (slug: string) => activities.find(item => item.slug === slug)
  const taste = (slug: string) => tastes.find(item => item.slug === slug)
  const cards: HomeCard[] = []

  const crocodile = place('davao-crocodile-park')
  const eden = place('eden-nature-park')
  const apo = place('mount-apo')
  const food = activity('food-gastronomy')
  const outdoor = activity('nature-adventure')
  const durian = taste('durian')

  if (crocodile) cards.push(destinationCard(crocodile))
  if (eden) cards.push(destinationCard(eden))
  if (food) {
    cards.push({
      title: 'Davao Food Experience',
      image: durian?.image ?? food.image,
      alt: durian?.name ?? food.name,
      to: `/things-to-do#${food.slug}`,
      imagePosition: durian ? 'object-center' : food.imagePosition,
    })
  }
  if (outdoor) {
    const scenic = apo?.gallery.find(src => src.includes('forest')) ?? apo?.image ?? outdoor.image
    cards.push({
      title: 'Outdoor Adventures',
      image: scenic,
      alt: apo?.name ?? outdoor.name,
      to: `/things-to-do#${outdoor.slug}`,
      imagePosition: 'object-center',
    })
  }

  for (const item of places) {
    if (cards.length >= 4) break
    if (cards.some(card => card.to.endsWith(`/${item.slug}`))) continue
    cards.push(destinationCard(item))
  }

  return cards.slice(0, 4)
})

const festival = computed(() => {
  const items = culture.value ?? []
  return items.find(item => /kadayawan/i.test(item.title)) ?? items[0] ?? null
})

const festivalSummary = computed(() => {
  if (!festival.value) return ''
  if (/kadayawan/i.test(festival.value.title)) {
    return 'A celebration of life, culture, and abundance in the Heart of Davao City.'
  }
  return festival.value.summary
})

const events = computed(() => (culture.value ?? []).slice(0, 3).map((item) => {
  const month = /kadayawan/i.test(item.title) ? 'AUG' : /harvest|festival/i.test(item.summary) ? 'AUG' : ''
  return {
    title: item.title,
    summary: item.summary,
    to: '/events-festivals',
    badge: month,
  }
}))

const revealRoot = ref<HTMLElement | null>(null)
useScrollReveal(revealRoot)

usePageSeo(
  'Nature, Culture, Adventure',
  'Discover the Philippines’ crown jewel in Mindanao — where majestic mountains, rich culture, vibrant festivals, and warm Dabawenyo hospitality await.',
  '/images/hero-apo-banner.jpg',
)

useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'TouristInformationCenter',
        name: office.name,
        alternateName: office.legalName,
        email: office.email,
        telephone: office.phones[0]?.tel,
        url: office.website,
        address: {
          '@type': 'PostalAddress',
          streetAddress: '2nd Floor, Pasalubong Center, Palma Gil Street',
          addressLocality: 'Davao City',
          postalCode: '8000',
          addressCountry: 'PH',
        },
        openingHours: 'Mo-Fr 08:00-17:00',
      }),
    },
  ],
})
</script>
