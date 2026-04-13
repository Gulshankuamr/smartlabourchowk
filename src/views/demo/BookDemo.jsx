'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Button from '../../components/shared/Button'
import { HiOutlineUser, HiOutlineBuildingOffice, HiOutlinePhone, HiOutlineEnvelope, HiOutlineCalendar } from 'react-icons/hi2'

const roles = [
  { value: 'admin', label: 'Admin' },
  { value: 'teacher', label: 'Teacher' },
  { value: 'student', label: 'Student' },
  { value: 'accountant', label: 'Accountant' },
]

function BookDemo() {
  const [form, setForm] = useState({ name: '', school: '', phone: '', email: '', role: 'admin' })
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    document.title = 'Book a Demo | ConnectSkool'
  }, [])

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <section className="section-gap">
        <div className="container-shell flex items-center justify-center">
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="glass-card max-w-lg p-10 text-center">
            <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-success/10">
              <HiOutlineCalendar size={36} className="text-success" />
            </div>
            <h2 className="text-2xl font-bold text-ink">Demo Request Received!</h2>
            <p className="mt-3 text-slateSoft">Our team will contact you within 24 hours to schedule your personalized demo.</p>
          </motion.div>
        </div>
      </section>
    )
  }

  return (
    <section className="section-gap">
      <div className="container-shell">
        <div className="grid items-start gap-12 lg:grid-cols-2">
          {/* Left info */}
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="font-display text-4xl font-extrabold text-ink sm:text-5xl">
              Book a <span className="gradient-text-accent">Free Demo</span>
            </h1>
            <p className="mt-4 max-w-md text-lg text-slateSoft leading-relaxed">
              See how ConnectSkool can transform your school management. Our team will walk you through every feature.
            </p>
            <div className="mt-8 space-y-4">
              {[
                'Personalized walkthrough of all modules',
                'See your school data in action',
                'Get pricing tailored to your needs',
                'No commitment required',
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 text-sm text-slateSoft">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-success/10 text-success text-xs font-bold">&#10003;</span>
                  {item}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Form */}
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.1 }}>
            <form onSubmit={handleSubmit} className="glass-card p-8 sm:p-10">
              <h2 className="mb-6 text-xl font-bold text-ink">Fill in your details</h2>

              <div className="space-y-5">
                {/* Name */}
                <div>
                  <label htmlFor="demo-name" className="mb-1.5 block text-sm font-medium text-ink">Full Name</label>
                  <div className="relative">
                    <HiOutlineUser className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slateSoft" size={18} />
                    <input id="demo-name" name="name" type="text" required value={form.name} onChange={handleChange} placeholder="Your full name" className="w-full rounded-xl border border-slate-200 bg-white py-3 pl-11 pr-4 text-sm text-ink outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/20" />
                  </div>
                </div>

                {/* School */}
                <div>
                  <label htmlFor="demo-school" className="mb-1.5 block text-sm font-medium text-ink">School Name</label>
                  <div className="relative">
                    <HiOutlineBuildingOffice className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slateSoft" size={18} />
                    <input id="demo-school" name="school" type="text" required value={form.school} onChange={handleChange} placeholder="Your school name" className="w-full rounded-xl border border-slate-200 bg-white py-3 pl-11 pr-4 text-sm text-ink outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/20" />
                  </div>
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="demo-phone" className="mb-1.5 block text-sm font-medium text-ink">Phone Number</label>
                  <div className="relative">
                    <HiOutlinePhone className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slateSoft" size={18} />
                    <input id="demo-phone" name="phone" type="tel" required value={form.phone} onChange={handleChange} placeholder="+91 XXXXX XXXXX" className="w-full rounded-xl border border-slate-200 bg-white py-3 pl-11 pr-4 text-sm text-ink outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/20" />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="demo-email" className="mb-1.5 block text-sm font-medium text-ink">Email Address</label>
                  <div className="relative">
                    <HiOutlineEnvelope className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slateSoft" size={18} />
                    <input id="demo-email" name="email" type="email" required value={form.email} onChange={handleChange} placeholder="your@email.com" className="w-full rounded-xl border border-slate-200 bg-white py-3 pl-11 pr-4 text-sm text-ink outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/20" />
                  </div>
                </div>

                {/* Role */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-ink">Select Your Role</label>
                  <div className="grid grid-cols-2 gap-3">
                    {roles.map((r) => (
                      <label key={r.value} className={`flex cursor-pointer items-center justify-center gap-2 rounded-xl border-2 px-4 py-3 text-sm font-medium transition-all ${form.role === r.value ? 'border-brand bg-brand/5 text-brand' : 'border-slate-200 text-slateSoft hover:border-slate-300'}`}>
                        <input type="radio" name="role" value={r.value} checked={form.role === r.value} onChange={handleChange} className="sr-only" />
                        {r.label}
                      </label>
                    ))}
                  </div>
                </div>
              </div>

              <Button variant="accent" size="lg" className="mt-8 w-full" type="submit">
                <HiOutlineCalendar size={20} />
                Submit Demo Request
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default BookDemo
