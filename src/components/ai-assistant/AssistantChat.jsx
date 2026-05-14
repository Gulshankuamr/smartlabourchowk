'use client'

import { useEffect, useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { SendHorizontal } from 'lucide-react'
import AssistantBubble from './AssistantBubble'
import TypingAnimation from './TypingAnimation'
import MessageCard from './MessageCard'
import AssistantForm from './AssistantForm'
import AssistantSteps from './AssistantSteps'
import { useAssistant } from './AssistantContext'

const placeholders = [
  'Apna naam likhiye...',
  'Worker ya contractor?',
  'Aapko kya help chahiye?',
  'Nearby labour dhoondna hai?',
  'Kaam chahiye?',
]

export default function AssistantChat() {
  const { messages, isTyping, stage, submitName, chooseRole, saveFeedback } = useAssistant()
  const [nameInput, setNameInput] = useState('')
  const [placeholderIndex, setPlaceholderIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => setPlaceholderIndex((i) => (i + 1) % placeholders.length), 2200)
    return () => clearInterval(timer)
  }, [])

  const canAskName = stage === 'ask_name' || stage === 'welcome'
  const showFeedback = useMemo(() => stage === 'feedback' || stage === 'done', [stage])

  return (
    <div className="flex h-full flex-col">
      <AssistantSteps stage={stage} />

      <div className="mt-3 flex-1 space-y-3 overflow-y-auto pr-1 pb-3">
        {messages.map((msg) => (
          <div key={msg.id}>
            <AssistantBubble from={msg.from} text={msg.text} />
            <MessageCard
              options={msg.options}
              onChoose={(opt) => {
                if (opt.action === 'role') chooseRole(opt.value)
              }}
            />
          </div>
        ))}
        {isTyping ? <TypingAnimation /> : null}
      </div>

      {canAskName ? (
        <form
          onSubmit={async (e) => {
            e.preventDefault()
            const ok = await submitName(nameInput)
            if (ok) setNameInput('')
          }}
          className="sticky bottom-0 mt-2 rounded-3xl border border-white/60 bg-white/80 p-2 shadow-lg backdrop-blur"
        >
          <div className="flex items-center gap-2 rounded-2xl bg-[#FFF7F2] px-2 py-1 ring-1 ring-black/5">
            <motion.input
              key={placeholderIndex}
              initial={{ opacity: 0.45 }}
              animate={{ opacity: 1 }}
              value={nameInput}
              onChange={(e) => setNameInput(e.target.value)}
              placeholder={placeholders[placeholderIndex]}
              className="w-full rounded-xl bg-transparent px-2 py-2.5 text-sm outline-none placeholder:text-neutral-400"
            />
            <motion.button
              type="submit"
              whileTap={{ scale: 0.93 }}
              whileHover={{ scale: 1.04 }}
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-r from-[#FF6B00] to-[#FF9A00] text-white shadow-md"
            >
              <SendHorizontal className="h-4.5 w-4.5" />
            </motion.button>
          </div>
        </form>
      ) : null}

      {showFeedback ? <AssistantForm onSubmit={saveFeedback} /> : null}
    </div>
  )
}
