<template>
  <div class="rounded-[1.5rem] bg-white p-6 shadow-[0_12px_40px_rgba(22,75,53,0.06)] sm:p-8">
    <div v-if="result" class="py-6">
      <p class="text-xs font-semibold uppercase tracking-[0.2em] text-tropical">Message received</p>
      <h2 class="mt-3 font-serif text-3xl text-forest">Thank you, {{ form.name.split(' ')[0] }}.</h2>
      <p v-if="result === 'delivered'" class="mt-3 text-muted">
        Your note is on its way to the City Tourism Operations Office.
      </p>
      <p v-else class="mt-3 leading-relaxed text-muted">
        This preview kept your message in this browser. Connect the Laravel inquiries endpoint
        <span v-if="!apiBase">(set <code class="text-forest">NUXT_PUBLIC_API_BASE</code>)</span>
        to deliver it automatically. Until then, you can email
        <a href="mailto:ctoo@davaocity.gov.ph" class="font-semibold text-forest">ctoo@davaocity.gov.ph</a>.
      </p>
    </div>

    <form v-else class="space-y-4" novalidate @submit.prevent="onSubmit">
      <div>
        <label for="name" class="text-sm font-semibold text-forest">Name</label>
        <input
          id="name"
          v-model="form.name"
          type="text"
          name="name"
          autocomplete="name"
          required
          class="mt-1.5 w-full rounded-2xl border border-sand bg-black/[0.03] px-4 py-3 outline-none focus:border-forest"
        >
        <p v-if="errors.name" class="mt-1 text-sm text-earth">{{ errors.name }}</p>
      </div>
      <div>
        <label for="email" class="text-sm font-semibold text-forest">Email</label>
        <input
          id="email"
          v-model="form.email"
          type="email"
          name="email"
          autocomplete="email"
          required
          class="mt-1.5 w-full rounded-2xl border border-sand bg-black/[0.03] px-4 py-3 outline-none focus:border-forest"
        >
        <p v-if="errors.email" class="mt-1 text-sm text-earth">{{ errors.email }}</p>
      </div>
      <div>
        <label for="subject" class="text-sm font-semibold text-forest">Subject</label>
        <select
          id="subject"
          v-model="form.subject"
          class="mt-1.5 w-full rounded-2xl border border-sand bg-black/[0.03] px-4 py-3 outline-none focus:border-forest"
        >
          <option v-for="subject in subjects" :key="subject">{{ subject }}</option>
        </select>
      </div>
      <div>
        <label for="message" class="text-sm font-semibold text-forest">Message</label>
        <textarea
          id="message"
          v-model="form.message"
          name="message"
          rows="5"
          required
          class="mt-1.5 w-full rounded-2xl border border-sand bg-black/[0.03] px-4 py-3 outline-none focus:border-forest"
        />
        <p v-if="errors.message" class="mt-1 text-sm text-earth">{{ errors.message }}</p>
      </div>
      <p v-if="submitError" class="text-sm text-earth">{{ submitError }}</p>
      <button
        type="submit"
        class="inline-flex items-center gap-2 rounded-full bg-forest px-5 py-3 text-sm font-semibold text-white transition hover:bg-forest-deep disabled:opacity-60"
        :disabled="pending"
      >
        {{ pending ? 'Sending…' : 'Send message' }}
        <Icon name="lucide:arrow-right" class="size-4" />
      </button>
    </form>
  </div>
</template>

<script setup lang="ts">
const { submitInquiry, apiBase } = useTourismContent()

const subjects = [
  'Planning a visit',
  'Destinations and guides',
  'Group or official guest',
  'Media inquiry',
  'Something else',
]

const form = reactive({
  name: '',
  email: '',
  subject: subjects[0] ?? 'Planning a visit',
  message: '',
})

const errors = reactive({ name: '', email: '', message: '' })
const pending = ref(false)
const result = ref<'delivered' | 'saved' | null>(null)
const submitError = ref('')

function validate() {
  errors.name = form.name.trim().length < 2 ? 'Please add your name.' : ''
  errors.email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email) ? '' : 'Enter a valid email address.'
  errors.message = form.message.trim().length < 12 ? 'Tell us a little more, at least a sentence.' : ''
  return !errors.name && !errors.email && !errors.message
}

async function onSubmit() {
  submitError.value = ''
  if (!validate()) return
  pending.value = true
  try {
    const payload = {
      name: form.name.trim(),
      email: form.email.trim(),
      subject: form.subject,
      message: form.message.trim(),
    }
    const response = await submitInquiry(payload)
    if (!response.delivered) {
      sessionStorage.setItem('davao-inquiry', JSON.stringify(payload))
      result.value = 'saved'
    }
    else {
      result.value = 'delivered'
    }
  }
  catch {
    submitError.value = 'The message could not be sent. Please email the office directly.'
  }
  finally {
    pending.value = false
  }
}
</script>
