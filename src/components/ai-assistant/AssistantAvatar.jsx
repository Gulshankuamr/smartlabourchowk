'use client'

import { Bot } from 'lucide-react'
import { motion } from 'framer-motion'

export default function AssistantAvatar({ speaking = false }) {
  return (
    <motion.div
      animate={{ y: [0, -4, 0], scale: speaking ? [1, 1.06, 1] : 1 }}
      transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
      className="relative flex h-9 w-9 items-center justify-center rounded-2xl bg-gradient-to-br from-[#FF6B00] to-[#FF9A00] text-white shadow-lg"
    >
      {speaking ? (
        <>
          <motion.span
            className="absolute inset-0 rounded-2xl border border-[#FF9A00]/80"
            animate={{ scale: [1, 1.35], opacity: [0.8, 0] }}
            transition={{ duration: 1.4, repeat: Infinity }}
          />
          <motion.span
            className="absolute inset-0 rounded-2xl border border-[#FF6B00]/70"
            animate={{ scale: [1, 1.65], opacity: [0.65, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, delay: 0.2 }}
          />
        </>
      ) : null}
      <Bot className="h-5 w-5" />
    </motion.div>
  )
}

