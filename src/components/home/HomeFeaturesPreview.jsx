'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'
import { useLocale } from '../../contexts/LocaleContext'

export default function HomeFeaturesPreview() {
  const { t } = useLocale()
  const list = t('features.list')
  const items = Array.isArray(list) ? list : []

  return (
    <section className="bg-[#FFF7F2] py-16 sm:py-24">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8">
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-[2rem] border border-white/70 bg-white shadow-2xl shadow-orange-500/15"
        >
          <Image
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=900&q=80"
            alt="Construction workers India"
            width={900}
            height={700}
            className="h-full w-full object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-[#FF6B00]/40 via-transparent to-transparent" />
          <p className="absolute bottom-4 left-4 rounded-2xl bg-black/55 px-4 py-2 text-sm font-semibold text-white backdrop-blur-sm">
            Real sites • Real workers
          </p>
        </motion.div>
        <div>
          <h2 className="font-display text-3xl font-extrabold text-[#1A1A1A] sm:text-4xl">{t('features.title')}</h2>
          <ul className="mt-8 space-y-4">
            {items.map((feat, i) => (
              <motion.li
                key={feat}
                initial={{ opacity: 0, x: 12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                className="flex items-start gap-3 rounded-2xl bg-white px-4 py-3 shadow-sm ring-1 ring-black/5"
              >
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#16A34A]" />
                <span className="text-sm font-semibold text-neutral-800 sm:text-base">{feat}</span>
              </motion.li>
            ))}
          </ul>
          <Link
            href="/features"
            className="mt-10 inline-flex rounded-full bg-gradient-to-r from-[#FF6B00] to-[#FF9A00] px-8 py-3 text-sm font-bold text-white shadow-lg shadow-orange-500/25"
          >
            {t('common.seeAllFeatures')}
          </Link>
        </div>
      </div>
    </section>
  )
}
