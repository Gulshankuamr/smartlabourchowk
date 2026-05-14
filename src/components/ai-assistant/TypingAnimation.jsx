'use client'

import { motion } from 'framer-motion'

export default function TypingAnimation() {
  return (
    <div className="inline-flex items-center gap-1 rounded-2xl bg-white/85 px-3 py-2 text-xs font-semibold text-neutral-600 shadow-sm ring-1 ring-black/5">
      <span>Typing...</span>
      {[0, 1, 2].map((i) => (
        <motion.span
          key={i}
          className="h-1.5 w-1.5 rounded-full bg-[#FF6B00]"
          animate={{ opacity: [0.2, 1, 0.2], y: [0, -3, 0] }}
          transition={{ duration: 0.8, repeat: Infinity, delay: i * 0.15 }}
        />
      ))}
    </div>
  )
}

