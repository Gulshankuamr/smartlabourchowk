import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getSeoBySlug } from '../../data/seoLandings'
import JsonLd from './JsonLd'
import { SITE_URL } from '../../constants/app'

export default async function SeoLandingBody({ slug }) {
  const page = getSeoBySlug(slug)
  if (!page) notFound()

  const base = SITE_URL.replace(/\/$/, '')
  const pagePath = `/${slug}`
  const localLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Smart Labour Chowk',
    description: page.description,
    url: `${base}${pagePath}`,
    areaServed: 'India',
  }

  return (
    <div className="bg-white pt-24 pb-20">
      <JsonLd data={localLd} />
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <p className="text-xs font-bold uppercase tracking-wide text-[#FF6B00]">SEO</p>
        <h1 className="mt-3 font-display text-4xl font-extrabold text-[#1A1A1A]">{page.h1}</h1>
        <p className="mt-6 whitespace-pre-line text-lg leading-relaxed text-neutral-700">{page.body}</p>
        <div className="mt-10 flex flex-wrap gap-3">
          <Link href="/download-app" className="rounded-2xl bg-gradient-to-r from-[#FF6B00] to-[#FF9A00] px-6 py-3 text-sm font-bold text-white">
            Download app
          </Link>
          <Link href="/workers" className="rounded-2xl border-2 border-[#FF6B00]/30 px-6 py-3 text-sm font-bold text-[#FF6B00]">
            Workers
          </Link>
        </div>
      </div>
    </div>
  )
}
