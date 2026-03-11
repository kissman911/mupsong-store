'use client'

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { useCart } from '@/lib/cart'
import { formatPrice } from '@/lib/products'
import { Minus, Plus, Trash2 } from 'lucide-react'
import Link from 'next/link'

interface CartDrawerProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function CartDrawer({ open, onOpenChange }: CartDrawerProps) {
  const { items, removeItem, updateQuantity, totalPrice } = useCart()

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className="flex w-full flex-col border-white/10 bg-[#0a0a0a] sm:max-w-md">
        <SheetHeader>
          <SheetTitle className="text-white">Shopping Cart</SheetTitle>
        </SheetHeader>

        {items.length === 0 ? (
          <div className="flex flex-1 items-center justify-center">
            <p className="text-gray-400">Your cart is empty</p>
          </div>
        ) : (
          <>
            <div className="flex-1 space-y-4 overflow-y-auto py-4">
              {items.map((item) => (
                <div
                  key={`${item.productId}-${item.variantId}`}
                  className="flex gap-4 rounded-lg bg-[#141414] p-3"
                >
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded bg-gray-800 text-[10px] text-gray-400">
                    IMG
                  </div>
                  <div className="flex flex-1 flex-col">
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="text-sm font-medium text-white">{item.name}</p>
                        <p className="text-xs text-gray-400">{item.variantName}</p>
                      </div>
                      <button
                        onClick={() => removeItem(item.productId, item.variantId)}
                        className="text-gray-500 hover:text-red-400"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                    <div className="mt-auto flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() =>
                            updateQuantity(item.productId, item.variantId, item.quantity - 1)
                          }
                          className="flex h-6 w-6 items-center justify-center rounded bg-white/10 text-white hover:bg-white/20"
                        >
                          <Minus className="h-3 w-3" />
                        </button>
                        <span className="text-sm text-white">{item.quantity}</span>
                        <button
                          onClick={() =>
                            updateQuantity(item.productId, item.variantId, item.quantity + 1)
                          }
                          className="flex h-6 w-6 items-center justify-center rounded bg-white/10 text-white hover:bg-white/20"
                        >
                          <Plus className="h-3 w-3" />
                        </button>
                      </div>
                      <span className="text-sm font-medium text-white">
                        {formatPrice(item.price * item.quantity)}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-4 pt-4">
              <Separator className="bg-white/10" />
              <div className="flex items-center justify-between">
                <span className="text-gray-400">Total</span>
                <span className="text-xl font-bold text-white">{formatPrice(totalPrice)}</span>
              </div>
              <Button
                render={<Link href="/checkout" />}
                className="w-full bg-blue-500 hover:bg-blue-600"
                onClick={() => onOpenChange(false)}
              >
                Checkout
              </Button>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  )
}
