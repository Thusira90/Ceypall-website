'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { staggerContainer, staggerItem } from '@/components/ui/FadeUp'

const features = [
  {
    number: '01',
    title: 'Experience',
    body: 'With over 20 years of focused pallet manufacturing experience — built on a timber legacy dating back to 1955 — we bring deep expertise to every order.',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67V7z" fill="currentColor" />
      </svg>
    ),
  },
  {
    number: '02',
    title: 'IPPC registered',
    body: 'We are officially registered with the National Plant Quarantine Service of Sri Lanka as a certified ISPM 15 heat treatment provider.',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
        <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" fill="currentColor" />
      </svg>
    ),
  },
  {
    number: '03',
    title: 'Competitive pricing',
    body: 'Locally sourced rubber wood and Lunumidella, combined with efficient in-house manufacturing, allow us to maintain competitive pricing without compromising on quality.',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
        <path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z" fill="currentColor" />
      </svg>
    ),
  },
  {
    number: '04',
    title: 'On-time delivery',
    body: 'We deliver across Sri Lanka on your schedule. Reliable lead times, every time.',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
        <path d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zm-.5 1.5l1.96 2.5H17V9.5h2.5zM6 18c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm2.22-3c-.55-.61-1.33-1-2.22-1s-1.67.39-2.22 1H3V6h12v9H8.22zM18 18c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z" fill="currentColor" />
      </svg>
    ),
  },
]

export function WhyCeyPall() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="section-padding cream-texture">
      <div className="container-content">
        <div className="mb-14">
          <SectionHeader
            eyebrow="Why CeyPall"
            title="The standard for pallet manufacturing in Sri Lanka."
          />
        </div>

        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'show' : 'hidden'}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-warm-gray"
        >
          {features.map(({ number, title, body, icon }) => (
            <motion.div
              key={title}
              variants={staggerItem}
              className="bg-cream p-8 flex flex-col gap-5"
            >
              <div className="flex items-start justify-between">
                <div className="w-11 h-11 bg-primary/8 flex items-center justify-center text-primary">
                  {icon}
                </div>
                <span className="font-display text-4xl font-bold text-warm-gray select-none">
                  {number}
                </span>
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-primary mb-3">{title}</h3>
                <p className="font-body text-sm text-charcoal/65 leading-relaxed">{body}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
