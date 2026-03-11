import { Button } from '@/components/ui/button'
import Link from 'next/link'

export const metadata = { title: 'Order Status — Mupsong' }

export default async function OrderPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params

  return (
    <div className="mx-auto max-w-2xl px-4 py-16 text-center sm:px-6 lg:px-8">
      <div className="text-5xl">📦</div>
      <h1 className="mt-6 text-3xl font-bold text-white">Order Confirmed</h1>
      <p className="mt-3 text-gray-400">
        Thank you for your purchase! Your order ID is:
      </p>
      <p className="mt-2 font-mono text-lg text-blue-400">{id}</p>
      <p className="mt-6 text-sm text-gray-500">
        We&apos;ll send you an email with tracking information once your order ships.
        Most orders ship within 1–3 business days.
      </p>
      <Link href="/">
        <Button className="mt-8 bg-blue-500 hover:bg-blue-600">
          Back to Home
        </Button>
      </Link>
    </div>
  )
}
