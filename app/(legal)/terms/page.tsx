import { Separator } from '@/components/ui/separator'

export const metadata = { title: 'Terms of Service — Mupsong' }

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-white sm:text-4xl">Terms of Service</h1>
      <p className="mt-3 text-sm text-gray-500">Last updated: March 2026</p>

      <Separator className="my-8 bg-white/10" />

      <div className="space-y-6 text-sm text-gray-400">
        <section>
          <h2 className="text-lg font-semibold text-white">1. Agreement</h2>
          <p className="mt-2">
            By accessing or purchasing from mupsong.com, you agree to be bound by these Terms of
            Service. If you do not agree, please do not use our website.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-white">2. Products & Pricing</h2>
          <p className="mt-2">
            All prices are listed in USD. We reserve the right to change prices at any time without
            notice. Prices at the time of purchase are final.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-white">3. Orders</h2>
          <p className="mt-2">
            We reserve the right to refuse or cancel any order for any reason, including suspected
            fraud or product unavailability. If your order is cancelled, you will receive a full
            refund.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-white">4. Intellectual Property</h2>
          <p className="mt-2">
            All content on this website — including text, images, logos, and software — is the
            property of Mupsong and is protected by applicable intellectual property laws.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-white">5. Limitation of Liability</h2>
          <p className="mt-2">
            Mupsong shall not be liable for any indirect, incidental, or consequential damages
            arising from the use of our products or website.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-white">6. Contact</h2>
          <p className="mt-2">
            For questions about these terms, contact us at{' '}
            <a href="mailto:legal@mupsong.com" className="text-blue-400 hover:underline">
              legal@mupsong.com
            </a>
          </p>
        </section>
      </div>
    </div>
  )
}
