'use client'

import React, { useEffect, useRef, useState, memo } from "react";

const modules = [
  {
    id: "student", label: "Students", innerOrbit: true,
    title: "Student Management", color: "#4299e1",
    desc: "Admissions, attendance, progress reports, ID cards & parent portal.",
    tag: "Core Module",
    emoji: "🎓",
  },
  {
    id: "teacher", label: "Teachers", innerOrbit: true,
    title: "Teacher Management", color: "#48bb78",
    desc: "Staff profiles, timetables, leave management & performance records.",
    tag: "HR Module",
    emoji: "📚",
  },
  {
    id: "fees", label: "Fees", innerOrbit: true,
    title: "Fees Management", color: "#ed8936",
    desc: "Fee structure, online payment, receipts, dues & scholarship tracking.",
    tag: "Finance",
    emoji: "💰",
  },
  {
    id: "admin", label: "Admin", innerOrbit: false,
    title: "Admin & Staff", color: "#9f7aea",
    desc: "School settings, roles, permissions, notice board & event calendar.",
    tag: "Admin Module",
    emoji: "🏫",
  },
  {
    id: "exam", label: "Exams", innerOrbit: false,
    title: "Exam & Results", color: "#f56565",
    desc: "Exam scheduling, marks entry, report cards & grade analytics.",
    tag: "Academic",
    emoji: "📝",
  },
  {
    id: "library", label: "Library", innerOrbit: false,
    title: "Library System", color: "#38b2ac",
    desc: "Book catalog, issue & return, fines, e-books & reading history.",
    tag: "Resources",
    emoji: "📖",
  },
];

const innerGroup = modules.filter((m) => m.innerOrbit);
const outerGroup = modules.filter((m) => !m.innerOrbit);

function getConfig(mod) {
  const isInner = mod.innerOrbit;
  const group = isInner ? innerGroup : outerGroup;
  const idx = group.indexOf(mod);
  const len = group.length;
  return {
    phase: (2 * Math.PI * idx) / len,
    radius: isInner ? 110 : 190,
    speed: isInner ? 0.55 : -0.38,
  };
}

const OrbitIcon = memo(({ mod, angle, onHover, onLeave }) => {
  const { radius } = getConfig(mod);
  // const x = Math.cos(angle) * radius;
  // const y = Math.sin(angle) * radius;
  const x = Math.round(Math.cos(angle) * radius);
const y = Math.round(Math.sin(angle) * radius);

  return (
    <div
      className="absolute top-1/2 left-1/2 cursor-pointer z-10 group"
      style={{
        width: 52,
        height: 52,
        transform: `translate(calc(${x}px - 50%), calc(${y}px - 50%))`,
      }}
      onMouseEnter={(e) => onHover(mod, e)}
      onMouseLeave={onLeave}
    >
      <div className="w-full h-full rounded-2xl bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm shadow-lg border border-gray-200/50 dark:border-gray-700/50 flex flex-col items-center justify-center gap-0.5 hover:scale-110 hover:shadow-xl transition-all duration-300 hover:border-transparent"
        style={{ boxShadow: `0 8px 20px -6px ${mod.color}40` }}>
        <span className="text-xl leading-none">{mod.emoji}</span>
        <span className="text-[9px] font-semibold text-gray-600 dark:text-gray-300 leading-none">{mod.label}</span>
      </div>
    </div>
  );
});
OrbitIcon.displayName = "OrbitIcon";

export default function ErpOrbit() {
  const [time, setTime] = useState(0);
  const [paused, setPaused] = useState(false);
  const [hoveredMod, setHoveredMod] = useState(null);
  const [dialogPos, setDialogPos] = useState({ top: 0, left: 0 });
  const stageRef = useRef(null);
  const rafRef = useRef(null);
  const lastTimeRef = useRef(null);
  const anglesRef = useRef({});

  useEffect(() => {
    modules.forEach((mod) => {
      const cfg = getConfig(mod);
      anglesRef.current[mod.id] = cfg.phase;
    });
  }, []);

  useEffect(() => {
    if (paused) return;
    const animate = (ts) => {
      if (lastTimeRef.current !== null) {
        const delta = (ts - lastTimeRef.current) / 1000;
        setTime((prev) => prev + delta);
      }
      lastTimeRef.current = ts;
      rafRef.current = requestAnimationFrame(animate);
    };
    rafRef.current = requestAnimationFrame(animate);
    return () => {
      cancelAnimationFrame(rafRef.current);
      lastTimeRef.current = null;
    };
  }, [paused]);

  const handleHover = (mod, e) => {
    setPaused(true);
    setHoveredMod(mod);
    if (stageRef.current) {
      const stageRect = stageRef.current.getBoundingClientRect();
      const iconRect = e.currentTarget.getBoundingClientRect();
      let left = iconRect.right - stageRect.left + 12;
      let top = iconRect.top - stageRect.top - 24;
      if (left + 220 > 460) left = iconRect.left - stageRect.left - 230;
      if (top < 0) top = 0;
      if (top + 180 > 460) top = 460 - 185;
      setDialogPos({ top, left });
    }
  };

  const handleLeave = () => {
    setPaused(false);
    setHoveredMod(null);
  };

  return (
    <div className="flex items-center justify-center w-full -mr-40">
      <div
        ref={stageRef}
        className="relative"
        style={{ width: 460, height: 460 }}
      >
        {/* Inner orbit ring - modern gradient with glow */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none"
          style={{
            width: 230,
            height: 230,
            background: "radial-gradient(circle, transparent 60%, rgba(66,153,225,0.08) 100%)",
            border: "1.5px solid rgba(66,153,225,0.5)",
            boxShadow: "0 0 12px rgba(66,153,225,0.2)",
          }}
        />

        {/* Outer orbit ring - modern gradient with glow */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none"
          style={{
            width: 390,
            height: 390,
            background: "radial-gradient(circle, transparent 70%, rgba(159,122,234,0.06) 100%)",
            border: "1.5px solid rgba(159,122,234,0.5)",
            boxShadow: "0 0 14px rgba(159,122,234,0.2)",
          }}
        />

        {/* Center node - modern glassmorphic with soft glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-md shadow-xl border border-gray-200/50 dark:border-gray-700/50 flex flex-col items-center justify-center z-10 gap-1.5"
          style={{ boxShadow: "0 10px 25px -5px rgba(0,0,0,0.1), 0 0 0 2px rgba(255,255,255,0.3)" }}>

          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" className="text-indigo-500 dark:text-indigo-400">
            <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
            <polyline points="9 22 9 12 15 12 15 22" />
          </svg>

          <span className="text-[11px] font-bold text-gray-700 dark:text-gray-200 tracking-wide">
            ERP
          </span>
        </div>

        {/* Orbiting icons */}
        {modules.map((mod) => {
          const cfg = getConfig(mod);
          const angle = time * cfg.speed + cfg.phase;
          return (
            <OrbitIcon
              key={mod.id}
              mod={mod}
              angle={angle}
              onHover={handleHover}
              onLeave={handleLeave}
            />
          );
        })}

        {/* Dialog popup - modern glass card with blur and border */}
        {hoveredMod && (
          <div
            className="absolute z-30 backdrop-blur-xl bg-white/95 dark:bg-gray-900/95 rounded-xl p-3.5 shadow-2xl border border-white/20 dark:border-gray-700/30"
            style={{ width: 210, top: dialogPos.top, left: dialogPos.left, boxShadow: `0 20px 35px -10px ${hoveredMod.color}60` }}
          >
            <p className="text-sm font-semibold text-gray-800 dark:text-white mb-1.5 flex items-center gap-1.5">
              <span>{hoveredMod.emoji}</span>
              <span>{hoveredMod.title}</span>
            </p>
            <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
              {hoveredMod.desc}
            </p>
            <span
              className="inline-block mt-2.5 text-[10px] font-semibold px-2 py-0.5 rounded-full"
              style={{ background: `${hoveredMod.color}20`, color: hoveredMod.color }}
            >
              {hoveredMod.tag}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}