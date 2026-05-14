'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { UserPlus, Search, Handshake, Banknote, Star, Shield, ClipboardList } from 'lucide-react'
import { useLocale } from '../../contexts/LocaleContext'

const steps = [
  { icon: UserPlus, title: 'Signup', body: 'मोबाइल नंबर से तेज़ साइनअप' },
  { icon: ClipboardList, title: 'Profile', body: 'स्किल, टूल्स, रेट' },
  { icon: Search, title: 'Search', body: 'आस-पास जॉब / वर्कर' },
  { icon: Handshake, title: 'Hiring', body: 'WhatsApp कनेक्ट' },
  { icon: Banknote, title: 'Payment', body: 'अभी ऑफलाइन, जल्द इन-ऐप' },
  { icon: Star, title: 'Ratings', body: 'हर जॉब के बाद' },
  { icon: Shield, title: 'Verification', body: 'वेरिफाइड बैज' },
]

export default function HowItWorksPage() {
  const { t } = useLocale()

  return (
    <>
      <section className="bg-[#FFF7F2] pt-24 pb-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="font-display text-4xl font-extrabold text-[#1A1A1A] sm:text-5xl">{t('nav.howItWorks')}</h1>
          <p className="mt-4 max-w-2xl text-lg text-neutral-600">कहानी की तरह समझें — बाएं से दाएं, ऊपर से नीचे।</p>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="absolute left-8 top-0 hidden h-full w-0.5 bg-gradient-to-b from-[#FF6B00] to-[#FF9A00] md:block" />
          <div className="space-y-10 md:pl-20">
            {steps.map((s, i) => (
              <motion.div
                key={s.title + i}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative rounded-3xl border border-neutral-100 bg-[#FFF7F2] p-6 md:pl-8"
              >
                <span className="absolute -left-1 top-6 hidden h-4 w-4 rounded-full bg-[#FF6B00] ring-4 ring-white md:block" />
                <div className="flex items-start gap-4">
                  <s.icon className="h-8 w-8 text-[#FF6B00]" />
                  <div>
                    <p className="text-xs font-bold text-[#FF6B00]">Step {i + 1}</p>
                    <h2 className="text-xl font-extrabold text-[#1A1A1A]">{s.title}</h2>
                    <p className="mt-2 text-sm text-neutral-600">{s.body}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-[#FF6B00] to-[#FF9A00] py-14 text-center">
        <Link href="/download-app" className="rounded-2xl bg-white px-8 py-3 text-sm font-bold text-[#FF6B00] shadow-lg">
          {t('common.downloadApp')}
        </Link>
      </section>
    </>
  )
}
