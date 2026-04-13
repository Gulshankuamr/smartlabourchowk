'use client'

import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'
import Button from '../shared/Button'
import { HiOutlineCalendar, HiOutlinePhone } from 'react-icons/hi2'

function CTASection() {
  const router = useRouter()

  return (
    <section id="cta" className="section-gap">
      <div className="container-shell">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-4xl bg-gradient-cta p-10 text-center md:p-16"
        >
          <div className="relative z-10">
            <h2 className="font-display text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
              Ready to Transform Your School?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-white/90">
              Join 500+ schools already using ConnectSkool. Get started with a free demo today.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Button
                variant="primary"
                size="lg"
                className="bg-white text-amber-700 shadow-xl hover:bg-white/90"
                onClick={() => router.push('/demo')}
              >
                <HiOutlineCalendar size={20} />
                Book Free Demo
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white/40 text-white hover:bg-white/10 hover:border-white"
              >
                <HiOutlinePhone size={20} />
                Call Us
              </Button>
            </div>
          </div>

          {/* Background decorative circles */}
          <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-white/10" />
          <div className="absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-white/10" />
        </motion.div>
      </div>
    </section>
  )
}

export default CTASection
