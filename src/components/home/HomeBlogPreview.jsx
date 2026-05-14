'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { blogPosts } from '../../data/blogPosts'
import { useLocale } from '../../contexts/LocaleContext'

export default function HomeBlogPreview() {
  const { t } = useLocale()
  const posts = blogPosts.slice(0, 3)

  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <h2 className="font-display text-3xl font-extrabold text-[#1A1A1A] sm:text-4xl">{t('blog.title')}</h2>
            <p className="mt-2 max-w-2xl text-neutral-600">{t('blog.subtitle')}</p>
          </div>
          <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-bold text-[#FF6B00]">
            {t('common.exploreMore')}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {posts.map((p, i) => (
            <motion.article
              key={p.slug}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="flex flex-col rounded-3xl border border-neutral-100 bg-[#FFF7F2] p-6 shadow-sm transition hover:shadow-lg"
            >
              <p className="text-xs font-bold uppercase tracking-wide text-[#FF6B00]">{p.category}</p>
              <h3 className="mt-2 text-lg font-extrabold text-[#1A1A1A]">{p.title}</h3>
              <p className="mt-2 flex-1 text-sm text-neutral-600">{p.excerpt}</p>
              <Link href={`/blog/${p.slug}`} className="mt-4 text-sm font-bold text-[#1A1A1A] underline-offset-4 hover:underline">
                {t('common.learnMore')}
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
