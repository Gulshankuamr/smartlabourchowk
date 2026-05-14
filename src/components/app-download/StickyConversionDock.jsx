'use client'

import { motion } from 'framer-motion'
import { MessageCircle, Download } from 'lucide-react'
import Link from 'next/link'
import { WHATSAPP_LINK, PLAY_STORE_URL } from '../../constants/app'

export default function StickyConversionDock() {
  return (
    <div className="pointer-events-none fixed bottom-5 right-4 z-[60] flex flex-col items-end gap-3 sm:bottom-8 sm:right-6">
      <motion.div
        className="pointer-events-auto"
        animate={{ y: [0, -4, 0] }}
        transition={{ repeat: Infinity, duration: 3.2, ease: 'easeInOut' }}
      >
        <Link
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-14 w-14 items-center justify-center rounded-full bg-[#16A34A] text-white shadow-lg shadow-green-600/30 ring-4 ring-white/90"
          aria-label="WhatsApp"
        >
          <MessageCircle className="h-7 w-7" />
        </Link>
      </motion.div>
      <motion.div
        className="pointer-events-auto"
        animate={{ scale: [1, 1.04, 1] }}
        transition={{ repeat: Infinity, duration: 2.4, ease: 'easeInOut' }}
      >
        <Link
          href={PLAY_STORE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 rounded-full bg-gradient-to-r from-[#FF6B00] to-[#FF9A00] px-4 py-3 text-sm font-bold text-white shadow-xl shadow-orange-500/35 ring-4 ring-white/90"
        >
          <Download className="h-5 w-5 shrink-0" />
          <span className="hidden sm:inline">ऐप डाउनलोड</span>
          <span className="sm:hidden">ऐप</span>
        </Link>
      </motion.div>
    </div>
  )
}
