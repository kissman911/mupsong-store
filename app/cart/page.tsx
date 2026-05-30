'use client'

import { useCart } from '@/lib/cart'
import { formatPrice } from '@/lib/products'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { Minus, Plus, Trash2 } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function CartPage() {
  const { items, removeItem, updateQuantity, totalPrice, totalItems } = useCart()

  if (items.length === 0) {
    return (
      <div className="mx-auto max-w-7xl px-4 py-32 text-center sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-white">Your Cart is Empty</h1>
        <p className="mt-3 text-gray-400">Looks like you haven&apos;t added anything yet.</p>
        <Button render={<Link href="/products" />} className="mt-8 bg-blue-500 hover:bg-blue-600">
          Browse Products
        </Button>
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-white">Shopping Cart</h1>
      <p className="mt-1 text-gray-400">{totalItems} item{totalItems !== 1 ? 's' : ''}</p>

      <div className="mt-8 space-y-4">
        {items.map((item) => (
          <div
            key={`${item.productId}-${item.variantId}`}
            className="flex gap-4 rounded-lg bg-[#141414] p-4 sm:gap-6"
          >
            <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-md bg-white">
              {item.image ? (
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  sizes="96px"
                  className="object-contain"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center text-xs text-gray-400">
                  No image
                </div>
              )}
            </div>
            <div className="flex flex-1 flex-col justify-between">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-medium text-white">{item.name}</h3>
                  <p className="text-sm text-gray-400">{item.variantName}</p>
                </div>
                <button
                  onClick={() => removeItem(item.productId, item.variantId)}
                  className="text-gray-500 hover:text-red-400"
                >
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <button
                    onClick={() =>
                      updateQuantity(item.productId, item.variantId, item.quantity - 1)
                    }
                    className="flex h-8 w-8 items-center justify-center rounded bg-white/10 text-white hover:bg-white/20"
                  >
                    <Minus className="h-3 w-3" />
                  </button>
                  <span className="w-8 text-center text-white">{item.quantity}</span>
                  <button
                    onClick={() =>
                      updateQuantity(item.productId, item.variantId, item.quantity + 1)
                    }
                    className="flex h-8 w-8 items-center justify-center rounded bg-white/10 text-white hover:bg-white/20"
                  >
                    <Plus className="h-3 w-3" />
                  </button>
                </div>
                <span className="font-medium text-white">
                  {formatPrice(item.price * item.quantity)}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Separator className="my-8 bg-white/10" />

      <div className="flex items-center justify-between">
        <span className="text-lg text-gray-400">Total</span>
        <span className="text-2xl font-bold text-white">{formatPrice(totalPrice)}</span>
      </div>

      <Button render={<Link href="/checkout" />} size="lg" className="mt-6 w-full bg-blue-500 hover:bg-blue-600">
        Proceed to Checkout
      </Button>
    </div>
  )
}
