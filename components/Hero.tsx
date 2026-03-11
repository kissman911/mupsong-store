import { Button } from '@/components/ui/button'
import Link from 'next/link'

export function Hero() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 via-transparent to-transparent" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="text-center lg:text-left">
            <p className="text-sm font-medium uppercase tracking-widest text-blue-400">
              Next-Gen Streaming
            </p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Stream Everything.
              <br />
              <span className="text-blue-500">In Stunning 4K.</span>
            </h1>
            <p className="mt-6 text-lg text-gray-400 sm:text-xl">
              The Mupsong Pro delivers lightning-fast performance, an intuitive smart OS, and
              crystal-clear 4K resolution — all in a compact box that fits anywhere.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
              <Button render={<Link href="/products/mupsong-pro" />} size="lg" className="bg-blue-500 text-base hover:bg-blue-600">
                Shop Now
              </Button>
              <Button
                render={<Link href="/products" />}
                variant="outline"
                size="lg"
                className="border-white/20 text-base text-white hover:bg-white/10"
              >
                View All Products
              </Button>
            </div>
          </div>

          <div className="flex aspect-square items-center justify-center rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 text-gray-400 shadow-2xl shadow-blue-500/10">
            <div className="text-center">
              <div className="text-6xl">📺</div>
              <p className="mt-4 text-sm">Mupsong Pro</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
