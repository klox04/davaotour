<template>
  <header
    class="fixed inset-x-0 top-0 z-30 flex h-16 items-center justify-between gap-4 border-b border-black/5 bg-white px-4 transition-[left] duration-200 sm:px-6 md:h-[4.5rem] md:px-8"
    :class="sidebarCollapsed ? 'md:left-0' : 'md:left-60'"
  >
    <button
      type="button"
      class="grid size-10 shrink-0 place-items-center rounded-lg text-[#0e3d2c] hover:bg-[#f3f4f2]"
      :aria-expanded="navOpen"
      aria-controls="shared-navigation"
      :aria-label="navOpen ? 'Close navigation' : 'Open navigation'"
      @click="$emit('toggle-nav')"
    >
      <Icon name="lucide:menu" class="size-6" aria-hidden="true" />
    </button>

    <div class="flex min-w-0 items-center gap-3 sm:gap-4">
      <button
        type="button"
        class="relative grid size-10 place-items-center rounded-full text-[#3d4a42] hover:bg-[#f3f4f2]"
        aria-label="Notifications"
      >
        <Icon name="lucide:bell" class="size-5" aria-hidden="true" />
        <span class="absolute right-2.5 top-2.5 size-2 rounded-full bg-[#1a9b4a] ring-2 ring-white" aria-hidden="true" />
      </button>

      <span class="hidden h-8 w-px bg-black/10 sm:block" aria-hidden="true" />

      <div v-if="username" ref="menuRoot" class="relative">
        <button
          type="button"
          class="flex items-center gap-2 rounded-full py-1 pl-1 pr-2 hover:bg-[#f3f4f2]"
          :aria-expanded="menuOpen"
          aria-haspopup="menu"
          @click="menuOpen = !menuOpen"
        >
          <span class="grid size-9 place-items-center rounded-full bg-[#d9dde0] text-xs font-bold tracking-wide text-[#3a4550]">
            {{ initials }}
          </span>
          <Icon name="lucide:chevron-down" class="size-4 text-[#5c675f]" aria-hidden="true" />
        </button>

        <div
          v-if="menuOpen"
          class="absolute right-0 top-full z-40 mt-2 w-44 overflow-hidden rounded-xl border border-black/5 bg-white py-1 shadow-[0_12px_30px_rgba(14,51,37,0.12)]"
          role="menu"
        >
          <p class="truncate border-b border-black/5 px-3 py-2 text-xs font-medium text-[#5c675f]">{{ username }}</p>
          <button
            type="button"
            role="menuitem"
            class="flex w-full items-center gap-2 px-3 py-2.5 text-left text-sm font-semibold text-[#0e3d2c] hover:bg-[#edf8ee] disabled:opacity-60"
            :disabled="signingOut"
            @click="$emit('sign-out')"
          >
            <Icon name="lucide:log-out" class="size-4" aria-hidden="true" />
            {{ signingOut ? 'Signing out…' : 'Sign out' }}
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
const props = defineProps<{
  username: string | null
  navOpen?: boolean
  signingOut?: boolean
  sidebarCollapsed?: boolean
}>()

defineEmits<{
  'toggle-nav': []
  'sign-out': []
}>()

const menuOpen = ref(false)
const menuRoot = ref<HTMLElement | null>(null)

const initials = computed(() => {
  const parts = String(props.username || '')
    .trim()
    .split(/\s+/)
    .filter(Boolean)
  if (!parts.length) return '?'
  if (parts.length === 1) return parts[0]!.slice(0, 2).toUpperCase()
  return `${parts[0]![0] ?? ''}${parts[1]![0] ?? ''}`.toUpperCase()
})

function onPointerDown(event: PointerEvent) {
  const target = event.target as Node | null
  if (menuOpen.value && target && menuRoot.value && !menuRoot.value.contains(target)) {
    menuOpen.value = false
  }
}

onMounted(() => document.addEventListener('pointerdown', onPointerDown))
onBeforeUnmount(() => document.removeEventListener('pointerdown', onPointerDown))
</script>
