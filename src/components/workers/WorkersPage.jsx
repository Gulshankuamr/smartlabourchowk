'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Download, MessageCircle, Star, MapPin } from 'lucide-react'
import { useLocale } from '../../contexts/LocaleContext'
import { useDownloadPrompt } from '../../contexts/DownloadPromptContext'
import { PLAY_STORE_URL } from '../../constants/app'
import VideoSliderSection from '../home/VideoSliderSection'

const faqs = [
  { q: 'क्या ऐप फ्री है?', a: 'हां, प्रोफाइल बनाना और जॉब देखना फ्री है। कुछ प्रीमियम फीचर बाद में जोड़े जा सकते हैं।' },
  { q: 'पेमेंट कैसे होता है?', a: 'शुरुआत में सीधे वर्कर से बात करें। ऐप में जल्द ही सुरक्षित ट्रैकिंग आएगी।' },
  { q: 'अगर काम झगड़ा हो जाए?', a: 'चैट और कॉल का रिकॉर्ड रखें। सपोर्ट टीम को रिपोर्ट करें।' },
]

export default function WorkersPage() {
  const { t } = useLocale()
  const { openPrompt } = useDownloadPrompt()

  return (
    <>
      <section className="relative overflow-hidden bg-[#FFF7F2] pt-24 pb-16">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,107,0,0.15),transparent_40%)]" />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#FF6B00]">{t('nav.workers')}</p>
            <h1 className="mt-3 font-display text-4xl font-extrabold leading-tight text-[#1A1A1A] sm:text-5xl">
              मजदूर भाई — अब चौक की धूप में कम, फोन में ज्यादा काम।
            </h1>
            <p className="mt-5 max-w-xl text-lg text-neutral-600">
              आस-पास की नौकरी, रेटिंग से भरोसा, WhatsApp से तुरंत बात — सब Smart Labour Chowk ऐप में।
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={openPrompt}
                className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-[#FF6B00] to-[#FF9A00] px-6 py-3.5 text-sm font-bold text-white shadow-lg"
              >
                <Download className="h-4 w-4" />
                {t('common.downloadApp')}
              </button>
              <Link href="/how-it-works" className="rounded-2xl border-2 border-[#FF6B00]/30 bg-white px-6 py-3.5 text-sm font-bold text-[#FF6B00]">
                {t('nav.howItWorks')}
              </Link>
            </div>
            <div className="mt-10 grid grid-cols-2 gap-3 sm:flex sm:flex-wrap">
              {[t('hero.trust1'), t('hero.trust4')].map((x) => (
                <div key={x} className="rounded-2xl bg-white px-4 py-3 text-xs font-bold shadow-sm ring-1 ring-black/5 sm:text-sm">
                  {x}
                </div>
              ))}
            </div>
          </div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="relative overflow-hidden rounded-[2rem] border border-white/70 shadow-2xl">
            <Image
              src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=900&q=80"
              alt="Workers India"
              width={900}
              height={700}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/75 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 rounded-2xl bg-white/95 p-4 text-sm font-semibold text-[#1A1A1A] shadow-lg backdrop-blur">
              <p className="flex items-center gap-2 text-[#FF6B00]">
                <MapPin className="h-4 w-4" /> Sector 18 — 3 नई जॉब
              </p>
              <p className="mt-1 text-xs text-neutral-600">ऐप में नंबर देखने और अप्लाई के लिए लॉगिन करें।</p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-extrabold text-[#1A1A1A]">मजदूर को काम कैसे मिलता है?</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {['प्रोफाइल बनाओ', 'लोकेशन ऑन रखो', 'जॉब अलर्ट पाओ'].map((step, i) => (
              <div key={step} className="rounded-3xl border border-neutral-100 bg-[#FFF7F2] p-6">
                <span className="text-sm font-black text-[#FF6B00]">0{i + 1}</span>
                <p className="mt-2 text-lg font-bold text-[#1A1A1A]">{step}</p>
                <p className="mt-2 text-sm text-neutral-600">ऐप में पूरा फ्लो — वेब पर सिर्फ ओवरव्यू।</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#1A1A1A] py-16 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-extrabold">डेली कमाई — उदाहरण</h2>
          <p className="mt-2 text-white/70">नमूना नंबर, असली रेट शहर और काम पर निर्भर।</p>
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {[
              { role: 'Helper', amt: '₹600–800 / day' },
              { role: 'Mason', amt: '₹900–1200 / day' },
              { role: 'Electrician', amt: '₹800–1500 / visit' },
            ].map((r) => (
              <div key={r.role} className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <p className="text-lg font-bold text-[#FF9A00]">{r.role}</p>
                <p className="mt-2 text-2xl font-black">{r.amt}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-extrabold text-[#1A1A1A]">आस-पास की जॉब</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {['Noida — Plumber helper', 'Delhi — Site loader', 'Ghaziabad — Painter'].map((j) => (
              <div key={j} className="flex items-center justify-between rounded-3xl border border-neutral-100 bg-[#FFF7F2] p-5">
                <div>
                  <p className="font-bold text-[#1A1A1A]">{j}</p>
                  <p className="mt-1 flex items-center gap-1 text-sm text-amber-600">
                    <Star className="h-4 w-4 fill-amber-400 text-amber-400" /> 4.7
                  </p>
                </div>
                <button type="button" onClick={openPrompt} className="rounded-2xl bg-[#1A1A1A] px-4 py-2 text-xs font-bold text-white">
                  Apply
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <VideoSliderSection />

      <section className="bg-[#FFF7F2] py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center font-display text-3xl font-extrabold text-[#1A1A1A]">Workers — FAQ</h2>
          <div className="mt-8 space-y-4">
            {faqs.map((f) => (
              <div key={f.q} className="rounded-3xl border border-white bg-white p-6 shadow-sm">
                <p className="font-bold text-[#1A1A1A]">{f.q}</p>
                <p className="mt-2 text-sm text-neutral-600">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-[#FF6B00] to-[#FF9A00] py-16 text-center text-white">
        <h2 className="font-display text-3xl font-extrabold">आज ही ऐप डाउनलोड करें</h2>
        <p className="mx-auto mt-3 max-w-xl text-sm text-white/90">नंबर, चैट, अप्लाई — सब ऐप में लॉक है।</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a href={PLAY_STORE_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-2xl bg-white px-8 py-3 text-sm font-bold text-[#FF6B00]">
            <Download className="h-4 w-4" />
            Play Store
          </a>
          <button type="button" onClick={openPrompt} className="rounded-2xl border-2 border-white px-8 py-3 text-sm font-bold">
            <span className="inline-flex items-center gap-2">
              <MessageCircle className="h-4 w-4" />
              {t('common.openInApp')}
            </span>
          </button>
        </div>
      </section>
    </>
  )
}
