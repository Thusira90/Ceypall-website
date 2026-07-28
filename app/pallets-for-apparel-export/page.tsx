import type { Metadata } from 'next'
import Link from 'next/link'
import { FadeUp } from '@/components/ui/FadeUp'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Button } from '@/components/ui/Button'
import { SchemaScript } from '@/components/ui/SchemaScript'

export const metadata: Metadata = {
  title: 'Pallets for Apparel Export Sri Lanka | ISPM 15 Certified',
  description:
    'ISPM 15 heat-treated pallets for Sri Lankan apparel exporters. IPPC stamped, treatment certificates included. Delivery to Katunayake, Biyagama & EPZs.',
  alternates: {
    canonical: 'https://www.ceypall.com/pallets-for-apparel-export',
  },
  openGraph: {
    title: 'Pallets for Apparel Export Sri Lanka | CeyPall (Pvt) Ltd',
    description:
      'ISPM 15 certified pallets for garment and apparel exporters in Sri Lankan EPZs. IPPC stamped with delivery to all free trade zones.',
    url: 'https://www.ceypall.com/pallets-for-apparel-export',
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
    title: 'Pallets for Apparel Export Sri Lanka | CeyPall',
    description:
      'ISPM 15 certified pallets for garment exporters. IPPC stamped, treatment certificates, EPZ delivery.',
    images: ['/OPENGIMAGE.jpg'],
  },
}

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.ceypall.com/' },
    { '@type': 'ListItem', position: 2, name: 'Pallets for Apparel Export', item: 'https://www.ceypall.com/pallets-for-apparel-export' },
  ],
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What pallet size do apparel exporters in Sri Lanka use?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most Sri Lankan apparel exporters shipping to the EU use 1200 x 800 mm Euro pallets (EUR/EPAL size). For US-bound shipments, 1219 x 1016 mm (48" x 40") pallets are standard. CeyPall manufactures both sizes and can recommend the best option based on your destination market and container type.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you deliver pallets to Katunayake Free Trade Zone?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. CeyPall is located in Kochchikade, approximately 20–30 minutes from Katunayake EPZ. We deliver to all major Export Processing Zones including Katunayake, Biyagama, Seethawaka, and Koggala. We can set up recurring weekly or fortnightly delivery schedules to match your production cycle.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why do EU buyers reject shipments with non-compliant pallets?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'EU countries enforce ISPM 15 strictly. If wooden pallets do not carry a valid IPPC stamp from a registered treatment provider, the shipment can be held at the port for phytosanitary inspection, re-treatment, or returned. Invalid IPPC stamps — where the registration number does not match an approved provider — are treated the same as no stamp at all.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you supply pallets for BOI-registered manufacturers?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. CeyPall supplies pallets to multiple BOI-registered apparel manufacturers across Sri Lanka. We provide the documentation required for BOI compliance, including official ISPM 15 heat treatment certificates with every delivery.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the typical lead time for apparel export pallets?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Standard lead time is 3–5 working days for regular orders. For recurring clients with scheduled deliveries, we maintain buffer stock to ensure uninterrupted supply aligned with your shipping schedule.',
      },
    },
  ],
}

const reasons = [
  {
    number: '01',
    title: 'Valid IPPC Stamps',
    body: 'Every CeyPall pallet carries a genuine IPPC stamp registered with the National Plant Quarantine Service of Sri Lanka. No invalid stamps, no compliance warnings from EU or US buyers.',
  },
  {
    number: '02',
    title: 'EPZ Delivery Network',
    body: 'We deliver to Katunayake, Biyagama, Seethawaka, Koggala, and all major Export Processing Zones. Scheduled weekly or fortnightly deliveries aligned with your production cycle.',
  },
  {
    number: '03',
    title: 'EU & US Sizes in Stock',
    body: 'We manufacture both 1200 x 800 mm Euro pallets for EU-bound shipments and 1219 x 1016 mm pallets for North American markets — the two sizes that account for the majority of Sri Lankan apparel exports.',
  },
  {
    number: '04',
    title: 'Treatment Certificates',
    body: 'Every delivery comes with an official ISPM 15 heat treatment certificate. Digital copies are emailed for faster processing — no delays waiting for paperwork when your container is being stuffed.',
  },
]

const epzCoverage = [
  { zone: 'Katunayake EPZ', distance: '20–30 min', industries: 'Apparel, electronics, high-value manufacturing' },
  { zone: 'Biyagama EPZ', distance: '45–60 min', industries: 'Electronics, chemicals, industrial manufacturing' },
  { zone: 'Seethawaka EPZ', distance: '75–90 min', industries: 'Apparel, rubber, chemicals' },
  { zone: 'Wathupitiwela EPZ', distance: '50–65 min', industries: 'Mixed manufacturing' },
  { zone: 'Mirigama EPZ', distance: '60–75 min', industries: 'Export-focused manufacturing' },
  { zone: 'Koggala EPZ', distance: 'Scheduled route', industries: 'Garments, manufacturing' },
  { zone: 'Horana EPZ', distance: '90–110 min', industries: 'Apparel, food processing' },
]

const destinations = [
  { market: 'European Union', notes: 'Largest destination for Sri Lankan garments. Strict ISPM 15 enforcement.' },
  { market: 'United States', notes: 'Major market. Requires ISPM 15 compliance for all wooden packaging.' },
  { market: 'United Kingdom', notes: 'Post-Brexit, maintains ISPM 15 requirements independently.' },
  { market: 'Canada', notes: 'ISPM 15 mandatory. Same pallet size as US (1219 x 1016 mm).' },
  { market: 'Australia', notes: 'Strict biosecurity. ISPM 15 plus additional BICON checks.' },
  { market: 'Japan', notes: 'Strict bark-free requirements. ISPM 15 mandatory.' },
]

export default function PalletsForApparelExportPage() {
  return (
    <>
      <SchemaScript schema={breadcrumbJsonLd} />
      <SchemaScript schema={faqJsonLd} />

      {/* Hero */}
      <section className="wood-texture section-padding">
        <div className="container-content">
          <FadeUp>
            <div className="max-w-2xl">
              <p className="font-body text-xs font-semibold tracking-[0.15em] uppercase text-accent mb-4">
                Apparel export pallets
              </p>
              <h1 className="font-display text-display-lg text-cream">
                ISPM 15 Pallets for Sri Lankan Garment Exporters.
              </h1>
              <span className="block w-10 h-0.5 bg-accent mt-4 mb-5" />
              <p className="font-body text-base text-cream/80 leading-relaxed mb-8">
                Heat-treated, IPPC-stamped wooden pallets for BOI-registered apparel manufacturers
                and garment exporters. Valid compliance documentation with every order. Delivery to
                all Export Processing Zones across Sri Lanka.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button href="/contact" variant="primary" size="lg">
                  Request a quote →
                </Button>
                <Button href="/products" variant="outline-light" size="lg">
                  View all products
                </Button>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Why CeyPall */}
      <section className="section-padding cream-texture">
        <div className="container-content">
          <FadeUp>
            <div className="mb-12">
              <SectionHeader
                eyebrow="Why CeyPall"
                title="Compliance you can trust, every shipment."
              />
            </div>
          </FadeUp>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-warm-gray">
            {reasons.map(({ number, title, body }) => (
              <FadeUp key={number}>
                <div className="bg-cream p-8 flex flex-col gap-5 h-full">
                  <span className="font-display text-4xl font-bold text-warm-gray select-none">
                    {number}
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-primary mb-3">
                      {title}
                    </h3>
                    <p className="font-body text-sm text-charcoal/65 leading-relaxed">{body}</p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* EPZ delivery coverage */}
      <section className="section-padding bg-warm-gray/40">
        <div className="container-content">
          <FadeUp>
            <SectionHeader
              eyebrow="Delivery coverage"
              title="We deliver to every Export Processing Zone."
            />
          </FadeUp>

          <FadeUp delay={0.1}>
            <div className="mt-10 overflow-x-auto">
              <table className="w-full font-body text-sm">
                <thead>
                  <tr className="border-b-2 border-primary/20">
                    <th className="text-left py-3 pr-6 font-semibold text-primary">Zone</th>
                    <th className="text-left py-3 pr-6 font-semibold text-primary">From CeyPall</th>
                    <th className="text-left py-3 font-semibold text-primary">Key industries</th>
                  </tr>
                </thead>
                <tbody>
                  {epzCoverage.map(({ zone, distance, industries }) => (
                    <tr key={zone} className="border-b border-warm-gray">
                      <td className="py-3 pr-6 font-medium text-charcoal">{zone}</td>
                      <td className="py-3 pr-6 text-charcoal/70">{distance}</td>
                      <td className="py-3 text-charcoal/70">{industries}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Export destinations */}
      <section className="section-padding bg-charcoal">
        <div className="container-content">
          <FadeUp>
            <SectionHeader
              eyebrow="Export markets"
              title="Accepted in every major apparel-importing country."
              light
            />
          </FadeUp>

          <FadeUp delay={0.1}>
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5">
              {destinations.map(({ market, notes }) => (
                <div key={market} className="bg-charcoal p-6">
                  <h3 className="font-display text-base font-semibold text-cream mb-2">
                    {market}
                  </h3>
                  <p className="font-body text-xs text-cream/50">{notes}</p>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Compliance content */}
      <section className="section-padding cream-texture">
        <div className="container-content">
          <FadeUp>
            <div className="max-w-2xl">
              <h2 className="font-display text-2xl font-semibold text-primary mb-6">
                Why Pallet Compliance Matters for Apparel Exporters
              </h2>
              <p className="font-body text-sm text-charcoal/70 leading-relaxed mb-5">
                Sri Lanka is one of the world&apos;s leading apparel exporters, with garments shipped
                to major retail brands across Europe, North America, and Asia. Every one of these
                shipments requires ISPM 15-compliant wooden packaging — and EU buyers are
                increasingly auditing their supply chains for valid IPPC stamps.
              </p>
              <p className="font-body text-sm text-charcoal/70 leading-relaxed mb-5">
                A single shipment rejection for non-compliant pallets can cost an apparel exporter
                LKR 500,000–1,000,000 in re-treatment fees, port storage charges, and delayed
                delivery penalties. More critically, repeated compliance failures can damage the
                trading relationship with international buyers.
              </p>
              <p className="font-body text-sm text-charcoal/70 leading-relaxed">
                Learn more about compliance requirements in our guides:{' '}
                <Link href="/blog/what-is-ispm-15" className="text-accent hover:text-accent-hover underline underline-offset-2 transition-colors">
                  What is ISPM 15?
                </Link>{' '}
                and{' '}
                <Link href="/blog/why-shipments-get-rejected-customs-pallet-issues" className="text-accent hover:text-accent-hover underline underline-offset-2 transition-colors">
                  Why Shipments Get Rejected at Customs
                </Link>.
              </p>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-warm-gray/40">
        <div className="container-content">
          <FadeUp>
            <SectionHeader
              eyebrow="Common questions"
              title="Apparel export pallet FAQ."
            />
          </FadeUp>

          <FadeUp delay={0.1}>
            <div className="mt-10 max-w-2xl space-y-8">
              {faqJsonLd.mainEntity.map((item: { '@type': string; name: string; acceptedAnswer: { '@type': string; text: string } }) => (
                <div key={item.name} className="border-b border-warm-gray pb-6">
                  <h3 className="font-display text-base font-semibold text-primary mb-3">
                    {item.name}
                  </h3>
                  <p className="font-body text-sm text-charcoal/70 leading-relaxed">
                    {item.acceptedAnswer.text}
                  </p>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-accent py-16">
        <div className="container-content flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-display text-2xl text-white">Need pallets for your next garment shipment?</h3>
            <p className="font-body text-sm text-white/80 mt-1">
              ISPM 15 certified, IPPC stamped, delivered to your EPZ.
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
