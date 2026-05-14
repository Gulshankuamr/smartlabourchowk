'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Download } from 'lucide-react'
import { useLocale } from '../../contexts/LocaleContext'
import { useDownloadPrompt } from '../../contexts/DownloadPromptContext'
import LanguageSwitcher from '../language/LanguageSwitcher'
import { PLAY_STORE_URL } from '../../constants/app'

export default function Navbar() {
  const { t } = useLocale()
  const { openPrompt } = useDownloadPrompt()
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const items = [
    { href: '/', label: t('nav.home') },
    { href: '/features', label: t('nav.features') },
    { href: '/how-it-works', label: t('nav.howItWorks') },
    { href: '/workers', label: t('nav.workers') },
    { href: '/contractors', label: t('nav.contractors') },
    { href: '/download-app', label: t('nav.downloadApp') },
    { href: '/login', label: t('nav.login') },
  ]

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-4">
      <div
        className={`mx-auto flex max-w-7xl items-center justify-between gap-3 rounded-b-[1.75rem] border border-white/50 bg-white/75 px-4 py-3 shadow-sm backdrop-blur-xl transition sm:px-6 ${
          scrolled ? 'shadow-md shadow-orange-500/10' : ''
        }`}
      >
        <Link href="/" className="flex shrink-0 items-center gap-2">
          <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-[#FF6B00] to-[#FF9A00] text-sm font-black text-white shadow-md shadow-orange-500/25">
            SLC
          </span>
          <span className="hidden font-display text-sm font-extrabold leading-tight text-[#1A1A1A] sm:block">
            Smart Labour
            <span className="block text-[11px] font-semibold text-[#FF6B00]">Chowk</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {items.map((it) => {
            const active = pathname === it.href
            return (
              <Link
                key={it.href}
                href={it.href}
                className={`rounded-full px-3 py-2 text-[13px] font-semibold transition ${
                  active ? 'bg-[#FFF7F2] text-[#FF6B00]' : 'text-neutral-700 hover:bg-white/80 hover:text-[#1A1A1A]'
                }`}
              >
                {it.label}
              </Link>
            )
          })}
        </nav>

        <div className="flex items-center gap-2">
          <LanguageSwitcher className="hidden sm:inline-flex" />
          <Link
            href="/join-now"
            className="hidden rounded-full bg-gradient-to-r from-[#FF6B00] to-[#FF9A00] px-4 py-2.5 text-xs font-bold text-white shadow-lg shadow-orange-500/25 transition hover:brightness-105 sm:inline-flex sm:text-sm"
          >
            {t('nav.joinNow')}
          </Link>
          <button
            type="button"
            className="lg:hidden inline-flex rounded-xl border border-neutral-200 bg-white p-2.5 text-[#1A1A1A]"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[80] bg-[#1A1A1A]/50 backdrop-blur-sm lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
          >
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 320 }}
              onClick={(e) => e.stopPropagation()}
              className="absolute right-0 top-0 flex h-full w-[min(100%,380px)] flex-col bg-white shadow-2xl"
            >
              <div className="flex items-center justify-between border-b border-neutral-100 p-4">
                <span className="font-display font-bold text-[#1A1A1A]">Menu</span>
                <button type="button" className="rounded-full p-2 hover:bg-neutral-100" onClick={() => setOpen(false)}>
                  <X className="h-6 w-6" />
                </button>
              </div>
              <div className="flex flex-1 flex-col gap-1 overflow-y-auto p-4">
                {items.map((it) => (
                  <Link
                    key={it.href}
                    href={it.href}
                    onClick={() => setOpen(false)}
                    className="rounded-2xl px-4 py-3 text-base font-semibold text-neutral-800 hover:bg-[#FFF7F2]"
                  >
                    {it.label}
                  </Link>
                ))}
                <Link
                  href="/join-now"
                  onClick={() => setOpen(false)}
                  className="mt-2 rounded-2xl bg-gradient-to-r from-[#FF6B00] to-[#FF9A00] px-4 py-4 text-center text-base font-bold text-white"
                >
                  {t('nav.joinNow')}
                </Link>
                <a
                  href={PLAY_STORE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-center gap-2 rounded-2xl border-2 border-[#FF6B00]/30 bg-[#FFF7F2] px-4 py-4 text-base font-bold text-[#FF6B00]"
                >
                  <Download className="h-5 w-5" />
                  {t('nav.downloadApp')}
                </a>
                <button
                  type="button"
                  onClick={() => {
                    openPrompt()
                    setOpen(false)
                  }}
                  className="rounded-2xl bg-[#1A1A1A] px-4 py-4 text-center text-base font-bold text-white"
                >
                  {t('common.openInApp')}
                </button>
                <div className="mt-4 flex justify-center">
                  <LanguageSwitcher />
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
