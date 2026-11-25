<template>
  <div>
    <div class="relative pl-5 before:absolute before:left-0 before:top-1 before:h-11 before:w-1.5 before:rounded-full before:bg-[#13832c] md:before:h-12">
      <h1 class="text-3xl font-bold leading-none tracking-tight text-[#082f23] sm:text-4xl md:text-[2.75rem]">
        Settings
      </h1>
      <p class="mt-2 text-base font-medium text-[#6b7280] sm:text-lg">
        Manage your account preferences.
      </p>
    </div>

    <section
      class="mt-8 rounded-2xl bg-white px-6 py-10 shadow-[0_8px_28px_rgba(14,51,37,0.06)] sm:px-8"
      aria-label="Account settings"
    >
      <p class="text-sm leading-relaxed text-[#6b7280]">
        Settings modules will appear here in a later update.
      </p>
    </section>
  </div>
</template>

<script setup lang="ts">
definePageMeta({ layout: 'portal' })
useSeoMeta({ title: 'Settings | Davao City Tourism Office' })
</script>
