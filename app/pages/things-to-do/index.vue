<template>
  <div >
    <PageHero
      eyebrow="Things to Do"
      title="Find the Davao that fits the trip."
      description="Six ways in. Follow the one that sounds like your kind of day."
      image="/images/mount-apo-forest.jpg"
    />

    <section class="py-10 md:py-14">
      <div class="container-page">
        <div class="flex gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden" role="tablist" aria-label="Filter experiences">
          <button
            type="button"
            class="inline-flex shrink-0 items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition"
            :class="selected === 'all' ? 'bg-forest text-white' : 'bg-white text-forest shadow-sm ring-1 ring-black/5'"
            @click="selected = 'all'"
          >
            All
          </button>
          <button
            v-for="experience in experiences"
            :key="experience.slug"
            type="button"
            class="inline-flex shrink-0 items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition"
            :class="selected === experience.slug ? 'bg-forest text-white' : 'bg-white text-forest shadow-sm ring-1 ring-black/5'"
            @click="selected = experience.slug"
          >
            <Icon :name="iconFor(experience.slug)" class="size-4" aria-hidden="true" />
            {{ experience.name }}
          </button>
        </div>

        <div class="mt-8 grid gap-5 lg:grid-cols-2">
          <article
            v-for="(experience, index) in filtered"
            :id="experience.slug"
            :key="experience.slug"
            class="scroll-mt-28 grid overflow-hidden rounded-[1.35rem] bg-white shadow-[0_10px_30px_rgba(14,51,37,0.08)] sm:grid-cols-[0.9fr_1.1fr]"
          >
            <SiteImage
              :src="experience.image"
              :alt="experience.name"
              class="h-44 w-full object-cover sm:h-full sm:min-h-[14rem]"
              :class="experience.imagePosition"
            />
            <div class="relative flex flex-col p-5 sm:p-6">
              <p class="text-sm font-bold tracking-wide text-gold">{{ String(index + 1).padStart(2, '0') }}</p>
              <h2 class="mt-1 font-serif text-2xl font-semibold tracking-tight text-forest-deep sm:text-[1.7rem]">
                {{ experience.name }}
              </h2>
              <p class="mt-2 text-sm leading-relaxed text-[#5c675f]">
                {{ experience.summary }}
              </p>
              <ul class="mt-4 flex flex-wrap gap-2">
                <li v-for="place in placesFor(experience.destinationSlugs).slice(0, 3)" :key="place.slug">
                  <NuxtLink
                    :to="`/destinations/${place.slug}`"
                    class="inline-flex rounded-full border border-forest/20 bg-white px-3 py-1.5 text-xs font-semibold text-forest transition hover:border-forest/40"
                  >
                    {{ place.name }}
                  </NuxtLink>
                </li>
              </ul>
              <NuxtLink
               
                class="absolute bottom-5 right-5 grid size-9 place-items-center rounded-full bg-forest text-white transition hover:bg-forest-deep sm:bottom-6 sm:right-6"
                :aria-label="`Explore ${experience.name}`"
              >
                <Icon name="lucide:arrow-right" class="size-4" />
              </NuxtLink>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section class="pb-12 md:pb-16">
      <div class="container-page">
        <div class="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p class="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-gold-deep">Featured experiences</p>
            <h2 class="mt-1 font-serif text-3xl font-semibold tracking-tight text-forest-deep sm:text-4xl">
              More Ways to Experience Davao
            </h2>
          </div>
          <NuxtLink to="/things-to-do" class="inline-flex items-center gap-1.5 text-sm font-semibold text-brand hover:text-brand-deep">
            View All Experiences
            <Icon name="lucide:arrow-right" class="size-4" />
          </NuxtLink>
        </div>

        <div class="mt-7 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          <NuxtLink
            v-for="item in featured"
            :key="item.to"
            :to="item.to"
            class="group overflow-hidden rounded-[1.25rem] bg-forest-deep shadow-[0_12px_30px_rgba(14,51,37,0.12)]"
          >
            <SiteImage
              :src="item.image"
              :alt="item.title"
              class="h-44 w-full object-cover transition duration-500 group-hover:scale-[1.03]"
              :class="item.imagePosition"
            />
            <div class="relative px-4 py-4">
              <div class="flex items-start gap-2 pr-8">
                <Icon :name="item.icon" class="mt-0.5 size-4 shrink-0 text-gold" aria-hidden="true" />
                <div>
                  <h3 class="text-sm font-bold text-white">{{ item.title }}</h3>
                  <p class="mt-1 text-xs leading-relaxed text-white/75">{{ item.summary }}</p>
                </div>
              </div>
              <span class="absolute bottom-4 right-4 grid size-7 place-items-center rounded-full bg-white/15 text-white">
                <Icon name="lucide:arrow-right" class="size-3.5" />
              </span>
            </div>
          </NuxtLink>
        </div>
      </div>
    </section>

    <section class="pb-16 md:pb-24">
      <div class="container-page">
        <div class="relative overflow-hidden rounded-[1.5rem]">
          <SiteImage
            src="/images/mount-apo-kapatagan.jpg"
            alt="Mount Apo and farmland under open sky"
            class="absolute inset-0 h-full w-full object-cover object-[center_45%]"
          />
          <div class="absolute inset-0 bg-gradient-to-r from-forest-deep/90 via-forest-deep/70 to-forest-deep/35" />
          <div class="relative z-10 flex flex-col gap-5 px-6 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-8 sm:py-9 lg:px-10">
            <div class="max-w-xl">
              <p class="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-gold">Plan your Davao adventure</p>
              <h2 class="mt-1.5 font-serif text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                Create Your Davao Itinerary
              </h2>
              <p class="mt-2 max-w-[40ch] text-sm leading-relaxed text-white/85">
                Build a day that mixes trail time, city greens, and a Samal swim — then keep the essentials in one place.
              </p>
            </div>
            <NuxtLink
              to="/where-to-stay"
              class="inline-flex w-fit shrink-0 items-center gap-2 rounded-full bg-gold px-5 py-3 text-sm font-semibold text-forest-deep transition hover:bg-gold-deep"
            >
              Plan Your Trip
              <Icon name="lucide:arrow-right" class="size-4" />
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const { getExperiences, getDestinations } = useTourismContent()
const { data: experiences } = await useAsyncData('experiences', getExperiences)
const { data: destinations } = await useAsyncData('destinations', getDestinations)

const route = useRoute()
const selected = ref('all')

onMounted(() => {
  const hash = route.hash.replace(/^#/, '')
  if (hash && (experiences.value ?? []).some(item => item.slug === hash)) {
    selected.value = hash
  }
})

const filtered = computed(() => {
  const list = experiences.value ?? []
  if (selected.value === 'all') return list
  return list.filter(item => item.slug === selected.value)
})

function placesFor(slugs: string[]) {
  return (destinations.value ?? []).filter(item => slugs.includes(item.slug))
}

function iconFor(slug: string) {
  const map: Record<string, string> = {
    'nature-adventure': 'lucide:mountain',
    'beaches-islands': 'lucide:palmtree',
    'food-gastronomy': 'lucide:utensils',
    'culture-heritage': 'lucide:landmark',
    'family-attractions': 'lucide:users',
    'wildlife-conservation': 'lucide:bird',
  }
  return map[slug] ?? 'lucide:compass'
}

const featured = [
  {
    title: 'Hike Mount Apo',
    summary: 'Permitted trails toward the country’s highest peak.',
    image: '/images/mount-apo-trail.jpg',
    imagePosition: 'object-center',
    icon: 'lucide:footprints',
    to: '/destinations/mount-apo',
  },
  {
    title: 'Meet the Eagle',
    summary: 'A quiet hour with the national bird in Malagos.',
    image: '/images/eagle-portrait.jpg',
    imagePosition: 'object-[center_20%]',
    icon: 'lucide:bird',
    to: '/destinations/philippine-eagle-center',
  },
  {
    title: 'Samal Island Day',
    summary: 'A short boat ride to shade, sand, and clear water.',
    image: '/images/samal-beach.jpg',
    imagePosition: 'object-[center_72%]',
    icon: 'lucide:waves',
    to: '/destinations/samal-island',
  },
  {
    title: 'Festival Streets',
    summary: 'Kadayawan color, rhythm, and living heritage.',
    image: '/images/kadayawan-parade.jpg',
    imagePosition: 'object-[center_30%]',
    icon: 'lucide:party-popper',
    to: '/events-festivals',
  },
]

usePageSeo(
  'Things to Do in Davao',
  'Explore Davao by interest: nature, islands, food, culture, family days, and wildlife.',
  '/images/kadayawan-parade.jpg',
)
</script>
