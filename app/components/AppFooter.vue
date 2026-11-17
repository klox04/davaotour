<template>
  <footer class="bg-forest-deep text-cream">
    <div class="container-page grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">
      <div>
        <AppLogo />
        <p class="mt-5 max-w-xs text-sm leading-relaxed text-white/75">
          {{ office.description }}
        </p>
        <div class="mt-5 flex gap-2">
          <a
            :href="office.facebook"
            class="grid size-10 place-items-center rounded-full bg-white/10 transition hover:bg-gold hover:text-ink"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Davao City Tourism on Facebook"
          >
            <Icon name="lucide:facebook" class="size-4" />
          </a>
          <a
            :href="office.website"
            class="grid size-10 place-items-center rounded-full bg-white/10 transition hover:bg-gold hover:text-ink"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Official tourism website"
          >
            <Icon name="lucide:globe" class="size-4" />
          </a>
        </div>
      </div>

      <div>
        <h2 class="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Quick links</h2>
        <ul class="mt-4 space-y-2 text-sm text-white/80">
          <li v-for="item in footerNav" :key="item.to">
            <NuxtLink :to="item.to" class="transition hover:text-gold">{{ item.label }}</NuxtLink>
          </li>
        </ul>
      </div>

      <div>
        <h2 class="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Contact information</h2>
        <ul class="mt-4 space-y-3 text-sm text-white/80">
          <li v-for="phone in office.phones" :key="phone.tel">
            <a :href="`tel:${phone.tel}`" class="hover:text-gold">{{ phone.label }} {{ phone.display }}</a>
          </li>
          <li>
            <a :href="`mailto:${office.email}`" class="hover:text-gold">{{ office.email }}</a>
          </li>
          <li>{{ office.hours }}</li>
        </ul>
      </div>

      <div>
        <h2 class="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Office address</h2>
        <address class="mt-4 text-sm not-italic leading-relaxed text-white/80">
          <span class="block font-medium text-white">{{ office.legalName }}</span>
          <span v-for="line in office.addressLines" :key="line" class="block">{{ line }}</span>
        </address>
        <a
          :href="office.mapUrl"
          class="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-gold"
          target="_blank"
          rel="noopener noreferrer"
        >
          Open in maps
          <Icon name="lucide:arrow-up-right" class="size-4" />
        </a>
      </div>
    </div>

    <div class="border-t border-white/10">
      <div class="container-page flex flex-col gap-3 py-5 text-xs text-white/60 sm:flex-row sm:items-center sm:justify-between">
        <p>© {{ year }} Davao City Tourism Office. All rights reserved.</p>
        <nav class="flex flex-wrap gap-x-4 gap-y-2" aria-label="Legal">
          <NuxtLink to="/credits" class="hover:text-gold">Photo credits</NuxtLink>
          <NuxtLink to="/privacy" class="hover:text-gold">Privacy Policy</NuxtLink>
          <NuxtLink to="/terms" class="hover:text-gold">Terms and Conditions</NuxtLink>
        </nav>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { footerNav, office } from '~/data/site'

const year = new Date().getFullYear()
</script>
