'use client'

import { motion } from 'framer-motion'

const videos = [
  { src: 'https://assets.mixkit.co/videos/preview/mixkit-road-construction-with-heavy-machinery-4032-large.mp4', title: 'Site Readiness' },
  { src: 'https://assets.mixkit.co/videos/preview/mixkit-construction-workers-discussing-plans-4031-large.mp4', title: 'Contractor Story' },
  { src: 'https://assets.mixkit.co/videos/preview/mixkit-crane-lifting-beam-in-construction-site-3981-large.mp4', title: 'Hiring Momentum' },
  { src: 'https://assets.mixkit.co/videos/preview/mixkit-workers-on-scaffolding-at-a-construction-site-26148-large.mp4', title: 'Worker Journey' },
]

function VideoCard({ item }) {
  return (
    <article className="group relative w-[300px] shrink-0 overflow-hidden rounded-3xl border border-white/20 bg-white/10 shadow-xl backdrop-blur-md sm:w-[360px]">
      <video src={item.src} className="h-[210px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[240px]" autoPlay muted loop playsInline preload="none" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
      <p className="absolute bottom-3 left-3 rounded-xl bg-white/15 px-3 py-1 text-xs font-bold text-white backdrop-blur">{item.title}</p>
    </article>
  )
}

export default function VideoSliderSection() {
  const track = [...videos, ...videos]

  return (
    <section className="overflow-hidden bg-[#1A1A1A] py-16 text-white sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#FF9A00]">Field Stories</p>
          <h2 className="mt-2 font-display text-3xl font-extrabold sm:text-4xl">Real labour market videos, one continuous slider.</h2>
        </motion.div>

        <div className="mt-8 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <div className="slider-track flex w-max gap-5">
            {track.map((item, idx) => (
              <VideoCard key={`${item.title}-${idx}`} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
