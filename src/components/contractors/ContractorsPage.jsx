'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Users, MapPin, ShieldCheck, LayoutDashboard, Download } from 'lucide-react'
import { useLocale } from '../../contexts/LocaleContext'
import { useDownloadPrompt } from '../../contexts/DownloadPromptContext'
import { PLAY_STORE_URL } from '../../constants/app'

const plans = [
  { name: 'Starter', price: 'Free', desc: 'Small sites, up to 10 hires / month' },
  { name: 'Pro', price: '₹999/mo', desc: 'Bulk hiring, job alerts, priority support' },
  { name: 'Enterprise', price: 'Talk to us', desc: 'Multi-site dashboards, dedicated RM' },
]

const faqs = [
  { q: 'Bulk hiring कैसे करें?', a: 'ऐप में मल्टी-स्लॉट जॉब पोस्ट करें और वेरिफाइड वर्कर को शॉर्टलिस्ट करें।' },
  { q: 'वेरिफिकेशन क्या है?', a: 'आधार/ID चेक (जल्द) + रेटिंग हिस्ट्री।' },
]

export default function ContractorsPage() {
  const { t } = useLocale()
  const { openPrompt } = useDownloadPrompt()

  return (
    <>
      <section className="relative overflow-hidden bg-[#1A1A1A] pt-24 pb-16 text-white">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(255,107,0,0.35),transparent_45%)]" />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#FF9A00]">{t('nav.contractors')}</p>
            <h1 className="mt-3 font-display text-4xl font-extrabold leading-tight sm:text-5xl">तेज़ हायरिंग। वेरिफाइड वर्कर। WhatsApp पर कंट्रोल।</h1>
            <p className="mt-5 max-w-xl text-lg text-white/75">लोकेशन सर्च, रेटिंग, डैशबोड झलक — पूरा पावर ऐप में।</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <button type="button" onClick={openPrompt} className="rounded-2xl bg-gradient-to-r from-[#FF6B00] to-[#FF9A00] px-6 py-3.5 text-sm font-bold shadow-lg">
                <span className="inline-flex items-center gap-2">
                  <Download className="h-4 w-4" />
                  {t('common.downloadApp')}
                </span>
              </button>
              <Link href="/features" className="rounded-2xl border border-white/30 px-6 py-3.5 text-sm font-bold text-white">
                {t('nav.features')}
              </Link>
            </div>
          </div>
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="relative overflow-hidden rounded-[2rem] border border-white/10 shadow-2xl">
            <Image src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=900&q=80" alt="Construction site" width={900} height={700} className="h-full w-full object-cover opacity-90" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 rounded-2xl bg-white/10 p-4 backdrop-blur-md">
              <p className="text-sm font-semibold">Dashboard preview — ऐप में पूरा व्यू</p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:grid-cols-2 lg:grid-cols-4 sm:px-6 lg:px-8">
          {[
            { icon: Users, title: 'Bulk hiring', body: 'एक साथ कई स्लॉट भरें' },
            { icon: ShieldCheck, title: 'Verified workers', body: 'रेटिंग + बैज' },
            { icon: MapPin, title: 'Location search', body: 'आस-पास पहले' },
            { icon: LayoutDashboard, title: 'Management', body: 'साइट ट्रैकिंग' },
          ].map((x) => (
            <div key={x.title} className="rounded-3xl border border-neutral-100 bg-[#FFF7F2] p-6">
              <x.icon className="h-8 w-8 text-[#FF6B00]" />
              <p className="mt-3 text-lg font-bold text-[#1A1A1A]">{x.title}</p>
              <p className="mt-2 text-sm text-neutral-600">{x.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#FFF7F2] py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-extrabold text-[#1A1A1A]">Pricing plans</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {plans.map((p) => (
              <div key={p.name} className="flex flex-col rounded-3xl border border-white bg-white p-8 shadow-sm">
                <p className="text-sm font-bold text-[#FF6B00]">{p.name}</p>
                <p className="mt-2 text-3xl font-black text-[#1A1A1A]">{p.price}</p>
                <p className="mt-3 flex-1 text-sm text-neutral-600">{p.desc}</p>
                <button type="button" onClick={openPrompt} className="mt-6 rounded-2xl bg-[#1A1A1A] py-3 text-sm font-bold text-white">
                  ऐप से शुरू करें
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center font-display text-3xl font-extrabold">Contractor FAQ</h2>
          <div className="mt-8 space-y-4">
            {faqs.map((f) => (
              <div key={f.q} className="rounded-3xl border border-neutral-100 bg-[#FFF7F2] p-6">
                <p className="font-bold">{f.q}</p>
                <p className="mt-2 text-sm text-neutral-600">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-[#FF6B00] to-[#FF9A00] py-14 text-center text-white">
        <h3 className="text-2xl font-extrabold">Install app to hire & chat</h3>
        <a href={PLAY_STORE_URL} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex rounded-2xl bg-white px-8 py-3 text-sm font-bold text-[#FF6B00]">
          Play Store
        </a>
      </section>
    </>
  )
}
