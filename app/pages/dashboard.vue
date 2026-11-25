<template>
  <div>
    <div class="relative pl-5 before:absolute before:left-0 before:top-1 before:h-11 before:w-1.5 before:rounded-full before:bg-[#13832c] md:before:h-12">
      <h1 class="text-3xl font-bold leading-none tracking-tight text-[#082f23] sm:text-4xl md:text-[2.75rem]">
        Dashboard
      </h1>
      <p v-if="username" class="mt-2 text-base font-medium text-[#6b7280] sm:text-lg">
        Welcome back, {{ username }}.
      </p>
    </div>

    <section
      class="mt-8 flex min-h-[22rem] flex-col items-center justify-center rounded-2xl bg-white px-6 py-14 text-center shadow-[0_8px_28px_rgba(14,51,37,0.06)] sm:min-h-[26rem] sm:px-10"
      aria-label="Dashboard overview"
    >
      <div class="relative mb-6 grid place-items-center" aria-hidden="true">
        <span class="absolute size-28 rounded-[42%] bg-[#d8f3df] sm:size-32" />
        <span class="relative grid size-20 place-items-center rounded-2xl border border-[#d7dde3] bg-[#eef1f4] shadow-sm sm:size-24">
          <Icon name="lucide:bar-chart-3" class="size-9 text-[#9aa3ad] sm:size-10" />
        </span>
      </div>

      <h2 class="text-xl font-bold text-[#082f23] sm:text-2xl">No dashboard content yet</h2>
      <p class="mt-2 max-w-md text-sm leading-relaxed text-[#6b7280] sm:text-base">
        Analytics and modules will appear here once data is available.
      </p>
    </section>
  </div>
</template>

<script setup lang="ts">
definePageMeta({ layout: 'portal' })
useSeoMeta({ title: 'Dashboard | Davao City Tourism Office' })

const username = inject<Readonly<Ref<string | undefined>>>('dashboardUsername')
</script>
