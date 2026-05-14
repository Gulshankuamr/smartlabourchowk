'use client'

import { createContext, useCallback, useContext, useMemo, useState } from 'react'
import DownloadAppModal from '../components/modals/DownloadAppModal'

const DownloadPromptContext = createContext(null)

export function DownloadPromptProvider({ children }) {
  const [open, setOpen] = useState(false)
  const openPrompt = useCallback(() => setOpen(true), [])
  const closePrompt = useCallback(() => setOpen(false), [])

  const value = useMemo(() => ({ openPrompt, closePrompt }), [openPrompt, closePrompt])

  return (
    <DownloadPromptContext.Provider value={value}>
      {children}
      <DownloadAppModal open={open} onClose={closePrompt} />
    </DownloadPromptContext.Provider>
  )
}

export function useDownloadPrompt() {
  const ctx = useContext(DownloadPromptContext)
  if (!ctx) throw new Error('useDownloadPrompt must be used within DownloadPromptProvider')
  return ctx
}
