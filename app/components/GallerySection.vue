<template>
  <div>
    <template v-if="layout === 'strip'">
      <p class="text-xs font-semibold uppercase tracking-[0.22em] text-tropical">Explore Davao</p>
      <h2 class="mt-3 font-serif text-4xl text-forest sm:text-5xl">Gallery</h2>
      <p class="mt-4 max-w-md text-muted">
        A glimpse of Davao’s natural wonders, vibrant culture, delicious food, and warm communities.
      </p>
      <div class="mt-5 flex gap-3">
        <SiteImage
          v-for="item in strip"
          :key="item.src"
          :src="item.src"
          :alt="item.alt"
          class="h-28 min-w-0 flex-1 rounded-2xl object-cover sm:h-40"
        />
      </div>
      <NuxtLink
        to="/gallery"
        class="mt-5 inline-flex items-center gap-2 rounded-full bg-forest px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-forest-deep"
      >
        View Full Gallery
        <Icon name="lucide:arrow-right" class="size-4" />
      </NuxtLink>
    </template>

    <template v-else>
      <div class="flex flex-wrap gap-2" role="tablist" aria-label="Gallery categories">
        <button
          v-for="category in galleryCategories"
          :key="category"
          type="button"
          role="tab"
          :aria-selected="active === category"
          class="rounded-full px-4 py-2 text-sm font-semibold transition"
          :class="active === category ? 'bg-forest text-white' : 'bg-black/[0.03] text-ink hover:bg-black/[0.06]'"
          @click="active = category"
        >
          {{ category }}
        </button>
      </div>

      <div class="mt-8 columns-1 gap-4 sm:columns-2 lg:columns-3">
        <button
          v-for="item in filtered"
          :key="item.src"
          type="button"
          class="group mb-4 block w-full break-inside-avoid overflow-hidden rounded-[1.3rem] text-left"
          @click="open(item)"
        >
          <SiteImage
            :src="item.src"
            :alt="item.alt"
            class="w-full object-cover transition duration-700 group-hover:scale-[1.03]"
          />
          <span class="mt-2 block px-1 text-sm text-muted">
            <span class="font-medium text-ink">{{ item.caption }}</span>
            · {{ item.category }}
          </span>
        </button>
      </div>

      <Teleport to="body">
        <dialog
          ref="dialog"
          data-lenis-prevent
          class="fixed left-1/2 top-1/2 z-[60] m-0 w-[min(960px,calc(100%-1.5rem))] -translate-x-1/2 -translate-y-1/2 rounded-[1.4rem] border-0 bg-forest-deep p-3 text-white shadow-2xl open:flex open:flex-col backdrop:bg-black/70"
          aria-label="Gallery image"
          @close="onDialogClose"
          @click="onBackdropClick"
        >
          <figure v-if="selected" class="min-w-0" @click.stop>
            <SiteImage
              :src="selected.src"
              :alt="selected.alt"
              class="max-h-[min(75vh,720px)] w-full rounded-2xl object-contain"
            />
            <figcaption class="flex items-center justify-between gap-3 px-2 py-3 text-sm">
              <span>{{ selected.caption }}</span>
              <span class="shrink-0 text-white/60">{{ selected.category }}</span>
            </figcaption>
          </figure>
          <div class="flex flex-wrap justify-end gap-2 px-2 pb-2" @click.stop>
            <button type="button" class="rounded-full bg-white/10 px-4 py-2 text-sm transition hover:bg-white/20" @click="step(-1)">Previous</button>
            <button type="button" class="rounded-full bg-white/10 px-4 py-2 text-sm transition hover:bg-white/20" @click="step(1)">Next</button>
            <button type="button" class="rounded-full bg-gold px-4 py-2 text-sm font-semibold text-ink transition hover:bg-gold-deep" @click="close">Close</button>
          </div>
        </dialog>
      </Teleport>
    </template>
  </div>
</template>

<script setup lang="ts">
import { useLenis } from 'lenis/vue'
import { galleryCategories } from '~/data/gallery'
import type { GalleryItem } from '~/types/content'

const props = withDefaults(defineProps<{
  items: GalleryItem[]
  layout?: 'strip' | 'masonry'
}>(), {
  layout: 'strip',
})

const lenis = useLenis()
const active = ref<(typeof galleryCategories)[number]>('All')
const selected = ref<GalleryItem | null>(null)
const dialog = ref<HTMLDialogElement | null>(null)

const filtered = computed(() => {
  if (active.value === 'All') return props.items
  return props.items.filter(item => item.category === active.value)
})

const strip = computed(() => props.items.filter(item => item.featured).slice(0, 4))

async function open(item: GalleryItem) {
  selected.value = item
  await nextTick()
  if (!dialog.value?.open) dialog.value?.showModal()
  lenis.value?.stop()
  document.body.style.overflow = 'hidden'
}

function close() {
  dialog.value?.close()
}

function onDialogClose() {
  selected.value = null
  lenis.value?.start()
  document.body.style.overflow = ''
}

function onBackdropClick(event: MouseEvent) {
  if (event.target === dialog.value) close()
}

function step(direction: number) {
  if (!selected.value) return
  const list = filtered.value
  if (!list.length) return
  const index = list.findIndex(item => item.src === selected.value?.src)
  const next = list[(index + direction + list.length) % list.length]
  if (next) selected.value = next
}

function onKey(event: KeyboardEvent) {
  if (!dialog.value?.open) return
  if (event.key === 'ArrowRight') step(1)
  if (event.key === 'ArrowLeft') step(-1)
}

onMounted(() => window.addEventListener('keydown', onKey))
onUnmounted(() => {
  window.removeEventListener('keydown', onKey)
  if (dialog.value?.open) dialog.value.close()
  document.body.style.overflow = ''
})
</script>
