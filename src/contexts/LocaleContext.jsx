'use client'

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import en from '../locales/en'
import hi from '../locales/hi'

const STORAGE_LOCALE = 'slc-locale'
const STORAGE_LANG_MODAL = 'slc-language-modal-seen'

const messages = { en, hi }

function getByPath(obj, path) {
  return path.split('.').reduce((acc, key) => (acc && acc[key] !== undefined ? acc[key] : undefined), obj)
}

const LocaleContext = createContext(null)

export function LocaleProvider({ children }) {
  const [locale, setLocaleState] = useState('hi')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    try {
      const saved = localStorage.getItem(STORAGE_LOCALE)
      if (saved === 'en' || saved === 'hi') setLocaleState(saved)
    } catch {
      /* ignore */
    }
  }, [])

  const setLocale = useCallback((next) => {
    const l = next === 'en' ? 'en' : 'hi'
    setLocaleState(l)
    try {
      localStorage.setItem(STORAGE_LOCALE, l)
    } catch {
      /* ignore */
    }
  }, [])

  const t = useCallback(
    (path, fallback) => {
      const val = getByPath(messages[locale], path)
      if (val !== undefined) return val
      const enVal = getByPath(messages.en, path)
      if (enVal !== undefined) return enVal
      return fallback ?? path
    },
    [locale]
  )

  const value = useMemo(
    () => ({
      locale,
      setLocale,
      t,
      dir: 'ltr',
      markLanguageModalSeen: () => {
        try {
          localStorage.setItem(STORAGE_LANG_MODAL, '1')
        } catch {
          /* ignore */
        }
      },
      hasLanguageModalBeenSeen: () => {
        try {
          return localStorage.getItem(STORAGE_LANG_MODAL) === '1'
        } catch {
          return false
        }
      },
      mounted,
    }),
    [locale, setLocale, t, mounted]
  )

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
}

export function useLocale() {
  const ctx = useContext(LocaleContext)
  if (!ctx) throw new Error('useLocale must be used within LocaleProvider')
  return ctx
}

export { STORAGE_LANG_MODAL, STORAGE_LOCALE }
