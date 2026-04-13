import './globals.css'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import WhatsAppFloat from '../components/shared/WhatsAppFloat'

export const metadata = {
  title: 'ConnectSkool',
  description: 'Complete School ERP Software',
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen" suppressHydrationWarning>
        <Navbar />
        <main className="pt-20">{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  )
}