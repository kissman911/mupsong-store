import { NextRequest, NextResponse } from 'next/server'
import { getStripe } from '@/lib/stripe'
import { CartItem } from '@/lib/types'
import { getZone } from '@/lib/shipping'

export async function POST(req: NextRequest) {
  const stripe = getStripe()

  if (!stripe) {
    return NextResponse.json(
      { error: 'Payment processing is not configured. Please try again later.' },
      { status: 503 }
    )
  }

  try {
    const { items, zoneId } = (await req.json()) as { items: CartItem[]; zoneId?: string }

    if (!items || items.length === 0) {
      return NextResponse.json({ error: 'Cart is empty' }, { status: 400 })
    }

    const zone = getZone(zoneId)
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'

    const lineItems = items.map((item) => ({
      price_data: {
        currency: 'usd',
        product_data: {
          name: `${item.name} — ${item.variantName}`,
        },
        unit_amount: item.price,
      },
      quantity: item.quantity,
    }))

    if (zone.rate > 0) {
      lineItems.push({
        price_data: {
          currency: 'usd',
          product_data: {
            name: `Shipping — ${zone.label}`,
          },
          unit_amount: zone.rate,
        },
        quantity: 1,
      })
    }

    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      payment_method_types: ['card'],
      line_items: lineItems,
      success_url: `${siteUrl}/order/{CHECKOUT_SESSION_ID}`,
      cancel_url: `${siteUrl}/cart`,
    })

    return NextResponse.json({ url: session.url })
  } catch (err) {
    console.error('Stripe checkout error:', err)
    return NextResponse.json(
      { error: 'Failed to create checkout session' },
      { status: 500 }
    )
  }
}
