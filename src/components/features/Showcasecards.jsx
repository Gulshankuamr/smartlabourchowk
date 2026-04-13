'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// ─── Mini Bar Chart (for Workflow card) ──────────────────────────────────────
function MiniBarChart({ bars, color = '#38bdf8' }) {
  return (
    <div className="flex items-end gap-[3px] h-10 mt-3">
      {bars.map((h, i) => (
        <div
          key={i}
          className="flex-1 rounded-sm transition-colors duration-200"
          style={{
            height: `${h}%`,
            background: `${color}44`,
          }}
        />
      ))}
    </div>
  )
}

// ─── Mini Progress Bar ────────────────────────────────────────────────────────
function MiniProgress({ value, from = '#fbbf24', to = '#34d399' }) {
  return (
    <div className="h-[7px] w-full rounded-full bg-white/10 overflow-hidden">
      <div
        className="h-full rounded-full"
        style={{ width: `${value}%`, background: `linear-gradient(90deg, ${from}, ${to})` }}
      />
    </div>
  )
}

// ─── Stat Box ─────────────────────────────────────────────────────────────────
function StatBox({ value, label, color }) {
  return (
    <div className="flex-1 rounded-xl bg-white/5 p-[9px_7px]">
      <p className={`text-[17px] font-bold ${color}`}>{value}</p>
      <p className="text-[9px] leading-tight text-slate-400 mt-0.5">{label}</p>
    </div>
  )
}

// ─── Row Item ─────────────────────────────────────────────────────────────────
function RowItem({ name, badge, badgeClass }) {
  return (
    <div className="flex items-center justify-between rounded-[9px] bg-white/[0.04] px-[9px] py-[6px] mt-[5px]">
      <p className="text-[10px] text-slate-300">{name}</p>
      <span className={`rounded-full px-2 py-0.5 text-[9px] font-semibold ${badgeClass}`}>{badge}</span>
    </div>
  )
}

// ─── Progress Row ─────────────────────────────────────────────────────────────
function ProgRow({ label, value, fillClass }) {
  return (
    <div className="mb-[7px]">
      <div className="flex justify-between text-[10px] mb-[3px]">
        <span className="text-slate-400">{label}</span>
        <span className="font-semibold text-white">{value}%</span>
      </div>
      <div className="h-[6px] w-full rounded-full bg-white/10 overflow-hidden">
        <div className={`h-full rounded-full opacity-80 ${fillClass}`} style={{ width: `${value}%` }} />
      </div>
    </div>
  )
}

// ─── Expanded Content per card ────────────────────────────────────────────────
function WorkflowExpanded() {
  return (
    <>
      <div className="flex gap-[10px] mb-[10px]">
        {[
          { val: '3.2K', label: 'Tasks Today', color: 'text-sky-400' },
          { val: '98%', label: 'Success Rate', color: 'text-emerald-400' },
          { val: '12', label: 'Active Flows', color: 'text-amber-400' },
        ].map((s) => (
          <div key={s.label} className="flex-1 bg-white/5 rounded-xl p-[12px_10px] text-center">
            <p className={`text-[22px] font-bold ${s.color}`}>{s.val}</p>
            <p className="text-[9px] text-slate-400 mt-[3px]">{s.label}</p>
          </div>
        ))}
      </div>
      <p className="text-[10px] font-semibold uppercase tracking-widest text-slate-500 mt-[14px] mb-[6px]">Active Workflows</p>
      {[
        { name: 'Auto Fee Reminders', badge: 'Running', cls: 'bg-sky-500/20 text-sky-300' },
        { name: 'Timetable Generator', badge: 'Running', cls: 'bg-sky-500/20 text-sky-300' },
        { name: 'Attendance Reports', badge: 'Scheduled', cls: 'bg-emerald-500/20 text-emerald-300' },
        { name: 'Exam Notifications', badge: 'Paused', cls: 'bg-amber-500/20 text-amber-300' },
      ].map((r) => <RowItem key={r.name} name={r.name} badge={r.badge} badgeClass={r.cls} />)}
      <p className="text-[10px] font-semibold uppercase tracking-widest text-slate-500 mt-[14px] mb-[6px]">Automation Types</p>
      <div className="flex flex-wrap gap-[4px]">
        {['Fee Reminders', 'Attendance', 'Timetables', 'Report Cards', 'SMS Alerts', 'Leave Approvals'].map((t) => (
          <span key={t} className="rounded-[6px] bg-sky-500/10 text-sky-300 px-[8px] py-[2px] text-[10px] font-semibold">{t}</span>
        ))}
      </div>
    </>
  )
}

function AIExpanded() {
  return (
    <>
      <div className="flex gap-[10px] mb-[10px]">
        {[
          { val: '5', label: 'Active Modules', color: 'text-sky-400' },
          { val: '94.7%', label: 'Avg Accuracy', color: 'text-emerald-400' },
          { val: '1.2K', label: 'Predictions Today', color: 'text-amber-400' },
        ].map((s) => (
          <div key={s.label} className="flex-1 bg-white/5 rounded-xl p-[12px_10px] text-center">
            <p className={`text-[22px] font-bold ${s.color}`}>{s.val}</p>
            <p className="text-[9px] text-slate-400 mt-[3px]">{s.label}</p>
          </div>
        ))}
      </div>
      <p className="text-[10px] font-semibold uppercase tracking-widest text-slate-500 mt-[14px] mb-[6px]">Module Performance</p>
      <ProgRow label="Admission Prediction" value={97} fillClass="bg-sky-400" />
      <ProgRow label="Fee Default Risk" value={91} fillClass="bg-amber-400" />
      <ProgRow label="HR Analytics" value={96} fillClass="bg-emerald-400" />
      <ProgRow label="Student Performance" value={93} fillClass="bg-sky-400" />
      <p className="text-[10px] font-semibold uppercase tracking-widest text-slate-500 mt-[14px] mb-[6px]">AI Capabilities</p>
      <div className="flex flex-wrap gap-[4px]">
        {['Predictive Analytics', 'NLP Reports', 'Risk Scoring', 'Auto Grading', 'Anomaly Detection'].map((t) => (
          <span key={t} className="rounded-[6px] bg-purple-500/10 text-purple-300 px-[8px] py-[2px] text-[10px] font-semibold">{t}</span>
        ))}
      </div>
    </>
  )
}

function AnalyticsExpanded() {
  return (
    <>
      <div className="flex gap-[10px] mb-[10px]">
        {[
          { val: '2,480', label: 'Students Tracked', color: 'text-sky-400' },
          { val: '91%', label: 'Attendance', color: 'text-emerald-400' },
          { val: '96%', label: 'Pass Rate', color: 'text-amber-400' },
        ].map((s) => (
          <div key={s.label} className="flex-1 bg-white/5 rounded-xl p-[12px_10px] text-center">
            <p className={`text-[22px] font-bold ${s.color}`}>{s.val}</p>
            <p className="text-[9px] text-slate-400 mt-[3px]">{s.label}</p>
          </div>
        ))}
      </div>
      <p className="text-[10px] font-semibold uppercase tracking-widest text-slate-500 mt-[14px] mb-[6px]">Live Metrics</p>
      <ProgRow label="Attendance Rate" value={91} fillClass="bg-sky-400" />
      <ProgRow label="Fee Collection" value={84} fillClass="bg-emerald-400" />
      <ProgRow label="Exam Pass Rate" value={96} fillClass="bg-amber-400" />
      <ProgRow label="Staff Productivity" value={88} fillClass="bg-sky-400" />
      <p className="text-[10px] font-semibold uppercase tracking-widest text-slate-500 mt-[14px] mb-[6px]">Dashboard Views</p>
      <div className="flex flex-wrap gap-[4px]">
        {['Academic', 'Finance', 'Attendance', 'Staff', 'Transport', 'Exam Results'].map((t) => (
          <span key={t} className="rounded-[6px] bg-amber-500/10 text-amber-300 px-[8px] py-[2px] text-[10px] font-semibold">{t}</span>
        ))}
      </div>
    </>
  )
}

// ─── Card data ────────────────────────────────────────────────────────────────
const CARDS = [
  {
    id: 'workflow',
    variant: 'left',
    delay: 900,
    title: 'Workflow Automation',
    desc: 'Automate timetables, attendance, fee reminders & reports.',
    expandedTitle: 'Workflow Automation',
    expandedSub: 'Automate timetables, attendance, fee reminders & reports',
    ExpandedBody: WorkflowExpanded,
    preview: (
      <>
        <div className="mb-3 flex items-center justify-between">
          <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">Workflow Automation</p>
          <span className="rounded-full bg-sky-500/20 px-2 py-0.5 text-[10px] font-semibold text-sky-300">Active</span>
        </div>
        <div className="flex gap-2">
          <StatBox value="12" label="Workflows Running" color="text-sky-400" />
          <StatBox value="98%" label="Auto-processed" color="text-emerald-400" />
          <StatBox value="3.2K" label="Tasks Today" color="text-amber-400" />
        </div>
        <MiniBarChart bars={[45, 70, 52, 85, 60, 92, 75]} color="#38bdf8" />
        <p className="mt-[5px] text-[10px] text-slate-500">Tasks automated — last 7 days</p>
      </>
    ),
  },
  {
    id: 'ai',
    variant: 'mid',
    delay: 1000,
    title: 'Smart AI Modules',
    desc: 'Manage admissions, academics & HR in one place.',
    expandedTitle: 'Smart AI Modules',
    expandedSub: 'Manage admissions, academics & HR with intelligent automation',
    ExpandedBody: AIExpanded,
    preview: (
      <>
        <div className="mb-3 flex items-center gap-[9px]">
          <div className="w-8 h-8 rounded-[10px] bg-sky-500/20 flex items-center justify-center flex-shrink-0">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#38bdf8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="3" /><path d="M12 2v3m0 14v3M2 12h3m14 0h3M5.6 5.6l2.1 2.1m8.6 8.6 2.1 2.1m0-12.8-2.1 2.1M7.7 16.3l-2.1 2.1" />
            </svg>
          </div>
          <div>
            <p className="text-[13px] font-semibold text-white">Smart AI Modules</p>
            <p className="text-[10px] text-slate-400">5 modules active</p>
          </div>
        </div>
        <div className="flex items-center justify-between text-[10px] text-slate-400 mb-1">
          <span>AI Accuracy</span>
          <span className="font-bold text-emerald-400">94.7% avg</span>
        </div>
        <MiniProgress value={94.7} />
        <p className="text-[10px] text-slate-500 mt-1 mb-[10px]">Across all active modules</p>
        <RowItem name="Admission Prediction" badge="97%" badgeClass="bg-sky-500/20 text-sky-300" />
        <RowItem name="Fee Default Risk" badge="91%" badgeClass="bg-amber-500/20 text-amber-300" />
        <RowItem name="HR Analytics" badge="96%" badgeClass="bg-emerald-500/20 text-emerald-300" />
      </>
    ),
  },
  {
    id: 'analytics',
    variant: 'right',
    delay: 1100,
    title: 'Real-Time Analytics',
    desc: 'Turn school data into actionable decisions instantly.',
    expandedTitle: 'Real-Time Analytics',
    expandedSub: 'Turn school data into actionable decisions instantly',
    ExpandedBody: AnalyticsExpanded,
    preview: (
      <>
        <div className="mb-3 flex items-center gap-[9px]">
          <div className="w-8 h-8 rounded-[10px] bg-amber-500/20 flex items-center justify-center flex-shrink-0">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#fbbf24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
            </svg>
          </div>
          <div>
            <p className="text-[13px] font-semibold text-white">Real-Time Analytics</p>
            <p className="text-[10px] text-slate-400">All Departments</p>
          </div>
          <span className="ml-auto rounded-full bg-emerald-500/20 px-2 py-0.5 text-[9px] font-semibold text-emerald-400">Live</span>
        </div>
        <ProgRow label="Attendance Rate" value={91} fillClass="bg-sky-400" />
        <ProgRow label="Fee Collection" value={84} fillClass="bg-emerald-400" />
        <ProgRow label="Exam Pass Rate" value={96} fillClass="bg-amber-400" />
        <p className="text-[10px] text-slate-500 mt-2">Updated every 5 min · 2,480 students tracked</p>
      </>
    ),
  },
]

// ─── Single Showcase Card ─────────────────────────────────────────────────────
function DashShowcaseCard({ card, onOpen, visible }) {
  const baseTransform =
    card.variant === 'mid'
      ? '-translate-y-2.5'
      : card.variant === 'left'
      ? '-rotate-[5deg] translate-y-4'
      : 'rotate-[5deg] translate-y-4'

  return (
    <div
      onClick={() => onOpen(card.id)}
      className={`
        w-[215px] rounded-2xl p-[18px] backdrop-blur-md cursor-pointer
        bg-white/5 border transition-all duration-[450ms]
        hover:-translate-y-[14px] hover:rotate-0 hover:bg-[rgba(240,151,10,0.1)]
        hover:border-[#F0970A] hover:shadow-[0_20px_50px_rgba(240,151,10,0.15)]
        ${card.variant === 'mid' ? 'border-[rgba(240,151,10,0.25)]' : 'border-white/10'}
        ${visible ? baseTransform : 'translate-y-8 opacity-0'}
      `}
      style={{ transition: 'all 0.45s cubic-bezier(0.34,1.56,0.64,1)' }}
    >
      {card.preview}
    </div>
  )
}

// ─── Expanded Modal ───────────────────────────────────────────────────────────
function ExpandedModal({ card, onClose }) {
  const { ExpandedBody } = card
  return (
    <AnimatePresence>
      {card && (
        <motion.div
          className="fixed inset-0 z-[999] flex items-center justify-center"
          style={{ background: 'rgba(0,0,0,0.72)', backdropFilter: 'blur(8px)' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={onClose}
        >
          <motion.div
            className="relative w-[400px] max-w-[95vw] rounded-[22px] border border-white/15 p-6 shadow-[0_40px_80px_rgba(0,0,0,0.7)]"
            style={{ background: 'rgba(10,20,35,0.97)' }}
            initial={{ scale: 0.65, y: 50, rotateX: 12, opacity: 0 }}
            animate={{ scale: 1, y: 0, rotateX: 0, opacity: 1 }}
            exit={{ scale: 0.65, y: 50, rotateX: 12, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 340, damping: 28 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-7 h-7 rounded-full flex items-center justify-center text-white/60 hover:bg-white/15 transition-colors text-[13px]"
              style={{ background: 'rgba(255,255,255,0.07)', border: 'none', cursor: 'pointer' }}
            >
              ✕
            </button>

            {/* Header */}
            <p className="text-[16px] font-bold text-white mb-1">{card.expandedTitle}</p>
            <p className="text-[11px] text-slate-400 mb-4">{card.expandedSub}</p>

            {/* Body */}
            <ExpandedBody />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

// ─── Main Export — drop-in replacement for the 3-card div ────────────────────
export default function ShowcaseCardsSection() {
  const [visibleMap, setVisibleMap] = useState({})
  const [openId, setOpenId] = useState(null)

  useEffect(() => {
    CARDS.forEach((c) => {
      const t = setTimeout(() => {
        setVisibleMap((prev) => ({ ...prev, [c.id]: true }))
      }, c.delay)
      return () => clearTimeout(t)
    })
  }, [])

  const openCard = CARDS.find((c) => c.id === openId)

  return (
    <>
      {/* ── Cards Row — replaces your existing div ── */}
      <div className="flex gap-4 justify-center flex-wrap mt-10" style={{ perspective: 900 }}>
        {CARDS.map((card) => (
          <DashShowcaseCard
            key={card.id}
            card={card}
            visible={!!visibleMap[card.id]}
            onOpen={setOpenId}
          />
        ))}
      </div>

      {/* ── Expanded Modal (portals via framer AnimatePresence) ── */}
      {openCard && <ExpandedModal card={openCard} onClose={() => setOpenId(null)} />}
    </>
  )
}