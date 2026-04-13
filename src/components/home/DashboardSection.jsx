"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  ShieldCheck,
  GraduationCap,
  Wallet,
  UserCircle,
  Monitor,
  Rocket,
  Target,
  Trophy,
  ArrowRight,
  ChevronRight,
} from "lucide-react";

// ─── THEME TOKENS ────────────────────────────────────────────────
const T = {
  bg: "#F8F9FC",
  navy: "#1E4E6D",
  navyDark: "#163A52",
  orange: "#F0970A",
  orangeLight: "#FEF3E2",
  orangeBorder: "#F0970A",
  white: "#FFFFFF",
  slate: "#5A6880",
  muted: "#8A96A8",
  border: "#E4E9F0",
};

// ─── SERVICES DATA ────────────────────────────────────────────────
const services = [
  {
    id: "001",
    title: "Hassle-free School Management",
    desc: "Easy-to-use interface with 40+ modules covering every school operation from admissions to alumni.",
    icon: Monitor,
    accent: "#EEF4FB",
    tag: "40+ Modules",
  },
  {
    id: "002",
    title: "Student Competition Platform",
    desc: "Ground zero platform where unknown students compete on activities conducted by ConnectSkool group.",
    icon: Rocket,
    accent: "#FFF4E5",
    tag: "Live Contests",
  },
  {
    id: "003",
    title: "Career Goal Tracking",
    desc: "Career Interest is the final destination. We prepare the circumstances for students to build their path smartly.",
    icon: Target,
    accent: "#EDFBF4",
    tag: "Career Mapping",
  },
  {
    id: "004",
    title: "Achievement & Awards",
    desc: "Recognise student milestones with digital certificates, leaderboards, and performance reports.",
    icon: Trophy,
    accent: "#F3EFFE",
    tag: "Recognition",
  },
];

// ─── DASHBOARD ROLES DATA ─────────────────────────────────────────
const roles = [
  {
    title: "Admin Dashboard",
    desc: "Full school control with real-time analytics, staff management, and system-wide configuration tools.",
    icon: ShieldCheck,
    color: "#1E4E6D",
    lightBg: "#EEF4FB",
  },
  {
    title: "Teacher Panel",
    desc: "Manage classes, record attendance, assign marks, and track student progress from one clean view.",
    icon: GraduationCap,
    color: "#0D7A5F",
    lightBg: "#EDFBF4",
  },
  {
    title: "Accountant View",
    desc: "Fee tracking, expense reports, salary management and complete financial overview at a glance.",
    icon: Wallet,
    color: "#B86C08",
    lightBg: "#FEF3E2",
  },
  {
    title: "Student Portal",
    desc: "View results, check attendance, submit assignments and stay updated with school announcements.",
    icon: UserCircle,
    color: "#6941C6",
    lightBg: "#F3EFFE",
  },
];

// ─── SERVICE CARD ─────────────────────────────────────────────────
function ServiceCard({ service, index }) {
  const [hovered, setHovered] = useState(false);
  const Icon = service.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: index * 0.09, ease: [0.22, 1, 0.36, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: T.white,
        border: `2px solid ${hovered ? T.orange : T.border}`,
        borderRadius: 20,
        padding: "32px 28px",
        cursor: "pointer",
        transition: "border-color 0.22s, transform 0.22s, box-shadow 0.22s",
        transform: hovered ? "translateY(-6px)" : "translateY(0)",
        boxShadow: hovered
          ? "0 16px 48px rgba(240,151,10,0.12)"
          : "0 2px 12px rgba(30,78,109,0.06)",
        display: "flex",
        flexDirection: "column",
        gap: 0,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Number badge */}
      <span
        style={{
          fontFamily: "monospace",
          fontSize: 11,
          fontWeight: 600,
          color: hovered ? T.orange : T.muted,
          letterSpacing: 2,
          marginBottom: 20,
          transition: "color 0.22s",
        }}
      >
        ( {service.id} )
      </span>

      {/* Icon */}
      <div
        style={{
          width: 56,
          height: 56,
          borderRadius: 14,
          background: hovered ? T.orange : service.accent,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: 22,
          transition: "background 0.22s",
        }}
      >
        <Icon
          size={26}
          color={hovered ? "#fff" : T.navy}
          style={{ transition: "color 0.22s" }}
        />
      </div>

      {/* Title */}
      <h3
        style={{
          fontSize: 17,
          fontWeight: 700,
          color: hovered ? T.orange : T.navy,
          marginBottom: 10,
          lineHeight: 1.35,
          transition: "color 0.22s",
        }}
      >
        {service.title}
      </h3>

      {/* Desc */}
      <p
        style={{
          fontSize: 13.5,
          color: T.slate,
          lineHeight: 1.7,
          marginBottom: 20,
          flex: 1,
        }}
      >
        {service.desc}
      </p>

      {/* Tag + Arrow */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <span
          style={{
            fontSize: 11.5,
            fontWeight: 600,
            background: hovered ? T.orange : T.orangeLight,
            color: hovered ? "#fff" : "#B86C08",
            padding: "4px 12px",
            borderRadius: 20,
            transition: "background 0.22s, color 0.22s",
          }}
        >
          {service.tag}
        </span>
        <ArrowRight
          size={16}
          color={hovered ? T.orange : T.muted}
          style={{ transition: "color 0.22s, transform 0.22s", transform: hovered ? "translateX(3px)" : "translateX(0)" }}
        />
      </div>
    </motion.div>
  );
}

// ─── DASHBOARD ROLE CARD ──────────────────────────────────────────
function RoleCard({ role, index, active, onClick }) {
  const Icon = role.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      onClick={onClick}
      style={{
        background: active ? T.navy : T.white,
        border: `2px solid ${active ? T.orange : T.border}`,
        borderRadius: 20,
        padding: "28px 24px",
        cursor: "pointer",
        transition: "all 0.25s ease",
        transform: active ? "translateY(-4px)" : "translateY(0)",
        boxShadow: active
          ? "0 12px 40px rgba(30,78,109,0.18)"
          : "0 2px 12px rgba(30,78,109,0.05)",
        textAlign: "center",
      }}
    >
      <div
        style={{
          width: 60,
          height: 60,
          borderRadius: 16,
          background: active ? T.orange : role.lightBg,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: "0 auto 18px",
          transition: "background 0.25s",
        }}
      >
        <Icon size={26} color={active ? "#fff" : role.color} />
      </div>
      <h3
        style={{
          fontSize: 15,
          fontWeight: 700,
          color: active ? "#fff" : T.navy,
          marginBottom: 10,
          transition: "color 0.25s",
        }}
      >
        {role.title}
      </h3>
      <p
        style={{
          fontSize: 13,
          color: active ? "rgba(255,255,255,0.72)" : T.slate,
          lineHeight: 1.65,
          transition: "color 0.25s",
        }}
      >
        {role.desc}
      </p>
      {active && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          style={{
            marginTop: 16,
            display: "inline-flex",
            alignItems: "center",
            gap: 4,
            fontSize: 12,
            fontWeight: 600,
            color: T.orange,
            background: "rgba(240,151,10,0.15)",
            padding: "4px 12px",
            borderRadius: 20,
          }}
        >
          Active <ChevronRight size={12} />
        </motion.div>
      )}
    </motion.div>
  );
}

// ─── SECTION LABEL ────────────────────────────────────────────────
function SectionLabel({ text }) {
  return (
    <p
      style={{
        fontSize: 11.5,
        fontWeight: 700,
        letterSpacing: "2.5px",
        textTransform: "uppercase",
        color: T.orange,
        marginBottom: 12,
      }}
    >
      {text}
    </p>
  );
}

// ─── SERVICES SECTION ─────────────────────────────────────────────
function ServicesSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <section
      ref={ref}
      style={{
        background: T.bg,
        padding: "80px 24px",
      }}
    >
      <div style={{ maxWidth: 1140, margin: "0 auto" }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          style={{ textAlign: "center", marginBottom: 56 }}
        >
          <SectionLabel text="Our Services" />
          <h2
            style={{
              fontSize: "clamp(24px, 4vw, 36px)",
              fontWeight: 800,
              color: T.navy,
              lineHeight: 1.25,
              maxWidth: 640,
              margin: "0 auto 14px",
            }}
          >
            ConnectSkool: All In One, Software Solution for Every School!
          </h2>
          <p style={{ fontSize: 15, color: T.slate, maxWidth: 520, margin: "0 auto" }}>
            One powerful platform covering every corner of school management — from classrooms to careers.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: 24,
          }}
        >
          {services.map((s, i) => (
            <ServiceCard key={s.id} service={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── DASHBOARD SECTION ────────────────────────────────────────────
function DashboardSection() {
  const [activeRole, setActiveRole] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <section
      ref={ref}
      style={{
        background: T.white,
        padding: "80px 24px",
        borderTop: `1px solid ${T.border}`,
      }}
    >
      <div style={{ maxWidth: 1140, margin: "0 auto" }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          style={{ textAlign: "center", marginBottom: 56 }}
        >
          <SectionLabel text="Role-Based Dashboards" />
          <h2
            style={{
              fontSize: "clamp(24px, 4vw, 34px)",
              fontWeight: 800,
              color: T.navy,
              lineHeight: 1.25,
              maxWidth: 560,
              margin: "0 auto 14px",
            }}
          >
            Tailored Experience for{" "}
            <span style={{ color: T.orange }}>Every User</span>
          </h2>
          <p style={{ fontSize: 15, color: T.slate, maxWidth: 480, margin: "0 auto" }}>
            Each role gets their own smart dashboard — no clutter, just the tools they need.
          </p>
        </motion.div>

        {/* Role Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: 22,
          }}
        >
          {roles.map((role, i) => (
            <RoleCard
              key={role.title}
              role={role}
              index={i}
              active={activeRole === i}
              onClick={() => setActiveRole(i)}
            />
          ))}
        </div>

        {/* Bottom CTA strip */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          style={{
            marginTop: 48,
            background: T.navy,
            borderRadius: 20,
            padding: "32px 36px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 20,
          }}
        >
          <div>
            <p style={{ fontSize: 13, color: "rgba(255,255,255,0.6)", marginBottom: 4 }}>
              Ready to transform your school?
            </p>
            <h3 style={{ fontSize: 20, fontWeight: 700, color: "#fff" }}>
              Get started with ConnectSkool today
            </h3>
          </div>
          <button
            style={{
              background: T.orange,
              color: "#fff",
              border: "none",
              borderRadius: 12,
              padding: "12px 28px",
              fontSize: 14,
              fontWeight: 700,
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: 8,
              whiteSpace: "nowrap",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "#d4830a")}
            onMouseLeave={(e) => (e.currentTarget.style.background = T.orange)}
          >
            Request a Demo <ArrowRight size={16} />
          </button>
        </motion.div>
      </div>
    </section>
  );
}

// ─── DEFAULT EXPORT (both sections combined) ──────────────────────
export default function ConnectSkoolSections() {
  return (
    <main style={{ background: T.bg, fontFamily: "'Segoe UI', system-ui, sans-serif" }}>
      <ServicesSection />
      <DashboardSection />
    </main>
  );
}