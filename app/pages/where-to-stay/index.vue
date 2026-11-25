<template>
  <div>
    <PageHero
      eyebrow="Where to Stay"
      title="Find a base that fits your Davao plans."
      description="City hotels, beach resorts, and highland stays — choose by area, then build the rest of the trip."
      image="/images/jacks-ridge.jpg"
    />

    <section class="py-10 md:py-14">
      <div class="container-page">
        <p class="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-brand">Find your stay</p>
        <h2 class="mt-2 text-2xl font-bold tracking-tight text-navy sm:text-3xl">
          Search Accommodations in Davao
        </h2>

        <form class="mt-6 rounded-[1.35rem] bg-white p-4 shadow-[0_14px_40px_rgba(14,51,37,0.08)] sm:p-5" @submit.prevent>
          <div class="grid gap-3 lg:grid-cols-[1.1fr_1.4fr_0.9fr_auto]">
            <label class="flex items-center gap-3 rounded-2xl bg-[#f4f5f3] px-4 py-3">
              <Icon name="lucide:map-pin" class="size-5 shrink-0 text-brand" aria-hidden="true" />
              <span class="min-w-0 flex-1">
                <span class="block text-[0.7rem] font-semibold uppercase tracking-wide text-[#6b7280]">Location</span>
                <select v-model="location" class="mt-0.5 w-full bg-transparent text-sm font-semibold text-navy outline-none">
                  <option v-for="area in areaOptions" :key="area" :value="area">{{ area }}</option>
                </select>
              </span>
            </label>

            <div class="grid gap-3 sm:grid-cols-2">
              <label class="flex items-center gap-3 rounded-2xl bg-[#f4f5f3] px-4 py-3">
                <Icon name="lucide:calendar-days" class="size-5 shrink-0 text-brand" aria-hidden="true" />
                <span class="min-w-0 flex-1">
                  <span class="block text-[0.7rem] font-semibold uppercase tracking-wide text-[#6b7280]">Check-in</span>
                  <input v-model="checkIn" type="date" class="mt-0.5 w-full bg-transparent text-sm font-semibold text-navy outline-none">
                </span>
              </label>
              <label class="flex items-center gap-3 rounded-2xl bg-[#f4f5f3] px-4 py-3">
                <Icon name="lucide:calendar-days" class="size-5 shrink-0 text-brand" aria-hidden="true" />
                <span class="min-w-0 flex-1">
                  <span class="block text-[0.7rem] font-semibold uppercase tracking-wide text-[#6b7280]">Check-out</span>
                  <input v-model="checkOut" type="date" class="mt-0.5 w-full bg-transparent text-sm font-semibold text-navy outline-none">
                </span>
              </label>
            </div>

            <label class="flex items-center gap-3 rounded-2xl bg-[#f4f5f3] px-4 py-3">
              <Icon name="lucide:users" class="size-5 shrink-0 text-brand" aria-hidden="true" />
              <span class="min-w-0 flex-1">
                <span class="block text-[0.7rem] font-semibold uppercase tracking-wide text-[#6b7280]">Guests</span>
                <select v-model="guests" class="mt-0.5 w-full bg-transparent text-sm font-semibold text-navy outline-none">
                  <option v-for="n in 8" :key="n" :value="n">{{ n }} {{ n === 1 ? 'Guest' : 'Guests' }}</option>
                </select>
              </span>
            </label>

            <button
              type="submit"
              class="inline-flex items-center justify-center gap-2 rounded-full bg-forest px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-forest-deep"
            >
              <Icon name="lucide:search" class="size-4" aria-hidden="true" />
              Search Stays
            </button>
          </div>
        </form>
      </div>
    </section>

    <section class="pb-12 md:pb-16">
      <div class="container-page">
        <div class="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <h2 class="text-2xl font-bold tracking-tight text-navy sm:text-3xl">Top Stays in Davao City</h2>
          <a href="#areas" class="inline-flex items-center gap-1.5 text-sm font-semibold text-brand hover:text-brand-deep">
            View All Accommodations
            <Icon name="lucide:arrow-right" class="size-4" />
          </a>
        </div>

        <div class="mt-6 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          <article
            v-for="stay in stays"
            :key="stay.name"
            class="overflow-hidden rounded-[1.25rem] bg-white shadow-[0_12px_32px_rgba(14,51,37,0.08)]"
          >
            <div class="relative">
              <SiteImage :src="stay.image" :alt="stay.name" class="h-48 w-full object-cover" :class="stay.imagePosition" />
              <button
                type="button"
                class="absolute right-3 top-3 grid size-9 place-items-center rounded-full bg-white/90 text-forest shadow-sm"
                :aria-label="`Save ${stay.name}`"
              >
                <Icon name="lucide:heart" class="size-4" />
              </button>
            </div>
            <div class="relative p-4 sm:p-5">
              <h3 class="text-base font-bold text-navy">{{ stay.name }}</h3>
              <p class="mt-1.5 flex items-center gap-1.5 text-sm text-[#5c675f]">
                <Icon name="lucide:map-pin" class="size-3.5 shrink-0 text-brand" aria-hidden="true" />
                {{ stay.area }}
              </p>
              <p class="mt-2 flex items-center gap-1.5 text-sm text-[#5c675f]">
                <Icon name="lucide:star" class="size-3.5 shrink-0 text-gold" aria-hidden="true" />
                <span class="font-semibold text-navy">{{ stay.rating }}</span>
                <span>({{ stay.reviews }} reviews)</span>
              </p>
              <span class="absolute bottom-4 right-4 grid size-8 place-items-center rounded-full bg-[#c6e86a] text-forest-deep">
                <Icon name="lucide:arrow-right" class="size-4" />
              </span>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section id="areas" class="scroll-mt-28 pb-12 md:pb-16">
      <div class="container-page">
        <div class="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <h2 class="text-2xl font-bold tracking-tight text-navy sm:text-3xl">Popular Areas to Stay</h2>
          <NuxtLink to="/destinations" class="inline-flex items-center gap-1.5 text-sm font-semibold text-brand hover:text-brand-deep">
            Explore More Areas
            <Icon name="lucide:arrow-right" class="size-4" />
          </NuxtLink>
        </div>

        <div class="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          <NuxtLink
            v-for="area in areas"
            :key="area.title"
            :to="area.to"
            class="group relative block h-52 overflow-hidden rounded-[1.25rem]"
          >
            <SiteImage :src="area.image" :alt="area.title" class="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]" />
            <span class="absolute inset-0 bg-gradient-to-t from-forest-deep/90 via-forest-deep/35 to-transparent" />
            <span class="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-4">
              <span>
                <span class="block text-base font-bold text-white">{{ area.title }}</span>
                <span class="mt-1 block text-xs leading-relaxed text-white/85">{{ area.summary }}</span>
              </span>
              <span class="grid size-8 shrink-0 place-items-center rounded-full bg-white text-brand">
                <Icon name="lucide:arrow-right" class="size-4" />
              </span>
            </span>
          </NuxtLink>
        </div>
      </div>
    </section>

    <section class="pb-12 md:pb-16">
      <div class="container-page">
        <div class="relative grid overflow-hidden rounded-[1.5rem] lg:grid-cols-2">
          <div class="relative min-h-[200px]">
            <SiteImage
              src="/images/mount-apo-peak.jpg"
              alt="Mount Apo above clouds"
              class="absolute inset-0 h-full w-full object-cover object-[center_55%]"
            />
          </div>
          <div class="relative bg-forest-deep px-6 py-8 sm:px-8 sm:py-10">
            <div class="pointer-events-none absolute inset-0 opacity-[0.12]" aria-hidden="true" style="background-image: url('/images/festival-pattern.png'); background-size: 280px;" />
            <div class="relative z-10">
              <p class="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-gold">Plan your stay</p>
              <h2 class="mt-2 font-serif text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                Build Your Davao Stay Itinerary
              </h2>
              <p class="mt-3 max-w-[36ch] text-sm leading-relaxed text-white/85">
                Get accommodation ideas, recommended areas, and tips for pairing your stay with parks, beaches, and highland days.
              </p>
              <NuxtLink
                to="/travel-guide"
                class="mt-5 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-forest-deep transition hover:bg-cream"
              >
                Browse Accommodation Guides
                <Icon name="lucide:arrow-right" class="size-4" />
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="pb-16 md:pb-24">
      <div class="container-page">
        <h2 class="text-2xl font-bold tracking-tight text-navy sm:text-3xl">Plan a Comfortable Stay</h2>
        <ul class="mt-8 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          <li v-for="tip in tips" :key="tip.title" class="rounded-[1.25rem] bg-white p-5 shadow-[0_10px_28px_rgba(14,51,37,0.06)]">
            <span class="grid size-11 place-items-center rounded-full" :class="tip.wrap" aria-hidden="true">
              <Icon :name="tip.icon" class="size-5" :class="tip.color" />
            </span>
            <h3 class="mt-4 text-base font-bold text-navy">{{ tip.title }}</h3>
            <p class="mt-2 text-sm leading-relaxed text-[#5c675f]">{{ tip.summary }}</p>
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const location = ref('Davao City')
const checkIn = ref('')
const checkOut = ref('')
const guests = ref(2)

const areaOptions = ['Davao City', 'Lanang', 'Downtown', 'Toril', 'Samal Island', 'Calinan / Malagos']

const stays = [
  {
    name: 'Dusit Thani Residences Davao',
    area: 'Lanang, Davao City',
    rating: '4.8',
    reviews: '312',
    image: '/images/dusitthani.webp',
    imagePosition: 'object-center',
  },
  {
    name: 'Marco Polo Davao',
    area: 'C.M. Recto, Downtown',
    rating: '4.7',
    reviews: '548',
    image: '/images/marcopolo.webp',
    imagePosition: 'object-[center_40%]',
  },
  {
    name: 'Seda Abreeza',
    area: 'J.P. Laurel Ave',
    rating: '4.7',
    reviews: '421',
    image: '/images/seda.webp',
    imagePosition: 'object-center',
  },
  {
    name: 'Waterfront Insular Hotel',
    area: 'Lanang Boulevard',
    rating: '4.5',
    reviews: '286',
    image: '/images/waterinsular.webp',
    imagePosition: 'object-center',
  },
  // {
  //   name: 'Eden Nature Park Lodges',
  //   area: 'Toril Highlands',
  //   rating: '4.6',
  //   reviews: '198',
  //   image: '/images/stay-eden-lodges.jpg',
  //   imagePosition: 'object-center',
  // },
  // {
  //   name: 'Samal Island Beach Resort',
  //   area: 'Island Garden City of Samal',
  //   rating: '4.6',
  //   reviews: '264',
  //   image: '/images/stay-samal-resort.jpg',
  //   imagePosition: 'object-[center_55%]',
  // },
]

const areas = [
  {
    title: 'Downtown Davao',
    summary: 'Walkable base near parks, dining, and city services.',
    image: '/images/peoples-park.jpg',
    to: '/destinations/peoples-park',
  },
  {
    title: 'Lanang',
    summary: 'Business hotels and boulevard access to the gulf.',
    image: '/images/coastal-night.jpg',
    to: '/explore',
  },
  {
    title: 'Toril Highlands',
    summary: 'Cooler air, gardens, and weekend escapes.',
    image: '/images/eden.jpg',
    to: '/destinations/eden-nature-park',
  },
  {
    title: 'Samal Island',
    summary: 'Beach resorts a short boat ride from the city.',
    image: '/images/samal-beach.jpg',
    to: '/destinations/samal-island',
  },
]

const tips = [
  {
    title: 'Travel Tips',
    summary: 'Pack light layers for highland nights and confirm boat schedules for Samal.',
    icon: 'lucide:briefcase',
    wrap: 'bg-[#e7f6ec]',
    color: 'text-brand',
  },
  {
    title: 'Best Time to Book',
    summary: 'Reserve early for December–May weekends and Kadayawan week in August.',
    icon: 'lucide:calendar-days',
    wrap: 'bg-[#fff4df]',
    color: 'text-gold-deep',
  },
  {
    title: 'Nearby Attractions',
    summary: 'Pair city stays with People’s Park, then day-trip to Malagos or Samal.',
    icon: 'lucide:map-pin',
    wrap: 'bg-[#e6f5fa]',
    color: 'text-lagoon',
  },
  {
    title: 'Family Options',
    summary: 'Look for rooms near parks, pools, and easy dining for multi-generation trips.',
    icon: 'lucide:users',
    wrap: 'bg-[#fce7ef]',
    color: 'text-magenta',
  },
]

usePageSeo(
  'Where to Stay in Davao',
  'Find accommodations in Davao City — top stays, popular areas, and tips for a comfortable visit.',
  '/images/jacks-ridge.jpg',
)
</script>
