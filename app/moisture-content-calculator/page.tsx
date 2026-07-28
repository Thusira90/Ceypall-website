import type { Metadata } from 'next'
import { FadeUp } from '@/components/ui/FadeUp'
import { AnswerBlock } from '@/components/ui/AnswerBlock'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { SchemaScript } from '@/components/ui/SchemaScript'
import { MoistureCalculator } from '@/components/tools/MoistureCalculator'
import { Button } from '@/components/ui/Button'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Wood Moisture Content Calculator — Pallet MC for Export',
  description:
    'Calculate wood moisture content for export pallets. Enter weights or meter readings to check your pallet wood meets the recommended MC for ocean transit.',
  alternates: {
    canonical: 'https://www.ceypall.com/moisture-content-calculator',
  },
  openGraph: {
    title: 'Wood Moisture Content Calculator | CeyPall (Pvt) Ltd',
    description:
      'Calculate wood moisture content for export pallets. Check if your pallet wood meets recommended MC levels for safe ocean transit.',
    url: 'https://www.ceypall.com/moisture-content-calculator',
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
    title: 'Wood Moisture Content Calculator | CeyPall',
    description:
      'Calculate wood moisture content for export pallets. Check if your pallet wood meets recommended MC levels for safe ocean transit.',
    images: ['/OPENGIMAGE.jpg'],
  },
}

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.ceypall.com/' },
    { '@type': 'ListItem', position: 2, name: 'Knowledge Centre', item: 'https://www.ceypall.com/knowledge-centre' },
    { '@type': 'ListItem', position: 3, name: 'Moisture Content Calculator', item: 'https://www.ceypall.com/moisture-content-calculator' },
  ],
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What moisture content should export pallets be?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Export pallets should ideally have a moisture content below 15%. While ISPM 15 does not specify a maximum MC, industry best practice recommends keeping pallet wood below 15% to prevent mould growth during ocean transit. Pallets above 20% MC are at high risk of developing mould, especially on voyages longer than 14 days.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between wet basis and dry basis moisture content?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Wet basis MC = (Wet Weight − Dry Weight) ÷ Wet Weight × 100. Dry basis (oven-dry) MC = (Wet Weight − Dry Weight) ÷ Dry Weight × 100. The dry basis method is the standard used in timber and pallet industries. Wet basis gives a lower percentage for the same sample because it divides by the larger wet weight.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do you measure moisture content in pallet wood?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The most accurate method is the oven-dry test: weigh a wood sample, dry it in an oven at 103°C until the weight stabilises, then calculate the MC from the weight difference. For faster field measurements, pin-type or pinless moisture meters provide instant readings. Take readings at the centre of the thickest board for the most accurate result.',
      },
    },
  ],
}

const webAppJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Wood Moisture Content Calculator',
  description:
    'Free online calculator to check wood moisture content for export pallets. Supports oven-dry weight calculation and moisture meter readings with risk assessment.',
  url: 'https://www.ceypall.com/moisture-content-calculator',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'All',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
  },
  featureList: [
    'Calculate MC from wet and dry weight (wet basis and dry basis)',
    'Enter moisture meter readings directly',
    'Visual gauge with risk assessment',
    'Wood species reference data for rubber wood, Lunumidella, jak, and pine',
  ],
  provider: { '@id': 'https://www.ceypall.com/#organization' },
}

export default function MoistureContentCalculatorPage() {
  return (
    <>
      <SchemaScript schema={breadcrumbJsonLd} />
      <SchemaScript schema={faqJsonLd} />
      <SchemaScript schema={webAppJsonLd} />

      {/* Header */}
      <section className="wood-texture section-padding">
        <div className="container-content">
          <FadeUp>
            <SectionHeader
              as="h1"
              eyebrow="Free tool"
              title="Wood Moisture Content Calculator"
              subtitle="Calculate the moisture content of pallet wood from weight measurements or meter readings. Check whether your pallets meet the recommended MC level for safe export shipping."
              light
            />
          </FadeUp>
        </div>
      </section>

      {/* Calculator */}
      <section className="section-padding cream-texture">
        <div className="container-content max-w-4xl mx-auto">
          <FadeUp>
            <MoistureCalculator />
          </FadeUp>
        </div>
      </section>

      {/* Reference content */}
      <section className="section-padding bg-warm-gray/40">
        <div className="container-content">
          <AnswerBlock question="In short: what moisture content should export pallets be?">
            Export pallet wood should be <strong>below 15% moisture content</strong>. ISPM 15 sets no maximum, but industry best practice keeps pallets under 15% to prevent mould during ocean transit — pallets above 20% MC are high-risk, especially on long voyages. Use the calculator below with weights or meter readings to check yours.
          </AnswerBlock>

          <FadeUp>
            <div className="max-w-2xl">
              <h2 className="font-display text-2xl font-semibold text-primary mb-6">
                Why Moisture Content Matters for Export Pallets
              </h2>
              <p className="font-body text-sm text-charcoal/70 leading-relaxed mb-5">
                Wood moisture content (MC) is one of the most critical factors in export pallet quality. Pallets with high moisture content can cause mould growth during ocean transit, leading to cargo contamination, shipment rejections at destination ports, and costly claims from buyers.
              </p>

              <h3 className="font-display text-lg font-semibold text-primary mt-8 mb-3">
                Recommended Moisture Levels
              </h3>
              <div className="space-y-3 mb-5">
                <div className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-green-500 mt-1.5 flex-shrink-0" />
                  <p className="font-body text-sm text-charcoal/70"><strong className="text-charcoal">Below 12%</strong> — Optimal for all export destinations and transit durations.</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 mt-1.5 flex-shrink-0" />
                  <p className="font-body text-sm text-charcoal/70"><strong className="text-charcoal">12–15%</strong> — Acceptable for most exports. This is the standard CeyPall delivers.</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-amber-500 mt-1.5 flex-shrink-0" />
                  <p className="font-body text-sm text-charcoal/70"><strong className="text-charcoal">15–19%</strong> — Caution. Risk of mould on voyages exceeding 14 days.</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-red-500 mt-1.5 flex-shrink-0" />
                  <p className="font-body text-sm text-charcoal/70"><strong className="text-charcoal">Above 20%</strong> — High risk. Wood requires kiln drying before use.</p>
                </div>
              </div>

              <h3 className="font-display text-lg font-semibold text-primary mt-8 mb-3">
                How to Measure Moisture Content
              </h3>
              <p className="font-body text-sm text-charcoal/70 leading-relaxed mb-5">
                There are two main methods for measuring wood moisture content:
              </p>
              <p className="font-body text-sm text-charcoal/70 leading-relaxed mb-3">
                <strong className="text-charcoal">Oven-dry method (gravimetric):</strong> Weigh a wood sample before and after drying in an oven at 103°C until the weight stabilises (typically 24 hours). This is the most accurate method and the industry reference standard.
              </p>
              <p className="font-body text-sm text-charcoal/70 leading-relaxed mb-5">
                <strong className="text-charcoal">Moisture meter:</strong> Pin-type meters measure electrical resistance between two probes driven into the wood. Pinless (capacitive) meters scan a wider area without damaging the surface. Both provide instant readings suitable for quality checks on incoming pallet deliveries.
              </p>

              <h3 className="font-display text-lg font-semibold text-primary mt-8 mb-3">
                Wet Basis vs Dry Basis
              </h3>
              <p className="font-body text-sm text-charcoal/70 leading-relaxed mb-5">
                The timber industry standard is the <strong className="text-charcoal">dry basis</strong> (oven-dry) method, where the moisture content is expressed as a percentage of the oven-dry weight. The <strong className="text-charcoal">wet basis</strong> method divides by the initial wet weight instead, giving a lower percentage for the same sample. When comparing MC values, always confirm which method was used.
              </p>

              <p className="font-body text-sm text-charcoal/70 leading-relaxed">
                For more on wood treatment methods, see our guides:{' '}
                <Link href="/blog/heat-treatment-vs-methyl-bromide-fumigation" className="text-accent hover:text-accent-hover underline underline-offset-2 transition-colors">
                  Heat Treatment vs Methyl Bromide
                </Link>{' '}
                and{' '}
                <Link href="/blog/vacuum-pressure-impregnated-vs-heat-treated-pallets" className="text-accent hover:text-accent-hover underline underline-offset-2 transition-colors">
                  VPI vs Heat Treated Pallets
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
            <h3 className="font-display text-2xl text-white">Need kiln-dried, low-MC pallets?</h3>
            <p className="font-body text-sm text-white/80 mt-1">
              All CeyPall pallets are kiln-dried below 15% MC — ISPM 15 certified and IPPC stamped.
            </p>
          </div>
          <Button href="/contact" variant="outline-light" size="lg">
            Request a quote →
          </Button>
        </div>
      </section>
    </>
  )
}
