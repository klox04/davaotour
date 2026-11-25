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
  const { apiBase: configuredBase, GET_API, POST_API } = useGlobalStore()
  const apiBase = computed(() => configuredBase)

  async function load<T>(path: string, fallback: T[]): Promise<T[]> {
    if (!apiBase.value) return fallback
    try {
      const result = await GET_API<T[] | { data: T[] }>(path)
      if (Array.isArray(result)) return result
      return Array.isArray(result?.data) ? result.data : fallback
    }
    catch {
      return fallback
    }
  }

  function getDestinations() {
    return load<Destination>('/destinations', destinationCatalog)
  }

  function getExperiences() {
    return load<Experience>('/experiences', experienceCatalog)
  }

  function getFlavors() {
    return load<Flavor>('/flavors', flavorCatalog)
  }

  function getCulture() {
    return load<CultureHighlight>('/culture', cultureHighlights)
  }

  function getGuide() {
    return load<GuideTopic>('/guide', guideTopics)
  }

  function getFaqs() {
    return load<FaqItem>('/faqs', faqs)
  }

  function getGallery() {
    return load<GalleryItem>('/gallery', galleryCatalog)
  }

  async function submitInquiry(payload: InquiryPayload) {
    if (!apiBase.value) {
      return { delivered: false as const }
    }

    await POST_API('/inquiries', payload)

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
