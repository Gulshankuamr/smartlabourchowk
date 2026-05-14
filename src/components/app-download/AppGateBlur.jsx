'use client'

import { motion } from 'framer-motion'
import { Lock } from 'lucide-react'
import { useDownloadPrompt } from '../../contexts/DownloadPromptContext'
import { useLocale } from '../../contexts/LocaleContext'

export default function AppGateBlur({ children, className = '' }) {
  const { openPrompt } = useDownloadPrompt()
  const { t } = useLocale()

  return (
    <button
      type="button"
      onClick={openPrompt}
      className={`group relative block w-full overflow-hidden rounded-3xl text-left ${className}`}
    >
      <div className="pointer-events-none select-none blur-[6px] transition group-hover:blur-[8px]">{children}</div>
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-gradient-to-t from-[#1A1A1A]/85 via-[#1A1A1A]/55 to-transparent p-4">
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/95 text-[#FF6B00] shadow-lg">
          <Lock className="h-6 w-6" />
        </span>
        <p className="max-w-xs text-center text-sm font-bold text-white">{t('common.installToContinue')}</p>
        <span className="rounded-full bg-gradient-to-r from-[#FF6B00] to-[#FF9A00] px-4 py-2 text-xs font-bold text-white">
          {t('common.downloadApp')}
        </span>
      </div>
    </button>
  )
}
