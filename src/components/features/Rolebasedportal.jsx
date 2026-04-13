'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiArrowUpRight } from 'react-icons/hi2';

// ─── Data ─────────────────────────────────────────────────────────────────────
const roles = [
  {
    id: 'parents',
    label: 'For Parents',
    icon: (active) => (
      <svg width="32" height="32" viewBox="0 0 38 38" fill="none">
        <circle cx="13" cy="11" r="5" stroke={active ? '#F0A80A' : '#94a3b8'} strokeWidth="2" fill="none"/>
        <circle cx="25" cy="11" r="5" stroke={active ? '#F0A80A' : '#94a3b8'} strokeWidth="2" fill="none"/>
        <path d="M4 30c0-6 4-9 9-9h2M34 30c0-6-4-9-9-9h-2" stroke={active ? '#F0A80A' : '#94a3b8'} strokeWidth="2" strokeLinecap="round"/>
        <circle cx="19" cy="25" r="4" stroke={active ? '#F0A80A' : '#94a3b8'} strokeWidth="2" fill="none"/>
        <path d="M13 34c0-3.3 2.7-6 6-6s6 2.7 6 6" stroke={active ? '#F0A80A' : '#94a3b8'} strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    heading: 'Empowering Parents',
    sub: 'Stay Closer to Your Child\'s Journey',
    description: 'ConnectSkool gives parents a powerful, intuitive portal to stay involved in every aspect of their child\'s school life. From live attendance tracking to instant fee payment — everything is just a tap away. Receive instant push notifications for attendance, exam schedules, and school announcements. View academic performance trends and communicate directly with teachers through in-app messaging — all in real time, all from your phone.',
     image: '/assets/featuresection.webp',
  },
  {
    id: 'students',
    label: 'For Students',
    icon: (active) => (
      <svg width="32" height="32" viewBox="0 0 38 38" fill="none">
        <circle cx="19" cy="10" r="5" stroke={active ? '#F0A80A' : '#94a3b8'} strokeWidth="2" fill="none"/>
        <path d="M8 30c0-6 4.9-10 11-10s11 4 11 10" stroke={active ? '#F0A80A' : '#94a3b8'} strokeWidth="2" strokeLinecap="round"/>
        <path d="M10 17l9-4 9 4-9 4-9-4z" stroke={active ? '#F0A80A' : '#94a3b8'} strokeWidth="1.8" strokeLinejoin="round" fill="none"/>
        <path d="M28 17v5" stroke={active ? '#F0A80A' : '#94a3b8'} strokeWidth="1.8" strokeLinecap="round"/>
      </svg>
    ),
    heading: 'Learn Smarter, Stay Organized',
    sub: 'Your Personal Academic Command Center',
    description: 'Access timetables, assignments, study materials, and exam schedules — all in one clean dashboard. Students can track their attendance records, download admit cards instantly, and submit assignments online with ease. ConnectSkool helps every student stay on top of their academics with personalized insights, progress reports, and a library of digital resources available 24/7 — anywhere, on any device.',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=900&h=600&fit=crop',
  },
  {
    id: 'teachers',
    label: 'For Teachers',
    icon: (active) => (
      <svg width="32" height="32" viewBox="0 0 38 38" fill="none">
        <rect x="6" y="8" width="26" height="17" rx="2" stroke={active ? '#F0A80A' : '#94a3b8'} strokeWidth="2" fill="none"/>
        <path d="M14 25v5M24 25v5M9 30h20" stroke={active ? '#F0A80A' : '#94a3b8'} strokeWidth="2" strokeLinecap="round"/>
        <path d="M11 15h8M11 19h12" stroke={active ? '#F0A80A' : '#94a3b8'} strokeWidth="1.8" strokeLinecap="round"/>
      </svg>
    ),
    heading: 'Focus on Teaching, Not Paperwork',
    sub: 'Automate Admin Work, Elevate Classroom Impact',
    description: 'Mark attendance digitally in seconds, upload assignments, share study materials, and post class updates — all without leaving the app. ConnectSkool frees teachers from repetitive administrative tasks so they can spend more time inspiring and educating students. Track student performance class-wide, share feedback instantly, and communicate with parents directly — making every teacher more effective and every classroom more productive.',
    image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=900&h=600&fit=crop',
  },
  {
    id: 'management',
    label: 'For Management',
    icon: (active) => (
      <svg width="32" height="32" viewBox="0 0 38 38" fill="none">
        <rect x="5" y="5" width="12" height="12" rx="2.5" stroke={active ? '#F0A80A' : '#94a3b8'} strokeWidth="2" fill="none"/>
        <rect x="21" y="5" width="12" height="12" rx="2.5" stroke={active ? '#F0A80A' : '#94a3b8'} strokeWidth="2" fill="none"/>
        <rect x="5" y="21" width="12" height="12" rx="2.5" stroke={active ? '#F0A80A' : '#94a3b8'} strokeWidth="2" fill="none"/>
        <rect x="21" y="21" width="12" height="12" rx="2.5" stroke={active ? '#F0A80A' : '#94a3b8'} strokeWidth="2" fill="none"/>
      </svg>
    ),
    heading: 'Admin & Finance — Streamlined Leadership',
    sub: 'Total Institutional Control in One Dashboard',
    description: 'ConnectSkool transforms the Principal\'s office into a data-driven command center. Access real-time graphical dashboards showing student strength, fee collection, staff attendance, and payroll — all at a glance. The finance portal tracks day-wise fee collection and outstanding dues with full transparency. Generate salary slips, TC certificates, bonafide letters, and other critical documents in a single click — saving hours of manual work every week.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&h=600&fit=crop',
  },
];

// ─── Fallback placeholder (no changes) ─────────────────────────────────────
function MockDashboard({ role }) {
  return (
    <div
      className="absolute inset-0 flex flex-col items-center justify-center gap-6 px-10"
      style={{ background: 'linear-gradient(140deg,#0a2236 0%,#1E4E6D 100%)' }}
    >
      <div
        className="w-20 h-20 rounded-2xl flex items-center justify-center"
        style={{ background: 'rgba(240,168,10,0.13)', border: '1.5px solid rgba(240,168,10,0.3)' }}
      >
        {role.icon(true)}
      </div>
      <span className="text-[10px] font-bold tracking-[3px] uppercase" style={{ color: 'rgba(255,255,255,0.28)' }}>
        {role.label} Portal Preview
      </span>
      <div className="w-full max-w-xs flex flex-col gap-3">
        <div className="grid grid-cols-3 gap-2">
          {['Attendance', 'Fees', 'Reports'].map((l, i) => (
            <div key={l} className="rounded-xl p-3 flex flex-col gap-2"
              style={{ background: i === 0 ? 'rgba(240,168,10,0.13)' : 'rgba(255,255,255,0.04)', border: `1px solid ${i === 0 ? 'rgba(240,168,10,0.28)' : 'rgba(255,255,255,0.07)'}` }}>
              <div className="h-1 rounded-full" style={{ background: i === 0 ? '#F0A80A' : 'rgba(255,255,255,0.15)', width: '60%' }} />
              <div className="h-6 rounded" style={{ background: i === 0 ? 'rgba(240,168,10,0.2)' : 'rgba(255,255,255,0.07)' }} />
            </div>
          ))}
        </div>
        <div className="rounded-xl p-4" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}>
          <div className="flex items-end gap-1.5 h-16">
            {[55, 80, 45, 90, 65, 75, 60].map((h, i) => (
              <div key={i} className="flex-1 rounded-t" style={{ height: `${h}%`, background: i % 2 === 0 ? 'rgba(240,168,10,0.55)' : 'rgba(255,255,255,0.1)' }} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Main ─────────────────────────────────────────────────────────────────────
export default function RoleBasedPortal() {
  const [active, setActive] = useState('management');
  const role = roles.find((r) => r.id === active);

  // Animation variants for image (scale from 0.92 to 1)
  const imageVariants = {
    initial: { scale: 0.92, opacity: 0 },
    animate: { 
      scale: 1, 
      opacity: 1, 
      transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } 
    },
    exit: { 
      scale: 0.92, 
      opacity: 0, 
      transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] } 
    }
  };

  // Animation variants for text (slide up from bottom)
  const textVariants = {
    initial: { opacity: 0, y: 40 },
    animate: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.05 } 
    },
    exit: { 
      opacity: 0, 
      y: -20, 
      transition: { duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] } 
    }
  };

  return (
    <section
      className="w-full py-8 px-4 md:px-8 lg:px-16"
      style={{ background: '#F7F8FB', fontFamily: "'DM Sans','Segoe UI',sans-serif" }}
    >
      <div className="max-w-[1500px] mx-auto">

        {/* ── Header ── */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-black" style={{ color: '#1E4E6D' }}>
            School Management Software
          </h2>
          <p className="mt-2 text-xl font-bold uppercase tracking-[2.5px]" style={{ color: '#F0A80A' }}>
            Role-Based Portal Benefits
          </p>
          <div className="w-16 h-1 mx-auto mt-5 rounded-full" style={{ background: '#F0A80A' }} />
        </div>

        {/* ── Role Tabs ── */}
        <div className="flex justify-center items-end gap-8 md:gap-16  flex-wrap">
          {roles.map((r) => {
            const isActive = r.id === active;
            return (
              <button
                key={r.id}
                onClick={() => setActive(r.id)}
                className="group flex flex-col items-center gap-3 relative pb-5 transition-all"
              >
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-300"
                  style={{
                    background: isActive ? 'rgba(240,168,10,0.1)' : 'white',
                    border: isActive ? '2px solid #F0A80A' : '1.5px solid #e2e8f0',
                    boxShadow: isActive ? '0 4px 20px rgba(240,168,10,0.2)' : '0 2px 8px rgba(0,0,0,0.06)',
                    transform: isActive ? 'translateY(-3px)' : 'none',
                  }}
                >
                  {r.icon(isActive)}
                </div>
                <span
                  className="text-[11px] font-black uppercase tracking-wider transition-colors"
                  style={{ color: isActive ? '#F0A80A' : '#94a3b8' }}
                >
                  {r.label}
                </span>
                {isActive && (
                  <motion.div
                    layoutId="tab-line"
                    className="absolute bottom-0 w-full h-[3px] rounded-t-full"
                    style={{ background: '#F0A80A' }}
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* ── Main Card — NO border-radius, sharp edges ── */}
        <div
          className="w-full overflow-hidden"
          style={{
            background: '#1E4E6D',
            boxShadow: '0 32px 100px rgba(30,78,109,0.35)',
          }}
        >
          <div className="grid lg:grid-cols-[52%_48%]" style={{ minHeight: '560px' }}>

            {/* ── LEFT: text slide-up from bottom ── */}
            <div className="relative px-10 md:px-14 lg:px-16 py-14 flex flex-col justify-center overflow-hidden">
              <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full pointer-events-none"
                style={{ background: 'radial-gradient(circle, rgba(240,168,10,0.07) 0%, transparent 70%)' }} />

              <AnimatePresence mode="wait">
                <motion.div
                  key={active + '-text'}
                  variants={textVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  className="relative z-10 flex flex-col gap-6"
                >
                  <span
                    className="self-start text-[10px] font-extrabold uppercase tracking-[2.5px] px-3.5 py-1.5 rounded-sm"
                    style={{
                      color: '#F0A80A',
                      background: 'rgba(240,168,10,0.12)',
                      border: '1px solid rgba(240,168,10,0.28)',
                    }}
                  >
                    {role.sub}
                  </span>

                  <h3
                    className="text-3xl md:text-[2.4rem] font-black leading-[1.1]"
                    style={{ color: '#ffffff' }}
                  >
                    {role.heading}
                  </h3>

                  <p
                    className="text-[15px] leading-[1.95] max-w-[560px]"
                    style={{ color: 'rgba(255,255,255,0.72)' }}
                  >
                    {role.description}
                  </p>

                  <div className="pt-2">
                    <motion.button
                      whileHover={{ y: -3, boxShadow: '0 16px 40px rgba(240,168,10,0.45)' }}
                      whileTap={{ scale: 0.97 }}
                      className="inline-flex items-center gap-2.5 px-8 py-4 text-[12px] font-extrabold uppercase tracking-widest text-white transition-all"
                      style={{
                        background: 'linear-gradient(135deg, #F0A80A, #d4900a)',
                        boxShadow: '0 8px 28px rgba(240,168,10,0.38)',
                      }}
                    >
                      Explore {role.label.replace('For ', '')} Portal
                      <HiArrowUpRight size={15} />
                    </motion.button>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* ── RIGHT: image zooms in from small (scale 0.92 -> 1) ── */}
            <div className="relative overflow-hidden" style={{ minHeight: '420px' }}>
              <div
                className="absolute inset-y-0 left-0 w-24 z-10 pointer-events-none"
                style={{ background: 'linear-gradient(to right, #1E4E6D, transparent)' }}
              />

              <AnimatePresence mode="wait">
                <motion.div
                  key={active + '-img'}
                  variants={imageVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  className="absolute inset-0"
                >
                  <img
                    src={role.image}
                    alt={role.label}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      const fb = e.currentTarget.parentElement?.querySelector('.cs-fallback');
                      if (fb) fb.style.display = 'block';
                    }}
                  />
                  <div className="cs-fallback hidden absolute inset-0">
                    <MockDashboard role={role} />
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

          </div>
        </div>

        {/* ── Bottom tagline ── */}
        <p
          className="text-center mt-10 font-black uppercase tracking-[5px] text-[10px]"
          style={{ color: 'rgba(30,78,109,0.28)' }}
        >
          ConnectSkool &nbsp;•&nbsp; One Solution &nbsp;•&nbsp; All Roles
        </p>

      </div>
    </section>
  );
}