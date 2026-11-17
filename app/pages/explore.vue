<template>
  <div>
    <PageHero
      eyebrow="Explore Davao"
      title="A city shaped by mountain, gulf, and harvest."
      description="Nature, culture, adventure, and warm hospitality are not four slogans here. They are the way the place is put together."
      image="/images/hero-mount-apo.jpg"
      image-position="object-[center_40%]"
    />

    <section class="bg-white py-16 md:py-24">
      <div class="container-page grid items-center gap-10 lg:grid-cols-2">
        <div>
          <p class="text-xs font-semibold uppercase tracking-[0.22em] text-tropical">The place</p>
          <h2 class="mt-3 font-serif text-4xl text-forest sm:text-5xl">More than a skyline</h2>
          <div class="mt-5 space-y-4 text-lg leading-relaxed text-muted">
            <p>
              Davao City spreads between Mount Apo, the country’s highest peak, and the gulf that holds Samal Island. The center is orderly and green. The edges climb into cacao hills, eagle country, and forest that still asks for a guide.
            </p>
            <p>
              People come for the fruit, stay for the parks, and leave talking about a festival that treats indigenous heritage as the main event rather than the opening act. That mix is the trip.
            </p>
          </div>
        </div>
        <SiteImage
          src="/images/lake-venado.jpg"
          alt="Lake Venado on Mount Apo"
          class="aspect-[5/4] w-full rounded-[1.6rem] object-cover"
        />
      </div>
    </section>

    <section class="bg-white py-16 md:py-24">
      <div class="container-page grid gap-6 md:grid-cols-3">
        <article class="overflow-hidden rounded-[1.4rem] border border-black/5 bg-white">
          <SiteImage src="/images/mount-apo-trail.jpg" alt="Forest trail on Mount Apo" class="h-52 w-full object-cover" />
          <div class="p-6">
            <h2 class="font-serif text-2xl text-forest">Nature</h2>
            <p class="mt-2 text-sm leading-relaxed text-muted">From a highland garden in Toril to a permitted climb of Mount Apo, the outdoors scale to the day you have.</p>
          </div>
        </article>
        <article class="overflow-hidden rounded-[1.4rem] border border-black/5 bg-white">
          <SiteImage src="/images/kadayawan.jpg" alt="Kadayawan performers" class="h-52 w-full object-cover object-top" />
          <div class="p-6">
            <h2 class="font-serif text-2xl text-forest">Culture</h2>
            <p class="mt-2 text-sm leading-relaxed text-muted">Kadayawan, weaving, and community celebrations keep Davao’s many peoples in the foreground.</p>
          </div>
        </article>
        <article class="overflow-hidden rounded-[1.4rem] border border-black/5 bg-white">
          <SiteImage src="/images/durian-basket.jpg" alt="Basket of durian" class="h-52 w-full object-cover" />
          <div class="p-6">
            <h2 class="font-serif text-2xl text-forest">Flavor</h2>
            <p class="mt-2 text-sm leading-relaxed text-muted">Durian, pomelo, mangosteen, kinilaw, and chocolate from the same hills you can visit in an afternoon.</p>
          </div>
        </article>
      </div>
      <div class="container-page mt-10 flex flex-wrap gap-3">
        <NuxtLink to="/destinations" class="rounded-full bg-gold px-5 py-3 text-sm font-semibold text-ink">Browse destinations</NuxtLink>
        <NuxtLink to="/travel-guide" class="rounded-full border border-forest/20 px-5 py-3 text-sm font-semibold text-forest">Plan the visit</NuxtLink>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
usePageSeo(
  'Explore Davao',
  'Davao City is more than a stopover. It is a meeting place of mountain, gulf, harvest, and living culture.',
  '/images/hero-mount-apo.jpg',
)
</script>
