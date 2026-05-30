'use client'

import { use, useState } from 'react'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { getProduct, formatPrice } from '@/lib/products'
import { ProductGallery } from '@/components/ProductGallery'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { useCart } from '@/lib/cart'

export default function ProductDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params)
  const product = getProduct(slug)
  if (!product) notFound()

  const [selectedVariant, setSelectedVariant] = useState(product.variants[0])
  const { addItem } = useCart()

  const handleAddToCart = () => {
    addItem({
      productId: product.id,
      variantId: selectedVariant.id,
      name: product.name,
      variantName: selectedVariant.name,
      price: selectedVariant.price,
      quantity: 1,
      image: product.images[0],
    })
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="grid gap-12 lg:grid-cols-2">
        <ProductGallery images={product.images} />

        <div>
          <Badge className="bg-blue-500/10 text-blue-400">
            {product.inStock ? 'In Stock' : 'Out of Stock'}
          </Badge>
          <h1 className="mt-4 text-3xl font-bold text-white sm:text-4xl">{product.name}</h1>
          <p className="mt-2 text-lg text-gray-400">{product.tagline}</p>

          <div className="mt-6 flex items-baseline gap-3">
            <span className="text-3xl font-bold text-white">
              {formatPrice(selectedVariant.price)}
            </span>
            {product.comparePrice && (
              <span className="text-lg text-gray-500 line-through">
                {formatPrice(product.comparePrice)}
              </span>
            )}
          </div>
          <p className="mt-1 text-sm text-gray-500">Shipping not included</p>

          <div className="mt-8">
            <p className="text-sm font-medium text-gray-400">Select Model</p>
            <div className="mt-3 flex flex-wrap gap-3">
              {product.variants.map((variant) => (
                <button
                  key={variant.id}
                  onClick={() => setSelectedVariant(variant)}
                  className={`rounded-lg border px-4 py-2 text-sm font-medium transition-all ${
                    selectedVariant.id === variant.id
                      ? 'border-blue-500 bg-blue-500/10 text-blue-400'
                      : 'border-white/10 text-gray-400 hover:border-white/30'
                  }`}
                >
                  {variant.name}
                  <span className="ml-2 text-xs opacity-70">{formatPrice(variant.price)}</span>
                </button>
              ))}
            </div>
          </div>

          <Button
            size="lg"
            className="mt-8 w-full bg-blue-500 text-base hover:bg-blue-600 sm:w-auto"
            onClick={handleAddToCart}
          >
            Add to Cart
          </Button>

          <Separator className="my-8 bg-white/10" />

          <div>
            <h2 className="text-lg font-semibold text-white">About this product</h2>
            <p className="mt-2 text-gray-400">{product.description}</p>
          </div>

          <div className="mt-8">
            <h2 className="text-lg font-semibold text-white">Specifications</h2>
            <dl className="mt-4 space-y-3">
              {Object.entries(product.specs).map(([key, value]) => (
                <div key={key} className="flex justify-between gap-4 text-sm">
                  <dt className="capitalize text-gray-400">{key}</dt>
                  <dd className="text-right text-white">{value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      {/* Detail images */}
      {product.detailImages && product.detailImages.length > 0 && (
        <div className="mt-16 border-t border-white/10 pt-12">
          <h2 className="text-center text-2xl font-bold text-white">Product Details</h2>
          <div className="mx-auto mt-8 max-w-3xl space-y-8">
            {product.detailImages.map((src, i) => (
              <div key={src} className="relative w-full overflow-hidden rounded-lg bg-white">
                <Image
                  src={src}
                  alt={`${product.name} detail ${i + 1}`}
                  width={1000}
                  height={1000}
                  sizes="(max-width: 768px) 100vw, 768px"
                  className="h-auto w-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
