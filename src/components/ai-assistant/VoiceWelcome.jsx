'use client'

import { Volume2, VolumeX } from 'lucide-react'
import { useAssistant } from './AssistantContext'

export default function VoiceWelcome() {
  const { voiceEnabled, toggleVoice, isSpeaking } = useAssistant()

  return (
    <button type="button" onClick={toggleVoice} className="inline-flex items-center gap-1 rounded-full bg-white px-2 py-1 text-[11px] font-bold text-neutral-600 ring-1 ring-neutral-200">
      {voiceEnabled ? <Volume2 className="h-3.5 w-3.5" /> : <VolumeX className="h-3.5 w-3.5" />}
      {voiceEnabled ? (isSpeaking ? 'Speaking' : 'Voice On') : 'Voice Off'}
    </button>
  )
}

