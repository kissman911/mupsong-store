'use client'

import { Button } from '@/components/ui/button'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

export function Hero() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-32">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 via-transparent to-transparent" />
      <div className="absolute -top-40 left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-blue-500/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="text-center lg:text-left">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-sm font-medium uppercase tracking-widest text-blue-400"
            >
              Next-Gen Streaming
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl"
            >
              Stream Everything.
              <br />
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                In Stunning 4K.
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-6 text-lg text-gray-400 sm:text-xl"
            >
              The Mupsong Pro runs Android 14 on the quad-core Amlogic S905Y5, with smooth 4K
              playback and dual-band 5G WiFi — all in a compact box that fits anywhere.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start"
            >
              <Button render={<Link href="/products/mupsong-pro" />} size="lg" className="bg-blue-500 text-base hover:bg-blue-600 transition-all hover:shadow-lg hover:shadow-blue-500/25">
                Shop Now
              </Button>
              <Button
                render={<Link href="/products" />}
                variant="outline"
                size="lg"
                className="border-white/20 text-base text-white hover:bg-white/10 transition-all"
              >
                View All Products
              </Button>
            </motion.div>
          </div>

          {/* Product image with float animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, type: 'spring', stiffness: 100 }}
            className="relative"
          >
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="relative flex aspect-square items-center justify-center overflow-hidden rounded-2xl bg-white shadow-2xl shadow-blue-500/10"
            >
              <Image
                src="/images/products/gallery-1-box-retail.jpg"
                alt="Mupsong Pro Android TV Box with remote and retail box"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-contain p-4"
              />
            </motion.div>
            {/* Glow ring */}
            <div className="absolute -inset-1 -z-10 rounded-2xl bg-gradient-to-r from-blue-500/20 to-cyan-500/20 blur-xl" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
