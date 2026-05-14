'use client'

import Link from 'next/link'
import { Building2, CheckCircle2 } from 'lucide-react'

const contractors = [
  { name: 'Sharma Constructions', hires: '32 workers hired this month' },
  { name: 'Noida Infra Team', hires: '18 workers hired this month' },
  { name: 'Delhi Renovators', hires: '26 workers hired this month' },
]

export default function ContractorsPreviewSection() {
  return (
    <section className="bg-[#FFF7F2] py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#FF6B00]">Contractors</p>
            <h2 className="mt-2 font-display text-3xl font-extrabold text-[#1A1A1A] sm:text-4xl">Bulk hiring, trust scores, and faster callbacks.</h2>
          </div>
          <Link href="/contractors" className="text-sm font-bold text-[#FF6B00]">Explore contractor tools</Link>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {contractors.map((c) => (
            <article key={c.name} className="rounded-3xl bg-white p-5 shadow-sm ring-1 ring-black/5">
              <p className="inline-flex items-center gap-2 text-sm font-bold text-[#1A1A1A]"><Building2 className="h-4 w-4 text-[#FF6B00]" />{c.name}</p>
              <p className="mt-3 inline-flex items-center gap-2 text-xs text-neutral-600"><CheckCircle2 className="h-4 w-4 text-green-600" />{c.hires}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
