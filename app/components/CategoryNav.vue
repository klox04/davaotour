<template>
  <nav aria-label="Tourism categories" class="relative z-10 border-b border-black/5 bg-transparent">
    <ul class="container-page flex w-full min-w-0 gap-0 overflow-x-auto py-4 [-ms-overflow-style:none] [scrollbar-width:none] sm:py-6 [&::-webkit-scrollbar]:hidden">
      <li
        data-reveal
        v-for="(item, index) in categories"
        :key="item.label"
        class="flex min-w-[6.5rem] shrink-0 items-center sm:min-w-[7.25rem] sm:flex-1"
      >
        <NuxtLink :to="item.to" class="group flex w-full flex-col items-center gap-1.5 px-2 text-center sm:gap-2">
          <Icon :name="item.icon" class="size-5 sm:size-6" :class="item.color" />
          <span class="text-[0.7rem] font-medium leading-tight text-navy transition group-hover:text-brand sm:text-[0.78rem]">{{ item.label }}</span>
        </NuxtLink>
        <span v-if="index < categories.length - 1" class="hidden h-10 w-px shrink-0 bg-black/10 md:block" aria-hidden="true" />
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
const categories = [
  { label: 'Attractions', to: '/destinations', icon: 'lucide:mountain', color: 'text-brand' },
  { label: 'Activities', to: '/experiences', icon: 'lucide:footprints', color: 'text-lagoon' },
  { label: 'Culture & Heritage', to: '/culture', icon: 'lucide:landmark', color: 'text-magenta' },
  { label: 'Where to Eat', to: '/experiences#food-gastronomy', icon: 'lucide:utensils', color: 'text-[#d4a017]' },
  { label: 'Where to Stay', to: '/travel-guide', icon: 'lucide:bed', color: 'text-[#e11d48]' },
  { label: 'Events & Festivals', to: '/culture', icon: 'lucide:calendar-days', color: 'text-brand' },
  { label: 'Travel Information', to: '/travel-guide', icon: 'lucide:info', color: 'text-lagoon' },
]
</script>
