'use client'

import { motion } from 'framer-motion'
import { MapPin, MessageCircle, Star, Bell, ToggleRight } from 'lucide-react'
import { useLocale } from '../../contexts/LocaleContext'

const cards = [
  { name: 'Raj Mistri', role: 'Mason', dist: '1.2 km', rating: '4.9' },
  { name: 'Vikram Helper', role: 'Helper', dist: '2.0 km', rating: '4.7' },
]

export default function HeroAppMockup() {
  const { t } = useLocale()

  return (
    <div className="relative mx-auto w-full max-w-md">
      <div className="pointer-events-none absolute -inset-6 rounded-[2.5rem] bg-gradient-to-br from-[#FF6B00]/25 to-transparent blur-2xl" />
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative overflow-hidden rounded-[2rem] border border-white/60 bg-white/90 shadow-2xl shadow-orange-500/20 backdrop-blur-md"
      >
        <div className="flex items-center justify-between border-b border-neutral-100 px-5 py-4">
          <div>
            <p className="text-[11px] font-semibold text-[#FF6B00]">Smart Labour Chowk</p>
            <p className="text-sm font-bold text-[#1A1A1A]">{t('common.nearby')} jobs</p>
          </div>
          <div className="flex items-center gap-2 rounded-full bg-[#FFF7F2] px-3 py-1.5 text-[11px] font-bold text-[#1A1A1A]">
            <ToggleRight className="h-4 w-4 text-[#16A34A]" />
            On duty
          </div>
        </div>

        <div className="space-y-3 px-4 py-4">
          <div className="flex items-center gap-2 rounded-2xl bg-[#1A1A1A] px-3 py-2 text-[11px] text-white/90">
            <MapPin className="h-4 w-4 shrink-0 text-[#FF9A00]" />
            Sector 62, Noida • 6 jobs {t('common.nearby')}
          </div>

          {cards.map((c, i) => (
            <motion.div
              key={c.name}
              initial={{ opacity: 0, x: i % 2 === 0 ? -12 : 12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.15 + i * 0.12 }}
              className="flex items-center justify-between rounded-2xl border border-neutral-100 bg-white p-3 shadow-sm"
            >
              <div>
                <p className="text-sm font-bold text-[#1A1A1A]">{c.name}</p>
                <p className="text-xs text-neutral-500">{c.role} • {c.dist}</p>
                <p className="mt-1 flex items-center gap-1 text-xs font-semibold text-amber-600">
                  <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                  {c.rating}
                </p>
              </div>
              <button
                type="button"
                className="rounded-xl bg-[#16A34A] px-3 py-2 text-[11px] font-bold text-white shadow-md shadow-green-600/25"
              >
                <span className="flex items-center gap-1">
                  <MessageCircle className="h-3.5 w-3.5" />
                  WA
                </span>
              </button>
            </motion.div>
          ))}

          <motion.div
            animate={{ y: [0, -4, 0] }}
            transition={{ repeat: Infinity, duration: 3.2 }}
            className="rounded-2xl border border-dashed border-[#FF6B00]/40 bg-[#FFF7F2] p-3 text-center text-xs font-semibold text-[#1A1A1A]"
          >
            +2 {t('common.workers')} {t('hero.highlight').split('•')[0]}
          </motion.div>
        </div>

        <div className="border-t border-neutral-100 bg-[#FFF7F2]/80 px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Bell className="h-4 w-4 text-[#FF6B00]" />
              <p className="text-[11px] font-semibold text-neutral-700">New job: Plumber — ₹800/day</p>
            </div>
            <span className="rounded-full bg-[#FF6B00] px-2 py-0.5 text-[10px] font-bold text-white">New</span>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="absolute -right-4 top-24 hidden rounded-2xl border border-white/70 bg-white/95 px-3 py-2 text-[10px] font-bold text-[#1A1A1A] shadow-lg sm:block"
        animate={{ y: [0, -6, 0] }}
        transition={{ repeat: Infinity, duration: 2.8 }}
      >
        📍 3 pins {t('common.nearby')}
      </motion.div>
    </div>
  )
}
