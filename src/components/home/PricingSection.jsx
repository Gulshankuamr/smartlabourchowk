'use client'

import { motion } from 'framer-motion'
import Button from '../shared/Button'
import { HiOutlineCheck } from 'react-icons/hi2'

const plans = [
  {
    name: 'Basic',
    price: '999',
    period: '/month',
    desc: 'For small schools getting started',
    features: ['Up to 200 students', 'Attendance module', 'Fee management', 'SMS notifications', 'Email support'],
    popular: false,
  },
  {
    name: 'Professional',
    price: '2,499',
    period: '/month',
    desc: 'For growing schools',
    features: ['Up to 1000 students', 'All Basic features', 'Exam management', 'Transport module', 'HR and payroll', 'Priority support'],
    popular: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    desc: 'For large institutions',
    features: ['Unlimited students', 'All Pro features', 'Custom modules', 'API access', 'Dedicated manager', 'On-site training'],
    popular: false,
  },
]

function PricingSection() {
  return (
    <section id="pricing" className="section-gap">
      <div className="container-shell">
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
          <h2 className="section-title">Simple, Transparent <span className="gradient-text-accent">Pricing</span></h2>
          <p className="section-subtitle">No hidden fees. Choose the plan that fits your school.</p>
        </motion.div>
        <div className="grid gap-6 md:grid-cols-3">
          {plans.map((plan, i) => (
            <motion.div key={plan.name} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.1 }} className={`glass-card relative overflow-hidden p-8 ${plan.popular ? 'border-2 border-accent shadow-lift-accent' : ''}`}>
              {plan.popular && <div className="absolute right-0 top-0 rounded-bl-2xl bg-gradient-accent px-4 py-1.5 text-xs font-bold text-white">Most Popular</div>}
              <h3 className="text-xl font-bold text-ink">{plan.name}</h3>
              <p className="mt-1 text-sm text-slateSoft">{plan.desc}</p>
              <div className="mt-6 flex items-baseline gap-1">
                {plan.price !== 'Custom' && <span className="text-sm text-slateSoft">INR</span>}
                <span className="text-4xl font-extrabold text-ink">{plan.price}</span>
                <span className="text-sm text-slateSoft">{plan.period}</span>
              </div>
              <ul className="mt-6 space-y-3">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-slateSoft">
                    <HiOutlineCheck size={16} className="shrink-0 text-success" />
                    {f}
                  </li>
                ))}
              </ul>
              <Button variant={plan.popular ? 'accent' : 'outline'} size="md" className="mt-8 w-full">
                {plan.price === 'Custom' ? 'Contact Sales' : 'Get Started'}
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PricingSection
