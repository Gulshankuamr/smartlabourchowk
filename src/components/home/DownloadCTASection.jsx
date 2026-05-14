'use client'

import Link from 'next/link'
import { Download } from 'lucide-react'
import { PLAY_STORE_URL } from '../../constants/app'

export default function DownloadCTASection() {
  return (
    <section className="bg-gradient-to-r from-[#FF6B00] to-[#FF9A00] py-14 text-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-5 px-4 text-center sm:px-6 lg:px-8">
        <h2 className="font-display text-3xl font-extrabold sm:text-4xl">Install the app and start hiring or working today.</h2>
        <div className="flex flex-wrap justify-center gap-3">
          <a href={PLAY_STORE_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-2xl bg-white px-6 py-3 text-sm font-bold text-[#FF6B00]">
            <Download className="h-4 w-4" />Play Store
          </a>
          <Link href="/download-app" className="rounded-2xl border border-white/70 px-6 py-3 text-sm font-bold text-white">View Download Page</Link>
        </div>
      </div>
    </section>
  )
}
