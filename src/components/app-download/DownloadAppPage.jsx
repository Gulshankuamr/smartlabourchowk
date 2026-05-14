'use client'

import { motion } from 'framer-motion'
import { Download, QrCode, Check, MessageCircle } from 'lucide-react'
import Link from 'next/link'
import { useLocale } from '../../contexts/LocaleContext'
import { WHATSAPP_LINK, PLAY_STORE_URL } from '../../constants/app'

const rows = [
  { label: 'Nearby jobs', web: 'Preview', app: 'Full' },
  { label: 'WhatsApp connect', web: 'Locked', app: 'Open' },
  { label: 'Verified badge', web: 'Limited', app: 'Full' },
]

export default function DownloadAppPage() {
  const { t } = useLocale()

  return (
    <>
      <section className="bg-gradient-to-br from-[#FF6B00] to-[#FF9A00] pt-24 pb-16 text-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <h1 className="font-display text-4xl font-extrabold sm:text-5xl">ऐप इंस्टॉल करें — पूरा Smart Labour Chowk खुलेगा।</h1>
            <p className="mt-4 text-white/90">QR स्कैन करें या Play Store बटन दबाएं।</p>
            <a
              href={PLAY_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-2xl bg-white px-8 py-3.5 text-sm font-bold text-[#FF6B00] shadow-xl"
            >
              <Download className="h-5 w-5" />
              Play Store
            </a>
            <p className="mt-4 text-xs text-white/80">App Store — Coming soon</p>
          </div>
          <motion.div initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="flex flex-col items-center justify-center rounded-[2rem] bg-white/15 p-10 backdrop-blur-md">
            <QrCode className="h-40 w-40 text-white" />
            <p className="mt-4 text-sm font-semibold">Scan — install — start earning/hiring</p>
          </motion.div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center font-display text-3xl font-extrabold text-[#1A1A1A]">Web vs App</h2>
          <div className="mt-10 overflow-hidden rounded-3xl border border-neutral-100 shadow-sm">
            <table className="w-full text-left text-sm">
              <thead className="bg-[#FFF7F2] text-xs font-bold uppercase text-neutral-600">
                <tr>
                  <th className="px-6 py-4">Feature</th>
                  <th className="px-6 py-4">Website</th>
                  <th className="px-6 py-4">App</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((r) => (
                  <tr key={r.label} className="border-t border-neutral-100">
                    <td className="px-6 py-4 font-semibold text-[#1A1A1A]">{r.label}</td>
                    <td className="px-6 py-4 text-neutral-600">{r.web}</td>
                    <td className="px-6 py-4 font-bold text-[#16A34A]">
                      <span className="inline-flex items-center gap-1">
                        <Check className="h-4 w-4" />
                        {r.app}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="bg-[#1A1A1A] py-16 text-center text-white">
        <h3 className="text-2xl font-extrabold">WhatsApp ग्रुप जॉइन करें</h3>
        <p className="mt-2 text-sm text-white/70">नए शहरों और जॉब अलर्ट की सूचना।</p>
        <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center gap-2 rounded-2xl bg-[#16A34A] px-8 py-3 text-sm font-bold">
          <MessageCircle className="h-4 w-4" />
          Join on WhatsApp
        </a>
        <div className="mt-10">
          <Link href="/" className="text-sm font-bold text-[#FF9A00] underline">
            ← {t('nav.home')}
          </Link>
        </div>
      </section>
    </>
  )
}
