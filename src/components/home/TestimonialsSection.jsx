'use client'

import { Quote } from 'lucide-react'

const testimonials = [
  { text: 'Pehle 3 ghante chowk par wait karta tha. Ab app se subah hi kaam mil jata hai.', author: 'Sonu, Raj Mistri' },
  { text: 'Nearby filter aur WhatsApp connect ne hiring time half kar diya.', author: 'Ankit, Contractor' },
  { text: 'Verified profiles hone se trust bana rehta hai.', author: 'Ravi, Site Supervisor' },
]

export default function TestimonialsSection() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center font-display text-3xl font-extrabold text-[#1A1A1A] sm:text-4xl">Real voices from India&apos;s labour network.</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {testimonials.map((t) => (
            <article key={t.author} className="rounded-3xl bg-[#1A1A1A] p-6 text-white shadow-xl">
              <Quote className="h-5 w-5 text-[#FF9A00]" />
              <p className="mt-4 text-sm leading-relaxed text-white/85">{t.text}</p>
              <p className="mt-4 text-xs font-bold text-[#FF9A00]">{t.author}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
