<template>
  <div>
    <PageHero
      eyebrow="Culture & Heritage"
      :title="cultureIntro.title"
      :description="cultureIntro.summary"
      image="/images/kadayawan-parade.jpg"
      image-position="object-[center_30%]"
    />

    <section class="bg-white py-16 md:py-24">
      <div class="container-page grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <p class="text-xs font-semibold uppercase tracking-[0.22em] text-tropical">Kadayawan</p>
          <h2 class="mt-3 font-serif text-4xl text-forest">A thanksgiving with drums and flowers</h2>
          <p class="mt-4 leading-relaxed text-muted">
            The name comes from “Madayaw,” a word for what is good, beautiful, and of value. Every August, Davao thanks the harvest and the indigenous cultures of the city. The Indak-indak street-dancing parade and the floral floats are the public heart of the week. Dates are set by the city each year, traditionally in the third week.
          </p>
        </div>
        <SiteImage
          src="/images/kadayawan.jpg"
          alt="Performers in festival dress at Kadayawan"
          class="aspect-[4/5] w-full rounded-[1.6rem] object-cover object-top sm:aspect-[5/4]"
        />
      </div>

      <div class="container-page mt-16 grid gap-5 md:grid-cols-2">
        <article v-for="item in highlights" :key="item.title" class="overflow-hidden rounded-[1.4rem] bg-white">
          <SiteImage :src="item.image" :alt="item.title" class="h-56 w-full object-cover" />
          <div class="p-6">
            <h3 class="font-serif text-2xl text-forest">{{ item.title }}</h3>
            <p class="mt-2 text-sm leading-relaxed text-muted">{{ item.summary }}</p>
          </div>
        </article>
      </div>
    </section>

    <section class="bg-forest-deep py-16 text-white md:py-24">
      <div class="container-page">
        <h2 class="max-w-2xl font-serif text-4xl">Peoples of the city</h2>
        <p class="mt-4 max-w-2xl text-white/75">
          These are living communities. A cultural village during Kadayawan is an introduction, not the whole story. Museums such as Museo Dabawenyo are a respectful next step.
        </p>
        <div class="mt-10 grid gap-5 sm:grid-cols-2">
          <article v-for="community in communities" :key="community.name" class="overflow-hidden rounded-[1.4rem] bg-white/5">
            <SiteImage :src="community.image" :alt="community.name" class="h-48 w-full object-cover" />
            <div class="p-5">
              <h3 class="font-serif text-2xl">{{ community.name }}</h3>
              <p class="mt-2 text-sm leading-relaxed text-white/75">{{ community.summary }}</p>
            </div>
          </article>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { communities, cultureIntro } from '~/data/culture'

const { getCulture } = useTourismContent()
const { data: highlights } = await useAsyncData('culture', getCulture)

usePageSeo(
  'Culture and Heritage',
  'Kadayawan Festival, indigenous heritage, and the celebrations that give Davao its color.',
  '/images/kadayawan-parade.jpg',
)
</script>
