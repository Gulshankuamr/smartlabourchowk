import './globals.css'
import { inter, poppins, epilogue } from '../lib/fonts'
import AppProviders from '../components/providers/AppProviders'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import StickyConversionDock from '../components/app-download/StickyConversionDock'
import JsonLd from '../components/seo/JsonLd'
import { SITE_NAME, SITE_URL } from '../constants/app'

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: {
    default: `${SITE_NAME} — भारत का डिजिटल लेबर चौक`,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    'Smart Labour Chowk — घर बैठे काम खोजो, मजदूर ढूंढो। Nearby jobs, ratings, WhatsApp connect. Hindi + English.',
  openGraph: {
    type: 'website',
    locale: 'hi_IN',
    url: SITE_URL,
    siteName: SITE_NAME,
    title: SITE_NAME,
    description: 'India’s digital labour chowk — workers, contractors, daily jobs.',
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_NAME,
    description: 'India’s digital labour chowk — app-first hiring.',
  },
  alternates: {
    canonical: '/',
  },
  robots: { index: true, follow: true },
}

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/favicon.ico`,
  sameAs: [],
}

export default function RootLayout({ children }) {
  return (
    <html lang="hi" className={`${inter.variable} ${poppins.variable} ${epilogue.variable}`} suppressHydrationWarning>
      <body className="min-h-screen bg-[#FFF7F2] font-sans text-[#1A1A1A] antialiased" suppressHydrationWarning>
        <JsonLd data={organizationJsonLd} />
        <AppProviders>
          <Navbar />
          <main className="pt-[5.75rem]">{children}</main>
          <Footer />
          <StickyConversionDock />
        </AppProviders>
      </body>
    </html>
  )
}
