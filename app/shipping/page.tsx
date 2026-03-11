import { Separator } from '@/components/ui/separator'

export const metadata = { title: 'Shipping — Mupsong' }

export default function ShippingPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-white sm:text-4xl">Shipping Information</h1>
      <p className="mt-3 text-gray-400">
        We ship worldwide from our fulfillment centers. Here&apos;s what to expect.
      </p>

      <Separator className="my-8 bg-white/10" />

      <div className="space-y-8 text-gray-400">
        <div>
          <h2 className="text-xl font-semibold text-white">Processing Time</h2>
          <p className="mt-2">
            Orders are processed within 1–2 business days. You&apos;ll receive a confirmation email
            with tracking information once your order ships.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-white">Shipping Rates & Times</h2>
          <div className="mt-4 overflow-hidden rounded-lg border border-white/10">
            <table className="w-full text-sm">
              <thead className="bg-[#141414]">
                <tr>
                  <th className="px-4 py-3 text-left font-medium text-white">Region</th>
                  <th className="px-4 py-3 text-left font-medium text-white">Estimated Time</th>
                  <th className="px-4 py-3 text-left font-medium text-white">Cost</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                <tr>
                  <td className="px-4 py-3">United States</td>
                  <td className="px-4 py-3">3–7 business days</td>
                  <td className="px-4 py-3 text-white">Free</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">Canada</td>
                  <td className="px-4 py-3">5–10 business days</td>
                  <td className="px-4 py-3 text-white">$9.99</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">Europe</td>
                  <td className="px-4 py-3">7–14 business days</td>
                  <td className="px-4 py-3 text-white">$14.99</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">Rest of World</td>
                  <td className="px-4 py-3">10–21 business days</td>
                  <td className="px-4 py-3 text-white">$19.99</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-white">Tracking</h2>
          <p className="mt-2">
            All orders include tracking. You&apos;ll receive an email with your tracking number once
            your package ships. You can also check your order status on our Order page.
          </p>
        </div>
      </div>
    </div>
  )
}
