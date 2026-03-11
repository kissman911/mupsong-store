'use client'

import { Card, CardContent } from '@/components/ui/card'
import { Monitor, Zap, Settings, Cpu } from 'lucide-react'
import { motion } from 'framer-motion'

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

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
} as const

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
} as const

export function Features() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold text-white sm:text-4xl">Why Mupsong?</h2>
          <p className="mt-3 text-gray-400">
            Everything you need for the ultimate home entertainment experience.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {features.map((feature) => (
            <motion.div key={feature.title} variants={cardVariants}>
              <Card className="group border-white/10 bg-[#141414] transition-all duration-300 hover:border-blue-500/40 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/5">
                <CardContent className="p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-500/10 transition-colors duration-300 group-hover:bg-blue-500/20">
                    <feature.icon className="h-6 w-6 text-blue-500 transition-transform duration-300 group-hover:scale-110" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-white">{feature.title}</h3>
                  <p className="mt-2 text-sm text-gray-400">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
