'use client'

import Link from 'next/link'
import { Hammer, MapPin, Star } from 'lucide-react'

const workers = [
  { name: 'Raj Mistri', skill: 'Civil Mason', area: 'Noida Sector 62', rating: '4.9' },
  { name: 'Javed', skill: 'Electrician', area: 'Ghaziabad Vaishali', rating: '4.7' },
  { name: 'Mahesh', skill: 'Plumber', area: 'Delhi Laxmi Nagar', rating: '4.8' },
]

export default function WorkersPreviewSection() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#FF6B00]">Workers</p>
            <h2 className="mt-2 font-display text-3xl font-extrabold text-[#1A1A1A] sm:text-4xl">Nearby verified workers ready to join.</h2>
          </div>
          <Link href="/workers" className="text-sm font-bold text-[#FF6B00]">View all workers</Link>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {workers.map((w) => (
            <article key={w.name} className="rounded-3xl border border-neutral-100 bg-[#FFF7F2] p-5 shadow-sm">
              <div className="flex items-center justify-between">
                <p className="text-lg font-extrabold text-[#1A1A1A]">{w.name}</p>
                <span className="inline-flex items-center gap-1 rounded-full bg-white px-2 py-1 text-xs font-bold text-[#1A1A1A]"><Star className="h-3.5 w-3.5 text-[#FF9A00]" />{w.rating}</span>
              </div>
              <p className="mt-2 inline-flex items-center gap-2 text-sm font-semibold text-neutral-700"><Hammer className="h-4 w-4 text-[#FF6B00]" />{w.skill}</p>
              <p className="mt-2 inline-flex items-center gap-2 text-xs text-neutral-600"><MapPin className="h-3.5 w-3.5" />{w.area}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
