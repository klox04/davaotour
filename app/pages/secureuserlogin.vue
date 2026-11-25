<template>
  <section class="grid min-h-svh bg-cream lg:grid-cols-2">
    <div class="relative hidden overflow-hidden bg-forest-deep lg:block">
      <SiteImage
        src="/images/mount-apo-kapatagan.jpg"
        alt=""
        class="absolute inset-0 h-full w-full object-cover"
      />
      <div class="absolute inset-0 bg-gradient-to-t from-forest-deep/90 to-transparent" />
      <p class="absolute bottom-10 left-10 flex items-center gap-2 font-medium text-white">
        <Icon name="lucide:map-pin" class="size-5" aria-hidden="true" />
        Mount Apo, Davao
      </p>
    </div>

    <div class="flex items-center justify-center px-5 py-16 sm:px-10">
      <div class="w-full max-w-md rounded-3xl border border-forest/10 bg-white p-7 shadow-sm sm:p-10">
        <NuxtLink to="/" class="inline-flex items-center gap-2 text-sm font-semibold text-brand-deep hover:underline">
          <Icon name="lucide:arrow-left" class="size-4" aria-hidden="true" />
          Back to Davao Tourism
        </NuxtLink>

        <h1 class="mt-6 font-serif text-4xl font-semibold tracking-tight text-forest-deep">
          Sign in
        </h1>
        <p v-if="message" role="alert" class="mt-4 rounded-lg bg-red-50 p-3 text-sm text-red-800">{{ message }}</p>
        <p v-if="loading" class="mt-4 text-sm text-muted" role="status">Checking your session…</p>

        <form v-else class="mt-5 grid gap-4" @submit.prevent="signIn">
          <label class="grid gap-1.5 text-sm font-semibold text-forest-deep">
            Email address
            <input v-model="email" name="email" type="email" autocomplete="username" maxlength="255" required class="rounded-xl border border-forest/25 px-4 py-3 font-normal text-navy">
          </label>

          <label class="grid gap-1.5 text-sm font-semibold text-forest-deep">
            Password
            <input v-model="password" name="password" type="password" autocomplete="current-password" maxlength="255" required class="rounded-xl border border-forest/25 px-4 py-3 font-normal text-navy">
          </label>

          <button type="submit" class="mt-2 rounded-full bg-brand-deep px-6 py-3 font-semibold text-white hover:bg-forest-deep disabled:opacity-60" :disabled="pending">
            {{ pending ? 'Signing in…' : 'Sign in' }}
          </button>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
definePageMeta({ layout: false })

const { getSession, login } = useAuthSession()
const email = ref('')
const password = ref('')
const loading = ref(true)
const pending = ref(false)
const message = ref('')

useSeoMeta({
  title: 'Sign in | Davao City Tourism Office',
  robots: 'noindex, nofollow',
})

onMounted(async () => {
  try {
    if ((await getSession()).user) {
      await navigateTo('/dashboard', { replace: true })
    }
  } catch {
    message.value = 'The sign-in service is temporarily unavailable.'
  } finally {
    loading.value = false
  }
})

async function signIn() {
  if (pending.value) return
  pending.value = true
  message.value = ''

  try {
    await login({ email: email.value, password: password.value })
    password.value = ''
    await navigateTo('/dashboard', { replace: true })
  } catch (error) {
    const status = (error as { statusCode?: number }).statusCode
    if (status === 422) {
      message.value = 'Check your email address and password and try again.'
    } else if (status === 429) {
      message.value = 'Too many sign-in attempts. Try again in a minute.'
    } else {
      message.value = 'Sign-in is temporarily unavailable. Try again shortly.'
    }
  } finally {
    pending.value = false
  }
}
</script>
