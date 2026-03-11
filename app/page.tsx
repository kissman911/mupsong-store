import { Hero } from '@/components/Hero'
import { Features } from '@/components/Features'
import { ProductCard } from '@/components/ProductCard'
import { getAllProducts } from '@/lib/products'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function HomePage() {
  const products = getAllProducts()

  return (
    <>
      <Hero />

      {/* Products Section */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold text-white sm:text-4xl">Our Products</h2>
          <p className="mt-3 text-center text-gray-400">
            Engineered for performance. Designed for your living room.
          </p>
          <div className="mx-auto mt-12 grid max-w-md gap-8 sm:max-w-none sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      <Features />

      {/* CTA Section */}
      <section className="py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Ready to Upgrade Your Entertainment?
          </h2>
          <p className="mt-4 text-lg text-gray-400">
            Join thousands of happy customers streaming in 4K with Mupsong.
          </p>
          <Button render={<Link href="/products/mupsong-pro" />} size="lg" className="mt-8 bg-blue-500 text-base hover:bg-blue-600">
            Get Your Mupsong Pro
          </Button>
        </div>
      </section>
    </>
  )
}
