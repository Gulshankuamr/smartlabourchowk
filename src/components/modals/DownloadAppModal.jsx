'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { X, Download } from 'lucide-react'
import Link from 'next/link'
import { PLAY_STORE_URL } from '../../constants/app'

export default function DownloadAppModal({ open, onClose }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[90] flex items-end justify-center bg-black/50 p-4 pb-8 backdrop-blur-sm sm:items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 30, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-md rounded-3xl bg-white p-6 shadow-2xl"
          >
            <button
              type="button"
              onClick={onClose}
              className="absolute right-4 top-4 rounded-full p-2 text-neutral-500 hover:bg-neutral-100"
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>
            <div className="flex items-start gap-4 pr-10">
              <div className="relative flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-[#FF6B00] to-[#FF9A00] text-lg font-black text-white ring-2 ring-[#FF6B00]/30">
                SLC
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-[#FF6B00]">Smart Labour Chowk</p>
                <p className="mt-1 text-lg font-bold text-[#1A1A1A]">ऐप में जारी रखें</p>
                <p className="mt-1 text-sm text-neutral-600">
                  नंबर देखने, चैट और काम अप्लाई के लिए ऐप इंस्टॉल करें।
                </p>
              </div>
            </div>
            <Link
              href={PLAY_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-[#FF6B00] to-[#FF9A00] py-3.5 text-sm font-bold text-white shadow-lg shadow-orange-500/25"
            >
              <Download className="h-5 w-5" />
              Play Store से डाउनलोड
            </Link>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
