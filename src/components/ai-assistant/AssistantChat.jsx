'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
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
  const scrollRef = useRef(null)
  const endRef = useRef(null)

  useEffect(() => {
    const timer = setInterval(
      () => setPlaceholderIndex((i) => (i + 1) % placeholders.length),
      2200,
    )
    return () => clearInterval(timer)
  }, [])

  const canAskName = stage === 'ask_name' || stage === 'welcome'
  const showFeedback = useMemo(() => stage === 'feedback' || stage === 'done', [stage])

  useEffect(() => {
    const node = scrollRef.current
    if (!node) return
    const nearBottom = node.scrollHeight - node.scrollTop - node.clientHeight < 120
    if (nearBottom) endRef.current?.scrollIntoView({ behavior: 'smooth', block: 'end' })
  }, [messages, isTyping])

  return (
    /*
     * Outer wrapper:
     *   - h-full  → fill the parent div (flex-1 min-h-0 wrapper in AssistantModal)
     *   - flex flex-col → vertical stack: steps · messages · input
     *   - overflow-hidden → clip anything that tries to escape
     */
    <div className="flex h-full flex-col overflow-hidden">
      {/* Progress steps — fixed height, never scrolls */}
      <div className="shrink-0">
        <AssistantSteps stage={stage} />
      </div>

      {/*
       * Scrollable message area:
       *   - flex-1  → take all remaining vertical space
       *   - min-h-0 → allow shrinking below content height (critical in flex)
       *   - overflow-y-auto → scroll when content overflows
       */}
      <div ref={scrollRef} className="mt-3 min-h-0 flex-1 space-y-3 overflow-y-auto pr-1 pb-2">
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
        <div ref={endRef} />
      </div>

      {/*
       * Input section:
       *   - shrink-0  → never compress; always visible at the bottom
       *   - pt-2 mt-1 → breathing room above the input
       *   - border-t  → clean visual separator from messages
       */}
      {canAskName ? (
        <form
          onSubmit={async (e) => {
            e.preventDefault()
            const ok = await submitName(nameInput)
            if (ok) setNameInput('')
          }}
          className="shrink-0 mt-1 pt-2 border-t border-black/5"
        >
          <div className="flex items-center gap-2 rounded-2xl bg-[#FFF7F2] px-2 py-1 ring-1 ring-black/8 shadow-sm">
            <motion.textarea
              initial={{ opacity: 0.45 }}
              animate={{ opacity: 1 }}
              value={nameInput}
              onChange={(e) => setNameInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault()
                  e.currentTarget.form?.requestSubmit()
                }
              }}
              placeholder={placeholders[placeholderIndex]}
              rows={1}
              autoComplete="off"
              autoCapitalize="sentences"
              autoCorrect="on"
              spellCheck
              className="w-full resize-none rounded-xl bg-transparent px-2 py-2.5 text-sm outline-none placeholder:text-neutral-400"
              aria-label="Assistant input"
            />
            <motion.button
              type="submit"
              whileTap={{ scale: 0.93 }}
              whileHover={{ scale: 1.04 }}
              className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-r from-[#FF6B00] to-[#FF9A00] text-white shadow-md"
            >
              <SendHorizontal className="h-4 w-4" />
            </motion.button>
          </div>
        </form>
      ) : null}

      {/* Feedback form — also pinned, never scrolls off */}
      {showFeedback ? (
        <div className="shrink-0 mt-1 pt-2 border-t border-black/5">
          <AssistantForm onSubmit={saveFeedback} />
        </div>
      ) : null}
    </div>
  )
}
