'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Building2, MapPin, MessageCircle, ShieldCheck } from 'lucide-react'

const counters = [
  { label: 'Active Workers', value: '500+' },
  { label: 'Hiring Contractors', value: '50+' },
  { label: 'Cities & Nearby Zones', value: '10+' },
  { label: 'Trust Rating', value: '4.8/5' },
]

export default function SmartLabourSection() {
  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-20">
      <div className="pointer-events-none absolute -left-24 top-8 h-56 w-56 rounded-full bg-[#FF6B00]/15 blur-3xl" />
      <div className="pointer-events-none absolute right-0 top-24 h-72 w-72 rounded-full bg-[#FF9A00]/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#FF6B00]">Smart Labour Chowk</p>
            <h2 className="mt-3 font-display text-3xl font-extrabold leading-tight text-[#1A1A1A] sm:text-4xl">
              India ka labour market, ab digital aur trusted.
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-neutral-700">
              Smart Labour Chowk is a Hindi-first hiring ecosystem where workers and contractors connect nearby, verify trust through ratings, and close jobs faster via WhatsApp and app-first workflows.
            </p>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-neutral-600">
              Yeh platform isliye bana kyunki roz ka kaam, roz ka wait, aur fake leads ne India ke labour market ko slow kiya hai. Ab identity, location, aur hiring ek jagah par.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <Link href="/workers" className="rounded-2xl bg-[#1A1A1A] px-5 py-3 text-sm font-bold text-white">
                Explore Worker Jobs
              </Link>
              <Link href="/contractors" className="rounded-2xl bg-gradient-to-r from-[#FF6B00] to-[#FF9A00] px-5 py-3 text-sm font-bold text-white">
                Hire Nearby Workers
              </Link>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { icon: Building2, title: 'Worker Identity', text: 'Skill cards, trust badges, and local availability.' },
              { icon: MapPin, title: 'Nearby Hiring', text: 'Distance-first discovery for faster site joining.' },
              { icon: MessageCircle, title: 'WhatsApp Flow', text: 'One tap chat to reduce hiring friction.' },
              { icon: ShieldCheck, title: 'Trust Layer', text: 'Ratings and repeat hiring confidence.' },
            ].map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="rounded-3xl border border-neutral-100 bg-[#FFF7F2] p-5 shadow-sm"
              >
                <card.icon className="h-6 w-6 text-[#FF6B00]" />
                <p className="mt-3 text-sm font-extrabold text-[#1A1A1A]">{card.title}</p>
                <p className="mt-1 text-xs text-neutral-600">{card.text}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {counters.map((item) => (
            <div key={item.label} className="rounded-2xl border border-neutral-100 bg-white px-5 py-4 shadow-sm">
              <p className="text-2xl font-black text-[#FF6B00]">{item.value}</p>
              <p className="mt-1 text-xs font-semibold text-neutral-600">{item.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 flex items-center gap-2 text-sm font-bold text-[#FF6B00]">
          <span>Digital labour revolution is already live.</span>
          <ArrowRight className="h-4 w-4" />
        </div>
      </div>
    </section>
  )
}
