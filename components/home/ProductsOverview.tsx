'use client'

import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Button } from '@/components/ui/Button'
import { staggerContainer, staggerItem } from '@/components/ui/FadeUp'

const products = [
  {
    tag: 'Export',
    title: 'Heat-treated pallets',
    subtitle: 'ISPM 15 compliant',
    body: 'ISPM 15-compliant pallets with IPPC stamp. Core heated to 56°C for a minimum of 30 minutes. Accepted in all major international markets. Treatment certificate provided.',
    features: ['56°C core heat treatment', 'IPPC stamped', 'Treatment certificate included', 'ISPM 15 compliant'],
    accent: true,
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none">
        <path d="M4 10h24M4 16h24M4 22h24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <rect x="4" y="6" width="24" height="20" rx="1" stroke="currentColor" strokeWidth="2" />
        <rect x="8" y="26" width="4" height="3" stroke="currentColor" strokeWidth="2" />
        <rect x="14" y="26" width="4" height="3" stroke="currentColor" strokeWidth="2" />
        <rect x="20" y="26" width="4" height="3" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
  },
  {
    tag: 'Storage',
    title: 'Vacuum pressure impregnated',
    subtitle: 'Long-term warehouse',
    body: 'For long-term warehouse and racking applications, pallets are treated using vacuum pressure impregnation — forcing Boron Borax deep into the wood core under pressure. Backed by a warranty of up to 6 years against pest contamination.',
    features: ['Up to 10 bar pressure impregnation', '6-year warranty (pest)', 'Ideal for racking systems', 'Enhanced durability'],
    accent: false,
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none">
        <path d="M16 4v4M16 24v4M4 16h4M24 16h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <circle cx="16" cy="16" r="8" stroke="currentColor" strokeWidth="2" />
        <circle cx="16" cy="16" r="3" fill="currentColor" opacity="0.3" />
        <path d="M8.5 8.5l3 3M20.5 20.5l3 3M23.5 8.5l-3 3M11.5 20.5l-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    tag: 'Custom',
    title: 'Custom size pallets',
    subtitle: 'Built to spec',
    body: 'We manufacture all standard international dimensions and custom sizes built to your exact specifications. Contact us with your requirements.',
    features: ['All standard sizes', 'Custom dimensions available', 'Same treatment standards', 'Quick turnaround'],
    accent: false,
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none">
        <rect x="4" y="4" width="10" height="10" rx="1" stroke="currentColor" strokeWidth="2" />
        <rect x="18" y="4" width="10" height="10" rx="1" stroke="currentColor" strokeWidth="2" />
        <rect x="4" y="18" width="10" height="10" rx="1" stroke="currentColor" strokeWidth="2" />
        <rect x="18" y="18" width="10" height="10" rx="1" stroke="currentColor" strokeWidth="2" strokeDasharray="2 2" />
        <path d="M21 23v-2m0 4v-0.5M23 21h-2m4 0h-.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
]

export function ProductsOverview() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="section-padding bg-charcoal">
      <div className="container-content">
        <div className="mb-14 flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <SectionHeader
            eyebrow="Our products"
            title="Pallets built for every application."
            light
          />
        </div>

        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'show' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/5"
        >
          {products.map(({ tag, title, subtitle, body, features, accent, icon }) => (
            <motion.div
              key={title}
              variants={staggerItem}
              className={`flex flex-col p-8 gap-6 ${accent ? 'bg-accent' : 'bg-charcoal'}`}
            >
              <div className="flex items-start justify-between">
                <div className={`w-14 h-14 flex items-center justify-center ${accent ? 'bg-white/15 text-white' : 'bg-white/5 text-accent'}`}>
                  {icon}
                </div>
                <span className={`font-body text-xs font-semibold tracking-[0.12em] uppercase px-2.5 py-1 ${accent ? 'bg-white/20 text-white' : 'bg-white/8 text-cream/60'}`}>
                  {tag}
                </span>
              </div>

              <div>
                <p className={`font-body text-xs mb-1 ${accent ? 'text-white/70' : 'text-cream/50'}`}>{subtitle}</p>
                <h3 className={`font-display text-xl font-semibold mb-4 ${accent ? 'text-white' : 'text-cream'}`}>
                  {title}
                </h3>
                <p className={`font-body text-sm leading-relaxed ${accent ? 'text-white/80' : 'text-cream/65'}`}>
                  {body}
                </p>
              </div>

              <ul className="space-y-2 mt-auto">
                {features.map((f) => (
                  <li key={f} className="flex items-center gap-2.5">
                    <svg className={`w-3.5 h-3.5 flex-shrink-0 ${accent ? 'text-white' : 'text-accent'}`} viewBox="0 0 14 14" fill="none">
                      <path d="M2 7l3.5 3.5L12 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span className={`font-body text-xs ${accent ? 'text-white/85' : 'text-cream/70'}`}>{f}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Button href="/export-pallet-manufacturer-sri-lanka" variant="primary" size="lg">
            Export Pallet Manufacturer →
          </Button>
          <Button href="/products" variant="outline-light" size="lg">
            View all products
          </Button>
        </div>
      </div>
    </section>
  )
}
