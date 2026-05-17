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
        className={`mx-auto flex max-w-7xl items-center justify-between gap-3 rounded-b-[1.75rem] border border-white/10 bg-[#1A1A1A] px-4 py-3 shadow-sm backdrop-blur-xl transition sm:px-6 ${
          scrolled ? 'shadow-md shadow-orange-500/20' : ''
        }`}
      >
        {/* Logo */}
        <Link href="/" className="flex shrink-0 items-center gap-2">
          <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-[#FF6B00] to-[#FF9A00] text-sm font-black text-white shadow-md shadow-orange-500/25">
            SLC
          </span>
          <span className="hidden font-display text-sm font-extrabold leading-tight text-white sm:block">
            Smart Labour
            <span className="block text-[11px] font-semibold text-[#FF6B00]">Chowk</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-1 lg:flex">
          {items.map((it) => {
            const active = pathname === it.href
            return (
              <Link
                key={it.href}
                href={it.href}
                className={`rounded-full px-3 py-2 text-[13px] font-semibold transition ${
                  active
                    ? 'bg-[#FF6B00]/15 text-[#FF9A00]'
                    : 'text-white/70 hover:bg-white/10 hover:text-white'
                }`}
              >
                {it.label}
              </Link>
            )
          })}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-2">
          <LanguageSwitcher className="hidden sm:inline-flex" />
          <Link
            href="/join-now"
            className="hidden rounded-full bg-gradient-to-r from-[#FF6B00] to-[#FF9A00] px-4 py-2.5 text-xs font-bold text-white shadow-lg shadow-orange-500/25 transition hover:brightness-110 sm:inline-flex sm:text-sm"
          >
            {t('nav.joinNow')}
          </Link>
          <button
            type="button"
            className="inline-flex rounded-xl border border-white/10 bg-white/10 p-2.5 text-white transition hover:bg-white/20 lg:hidden"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[80] bg-black/60 backdrop-blur-sm lg:hidden"
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
              className="absolute right-0 top-0 flex h-full w-[min(100%,380px)] flex-col bg-[#1A1A1A] shadow-2xl"
            >
              {/* Drawer Header */}
              <div className="flex items-center justify-between border-b border-white/10 p-4">
                <div className="flex items-center gap-2">
                  <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-[#FF6B00] to-[#FF9A00] text-xs font-black text-white">
                    SLC
                  </span>
                  <span className="font-display font-bold text-white">Menu</span>
                </div>
                <button
                  type="button"
                  className="rounded-full p-2 text-white/60 transition hover:bg-white/10 hover:text-white"
                  onClick={() => setOpen(false)}
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              {/* Drawer Links */}
              <div className="flex flex-1 flex-col gap-1 overflow-y-auto p-4">
                {items.map((it) => {
                  const active = pathname === it.href
                  return (
                    <Link
                      key={it.href}
                      href={it.href}
                      onClick={() => setOpen(false)}
                      className={`rounded-2xl px-4 py-3 text-base font-semibold transition ${
                        active
                          ? 'bg-[#FF6B00]/15 text-[#FF9A00]'
                          : 'text-white/70 hover:bg-white/8 hover:text-white'
                      }`}
                    >
                      {it.label}
                    </Link>
                  )
                })}

                <div className="mt-3 flex flex-col gap-2">
                  <Link
                    href="/join-now"
                    onClick={() => setOpen(false)}
                    className="rounded-2xl bg-gradient-to-r from-[#FF6B00] to-[#FF9A00] px-4 py-4 text-center text-base font-bold text-white transition hover:brightness-110"
                  >
                    {t('nav.joinNow')}
                  </Link>
                  <a
                    href={PLAY_STORE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-center gap-2 rounded-2xl border border-[#FF6B00]/40 bg-[#FF6B00]/10 px-4 py-4 text-base font-bold text-[#FF9A00] transition hover:bg-[#FF6B00]/20"
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
                    className="rounded-2xl border border-white/10 bg-white/10 px-4 py-4 text-center text-base font-bold text-white transition hover:bg-white/15"
                  >
                    {t('common.openInApp')}
                  </button>
                </div>

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