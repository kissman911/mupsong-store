import { Card, CardContent } from '@/components/ui/card'
import { Monitor, Zap, Settings, Cpu } from 'lucide-react'

const features = [
  {
    icon: Monitor,
    title: '4K Streaming',
    description: 'Watch your favorite content in crystal-clear 4K Ultra HD with HDR support.',
  },
  {
    icon: Zap,
    title: 'Fast Performance',
    description: 'Powered by a high-performance chipset for smooth multitasking and zero lag.',
  },
  {
    icon: Settings,
    title: 'Easy Setup',
    description: 'Plug in, connect to Wi-Fi, and start streaming in under 5 minutes.',
  },
  {
    icon: Cpu,
    title: 'Smart OS',
    description: 'Runs Android TV with access to thousands of apps, games, and streaming services.',
  },
]

export function Features() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">Why Mupsong?</h2>
          <p className="mt-3 text-gray-400">
            Everything you need for the ultimate home entertainment experience.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <Card
              key={feature.title}
              className="border-white/10 bg-[#141414] transition-colors hover:border-blue-500/30"
            >
              <CardContent className="p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-500/10">
                  <feature.icon className="h-6 w-6 text-blue-500" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-white">{feature.title}</h3>
                <p className="mt-2 text-sm text-gray-400">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
