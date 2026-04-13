'use client'

import { motion } from 'framer-motion'

const stats = [
  { value: '500+', label: 'Schools Trust Us' },
  { value: '50K+', label: 'Active Students' },
  { value: '1M+', label: 'Attendance Records' },
  { value: '99.9%', label: 'System Uptime' },
]

function TrustedSection() {
  return (
    <section className="pb-8 md:pb-14">
      <div className="container-shell">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="glass-card py-8 px-6"
        >
          <p className="mb-6 text-center text-sm font-semibold uppercase tracking-wider text-slateSoft">
            Trusted by Schools Across India
          </p>
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {stats.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="text-center"
              >
                <p className="text-3xl font-extrabold text-brand">{item.value}</p>
                <p className="mt-1 text-sm text-slateSoft">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default TrustedSection
