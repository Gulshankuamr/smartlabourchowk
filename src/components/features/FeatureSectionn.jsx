'use client'

import { useEffect } from 'react'
import { motion } from 'framer-motion'
import Card from '../shared/Card'
import { HiOutlineBell, HiOutlineBookOpen, HiOutlineCreditCard, HiOutlineUserGroup, HiOutlineClipboardDocumentList, HiOutlineAcademicCap, HiOutlineTruck, HiOutlineChartBar, HiOutlineCog6Tooth, HiOutlineGlobeAlt, HiOutlineDocumentText, HiOutlineShieldCheck } from 'react-icons/hi2'



const features = [
  { title: 'Attendance System', desc: 'Biometric and app-based attendance for students and staff with real-time tracking and automated reports.', icon: HiOutlineClipboardDocumentList },
  { title: 'Fee Management', desc: 'Complete fee lifecycle management with online payments, auto receipts, due reminders and financial dashboards.', icon: HiOutlineCreditCard },
  { title: 'Exam Management', desc: 'Create exams, manage marks, auto-generate report cards and analyze performance trends across classes.', icon: HiOutlineBookOpen },
  { title: 'Student Management', desc: 'Digital student profiles with enrollment history, academic records, promotion tracking and document vault.', icon: HiOutlineUserGroup },
  { title: 'Communication Hub', desc: 'Instant notifications, SMS, email alerts and parent messaging with delivery tracking from one unified platform.', icon: HiOutlineBell },
  { title: 'Transport System', desc: 'GPS-enabled route planning, vehicle tracking, driver management and transport fee integration.', icon: HiOutlineTruck },
  { title: 'Academic Reports', desc: 'Comprehensive analytics with performance trends, progress tracking and actionable insights for educators.', icon: HiOutlineChartBar },
  { title: 'Staff Management', desc: 'Staff records, attendance tracking, payroll processing, leave management and performance reviews.', icon: HiOutlineAcademicCap },
  { title: 'Settings and Config', desc: 'Customizable workflows, role access control, branding options and system configuration tools.', icon: HiOutlineCog6Tooth },
  { title: 'Online Portal', desc: 'Self-service portal for students and parents to access results, attendance, fees and announcements.', icon: HiOutlineGlobeAlt },
  { title: 'Document Management', desc: 'Digital document storage, certificate generation, bulk printing and template management system.', icon: HiOutlineDocumentText },
  { title: 'Security and Access', desc: 'Role-based access control, data encryption, audit logs and compliance-ready security features.', icon: HiOutlineShieldCheck },
]

function Features() {
  useEffect(() => {
    document.title = 'Features | ConnectSkool'
  }, [])

  return (
    <section className="section-gap">
   
      <div className="container-shell">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-14">
          <h1 className="font-display text-4xl font-extrabold text-ink sm:text-5xl">All <span className="gradient-text-accent">Features</span></h1>
          <p className="section-subtitle">Everything you need to manage your school efficiently.</p>
        </motion.div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feat, i) => {
            const Icon = feat.icon
            return (
              <motion.div key={feat.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.04 }}>
                <Card className="h-full">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-accent-light text-accent"><Icon size={24} /></div>
                  <h3 className="text-lg font-semibold text-ink">{feat.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slateSoft">{feat.desc}</p>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Features
