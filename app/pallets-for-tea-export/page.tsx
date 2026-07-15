import type { Metadata } from 'next'
import Link from 'next/link'
import { FadeUp } from '@/components/ui/FadeUp'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Button } from '@/components/ui/Button'
import { SchemaScript } from '@/components/ui/SchemaScript'

export const metadata: Metadata = {
  title: 'Pallets for Tea Export Sri Lanka | ISPM 15 Certified',
  description:
    'ISPM 15 heat-treated pallets for Sri Lankan tea exporters. Sized for standard tea chests, kiln-dried below 15% MC. IPPC stamped, delivered to Nuwara Eliya, Kandy, and Colombo.',
  alternates: {
    canonical: 'https://www.ceypall.com/pallets-for-tea-export',
  },
  openGraph: {
    title: 'Pallets for Tea Export Sri Lanka | CeyPall (Pvt) Ltd',
    description:
      'ISPM 15 heat-treated wooden pallets for Sri Lankan tea exporters. Kiln-dried below 15% MC. IPPC stamped. Delivery to tea-producing regions.',
    url: 'https://www.ceypall.com/pallets-for-tea-export',
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
    title: 'Pallets for Tea Export Sri Lanka | CeyPall',
    description:
      'ISPM 15 certified pallets for tea exporters. Low moisture content, bark-free, with treatment certificates for every shipment.',
    images: ['/OPENGIMAGE.jpg'],
  },
}

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.ceypall.com/' },
    { '@type': 'ListItem', position: 2, name: 'Pallets for Tea Export', item: 'https://www.ceypall.com/pallets-for-tea-export' },
  ],
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What pallet size is best for tea chest export?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The most common pallet size for tea exports from Sri Lanka is 1200 x 1000 mm (general export standard). For EU-bound shipments, 1200 x 800 mm Euro pallets are preferred. CeyPall also manufactures custom sizes to match specific tea chest footprints for maximum container utilisation.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why is low moisture content important for tea pallets?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Tea is highly hygroscopic — it absorbs moisture from its surroundings. If pallet wood has high moisture content (above 15%), it can release moisture during ocean transit, raising humidity inside the container. This can cause tea to absorb that moisture, degrading quality and flavour. CeyPall kiln-dries all pallets to below 15% MC before dispatch.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you deliver pallets to tea factories in the hill country?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. CeyPall delivers to tea-producing regions including Nuwara Eliya, Kandy, Matale, Hatton, and Ratnapura. We run scheduled delivery routes to upcountry locations and can arrange fortnightly or monthly supply schedules to match your production cycle.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are CeyPall pallets accepted by Japanese and EU tea buyers?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. All CeyPall pallets are ISPM 15 certified and carry a valid IPPC stamp registered with the National Plant Quarantine Service of Sri Lanka. They are accepted in all ISPM 15 signatory countries including Japan, the EU, UK, USA, Australia, the Middle East, and Russia.',
      },
    },
    {
      '@type': 'Question',
      name: 'What documentation do tea exporters receive with each pallet order?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Every CeyPall delivery includes an official ISPM 15 heat treatment certificate confirming treatment at 56°C core temperature for a minimum of 30 minutes. This certificate, along with the IPPC stamp on each pallet, is the standard documentation required by customs authorities worldwide.',
      },
    },
  ],
}

const reasons = [
  {
    number: '01',
    title: 'Low Moisture Content',
    body: 'Tea absorbs moisture from its surroundings. All CeyPall pallets are kiln-dried to below 15% moisture content — protecting your tea from humidity damage during ocean transit lasting 14–35 days.',
  },
  {
    number: '02',
    title: 'Bark-Free Guarantee',
    body: 'Japanese customs are particularly strict about bark residue on wooden packaging. Every CeyPall pallet is inspected to ensure complete bark removal before dispatch — preventing customs rejections at destination.',
  },
  {
    number: '03',
    title: 'Sized for Tea Chests',
    body: 'We manufacture pallets matched to standard tea chest footprints for maximum container utilisation. Whether you ship in 20ft or 40ft containers, we can recommend the pallet size that maximises your loading capacity.',
  },
  {
    number: '04',
    title: 'Upcountry Delivery',
    body: 'We deliver to Nuwara Eliya, Kandy, Matale, Hatton, and Ratnapura on scheduled routes. No need to source pallets from Colombo and arrange your own transport — we bring them to your factory gate.',
  },
]

const destinations = [
  { market: 'Japan', share: 'Largest buyer of Ceylon tea', requirement: 'ISPM 15 + strict bark-free' },
  { market: 'Russia & CIS', share: 'Major bulk tea market', requirement: 'ISPM 15 mandatory' },
  { market: 'Middle East (UAE, Iraq, Iran)', share: 'Growing market', requirement: 'ISPM 15 mandatory' },
  { market: 'European Union', share: 'Premium market', requirement: 'ISPM 15 + EU phytosanitary' },
  { market: 'United Kingdom', share: 'Historic trade partner', requirement: 'ISPM 15 mandatory' },
  { market: 'China', share: 'Expanding market', requirement: 'ISPM 15 + AQSIQ compliance' },
]

const teaRegions = [
  { region: 'Nuwara Eliya', elevation: 'High grown (above 1200m)', teas: 'Light, fragrant, delicate flavour' },
  { region: 'Kandy / Matale', elevation: 'Mid grown (600–1200m)', teas: 'Full-bodied, copper-coloured' },
  { region: 'Ratnapura / Sabaragamuwa', elevation: 'Low grown (below 600m)', teas: 'Strong, dark, bold flavour' },
  { region: 'Galle / Matara', elevation: 'Low grown (below 600m)', teas: 'Smooth, mellow flavour' },
]

export default function PalletsForTeaExportPage() {
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
                Tea export pallets
              </p>
              <h1 className="font-display text-display-lg text-cream">
                ISPM 15 Pallets for Sri Lankan Tea Exporters.
              </h1>
              <span className="block w-10 h-0.5 bg-accent mt-4 mb-5" />
              <p className="font-body text-base text-cream/80 leading-relaxed mb-8">
                Heat-treated, IPPC-stamped wooden pallets designed for the tea industry. Kiln-dried
                below 15% MC to protect your tea during ocean transit. Delivery to Nuwara Eliya,
                Kandy, Colombo, and all tea-producing regions.
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

      {/* Why CeyPall for tea */}
      <section className="section-padding cream-texture">
        <div className="container-content">
          <FadeUp>
            <div className="mb-12">
              <SectionHeader
                eyebrow="Why CeyPall"
                title="Built for the demands of tea export."
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

      {/* Tea producing regions */}
      <section className="section-padding bg-warm-gray/40">
        <div className="container-content">
          <FadeUp>
            <SectionHeader
              eyebrow="Delivery coverage"
              title="We deliver to every tea-producing region."
            />
          </FadeUp>

          <FadeUp delay={0.1}>
            <div className="mt-10 overflow-x-auto">
              <table className="w-full font-body text-sm">
                <thead>
                  <tr className="border-b-2 border-primary/20">
                    <th className="text-left py-3 pr-6 font-semibold text-primary">Region</th>
                    <th className="text-left py-3 pr-6 font-semibold text-primary">Elevation</th>
                    <th className="text-left py-3 font-semibold text-primary">Tea profile</th>
                  </tr>
                </thead>
                <tbody>
                  {teaRegions.map(({ region, elevation, teas }) => (
                    <tr key={region} className="border-b border-warm-gray">
                      <td className="py-3 pr-6 font-medium text-charcoal">{region}</td>
                      <td className="py-3 pr-6 text-charcoal/70">{elevation}</td>
                      <td className="py-3 text-charcoal/70">{teas}</td>
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
              title="Accepted in every major tea-importing country."
              light
            />
          </FadeUp>

          <FadeUp delay={0.1}>
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5">
              {destinations.map(({ market, share, requirement }) => (
                <div key={market} className="bg-charcoal p-6">
                  <h3 className="font-display text-base font-semibold text-cream mb-1">
                    {market}
                  </h3>
                  <p className="font-body text-xs text-cream/50 mb-3">{share}</p>
                  <p className="font-body text-xs text-accent">{requirement}</p>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Moisture warning */}
      <section className="section-padding cream-texture">
        <div className="container-content">
          <FadeUp>
            <div className="max-w-2xl">
              <h2 className="font-display text-2xl font-semibold text-primary mb-6">
                Why Moisture Content Matters for Tea Pallets
              </h2>
              <p className="font-body text-sm text-charcoal/70 leading-relaxed mb-5">
                Ceylon tea is one of the most moisture-sensitive export commodities. During a typical
                ocean voyage (14–35 days depending on destination), containers experience temperature
                fluctuations that cause condensation — commonly called &ldquo;container rain.&rdquo;
              </p>
              <p className="font-body text-sm text-charcoal/70 leading-relaxed mb-5">
                If pallet wood has high moisture content, it releases additional moisture vapour into
                the container, compounding the problem. This can cause tea to absorb moisture, leading
                to flavour degradation, mould growth, and buyer rejections.
              </p>
              <p className="font-body text-sm text-charcoal/70 leading-relaxed mb-5">
                CeyPall kiln-dries all pallets to below 15% moisture content before dispatch. For
                long-haul voyages to Japan or Europe (28+ days), we can supply pallets dried to below
                12% on request.
              </p>
              <p className="font-body text-sm text-charcoal/70 leading-relaxed">
                Use our free{' '}
                <Link href="/moisture-content-calculator" className="text-accent hover:text-accent-hover underline underline-offset-2 transition-colors">
                  Moisture Content Calculator
                </Link>{' '}
                to check whether your current pallets meet recommended levels, or read our guide on{' '}
                <Link href="/blog/wooden-pallets-for-tea-export-sri-lanka" className="text-accent hover:text-accent-hover underline underline-offset-2 transition-colors">
                  wooden pallets for tea export
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
              title="Tea export pallet FAQ."
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
            <h3 className="font-display text-2xl text-white">Need pallets for your next tea shipment?</h3>
            <p className="font-body text-sm text-white/80 mt-1">
              ISPM 15 certified, kiln-dried below 15% MC, delivered to your factory.
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
