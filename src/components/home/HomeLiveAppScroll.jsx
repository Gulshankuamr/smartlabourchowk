'use client'

import { useRef } from 'react'
import { motion, useScroll, useSpring, useTransform } from 'framer-motion'
import { useLocale } from '../../contexts/LocaleContext'

const screens = [
  { label: 'Home feed', tone: 'from-orange-500 to-amber-400' },
  { label: 'Worker profile', tone: 'from-slate-800 to-slate-600' },
  { label: 'Job detail', tone: 'from-emerald-600 to-teal-500' },
  { label: 'Post job', tone: 'from-rose-500 to-orange-400' },
  { label: 'Search', tone: 'from-indigo-600 to-violet-500' },
  { label: 'Subscription', tone: 'from-amber-600 to-yellow-400' },
  { label: 'Contractor dashboard', tone: 'from-neutral-800 to-neutral-600' },
]

export default function HomeLiveAppScroll() {
  const { t } = useLocale()
  const ref = useRef(null)
  const { scrollXProgress } = useScroll({ container: ref })
  const scaleX = useSpring(scrollXProgress, { stiffness: 120, damping: 28 })
  const width = useTransform(scaleX, [0, 1], ['8%', '100%'])

  return (
    <section className="bg-[#1A1A1A] py-16 text-white sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#FF9A00]">App</p>
            <h2 className="mt-1 font-display text-3xl font-extrabold sm:text-4xl">Live screens — drag to explore</h2>
            <p className="mt-2 max-w-xl text-sm text-white/70">पूरा अनुभव ऐप में। वेब पर सिर्फ झलक।</p>
          </div>
          <p className="text-xs text-white/50">{t('common.openInApp')}</p>
        </div>

        <div className="mt-4 h-1.5 w-full overflow-hidden rounded-full bg-white/10">
          <motion.div className="h-full rounded-full bg-gradient-to-r from-[#FF6B00] to-[#FF9A00]" style={{ width }} />
        </div>

        <div
          ref={ref}
          className="mt-10 flex cursor-grab gap-4 overflow-x-auto pb-4 active:cursor-grabbing snap-x snap-mandatory [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {screens.map((s) => (
            <motion.div
              key={s.label}
              whileHover={{ y: -4 }}
              className={`relative h-[420px] w-[260px] shrink-0 snap-start overflow-hidden rounded-[2rem] bg-gradient-to-br ${s.tone} p-5 shadow-2xl shadow-black/40 sm:h-[460px] sm:w-[280px]`}
            >
              <div className="flex items-center justify-between text-[11px] font-bold text-white/90">
                <span>9:41</span>
                <span className="rounded-full bg-black/20 px-2 py-0.5">LTE</span>
              </div>
              <p className="mt-8 text-lg font-extrabold leading-tight text-white">{s.label}</p>
              <div className="mt-6 space-y-2">
                <div className="h-3 w-3/4 rounded-full bg-white/30" />
                <div className="h-3 w-2/3 rounded-full bg-white/20" />
                <div className="h-3 w-5/6 rounded-full bg-white/25" />
              </div>
              <div className="absolute bottom-5 left-5 right-5 rounded-2xl bg-black/35 px-4 py-3 text-center text-xs font-bold text-white backdrop-blur-md">
                {t('common.downloadApp')} — full view
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
