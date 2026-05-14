'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Download } from 'lucide-react'
import { useLocale } from '../../contexts/LocaleContext'
import { useDownloadPrompt } from '../../contexts/DownloadPromptContext'
import HeroAppMockup from './HeroAppMockup'
import { PLAY_STORE_URL } from '../../constants/app'

export default function SlcHero() {
  const { t } = useLocale()
  const { openPrompt } = useDownloadPrompt()

  return (
    <section className="relative isolate overflow-hidden bg-[#FFF7F2] pt-24 pb-16 sm:pt-28 sm:pb-20 lg:pt-32 lg:pb-28">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 top-10 h-80 w-80 rounded-full bg-[#FF6B00]/20 blur-3xl" />
        <div className="absolute right-0 top-40 h-96 w-96 rounded-full bg-[#FF9A00]/18 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(255,107,0,0.12),transparent_45%)]" />
      </div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:px-8">
        <div>
          <motion.span
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center rounded-full bg-white px-4 py-1.5 text-xs font-bold text-[#FF6B00] shadow-sm ring-1 ring-[#FF6B00]/15"
          >
            {t('hero.badge')}
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="mt-6 font-display text-4xl font-extrabold leading-[1.08] tracking-tight text-[#1A1A1A] sm:text-5xl lg:text-[3.25rem]"
          >
            <span className="block text-[#FF6B00]">{t('hero.title1')}</span>
            <span className="block">{t('hero.title2')}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-sm font-semibold text-neutral-700 sm:text-base"
          >
            {t('hero.highlight')}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.14 }}
            className="mt-4 max-w-xl text-base leading-relaxed text-neutral-600 sm:text-lg"
          >
            {t('hero.desc')}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.18 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <Link
              href="/workers"
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#1A1A1A] px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-black/15 transition hover:bg-black"
            >
              {t('hero.ctaFindWork')}
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/contractors"
              className="inline-flex items-center justify-center gap-2 rounded-2xl border-2 border-[#FF6B00]/40 bg-white px-6 py-3.5 text-sm font-bold text-[#FF6B00] shadow-sm transition hover:border-[#FF6B00]"
            >
              {t('hero.ctaFindLabour')}
            </Link>
            <button
              type="button"
              onClick={openPrompt}
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-[#FF6B00] to-[#FF9A00] px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-orange-500/30"
            >
              <Download className="h-4 w-4" />
              {t('common.downloadApp')}
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.25 }}
            className="mt-10 grid grid-cols-2 gap-3 sm:flex sm:flex-wrap sm:gap-6"
          >
            {[t('hero.trust1'), t('hero.trust2'), t('hero.trust3'), t('hero.trust4')].map((x) => (
              <div key={x} className="rounded-2xl bg-white/80 px-4 py-3 text-center text-xs font-bold text-[#1A1A1A] shadow-sm ring-1 ring-black/5 sm:text-sm">
                {x}
              </div>
            ))}
          </motion.div>
        </div>

        <HeroAppMockup />
      </div>
    </section>
  )
}
