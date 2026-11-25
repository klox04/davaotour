import type { CultureHighlight } from '~/types/content'

export const cultureIntro = {
  eyebrow: 'Culture & Festivals',
  title: 'A City of Culture and Celebration',
  summary:
    'Davao’s calendar turns on the harvest, on indigenous heritage, and on neighborhoods that still know how to throw a fiesta.',
}

export const cultureHighlights: CultureHighlight[] = [
  {
    title: 'Kadayawan Festival',
    summary:
      'Every August the city gives thanks for the harvest and for the cultures that share it. Street dancers and floral floats fill the avenues, and “Madayaw” — good, beautiful, valuable — becomes the greeting of the week.',
    image: '/images/kadayawan-parade.jpg',
  },
  {
    title: 'Indigenous Heritage',
    summary:
      'Bagobo Klata, Bagobo Tagabawa, Obu Manuvu, Matigsalug, Ata, Kagan, and other communities are part of Davao’s present, not only its past. Their houses, cloth, and ceremonies are best met with time and respect.',
    image: '/images/culture-gate.jpg',
  },
  {
    title: 'Local Arts & Crafts',
    summary:
      'Weaving, beadwork, and carved patterns travel from community workshops into festival dress and gallery displays. Look closely: the geometry is a language.',
    image: '/images/culture-bagobo.jpg',
  },
  {
    title: 'Traditional Performances',
    summary:
      'Indak-indak troupes rehearse for months. Headdresses, percussion, and formations turn the harvest into a moving street stage during Kadayawan.',
    image: '/images/kadayawan.jpg',
  },
  {
    title: 'Community Celebrations',
    summary:
      'Beyond the main parade, cultural villages and neighborhood fiestas open their gates. A painted fence, a ceremonial boat, or a shared meal can be the memory that stays.',
    image: '/images/culture-boat.jpg',
  },
]

export const communities = [
  {
    name: 'Bagobo Klata, Tagabawa, and Obu Manuvu',
    summary: 'Peoples of the highlands around Mount Apo, known for traditional weaving, brass, and a deep tie to the mountain.',
    image: '/images/culture-bagobo.jpg',
  },
  {
    name: 'Matigsalug',
    summary: 'A river people whose name refers to life along the water, with communities in the Davao uplands.',
    image: '/images/culture-matigsalug.jpg',
  },
  {
    name: 'Ata',
    summary: 'One of Davao’s indigenous communities, present in cultural villages that welcome guests during city celebrations.',
    image: '/images/culture-gate.jpg',
  },
  {
    name: 'Maguindanaon and neighboring Moro communities',
    summary: 'Homes, boats, and textile patterns that carry the maritime and river traditions of Mindanao into the city.',
    image: '/images/culture-house.jpg',
  },
]
