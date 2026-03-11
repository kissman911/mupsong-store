import { Product } from './types'
import mupsongProData from '@/content/products/mupsong-pro.json'

export const products: Product[] = [mupsongProData as Product]

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug)
}

export function getAllProducts(): Product[] {
  return products
}

export function formatPrice(cents: number): string {
  return `$${(cents / 100).toFixed(2)}`
}
