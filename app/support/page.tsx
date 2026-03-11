import { Separator } from '@/components/ui/separator'

export const metadata = { title: 'Support — Mupsong' }

const faqs = [
  {
    q: 'What streaming apps are supported?',
    a: 'The Mupsong Pro runs Android TV, so you have access to the full Google Play Store — Netflix, YouTube, Disney+, Hulu, Prime Video, and thousands more.',
  },
  {
    q: 'Does it support 4K HDR?',
    a: 'Yes. The Mupsong Pro outputs up to 4K Ultra HD with HDR10 support via HDMI 2.1.',
  },
  {
    q: 'How do I set it up?',
    a: 'Plug the Mupsong Pro into your TV via HDMI, connect the power adapter, follow the on-screen setup wizard to connect to Wi-Fi, and you\'re streaming in under 5 minutes.',
  },
  {
    q: 'What\'s in the box?',
    a: 'Mupsong Pro unit, HDMI cable, power adapter, remote control, and quick start guide.',
  },
  {
    q: 'Do you offer international shipping?',
    a: 'Yes, we ship worldwide. Shipping times and costs vary by region. Check our Shipping page for details.',
  },
  {
    q: 'What is your return policy?',
    a: 'We offer a 30-day money-back guarantee. If you\'re not satisfied, return it for a full refund. See our Returns page for details.',
  },
  {
    q: 'How do I get support?',
    a: 'Email us at support@mupsong.com. We typically respond within 24 hours on business days.',
  },
]

export default function SupportPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-white sm:text-4xl">Support & FAQ</h1>
      <p className="mt-3 text-gray-400">
        Got questions? We&apos;ve got answers. If you can&apos;t find what you need, reach out to us at{' '}
        <a href="mailto:support@mupsong.com" className="text-blue-400 hover:underline">
          support@mupsong.com
        </a>
      </p>

      <Separator className="my-8 bg-white/10" />

      <div className="space-y-6">
        {faqs.map((faq, i) => (
          <div key={i} className="rounded-lg bg-[#141414] p-5">
            <h3 className="font-semibold text-white">{faq.q}</h3>
            <p className="mt-2 text-sm text-gray-400">{faq.a}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
