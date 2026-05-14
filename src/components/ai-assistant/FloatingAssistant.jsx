'use client'

import { motion } from 'framer-motion'
import { Sparkles } from 'lucide-react'
import { useAssistant } from './AssistantContext'

export default function FloatingAssistant() {
  const { openAssistant } = useAssistant()

  return (
    <motion.button
      type="button"
      onClick={openAssistant}
      className="fixed left-3 top-1/2 z-[70] -translate-y-1/2 rounded-2xl border border-white/40 bg-gradient-to-br from-[#FF6B00] to-[#FF9A00] p-3 text-white shadow-2xl backdrop-blur sm:left-4 relative"
      animate={{
        y: [0, -6, 0],
        boxShadow: ['0 10px 30px rgba(255,107,0,0.35)', '0 14px 38px rgba(255,154,0,0.45)', '0 10px 30px rgba(255,107,0,0.35)'],
      }}
      transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
      whileHover={{ scale: 1.06 }}
      aria-label="Open AI Assistant"
    >
      <motion.span
        className="absolute inset-0 rounded-2xl border border-white/45"
        animate={{ scale: [1, 1.25], opacity: [0.9, 0] }}
        transition={{ duration: 1.8, repeat: Infinity }}
      />
      <Sparkles className="h-6 w-6" />
      <span className="sr-only">Open Smart Labour Chowk AI Assistant</span>
    </motion.button>
  )
}

