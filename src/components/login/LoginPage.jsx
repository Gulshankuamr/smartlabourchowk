'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { useLocale } from '../../contexts/LocaleContext'
import { useDownloadPrompt } from '../../contexts/DownloadPromptContext'

export default function LoginPage() {
  const { t } = useLocale()
  const { openPrompt } = useDownloadPrompt()
  const [tab, setTab] = useState('worker')
  const [phone, setPhone] = useState('')

  return (
    <section className="min-h-[80vh] bg-[#FFF7F2] pt-24 pb-16">
      <div className="mx-auto max-w-md px-4">
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="rounded-[2rem] border border-white bg-white p-8 shadow-xl">
          <h1 className="text-center font-display text-2xl font-extrabold text-[#1A1A1A]">{t('nav.login')}</h1>
          <p className="mt-2 text-center text-sm text-neutral-600">OTP से लॉगिन — पूरा अनुभव ऐप में।</p>

          <div className="mt-6 grid grid-cols-2 gap-2 rounded-2xl bg-[#FFF7F2] p-1 text-sm font-bold">
            <button type="button" onClick={() => setTab('worker')} className={`rounded-xl py-2 ${tab === 'worker' ? 'bg-white text-[#FF6B00] shadow-sm' : 'text-neutral-600'}`}>
              Worker
            </button>
            <button type="button" onClick={() => setTab('contractor')} className={`rounded-xl py-2 ${tab === 'contractor' ? 'bg-white text-[#FF6B00] shadow-sm' : 'text-neutral-600'}`}>
              Contractor
            </button>
          </div>

          <label className="mt-6 block text-xs font-bold text-neutral-600">Mobile number</label>
          <input
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            inputMode="numeric"
            placeholder="10-digit mobile"
            className="mt-2 w-full rounded-2xl border border-neutral-200 bg-[#FFF7F2] px-4 py-3 text-sm font-semibold outline-none ring-0 focus:border-[#FF6B00]"
          />

          <button
            type="button"
            onClick={openPrompt}
            className="mt-6 w-full rounded-2xl bg-gradient-to-r from-[#FF6B00] to-[#FF9A00] py-3.5 text-sm font-bold text-white shadow-lg"
          >
            Send OTP (opens app install)
          </button>

          <p className="mt-4 text-center text-xs text-neutral-500">OTP वेब पर सीमित है — जारी रखने के लिए ऐप डाउनलोड करें।</p>

          <div className="mt-6 text-center text-sm">
            <Link href="/join-now" className="font-bold text-[#FF6B00]">
              {t('nav.joinNow')} →
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
