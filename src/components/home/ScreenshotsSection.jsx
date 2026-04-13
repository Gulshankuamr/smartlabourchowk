'use client'

import { motion } from 'framer-motion'

const shots = [
  { title: 'Dashboard UI', image: '/assets/images/dashboard-preview.webp' },
  { title: 'Fee Management', image: '/assets/images/fee-preview.webp' },
  { title: 'Attendance View', image: '/assets/images/attendance-preview.webp' },
]

function ScreenshotsSection() {
  return (
    <section className="section-gap bg-cream/30">
      <div className="container-shell">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="section-title">See It in <span className="gradient-text-accent">Action</span></h2>
          <p className="section-subtitle">Clean, intuitive interfaces designed for every user.</p>
        </motion.div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {shots.map((shot, i) => (
            <motion.figure
              key={shot.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="glass-card overflow-hidden"
            >
              <div className="aspect-video bg-shell flex items-center justify-center">
                <img src={shot.image} alt={shot.title} className="h-full w-full object-cover" loading="lazy" />
              </div>
              <figcaption className="p-4 text-center text-sm font-medium text-slateSoft">{shot.title}</figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ScreenshotsSection
