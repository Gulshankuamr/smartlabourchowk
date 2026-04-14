"use client";

import { useState, useRef, useEffect } from "react";

// ─────────────────────────────────────────────────────────
//  CONFIG — yahan apni details badlo
// ─────────────────────────────────────────────────────────
const PHONE   = "91923678866";             // country code + number, no +
const MESSAGE = "Hi ConnectSkool, I want to know more about your School ERP";
const GIF_SRC = "/whatsappoopsticky.gif";   // apni GIF ka path (public folder mein rakhna)

const CHAT_MESSAGES = [
  "👋 Welcome to *ConnectSkool ERP*!",
  "Manage *Admissions, Fees, Attendance & Results* — all in one smart platform. 🏫",
  "Get a *FREE Demo* for your school today. Our team is ready to help! 📞",
  "Parents, Teachers & Admins — *sab ek jagah connected*. Let's talk! 🚀",
];
// ─────────────────────────────────────────────────────────

const WA_URL = `https://wa.me/${PHONE}?text=${encodeURIComponent(MESSAGE)}`;

// WhatsApp SVG icon
function WaIcon({ size = 24 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="white" style={{ display: "block" }}>
      <path d="M20.52 3.48A11.9 11.9 0 0 0 12 0C5.37 0 0 5.37 0 12c0 2.12.55 4.17 1.6 5.98L0 24l6.18-1.62A11.93 11.93 0 0 0 12 24c6.63 0 12-5.37 12-12 0-3.2-1.25-6.22-3.48-8.52zm-8.52 18.4a9.88 9.88 0 0 1-5.05-1.38l-.36-.21-3.67.96.98-3.59-.24-.37A9.86 9.86 0 0 1 2.13 12c0-5.45 4.43-9.88 9.87-9.88 2.64 0 5.12 1.03 6.98 2.89A9.82 9.82 0 0 1 21.88 12c0 5.44-4.43 9.88-9.88 9.88zm5.42-7.4c-.3-.15-1.76-.87-2.03-.97-.28-.1-.48-.15-.68.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.47-.89-.79-1.48-1.76-1.66-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.68-1.63-.93-2.24-.24-.59-.49-.51-.68-.52H7.2c-.2 0-.5.07-.77.37-.26.3-1 .98-1 2.4s1.02 2.78 1.17 2.98c.14.2 2.01 3.07 4.87 4.3.68.3 1.21.47 1.62.6.68.22 1.3.19 1.79.11.54-.08 1.76-.72 2-1.41.25-.69.25-1.28.17-1.41-.07-.12-.27-.19-.57-.34z" />
    </svg>
  );
}

// Parse *bold* markdown in messages
function BubbleText({ text }) {
  const parts = text.split(/\*(.*?)\*/g);
  return (
    <p style={{ fontSize: 13, color: "#111", lineHeight: 1.5, margin: 0 }}>
      {parts.map((p, i) =>
        i % 2 === 1 ? (
          <strong key={i} style={{ color: "#075E54", fontWeight: 600 }}>
            {p}
          </strong>
        ) : (
          p
        )
      )}
    </p>
  );
}

// Animated typing dots
function TypingDots() {
  return (
    <div
      style={{
        background: "#fff",
        borderRadius: "8px 8px 8px 2px",
        padding: "10px 14px",
        alignSelf: "flex-start",
        display: "flex",
        gap: 5,
        alignItems: "center",
      }}
    >
      {[0, 1, 2].map((i) => (
        <span
          key={i}
          style={{
            width: 7,
            height: 7,
            borderRadius: "50%",
            background: "#aaa",
            display: "inline-block",
            animation: `csTyping 1.2s ${i * 0.2}s infinite`,
          }}
        />
      ))}
    </div>
  );
}

// Current time string
function nowTime() {
  return new Date().toLocaleTimeString("en-IN", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
}

export default function StickyWhatsapp() {
  const [open, setOpen]               = useState(false);
  const [gifError, setGifError]       = useState(false);
  const [visibleMsgs, setVisibleMsgs] = useState([]);
  const [showTyping, setShowTyping]   = useState(false);
  const timersRef   = useRef([]);
  const closeTimer  = useRef(null);

  const clearTimers = () => {
    timersRef.current.forEach(clearTimeout);
    timersRef.current = [];
  };

  const sched = (fn, delay) => {
    const t = setTimeout(fn, delay);
    timersRef.current.push(t);
    return t;
  };

  // Animate messages one by one with typing dots
  const startAnimation = () => {
    setVisibleMsgs([]);
    setShowTyping(false);
    clearTimers();

    // Message 0 — immediate
    setVisibleMsgs([0]);

    // Message 1
    sched(() => setShowTyping(true), 600);
    sched(() => { setShowTyping(false); setVisibleMsgs((p) => [...p, 1]); }, 1800);

    // Message 2
    sched(() => setShowTyping(true), 2400);
    sched(() => { setShowTyping(false); setVisibleMsgs((p) => [...p, 2]); }, 3600);

    // Message 3
    sched(() => setShowTyping(true), 4200);
    sched(() => { setShowTyping(false); setVisibleMsgs((p) => [...p, 3]); }, 5400);
  };

  const openPopup = () => {
    clearTimeout(closeTimer.current);
    if (!open) {
      setOpen(true);
      startAnimation();
    }
  };

  const closePopup = () => {
    setOpen(false);
    clearTimers();
  };

  const scheduleClose = () => {
    closeTimer.current = setTimeout(() => {
      setOpen(false);
      clearTimers();
    }, 300);
  };

  const cancelClose = () => clearTimeout(closeTimer.current);

  // Cleanup on unmount
  useEffect(() => () => { clearTimers(); clearTimeout(closeTimer.current); }, []);

  return (
    <>
      <style>{`
        @keyframes csTyping {
          0%, 60%, 100% { transform: translateY(0); opacity: 0.45; }
          30%            { transform: translateY(-5px); opacity: 1; }
        }
        @keyframes csPing {
          0%, 100% { transform: scale(1);    opacity: 0.35; }
          50%      { transform: scale(1.65); opacity: 0; }
        }
        .cs-msg-enter {
          animation: csMsgIn 0.25s ease both;
        }
        @keyframes csMsgIn {
          from { opacity: 0; transform: translateY(6px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      {/* ── Popup ── */}
      <div
        onMouseEnter={cancelClose}
        onMouseLeave={scheduleClose}
        style={{
          position: "fixed",
          bottom: 90,
          right: 24,
          width: 300,
          background: "#fff",
          borderRadius: "16px 16px 4px 16px",
          overflow: "hidden",
          boxShadow: "0 8px 32px rgba(0,0,0,0.18)",
          zIndex: 9998,
          transformOrigin: "bottom right",
          transition: "opacity 0.22s ease, transform 0.22s ease",
          opacity: open ? 1 : 0,
          transform: open ? "scale(1) translateY(0)" : "scale(0.88) translateY(14px)",
          pointerEvents: open ? "all" : "none",
        }}
      >
        {/* Header */}
        <div
          style={{
            background: "#075E54",
            padding: "10px 14px",
            display: "flex",
            alignItems: "center",
            gap: 10,
          }}
        >
          <div
            style={{
              width: 40,
              height: 40,
              borderRadius: "50%",
              background: "#128C7E",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <WaIcon size={22} />
          </div>
          <div style={{ flex: 1 }}>
            <p style={{ color: "#fff", fontSize: 13, fontWeight: 600, margin: 0, lineHeight: 1.2 }}>
              ConnectSkool Support
            </p>
            <p style={{ color: "#9BE2D3", fontSize: 11, margin: 0 }}>● Online — replies instantly</p>
          </div>
          <button
            onClick={closePopup}
            style={{
              background: "none",
              border: "none",
              color: "rgba(255,255,255,0.7)",
              fontSize: 18,
              cursor: "pointer",
              lineHeight: 1,
              padding: "2px 5px",
            }}
          >
            ✕
          </button>
        </div>

        {/* Chat area */}
        <div
          style={{
            background: "#ECE5DD",
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='52' height='52' viewBox='0 0 52 52' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ccc5bc' fill-opacity='0.18'%3E%3Ccircle cx='26' cy='26' r='10'/%3E%3C/g%3E%3C/svg%3E\")",
            padding: "14px 12px 10px",
            display: "flex",
            flexDirection: "column",
            gap: 8,
            minHeight: 160,
          }}
        >
          {visibleMsgs.map((idx) => (
            <div
              key={idx}
              className="cs-msg-enter"
              style={{
                background: "#fff",
                borderRadius: "8px 8px 8px 2px",
                padding: "8px 11px 5px",
                maxWidth: "92%",
                alignSelf: "flex-start",
              }}
            >
              <BubbleText text={CHAT_MESSAGES[idx]} />
              <p style={{ fontSize: 10, color: "#aaa", textAlign: "right", margin: "3px 0 0" }}>
                {nowTime()}
              </p>
            </div>
          ))}
          {showTyping && <TypingDots />}
        </div>

        {/* CTA button */}
        <a
          href={WA_URL}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 8,
            background: "#25D366",
            color: "#fff",
            fontSize: 13,
            fontWeight: 600,
            padding: "12px",
            textDecoration: "none",
            letterSpacing: 0.2,
            transition: "background 0.15s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.background = "#1da851")}
          onMouseLeave={(e) => (e.currentTarget.style.background = "#25D366")}
        >
          <WaIcon size={16} />
          Chat on WhatsApp →
        </a>
      </div>

      {/* ── Sticky floating button ── */}
      <div
        onMouseEnter={openPopup}
        onMouseLeave={scheduleClose}
        onClick={() => (open ? closePopup() : openPopup())}
        style={{
          position: "fixed",
          bottom: 24,
          right: 24,
          width: 60,
          height: 60,
          borderRadius: "50%",
          cursor: "pointer",
          zIndex: 9999,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* Pulse ring */}
        <span
          style={{
            position: "absolute",
            inset: 0,
            borderRadius: "50%",
            background: "#25D366",
            animation: "csPing 2s ease-out infinite",
            zIndex: 0,
          }}
        />

        {/* Button face — GIF or fallback */}
<div
  style={{
    position: "relative",
    zIndex: 1,
    width: "clamp(70px, 8vw, 90px)",
    height: "clamp(70px, 8vw, 90px)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "transparent",  // ← koi bg nahi
    borderRadius: "50%",
    overflow: "visible",        // ← clip mat karo
  }}
>
  {!gifError ? (
    <img
      src="/assets/Whatsaap.gif"
      alt="Chat on WhatsApp"
      onError={() => setGifError(true)}
      style={{
        width: "100%",
        height: "100%",
        objectFit: "contain",
        display: "block",
        mixBlendMode: "multiply",
      }}
    />
  ) : (
    <WaIcon size={40} />
  )}
</div>
      </div>
    </>
  );
}