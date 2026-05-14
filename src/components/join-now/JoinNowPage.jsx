'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Download } from 'lucide-react'
import { useLocale } from '../../contexts/LocaleContext'
import { PLAY_STORE_URL } from '../../constants/app'

const steps = ['मोबाइल नंबर', 'स्किल चुनें', 'लोकेशन ऑन', 'ऐप में OTP']

export default function JoinNowPage() {
  const { t } = useLocale()

  return (
    <section className="bg-[#FFF7F2] pt-24 pb-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-center font-display text-4xl font-extrabold text-[#1A1A1A]">{t('nav.joinNow')}</h1>
        <p className="mt-3 text-center text-neutral-600">2 मिनट में शुरू — पूरा ऑनबोर्डिंग ऐप में।</p>

        <div className="mt-10 space-y-4">
          {steps.map((s, i) => (
            <motion.div
              key={s}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="flex items-center gap-4 rounded-3xl border border-white bg-white p-5 shadow-sm"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-[#FF6B00] to-[#FF9A00] text-sm font-black text-white">
                {i + 1}
              </span>
              <p className="text-base font-bold text-[#1A1A1A]">{s}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center gap-3">
          <a href={PLAY_STORE_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-2xl bg-[#1A1A1A] px-8 py-3.5 text-sm font-bold text-white">
            <Download className="h-4 w-4" />
            ऐप खोलें और साइनअप पूरा करें
          </a>
          <Link href="/login" className="text-sm font-bold text-[#FF6B00]">
            पहले से अकाउंट? {t('nav.login')}
          </Link>
        </div>
      </div>
    </section>
  )
}
