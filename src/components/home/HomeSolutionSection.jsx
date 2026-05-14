'use client'

import { motion } from 'framer-motion'
import { UserPlus, Briefcase, MessageCircle } from 'lucide-react'
import Link from 'next/link'
import { useLocale } from '../../contexts/LocaleContext'

const icons = [UserPlus, Briefcase, MessageCircle]

export default function HomeSolutionSection() {
  const { t } = useLocale()
  const steps = [t('solution.step1'), t('solution.step2'), t('solution.step3')]

  return (
    <section className="bg-[#FFF7F2] py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-3xl font-extrabold text-[#1A1A1A] sm:text-4xl">{t('solution.title')}</h2>
        </div>

        <div className="relative mx-auto mt-14 grid max-w-5xl gap-10 lg:grid-cols-3">
          <div className="pointer-events-none absolute left-[8%] right-[8%] top-12 hidden h-0.5 bg-gradient-to-r from-[#FF6B00]/20 via-[#FF6B00] to-[#FF6B00]/20 lg:block" />
          {steps.map((label, i) => {
            const Icon = icons[i]
            return (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="relative rounded-3xl border border-white/80 bg-white p-8 text-center shadow-xl shadow-orange-500/10"
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#FF6B00] to-[#FF9A00] text-white shadow-lg">
                  <Icon className="h-7 w-7" />
                </div>
                <p className="mt-4 text-xs font-bold uppercase tracking-wider text-[#FF6B00]">Step {i + 1}</p>
                <p className="mt-2 text-lg font-extrabold text-[#1A1A1A]">{label}</p>
              </motion.div>
            )
          })}
        </div>

        <div className="mt-12 flex justify-center">
          <Link
            href="/how-it-works"
            className="rounded-full bg-[#1A1A1A] px-8 py-3 text-sm font-bold text-white shadow-lg transition hover:bg-black"
          >
            {t('common.viewFull')} — {t('nav.howItWorks')}
          </Link>
        </div>
      </div>
    </section>
  )
}
