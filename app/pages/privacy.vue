<template>
  <article class="bg-white pb-16 pt-24 md:pb-24 md:pt-28">
    <div class="container-page max-w-3xl">
      <p class="text-xs font-semibold uppercase tracking-[0.22em] text-tropical">Privacy</p>
      <h1 class="mt-3 font-serif text-4xl text-forest sm:text-5xl">Privacy Policy</h1>
      <div class="mt-8 space-y-4 leading-relaxed text-ink/85">
        <p>
          This guide is a visitor-facing site for the {{ office.name }}. It does not run advertising trackers. Pages can be read without creating an account.
        </p>
        <p>
          If you use the contact form, the site collects your name, email address, subject, and message so the {{ office.legalName }} can reply. When a Laravel API address is configured, that message is sent to the office endpoint. When it is not, the message stays in your browser for the session and is not transmitted.
        </p>
        <p>
          You can also write directly to
          <a class="font-semibold text-forest" :href="`mailto:${office.email}`">{{ office.email }}</a>
          or call the numbers published on the contact page. Do not send passwords or identity documents through the form.
        </p>
        <p>
          Photographs belong to their creators and are used under the licenses listed on the photo credits page. Those licenses are separate from this privacy note.
        </p>
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
import { office } from '~/data/site'

usePageSeo(
  'Privacy Policy',
  'How this Davao City Tourism guide handles messages you choose to send.',
)
</script>
