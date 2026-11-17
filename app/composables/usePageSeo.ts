export function usePageSeo(title: string, description: string, image = '/images/mount-apo-peak.jpg') {
  const fullTitle = `${title} · Davao City Tourism`

  useSeoMeta({
    title: fullTitle,
    description,
    ogTitle: fullTitle,
    ogDescription: description,
    ogImage: image,
    twitterCard: 'summary_large_image',
    twitterTitle: fullTitle,
    twitterDescription: description,
    twitterImage: image,
  })
}
