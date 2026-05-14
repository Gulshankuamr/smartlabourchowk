'use client'

import { useState } from 'react'

export default function AssistantForm({ onSubmit }) {
  const [phone, setPhone] = useState('')
  const [suggestion, setSuggestion] = useState('')
  const [feedback, setFeedback] = useState('')

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        onSubmit({ phone, suggestion, feedback })
        setPhone('')
        setSuggestion('')
        setFeedback('')
      }}
      className="mt-3 rounded-2xl border border-white/60 bg-white/90 p-3 shadow-md ring-1 ring-black/5 backdrop-blur"
    >
      <input value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Phone number" className="mb-2 w-full rounded-xl border border-neutral-200 px-3 py-2 text-sm outline-none focus:border-[#FF6B00]" />
      <input value={suggestion} onChange={(e) => setSuggestion(e.target.value)} placeholder="Suggestion" className="mb-2 w-full rounded-xl border border-neutral-200 px-3 py-2 text-sm outline-none focus:border-[#FF6B00]" />
      <textarea value={feedback} onChange={(e) => setFeedback(e.target.value)} placeholder="Feedback" rows={3} className="w-full rounded-xl border border-neutral-200 px-3 py-2 text-sm outline-none focus:border-[#FF6B00]" />
      <button type="submit" className="mt-2 w-full rounded-xl bg-gradient-to-r from-[#FF6B00] to-[#FF9A00] px-3 py-2 text-sm font-bold text-white shadow-md">Submit Feedback</button>
    </form>
  )
}

