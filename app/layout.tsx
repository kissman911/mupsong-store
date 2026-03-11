import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { CartProvider } from '@/lib/cart'

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' })

export const metadata: Metadata = {
  title: 'Mupsong — Premium TV Boxes',
  description:
    'Stream everything in stunning 4K. The Mupsong Pro delivers fast performance, an intuitive smart OS, and crystal-clear resolution.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} min-h-screen bg-[#0a0a0a] font-sans text-[#f5f5f5] antialiased`}>
        <CartProvider>
          <Header />
          <main className="min-h-[calc(100vh-4rem)]">{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  )
}
