<template>
  <button
    v-if="open"
    type="button"
    class="fixed inset-0 z-20 bg-black/40 md:hidden"
    aria-label="Close navigation"
    @click="$emit('close')"
  />

  <aside
    id="shared-navigation"
    class="fixed inset-y-0 left-0 z-20 flex w-60 flex-col overflow-hidden bg-[#063d2c] transition-transform duration-200"
    :class="open ? 'translate-x-0' : '-translate-x-full'"
  >
    <div class="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <div class="absolute inset-x-[-35%] bottom-[-4.5rem] h-40 -rotate-[8deg] rounded-[50%] bg-[#2f8a55]/45" />
      <div class="absolute inset-x-[-25%] bottom-[-5.25rem] h-36 rotate-[12deg] rounded-[50%] bg-[#0f5a3c]/90" />
      <div class="absolute inset-x-[-15%] bottom-[-6rem] h-28 -rotate-[4deg] rounded-[50%] bg-[#0a4731]" />
    </div>

    <div class="relative px-6 pb-6 pt-8">
      <div class="border-b border-white/35 pb-6">
        <AppLogo class="mx-auto block [&_span]:mx-auto" />
      </div>
    </div>

    <nav class="relative grid gap-1 px-4" aria-label="Dashboard navigation">
      <NuxtLink
        v-for="item in menus"
        :key="item.to"
        :to="item.to"
        class="flex items-center gap-3 rounded-xl px-4 py-3.5 text-[0.95rem] font-semibold text-white transition-colors hover:bg-white/10"
        exact-active-class="!bg-[#def7e3] !text-[#082f23] hover:!bg-[#def7e3]"
        @click="onNavigate"
      >
        <Icon v-if="item.icon" :name="item.icon" class="size-5 shrink-0" aria-hidden="true" />
        {{ item.label }}
      </NuxtLink>
    </nav>
  </aside>
</template>

<script setup lang="ts">
defineProps<{
  menus: ReadonlyArray<{ to: string; label: string; icon?: string }>
  open: boolean
}>()

const emit = defineEmits<{ close: [] }>()

function onNavigate() {
  if (import.meta.client && window.matchMedia('(max-width: 767px)').matches) {
    emit('close')
  }
}
</script>
