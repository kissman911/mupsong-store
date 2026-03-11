'use client'

import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Product } from '@/lib/types'
import { formatPrice } from '@/lib/products'
import { motion } from 'framer-motion'

export function ProductCard({ product, index = 0 }: { product: Product; index?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="group overflow-hidden border-white/10 bg-[#141414] transition-all duration-300 hover:border-blue-500/30 hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-500/10">
        <div className="relative flex aspect-square items-center justify-center bg-gray-800 text-sm text-gray-400 overflow-hidden">
          <span className="transition-transform duration-500 group-hover:scale-110">Product Image</span>
          {/* Hover shine effect */}
          <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/5 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
        </div>
        <CardContent className="p-5">
          <h3 className="text-lg font-semibold text-white">{product.name}</h3>
          <p className="mt-1 text-sm text-gray-400">{product.tagline}</p>
          <div className="mt-3 flex items-center gap-2">
            <span className="text-xl font-bold text-white">
              {formatPrice(product.price)}
            </span>
            {product.comparePrice && (
              <span className="text-sm text-gray-500 line-through">
                {formatPrice(product.comparePrice)}
              </span>
            )}
          </div>
          <Button render={<Link href={`/products/${product.slug}`} />} className="mt-4 w-full bg-blue-500 hover:bg-blue-600 transition-all hover:shadow-md hover:shadow-blue-500/25">
            View Details
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  )
}
