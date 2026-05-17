'use client'

import { useEffect, useRef } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Mic, RotateCcw, X } from 'lucide-react'
import AssistantAvatar from './AssistantAvatar'
import AssistantChat from './AssistantChat'
import VoiceWelcome from './VoiceWelcome'
import { useAssistant } from './AssistantContext'

function SpeakingOrb({ active }) {
  return (
    <div className="relative flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#FF6B00] to-[#FF9A00] text-white shadow-lg">
      {active ? (
        <>
          {[0, 1, 2].map((i) => (
            <motion.span
              key={i}
              className="absolute inset-0 rounded-full border border-[#FF9A00]/70"
              animate={{ scale: [1, 1.45], opacity: [0.7, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, delay: i * 0.25 }}
            />
          ))}
          <div className="absolute -bottom-2 flex items-end gap-0.5">
            {[8, 12, 10, 14].map((h, i) => (
              <motion.span
                key={h + i}
                className="w-0.5 rounded-full bg-white/90"
                animate={{ height: [4, h, 5] }}
                transition={{ duration: 0.8, repeat: Infinity, delay: i * 0.08 }}
              />
            ))}
          </div>
        </>
      ) : null}
      <Mic className="h-4.5 w-4.5" />
    </div>
  )
}

export default function AssistantModal() {
  const { isOpen, closeAssistant, restart, isSpeaking } = useAssistant()
  const modalRef = useRef(null)

  useEffect(() => {
    if (!isOpen) return undefined
    const onKeyDown = (event) => {
      if (event.key === 'Escape') closeAssistant()
    }
    window.addEventListener('keydown', onKeyDown)
    modalRef.current?.focus()
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [closeAssistant, isOpen])

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[95] bg-black/55 backdrop-blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeAssistant}
        >
          <motion.div
            onClick={(e) => e.stopPropagation()}
            ref={modalRef}
            role="dialog"
            aria-modal="true"
            aria-label="Smart Labour AI Assistant"
            tabIndex={-1}
            initial={{ opacity: 0, y: 40, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.96 }}
            transition={{ type: 'spring', stiffness: 260, damping: 26 }}
            className={[
              // Positioning
              'absolute bottom-0 left-0 right-0',
              'sm:bottom-6 sm:left-auto sm:right-6 sm:w-[430px]',
              // Sizing — controlled height, no overflow escape
              'h-[85dvh] sm:h-[700px]',
              // Shape & surface
              'rounded-t-[2rem] sm:rounded-[2rem]',
              'border border-white/30',
              'bg-gradient-to-b from-white/95 to-[#FFF7F2]',
              'shadow-2xl',
              // KEY: flex column + overflow hidden keeps children inside
              'flex flex-col overflow-hidden',
            ].join(' ')}
          >
            {/* ── Header (shrink-0 so it never scrolls away) ── */}
            <div className="shrink-0 px-4 pt-4 pb-2">
              <div className="flex items-center justify-between gap-2 rounded-2xl border border-white/50 bg-white/70 p-3 shadow-sm backdrop-blur">
                <div className="flex items-center gap-3">
                  <AssistantAvatar speaking={isSpeaking} />
                  <div>
                    <p className="text-sm font-extrabold text-[#1A1A1A]">Smart Labour AI Assistant</p>
                    <p className="text-[11px] font-semibold text-neutral-600">
                      <span className="mr-1 inline-block h-2 w-2 rounded-full bg-green-500" />
                      Online {isSpeaking ? '• Speaking...' : '• Listening'}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <SpeakingOrb active={isSpeaking} />
                  <VoiceWelcome />
                  <button
                    type="button"
                    onClick={restart}
                    className="rounded-full bg-white p-2 text-neutral-600 ring-1 ring-neutral-200"
                    aria-label="Restart assistant chat"
                  >
                    <RotateCcw className="h-4 w-4" />
                  </button>
                  <button
                    type="button"
                    onClick={closeAssistant}
                    className="rounded-full bg-white p-2 text-neutral-600 ring-1 ring-neutral-200"
                    aria-label="Close assistant"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* ── Chat body — grows to fill remaining space ── */}
            {/* min-h-0 is essential: without it a flex child won't shrink below its content size */}
            <div className="min-h-0 flex-1 px-4 pb-4">
              <AssistantChat />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
