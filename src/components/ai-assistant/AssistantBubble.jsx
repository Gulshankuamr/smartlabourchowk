'use client'

import { motion } from 'framer-motion'
import AssistantAvatar from './AssistantAvatar'
import { useAssistant } from './AssistantContext'

export default function AssistantBubble({ from, text }) {
  const { isSpeaking } = useAssistant()

  if (from === 'user') {
    return (
      <motion.div initial={{ opacity: 0, x: 14, y: 6 }} animate={{ opacity: 1, x: 0, y: 0 }} className="flex justify-end">
        <div className="max-w-[85%] rounded-2xl bg-[#1A1A1A] px-4 py-3 text-sm text-white shadow-md transition hover:shadow-lg">{text}</div>
      </motion.div>
    )
  }

  return (
    <motion.div initial={{ opacity: 0, x: -14, y: 6 }} animate={{ opacity: 1, x: 0, y: 0 }} className="flex items-start gap-2">
      <AssistantAvatar speaking={isSpeaking} />
      <div className="max-w-[85%] whitespace-pre-line rounded-2xl bg-white px-4 py-3 text-sm leading-relaxed text-neutral-700 shadow-sm ring-1 ring-black/5 transition hover:shadow-md">
        {text}
      </div>
    </motion.div>
  )
}
