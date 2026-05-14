'use client'

import { motion } from 'framer-motion'
import { MapPin, Star, MessageCircle, Bell, BadgeCheck, Mic, Languages, IdCard } from 'lucide-react'
import Link from 'next/link'
import { useLocale } from '../../contexts/LocaleContext'
import { useDownloadPrompt } from '../../contexts/DownloadPromptContext'

const blocks = [
  { icon: MapPin, title: 'Nearby Search', body: 'GPS smart matching for jobs and workers.' },
  { icon: Star, title: 'Ratings', body: 'Transparent reviews after every job.' },
  { icon: MessageCircle, title: 'WhatsApp Connect', body: 'One tap to chat — no middlemen.' },
  { icon: Bell, title: 'Job Alerts', body: 'Push for new jobs near you.' },
  { icon: BadgeCheck, title: 'Verified Badge', body: 'Trust layer for contractors.' },
  { icon: Mic, title: 'Voice Search', body: 'Hindi-first voice queries.' },
  { icon: Languages, title: 'Multi-language', body: 'Hindi + English UI.' },
  { icon: IdCard, title: 'Aadhaar verification', body: 'Safer marketplace (rolling out).' },
]

export default function FeaturesLanding() {
  const { t } = useLocale()
  const { openPrompt } = useDownloadPrompt()

  return (
    <>
      <section className="bg-[#FFF7F2] pt-24 pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#FF6B00]">{t('nav.features')}</p>
          <h1 className="mt-3 max-w-3xl font-display text-4xl font-extrabold text-[#1A1A1A] sm:text-5xl">भारत के लेबर मार्केट के लिए बनाए गए फ़ीचर्स</h1>
          <p className="mt-4 max-w-2xl text-lg text-neutral-600">सरल UI, तेज़ फ्लो, ऐप में पूरा अनुभव।</p>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          {blocks.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 4) * 0.05 }}
              className="rounded-3xl border border-neutral-100 bg-[#FFF7F2] p-8 shadow-sm"
            >
              <b.icon className="h-10 w-10 text-[#FF6B00]" />
              <h2 className="mt-4 text-xl font-extrabold text-[#1A1A1A]">{b.title}</h2>
              <p className="mt-2 text-sm text-neutral-600">{b.body}</p>
              <button type="button" onClick={openPrompt} className="mt-6 text-sm font-bold text-[#FF6B00] underline-offset-4 hover:underline">
                {t('common.downloadApp')} — live demo
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="bg-[#1A1A1A] py-14 text-center text-white">
        <Link href="/download-app" className="text-sm font-bold text-[#FF9A00] underline">
          {t('common.viewFull')} download page →
        </Link>
      </section>
    </>
  )
}
