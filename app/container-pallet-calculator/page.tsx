import type { Metadata } from 'next'
import { FadeUp } from '@/components/ui/FadeUp'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { SchemaScript } from '@/components/ui/SchemaScript'
import { AnswerBlock } from '@/components/ui/AnswerBlock'
import { ContainerCalculator } from '@/components/tools/ContainerCalculator'
import Link from 'next/link'

// Single-layer floor capacity by pallet size — rendered as static HTML (below)
// so answer engines can read the numbers without executing the calculator.
const capacityRows = [
  { size: 'Standard export — 1200 × 1000 mm', c20: '10', c40: '20–21' },
  { size: 'Euro — 1200 × 800 mm', c20: '11', c40: '23–24' },
  { size: 'Asia-Pacific — 1100 × 1100 mm', c20: '10', c40: '20' },
  { size: 'North American — 1219 × 1016 mm', c20: '10', c40: '20' },
]

export const metadata: Metadata = {
  title: 'Free Container Pallet Calculator — 20ft, 40ft & High Cube (2026)',
  description:
    'How many pallets fit in a 20ft, 40ft or high-cube container? Free calculator — get the exact count and floor plan in 30 seconds. Euro, standard & custom pallet sizes.',
  alternates: {
    canonical: 'https://www.ceypall.com/container-pallet-calculator',
  },
  openGraph: {
    title: 'Free Container Pallet Calculator — 20ft, 40ft & High Cube | CeyPall',
    description:
      'Get the exact pallet count and floor plan for any container in 30 seconds. Euro, standard, Asia-Pacific & custom pallet sizes.',
    url: 'https://www.ceypall.com/container-pallet-calculator',
    images: [
      {
        url: '/OPENGIMAGE.jpg',
        width: 1200,
        height: 630,
        alt: 'CeyPall — ISPM 15 certified wooden pallets, Sri Lanka',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Container Pallet Calculator — 20ft, 40ft & High Cube | CeyPall',
    description:
      'Get the exact pallet count and floor plan for any container in 30 seconds. Free tool.',
    images: ['/OPENGIMAGE.jpg'],
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

const howToJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to Use the Container Pallet Calculator',
  description:
    'Work out how many pallets fit in a shipping container in four steps using the CeyPall container pallet calculator.',
  step: [
    {
      '@type': 'HowToStep',
      position: 1,
      name: 'Select the container size',
      text: 'Choose a 20ft, 40ft, or 40ft high cube container.',
    },
    {
      '@type': 'HowToStep',
      position: 2,
      name: 'Choose your pallet size',
      text: 'Pick a standard export, Euro, North American, or Asia-Pacific pallet, or enter custom dimensions.',
    },
    {
      '@type': 'HowToStep',
      position: 3,
      name: 'Enter your cargo height',
      text: 'Add the loaded height of a single pallet so the calculator can work out how many stacking layers fit.',
    },
    {
      '@type': 'HowToStep',
      position: 4,
      name: 'Read the result',
      text: 'The calculator shows the total pallet count and a visual floor plan for your container and pallet combination.',
    },
  ],
}

const webAppJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Container Pallet Calculator',
  description:
    'Free online calculator to determine how many pallets fit in a 20ft, 40ft, or 40ft high cube shipping container. Includes visual floor plan and stacking layers.',
  url: 'https://www.ceypall.com/container-pallet-calculator',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'All',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
  },
  featureList: [
    'Calculate pallets per container for 20ft, 40ft, and 40ft HC',
    'Support for Euro, North American, Asia-Pacific, and custom pallet sizes',
    'Visual floor plan layout',
    'Multi-layer stacking calculation',
  ],
  provider: { '@id': 'https://www.ceypall.com/#organization' },
}

export default function ContainerPalletCalculatorPage() {
  return (
    <>
      <SchemaScript schema={breadcrumbJsonLd} />
      <SchemaScript schema={faqJsonLd} />
      <SchemaScript schema={howToJsonLd} />
      <SchemaScript schema={webAppJsonLd} />

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

      {/* Direct answer + calculator */}
      <section className="section-padding cream-texture">
        <div className="container-content">
          <AnswerBlock question="In short: how many pallets fit in a container?">
            A standard 20ft container fits about <strong>10 standard pallets</strong> (1200 × 1000 mm)
            or <strong>11 Euro pallets</strong> (1200 × 800 mm) on a single layer. A 40ft container fits
            about <strong>20–21 standard pallets</strong> or <strong>23–24 Euro pallets</strong>. Stacking
            a second layer roughly doubles these figures where cargo height allows.
          </AnswerBlock>
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

              {/* Static capacity table — single-layer floor counts by pallet size */}
              <div className="overflow-x-auto my-6">
                <table className="w-full border-collapse font-body text-sm">
                  <caption className="sr-only">
                    Single-layer pallet capacity by pallet size for 20ft and 40ft shipping containers
                  </caption>
                  <thead>
                    <tr className="bg-primary text-cream">
                      <th scope="col" className="text-left font-semibold px-4 py-3 border border-warm-gray">Pallet size</th>
                      <th scope="col" className="text-left font-semibold px-4 py-3 border border-warm-gray">20ft container</th>
                      <th scope="col" className="text-left font-semibold px-4 py-3 border border-warm-gray">40ft container</th>
                    </tr>
                  </thead>
                  <tbody>
                    {capacityRows.map((row) => (
                      <tr key={row.size} className="odd:bg-white/60 even:bg-warm-gray/20">
                        <th scope="row" className="text-left font-medium text-charcoal/80 px-4 py-3 border border-warm-gray">{row.size}</th>
                        <td className="text-charcoal/70 px-4 py-3 border border-warm-gray">{row.c20} pallets</td>
                        <td className="text-charcoal/70 px-4 py-3 border border-warm-gray">{row.c40} pallets</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="font-body text-xs text-charcoal/50 leading-relaxed mb-8">
                Single-layer floor counts, based on standard internal container dimensions. Stacking a second layer roughly doubles these figures where cargo height allows. Use the calculator above for your exact pallet and cargo height.
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
              <p className="font-body text-sm text-charcoal/70 leading-relaxed mt-3">
                Planning a heavy or stacked load? See our guide to{' '}
                <Link href="/blog/wooden-pallet-load-capacity-guide" className="text-accent hover:text-accent-hover underline underline-offset-2 transition-colors">
                  wooden pallet load capacity
                </Link>{' '}
                for the static, dynamic and racking ratings you need.
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
