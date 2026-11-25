import type { NavItem } from '~/types/content'

export const office = {
  name: 'Davao City Tourism Office',
  legalName: 'City Tourism Operations Office',
  tagline: 'Nature · Culture · Adventure',
  description:
    'Davao City is a destination where nature, culture, adventure, and warm hospitality come together.',
  addressLines: [
    '2nd Floor, Pasalubong Center',
    'Palma Gil Street',
    'Davao City 8000, Philippines',
  ],
  phones: [
    { label: 'Globe', display: '0995 136 5173', tel: '+639951365173' },
    { label: 'Smart', display: '0968 223 0613', tel: '+639682230613' },
  ],
  email: 'ctoo@davaocity.gov.ph',
  hours: 'Monday to Friday, 8:00 AM – 5:00 PM',
  facebook: 'https://www.facebook.com/DavaoCityTourism/',
  website: 'https://tourism.davaocity.gov.ph/',
  mapUrl:
    'https://www.google.com/maps/search/?api=1&query=Pasalubong+Center+Palma+Gil+Street+Davao+City',
}

export const mainNav: NavItem[] = [
  { label: 'Home', to: '/' },
  { label: 'Explore Davao', to: '/explore' },
  { label: 'Destinations', to: '/destinations' },
  { label: 'Things to Do', to: '/things-to-do' },
  { label: 'Events & Festivals', to: '/events-festivals' },
  { label: 'Where to Stay', to: '/where-to-stay' },
  { label: 'Travel Guide', to: '/travel-guide' },
  { label: 'Contact Us', to: '/contact' },
]

export const headerNav: NavItem[] = [
  {
    label: 'Discover Davao',
    to: '/explore',
    children: [
      { label: 'Explore Davao', to: '/explore' },
      { label: 'Destinations', to: '/destinations' },
      { label: 'Gallery', to: '/gallery' },
    ],
  },
  { label: 'Things to Do', to: '/things-to-do' },
  { label: 'Where to Stay', to: '/where-to-stay' },
  { label: 'Events & Festivals', to: '/events-festivals' },
  { label: 'Travel Info', to: '/travel-guide' },
]

export const footerNav: NavItem[] = [
  ...mainNav,
  { label: 'Gallery', to: '/gallery' },
]
