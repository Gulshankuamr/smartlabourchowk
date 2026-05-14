import Link from 'next/link'

export const metadata = { title: 'Contact', alternates: { canonical: '/contact' } }

export default function Page() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-28">
      <h1 className="font-display text-3xl font-extrabold">Contact</h1>
      <p className="mt-4 text-neutral-600">support@smartlabourchowk.com (placeholder)</p>
      <Link href="/download-app" className="mt-8 inline-block font-bold text-[#FF6B00]">
        Download app →
      </Link>
    </div>
  )
}
