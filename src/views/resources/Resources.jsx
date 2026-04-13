'use client'

import { useEffect } from 'react'
import { motion } from 'framer-motion'
import Card from '../../components/shared/Card'
import { HiOutlineDocumentText, HiOutlineVideoCamera, HiOutlineAcademicCap, HiOutlineQuestionMarkCircle, HiOutlineNewspaper, HiOutlineArrowDownTray } from 'react-icons/hi2'

const resources = [
  { title: 'Getting Started Guide', desc: 'Step-by-step guide to set up ConnectSkool for your school in under 30 minutes.', icon: HiOutlineDocumentText, tag: 'Guide' },
  { title: 'Video Tutorials', desc: 'Watch comprehensive video walkthroughs of every module and feature.', icon: HiOutlineVideoCamera, tag: 'Video' },
  { title: 'Best Practices for Schools', desc: 'Learn how top schools use ConnectSkool to improve operations and results.', icon: HiOutlineAcademicCap, tag: 'Article' },
  { title: 'FAQ and Help Center', desc: 'Find answers to common questions and troubleshooting tips.', icon: HiOutlineQuestionMarkCircle, tag: 'Support' },
  { title: 'School ERP Blog', desc: 'Latest insights on school management, education technology and digital transformation.', icon: HiOutlineNewspaper, tag: 'Blog' },
  { title: 'Downloads and Templates', desc: 'Free downloadable templates for reports, circulars and school documents.', icon: HiOutlineArrowDownTray, tag: 'Download' },
]

function Resources() {
  useEffect(() => {
    document.title = 'Resources | ConnectSkool'
  }, [])

  return (
    <section className="section-gap">
      <div className="container-shell">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-14">
          <h1 className="font-display text-4xl font-extrabold text-ink sm:text-5xl">Resources <span className="gradient-text-brand">Hub</span></h1>
          <p className="section-subtitle">Guides, tutorials and best practices to help you get the most out of ConnectSkool.</p>
        </motion.div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {resources.map((item, i) => {
            const Icon = item.icon
            return (
              <motion.div key={item.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.06 }}>
                <Card className="h-full">
                  <div className="mb-4 flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand/10 text-brand"><Icon size={24} /></div>
                    <span className="rounded-full bg-accent-light px-3 py-1 text-xs font-semibold text-amber-700">{item.tag}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-ink">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slateSoft">{item.desc}</p>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Resources
