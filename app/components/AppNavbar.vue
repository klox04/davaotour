<template>
  <div
    class="fixed inset-x-0 top-0 z-50 w-full min-w-0"
    :class="shown ? '' : 'h-3'"
    @mouseenter="hovering = true"
    @mouseleave="hovering = false"
    @focusin="focused = true"
    @focusout="onFocusOut"
  >
    <header
      class="w-full border-b border-black/5 bg-white transition duration-500 ease-out motion-reduce:transition-none"
      :class="shown ? 'translate-y-0' : 'pointer-events-none -translate-y-full'"
    >
      <div class="mx-auto flex h-[4.25rem] w-full min-w-0 max-w-[1240px] items-center gap-4 px-4 sm:px-6">
        <AppLogo class="shrink-0" />

        <nav class="hidden flex-1 items-center justify-center gap-1 xl:flex" aria-label="Primary">
          <div
            v-for="item in headerNav"
            :key="item.to"
            class="relative"
            @mouseenter="item.children && (openMenu = item.label)"
            @mouseleave="openMenu = ''"
            @focusin="item.children && (openMenu = item.label)"
            @focusout="onMenuFocusOut"
          >
            <div class="flex items-center">
              <NuxtLink
                :to="item.to"
                class="rounded-full px-2.5 py-2 text-[0.92rem] text-navy/80 transition hover:text-brand"
                :class="isActive(item) ? 'font-semibold text-brand' : ''"
                :aria-current="isActive(item) ? 'page' : undefined"
              >
                {{ item.label }}
              </NuxtLink>
              <button
                v-if="item.children"
                type="button"
                class="grid size-6 place-items-center rounded-full text-navy/70 hover:text-brand"
                :aria-expanded="openMenu === item.label"
                :aria-label="`${item.label} menu`"
                @click="openMenu = openMenu === item.label ? '' : item.label"
              >
                <Icon name="lucide:chevron-down" class="size-3.5" />
              </button>
            </div>
            <div
              v-if="item.children && openMenu === item.label"
              class="absolute left-0 top-full z-20 min-w-48 rounded-2xl border border-black/5 bg-white p-2 shadow-[0_12px_40px_rgba(20,33,43,0.08)]"
            >
              <NuxtLink
                v-for="child in item.children"
                :key="child.to"
                :to="child.to"
                class="block rounded-xl px-3 py-2 text-sm text-navy hover:bg-blush/60 hover:text-brand"
                @click="openMenu = ''"
              >
                {{ child.label }}
              </NuxtLink>
            </div>
          </div>
        </nav>

        <div class="ml-auto flex items-center gap-1.5 sm:gap-2">
          <button
            type="button"
            class="grid size-10 place-items-center rounded-full text-navy transition hover:bg-black/5"
            aria-label="Search destinations and experiences"
            @click="openSearch"
          >
            <Icon name="lucide:search" class="size-5" />
          </button>
          <NuxtLink
            to="/travel-guide"
            class="inline-flex items-center rounded-full bg-brand px-3.5 py-2 text-sm font-semibold text-white transition hover:bg-brand-deep sm:px-4"
          >
            <span class="hidden sm:inline">Plan Your Visit</span>
            <span class="sm:hidden">Plan</span>
          </NuxtLink>
          <button
            type="button"
            class="grid size-10 place-items-center rounded-full text-navy xl:hidden"
            :aria-expanded="open"
            aria-controls="mobile-nav"
            @click="open = !open"
          >
            <Icon :name="open ? 'lucide:x' : 'lucide:menu'" class="size-5" />
            <span class="sr-only">{{ open ? 'Close menu' : 'Open menu' }}</span>
          </button>
        </div>
      </div>
    </header>
  </div>

  <Teleport to="body">
    <div
      v-if="open"
      id="mobile-nav"
      class="fixed inset-x-0 bottom-0 top-[4.25rem] z-40 overflow-y-auto bg-white xl:hidden"
    >
      <nav class="flex flex-col gap-1 px-5 py-4" aria-label="Mobile">
        <template v-for="item in headerNav" :key="item.to">
          <NuxtLink
            :to="item.to"
            class="rounded-xl px-3 py-3 text-base font-medium text-navy"
            :class="isActive(item) ? 'bg-blush/70 text-brand' : ''"
          >
            {{ item.label }}
          </NuxtLink>
          <NuxtLink
            v-for="child in item.children ?? []"
            :key="child.to"
            :to="child.to"
            class="rounded-xl py-2 pl-8 pr-3 text-sm text-slate"
          >
            {{ child.label }}
          </NuxtLink>
        </template>
        <NuxtLink to="/contact" class="rounded-xl px-3 py-3 text-base font-medium text-navy">
          Contact Us
        </NuxtLink>
      </nav>
    </div>

    <dialog
      ref="searchDialog"
      class="w-[min(560px,calc(100%-2rem))] rounded-2xl bg-white p-4 text-navy backdrop:bg-black/40"
      @close="onSearchClose"
    >
      <form class="flex items-center gap-2" @submit.prevent="goFirst">
        <Icon name="lucide:search" class="size-5 shrink-0 text-slate" />
        <input
          ref="searchInput"
          v-model="query"
          type="search"
          placeholder="Search destinations and experiences"
          class="w-full bg-transparent py-2 text-base outline-none placeholder:text-slate"
          aria-label="Search query"
        >
        <button type="button" class="rounded-full px-3 py-1.5 text-sm text-slate hover:bg-black/5" @click="closeSearch">
          Close
        </button>
      </form>
      <ul class="mt-2 max-h-80 overflow-y-auto">
        <li v-for="result in results" :key="result.to">
          <NuxtLink :to="result.to" class="flex items-center justify-between rounded-xl px-2 py-2.5 hover:bg-blush/50" @click="closeSearch">
            <span>
              <span class="block text-sm font-semibold">{{ result.label }}</span>
              <span class="block text-xs text-slate">{{ result.kind }}</span>
            </span>
            <Icon name="lucide:arrow-up-right" class="size-4 text-slate" />
          </NuxtLink>
        </li>
        <li v-if="query && !results.length" class="px-2 py-6 text-sm text-slate">
          Nothing matches “{{ query }}”.
        </li>
      </ul>
    </dialog>
  </Teleport>
</template>

<script setup lang="ts">
import { useLenis } from 'lenis/vue'
import { headerNav } from '~/data/site'
import type { Destination, Experience, NavItem } from '~/types/content'

const route = useRoute()
const router = useRouter()
const lenis = useLenis()
const { getDestinations, getExperiences } = useTourismContent()

const open = ref(false)
const openMenu = ref('')
const query = ref('')
const searching = ref(false)
const searchDialog = ref<HTMLDialogElement | null>(null)
const searchInput = ref<HTMLInputElement | null>(null)
const destinations = ref<Destination[]>([])
const experiences = ref<Experience[]>([])
const scrolled = ref(false)
const hovering = ref(false)
const focused = ref(false)

const isHome = computed(() => route.path === '/')
const shown = computed(() => {
  if (!isHome.value) return true
  return open.value || scrolled.value || hovering.value || focused.value || searching.value
})

const results = computed(() => {
  const term = query.value.trim().toLowerCase()
  if (!term) return []
  const places = destinations.value
    .filter(item => `${item.name} ${item.summary} ${item.location}`.toLowerCase().includes(term))
    .map(item => ({ label: item.name, kind: 'Destination', to: `/destinations/${item.slug}` }))
  const activities = experiences.value
    .filter(item => `${item.name} ${item.summary}`.toLowerCase().includes(term))
    .map(item => ({ label: item.name, kind: 'Experience', to: `/experiences#${item.slug}` }))
  return [...places, ...activities].slice(0, 8)
})

function pathOf(to: string) {
  return to.split('#')[0] || '/'
}

function isActive(item: NavItem) {
  const paths = [pathOf(item.to), ...(item.children ?? []).map(child => pathOf(child.to))]
  return paths.some(path => path === '/' ? route.path === '/' : route.path === path || route.path.startsWith(`${path}/`))
}

function onMenuFocusOut(event: FocusEvent) {
  const next = event.relatedTarget
  const current = event.currentTarget
  if (current instanceof HTMLElement && next instanceof Node && current.contains(next)) return
  openMenu.value = ''
}

function onFocusOut(event: FocusEvent) {
  const next = event.relatedTarget
  const current = event.currentTarget
  if (current instanceof HTMLElement && next instanceof Node && current.contains(next)) return
  focused.value = false
}

function onScroll() {
  scrolled.value = window.scrollY > 48
}

async function openSearch() {
  if (!destinations.value.length) {
    const [places, activities] = await Promise.all([getDestinations(), getExperiences()])
    destinations.value = places
    experiences.value = activities
  }
  searching.value = true
  searchDialog.value?.showModal()
  await nextTick()
  searchInput.value?.focus()
}

function closeSearch() {
  if (searchDialog.value?.open) searchDialog.value.close()
}

function onSearchClose() {
  query.value = ''
  searching.value = false
}

function goFirst() {
  const first = results.value[0]
  if (!first) return
  closeSearch()
  void router.push(first.to)
}

watch(() => route.fullPath, () => {
  open.value = false
  openMenu.value = ''
  closeSearch()
  onScroll()
})

watch(open, (value) => {
  document.body.style.overflow = value ? 'hidden' : ''
  if (value) lenis.value?.stop()
  else lenis.value?.start()
})

function onKey(event: KeyboardEvent) {
  if (event.key === 'Escape') open.value = false
}

onMounted(() => {
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
  window.addEventListener('keydown', onKey)
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
  window.removeEventListener('keydown', onKey)
  document.body.style.overflow = ''
})
</script>
