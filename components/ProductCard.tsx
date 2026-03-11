import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Product } from '@/lib/types'
import { formatPrice } from '@/lib/products'

export function ProductCard({ product }: { product: Product }) {
  return (
    <Card className="overflow-hidden border-white/10 bg-[#141414] transition-transform hover:scale-[1.02]">
      <div className="flex aspect-square items-center justify-center bg-gray-800 text-sm text-gray-400">
        Product Image
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
        <Button render={<Link href={`/products/${product.slug}`} />} className="mt-4 w-full bg-blue-500 hover:bg-blue-600">
          View Details
        </Button>
      </CardContent>
    </Card>
  )
}
