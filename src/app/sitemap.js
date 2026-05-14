import { blogPosts } from '../data/blogPosts'
import { seoLandings } from '../data/seoLandings'
import { SITE_URL } from '../constants/app'

const staticPaths = [
  '/',
  '/features',
  '/how-it-works',
  '/workers',
  '/contractors',
  '/download-app',
  '/login',
  '/join-now',
  '/blog',
  '/contact',
  '/careers',
  '/privacy',
  '/terms',
  '/refund',
  '/press',
]

export default function sitemap() {
  const base = SITE_URL.replace(/\/$/, '')
  const entries = staticPaths.map((path) => ({
    url: `${base}${path === '/' ? '' : path}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: path === '/' ? 1 : 0.7,
  }))

  const blogEntries = blogPosts.map((p) => ({
    url: `${base}/blog/${p.slug}`,
    lastModified: new Date(p.date),
    changeFrequency: 'monthly',
    priority: 0.65,
  }))

  const seoEntries = seoLandings.map((s) => ({
    url: `${base}/${s.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.75,
  }))

  return [...entries, ...blogEntries, ...seoEntries]
}
