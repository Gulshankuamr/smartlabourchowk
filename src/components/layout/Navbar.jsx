'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { HiOutlineCalendar } from 'react-icons/hi2'

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'Features', path: '/features' },
  { name: 'Modules', path: '/modules' },
  { name: 'Pricing', path: '/pricing' },
  { name: 'Resources', path: '/resources' },
]

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(false)
  const router = useRouter()
  const pathname = usePathname()

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white border-b border-gray-100
                       shadow-[0_1px_12px_rgba(0,0,0,0.05)] backdrop-blur-md">
      <div className="max-w-[1280px] mx-auto px-8">

        {/* ── Main row ── */}
        <div className="flex h-20 items-center justify-between">

          {/* LEFT — Logo */}
          <div className="flex items-center shrink-0">
            <Link href="/" className="flex items-center gap-2">
              <img src="/assets/finalLogo.webp" alt="ConnectSkool" className="h-14 w-auto" />
            </Link>
          </div>

          {/* CENTER — Desktop Nav (absolutely centered) */}
          <nav className="hidden lg:flex items-center gap-1 absolute left-1/2 -translate-x-1/2">
            {navItems.map((item) => {
              const isActive = pathname === item.path
              return (
                <Link
                  key={item.name}
                  href={item.path}
                  className={`relative inline-flex items-center px-3 py-1 text-[13.5px]
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
              )
            })}
          </nav>

          {/* RIGHT — CTA + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: 'transparent', color: '#1D4F6F' }}
              whileTap={{ scale: 0.97 }}
              onClick={() => router.push('/demo')}
              className="hidden lg:inline-flex items-center gap-2 px-6 py-2.5 rounded-full
                         bg-[#F0970A] text-white text-[13.5px] font-bold
                         border-2 border-[#F0970A]
                         shadow-[0_8px_28px_rgba(240,151,10,0.45)]
                         transition-all duration-250 cursor-pointer"
            >
              <HiOutlineCalendar size={15} />
              Book Demo →
            </motion.button>

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
                  const isActive = pathname === item.path
                  return (
                    <button
                      key={item.name}
                      onClick={() => { router.push(item.path); setOpenMenu(false) }}
                      className={`w-full flex items-center px-4 py-3 rounded-xl
                                  text-sm font-bold transition-colors duration-150
                                  cursor-pointer border-none bg-transparent text-left
                                  ${isActive
                          ? 'bg-[#f0f9ff] text-[#1C5477]'
                          : 'text-gray-900 hover:bg-gray-50 hover:text-[#1C5477]'
                        }`}
                    >
                      {item.name}
                    </button>
                  )
                })}

                {/* Mobile CTA */}
                <div className="mt-3 px-1">
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