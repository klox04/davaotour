<template>
  <div>
    <p class="text-xs font-semibold uppercase tracking-[0.22em] text-tropical">Travel guide</p>
    <h2 class="mt-3 font-serif text-4xl leading-tight text-forest sm:text-5xl">Plan Your Davao Trip</h2>
    <p class="mt-4 max-w-xl text-muted">
      Everything you need to know for a smooth and unforgettable visit to Davao City.
    </p>

    <div v-if="compact" class="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
      <NuxtLink
        v-for="topic in topics"
        :key="topic.slug"
        :to="`/travel-guide#${topic.slug}`"
        class="rounded-2xl bg-white p-4 shadow-[0_8px_24px_rgba(22,75,53,0.05)] transition hover:-translate-y-0.5 hover:shadow-[0_14px_30px_rgba(22,75,53,0.1)]"
      >
        <span class="grid size-10 place-items-center rounded-full bg-cream text-forest">
          <Icon :name="topic.icon" class="size-5" />
        </span>
        <span class="mt-3 block text-sm font-semibold leading-snug text-ink">{{ topic.title }}</span>
      </NuxtLink>
    </div>

    <div v-else class="mt-10 space-y-8">
      <article
        v-for="topic in topics"
        :id="topic.slug"
        :key="topic.slug"
        class="scroll-mt-28 rounded-[1.5rem] bg-white p-6 shadow-[0_10px_30px_rgba(22,75,53,0.05)] sm:p-8"
      >
        <div class="flex items-start gap-4">
          <span class="grid size-12 shrink-0 place-items-center rounded-2xl bg-cream text-forest">
            <Icon :name="topic.icon" class="size-6" />
          </span>
          <div>
            <h3 class="font-serif text-2xl text-forest sm:text-3xl">{{ topic.title }}</h3>
            <p class="mt-2 text-muted">{{ topic.summary }}</p>
          </div>
        </div>
        <div class="mt-5 space-y-4 text-[0.98rem] leading-relaxed text-ink/85">
          <p v-for="paragraph in topic.paragraphs" :key="paragraph">{{ paragraph }}</p>
        </div>
        <div v-if="topic.slug === 'faq'" class="mt-6 space-y-3">
          <details
            v-for="item in faqs"
            :key="item.question"
            class="group rounded-2xl bg-cream px-4 py-3 open:bg-sand"
          >
            <summary class="cursor-pointer list-none font-semibold text-forest [&::-webkit-details-marker]:hidden">
              <span class="flex items-center justify-between gap-3">
                {{ item.question }}
                <Icon name="lucide:chevron-down" class="size-4 shrink-0 transition group-open:rotate-180" />
              </span>
            </summary>
            <p class="mt-3 text-sm leading-relaxed text-muted">{{ item.answer }}</p>
          </details>
        </div>
      </article>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { FaqItem, GuideTopic } from '~/types/content'

withDefaults(defineProps<{
  topics: GuideTopic[]
  faqs?: FaqItem[]
  compact?: boolean
}>(), {
  faqs: () => [],
  compact: false,
})
</script>
