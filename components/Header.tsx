'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ShoppingCart } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { useCart } from '@/lib/cart'
import { CartDrawer } from './CartDrawer'
import { useState } from 'react'

const navLinks = [
  { href: '/products', label: 'Products' },
  { href: '/about', label: 'About' },
  { href: '/support', label: 'Support' },
]

export function Header() {
  const { totalItems } = useCart()
  const [cartOpen, setCartOpen] = useState(false)

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0a0a0a]/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center">
            <Image src="/logo-mupsong-dark.svg" alt="Mupsong" width={180} height={40} priority />
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-gray-400 transition-colors hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <Button
            variant="ghost"
            size="icon"
            className="relative text-gray-400 hover:text-white"
            onClick={() => setCartOpen(true)}
          >
            <ShoppingCart className="h-5 w-5" />
            {totalItems > 0 && (
              <Badge className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-blue-500 p-0 text-[10px] text-white">
                {totalItems}
              </Badge>
            )}
          </Button>
        </div>
      </header>
      <CartDrawer open={cartOpen} onOpenChange={setCartOpen} />
    </>
  )
}
