'use client'

import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react'
import { PLAY_STORE_URL, WHATSAPP_LINK } from '../../constants/app'

const AssistantContext = createContext(null)

const STORAGE_KEY = 'slc-ai-assistant-state'
const STORAGE_FEEDBACK_KEY = 'slc-ai-feedback'
const STORAGE_AUTO_OPEN_KEY = 'slc-ai-auto-opened'
const STORAGE_WELCOMED_KEY = 'assistant_welcomed'

const roleContent = {
  worker: {
    label: 'Worker',
    intro: 'Worker flow active. Aapko nearby jobs, daily work alerts, aur trusted contractors milte hain.',
    points: [
      'Nearby location ke hisab se roz naye kaam alerts.',
      'Direct WhatsApp connection se turant baat.',
      'Trusted contractors aur repeat hiring ka chance.',
      'Faster hiring for daily and site-based work.',
    ],
  },
  contractor: {
    label: 'Contractor',
    intro: 'Contractor flow active. Aap verified workers aur bulk labour hiring ko fast kar sakte hain.',
    points: [
      'Verified workers with role and trust visibility.',
      'Bulk labour hiring with quick shortlisting.',
      'Ratings based trust system for better decisions.',
      'Nearby worker availability for urgent sites.',
    ],
  },
  user: {
    label: 'User',
    intro: 'User flow active. Aap nearby plumber, electrician, raj mistri aur painter hire kar sakte hain.',
    points: [
      'Plumber, electrician, raj mistri, painter nearby.',
      'Local labour hiring with fast contact flow.',
      'Profile-based trust and cleaner matching.',
      'App-first journey for better response speed.',
    ],
  },
}

function createMessage(from, text, extra = {}) {
  return { id: `${Date.now()}-${Math.random().toString(36).slice(2, 7)}`, from, text, ...extra }
}

export function AssistantProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false)
  const [voiceEnabled, setVoiceEnabled] = useState(true)
  const [isSpeaking, setIsSpeaking] = useState(false)
  const [messages, setMessages] = useState([])
  const [isTyping, setIsTyping] = useState(false)
  const [name, setName] = useState('')
  const [role, setRole] = useState('')
  const [stage, setStage] = useState('welcome')
  const queueRef = useRef(Promise.resolve())
  const actionLockRef = useRef(false)
  const typingTimersRef = useRef([])
  const autoOpenTimerRef = useRef(null)
  const speakingRef = useRef(false)

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY)
      if (!raw) return
      const parsed = JSON.parse(raw)
      if (parsed?.name) setName(parsed.name)
      if (parsed?.role) setRole(parsed.role)
      if (typeof parsed?.voiceEnabled === 'boolean') setVoiceEnabled(parsed.voiceEnabled)
      if (parsed?.messages?.length) setMessages(parsed.messages)
      if (parsed?.stage) setStage(parsed.stage)
    } catch {
      /* ignore */
    }
  }, [])

  useEffect(() => {
    try {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({ name, role, voiceEnabled, messages: messages.slice(-24), stage })
      )
    } catch {
      /* ignore */
    }
  }, [name, role, voiceEnabled, messages, stage])

  const stopSpeaking = useCallback(() => {
    if (typeof window === 'undefined' || !window.speechSynthesis) return
    window.speechSynthesis.cancel()
    speakingRef.current = false
    setIsSpeaking(false)
  }, [])

  const getBestVoice = useCallback((langHint = 'en') => {
    if (typeof window === 'undefined' || !window.speechSynthesis) return null
    const voices = window.speechSynthesis.getVoices() || []
    if (!voices.length) return null
    const femaleHints = ['female', 'woman', 'zira', 'samantha', 'veena', 'google us english']
    const langVoices = voices.filter((v) => (langHint === 'hi' ? v.lang?.toLowerCase().startsWith('hi') : v.lang?.toLowerCase().startsWith('en')))
    const preferred = langVoices.find((v) => femaleHints.some((h) => `${v.name}`.toLowerCase().includes(h)))
    return preferred || langVoices[0] || voices[0]
  }, [])

  const speak = useCallback((text) => {
    if (!voiceEnabled || typeof window === 'undefined' || !window.speechSynthesis || !text?.trim()) return
    if (speakingRef.current) stopSpeaking()
    const utterance = new SpeechSynthesisUtterance(text)
    const hasHindi = /[\u0900-\u097F]/.test(text)
    const voice = getBestVoice(hasHindi ? 'hi' : 'en')
    if (voice) utterance.voice = voice
    utterance.lang = voice?.lang || (hasHindi ? 'hi-IN' : 'en-IN')
    utterance.rate = 0.95
    utterance.pitch = 1
    utterance.onstart = () => {
      speakingRef.current = true
      setIsSpeaking(true)
    }
    utterance.onend = () => {
      speakingRef.current = false
      setIsSpeaking(false)
    }
    utterance.onerror = () => {
      speakingRef.current = false
      setIsSpeaking(false)
    }
    window.speechSynthesis.cancel()
    window.speechSynthesis.speak(utterance)
  }, [getBestVoice, stopSpeaking, voiceEnabled])

  const appendAssistant = useCallback((text, extra = {}, delay = 800) => {
    queueRef.current = queueRef.current.then(
      () =>
        new Promise((resolve) => {
          setIsTyping(true)
          const timer = setTimeout(() => {
            setIsTyping(false)
            setMessages((prev) => [...prev, createMessage('assistant', text, extra)])
            resolve()
          }, delay)
          typingTimersRef.current.push(timer)
        })
    )
    return queueRef.current
  }, [])

  const appendUser = useCallback((text) => {
    setMessages((prev) => [...prev, createMessage('user', text)])
  }, [])

  const startFlow = useCallback(async (forceStart = false) => {
    setStage('ask_name')
    if (!forceStart && messages.length > 0) return
    await appendAssistant(
      'Hello Sir 👋\nSmart Labour Chowk me aapka swagat hai.\n\nMain aapko bata sakti hoon ki aap yahan:\n✔ Kaam kaise dhoond sakte hain\n✔ Workers kaise hire kar sakte hain\n✔ Nearby labour kaise paa sakte hain\n✔ Contractor se kaise connect kar sakte hain\n✔ Aur app install karke better experience kaise paa sakte hain.'
    )
    await appendAssistant('Aapka naam batayiye, taaki main onboarding personalize kar sakoon.')
  }, [appendAssistant, messages.length])

  const openAssistant = useCallback((forceReset = false) => {
    const shouldStartFlow = forceReset || messages.length === 0
    setIsOpen(true)
    if (forceReset) {
      setMessages([])
      setRole('')
      setName('')
      setStage('welcome')
      queueRef.current = Promise.resolve()
    }
    if (shouldStartFlow) startFlow(forceReset)
    setIsTyping(false)
  }, [messages.length, startFlow])

  const closeAssistant = useCallback(() => setIsOpen(false), [])

  useEffect(() => {
    if (typeof window === 'undefined') return
    const already = localStorage.getItem(STORAGE_AUTO_OPEN_KEY) === '1'
    const welcomed = localStorage.getItem(STORAGE_WELCOMED_KEY) === '1'
    if (already) return
    autoOpenTimerRef.current = setTimeout(() => {
      setIsOpen(true)
      startFlow()
      if (!welcomed && voiceEnabled) {
        speak('Hello. Welcome to our website. How can I help you today?')
        localStorage.setItem(STORAGE_WELCOMED_KEY, '1')
      }
      localStorage.setItem(STORAGE_AUTO_OPEN_KEY, '1')
    }, 3000)
    return () => {
      if (autoOpenTimerRef.current) clearTimeout(autoOpenTimerRef.current)
    }
  }, [speak, startFlow, voiceEnabled])

  const submitName = useCallback(
    async (inputName) => {
      const cleanName = inputName.trim()
      if (!cleanName) return false
      setName(cleanName)
      appendUser(cleanName)
      setStage('ask_role')
      await appendAssistant(`${cleanName} Sir 👋 Smart Labour Chowk me aapka swagat hai.`)
      await appendAssistant('Aapka role choose kariye, main aapko best guidance dunga.', {
        options: [
          { label: '👷 Worker', value: 'worker', action: 'role' },
          { label: '🏗 Contractor', value: 'contractor', action: 'role' },
          { label: '🏠 User', value: 'user', action: 'role' },
        ],
      })
      return true
    },
    [appendAssistant, appendUser]
  )

  const chooseRole = useCallback(
    async (nextRole) => {
      if (!roleContent[nextRole] || actionLockRef.current) return
      actionLockRef.current = true
      try {
        setRole(nextRole)
        appendUser(roleContent[nextRole].label)
        setStage('role_flow')
        await appendAssistant(roleContent[nextRole].intro)
        for (const point of roleContent[nextRole].points) {
          await appendAssistant(`• ${point}`, {}, 650)
        }
        await appendAssistant('📲 App install karne par aapko aur better experience milega.')
        await appendAssistant('Aap next kya karna chahenge?', {
          options: [
            { label: 'Install App', href: PLAY_STORE_URL, action: 'link' },
            { label: 'Join WhatsApp', href: WHATSAPP_LINK, action: 'link' },
            { label: 'Feedback Dena Hai', value: 'feedback', action: 'feedback' },
          ],
        })
        setStage('feedback')
      } finally {
        actionLockRef.current = false
      }
    },
    [appendAssistant, appendUser]
  )

  const saveFeedback = useCallback(
    ({ phone, suggestion, feedback }) => {
      const record = {
        id: `${Date.now()}`,
        name,
        role,
        phone,
        suggestion,
        feedback,
        createdAt: new Date().toISOString(),
      }
      try {
        const existing = JSON.parse(localStorage.getItem(STORAGE_FEEDBACK_KEY) || '[]')
        existing.push(record)
        localStorage.setItem(STORAGE_FEEDBACK_KEY, JSON.stringify(existing))
      } catch {
        /* ignore */
      }
      appendUser('Feedback Submitted')
      appendAssistant('Shukriya. Aapka feedback save ho gaya hai. Main hamesha help ke liye available hoon.')
      setStage('done')
    },
    [appendAssistant, appendUser, name, role]
  )

  const restart = useCallback(() => {
    stopSpeaking()
    typingTimersRef.current.forEach((t) => clearTimeout(t))
    typingTimersRef.current = []
    setIsTyping(false)
    setMessages([])
    setRole('')
    setName('')
    setStage('welcome')
    queueRef.current = Promise.resolve()
    startFlow(true)
  }, [startFlow, stopSpeaking])

  useEffect(() => {
    if (typeof window === 'undefined' || !window.speechSynthesis) return undefined
    const onVoicesChanged = () => { /* trigger browser voice cache warmup */ window.speechSynthesis.getVoices() }
    window.speechSynthesis.addEventListener('voiceschanged', onVoicesChanged)
    onVoicesChanged()
    return () => {
      window.speechSynthesis.removeEventListener('voiceschanged', onVoicesChanged)
    }
  }, [])

  useEffect(() => () => {
    stopSpeaking()
    typingTimersRef.current.forEach((t) => clearTimeout(t))
  }, [stopSpeaking])

  const toggleVoice = useCallback(() => {
    setVoiceEnabled((prev) => {
      const next = !prev
      if (!next) stopSpeaking()
      return next
    })
  }, [stopSpeaking])

  const value = useMemo(
    () => ({
      isOpen,
      voiceEnabled,
      messages,
      isTyping,
      isSpeaking,
      name,
      role,
      stage,
      openAssistant,
      closeAssistant,
      toggleVoice,
      submitName,
      chooseRole,
      saveFeedback,
      restart,
    }),
    [isOpen, voiceEnabled, messages, isTyping, isSpeaking, name, role, stage, openAssistant, closeAssistant, toggleVoice, submitName, chooseRole, saveFeedback, restart]
  )

  return <AssistantContext.Provider value={value}>{children}</AssistantContext.Provider>
}

export function useAssistant() {
  const ctx = useContext(AssistantContext)
  if (!ctx) throw new Error('useAssistant must be used within AssistantProvider')
  return ctx
}

