import { SITE_URL } from '../constants/app'

export default function robots() {
  const base = SITE_URL.replace(/\/$/, '')
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${base}/sitemap.xml`,
  }
}
