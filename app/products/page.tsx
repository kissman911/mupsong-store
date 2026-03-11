import { getAllProducts } from '@/lib/products'
import { ProductCard } from '@/components/ProductCard'

export const metadata = { title: 'Products — Mupsong' }

export default function ProductsPage() {
  const products = getAllProducts()

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-white sm:text-4xl">All Products</h1>
      <p className="mt-2 text-gray-400">Browse our lineup of premium TV boxes.</p>

      <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}
