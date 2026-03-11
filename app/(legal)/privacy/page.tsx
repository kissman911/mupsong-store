import { Separator } from '@/components/ui/separator'

export const metadata = { title: 'Privacy Policy — Mupsong' }

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-white sm:text-4xl">Privacy Policy</h1>
      <p className="mt-3 text-sm text-gray-500">Last updated: March 2026</p>

      <Separator className="my-8 bg-white/10" />

      <div className="space-y-6 text-sm text-gray-400">
        <section>
          <h2 className="text-lg font-semibold text-white">Information We Collect</h2>
          <p className="mt-2">
            When you make a purchase, we collect your name, email address, shipping address, and
            payment information. Payment processing is handled securely by Stripe — we never store
            your credit card details on our servers.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-white">How We Use Your Information</h2>
          <ul className="mt-2 list-inside list-disc space-y-1">
            <li>Process and fulfill your orders</li>
            <li>Send order confirmations and shipping updates</li>
            <li>Respond to customer support inquiries</li>
            <li>Improve our products and services</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-white">Data Sharing</h2>
          <p className="mt-2">
            We do not sell your personal information. We share data only with service providers
            necessary to fulfill your order (payment processing, shipping carriers).
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-white">Cookies</h2>
          <p className="mt-2">
            We use essential cookies to maintain your shopping cart and session. We do not use
            third-party tracking cookies.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-white">Contact</h2>
          <p className="mt-2">
            Questions about your privacy? Email us at{' '}
            <a href="mailto:privacy@mupsong.com" className="text-blue-400 hover:underline">
              privacy@mupsong.com
            </a>
          </p>
        </section>
      </div>
    </div>
  )
}
