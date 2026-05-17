'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'

export default function AssistantForm({ onSubmit }) {
  const [phone, setPhone] = useState('')
  const [suggestion, setSuggestion] = useState('')
  const [feedback, setFeedback] = useState('')
  const [submitted, setSubmitted] = useState(false)

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center gap-2 rounded-2xl border border-green-100 bg-green-50 px-4 py-4 text-center shadow-sm"
      >
        <CheckCircle2 className="h-7 w-7 text-green-500" />
        <p className="text-sm font-bold text-green-700">Feedback submit ho gaya!</p>
        <p className="text-xs text-green-600">Shukriya, aapka response mil gaya.</p>
      </motion.div>
    )
  }

  return (
    /*
     * NO mt-3 here — parent (AssistantChat) already adds pt-2 border-t
     * NO fixed height or rows={3} on textarea — use rows={2} to stay compact
     * overflow-hidden on the form itself as a safety net
     */
    <form
      onSubmit={(e) => {
        e.preventDefault()
        onSubmit({ phone, suggestion, feedback })
        setPhone('')
        setSuggestion('')
        setFeedback('')
        setSubmitted(true)
      }}
      className="overflow-hidden rounded-2xl border border-white/60 bg-white/90 p-3 shadow-md ring-1 ring-black/5 backdrop-blur"
    >
      <p className="mb-2 text-xs font-semibold text-neutral-500 uppercase tracking-wide">
        Feedback dein
      </p>

      <input
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        placeholder="Phone number"
        type="tel"
        inputMode="tel"
        aria-label="Phone number"
        className="mb-1.5 w-full rounded-xl border border-neutral-200 bg-white px-3 py-2 text-sm outline-none transition focus:border-[#FF6B00] focus:ring-2 focus:ring-[#FF6B00]/15"
      />
      <input
        value={suggestion}
        onChange={(e) => setSuggestion(e.target.value)}
        placeholder="Suggestion"
        aria-label="Suggestion"
        className="mb-1.5 w-full rounded-xl border border-neutral-200 bg-white px-3 py-2 text-sm outline-none transition focus:border-[#FF6B00] focus:ring-2 focus:ring-[#FF6B00]/15"
      />
      {/* rows={2} instead of 3 — keeps form compact inside modal */}
      <textarea
        value={feedback}
        onChange={(e) => setFeedback(e.target.value)}
        placeholder="Aapka feedback..."
        rows={2}
        aria-label="Feedback"
        className="w-full resize-none rounded-xl border border-neutral-200 bg-white px-3 py-2 text-sm outline-none transition focus:border-[#FF6B00] focus:ring-2 focus:ring-[#FF6B00]/15"
      />

      <motion.button
        type="submit"
        whileTap={{ scale: 0.97 }}
        whileHover={{ scale: 1.01 }}
        className="mt-2 w-full rounded-xl bg-gradient-to-r from-[#FF6B00] to-[#FF9A00] px-3 py-2 text-sm font-bold text-white shadow-md"
      >
        Submit Feedback
      </motion.button>
    </form>
  )
}
