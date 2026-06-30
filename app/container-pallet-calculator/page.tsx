import type { Metadata } from 'next'
import { FadeUp } from '@/components/ui/FadeUp'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { SchemaScript } from '@/components/ui/SchemaScript'
import { ContainerCalculator } from '@/components/tools/ContainerCalculator'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Container Pallet Calculator — How Many Pallets Fit?',
  description:
    'Calculate how many pallets fit in a 20ft, 40ft, or 40ft high cube shipping container. Select your pallet size, enter cargo height, and get an instant floor plan with stacking layers.',
  alternates: {
    canonical: 'https://www.ceypall.com/container-pallet-calculator',
  },
  openGraph: {
    title: 'Container Pallet Calculator — How Many Pallets Fit? | CeyPall (Pvt) Ltd',
    description:
      'Calculate how many pallets fit in a 20ft, 40ft, or 40ft high cube shipping container. Instant floor plan with stacking layers.',
    url: '/container-pallet-calculator',
  },
  twitter: {
    description:
      'Calculate how many pallets fit in a 20ft, 40ft, or 40ft high cube shipping container. Instant floor plan with stacking layers.',
  },
}

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.ceypall.com/' },
    { '@type': 'ListItem', position: 2, name: 'Container Pallet Calculator', item: 'https://www.ceypall.com/container-pallet-calculator' },
  ],
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How many pallets fit in a 20ft container?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A standard 20ft container (5.9m x 2.35m internal) fits approximately 10 pallets of 1200 x 1000 mm, or 11 Euro pallets (1200 x 800 mm) on a single layer. The exact count depends on pallet dimensions and orientation.',
      },
    },
    {
      '@type': 'Question',
      name: 'How many pallets fit in a 40ft container?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A standard 40ft container (12.0m x 2.35m internal) fits approximately 20-21 pallets of 1200 x 1000 mm, or 23-24 Euro pallets (1200 x 800 mm) on a single layer.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between a 40ft standard and 40ft high cube container?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A 40ft high cube container has the same floor area as a standard 40ft container but is approximately 30 cm taller (2.70m vs 2.39m internal height). This allows an additional stacking layer for some cargo configurations.',
      },
    },
  ],
}

export default function ContainerPalletCalculatorPage() {
  return (
    <>
      <SchemaScript schema={breadcrumbJsonLd} />
      <SchemaScript schema={faqJsonLd} />

      {/* Header */}
      <section className="wood-texture section-padding">
        <div className="container-content">
          <FadeUp>
            <SectionHeader
              as="h1"
              eyebrow="Free tool"
              title="Container Pallet Calculator"
              subtitle="Calculate how many pallets fit in a 20ft, 40ft, or 40ft high cube shipping container. Select your pallet size, enter cargo height, and see the floor plan instantly."
              light
            />
          </FadeUp>
        </div>
      </section>

      {/* Calculator */}
      <section className="section-padding cream-texture">
        <div className="container-content">
          <FadeUp>
            <ContainerCalculator />
          </FadeUp>
        </div>
      </section>

      {/* Reference content for SEO */}
      <section className="section-padding bg-warm-gray/40">
        <div className="container-content">
          <FadeUp>
            <div className="max-w-2xl">
              <h2 className="font-display text-2xl font-semibold text-primary mb-6">
                How Many Pallets Fit in a Shipping Container?
              </h2>
              <p className="font-body text-sm text-charcoal/70 leading-relaxed mb-5">
                The number of pallets that fit in a shipping container depends on three factors: the internal dimensions of the container, the dimensions of the pallet, and the height of your cargo if you plan to stack multiple layers.
              </p>

              <h3 className="font-display text-lg font-semibold text-primary mt-8 mb-3">
                20ft Container Pallet Capacity
              </h3>
              <p className="font-body text-sm text-charcoal/70 leading-relaxed mb-5">
                A standard 20-foot container has internal dimensions of approximately 5.9m (length) x 2.35m (width) x 2.39m (height). On a single layer, it fits approximately 10 standard pallets (1200 x 1000 mm) or 11 Euro pallets (1200 x 800 mm).
              </p>

              <h3 className="font-display text-lg font-semibold text-primary mt-8 mb-3">
                40ft Container Pallet Capacity
              </h3>
              <p className="font-body text-sm text-charcoal/70 leading-relaxed mb-5">
                A standard 40-foot container has internal dimensions of approximately 12.0m (length) x 2.35m (width) x 2.39m (height). On a single layer, it fits approximately 20 standard pallets (1200 x 1000 mm) or 23 Euro pallets (1200 x 800 mm).
              </p>

              <h3 className="font-display text-lg font-semibold text-primary mt-8 mb-3">
                40ft High Cube Container
              </h3>
              <p className="font-body text-sm text-charcoal/70 leading-relaxed mb-5">
                A 40-foot high cube container has the same floor area as a standard 40ft container but offers approximately 30 cm of additional internal height (2.70m vs 2.39m). This extra height can accommodate an additional stacking layer depending on your cargo dimensions.
              </p>

              <h3 className="font-display text-lg font-semibold text-primary mt-8 mb-3">
                Which Pallet Size Should You Use?
              </h3>
              <p className="font-body text-sm text-charcoal/70 leading-relaxed mb-5">
                The best pallet size depends on your destination market. For European shipments, the 1200 x 800 mm Euro pallet is standard. For North American markets, 1219 x 1016 mm (48&quot; x 40&quot;) is the norm. For Asia-Pacific destinations, 1100 x 1100 mm is common. The general export standard of 1200 x 1000 mm works well for most other markets.
              </p>
              <p className="font-body text-sm text-charcoal/70 leading-relaxed">
                For more details on choosing the right pallet size, see our guide:{' '}
                <Link href="/blog/standard-pallet-sizes-sri-lanka" className="text-accent hover:text-accent-hover underline underline-offset-2 transition-colors">
                  Standard Pallet Sizes for Sri Lankan Exporters
                </Link>.
              </p>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-accent py-16">
        <div className="container-content flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-display text-2xl text-white">Need pallets for your next container?</h3>
            <p className="font-body text-sm text-white/80 mt-1">
              ISPM 15 certified, IPPC-stamped, delivered island-wide across Sri Lanka.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 border-2 border-white text-white hover:bg-white hover:text-accent font-body font-semibold text-sm px-6 py-3 transition-colors duration-200 flex-shrink-0"
          >
            Request a quote →
          </Link>
        </div>
      </section>
    </>
  )
}
