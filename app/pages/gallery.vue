<template>
  <div>
    <PageHero
      eyebrow="Gallery"
      title="Davao, in pictures."
      description="Mountains, beaches, wildlife, the city, festivals, food, and communities."
      image="/images/mount-apo-peak.jpg"
      image-position="object-[center_50%]"
    />
    <section class="bg-white py-14 md:py-20">
      <div class="container-page">
        <GallerySection :items="gallery ?? []" layout="masonry" />
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const { getGallery } = useTourismContent()
const { data: gallery } = await useAsyncData('gallery', getGallery)

usePageSeo(
  'Gallery',
  'Photography of Davao’s mountains, beaches, wildlife, festivals, food, and communities.',
  '/images/mount-apo-peak.jpg',
)
</script>
