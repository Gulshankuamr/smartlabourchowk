'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { Menu, X, ChevronDown } from 'lucide-react'
import { HiOutlineCalendar } from 'react-icons/hi2'
import FeatureDropdownComponent from '../../components/features/Featuredropdowncomponent'

// ── Nav items ─────────────────────────────────────────────────────────────────
const navItems = [
  { name: 'Home',      path: '/' },
  { name: 'Features',  path: '/features', hasDropdown: true },
  { name: 'Modules',   path: '/modules' },
  { name: 'Pricing',   path: '/pricing' },
  { name: 'Resources', path: '/resources' },
]

// ── Feature Dropdown Wrapper (desktop) ───────────────────────────────────────
function FeatureDropdownWrapper({ isOpen }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 10, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 10, scale: 0.97 }}
          transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
          // Keeps the dropdown hoverable without flickering
          style={{ position: 'absolute', top: 'calc(100% + 14px)', left: '50%', transform: 'translateX(-50%)', zIndex: 50 }}
        >
          <FeatureDropdownComponent />
        </motion.div>
      )}
    </AnimatePresence>
  )
}

// ── Navbar ────────────────────────────────────────────────────────────────────
export default function Navbar() {
  const [openMenu, setOpenMenu]           = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const [mobileExpanded, setMobileExpanded] = useState(null)
  const router   = useRouter()
  const pathname = usePathname()
  const timer    = useRef(null)

  const onEnter = (name) => { clearTimeout(timer.current); setActiveDropdown(name) }
  const onLeave = ()     => { timer.current = setTimeout(() => setActiveDropdown(null), 150) }
  useEffect(() => () => clearTimeout(timer.current), [])

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white border-b border-gray-100
                       shadow-[0_1px_12px_rgba(0,0,0,0.05)] backdrop-blur-md">
      <div className="max-w-[1280px] mx-auto px-8">

        {/* ── Main row ── */}
        <div className="flex h-20 items-center justify-between">

          {/* LEFT — Logo + Nav */}
          <div className="flex items-center gap-10">

            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 shrink-0">
              <img src="/assets/finalLogo.webp" alt="ConnectSkool" className="h-11 w-auto" />
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => {
                const isActive  = pathname === item.path
                const hasDD     = !!item.hasDropdown          // ← fixed: was item.dropdown
                const isOpen    = activeDropdown === item.name

                return (
                  <div
                    key={item.name}
                    className="relative px-2"
                    onMouseEnter={() => hasDD && onEnter(item.name)}
                    onMouseLeave={onLeave}
                  >
                 {hasDD ? (
  <button
    onClick={() => {
      router.push('/features')
      setActiveDropdown(null)
    }}
    className={`relative inline-flex items-center gap-1 py-1 text-[13.5px]
                font-bold bg-transparent border-none cursor-pointer
                after:absolute after:bottom-[-3px] after:left-0 after:h-[2.5px]
                after:rounded-full after:bg-[#E48608]
                after:transition-all after:duration-200
                ${isActive || isOpen
                  ? 'text-[#1C5477] after:w-full'
                  : 'text-gray-900 hover:text-[#1C5477] after:w-0 hover:after:w-full'
                }`}
  >
    {item.name}
    <ChevronDown
      size={13}
      className={`text-gray-400 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
    />
  </button>
) : (
                      /* Normal link */
                      <Link
                        href={item.path}
                        className={`relative inline-flex items-center py-1 text-[13.5px]
                                    font-bold transition-colors duration-150
                                    after:absolute after:bottom-[-3px] after:left-0 after:h-[2.5px]
                                    after:rounded-full after:bg-[#E48608]
                                    after:transition-all after:duration-200
                                    ${isActive
                                      ? 'text-[#1C5477] after:w-full'
                                      : 'text-gray-900 hover:text-[#1C5477] after:w-0 hover:after:w-full'
                                    }`}
                      >
                        {item.name}
                      </Link>
                    )}

                    {/* ← FeatureDropdown renders here */}
                    {hasDD && <FeatureDropdownWrapper isOpen={isOpen} />}
                  </div>
                )
              })}
            </nav>
          </div>

          {/* RIGHT — CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: 'transparent', color: '#1D4F6F' }}
              whileTap={{ scale: 0.97 }}
              onClick={() => router.push('/demo')}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full
                         bg-[#F0970A] text-white text-[13.5px] font-bold
                         border-2 border-[#F0970A]
                         shadow-[0_8px_28px_rgba(240,151,10,0.45)]
                         transition-all duration-250 cursor-pointer"
            >
              <HiOutlineCalendar size={15} />
              Book Demo →
            </motion.button>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden inline-flex p-2.5 rounded-xl border border-gray-200
                       text-gray-600 hover:bg-gray-50 transition cursor-pointer"
            onClick={() => setOpenMenu((p) => !p)}
            aria-label="Toggle menu"
          >
            {openMenu ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* ── Mobile menu ── */}
        <AnimatePresence>
          {openMenu && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.22, ease: 'easeInOut' }}
              className="overflow-hidden border-t border-gray-100 lg:hidden"
            >
              <div className="flex flex-col gap-1 py-3">
                {navItems.map((item) => {
                  const isActive   = pathname === item.path
                  const hasDD      = !!item.hasDropdown       // ← fixed
                  const isExpanded = mobileExpanded === item.name

                  return (
                    <div key={item.name}>
                      <button
                        onClick={() => {
                          if (hasDD) setMobileExpanded(isExpanded ? null : item.name)
                          else { router.push(item.path); setOpenMenu(false) }
                        }}
                        className={`w-full flex items-center justify-between px-4 py-3 rounded-xl
                                    text-sm font-bold transition-colors duration-150 cursor-pointer
                                    border-none bg-transparent text-left
                                    ${isActive
                                      ? 'bg-[#f0f9ff] text-[#1C5477]'
                                      : 'text-gray-900 hover:bg-gray-50 hover:text-[#1C5477]'
                                    }`}
                      >
                        {item.name}
                        {hasDD && (
                          <ChevronDown
                            size={14}
                            className={`text-gray-400 transition-transform duration-200
                                        ${isExpanded ? 'rotate-180' : ''}`}
                          />
                        )}
                      </button>

                      {/* Mobile Feature Dropdown */}
                      <AnimatePresence>
                        {hasDD && isExpanded && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.16 }}
                            className="overflow-hidden mx-2 mb-2"
                          >
                            {/* Render FeatureDropdownComponent in mobile-friendly static mode */}
                            <div className="rounded-xl border border-gray-100 overflow-hidden">
                              <FeatureDropdownComponent mobileMode />
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  )
                })}

                {/* Mobile CTA */}
                <div className="mt-3 px-1 flex flex-col gap-2.5">
                  <motion.button
                    whileHover={{ scale: 1.02, backgroundColor: 'transparent', color: '#1D4F6F' }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => { setOpenMenu(false); router.push('/demo') }}
                    className="w-full flex items-center justify-center gap-2 py-3 rounded-full
                               bg-[#F0970A] text-white text-sm font-bold
                               border-2 border-[#F0970A]
                               shadow-[0_6px_20px_rgba(240,151,10,0.38)]
                               transition-all duration-250 cursor-pointer"
                  >
                    <HiOutlineCalendar size={15} />
                    Book Demo →
                  </motion.button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </header>
  )
}