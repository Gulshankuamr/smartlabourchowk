'use client'

import { motion } from 'framer-motion'
import {
  HiOutlineChartBar,
  HiOutlineClock,
  HiOutlineChatBubbleLeftRight,
  HiOutlineShieldCheck,
  HiOutlineDevicePhoneMobile,
  HiOutlineCloud
} from 'react-icons/hi2'

const benefits = [
  { title: 'Real-time Analytics', desc: 'Instant insights into every aspect of school operations.', icon: HiOutlineChartBar },
  { title: 'Save 10+ Hours Weekly', desc: 'Automate repetitive tasks and focus on what matters.', icon: HiOutlineClock },
  { title: 'Better Communication', desc: 'Keep parents, teachers and staff always connected.', icon: HiOutlineChatBubbleLeftRight },
  { title: 'Enterprise Security', desc: 'Bank-grade security with role-based access control.', icon: HiOutlineShieldCheck },
  { title: 'Mobile Friendly', desc: 'Access everything from any device, anywhere.', icon: HiOutlineDevicePhoneMobile },
  { title: 'Cloud Based', desc: 'No installation needed. Always updated, always available.', icon: HiOutlineCloud },
]

function BenefitsSection() {
  return (
    <section className="section-gap bg-[#F8F9FC]">
      <div className="container-shell">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="section-title text-[#1E4E6D]">
            Why Schools <span className="text-[#F0970A]">Love Us</span>
          </h2>
          <p className="section-subtitle text-slate-500">
            Benefits that transform how your school operates.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((item, i) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="
                  group flex items-start gap-4 rounded-2xl 
                  bg-white/70 backdrop-blur-md 
                  border border-transparent
                  p-6 transition-all duration-300
                  hover:bg-white hover:border-[#F0970A] hover:shadow-lg
                "
              >
                {/* Icon */}
                <div className="
                  flex h-12 w-12 shrink-0 items-center justify-center 
                  rounded-xl bg-[#1E4E6D]/10 text-[#1E4E6D]
                  transition-all duration-300
                  group-hover:bg-[#F0970A]/10 group-hover:text-[#F0970A]
                ">
                  <Icon size={24} />
                </div>

                {/* Text */}
                <div>
                  <h3 className="font-semibold text-[#1E4E6D] group-hover:text-[#F0970A] transition">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm text-slate-500 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  )
}

export default BenefitsSection