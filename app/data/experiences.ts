import type { Experience } from '~/types/content'

export const experienceCatalog: Experience[] = [
  {
    slug: 'nature-adventure',
    name: 'Nature & Adventure',
    summary: 'Hike, wander, and breathe in Davao’s forests, highlands, and open ridges.',
    description:
      'Davao’s outdoors begin at the edge of the city and climb all the way to Mount Apo. Highland gardens, mossy trails, and a summit above the clouds give the same trip room for an easy afternoon or a serious expedition.',
    image: '/images/mount-apo-trail.jpg',
    imagePosition: 'object-center',
    destinationSlugs: ['mount-apo', 'eden-nature-park'],
  },
  {
    slug: 'beaches-islands',
    name: 'Beaches & Islands',
    summary: 'Cross a short channel to Samal’s shores, shade, and clear water.',
    description:
      'The gulf is part of the city’s geography, not a side trip reserved for later. Samal Island keeps beaches, resorts, and quiet coves within a brief boat ride of downtown Davao.',
    image: '/images/samal-beach.jpg',
    destinationSlugs: ['samal-island'],
  },
  {
    slug: 'food-gastronomy',
    name: 'Food & Gastronomy',
    summary: 'Durian, pomelo, cacao, grilled tuna, and the sour brightness of kinilaw.',
    description:
      'Davao eats from its own harvest. Fruit stalls, chocolate made in the hills, and coastal kitchens turn the landscape into a menu. Taste widely, and ask before you carry durian into a hotel or a ride.',
    image: '/images/kinilaw.jpg',
    destinationSlugs: ['malagos-garden-resort', 'jacks-ridge'],
  },
  {
    slug: 'culture-heritage',
    name: 'Culture & Heritage',
    summary: 'Festivals, indigenous traditions, and the arts that keep the city distinctive.',
    description:
      'Davao is home to indigenous communities whose weaving, houses, and ceremonies are living culture, not a costume. August’s Kadayawan festival puts that heritage, and the harvest, in the streets.',
    image: '/images/kadayawan-parade.jpg',
    imagePosition: 'object-[center_30%]',
    destinationSlugs: ['peoples-park'],
  },
  {
    slug: 'family-attractions',
    name: 'Family Attractions',
    summary: 'Parks, gardens, and easy outings that work for several generations at once.',
    description:
      'People’s Park, the gardens of Malagos and Eden, and an evening at Jack’s Ridge are the kind of plans that do not need a full day’s stamina. They leave room for snacks, shade, and a photograph.',
    image: '/images/peoples-park.jpg',
    destinationSlugs: ['peoples-park', 'eden-nature-park', 'malagos-garden-resort', 'jacks-ridge', 'samal-island'],
  },
  {
    slug: 'wildlife-conservation',
    name: 'Wildlife & Conservation',
    summary: 'Meet the Philippine Eagle and the forests it still depends on.',
    description:
      'The eagle center in Malagos is the clearest window onto Davao’s wildlife work. Pair it with time in Mount Apo’s forest and you see both the bird and the landscape it needs.',
    image: '/images/eagle-portrait.jpg',
    imagePosition: 'object-[center_18%]',
    destinationSlugs: ['philippine-eagle-center', 'davao-crocodile-park', 'mount-apo'],
  },
]
