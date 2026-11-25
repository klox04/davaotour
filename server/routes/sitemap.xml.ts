import { destinationCatalog } from '../../app/data/destinations'

const paths = [
  '/',
  '/explore',
  '/destinations',
  '/things-to-do',
  '/events-festivals',
  '/where-to-stay',
  '/travel-guide',
  '/gallery',

  '/contact',
  '/privacy',
  '/terms',
  '/credits',
  ...destinationCatalog.map(item => `/destinations/${item.slug}`),
]

export default defineEventHandler((event) => {
  const origin = getRequestURL(event).origin
  const urls = paths
    .map((path) => `<url><loc>${origin}${path}</loc></url>`)
    .join('')

  setHeader(event, 'content-type', 'application/xml; charset=utf-8')
  return `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`
})
