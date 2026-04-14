'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import Card from '../shared/Card'
import {
  HiOutlineBell, HiOutlineBookOpen, HiOutlineCreditCard, HiOutlineUserGroup,
  HiOutlineClipboardDocumentList, HiOutlineAcademicCap, HiOutlineTruck,
  HiOutlineChartBar, HiOutlineCog6Tooth, HiOutlineGlobeAlt,
  HiOutlineDocumentText, HiOutlineShieldCheck
} from 'react-icons/hi2'
import Showcasecards from './Showcasecards'

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

// ─── Particle Canvas ──────────────────────────────────────────────────────────
function ParticleCanvas() {
  const canvasRef = useRef(null)
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let animId, mouseX = window.innerWidth / 2, mouseY = window.innerHeight / 2, w, h
    let particles = []

    const resize = () => { w = canvas.width = canvas.offsetWidth; h = canvas.height = canvas.offsetHeight }
    resize()
    window.addEventListener('resize', resize)

    class Particle {
      constructor() { this.reset() }
      reset() {
        this.x = Math.random() * w; this.y = Math.random() * h
        this.size = Math.random() * 1.8 + 0.4
        this.speedX = (Math.random() - 0.5) * 0.3; this.speedY = (Math.random() - 0.5) * 0.3
        this.baseOpacity = Math.random() * 0.45 + 0.1; this.opacity = this.baseOpacity
        this.golden = Math.random() > 0.45; this.pulse = Math.random() * Math.PI * 2
        this.pulseSpeed = Math.random() * 0.018 + 0.004
      }
      update() {
        this.x += this.speedX; this.y += this.speedY
        this.pulse += this.pulseSpeed
        this.opacity = this.baseOpacity + Math.sin(this.pulse) * 0.12
        const dx = mouseX - this.x, dy = mouseY - this.y
        const dist = Math.sqrt(dx * dx + dy * dy)
        if (dist < 140) {
          const f = (140 - dist) / 140
          this.x -= dx * f * 0.012; this.y -= dy * f * 0.012
          this.opacity = Math.min(this.opacity + f * 0.25, 0.9)
        }
        if (this.x < -10 || this.x > w + 10 || this.y < -10 || this.y > h + 10) this.reset()
      }
      draw() {
        ctx.beginPath(); ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fillStyle = this.golden ? `rgba(240,151,10,${this.opacity})` : `rgba(255,195,100,${this.opacity * 0.55})`
        ctx.fill()
        if (this.size > 1.2) {
          ctx.beginPath(); ctx.arc(this.x, this.y, this.size * 3.5, 0, Math.PI * 2)
          ctx.fillStyle = `rgba(240,151,10,${this.opacity * 0.05})`; ctx.fill()
        }
      }
    }

    for (let i = 0; i < 130; i++) particles.push(new Particle())
    const drawConnections = () => {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x, dy = particles[i].y - particles[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 110) {
            ctx.beginPath(); ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.strokeStyle = `rgba(240,151,10,${(1 - dist / 110) * 0.07})`
            ctx.lineWidth = 0.5; ctx.stroke()
          }
        }
      }
    }
    const animate = () => {
      ctx.clearRect(0, 0, w, h)
      particles.forEach(p => { p.update(); p.draw() })
      drawConnections(); animId = requestAnimationFrame(animate)
    }
    animate()
    const onMove = (e) => { mouseX = e.clientX; mouseY = e.clientY }
    window.addEventListener('mousemove', onMove)
    return () => { cancelAnimationFrame(animId); window.removeEventListener('resize', resize); window.removeEventListener('mousemove', onMove) }
  }, [])
  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full z-0 pointer-events-none" />
}

// ─── Showcase Card ────────────────────────────────────────────────────────────
function ShowcaseCard({ icon, title, desc, variant = 'side', delay = 1000 }) {
  const [visible, setVisible] = useState(false)
  useEffect(() => { const t = setTimeout(() => setVisible(true), delay); return () => clearTimeout(t) }, [delay])

  const baseTransform =
    variant === 'mid' ? '-translate-y-2.5' :
    variant === 'left' ? '-rotate-[5deg] translate-y-4' :
    'rotate-[5deg] translate-y-4'

  return (
    <div
      className={`w-[210px] rounded-2xl p-[22px_18px] backdrop-blur-md cursor-default
        bg-white/5 border transition-all duration-[450ms]
        hover:-translate-y-[14px] hover:rotate-0 hover:bg-[rgba(240,151,10,0.1)]
        hover:border-[#F0970A] hover:shadow-[0_20px_50px_rgba(240,151,10,0.15)]
        ${variant === 'mid' ? 'border-[rgba(240,151,10,0.25)]' : 'border-white/10'}
        ${visible ? baseTransform : 'translate-y-8 opacity-0'}`}
      style={{ transition: 'all 0.45s cubic-bezier(0.34,1.56,0.64,1)' }}
    >
      <div className="w-9 h-9 rounded-[10px] bg-[rgba(240,151,10,0.15)] border border-[rgba(240,151,10,0.25)] flex items-center justify-center text-[16px] mb-3">
        {icon}
      </div>
      <div className="text-[13px] font-semibold text-white mb-1.5">{title}</div>
      <div className="text-[11px] text-white/45 leading-[1.6]">{desc}</div>
    </div>
  )
}

// ─── Main Component ───────────────────────────────────────────────────────────
function Features() {
  useEffect(() => { document.title = 'Features | ConnectSkool' }, [])

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@300;400;700&display=swap');
        @keyframes nexaBlink { 0%,100%{opacity:1} 50%{opacity:.2} }
        @keyframes nexaFloat { 0%,100%{transform:translateX(-50%) translateY(0)} 50%{transform:translateX(-50%) translateY(7px)} }
        @keyframes fadeUpIn { from{opacity:0;transform:translateY(20px)} to{opacity:1;transform:translateY(0)} }
        .fa1 { animation: fadeUpIn .7s .2s both; }
        .fa2 { animation: fadeUpIn .8s .35s both; }
        .fa3 { animation: fadeUpIn .8s .5s both; }
        .fa4 { animation: fadeUpIn .8s .6s both; }
        .fa5 { animation: fadeUpIn .8s .7s both; }
        .fa6 { animation: fadeUpIn .8s .8s both; }
        .hero-grad { background: linear-gradient(120deg,#FFB84D 0%,#F0970A 50%,#d4780a 100%); -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text; }
        .blink-dot { animation: nexaBlink 1.8s ease infinite; }
        .scroll-float { animation: nexaFloat 2.5s ease infinite; }
      `}</style>

      {/* ── HERO SECTION ── */}
      <section
        className="relative w-full bg-[#1E4E6D] flex flex-col items-center justify-center text-center overflow-hidden"
        style={{ minHeight: '92vh', paddingTop: '72px', paddingBottom: '56px', paddingLeft: '24px', paddingRight: '24px' }}
        aria-label="Features Hero"
      >
        <ParticleCanvas />

        {/* Grid lines */}
        <svg className="absolute inset-0 w-full h-full z-[1] pointer-events-none" aria-hidden="true">
          <line x1="25%" y1="0" x2="25%" y2="100%" stroke="rgba(240,151,10,0.04)" strokeWidth="1" />
          <line x1="75%" y1="0" x2="75%" y2="100%" stroke="rgba(240,151,10,0.04)" strokeWidth="1" />
        </svg>

        {/* Glow blobs */}
        <div aria-hidden="true" className="absolute rounded-full pointer-events-none z-0"
          style={{ width: 480, height: 480, background: '#F0970A', filter: 'blur(130px)', opacity: 0.07, top: -160, left: -60 }} />
        <div aria-hidden="true" className="absolute rounded-full pointer-events-none z-0"
          style={{ width: 480, height: 480, background: '#1E4E6D', filter: 'blur(130px)', opacity: 0.12, bottom: -180, right: -80 }} />

        {/* Content */}
        <div className="relative z-[2] flex flex-col items-center w-full max-w-[920px]">

          {/* H1 — exactly 2 lines */}
          <h1 className="fa2 w-full mb-5"
            style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(32px, 5.5vw, 72px)', fontWeight: 700, lineHeight: 1.05, letterSpacing: '-1.5px' }}
          >
            <span className="hero-grad block whitespace-nowrap">Powerful School ERP Features</span>
            <span className="block whitespace-nowrap"
              style={{ fontWeight: 300, color: 'rgba(255,255,255,0.4)', WebkitTextFillColor: 'rgba(255,255,255,0.4)' }}>
              to Simplify Every Operation
            </span>
          </h1>

          {/* Subtitle */}
          <p className="fa3 max-w-[560px] mb-7"
            style={{ fontSize: 15, lineHeight: 1.75, color: 'rgba(255,255,255,0.5)', fontWeight: 400 }}>
            Manage academics, administration, and communication seamlessly with our all-in-one,
            cloud-based school ERP system designed for modern institutions.
          </p>

          {/* Highlight pills */}
          <div className="fa4 flex gap-2.5 flex-wrap justify-center mb-8">
            {[
              { icon: '🎓', label: 'Smart Academic Management' },
              { icon: '🏫', label: 'Complete Administrative Control' },
              { icon: '📊', label: 'Real-Time Insights & Automation' },
            ].map((p) => (
              <span key={p.label}
                className="inline-flex items-center gap-2 px-4 py-[7px] rounded-full border text-[12px] font-medium tracking-[0.3px]"
                style={{ background: 'rgba(255,255,255,0.06)', borderColor: 'rgba(255,255,255,0.13)', color: 'rgba(255,255,255,0.75)' }}>
                <span style={{ fontSize: 13 }}>{p.icon}</span>
                {p.label}
              </span>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="fa5 flex gap-3 flex-wrap justify-center mb-8">
            <button
              className="text-white text-[11px] font-bold tracking-[1.5px] uppercase rounded-[4px] border-none cursor-pointer transition-all duration-300 hover:-translate-y-0.5"
              style={{ padding: '13px 36px', background: '#F0970A' }}
              onMouseEnter={e => { e.currentTarget.style.background = '#FFB84D'; e.currentTarget.style.boxShadow = '0 8px 30px rgba(240,151,10,0.4)' }}
              onMouseLeave={e => { e.currentTarget.style.background = '#F0970A'; e.currentTarget.style.boxShadow = 'none' }}
            >
              Book Free Demo
            </button>
            <button
              className="text-[11px] font-semibold tracking-[1.5px] uppercase rounded-[4px] cursor-pointer transition-all duration-300"
              style={{ padding: '13px 36px', background: 'transparent', border: '1px solid rgba(255,255,255,0.2)', color: 'rgba(255,255,255,0.8)' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = '#F0970A'; e.currentTarget.style.color = '#F0970A' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'; e.currentTarget.style.color = 'rgba(255,255,255,0.8)' }}
            >
              Explore All Features
            </button>
          </div>

          {/* Trust line */}
          <p className="fa6 max-w-[480px]"
            style={{ fontSize: 11, color: 'rgba(255,255,255,0.28)', lineHeight: 1.7 }}>
            Trusted by schools to manage{' '}
            <span style={{ color: 'rgba(240,151,10,0.65)', fontWeight: 500 }}>students, staff, and operations</span>
            {' '}efficiently in one unified platform.
          </p>

          {/* Showcase Cards */}
          <div className="flex gap-4 justify-center flex-wrap mt-10" style={{ perspective: 900 }}>
            {/* <ShowcaseCard icon="⚡" title="Workflow Automation" desc="Automate timetables, attendance, fee reminders & reports." variant="left" delay={900} />
            <ShowcaseCard icon="🧠" title="Smart AI Modules" desc="Manage admissions, academics & HR in one place." variant="mid" delay={1000} />
            <ShowcaseCard icon="📊" title="Real-Time Analytics" desc="Turn school data into actionable decisions instantly." variant="right" delay={1100} /> */}
             <Showcasecards/>
          </div>
         
        </div>

        {/* Scroll hint */}
     
      </section>

      {/* ── FEATURES GRID ── */}
    
    </>
  )
}

export default Features