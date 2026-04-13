


import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

// ─── Color tokens ─────────────────────────────────────────────────────────────
const C = {
  pageBg: "#F8F9FC",
  sectionDark: "#1E4E6D",
  orange: "#F0970A",
  orangeLight: "rgba(240,151,10,0.15)",
  white: "#ffffff",
  cardGlass: "rgba(255,255,255,0.07)",
  cardGlassBorder: "rgba(255,255,255,0.12)",
  textWhite: "#ffffff",
  textMuted: "rgba(255,255,255,0.5)",
  textBody: "rgba(255,255,255,0.88)",
};

// ─── Data ─────────────────────────────────────────────────────────────────────
const testimonials = [
  { id: 0,  name: "Alex",      role: "CEO, TechCorp",        img: "https://i.pravatar.cc/150?img=1",  text: "My favorite solution in the market. We work 5× faster with COMPANY." },
  { id: 1,  name: "Dan",       role: "CTO, SecureNet",       img: "https://i.pravatar.cc/150?img=2",  text: "I'm confident my data is safe with COMPANY. Can't say that about others." },
  { id: 2,  name: "Stephanie", role: "COO, InnovateCo",      img: "https://i.pravatar.cc/150?img=3",  text: "We were lost before we found COMPANY. Can't thank you guys enough!" },
  { id: 3,  name: "Marie",     role: "CFO, FuturePlanning",  img: "https://i.pravatar.cc/150?img=4",  text: "COMPANY makes planning for the future seamless. Can't recommend enough!" },
  { id: 4,  name: "Andre",     role: "Head of Design",       img: "https://i.pravatar.cc/150?img=5",  text: "If I could give 11 stars, I'd give 12. Absolutely incredible product." },
  { id: 5,  name: "Jeremy",    role: "Product Manager",      img: "https://i.pravatar.cc/150?img=6",  text: "SO HAPPY WE FOUND YOU GUYS! I'd bet you've saved me 100 hours so far." },
  { id: 6,  name: "Pam",       role: "Marketing Director",   img: "https://i.pravatar.cc/150?img=7",  text: "Took some convincing, but now that we're on COMPANY, never going back." },
  { id: 7,  name: "Daniel",    role: "Data Scientist",       img: "https://i.pravatar.cc/150?img=8",  text: "I'd be lost without COMPANY's analytics. The ROI is EASILY 100× for us." },
  { id: 8,  name: "Fernando",  role: "UX Designer",          img: "https://i.pravatar.cc/150?img=9",  text: "It's just the best. Period. Nothing else comes close." },
  { id: 9,  name: "Andy",      role: "DevOps, CloudMasters", img: "https://i.pravatar.cc/150?img=10", text: "I switched 5 years ago and never looked back. Unmatched reliability." },
  { id: 10, name: "Pete",      role: "Sales Director",       img: "https://i.pravatar.cc/150?img=11", text: "I've been searching for a solution like COMPANY for YEARS. So glad!" },
  { id: 11, name: "Marina",    role: "HR Manager",           img: "https://i.pravatar.cc/150?img=12", text: "So simple and intuitive, we got the team up to speed in 10 minutes." },
];

// ─── 5-Star Row ───────────────────────────────────────────────────────────────
function Stars() {
  return (
    <div style={{ display: "flex", gap: 2, marginBottom: 12 }}>
      {[...Array(5)].map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill={C.orange}>
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

// ─── Single Card ──────────────────────────────────────────────────────────────
function Card({ item, position, onCardClick }) {
  const [hovered, setHovered] = useState(false);
  const isActive = position === 0;

  const bg    = isActive ? C.white : hovered ? C.orangeLight : C.cardGlass;
  const bdr   = isActive ? `2px solid ${C.orange}` : hovered ? `1.5px solid ${C.orange}` : `1.5px solid ${C.cardGlassBorder}`;
  const quoteColor  = isActive ? "#1E4E6D" : C.textBody;
  const authorColor = isActive ? "#777" : C.textMuted;
  const opacity     = Math.abs(position) > 1 ? 0 : Math.abs(position) === 1 ? 0.72 : 1;

  return (
    <motion.div
      onClick={() => onCardClick(position)}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      animate={{
        x: `${position * 300}px`,
        y: isActive ? -14 : 0,
        scale: isActive ? 1.04 : Math.abs(position) === 1 ? 0.93 : 0.86,
        opacity,
        zIndex: isActive ? 10 : Math.abs(position) === 1 ? 5 : 1,
      }}
      transition={{ type: "spring", stiffness: 270, damping: 28 }}
      style={{
        position: "absolute",
        left: "50%",
        top: "50%",
        translateX: "-50%",
        translateY: "-50%",
        width: 288,
        background: bg,
        border: bdr,
        borderRadius: 16,
        padding: "28px 24px 24px",
        cursor: isActive ? "default" : "pointer",
        boxShadow: isActive ? `0 16px 48px rgba(240,151,10,0.16)` : "none",
        backdropFilter: "blur(6px)",
        WebkitBackdropFilter: "blur(6px)",
        userSelect: "none",
      }}
    >
      <img
        src={item.img}
        alt={item.name}
        style={{
          width: 46, height: 46, borderRadius: "50%",
          objectFit: "cover", marginBottom: 14,
          border: isActive ? `2px solid ${C.orange}` : "2px solid rgba(255,255,255,0.2)",
        }}
      />
      <Stars />
      <p style={{ color: quoteColor, fontSize: 13.5, lineHeight: 1.65, marginBottom: 20, minHeight: 72 }}>
        "{item.text}"
      </p>
      <p style={{ color: authorColor, fontSize: 12, fontStyle: "italic" }}>
        — {item.name}, {item.role}
      </p>
    </motion.div>
  );
}

// ─── Dot Indicators ──────────────────────────────────────────────────────────
function Dots({ total, current }) {
  return (
    <div style={{ display: "flex", gap: 7, justifyContent: "center", marginTop: 20 }}>
      {[...Array(total)].map((_, i) => (
        <div key={i} style={{
          width: i === current ? 22 : 7, height: 7, borderRadius: 4,
          background: i === current ? C.orange : "rgba(255,255,255,0.25)",
          transition: "all 0.25s ease",
        }} />
      ))}
    </div>
  );
}

// ─── Nav Button ───────────────────────────────────────────────────────────────
function NavBtn({ onClick, children, label }) {
  const [hovered, setHovered] = useState(false);
  return (
    <motion.button
      whileTap={{ scale: 0.9 }}
      onClick={onClick}
      aria-label={label}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        width: 46, height: 46, borderRadius: "50%",
        border: hovered ? `1.5px solid ${C.orange}` : "1.5px solid rgba(255,255,255,0.25)",
        background: hovered ? C.orange : "transparent",
        color: C.white, cursor: "pointer",
        display: "flex", alignItems: "center", justifyContent: "center",
        transition: "all .18s", outline: "none",
      }}
    >
      {children}
    </motion.button>
  );
}

// ─── Main Export ──────────────────────────────────────────────────────────────
export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const total = testimonials.length;

  const prev = () => setCurrent((c) => (c - 1 + total) % total);
  const next = () => setCurrent((c) => (c + 1) % total);

  const handleCardClick = (position) => {
    if (position !== 0) setCurrent((c) => (c + position + total) % total);
  };

  const allVisible = [-2, -1, 0, 1, 2].map((offset) => ({
    item: testimonials[(current + offset + total) % total],
    position: offset,
    key: (current + offset + total) % total,
  }));

  return (
    // Page BG → #F8F9FC
    <section
      style={{ backgroundColor: C.pageBg, minHeight: "100vh" }}
      className="w-full flex items-center justify-center py-20 px-4"
    >
      {/* Dark section → #1E4E6D */}
      <div style={{
        backgroundColor: C.sectionDark,
        borderRadius: 24,
        padding: "60px 24px 48px",
        width: "100%",
        maxWidth: 1080,
      }}>

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{ textAlign: "center", marginBottom: 48 }}
        >
          <span style={{
            display: "inline-block",
            background: C.orangeLight,
            color: C.orange,
            fontSize: 11, fontWeight: 700,
            letterSpacing: "0.12em", textTransform: "uppercase",
            padding: "5px 16px", borderRadius: 20, marginBottom: 14,
          }}>
            ★ Testimonials
          </span>
          <h2 style={{
            color: C.white,
            fontSize: "clamp(22px, 4vw, 36px)",
            fontWeight: 700, lineHeight: 1.2, marginBottom: 10,
          }}>
            Loved by teams worldwide
          </h2>
          <p style={{ color: C.textMuted, fontSize: 15 }}>
            Hear from people who use COMPANY every single day.
          </p>
        </motion.div>

        {/* Cards carousel */}
        <div style={{ position: "relative", height: 380, overflow: "hidden" }}>
          {allVisible.map(({ item, position, key }) => (
            <Card key={key} item={item} position={position} onCardClick={handleCardClick} />
          ))}
        </div>

        {/* Nav buttons */}
        <div style={{ display: "flex", justifyContent: "center", gap: 12, marginTop: 32 }}>
          <NavBtn onClick={prev} label="Previous"><ChevronLeft size={20} /></NavBtn>
          <NavBtn onClick={next} label="Next"><ChevronRight size={20} /></NavBtn>
        </div>

        {/* Dots */}
        <Dots total={total} current={current} />
      </div>
    </section>
  );
}