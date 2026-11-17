<template>
  <div>
    <PageHero
      eyebrow="Contact Us"
      title="The office is ready when you are."
      description="Questions about guides, festivals, and where to begin a Davao itinerary."
      image="/images/coastal-night.jpg"
    />

    <section class="bg-cream py-14 md:py-20">
      <div class="container-page grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
        <div class="rounded-[1.5rem] bg-forest p-7 text-white">
          <p class="text-xs font-semibold uppercase tracking-[0.2em] text-gold">{{ office.legalName }}</p>
          <address class="mt-4 text-sm not-italic leading-relaxed text-white/85">
            <span v-for="line in office.addressLines" :key="line" class="block">{{ line }}</span>
          </address>
          <ul class="mt-6 space-y-3 text-sm">
            <li v-for="phone in office.phones" :key="phone.tel" class="flex items-center gap-2">
              <Icon name="lucide:phone" class="size-4 text-gold" />
              <a :href="`tel:${phone.tel}`">{{ phone.label }} {{ phone.display }}</a>
            </li>
            <li class="flex items-center gap-2">
              <Icon name="lucide:mail" class="size-4 text-gold" />
              <a :href="`mailto:${office.email}`">{{ office.email }}</a>
            </li>
            <li class="flex items-center gap-2">
              <Icon name="lucide:clock" class="size-4 text-gold" />
              {{ office.hours }}
            </li>
          </ul>
          <a
            :href="office.mapUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-gold"
          >
            Open in maps
            <Icon name="lucide:arrow-up-right" class="size-4" />
          </a>
          <a
            :href="office.website"
            target="_blank"
            rel="noopener noreferrer"
            class="mt-6 block text-sm text-white/70 underline-offset-2 hover:underline"
          >
            Official site: tourism.davaocity.gov.ph
          </a>
        </div>
        <InquiryForm />
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { office } from '~/data/site'

usePageSeo(
  'Contact Us',
  'Reach the City Tourism Operations Office on Palma Gil Street, Davao City.',
  '/images/peoples-park.jpg',
)
</script>
