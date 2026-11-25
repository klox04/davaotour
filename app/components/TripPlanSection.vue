<template>
  <section class="bg-transparent pb-12 md:pb-16">
    <div class="container-page grid items-stretch gap-4 sm:gap-5 lg:grid-cols-2">
      <div class="rounded-[1.2rem] border border-black/5 bg-white p-4 sm:rounded-[1.35rem] sm:p-6">
        <div class="flex flex-wrap items-center justify-between gap-x-3 gap-y-2">
          <h2 class="text-lg font-extrabold tracking-tight text-navy sm:text-xl">Upcoming Events</h2>
          <NuxtLink to="/events-festivals" class="inline-flex items-center gap-1 text-sm font-semibold text-brand">
            View Calendar
            <Icon name="lucide:arrow-right" class="size-4 shrink-0" />
          </NuxtLink>
        </div>
        <ul v-if="events.length" class="mt-3 divide-y divide-black/5">
          <li v-for="event in events" :key="event.title">
            <NuxtLink :to="event.to" class="flex items-center gap-3 py-3.5 sm:gap-4">
              <span class="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-blush text-center leading-none text-magenta sm:h-12 sm:w-12">
                <template v-if="event.badge">
                  <span class="text-[0.62rem] font-bold tracking-wider">{{ event.badge }}</span>
                </template>
                <Icon v-else name="lucide:calendar-days" class="size-5" />
              </span>
              <span class="min-w-0 flex-1">
                <span class="block wrap-anywhere text-sm font-bold text-navy">{{ event.title }}</span>
                <span class="mt-0.5 block wrap-anywhere text-xs text-slate">{{ event.summary }}</span>
              </span>
              <Icon name="lucide:chevron-right" class="size-4 shrink-0 text-slate" />
            </NuxtLink>
          </li>
        </ul>
        <p v-else class="mt-6 text-sm text-slate">Festival dates will appear here when the calendar is published.</p>
      </div>

      <div class="@container relative flex min-h-[280px] flex-col overflow-hidden rounded-[1.2rem] sm:min-h-[320px] sm:rounded-[1.35rem]">
        <SiteImage
          src="/images/peoples-park-2.jpg"
          alt="Davao City rooftops, People’s Park, and the mountains beyond"
          class="absolute inset-0 h-full w-full object-cover object-[center_45%]"
        />
        <div class="absolute inset-0 bg-gradient-to-t from-black/55 via-black/20 to-black/25" />
        <div class="relative flex flex-1 flex-col justify-between gap-6 p-4 sm:p-6">
          <h2 class="max-w-xs text-2xl font-extrabold tracking-tight text-white sm:text-3xl md:text-4xl">Plan Your Trip to Davao</h2>
          <ul class="grid grid-cols-2 gap-2 @min-[28rem]:grid-cols-4 @min-[28rem]:gap-3">
            <li v-for="item in links" :key="item.label">
              <NuxtLink :to="item.to" class="flex h-full flex-col items-center justify-center gap-2 rounded-2xl bg-white px-2 py-3 text-center shadow-sm transition hover:-translate-y-0.5">
                <Icon :name="item.icon" class="size-5 text-brand" />
                <span class="wrap-anywhere text-xs font-semibold leading-tight text-navy">{{ item.label }}</span>
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  events: {
    title: string
    summary: string
    to: string
    badge?: string
  }[]
}>()

const links = [
  { label: 'How to Get Here', to: '/travel-guide#how-to-get-to-davao', icon: 'lucide:plane' },
  { label: 'Accommodation', to: '/where-to-stay', icon: 'lucide:bed' },
  { label: 'Itineraries', to: '/things-to-do', icon: 'lucide:map' },
  { label: 'Travel Requirements', to: '/travel-guide#faq', icon: 'lucide:clipboard-list' },

]
</script>
