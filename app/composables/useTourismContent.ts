import { cultureHighlights } from '~/data/culture'
import { destinationCatalog } from '~/data/destinations'
import { experienceCatalog } from '~/data/experiences'
import { flavorCatalog } from '~/data/flavors'
import { galleryCatalog } from '~/data/gallery'
import { faqs, guideTopics } from '~/data/guide'
import type {
  CultureHighlight,
  Destination,
  Experience,
  FaqItem,
  Flavor,
  GalleryItem,
  GuideTopic,
  InquiryPayload,
} from '~/types/content'

/**
 * Local catalogs stand in until NUXT_PUBLIC_API_BASE points at a Laravel API.
 * Expected routes, with JSON matching the types in ~/types/content:
 *   GET  {apiBase}/destinations
 *   GET  {apiBase}/experiences
 *   GET  {apiBase}/flavors
 *   GET  {apiBase}/culture
 *   GET  {apiBase}/guide
 *   GET  {apiBase}/faqs
 *   GET  {apiBase}/gallery
 *   POST {apiBase}/inquiries
 */
export function useTourismContent() {
  const config = useRuntimeConfig()

  const apiBase = computed(() => String(config.public.apiBase || '').replace(/\/$/, ''))

  async function load<T>(path: string, fallback: T): Promise<T> {
    if (!apiBase.value) return fallback
    try {
      return await $fetch(`${apiBase.value}${path}`) as T
    }
    catch {
      return fallback
    }
  }

  function getDestinations() {
    return load<Destination[]>('/destinations', destinationCatalog)
  }

  function getExperiences() {
    return load<Experience[]>('/experiences', experienceCatalog)
  }

  function getFlavors() {
    return load<Flavor[]>('/flavors', flavorCatalog)
  }

  function getCulture() {
    return load<CultureHighlight[]>('/culture', cultureHighlights)
  }

  function getGuide() {
    return load<GuideTopic[]>('/guide', guideTopics)
  }

  function getFaqs() {
    return load<FaqItem[]>('/faqs', faqs)
  }

  function getGallery() {
    return load<GalleryItem[]>('/gallery', galleryCatalog)
  }

  async function submitInquiry(payload: InquiryPayload) {
    if (!apiBase.value) {
      return { delivered: false as const }
    }

    await $fetch(`${apiBase.value}/inquiries`, {
      method: 'POST',
      body: payload,
    })

    return { delivered: true as const }
  }

  return {
    apiBase,
    getDestinations,
    getExperiences,
    getFlavors,
    getCulture,
    getGuide,
    getFaqs,
    getGallery,
    submitInquiry,
  }
}
