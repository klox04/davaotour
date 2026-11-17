<template>
  <section class="relative isolate min-h-[420px] overflow-hidden">
    <SiteImage
      src="/images/hero-mount-apo.jpg"
      alt="Aerial view of forest and Mount Apo above Davao"
      class="absolute inset-0 h-full w-full object-cover object-[center_40%]"
    />
    <div class="absolute inset-0 bg-gradient-to-t from-forest-deep/85 via-forest-deep/50 to-forest-deep/25" />
    <div class="container-page relative z-10 flex min-h-[420px] flex-col items-center justify-center px-4 py-16 text-center text-white">
      <h2 class="max-w-3xl font-serif text-4xl leading-tight sm:text-6xl">
        Your Davao Adventure Starts Here.
      </h2>
      <p class="mt-4 max-w-2xl text-base text-white/85 sm:text-lg">
        Explore the beauty, discover the culture, and create unforgettable memories in Davao City.
      </p>
      <NuxtLink
        to="/destinations"
        class="mt-8 inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-ink transition hover:bg-gold-deep"
      >
        Start Exploring
        <Icon name="lucide:arrow-right" class="size-4" />
      </NuxtLink>
    </div>
  </section>
</template>
