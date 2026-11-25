<template>
  <div>
    <PageHero
      eyebrow="Explore Davao"
      title="A city shaped by mountain, gulf, and harvest."
      description="Nature, culture, adventure, and warm hospitality are not four slogans here. They are the way the place is put together."
      image="/images/hero-mount-apo.jpg"
      image-position="object-[center_40%]"
    />

    <section class="py-14 md:py-20">
      <div class="container-page grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
        <div>
          <p class="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-brand">The place</p>
          <h2 class="mt-3 font-serif text-4xl font-semibold tracking-tight text-forest-deep sm:text-5xl">
            More than a skyline
          </h2>
          <div class="mt-5 max-w-xl space-y-4 text-base leading-relaxed text-[#5c675f] sm:text-lg">
            <p>
              Davao City spreads between Mount Apo, the country’s highest peak, and the gulf that holds Samal Island. The center is orderly and green. The edges climb into cacao hills, eagle country, and forest that still asks for a guide.
            </p>
            <p>
              People come for the fruit, stay for the parks, and leave talking about a festival that treats indigenous heritage as the main event rather than the opening act. That mix is the trip.
            </p>
          </div>
        </div>
        <SiteImage
          src="/images/mount-apo-peak.jpg"
          alt="Mount Apo summit above clouds"
          class="aspect-[5/4] w-full rounded-[1.75rem] object-cover shadow-[0_18px_50px_rgba(14,51,37,0.12)]"
        />
      </div>
    </section>

    <section class="pb-14 md:pb-20">
      <div class="container-page grid gap-5 md:grid-cols-3">
        <NuxtLink
          v-for="pillar in pillars"
          :key="pillar.title"
          :to="pillar.to"
          class="group overflow-hidden rounded-[1.5rem] bg-white shadow-[0_12px_36px_rgba(14,51,37,0.08)] transition hover:-translate-y-0.5"
        >
          <SiteImage
            :src="pillar.image"
            :alt="pillar.alt"
            class="h-48 w-full object-cover sm:h-52"
            :class="pillar.imagePosition"
          />
          <div class="p-5 sm:p-6">
            <div class="flex items-start justify-between gap-3">
              <div class="flex items-center gap-2.5">
                <span
                  class="grid size-9 place-items-center rounded-full"
                  :class="pillar.iconWrap"
                  aria-hidden="true"
                >
                  <Icon :name="pillar.icon" class="size-4" :class="pillar.iconColor" />
                </span>
                <h3 class="text-xl font-bold tracking-tight text-forest-deep">{{ pillar.title }}</h3>
              </div>
              <span class="mt-0.5 grid size-8 shrink-0 place-items-center rounded-full border border-forest/15 text-forest transition group-hover:bg-forest group-hover:text-white">
                <Icon name="lucide:arrow-right" class="size-4" />
              </span>
            </div>
            <p class="mt-3 text-sm leading-relaxed text-[#5c675f]">{{ pillar.summary }}</p>
          </div>
        </NuxtLink>
      </div>
    </section>

    <section class="pb-14 md:pb-20">
      <div class="container-page">
        <div class="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p class="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-brand">Experience Davao</p>
            <h2 class="mt-1 font-serif text-3xl font-semibold tracking-tight text-forest-deep sm:text-4xl">
              Must-See Experiences
            </h2>
          </div>
          <NuxtLink to="/destinations" class="inline-flex items-center gap-1.5 text-sm font-semibold text-brand hover:text-brand-deep">
            View All Destinations
            <Icon name="lucide:arrow-right" class="size-4" />
          </NuxtLink>
        </div>

        <div class="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          <NuxtLink
            v-for="spot in mustSee"
            :key="spot.to"
            :to="spot.to"
            class="group relative block h-56 overflow-hidden rounded-[1.35rem] sm:h-64"
          >
            <SiteImage
              :src="spot.image"
              :alt="spot.alt"
              class="h-full w-full object-cover transition duration-700 group-hover:scale-[1.04]"
              :class="spot.imagePosition"
            />
            <span class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />
            <span class="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-4">
              <span>
                <span class="block text-lg font-bold leading-tight text-white">{{ spot.title }}</span>
                <span class="mt-1 block text-sm text-white/85">{{ spot.subtitle }}</span>
              </span>
              <span class="grid size-9 shrink-0 place-items-center rounded-full bg-white text-navy">
                <Icon name="lucide:arrow-right" class="size-4" />
              </span>
            </span>
          </NuxtLink>
        </div>
      </div>
    </section>

    <section class="pb-14 md:pb-20">
      <div class="container-page">
        <div class="rounded-[1.5rem] bg-gray-50 px-6 py-8 sm:px-8 sm:py-10 lg:px-10">
          <div class="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <h2 class="font-serif text-3xl font-semibold tracking-tight text-forest-deep sm:text-4xl">
                Davao at a Glance
              </h2>
              <p class="mt-3 max-w-md text-sm leading-relaxed text-[#5c675f] sm:text-base">
                A quick look at what makes the city worth the flight — and easy to explore once you land.
              </p>
            </div>
            <ul class="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0">
              <li
                v-for="(item, index) in glance"
                :key="item.title"
                class="sm:border-l-0 lg:border-l lg:border-forest/10 lg:px-5"
                :class="index === 0 ? 'lg:border-l-0 lg:pl-0' : ''"
              >
                <span class="grid size-10 place-items-center rounded-full" :class="item.iconWrap" aria-hidden="true">
                  <Icon :name="item.icon" class="size-5" :class="item.iconColor" />
                </span>
                <p class="mt-3 text-sm font-bold text-forest-deep">{{ item.title }}</p>
                <p class="mt-1 text-xs leading-relaxed text-[#5c675f]">{{ item.summary }}</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section class="pb-16 md:pb-24">
      <div class="container-page">
        <div class="relative grid overflow-hidden rounded-[1.75rem] bg-[#0e3325] lg:grid-cols-[0.92fr_1.08fr]">
          <div class="relative z-20 flex flex-col justify-center px-7 py-10 sm:px-10 sm:py-12 lg:py-14 lg:pr-4">
            <h2 class="max-w-[12ch] font-serif text-3xl font-semibold leading-[1.05] tracking-tight text-white sm:text-4xl md:text-[2.85rem]">
              Plan Your Trip
              <span class="mt-1 block text-gold">to Davao</span>
            </h2>
            <p class="mt-4 max-w-[34ch] text-sm leading-relaxed text-white/90 sm:text-[0.95rem]">
              Discover places to go, things to do, where to stay, and more. Create your Davao itinerary and experience the city at its best.
            </p>
            <NuxtLink
              to="/where-to-stay"
              class="mt-7 inline-flex w-fit items-center gap-2 rounded-full bg-gold px-5 py-3 text-sm font-semibold text-forest-deep transition hover:bg-gold-deep"
            >
              Start Planning
              <Icon name="lucide:arrow-right" class="size-4" />
            </NuxtLink>
          </div>

          <div class="relative min-h-[280px] sm:min-h-[320px] lg:min-h-[380px]">
            <svg
              class="pointer-events-none absolute inset-y-0 -left-px z-10 hidden h-full w-[4.75rem] lg:block"
              viewBox="0 0 76 380"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <path fill="#0e3325" d="M0 0H34C58 55 66 120 42 190C18 260 10 320 0 380V0Z" />
              <path fill="#d9a441" d="M30 0C54 55 62 120 38 190C14 260 6 320 0 380H10C22 318 34 258 54 192C74 126 66 58 44 0H30Z" />
            </svg>

            <SiteImage
              src="/images/peoples-park-2.jpg"
              alt="Davao City rooftops, trees, and mountains beyond"
              class="absolute inset-0 h-full w-full object-cover object-[center_35%]"
            />

            <ul class="absolute inset-x-3 bottom-3 z-10 grid grid-cols-2 gap-2 sm:inset-x-5 sm:bottom-5 sm:grid-cols-4 sm:gap-3">
              <li v-for="link in tripLinks" :key="link.label">
                <NuxtLink
                  :to="link.to"
                  class="flex h-full min-h-[4.75rem] flex-col items-center justify-center gap-1.5 rounded-2xl bg-white px-2 py-3 text-center shadow-[0_10px_28px_rgba(14,51,37,0.18)] transition hover:-translate-y-0.5"
                >
                  <Icon :name="link.icon" class="size-5 text-forest-deep" />
                  <span class="text-[0.7rem] font-semibold leading-tight text-forest-deep sm:text-xs">{{ link.label }}</span>
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
const pillars = [
  {
    title: 'Nature',
    summary: 'From a highland garden in Toril to a permitted climb of Mount Apo, the outdoors scale to the day you have.',
    image: '/images/mount-apo-trail.jpg',
    alt: 'Forest trail on Mount Apo',
    imagePosition: 'object-center',
    icon: 'lucide:leaf',
    iconWrap: 'bg-[#e7f6ec]',
    iconColor: 'text-brand',
    to: '/things-to-do#nature-adventure',
  },
  {
    title: 'Culture',
    summary: 'Kadayawan, weaving, and community celebrations keep Davao’s many peoples in the foreground.',
    image: '/images/kadayawan.jpg',
    alt: 'Kadayawan performers',
    imagePosition: 'object-top',
    icon: 'lucide:users',
    iconWrap: 'bg-[#fce7ef]',
    iconColor: 'text-magenta',
    to: '/events-festivals',
  },
  {
    title: 'Flavors',
    summary: 'Durian, pomelo, mangosteen, kinilaw, and chocolate from the same hills you can visit in an afternoon.',
    image: '/images/durian-basket.jpg',
    alt: 'Basket of durian',
    imagePosition: 'object-center',
    icon: 'lucide:utensils',
    iconWrap: 'bg-[#fff4df]',
    iconColor: 'text-gold-deep',
    to: '/things-to-do#food-gastronomy',
  },
]

const mustSee = [
  {
    title: 'Mount Apo',
    subtitle: 'Highest peak in the Philippines',
    image: '/images/mount-apo-peak.jpg',
    alt: 'Mount Apo summit ridge',
    imagePosition: 'object-[center_55%]',
    to: '/destinations/mount-apo',
  },
  {
    title: 'Philippine Eagle',
    subtitle: 'Meet the national bird',
    image: '/images/eagle-portrait.jpg',
    alt: 'Philippine Eagle',
    imagePosition: 'object-[center_20%]',
    to: '/destinations/philippine-eagle-center',
  },
  {
    title: 'Samal Island',
    subtitle: 'Beaches across the channel',
    image: '/images/samal-beach.jpg',
    alt: 'Samal Island beach',
    imagePosition: 'object-[center_72%]',
    to: '/destinations/samal-island',
  },
  {
    title: 'People’s Park',
    subtitle: 'The city’s favorite green room',
    image: '/images/peoples-park.jpg',
    alt: 'People’s Park dome',
    imagePosition: 'object-center',
    to: '/destinations/peoples-park',
  },
]

const glance = [
  {
    title: 'Natural Wonders',
    summary: 'Mountains, parks, and protected wildlife',
    icon: 'lucide:mountain',
    iconWrap: 'bg-[#e7f6ec]',
    iconColor: 'text-brand',
  },
  {
    title: 'Living Culture',
    summary: 'Festivals and indigenous heritage',
    icon: 'lucide:landmark',
    iconWrap: 'bg-[#fce7ef]',
    iconColor: 'text-magenta',
  },
  {
    title: 'Local Flavors',
    summary: 'Fruit, seafood, and highland cacao',
    icon: 'lucide:utensils-crossed',
    iconWrap: 'bg-[#fff4df]',
    iconColor: 'text-gold-deep',
  },
  {
    title: 'Easy Access',
    summary: 'Airport close to the city center',
    icon: 'lucide:plane',
    iconWrap: 'bg-[#e6f5fa]',
    iconColor: 'text-lagoon',
  },
]

const tripLinks = [
  { label: 'Destinations', to: '/destinations', icon: 'lucide:map-pin' },
  { label: 'Where to Stay', to: '/where-to-stay', icon: 'lucide:bed' },

  { label: 'Events & Festivals', to: '/events-festivals', icon: 'lucide:calendar-days' },
]

usePageSeo(
  'Explore Davao',
  'Davao City is more than a stopover. It is a meeting place of mountain, gulf, harvest, and living culture.',
  '/images/hero-mount-apo.jpg',
)
</script>
