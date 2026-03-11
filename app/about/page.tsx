import { Separator } from '@/components/ui/separator'

export const metadata = { title: 'About Us — Mupsong' }

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-white sm:text-4xl">About Mupsong</h1>
      <p className="mt-4 text-lg text-gray-400">
        We believe everyone deserves access to premium home entertainment without the premium price tag.
      </p>

      <Separator className="my-8 bg-white/10" />

      <div className="space-y-8 text-gray-400">
        <div>
          <h2 className="text-xl font-semibold text-white">Our Mission</h2>
          <p className="mt-2">
            Mupsong was founded with a simple goal: build the best TV box on the market at a price
            that makes sense. We cut out the middlemen, skip the bloatware, and focus on what
            matters — fast, reliable streaming in stunning 4K.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-white">What Sets Us Apart</h2>
          <ul className="mt-2 list-inside list-disc space-y-1">
            <li>Optimized Android TV experience — no bloat, no ads</li>
            <li>Premium hardware at honest prices</li>
            <li>Regular OTA updates and long-term support</li>
            <li>Responsive customer support team</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-white">Our Promise</h2>
          <p className="mt-2">
            Every Mupsong device goes through rigorous quality testing before it ships. If
            something isn&apos;t right, our support team will make it right — no questions asked.
          </p>
        </div>
      </div>
    </div>
  )
}
