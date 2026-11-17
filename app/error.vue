<template>
  <NuxtLayout>
    <section class="container-page flex min-h-[70vh] flex-col items-start justify-center py-24">
      <p class="text-xs font-semibold uppercase tracking-[0.22em] text-tropical">
        {{ isMissing ? '404' : 'Error' }}
      </p>
      <h1 class="mt-3 max-w-xl font-serif text-4xl text-forest sm:text-6xl">
        {{ isMissing ? 'This path is not on the map.' : 'We lost the trail for a moment.' }}
      </h1>
      <p class="mt-4 max-w-lg text-muted">
        {{ isMissing
          ? 'The page may have moved. The destinations, the guide, and the gallery are still here.'
          : 'Refresh the page, or return home and start again.' }}
      </p>
      <NuxtLink
        to="/"
        class="mt-8 inline-flex items-center gap-2 rounded-full bg-gold px-5 py-3 text-sm font-semibold text-ink transition hover:bg-gold-deep"
      >
        Back to Davao
        <Icon name="lucide:arrow-right" class="size-4" />
      </NuxtLink>
    </section>
  </NuxtLayout>
</template>

<script setup lang="ts">
import type { NuxtError } from '#app'

const props = defineProps<{ error: NuxtError }>()
const isMissing = computed(() => props.error.statusCode === 404)

usePageSeo(
  isMissing.value ? 'Page not found' : 'Something went wrong',
  'The page you requested is not available on the Davao City Tourism guide.',
)
</script>
