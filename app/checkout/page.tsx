'use client'

import { useCart } from '@/lib/cart'
import { formatPrice } from '@/lib/products'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'
import { SHIPPING_ZONES, DEFAULT_ZONE_ID, getShippingRate } from '@/lib/shipping'
import { useState } from 'react'

export default function CheckoutPage() {
  const { items, totalPrice } = useCart()
  const [loading, setLoading] = useState(false)
  const [zoneId, setZoneId] = useState(DEFAULT_ZONE_ID)

  const shipping = getShippingRate(zoneId)
  const grandTotal = totalPrice + shipping

  const handleCheckout = async () => {
    setLoading(true)
    try {
      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ items, zoneId }),
      })
      const data = await res.json()
      if (data.url) {
        window.location.href = data.url
      } else {
        alert(data.error || 'Checkout is not available right now. Please try again later.')
      }
    } catch {
      alert('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  if (items.length === 0) {
    return (
      <div className="mx-auto max-w-7xl px-4 py-32 text-center sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-white">Nothing to Checkout</h1>
        <p className="mt-3 text-gray-400">Add some items to your cart first.</p>
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-white">Checkout</h1>

      <div className="mt-8 grid gap-12 lg:grid-cols-2">
        {/* Contact info */}
        <div className="space-y-6">
          <h2 className="text-lg font-semibold text-white">Contact Information</h2>
          <div className="space-y-4">
            <div>
              <Label htmlFor="email" className="text-gray-400">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="you@example.com"
                className="mt-1 border-white/10 bg-[#141414] text-white placeholder:text-gray-500"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="firstName" className="text-gray-400">First Name</Label>
                <Input
                  id="firstName"
                  placeholder="John"
                  className="mt-1 border-white/10 bg-[#141414] text-white placeholder:text-gray-500"
                />
              </div>
              <div>
                <Label htmlFor="lastName" className="text-gray-400">Last Name</Label>
                <Input
                  id="lastName"
                  placeholder="Doe"
                  className="mt-1 border-white/10 bg-[#141414] text-white placeholder:text-gray-500"
                />
              </div>
            </div>
          </div>

          <h2 className="text-lg font-semibold text-white">Shipping Address</h2>
          <div className="space-y-4">
            <div>
              <Label htmlFor="region" className="text-gray-400">Shipping Region</Label>
              <select
                id="region"
                value={zoneId}
                onChange={(e) => setZoneId(e.target.value)}
                className="mt-1 w-full rounded-md border border-white/10 bg-[#141414] px-3 py-2 text-sm text-white"
              >
                {SHIPPING_ZONES.map((z) => (
                  <option key={z.id} value={z.id}>
                    {z.label} — {formatPrice(z.rate)} shipping
                  </option>
                ))}
              </select>
            </div>
            <div>
              <Label htmlFor="address" className="text-gray-400">Address</Label>
              <Input
                id="address"
                placeholder="123 Main St"
                className="mt-1 border-white/10 bg-[#141414] text-white placeholder:text-gray-500"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="city" className="text-gray-400">City</Label>
                <Input
                  id="city"
                  placeholder="City"
                  className="mt-1 border-white/10 bg-[#141414] text-white placeholder:text-gray-500"
                />
              </div>
              <div>
                <Label htmlFor="zip" className="text-gray-400">ZIP Code</Label>
                <Input
                  id="zip"
                  placeholder="10001"
                  className="mt-1 border-white/10 bg-[#141414] text-white placeholder:text-gray-500"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Order summary */}
        <div className="rounded-lg bg-[#141414] p-6">
          <h2 className="text-lg font-semibold text-white">Order Summary</h2>
          <div className="mt-4 space-y-3">
            {items.map((item) => (
              <div
                key={`${item.productId}-${item.variantId}`}
                className="flex justify-between text-sm"
              >
                <span className="text-gray-400">
                  {item.name} ({item.variantName}) × {item.quantity}
                </span>
                <span className="text-white">{formatPrice(item.price * item.quantity)}</span>
              </div>
            ))}
          </div>
          <Separator className="my-4 bg-white/10" />
          <div className="flex justify-between text-sm text-gray-400">
            <span>Subtotal</span>
            <span className="text-white">{formatPrice(totalPrice)}</span>
          </div>
          <div className="mt-2 flex justify-between text-sm text-gray-400">
            <span>Shipping</span>
            <span className="text-white">{formatPrice(shipping)}</span>
          </div>
          <Separator className="my-4 bg-white/10" />
          <div className="flex justify-between">
            <span className="font-medium text-gray-400">Total</span>
            <span className="text-xl font-bold text-white">{formatPrice(grandTotal)}</span>
          </div>
          <p className="mt-2 text-xs text-gray-500">Shipping is based on your selected region.</p>

          <Button
            size="lg"
            className="mt-6 w-full bg-blue-500 hover:bg-blue-600"
            onClick={handleCheckout}
            disabled={loading}
          >
            {loading ? 'Processing...' : 'Pay Now'}
          </Button>
          <p className="mt-3 text-center text-xs text-gray-500">
            Secure checkout powered by Stripe
          </p>
        </div>
      </div>
    </div>
  )
}
