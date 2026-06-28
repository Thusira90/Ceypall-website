import type { Metadata } from 'next'
import { FadeUp } from '@/components/ui/FadeUp'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Button } from '@/components/ui/Button'
import { SchemaScript } from '@/components/ui/SchemaScript'

export const metadata: Metadata = {
  title: 'Clients — Companies We Supply',
  description:
    'CeyPall supplies ISPM 15-certified wooden pallets to leading Sri Lankan exporters and manufacturers — including Akbar Brothers, CBL, and Hela Clothing — across tea, food, textiles, logistics, and chemicals.',
  alternates: {
    canonical: 'https://www.ceypall.com/clients',
  },
}

const clients = [
  { name: 'Ace Containers Pvt Ltd', sector: 'Logistics & Containers' },
  { name: 'Akbar Brothers Pvt Ltd', sector: 'Tea & Beverages' },
  { name: 'CBL Natural Foods Pvt Ltd', sector: 'Food Manufacturing' },
  { name: 'CBL Global Foods Pvt Ltd', sector: 'Food Manufacturing' },
  {
    name: 'De La Rue Lanka Currency & Security Print (Pvt) Ltd',
    sector: 'Security Printing',
  },
  { name: 'GPV Lanka Pvt Ltd', sector: 'Electronics Manufacturing' },
  { name: 'Hemas Manufacturing Pvt Ltd', sector: 'Consumer Goods' },
  { name: 'Ceylon Tea Marketing Pvt Ltd', sector: 'Tea Export' },
]

const sectors = [
  'Tea & beverages',
  'Food manufacturing',
  'Textiles & apparel',
  'Logistics & freight',
  'Consumer goods',
  'Security printing',
  'Electronics',
  'Chemicals',
  'Pharmaceuticals',
  'Rubber & latex',
  'Ceramics & tiles',
  'Furniture & timber',
  'Agriculture & spices',
  'Shipping & freight forwarding',
  'Paper & packaging',
  'Hardware & industrial',
]

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.ceypall.com/' },
    { '@type': 'ListItem', position: 2, name: 'Clients', item: 'https://www.ceypall.com/clients' },
  ],
}

export default function ClientsPage() {
  return (
    <>
      {/* ── JSON-LD ─────────────────────────────────────────────────────── */}
      <SchemaScript schema={breadcrumbJsonLd} />

      {/* Header */}
      <section className="wood-texture section-padding">
        <div className="container-content">
          <FadeUp>
            <SectionHeader
              as="h1"
              eyebrow="Our clients"
              title="Our Clients — Companies We Supply"
              subtitle="We are proud to supply pallets to some of Sri Lanka's most respected exporters and manufacturers — across tea, food, textiles, chemicals, logistics, and more."
              light
            />
          </FadeUp>
        </div>
      </section>

      {/* Client grid */}
      <section className="section-padding cream-texture">
        <div className="container-content">
          <FadeUp>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-warm-gray">
              {clients.map(({ name, sector }) => (
                <div key={name} className="bg-cream p-8 flex flex-col gap-3">
                  <div className="w-10 h-0.5 bg-accent" />
                  <p className="font-display text-base font-semibold text-primary leading-snug">
                    {name}
                  </p>
                  <p className="font-body text-xs text-charcoal/50 uppercase tracking-wider">{sector}</p>
                </div>
              ))}
            </div>
          </FadeUp>

          <FadeUp delay={0.15}>
            <div className="mt-8 bg-primary/5 border border-warm-gray px-8 py-6 flex items-center gap-4">
              <div className="w-1 self-stretch bg-accent flex-shrink-0" />
              <p className="font-body text-sm text-charcoal/70 italic">
                ..and 30+ companies across tea, food, textiles, logistics, and manufacturing.
              </p>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Sectors */}
      <section className="section-padding bg-charcoal">
        <div className="container-content">
          <FadeUp>
            <SectionHeader
              eyebrow="Industries served"
              title="We serve every export sector."
              light
            />
          </FadeUp>

          <FadeUp delay={0.1}>
            <div className="mt-10 flex flex-wrap gap-3">
              {sectors.map((s) => (
                <span
                  key={s}
                  className="font-body text-sm text-cream/80 border border-cream/15 px-4 py-2"
                >
                  {s}
                </span>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding cream-texture">
        <div className="container-content">
          <FadeUp>
            <div className="max-w-2xl">
              <SectionHeader
                eyebrow="Join our client list"
                title="Join our client list."
                subtitle="Looking for a reliable, compliant pallet supplier for your business? Get in touch and let's discuss your requirements."
              />
              <div className="mt-8">
                <Button href="/contact" variant="primary" size="lg">
                  Request a quote →
                </Button>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>
    </>
  )
}
