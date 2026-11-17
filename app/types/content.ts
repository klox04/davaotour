export interface Destination {
  slug: string
  name: string
  summary: string
  description: string[]
  location: string
  image: string
  imagePosition?: string
  gallery: string[]
  experiences: string[]
  highlights: string[]
  practical?: string
}

export interface Experience {
  slug: string
  name: string
  summary: string
  description: string
  image: string
  imagePosition?: string
  destinationSlugs: string[]
}

export interface Flavor {
  slug: string
  name: string
  summary: string
  image: string
}

export interface CultureHighlight {
  title: string
  summary: string
  image: string
}

export interface GuideTopic {
  slug: string
  title: string
  summary: string
  icon: string
  paragraphs: string[]
}

export interface FaqItem {
  question: string
  answer: string
}

export type GalleryCategory =
  | 'Mountains'
  | 'Beaches'
  | 'Wildlife'
  | 'City'
  | 'Festivals'
  | 'Food'
  | 'Communities'

export interface GalleryItem {
  src: string
  alt: string
  caption: string
  category: GalleryCategory
  featured?: boolean
}

export interface PhotoCredit {
  file: string
  title: string
  author: string
  license: string
  sourceUrl: string
}

export interface InquiryPayload {
  name: string
  email: string
  subject: string
  message: string
}

export interface NavItem {
  label: string
  to: string
  children?: NavItem[]
}
