import Stripe from 'stripe'

export function getStripe(): Stripe | null {
  const key = process.env.STRIPE_SECRET_KEY
  if (!key) {
    console.warn('STRIPE_SECRET_KEY not set — Stripe disabled')
    return null
  }
  return new Stripe(key, { apiVersion: '2026-02-25.clover' })
}
