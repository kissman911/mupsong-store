import Link from 'next/link'
import { Separator } from '@/components/ui/separator'

const footerLinks = {
  Shop: [
    { href: '/products', label: 'All Products' },
    { href: '/cart', label: 'Cart' },
  ],
  Company: [
    { href: '/about', label: 'About Us' },
    { href: '/support', label: 'Support' },
  ],
  Policies: [
    { href: '/shipping', label: 'Shipping' },
    { href: '/returns', label: 'Returns' },
    { href: '/privacy', label: 'Privacy Policy' },
    { href: '/terms', label: 'Terms of Service' },
  ],
}

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0a0a0a]">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="text-xl font-bold text-white">
              Mupsong
            </Link>
            <p className="mt-3 text-sm text-gray-400">
              Premium TV boxes for the modern home. Stream anything, anywhere, in stunning 4K.
            </p>
          </div>
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-sm font-semibold text-white">{title}</h3>
              <ul className="mt-3 space-y-2">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-400 transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <Separator className="my-8 bg-white/10" />
        <p className="text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Mupsong. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
