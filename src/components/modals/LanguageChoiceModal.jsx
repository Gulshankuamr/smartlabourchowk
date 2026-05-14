'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLocale, STORAGE_LANG_MODAL } from '../../contexts/LocaleContext'

export default function LanguageChoiceModal() {
  const { t, setLocale, mounted } = useLocale()
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!mounted) return
    try {
      const seen = localStorage.getItem(STORAGE_LANG_MODAL) === '1'
      setOpen(!seen)
    } catch {
      setOpen(true)
    }
  }, [mounted])

  const choose = (loc) => {
    setLocale(loc)
    try {
      localStorage.setItem(STORAGE_LANG_MODAL, '1')
    } catch {
      /* ignore */
    }
    setOpen(false)
  }

  if (!mounted) return null

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#1A1A1A]/60 p-4 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          role="dialog"
          aria-modal="true"
          aria-labelledby="lang-modal-title"
        >
          <motion.div
            initial={{ scale: 0.94, opacity: 0, y: 16 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.96, opacity: 0, y: 12 }}
            transition={{ type: 'spring', damping: 26, stiffness: 320 }}
            className="w-full max-w-md rounded-3xl bg-white p-8 shadow-2xl ring-1 ring-black/5"
          >
            <p id="lang-modal-title" className="text-center text-lg font-bold text-[#1A1A1A]">
              {t('languageModal.title')}
            </p>
            <p className="mt-2 text-center text-sm text-neutral-600">Smart Labour Chowk</p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              <button
                type="button"
                onClick={() => choose('hi')}
                className="rounded-2xl bg-[#FFF7F2] px-4 py-4 text-base font-bold text-[#1A1A1A] ring-2 ring-[#FF6B00]/30 transition hover:ring-[#FF6B00]"
              >
                {t('languageModal.hi')}
              </button>
              <button
                type="button"
                onClick={() => choose('en')}
                className="rounded-2xl bg-gradient-to-br from-[#FF6B00] to-[#FF9A00] px-4 py-4 text-base font-bold text-white shadow-lg shadow-orange-500/30 transition hover:brightness-105"
              >
                {t('languageModal.en')}
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
