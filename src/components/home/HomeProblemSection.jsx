'use client'

import { motion, useAnimation, AnimatePresence } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { useLocale } from '../../contexts/LocaleContext'

// ─── Image URLs ─────────────────────────────────────────────────────────────
const PROBLEM_IMAGES = [
  '/assets/problem-1.png',
  '/assets/problem-2.png',
  '/assets/problem-3.png',
  '/assets/problem-4.png',
]

const SOLUTION_IMAGES = [
  '/assets/solution-1.png',
  '/assets/solution-2.png',
  '/assets/solution-3.png',
  '/assets/solution-4.png',
]

const PROBLEM_ICONS = ['😔', '⏳', '🔍', '💸']
const SOLUTION_ICONS = ['⚡', '✅', '📍', '💼']

const PROBLEM_CARDS = [
  { title: 'No Steady Work', body: 'Income changes day to day — families suffer in uncertainty.' },
  { title: 'Time Wasted', body: 'Hours lost waiting in sun and dust at labour chowk.' },
  { title: 'Right Worker Hard to Find', body: 'Contractors struggle to trust skill without verification.' },
  { title: 'Uncertain Daily Income', body: 'Family expenses feel risky every single morning.' },
]

const SOLUTION_CARDS = [
  { title: 'Instant Nearby Matching', body: 'App instantly connects workers to contractors within 5 km — no waiting at chowk.' },
  { title: 'Verified Skilled Workers', body: 'Every worker is Aadhaar-verified with skill ratings, so contractors can trust immediately.' },
  { title: 'Live Availability Tracking', body: 'See who is available right now, book instantly, confirm via WhatsApp in seconds.' },
  { title: 'Stable Work Opportunities', body: 'Regular job alerts mean workers get consistent income — no more uncertain days.' },
]

// ─── Tree Connector SVG ──────────────────────────────────────────────────────
function TreeConnector({ flipped = false }) {
  const paths = [
    'M 400 10 C 400 60 200 80 80 120',
    'M 400 10 C 400 60 280 80 230 120',
    'M 400 10 C 400 60 520 80 570 120',
    'M 400 10 C 400 60 640 80 720 120',
  ]
  return (
    <div className="relative w-full overflow-visible" style={{ height: 140 }}>
      <svg
        viewBox="0 0 800 140"
        className="absolute inset-0 w-full h-full"
        style={{ transform: flipped ? 'scaleY(-1)' : 'none' }}
        preserveAspectRatio="none"
      >
        <defs>
          <filter id="glow2">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
        </defs>
        {paths.map((d, i) => (
          <g key={i}>
            <motion.path d={d} fill="none" stroke="rgba(255,107,0,0.18)" strokeWidth="2"
              initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }}
              viewport={{ once: true }} transition={{ duration: 1.2, delay: i * 0.15, ease: 'easeInOut' }} />
            <motion.path d={d} fill="none" stroke="rgba(255,140,0,0.85)" strokeWidth="1.5"
              filter="url(#glow2)" strokeDasharray="8 18"
              initial={{ strokeDashoffset: 200 }} whileInView={{ strokeDashoffset: -200 }}
              viewport={{ once: true }} transition={{ duration: 2.5, delay: i * 0.15, repeat: Infinity, ease: 'linear' }} />
          </g>
        ))}
        <motion.circle cx="400" cy="10" r="5" fill="#FF6B00" filter="url(#glow2)"
          initial={{ scale: 0, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }} transition={{ duration: 0.5 }} />
      </svg>
    </div>
  )
}

// ─── Converging Arrow (cards → single point) ─────────────────────────────────
function ConvergeArrow({ color = 'orange' }) {
  const isOrange = color === 'orange'
  const stroke = isOrange ? 'rgba(255,140,0,0.85)' : 'rgba(16,185,129,0.85)'
  const strokeBase = isOrange ? 'rgba(255,107,0,0.18)' : 'rgba(16,185,129,0.18)'
  const paths = [
    'M 80 10 C 80 60 350 80 400 130',
    'M 230 10 C 230 60 370 80 400 130',
    'M 570 10 C 570 60 430 80 400 130',
    'M 720 10 C 720 60 450 80 400 130',
  ]
  return (
    <div className="relative w-full overflow-visible" style={{ height: 140 }}>
      <svg viewBox="0 0 800 140" className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
        <defs>
          <filter id="glow3">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
        </defs>
        {paths.map((d, i) => (
          <g key={i}>
            <motion.path d={d} fill="none" stroke={strokeBase} strokeWidth="2"
              initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }}
              viewport={{ once: true }} transition={{ duration: 1.2, delay: i * 0.15 }} />
            <motion.path d={d} fill="none" stroke={stroke} strokeWidth="1.5"
              filter="url(#glow3)" strokeDasharray="8 18"
              initial={{ strokeDashoffset: -200 }} whileInView={{ strokeDashoffset: 200 }}
              viewport={{ once: true }} transition={{ duration: 2.5, delay: i * 0.15, repeat: Infinity, ease: 'linear' }} />
          </g>
        ))}
        <motion.circle cx="400" cy="130" r="5" fill={isOrange ? '#FF6B00' : '#10B981'} filter="url(#glow3)"
          initial={{ scale: 0, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.6 }} />
      </svg>
    </div>
  )
}

// ─── Flowing Down Arrow ───────────────────────────────────────────────────────
function FlowArrow({ color = 'emerald', height = 80 }) {
  const isEmerald = color === 'emerald'
  return (
    <div className="flex flex-col items-center gap-1 my-2">
      <motion.div
        initial={{ opacity: 0, scaleY: 0 }}
        whileInView={{ opacity: 1, scaleY: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        style={{ height }}
        className={`w-px ${isEmerald ? 'bg-gradient-to-b from-emerald-500/80 to-emerald-500/10' : 'bg-gradient-to-b from-orange-500/80 to-orange-500/10'}`}
      />
      <motion.div
        animate={{ y: [0, 5, 0] }}
        transition={{ repeat: Infinity, duration: 1.4, ease: 'easeInOut' }}
        className={`text-xl ${isEmerald ? 'text-emerald-400' : 'text-orange-400'}`}
      >▼</motion.div>
    </div>
  )
}

// ─── Problem Card ─────────────────────────────────────────────────────────────
function ProblemCard({ card, image, icon, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }} transition={{ delay: index * 0.08, duration: 0.6 }}
      whileHover={{ y: -6, scale: 1.02 }}
      className="relative rounded-2xl overflow-hidden border border-orange-500/20 bg-white/5 backdrop-blur-md shadow-lg shadow-orange-500/10 group cursor-pointer"
      style={{ minHeight: 280 }}
    >
      <div className="relative h-40 overflow-hidden">
        <motion.img src={image} alt={card.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a0a00] via-[#1a0a00]/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent" />
        <div className="absolute top-3 left-3 text-2xl bg-black/40 rounded-full w-9 h-9 flex items-center justify-center backdrop-blur-sm border border-orange-500/30">{icon}</div>
      </div>
      <div className="p-4">
        <p className="text-base font-bold text-orange-400">{card.title}</p>
        <p className="mt-1 text-sm text-white/70 leading-relaxed">{card.body}</p>
      </div>
      <div className="absolute inset-0 rounded-2xl border border-orange-500/0 group-hover:border-orange-500/50 transition-all duration-300 pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-orange-500/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </motion.div>
  )
}

// ─── Solution Card ────────────────────────────────────────────────────────────
function SolutionCard({ card, image, icon, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }} transition={{ delay: index * 0.08, duration: 0.6 }}
      whileHover={{ y: -6, scale: 1.02 }}
      className="relative rounded-2xl overflow-hidden border border-emerald-500/20 bg-white/5 backdrop-blur-md shadow-lg shadow-emerald-500/10 group cursor-pointer"
      style={{ minHeight: 280 }}
    >
      <div className="relative h-40 overflow-hidden">
        <motion.img src={image} alt={card.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#001a0a] via-[#001a0a]/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-orange-500/5" />
        <div className="absolute top-3 left-3 text-2xl bg-black/40 rounded-full w-9 h-9 flex items-center justify-center backdrop-blur-sm border border-emerald-500/40">{icon}</div>
        <div className="absolute top-3 right-3 bg-emerald-500/20 border border-emerald-500/40 rounded-full px-2 py-0.5 text-[10px] font-bold text-emerald-400 tracking-wider backdrop-blur-sm">SOLUTION</div>
      </div>
      <div className="p-4">
        <p className="text-base font-bold text-emerald-400">{card.title}</p>
        <p className="mt-1 text-sm text-white/70 leading-relaxed">{card.body}</p>
      </div>
      <div className="absolute inset-0 rounded-2xl border border-emerald-500/0 group-hover:border-emerald-500/50 transition-all duration-300 pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-emerald-500/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </motion.div>
  )
}

// ─── Section Label ────────────────────────────────────────────────────────────
function SectionLabel({ label, color = 'orange' }) {
  const isOrange = color === 'orange'
  return (
    <motion.div initial={{ opacity: 0, scale: 0.85 }} whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }} transition={{ duration: 0.5 }} className="flex flex-col items-center gap-2">
      <span className="text-4xl sm:text-5xl font-black tracking-tight">
        <span className={`${isOrange ? 'bg-gradient-to-r from-orange-400 to-orange-600' : 'bg-gradient-to-r from-emerald-400 to-emerald-600'} bg-clip-text text-transparent`}>{label}</span>
      </span>
      <div className={`h-1 w-24 rounded-full ${isOrange ? 'bg-gradient-to-r from-orange-500 to-orange-300' : 'bg-gradient-to-r from-emerald-500 to-emerald-300'} opacity-80 blur-[1px]`} />
    </motion.div>
  )
}

// ─── Mobile App Mockup ────────────────────────────────────────────────────────
function MobileAppMockup() {
  const screens = [
    {
      title: 'Find Workers Nearby',
      subtitle: 'Live availability • 5km radius',
      accent: '#10B981',
      content: (
        <div className="space-y-2 px-1">
          {['Ramesh — Plumber ⭐4.9', 'Suresh — Carpenter ⭐4.8', 'Mahesh — Painter ⭐4.7'].map((w, i) => (
            <motion.div key={i} initial={{ x: -20, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }} transition={{ delay: 0.4 + i * 0.15 }}
              className="flex items-center gap-2 bg-white/10 rounded-xl px-3 py-2">
              <div className="w-8 h-8 rounded-full bg-emerald-500/30 border border-emerald-500/50 flex items-center justify-center text-base">👷</div>
              <div className="flex-1">
                <p className="text-[11px] font-semibold text-white">{w.split('—')[0]}</p>
                <p className="text-[10px] text-emerald-400">{w.split('—')[1]}</p>
              </div>
              <div className="bg-emerald-500 rounded-lg px-2 py-0.5 text-[9px] font-bold text-white">Book</div>
            </motion.div>
          ))}
        </div>
      )
    }
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 60, scale: 0.85 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="relative mx-auto"
      style={{ width: 260 }}
    >
      {/* Phone outer shell */}
      <div className="relative rounded-[40px] border-[6px] border-white/20 bg-gradient-to-b from-white/10 to-white/5 shadow-2xl shadow-emerald-500/20 overflow-hidden"
        style={{ height: 520 }}>
        {/* Dynamic Island */}
        <div className="absolute top-3 left-1/2 -translate-x-1/2 w-20 h-5 bg-black rounded-full z-20 flex items-center justify-center gap-1">
          <div className="w-2 h-2 rounded-full bg-white/20" />
          <div className="w-1 h-1 rounded-full bg-emerald-400/60" />
        </div>

        {/* Screen content */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a1a12] to-[#050d0a] flex flex-col">
          {/* Status bar */}
          <div className="flex justify-between items-center px-6 pt-10 pb-2">
            <span className="text-[10px] text-white/60 font-medium">9:41</span>
            <span className="text-[10px] text-white/60">●●● 🔋</span>
          </div>

          {/* App header */}
          <div className="px-4 pb-3">
            <div className="flex items-center gap-2 mb-1">
              <div className="w-7 h-7 rounded-xl bg-emerald-500/30 border border-emerald-500/50 flex items-center justify-center text-sm">🏗️</div>
              <div>
                <p className="text-[13px] font-bold text-white leading-tight">Smart Labour</p>
                <p className="text-[9px] text-emerald-400">Chowk • Digital</p>
              </div>
              <div className="ml-auto bg-emerald-500/20 border border-emerald-500/40 rounded-full px-2 py-0.5">
                <span className="text-[9px] text-emerald-400 font-bold">● LIVE</span>
              </div>
            </div>

            {/* Search bar */}
            <div className="bg-white/10 rounded-2xl px-3 py-2 flex items-center gap-2">
              <span className="text-white/40 text-xs">🔍</span>
              <span className="text-white/40 text-[11px]">Search skill, area...</span>
            </div>
          </div>

          {/* Worker list */}
          <div className="px-3 flex-1 space-y-2">
            <p className="text-[10px] text-white/50 font-semibold uppercase tracking-wider px-1">Available Now — 3 km</p>
            {['Ramesh K. · Plumber · ⭐ 4.9', 'Suresh B. · Carpenter · ⭐ 4.8', 'Mahesh T. · Painter · ⭐ 4.7'].map((w, i) => (
              <motion.div key={i}
                initial={{ x: -30, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }} transition={{ delay: 0.5 + i * 0.18 }}
                className="flex items-center gap-2 bg-white/8 rounded-2xl px-3 py-2 border border-white/10">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-orange-500/30 to-emerald-500/20 border border-orange-500/30 flex items-center justify-center text-lg">👷</div>
                <div className="flex-1 min-w-0">
                  <p className="text-[11px] font-bold text-white leading-tight truncate">{w.split('·')[0]}</p>
                  <p className="text-[10px] text-emerald-400">{w.split('·')[1]} · {w.split('·')[2]}</p>
                </div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                  className="bg-emerald-500 rounded-xl px-2.5 py-1 text-[9px] font-bold text-white shadow-lg shadow-emerald-500/30">
                  Book
                </motion.div>
              </motion.div>
            ))}

            {/* Map mini preview */}
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 1 }}
              className="rounded-2xl overflow-hidden border border-white/10 bg-white/5 mt-2" style={{ height: 80 }}>
              <div className="relative w-full h-full bg-gradient-to-br from-emerald-950/80 to-blue-950/60 flex items-center justify-center">
                <div className="absolute inset-0 opacity-20"
                  style={{ backgroundImage: 'repeating-linear-gradient(0deg,transparent,transparent 12px,rgba(255,255,255,0.05) 12px,rgba(255,255,255,0.05) 13px),repeating-linear-gradient(90deg,transparent,transparent 12px,rgba(255,255,255,0.05) 12px,rgba(255,255,255,0.05) 13px)' }} />
                {[{ x: '30%', y: '40%' }, { x: '55%', y: '60%' }, { x: '70%', y: '30%' }].map((pos, i) => (
                  <motion.div key={i} animate={{ scale: [1, 1.4, 1], opacity: [0.8, 0.4, 0.8] }}
                    transition={{ repeat: Infinity, duration: 2, delay: i * 0.5 }}
                    className="absolute w-3 h-3 rounded-full bg-orange-500 border-2 border-white shadow-lg shadow-orange-500/50"
                    style={{ left: pos.x, top: pos.y }} />
                ))}
                <div className="absolute bottom-1 right-2 text-[9px] text-white/40">📍 Live Map</div>
              </div>
            </motion.div>
          </div>

          {/* Bottom nav */}
          <div className="flex justify-around items-center px-6 py-3 border-t border-white/10">
            {['🏠', '🗺️', '👷', '💬'].map((icon, i) => (
              <div key={i} className={`flex flex-col items-center gap-0.5 ${i === 0 ? 'text-emerald-400' : 'text-white/30'}`}>
                <span className="text-base">{icon}</span>
                {i === 0 && <div className="w-1 h-1 rounded-full bg-emerald-400" />}
              </div>
            ))}
          </div>
        </div>

        {/* Screen edge glow */}
        <div className="absolute inset-0 rounded-[34px] ring-1 ring-inset ring-white/10 pointer-events-none" />
      </div>

      {/* Phone side buttons */}
      <div className="absolute -right-2 top-24 w-1 h-12 bg-white/20 rounded-full" />
      <div className="absolute -left-2 top-20 w-1 h-8 bg-white/20 rounded-full" />
      <div className="absolute -left-2 top-32 w-1 h-14 bg-white/20 rounded-full" />

      {/* Glow below phone */}
      <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-40 h-6 bg-emerald-500/20 blur-xl rounded-full" />
    </motion.div>
  )
}

// ─── Download Popup ───────────────────────────────────────────────────────────
function DownloadPopup({ onClose }) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4"
        style={{ background: 'rgba(0,0,0,0.75)', backdropFilter: 'blur(8px)' }}
        onClick={onClose}
      >
        <motion.div
          initial={{ y: 100, opacity: 0, scale: 0.92 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          exit={{ y: 100, opacity: 0, scale: 0.92 }}
          transition={{ type: 'spring', damping: 22, stiffness: 300 }}
          onClick={e => e.stopPropagation()}
          className="relative w-full max-w-sm rounded-3xl border border-white/10 overflow-hidden"
          style={{ background: 'linear-gradient(135deg, #0d1f15 0%, #0a1a2a 100%)' }}
        >
          {/* Top glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-1 bg-gradient-to-r from-transparent via-emerald-500 to-transparent rounded-full" />

          {/* Close button */}
          <button onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/20 transition-all text-sm">✕</button>

          <div className="p-7">
            {/* Header */}
            <div className="flex items-center gap-3 mb-2">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-orange-500/40 to-emerald-500/30 border border-emerald-500/40 flex items-center justify-center text-2xl shadow-lg shadow-emerald-500/20">🏗️</div>
              <div>
                <p className="text-lg font-black text-white">Smart Labour Chowk</p>
                <p className="text-xs text-emerald-400">v2.1.0 · Free Download · 28MB</p>
              </div>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-5">
              <div className="flex gap-0.5">{[1,2,3,4,5].map(i => <span key={i} className="text-yellow-400 text-xs">★</span>)}</div>
              <span className="text-white/50 text-xs">4.8 · 12,400+ downloads</span>
            </div>

            {/* Features quick list */}
            <div className="grid grid-cols-2 gap-2 mb-5">
              {['⚡ Instant Booking', '✅ Verified Workers', '📍 Live Tracking', '💬 WhatsApp Ready'].map((f, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.07 }}
                  className="bg-white/5 border border-white/10 rounded-xl px-3 py-2 text-[11px] text-white/80 font-medium">{f}</motion.div>
              ))}
            </div>

            {/* Download buttons */}
            <div className="space-y-3">
              <motion.a href="#" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}
                className="flex items-center gap-3 w-full bg-white rounded-2xl px-4 py-3.5 group hover:bg-gray-100 transition-colors">
                <span className="text-2xl">🍎</span>
                <div className="flex-1 text-left">
                  <p className="text-[10px] text-gray-500 font-medium">Download on the</p>
                  <p className="text-[15px] font-black text-gray-900 leading-tight">App Store</p>
                </div>
                <span className="text-gray-400 text-sm group-hover:translate-x-1 transition-transform">→</span>
              </motion.a>

              <motion.a href="#" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}
                className="flex items-center gap-3 w-full bg-gradient-to-r from-emerald-600 to-emerald-500 rounded-2xl px-4 py-3.5 group hover:from-emerald-500 hover:to-emerald-400 transition-all shadow-lg shadow-emerald-500/30">
                <span className="text-2xl">🤖</span>
                <div className="flex-1 text-left">
                  <p className="text-[10px] text-emerald-200/70 font-medium">Get it on</p>
                  <p className="text-[15px] font-black text-white leading-tight">Google Play</p>
                </div>
                <span className="text-emerald-200 text-sm group-hover:translate-x-1 transition-transform">→</span>
              </motion.a>

              <motion.a href="#" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}
                className="flex items-center gap-3 w-full bg-white/5 border border-white/15 rounded-2xl px-4 py-3.5 group hover:bg-white/10 transition-colors">
                <span className="text-2xl">📦</span>
                <div className="flex-1 text-left">
                  <p className="text-[10px] text-white/50 font-medium">Direct Download</p>
                  <p className="text-[15px] font-black text-white leading-tight">APK File</p>
                </div>
                <span className="text-white/40 text-sm group-hover:translate-x-1 transition-transform">→</span>
              </motion.a>
            </div>

            <p className="text-center text-[10px] text-white/30 mt-4">Free forever · No subscription needed</p>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

// ─── Emotional CTA Section ────────────────────────────────────────────────────
function EmotionalCTA({ onDownload, buttonLabel }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="relative mx-auto max-w-2xl text-center px-4"
    >
      {/* Glow backdrop */}
      <div className="absolute inset-0 -m-8 rounded-3xl bg-gradient-to-b from-emerald-500/5 to-orange-500/5 blur-2xl pointer-events-none" />

      {/* Traditional → Digital */}
      <div className="inline-flex items-center gap-2 mb-6 rounded-full border border-white/10 bg-white/5 px-5 py-2 backdrop-blur-sm">
        <span className="text-orange-400 text-sm font-semibold">Labour Chowk</span>
        <span className="text-white/30">→</span>
        <span className="text-emerald-400 text-sm font-semibold">Smart Digital Platform</span>
      </div>

      {/* Emotional headline */}
      <h2 className="text-2xl sm:text-3xl font-black text-white leading-tight mb-2">
        Woh Subah Ka Wait Khatam Karo
      </h2>
      <p className="text-white/50 text-sm leading-relaxed mb-2">
        Hazaaron mazdoor ab ghar se kaam dhundhte hain.<br />
        <span className="text-emerald-400 font-semibold">Aap bhi apna pehla booking aaj karo.</span>
      </p>

      {/* Social proof */}
      <div className="flex justify-center items-center gap-4 mb-7 flex-wrap">
        <div className="flex -space-x-2">
          {['👷', '👷‍♀️', '🧑‍🔧', '👨‍🏗️', '👩‍🔧'].map((e, i) => (
            <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-orange-500/40 to-emerald-500/30 border-2 border-[#0f0f0f] flex items-center justify-center text-sm">{e}</div>
          ))}
        </div>
        <div className="text-left">
          <p className="text-white text-xs font-bold">500+ Workers Joined</p>
          <p className="text-white/40 text-[10px]">Abhi bhi grow ho raha hai</p>
        </div>
      </div>

      {/* Download CTA button */}
      <motion.button
        onClick={onDownload}
        whileHover={{ scale: 1.05, boxShadow: '0 20px 60px rgba(16,185,129,0.35)' }}
        whileTap={{ scale: 0.97 }}
        className="relative hidden sm:inline-flex items-center gap-3 rounded-2xl px-8 py-4 text-white font-black text-lg overflow-hidden group"
        style={{ background: 'linear-gradient(135deg, #059669 0%, #10B981 50%, #34D399 100%)' }}
      >
        {/* Shimmer */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
          animate={{ x: ['-100%', '200%'] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'linear', repeatDelay: 1 }}
        />
        <span className="relative text-2xl">📲</span>
        <span className="relative">{buttonLabel}</span>
        <motion.span className="relative text-xl" animate={{ x: [0, 4, 0] }} transition={{ repeat: Infinity, duration: 1.2 }}>→</motion.span>
      </motion.button>

      <p className="mt-3 text-white/30 text-xs">iOS • Android • APK available</p>
    </motion.div>
  )
}

// ─── Main Export ──────────────────────────────────────────────────────────────
export default function HomeProblemSection() {
  const [showDownload, setShowDownload] = useState(false)
  const { t } = useLocale()

  // Lock body scroll when popup open
  useEffect(() => {
    if (showDownload) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = ''
    return () => { document.body.style.overflow = '' }
  }, [showDownload])

  return (
    <>
      <section className="relative overflow-hidden bg-[#0f0f0f] py-16 text-white sm:py-24">
        {/* Background glows */}
        <div className="pointer-events-none absolute left-1/4 top-0 h-96 w-96 rounded-full bg-orange-500/10 blur-3xl" />
        <div className="pointer-events-none absolute right-1/4 bottom-0 h-96 w-96 rounded-full bg-emerald-500/8 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          {/* ── Hero Heading ── */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.7 }}
            className="mx-auto mb-4 max-w-3xl text-center">
            <div className="inline-block rounded-2xl border border-orange-500/30 bg-gradient-to-r from-orange-950/80 to-orange-900/40 px-8 py-5 backdrop-blur-sm shadow-xl shadow-orange-500/20">
              <p className="text-2xl sm:text-3xl font-extrabold leading-snug text-white">
               Thousands of workers still stand at the chowk every day
              </p>
            </div>
          </motion.div>

          {/* Arrow down */}
          <div className="flex justify-center my-2">
            <FlowArrow color="orange" />
          </div>

          {/* PROBLEM label */}
          <div className="flex justify-center mb-2">
            <SectionLabel label="Problem" color="orange" />
          </div>

          {/* Tree lines to problem cards */}
          <TreeConnector flipped={false} />

          {/* Problem Cards */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {PROBLEM_CARDS.map((c, i) => (
              <ProblemCard key={c.title} card={c} image={PROBLEM_IMAGES[i]} icon={PROBLEM_ICONS[i]} index={i} />
            ))}
          </div>

          {/* Converge from problem cards → solution label */}
          <ConvergeArrow color="orange" />

          {/* SOLUTION label */}
          <div className="flex justify-center mb-2">
            <SectionLabel label="Solution" color="green" />
          </div>

          {/* Tree lines to solution cards */}
          <TreeConnector flipped={false} />

          {/* Solution Cards */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {SOLUTION_CARDS.map((c, i) => (
              <SolutionCard key={c.title} card={c} image={SOLUTION_IMAGES[i]} icon={SOLUTION_ICONS[i]} index={i} />
            ))}
          </div>

          {/* ── Converging arrows from solution cards down to phone ── */}
          <ConvergeArrow color="emerald" />

          {/* "The App" label */}
          <motion.div initial={{ opacity: 0, scale: 0.85 }} whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }} transition={{ duration: 0.5 }}
            className="flex flex-col items-center gap-2 mb-6">
            <span className="text-xl font-bold text-white/50 tracking-widest uppercase text-sm">The App</span>
            <div className="h-px w-32 bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent" />
          </motion.div>

          {/* Mobile Mockup */}
          <div className="flex justify-center mb-4">
            <MobileAppMockup />
          </div>

          {/* Arrow from phone to CTA */}
          <div className="flex justify-center">
            <FlowArrow color="emerald" height={60} />
          </div>

          {/* Emotional CTA */}
          <div className="mt-4">
            <EmotionalCTA onDownload={() => setShowDownload(true)} buttonLabel={t('problem.downloadCta')} />
          </div>

        </div>
      </section>

      <div className="fixed inset-x-0 bottom-4 z-40 flex justify-center px-4 sm:hidden">
        <motion.button
          type="button"
          onClick={() => setShowDownload(true)}
          whileTap={{ scale: 0.98 }}
          className="w-full max-w-xs rounded-2xl px-5 py-3.5 text-center text-sm font-extrabold text-white shadow-2xl shadow-emerald-500/35"
          style={{ background: 'linear-gradient(135deg, #059669 0%, #10B981 50%, #34D399 100%)' }}
        >
          {t('problem.downloadCta')}
        </motion.button>
      </div>

      {/* Download Popup */}
      <AnimatePresence>
        {showDownload && <DownloadPopup onClose={() => setShowDownload(false)} />}
      </AnimatePresence>
    </>
  )
}
