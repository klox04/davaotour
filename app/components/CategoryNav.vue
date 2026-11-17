<template>
  <nav aria-label="Tourism categories" class="relative z-10 border-b border-black/5 bg-white">
    <ul class="container-page flex w-full min-w-0 max-w-full gap-1 overflow-x-auto py-5 [-ms-overflow-style:none] [scrollbar-width:none] sm:py-6 [&::-webkit-scrollbar]:hidden">
      <li
        v-for="(item, index) in categories"
        :key="item.label"
        class="flex min-w-[7.5rem] flex-1 items-center"
      >
        <NuxtLink :to="item.to" class="group flex w-full flex-col items-center gap-2 px-2 text-center">
          <Icon :name="item.icon" class="size-6" :class="item.color" />
          <span class="text-[0.78rem] font-medium text-navy transition group-hover:text-brand">{{ item.label }}</span>
        </NuxtLink>
        <span v-if="index < categories.length - 1" class="hidden h-10 w-px shrink-0 bg-black/10 sm:block" aria-hidden="true" />
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
