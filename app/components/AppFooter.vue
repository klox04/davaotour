<template>
  <footer class="relative text-cream">
    <div class="relative -mb-px leading-none" aria-hidden="true">
      <svg
        class="relative -ml-[1px] block h-28 w-[calc(100%+2px)] sm:h-36 md:h-44"
        viewBox="0 0 1440 240"
        preserveAspectRatio="none"
      >
        <!-- light mint rim: left rise, center valley, right rise -->
        <path
          fill="#B7DEC5"
          d="M0 112
             C150 36 280 18 400 72
             C520 126 600 178 720 138
             C840 98 960 32 1120 58
             C1260 80 1360 118 1440 132
             V240 H0 Z"
        />
        <!-- mid forest green -->
        <path
          fill="#3C7955"
          d="M0 140
             C150 68 280 52 400 100
             C520 148 600 192 720 160
             C840 128 960 70 1120 92
             C1260 110 1360 140 1440 154
             V240 H0 Z"
        />
        <!-- deep emerald body edge -->
        <path
          fill="#0e3325"
          d="M0 170
             C150 104 280 90 400 132
             C520 174 600 210 720 184
             C840 158 960 112 1120 128
             C1260 142 1360 168 1440 178
             V240 H0 Z"
        />
      </svg>
    </div>

    <div class="relative overflow-hidden bg-[#0e3325]">
      <div class="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(22,75,53,0.55)_0%,_transparent_70%)]" aria-hidden="true" />


      <div class="container-page relative grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4 lg:gap-0">
        <div class="lg:pr-8">
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

        <div class="lg:border-l lg:border-white/15 lg:px-8">
          <h2 class="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Quick links</h2>
          <ul class="mt-4 space-y-2 text-sm text-white/80">
            <li v-for="item in footerNav" :key="item.to">
              <NuxtLink :to="item.to" class="transition hover:text-gold">{{ item.label }}</NuxtLink>
            </li>
          </ul>
        </div>

        <div class="lg:border-l lg:border-white/15 lg:px-8">
          <h2 class="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Contact information</h2>
          <ul class="mt-4 space-y-3 text-sm text-white/80">
            <li v-for="phone in office.phones" :key="phone.tel" class="flex items-start gap-2.5">
              <Icon name="lucide:phone" class="mt-0.5 size-4 shrink-0 text-gold" />
              <a :href="`tel:${phone.tel}`" class="hover:text-gold">{{ phone.label }} {{ phone.display }}</a>
            </li>
            <li class="flex items-start gap-2.5">
              <Icon name="lucide:mail" class="mt-0.5 size-4 shrink-0 text-gold" />
              <a :href="`mailto:${office.email}`" class="hover:text-gold">{{ office.email }}</a>
            </li>
            <li class="flex items-start gap-2.5">
              <Icon name="lucide:clock" class="mt-0.5 size-4 shrink-0 text-gold" />
              <span>{{ office.hours }}</span>
            </li>
          </ul>
        </div>

        <div class="lg:border-l lg:border-white/15 lg:pl-8">
          <h2 class="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Office address</h2>
          <address class="mt-4 flex items-start gap-2.5 text-sm not-italic leading-relaxed text-white/80">
            <Icon name="lucide:map-pin" class="mt-0.5 size-4 shrink-0 text-gold" />
            <span>
              <span class="block font-medium text-white">{{ office.legalName }}</span>
              <span v-for="line in office.addressLines" :key="line" class="block">{{ line }}</span>
            </span>
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

      <div class="relative border-t border-white/10">
        <div class="container-page flex flex-col gap-3 py-5 text-xs text-white/60 sm:flex-row sm:items-center sm:justify-between">
          <p>© {{ year }} Davao City Tourism Office. All rights reserved.</p>
          <nav class="flex flex-wrap gap-x-4 gap-y-2" aria-label="Legal">
            <NuxtLink to="/credits" class="hover:text-gold">Photo credits</NuxtLink>
            <NuxtLink to="/privacy" class="hover:text-gold">Privacy Policy</NuxtLink>
            <NuxtLink to="/terms" class="hover:text-gold">Terms and Conditions</NuxtLink>
          </nav>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { footerNav, office } from '~/data/site'

const year = new Date().getFullYear()
</script>
