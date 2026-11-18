export function usePageSeo(title: string, description: string, image = '/images/mount-apo-peak.jpg') {
  useSeoMeta({
    title: 'Davao City Tourism Office',
    description,
    ogTitle: 'Davao City Tourism Office',
    ogDescription: description,
    ogImage: image,
    twitterCard: 'summary_large_image',
    twitterTitle: 'Davao City Tourism Office',
    twitterDescription: description,
    twitterImage: image,
  })
}