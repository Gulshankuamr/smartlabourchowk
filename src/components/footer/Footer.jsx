'use client'

import Link from 'next/link'
import { Instagram, Facebook, Youtube, MessageCircle, Download } from 'lucide-react'
import { useLocale } from '../../contexts/LocaleContext'
import LanguageSwitcher from '../language/LanguageSwitcher'
import { WHATSAPP_LINK, PLAY_STORE_URL, SOCIAL } from '../../constants/app'

export default function Footer() {
  const { t } = useLocale()

  const product = [
    { href: '/features', label: t('nav.features') },
    { href: '/download-app', label: t('nav.downloadApp') },
    { href: '/workers', label: t('nav.workers') },
    { href: '/contractors', label: t('nav.contractors') },
  ]
  const company = [
    { href: '/blog', label: 'Blog' },
    { href: '/contact', label: 'Contact' },
    { href: '/careers', label: 'Careers' },
    { href: '/press', label: 'Press' },
  ]
  const legal = [
    { href: '/privacy', label: 'Privacy' },
    { href: '/terms', label: 'Terms' },
    { href: '/refund', label: 'Refund policy' },
  ]

  return (
    <footer className="relative mt-20 overflow-hidden bg-[#1A1A1A] text-white">
      <div className="pointer-events-none absolute -left-24 top-0 h-72 w-72 rounded-full bg-[#FF6B00]/25 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-96 w-96 rounded-full bg-[#FF9A00]/15 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 pb-16 pt-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#FF6B00] to-[#FF9A00] text-sm font-black">SLC</span>
              <div>
                <p className="font-display text-xl font-extrabold">Smart Labour Chowk</p>
                <p className="text-sm text-white/70">भारत का डिजिटल लेबर चौक</p>
              </div>
            </div>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-white/75">
              काम खोजो, मजदूर बुलाओ, WhatsApp से जुड़ो — तेज़, साफ़, भरोसेमंद। पूरा अनुभव ऐप में।
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <LanguageSwitcher variant="dark" />
              <a
                href={PLAY_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#FF6B00] to-[#FF9A00] px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-orange-500/30"
              >
                <Download className="h-4 w-4" />
                {t('common.downloadApp')}
              </a>
            </div>
            <div className="mt-10 grid max-w-md grid-cols-2 gap-4 sm:grid-cols-[1fr_auto] sm:items-end">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-white/50">{t('footer.newsletter')}</p>
                <div className="mt-2 flex gap-2">
                  <input
                    type="text"
                    readOnly
                    placeholder={t('footer.placeholder')}
                    className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none ring-0 placeholder:text-white/35"
                  />
                  <button
                    type="button"
                    className="shrink-0 rounded-2xl bg-white px-4 py-3 text-sm font-bold text-[#1A1A1A]"
                  >
                    {t('footer.subscribe')}
                  </button>
                </div>
              </div>
              <div className="flex flex-col items-start gap-2 rounded-3xl border border-white/10 bg-white/5 p-4 sm:items-center">
                <div className="h-24 w-24 rounded-2xl bg-white" />
                <span className="text-center text-[11px] text-white/60">QR — ऐप स्कैन</span>
              </div>
            </div>
          </div>

          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-[#FF9A00]">{t('footer.product')}</p>
              <ul className="mt-4 space-y-2 text-sm text-white/80">
                {product.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="hover:text-white">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-[#FF9A00]">{t('footer.company')}</p>
              <ul className="mt-4 space-y-2 text-sm text-white/80">
                {company.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="hover:text-white">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-[#FF9A00]">{t('footer.legal')}</p>
              <ul className="mt-4 space-y-2 text-sm text-white/80">
                {legal.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="hover:text-white">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-[#FF9A00]">{t('footer.social')}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                <a href={SOCIAL.instagram} target="_blank" rel="noopener noreferrer" className="rounded-2xl bg-white/10 p-3 hover:bg-white/15" aria-label="Instagram">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href={SOCIAL.facebook} target="_blank" rel="noopener noreferrer" className="rounded-2xl bg-white/10 p-3 hover:bg-white/15" aria-label="Facebook">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href={SOCIAL.youtube} target="_blank" rel="noopener noreferrer" className="rounded-2xl bg-white/10 p-3 hover:bg-white/15" aria-label="YouTube">
                  <Youtube className="h-5 w-5" />
                </a>
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="rounded-2xl bg-[#16A34A] p-3 hover:brightness-110" aria-label="WhatsApp">
                  <MessageCircle className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-white/50 sm:flex-row">
          <p>© {new Date().getFullYear()} Smart Labour Chowk. {t('footer.rights')}</p>
          <p className="text-center sm:text-right">Made for India&apos;s labour market — app-first experience.</p>
        </div>
      </div>
    </footer>
  )
}
