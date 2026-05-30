// Shipping zones & rates.
// Rates are stored in cents (USD), matching product prices.
// Source figures (2026-05-30): US $10, EU €12, UK £9, AU A$14, Rest $11.
// EU/UK/AU converted to USD at the rate on 2026-05-29 and rounded:
//   €12 ≈ $14, £9 ≈ $12, A$14 ≈ $10.

export interface ShippingZone {
  id: string
  label: string
  rate: number // in cents (USD)
}

export const SHIPPING_ZONES: ShippingZone[] = [
  { id: 'us', label: 'United States', rate: 1000 },
  { id: 'eu', label: 'Europe (EU)', rate: 1400 },
  { id: 'uk', label: 'United Kingdom', rate: 1200 },
  { id: 'au', label: 'Australia', rate: 1000 },
  { id: 'row', label: 'Rest of World', rate: 1100 },
]

export const DEFAULT_ZONE_ID = 'us'

export function getZone(id: string | undefined | null): ShippingZone {
  return (
    SHIPPING_ZONES.find((z) => z.id === id) ??
    SHIPPING_ZONES.find((z) => z.id === DEFAULT_ZONE_ID)!
  )
}

export function getShippingRate(zoneId: string | undefined | null): number {
  return getZone(zoneId).rate
}
