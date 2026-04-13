'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  HiOutlineClipboardDocumentList, HiOutlineCreditCard, HiOutlineBookOpen,
  HiOutlineUserGroup, HiOutlineBell, HiOutlineTruck,
  HiOutlineChartBar, HiOutlineAcademicCap, HiOutlineCheckCircle
} from 'react-icons/hi2'

const featuresData = [
  {
    id: 1, label: 'Attendance', icon: HiOutlineClipboardDocumentList,
    image: 'https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?w=700&h=440&fit=crop',
    title: 'Smart Attendance Management',
    desc: 'Streamline attendance with biometric, QR, and app-based tracking. Works offline too.',
    points: ['Biometric & QR code integration', 'Real-time parent notifications', 'Automated monthly reports', 'Leave & absence management']
  },
  {
    id: 2, label: 'Fee Management', icon: HiOutlineCreditCard,
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=700&h=440&fit=crop',
    title: 'Complete Fee Automation',
    desc: 'Simplify fee collection with multiple payment options, auto receipts and overdue alerts.',
    points: ['Online payment gateway', 'Auto SMS/email reminders', 'Digital receipts & invoices', 'Financial reconciliation']
  },
  {
    id: 3, label: 'Exam System', icon: HiOutlineBookOpen,
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=700&h=440&fit=crop',
    title: 'Comprehensive Exam & Report Cards',
    desc: 'Create exams, manage marks, auto-generate report cards and analyze performance trends.',
    points: ['Custom exam & grading schemes', 'Online exam portal with timer', 'Automatic report card generation', 'Performance trend analytics']
  },
  {
    id: 4, label: 'Students', icon: HiOutlineUserGroup,
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=700&h=440&fit=crop',
    title: 'Centralized Student Hub',
    desc: 'Manage all student data from enrollment to graduation in one place.',
    points: ['Complete digital student profiles', 'Enrollment & promotion management', 'Academic history & transcripts', 'Parent & guardian portals']
  },
  {
    id: 5, label: 'Communication', icon: HiOutlineBell,
    image: 'https://images.unsplash.com/photo-1516387938699-a93567ec168e?w=700&h=440&fit=crop',
    title: 'Seamless Communication Hub',
    desc: 'Connect teachers, parents, and students with real-time messaging and alerts.',
    points: ['Bulk SMS & email notifications', 'In-app messaging system', 'Emergency broadcast alerts', 'Event & holiday calendars']
  },
  {
    id: 6, label: 'Transport', icon: HiOutlineTruck,
    image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=700&h=440&fit=crop',
    title: 'Smart Transport Management',
    desc: 'Track vehicles, optimize routes, and manage transport fees efficiently.',
    points: ['Live GPS vehicle tracking', 'Route optimization & planning', 'Parent pickup/drop alerts', 'Transport fee collection']
  },
  {
    id: 7, label: 'Reports', icon: HiOutlineChartBar,
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=700&h=440&fit=crop',
    title: 'Advanced Analytics & Reports',
    desc: 'Turn data into insights with comprehensive academic reporting and dashboards.',
    points: ['Performance dashboards', 'Comparative class analysis', 'Custom report builder', 'Export in multiple formats']
  },
  {
    id: 8, label: 'Staff', icon: HiOutlineAcademicCap,
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=700&h=440&fit=crop',
    title: 'Complete Staff Administration',
    desc: 'Manage staff records, attendance, leaves, payroll and performance reviews.',
    points: ['Staff profiles & documentation', 'Attendance & leave tracking', 'Payroll integration', 'Performance evaluation system']
  },
]

const INTERVAL = 3000

export default function FeaturesSection() {
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)
  const [progress, setProgress] = useState(0)
  const timerRef = useRef(null)
  const progRef = useRef(null)
  const startTimeRef = useRef(null)

  const feat = featuresData[active]
  const Icon = feat.icon

  const startProgress = useCallback(() => {
    setProgress(0)
    startTimeRef.current = Date.now()
    clearInterval(progRef.current)
    progRef.current = setInterval(() => {
      const elapsed = Date.now() - startTimeRef.current
      const pct = Math.min((elapsed / INTERVAL) * 100, 100)
      setProgress(pct)
    }, 50)
  }, [])

  const goTo = useCallback((idx) => {
    setActive(idx)
    startProgress()
    clearInterval(timerRef.current)
    timerRef.current = setInterval(() => {
      setActive(prev => {
        const next = (prev + 1) % featuresData.length
        return next
      })
      startProgress()
    }, INTERVAL)
  }, [startProgress])

  useEffect(() => {
    if (!paused) {
      goTo(active)
    }
    return () => {
      clearInterval(timerRef.current)
      clearInterval(progRef.current)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [paused])

  useEffect(() => {
    goTo(0)
    return () => {
      clearInterval(timerRef.current)
      clearInterval(progRef.current)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleTabClick = (idx) => {
    clearInterval(timerRef.current)
    clearInterval(progRef.current)
    setActive(idx)
    startProgress()
    timerRef.current = setInterval(() => {
      setActive(prev => (prev + 1) % featuresData.length)
      startProgress()
    }, INTERVAL)
  }

  return (
    <section className="bg-gradient-to-b from-[#F8F9FC] to-[#EEF2F7] py-20 px-8">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <motion.div initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#1E4E6D]">
            Everything Your School <span className="text-[#F0970A]">Needs</span>
          </h2>
          <p className="text-[#6B7280] text-lg mt-3 max-w-xl mx-auto">
            Powerful ERP features designed for modern schools, administrators & parents.
          </p>
        </motion.div>

        {/* Top Card */}
        <div
          className="bg-[#1E4E6D] rounded-2xl overflow-hidden mb-5 relative"
          onMouseEnter={() => { setPaused(true); clearInterval(timerRef.current); clearInterval(progRef.current) }}
          onMouseLeave={() => setPaused(false)}
        >
          {/* Progress Bar */}
          <div
            className="absolute bottom-0 left-0 h-[3px] bg-[#F0970A] z-10 transition-all duration-75"
            style={{ width: `${progress}%` }}
          />

          <div className="p-10 lg:p-14">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.32 }}
                className="flex flex-col lg:flex-row gap-12 items-center"
              >
                {/* Image */}
                <div className="lg:w-[46%] w-full">
                  <motion.img
                    key={feat.image}
                    initial={{ scale: 0.97, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.4 }}
                    src={feat.image}
                    alt={feat.label}
                    className="w-full aspect-[16/10] object-cover rounded-2xl shadow-xl"
                  />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="inline-flex items-center gap-2 bg-orange-500/15 text-[#F0970A] text-[11px] font-semibold px-3 py-1.5 rounded-full border border-orange-500/25 uppercase tracking-wider mb-4">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#F0970A]" />
                    {feat.label}
                  </div>
                  <h3 className="text-white text-2xl lg:text-3xl font-bold leading-snug mb-3">{feat.title}</h3>
                  <p className="text-[#CBD5E1] text-[15px] leading-7 mb-5">{feat.desc}</p>
                  <ul className="space-y-2.5 mb-7">
                    {feat.points.map((pt, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 + i * 0.08 }}
                        className="flex items-center gap-3 text-[#E5E7EB] text-sm"
                      >
                        <HiOutlineCheckCircle className="text-[#F0970A] w-5 h-5 flex-shrink-0" />
                        {pt}
                      </motion.li>
                    ))}
                  </ul>
                  <button className="bg-[#F0970A] hover:bg-[#d87f05] text-white font-semibold px-6 py-3 rounded-full text-sm transition-all hover:-translate-y-0.5">
                    Explore Feature →
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Tabs */}
        <div className="grid grid-cols-4 sm:grid-cols-8 gap-3">
          {featuresData.map((f, i) => {
            const TabIcon = f.icon
            const isActive = active === i
            return (
              <button
                key={f.id}
                 onMouseEnter={() => handleTabClick(i)}
                className={`relative overflow-hidden p-3 rounded-xl border transition-all duration-250 flex flex-col items-center gap-2 group
                  ${isActive ? 'bg-white border-[#F0970A] border-2 -translate-y-0.5' : 'bg-white border-[#E5E7EB] hover:border-[#F0970A] hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(240,151,10,0.28)]'}`}
              >
                {/* Hover fill bg */}
                <span className={`absolute inset-0 bg-[#F0970A] transition-opacity duration-220 ${isActive ? 'opacity-0' : 'opacity-0 group-hover:opacity-100'}`} />
                <TabIcon className={`w-5 h-5 relative z-10 transition-colors ${isActive ? 'text-[#F0970A]' : 'text-[#374151] group-hover:text-white'}`} />
                <span className={`text-[10.5px] font-medium text-center relative z-10 transition-colors leading-tight ${isActive ? 'text-[#1E4E6D]' : 'text-[#374151] group-hover:text-white'}`}>
                  {f.label}
                </span>
                {/* Active tab progress */}
                {isActive && (
                  <span
                    className="absolute bottom-0 left-0 h-[2.5px] bg-[#F0970A]"
                    style={{ width: `${progress}%`, transition: 'width 75ms linear' }}
                  />
                )}
              </button>
            )
          })}
        </div>

      </div>
    </section>
  )
}