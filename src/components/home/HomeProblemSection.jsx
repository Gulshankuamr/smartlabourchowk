'use client'

import { motion } from 'framer-motion'
import { useLocale } from '../../contexts/LocaleContext'

export default function HomeProblemSection() {
  const { t } = useLocale()
  const cards = t('problem.cards')

  return (
    <section className="relative overflow-hidden bg-[#1A1A1A] py-16 text-white sm:py-24">
      <div className="pointer-events-none absolute left-1/2 top-0 h-64 w-[120%] -translate-x-1/2 bg-[radial-gradient(circle,rgba(255,107,0,0.35),transparent_60%)] blur-2xl" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-4xl text-center font-display text-3xl font-extrabold leading-tight sm:text-4xl"
        >
          {t('problem.title')}
        </motion.h2>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {Array.isArray(cards) &&
            cards.map((c, i) => (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-lg shadow-orange-500/10 backdrop-blur-sm"
              >
                <p className="text-lg font-bold text-[#FF9A00]">{c.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-white/75">{c.body}</p>
              </motion.div>
            ))}
        </div>
      </div>
    </section>
  )
}
