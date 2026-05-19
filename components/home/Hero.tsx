'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Button } from '@/components/ui/Button'

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-primary min-h-[88vh] flex items-center">
      {/* Wood grain texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='600'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.008 0.06' numOctaves='5' seed='15' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='800' height='600' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
        }}
      />

      {/* Subtle grain lines overlay */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `repeating-linear-gradient(
            92deg,
            transparent,
            transparent 18px,
            rgba(200,134,26,0.6) 18px,
            rgba(200,134,26,0.6) 19px
          )`,
        }}
      />

      <div className="container-content relative z-10 py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: copy */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="font-body text-xs font-semibold tracking-[0.18em] uppercase text-accent mb-6"
            >
              ISPM 15 Certified · IPPC Registered · Sri Lanka
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-display-xl text-cream leading-[1.08] tracking-tight text-balance mb-6"
            >
              Export-Ready Pallets, Built For Global Standards.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
              className="font-body text-base text-cream/75 leading-relaxed max-w-lg mb-10"
            >
              Heat-treated, IPPC-stamped wooden pallets for Sri Lankan exporters, freight forwarders,
              and manufacturers. Custom sizes. Island-wide delivery. ISPM&nbsp;15 compliant.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.24, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-wrap gap-3"
            >
              <Button href="/contact" variant="primary" size="lg">
                Request a quote
              </Button>
              <Button href="/products" variant="outline-light" size="lg">
                View pallet sizes
              </Button>
            </motion.div>
          </div>

          {/* Right: image — shown on all screen sizes */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            className="block"
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="/hero.jpg"
                alt="CeyPall wooden pallets — ISPM 15 certified"
                fill
                className="object-cover"
                priority
              />
              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-accent opacity-90 z-10" />
              <div className="absolute bottom-0 left-0 w-8 h-8 bg-accent/40 z-10" />
            </div>

            {/* Certification badge */}
            <div className="mt-4 flex items-center gap-3 bg-primary-dark px-5 py-3.5">
              <div className="w-8 h-8 bg-accent flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4 text-white" viewBox="0 0 16 16" fill="none">
                  <path d="M8 1l1.8 3.6L14 5.6l-3 2.9.7 4.1L8 10.6l-3.7 1.9.7-4.1L2 5.6l4.2-1z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
                </svg>
              </div>
              <div>
                <p className="font-body text-xs font-semibold text-cream">IPPC Registered</p>
                <p className="font-body text-xs text-cream/50">National Plant Quarantine Service, Sri Lanka</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

