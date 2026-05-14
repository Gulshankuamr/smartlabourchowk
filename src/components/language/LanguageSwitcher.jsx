'use client'

import { useLocale } from '../../contexts/LocaleContext'

export default function LanguageSwitcher({ className = '', variant = 'light' }) {
  const { locale, setLocale } = useLocale()
  const isDark = variant === 'dark'

  return (
    <div
      className={`inline-flex rounded-full p-1 text-xs font-bold ring-1 ${
        isDark ? 'bg-white/10 ring-white/15' : 'bg-[#1A1A1A]/5 ring-black/5'
      } ${className}`}
      role="group"
      aria-label="Language"
    >
      <button
        type="button"
        onClick={() => setLocale('hi')}
        className={`rounded-full px-3 py-1.5 transition ${
          locale === 'hi'
            ? isDark
              ? 'bg-white text-[#FF6B00] shadow-sm'
              : 'bg-white text-[#FF6B00] shadow-sm'
            : isDark
              ? 'text-white/75 hover:text-white'
              : 'text-neutral-600 hover:text-[#1A1A1A]'
        }`}
      >
        हिं
      </button>
      <button
        type="button"
        onClick={() => setLocale('en')}
        className={`rounded-full px-3 py-1.5 transition ${
          locale === 'en'
            ? isDark
              ? 'bg-gradient-to-r from-[#FF6B00] to-[#FF9A00] text-white shadow-sm'
              : 'bg-white text-[#FF6B00] shadow-sm'
            : isDark
              ? 'text-white/75 hover:text-white'
              : 'text-neutral-600 hover:text-[#1A1A1A]'
        }`}
      >
        EN
      </button>
    </div>
  )
}
