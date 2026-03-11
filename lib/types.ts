export interface Product {
  id: string
  slug: string
  name: string
  tagline: string
  description: string
  price: number // in cents
  comparePrice?: number
  images: string[]
  specs: Record<string, string>
  variants: Variant[]
  inStock: boolean
}

export interface Variant {
  id: string
  name: string
  price: number // in cents
  sku: string
  stock: number
}

export interface CartItem {
  productId: string
  variantId: string
  name: string
  variantName: string
  price: number
  quantity: number
  image: string
}

export interface Order {
  id: string
  items: CartItem[]
  total: number
  status: 'pending' | 'paid' | 'shipped' | 'delivered' | 'cancelled'
  email: string
  createdAt: string
}
