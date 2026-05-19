'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { FadeUp } from '@/components/ui/FadeUp'
import { SectionHeader } from '@/components/ui/SectionHeader'

const clients = [
  'Ace Containers Pvt Ltd',
  'Akbar Brothers Pvt Ltd',
  'CBL Natural Foods Pvt Ltd',
  'CBL Global Foods Pvt Ltd',
  'De La Rue Lanka Currency & Security Print (Pvt) Ltd',
  'GPV Lanka Pvt Ltd',
  'Hemas Manufacturing Pvt Ltd',
  'Ceylon Tea Marketing Pvt Ltd',
]

export function ClientsStrip() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section className="section-padding cream-texture">
      <div className="container-content">
        <FadeUp>
          <SectionHeader
            eyebrow="Our clients"
            title="Trusted by leading Sri Lankan exporters and manufacturers."
            align="center"
          />
        </FadeUp>

        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? 'show' : 'hidden'}
          variants={{
            hidden: { opacity: 0 },
            show: { opacity: 1, transition: { staggerChildren: 0.07, delayChildren: 0.1 } },
          }}
          className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-warm-gray"
        >
          {clients.map((name) => (
            <motion.div
              key={name}
              variants={{
                hidden: { opacity: 0, y: 12 },
                show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } },
              }}
              className="bg-cream px-6 py-7 flex items-center gap-4"
            >
              <div className="w-1.5 h-1.5 bg-accent flex-shrink-0 rounded-full" />
              <span className="font-body text-sm font-medium text-charcoal/80 leading-snug">
                {name}
              </span>
            </motion.div>
          ))}
        </motion.div>

        <FadeUp delay={0.2}>
          <div className="mt-8 text-center">
            <p className="font-body text-sm text-charcoal/55 italic">
              Trusted by 31+ more companies across Sri Lanka.
            </p>
          </div>
        </FadeUp>
      </div>
    </section>
  )
}
