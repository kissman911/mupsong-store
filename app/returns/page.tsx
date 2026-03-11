import { Separator } from '@/components/ui/separator'

export const metadata = { title: 'Returns & Refunds — Mupsong' }

export default function ReturnsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-white sm:text-4xl">Returns & Refunds</h1>
      <p className="mt-3 text-gray-400">
        Not happy with your purchase? We make returns simple.
      </p>

      <Separator className="my-8 bg-white/10" />

      <div className="space-y-8 text-gray-400">
        <div>
          <h2 className="text-xl font-semibold text-white">30-Day Money-Back Guarantee</h2>
          <p className="mt-2">
            If you&apos;re not completely satisfied with your Mupsong device, you can return it
            within 30 days of delivery for a full refund. The product must be in its original
            packaging and in working condition.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-white">How to Return</h2>
          <ol className="mt-2 list-inside list-decimal space-y-2">
            <li>Email <a href="mailto:support@mupsong.com" className="text-blue-400 hover:underline">support@mupsong.com</a> with your order number</li>
            <li>We&apos;ll send you a prepaid return label (US orders only)</li>
            <li>Pack the device in its original box and ship it back</li>
            <li>Refund is processed within 5–7 business days after we receive the return</li>
          </ol>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-white">Warranty</h2>
          <p className="mt-2">
            All Mupsong devices come with a 1-year limited warranty covering manufacturing defects.
            If your device has a hardware issue within the warranty period, we&apos;ll replace it
            free of charge.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-white">Non-Returnable Items</h2>
          <ul className="mt-2 list-inside list-disc space-y-1">
            <li>Devices with physical damage caused by the customer</li>
            <li>Items returned after the 30-day window</li>
            <li>Products purchased from unauthorized resellers</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
