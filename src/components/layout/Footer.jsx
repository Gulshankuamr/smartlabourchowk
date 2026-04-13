"use client";
import React, { useRef, useEffect, useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Globe,
} from "lucide-react";

// ─── TextHoverEffect ───────────────────────────────────────────────────────────
const TextHoverEffect = ({ text, duration = 0, className }) => {
  const svgRef = useRef(null);
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);
  const [maskPos, setMaskPos] = useState({ cx: "50%", cy: "50%" });
  const animRef = useRef(null);
  const curPos = useRef({ cx: 50, cy: 50 });
  const targetPos = useRef({ cx: 50, cy: 50 });

  // Smooth lerp animation for mask position
  useEffect(() => {
    const lerp = (a, b, t) => a + (b - a) * t;
    const tick = () => {
      curPos.current.cx = lerp(curPos.current.cx, targetPos.current.cx, 0.08);
      curPos.current.cy = lerp(curPos.current.cy, targetPos.current.cy, 0.08);
      setMaskPos({
        cx: `${curPos.current.cx}%`,
        cy: `${curPos.current.cy}%`,
      });
      animRef.current = requestAnimationFrame(tick);
    };
    animRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(animRef.current);
  }, []);

  useEffect(() => {
    if (svgRef.current) {
      const rect = svgRef.current.getBoundingClientRect();
      targetPos.current = {
        cx: ((cursor.x - rect.left) / rect.width) * 100,
        cy: ((cursor.y - rect.top) / rect.height) * 100,
      };
    }
  }, [cursor]);

  // Draw-on stroke animation via CSS animation
  const drawStyle = {
    fill: "transparent",
    stroke: "#F0970A",
    strokeWidth: 0.3,
    fontFamily: "helvetica, sans-serif",
    fontSize: "36px",
    fontWeight: "bold",
    strokeDasharray: 2000,
    animation: "drawStroke 4s ease-in-out forwards",
  };

  return (
    <>
      <style>{`
        @keyframes drawStroke {
          from { stroke-dashoffset: 2000; }
          to   { stroke-dashoffset: 0; }
        }
      `}</style>

      <svg
        ref={svgRef}
        width="100%"
        height="100%"
        viewBox="0 0 300 100"
        xmlns="http://www.w3.org/2000/svg"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onMouseMove={(e) => setCursor({ x: e.clientX, y: e.clientY })}
        className={`select-none uppercase cursor-pointer ${className || ""}`}
      >
        <defs>
          {/* Colour reveal gradient */}
          <linearGradient
            id="textGradient"
            gradientUnits="userSpaceOnUse"
            cx="50%"
            cy="50%"
            r="25%"
          >
            {hovered && (
              <>
                <stop offset="0%"   stopColor="#F0970A" />
                <stop offset="25%"  stopColor="#F5B041" />
                <stop offset="50%"  stopColor="#F0970A" />
                <stop offset="75%"  stopColor="#E67E22" />
                <stop offset="100%" stopColor="#F0970A" />
              </>
            )}
          </linearGradient>

          {/* Radial mask that follows the cursor */}
          <radialGradient
            id="revealMask"
            gradientUnits="userSpaceOnUse"
            r="20%"
            cx={maskPos.cx}
            cy={maskPos.cy}
          >
            <stop offset="0%"   stopColor="white" />
            <stop offset="100%" stopColor="black" />
          </radialGradient>

          <mask id="textMask">
            <rect x="0" y="0" width="100%" height="100%" fill="url(#revealMask)" />
          </mask>
        </defs>

        {/* Ghost outline — visible only on hover */}
        <text
          x="50%" y="50%"
          textAnchor="middle"
          dominantBaseline="middle"
          strokeWidth="0.3"
          style={{
            fill: "transparent",
            stroke: "rgba(255,255,255,0.2)",
            fontFamily: "helvetica, sans-serif",
            fontSize: "36px",
            fontWeight: "bold",
            opacity: hovered ? 0.7 : 0,
            transition: "opacity 0.3s",
          }}
        >
          {text}
        </text>

        {/* Animated draw-on stroke */}
        <text
          x="50%" y="50%"
          textAnchor="middle"
          dominantBaseline="middle"
          style={drawStyle}
        >
          {text}
        </text>

        {/* Colour fill revealed by cursor */}
        <text
          x="50%" y="50%"
          textAnchor="middle"
          dominantBaseline="middle"
          stroke="url(#textGradient)"
          strokeWidth="0.3"
          mask="url(#textMask)"
          style={{
            fill: "transparent",
            fontFamily: "helvetica, sans-serif",
            fontSize: "36px",
            fontWeight: "bold",
          }}
        >
          {text}
        </text>
      </svg>
    </>
  );
};

// ─── FooterBackgroundGradient ──────────────────────────────────────────────────
const FooterBackgroundGradient = () => (
  <div
    className="absolute inset-0 z-0"
    style={{
      background:
        "radial-gradient(125% 125% at 50% 10%, #1E4E6D 50%, rgba(240,151,10,0.2) 100%)",
    }}
  />
);

// ─── Footer ───────────────────────────────────────────────────────────────────
const Footer = () => {
const footerLinks = [
  {
    title: "ERP Modules",
    links: [
      { label: "Student Management", href: "#" },
      { label: "Attendance Management", href: "#" },
      { label: "Fees Management", href: "#" },
      { label: "Exam & Results", href: "#" },
      { label: "Staff Management", href: "#" },
      { label: "Transport Management", href: "#" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { label: "For Schools", href: "#" },
      { label: "For Colleges", href: "#" },
      { label: "For Coaching Institutes", href: "#" },
      { label: "For Teachers", href: "#" },
      { label: "For Administrators", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About ConnectSkool", href: "#" },
      { label: "Careers", href: "#", pulse: true },
      { label: "Privacy Policy", href: "#" },
      { label: "Terms & Conditions", href: "#" },
      { label: "Contact Us", href: "#" },
    ],
  },
];

const contactInfo = [
  {
    icon: <MapPin size={16} className="text-[#F0970A]" />,
    text: "Gaur City Mall, Sector-4, Greater Noida, UP – 201318",
  },
  {
    icon: <Phone size={16} className="text-[#F0970A]" />,
    text: "+91-9236788668",
    href: "tel:+919236788668",
  },
  {
    icon: <Mail size={16} className="text-[#F0970A]" />,
    text: "sales@foundercodes.com",
    href: "mailto:sales@foundercodes.com",
  },
];

  const socialLinks = [
  { icon: <Facebook size={16} />, label: "Facebook", href: "#" },
  { icon: <Instagram size={16} />, label: "Instagram", href: "#" },
  { icon: <Twitter size={16} />, label: "Twitter", href: "#" },
  { icon: <Linkedin size={16} />, label: "LinkedIn", href: "#" },
];

  return (
    <footer
      className="relative overflow-hidden"
      style={{ backgroundColor: "#1E4E6D" }}
    >
      {/* ── Main content ── */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 md:px-10 lg:px-14 pt-14 pb-8">

        {/* ── Grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-14 pb-10">

          {/* Brand + contact + socials */}
          <div className="flex flex-col gap-4">
            {/* Logo */}
            <a href="/" className="flex items-center gap-2">
              <span className="text-[#F0970A] text-3xl font-extrabold leading-none">♥</span>
              <span className="text-white text-2xl font-bold">ConnectSkool</span>
            </a>

            {/* Tagline */}
            <p className="text-white/70 text-sm leading-relaxed max-w-xs">
             ConnectSkool ek all-in-one school ERP platform hai jo academics, 
             administration aur communication ko ek jagah simplify karta hai.
            </p>

            {/* Contact */}
            <ul className="flex flex-col gap-3 mt-1">
              {contactInfo.map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  {item.icon}
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-white/70 text-sm hover:text-[#F0970A] transition-colors"
                    >
                      {item.text}
                    </a>
                  ) : (
                    <span className="text-white/70 text-sm">{item.text}</span>
                  )}
                </li>
              ))}
            </ul>

            {/* Socials */}
            <div className="flex gap-2 mt-2">
              {socialLinks.map(({ icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex items-center justify-center w-9 h-9 rounded-lg border border-white/20
                             text-white/60 hover:bg-[#F0970A] hover:border-[#F0970A] hover:text-white
                             hover:-translate-y-0.5 transition-all duration-200"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Nav columns */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="text-white text-base font-semibold mb-5">
                {section.title}
              </h4>
              <ul className="flex flex-col gap-3">
                {section.links.map((link) => (
                  <li key={link.label} className="relative inline-block w-fit">
                    <a
                      href={link.href}
                      className="text-white/60 text-sm hover:text-[#F0970A] hover:translate-x-1
                                 transition-all duration-200 inline-block"
                    >
                      {link.label}
                    </a>
                 
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <hr className="border-white/10 mb-6" />

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-3 text-sm">
          <p className="text-white/50">
            &copy; {new Date().getFullYear()} ConnectSkool. All rights reserved.
          </p>
          <p className="text-white/50">
            Made with{" "}
            <span className="text-[#F0970A]">♥</span>{" "}
            for modern schools
          </p>
        </div>
      </div>

      {/* ── Big hover text effect ── */}
      <div className="hidden lg:flex h-[26rem] -mt-40 -mb-24">
        <TextHoverEffect text="CONNECTSKOOL" />
      </div>
  {/* <div className="hidden lg:flex h-[22rem] -mt-36 -mb-20 relative z-10">
        <TextHoverEffect text="CONNECTSKOOL" />
      </div> */}
      {/* Background radial gradient */}
      <FooterBackgroundGradient />
    </footer>
  );
};

export default Footer;