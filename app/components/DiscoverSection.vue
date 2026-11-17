<template>
  <section id="discover" ref="root" class="bg-white py-20 md:py-28">
    <div class="container-page grid items-center gap-8 lg:grid-cols-12">
      <div class="lg:col-span-4" data-reveal-group>
        <p data-reveal class="text-xs font-semibold uppercase tracking-[0.22em] text-tropical">Discover Davao</p>
        <h2 data-reveal class="mt-3 font-serif text-4xl leading-[1.05] text-forest sm:text-5xl">
          More Than Just a Destination
        </h2>
        <p data-reveal class="mt-5 text-base leading-relaxed text-muted sm:text-lg">
          Experience a city where breathtaking landscapes meet vibrant culture, rich traditions, exciting adventures, and unforgettable flavors.
        </p>
        <NuxtLink data-reveal to="/explore" class="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-forest">
          Read the story
          <Icon name="lucide:arrow-right" class="size-4" />
        </NuxtLink>
      </div>

      <div class="lg:col-span-5" data-reveal-group>
        <SiteImage
          data-reveal
          src="/images/lake-venado.jpg"
          alt="Mist over Lake Venado in the forested highlands of Mount Apo"
          class="aspect-[4/5] w-full rounded-[1.6rem] object-cover shadow-[0_20px_50px_rgba(22,75,53,0.12)] sm:aspect-[5/4]"
        />
      </div>

      <div class="grid gap-4 sm:grid-cols-2 lg:col-span-3 lg:grid-cols-1" data-reveal-group>
        <SiteImage
          data-reveal
          src="/images/samal-beach.jpg"
          alt="Palm-lined beach and outrigger boats on Samal Island"
          class="h-44 w-full rounded-[1.4rem] object-cover sm:h-52 lg:h-44"
        />
        <SiteImage
          data-reveal
          src="/images/eagle-portrait.jpg"
          alt="Close portrait of a Philippine Eagle in Davao City"
          class="h-44 w-full rounded-[1.4rem] object-cover object-[center_20%] sm:h-52 lg:h-56"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const root = ref<HTMLElement | null>(null)
useScrollReveal(root)
</script>
