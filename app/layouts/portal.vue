<template>
  <div class="min-h-svh bg-[#f4f5f4]" @keydown.esc="navOpen = false">
    <template v-if="user">
      <SharedToolbar
        :username="user.name"
        :nav-open="navOpen"
        :signing-out="signingOut"
        :sidebar-collapsed="!navOpen"
        @toggle-nav="navOpen = !navOpen"
        @sign-out="signOut"
      />
      <SharedNavigation :menus="items" :open="navOpen" @close="navOpen = false" />
      <main
        class="min-h-svh overflow-y-auto px-5 pb-10 pt-20 transition-[padding] duration-200 sm:px-8 md:pt-[5.5rem]"
        :class="navOpen ? 'md:pl-[17rem]' : 'md:pl-8'"
      >
        <p v-if="message" role="alert" class="mb-4 text-sm text-red-800">{{ message }}</p>
        <slot />
      </main>
    </template>

    <main v-else class="container-page py-12">
      <p v-if="message" role="alert" class="text-red-800">{{ message }}</p>
      <button
        v-if="message"
        type="button"
        class="mt-4 rounded-full bg-brand-deep px-5 py-2 text-sm font-semibold text-white"
        @click="checkSession"
      >
        Try again
      </button>
      <p v-else role="status" class="text-muted">Checking your session…</p>
    </main>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({ robots: 'noindex' })

const { getSession, logout } = useAuthSession()
const user = ref<Awaited<ReturnType<typeof getSession>>['user']>(null)
const message = ref('')
const navOpen = ref(true)
const items = [
  { to: '/dashboard', label: 'Dashboard', icon: 'lucide:house' },
  { to: '/settings', label: 'Settings', icon: 'lucide:settings' },
]
provide('dashboardUsername', computed(() => user.value?.name))
const signingOut = ref(false)

async function checkSession() {
  message.value = ''
  try {
    const session = await getSession()
    if (!session.user) {
      await navigateTo('/secureuserlogin', { replace: true })
      return
    }
    user.value = session.user
  } catch {
    message.value = 'Could not check your session.'
  }
}

onMounted(() => {
  if (import.meta.client && window.matchMedia('(max-width: 767px)').matches) {
    navOpen.value = false
  }
  checkSession()
})

async function signOut() {
  if (signingOut.value) return
  signingOut.value = true
  message.value = ''

  try {
    await logout()
    user.value = null
    await navigateTo('/secureuserlogin', { replace: true })

  } catch {
    message.value = 'Could not sign out. Try again.'
  } finally {
    signingOut.value = false
  }
}
</script>
