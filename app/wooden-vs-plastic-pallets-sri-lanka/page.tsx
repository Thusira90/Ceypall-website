import type { Metadata } from 'next'
import Link from 'next/link'
import { FadeUp } from '@/components/ui/FadeUp'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { SchemaScript } from '@/components/ui/SchemaScript'
import { AnswerBlock } from '@/components/ui/AnswerBlock'
import { FaqSection } from '@/components/ui/FaqSection'
import { Button } from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'Wooden vs Plastic Pallets in Sri Lanka — Which to Choose',
  description:
    'An honest comparison of wooden and plastic pallets for Sri Lankan exporters and warehouses — cost, hygiene, ISPM 15 export compliance, repairability, and when plastic is genuinely the better choice.',
  alternates: {
    canonical: 'https://www.ceypall.com/wooden-vs-plastic-pallets-sri-lanka',
  },
  openGraph: {
    title: 'Wooden vs Plastic Pallets in Sri Lanka — Which to Choose | CeyPall',
    description:
      'Cost, hygiene, ISPM 15 export compliance, repairability, and when plastic is genuinely the better choice — a balanced comparison for Sri Lankan exporters and warehouses.',
    url: 'https://www.ceypall.com/wooden-vs-plastic-pallets-sri-lanka',
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
    title: 'Wooden vs Plastic Pallets in Sri Lanka — Which to Choose | CeyPall',
    description:
      'A balanced comparison of wooden and plastic pallets for Sri Lankan exporters — cost, hygiene, export compliance, and when plastic wins.',
    images: ['/OPENGIMAGE.jpg'],
  },
}

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.ceypall.com/' },
    { '@type': 'ListItem', position: 2, name: 'Wooden vs Plastic Pallets', item: 'https://www.ceypall.com/wooden-vs-plastic-pallets-sri-lanka' },
  ],
}

// Driven as static HTML so answer engines can read every cell.
const comparisonRows = [
  { factor: 'Upfront cost', wood: 'Lower — typically a fraction of a plastic pallet of the same size', plastic: 'Higher — often 3–5× the price of an equivalent wooden pallet' },
  { factor: 'Export compliance (ISPM 15)', wood: 'Requires heat treatment + IPPC stamp — CeyPall supplies both with a certificate', plastic: 'Exempt from ISPM 15 (not a wood packaging material), so no treatment needed' },
  { factor: 'Hygiene / cleanability', wood: 'Porous; cleaned but not sterilised — good for general export goods', plastic: 'Non-porous, washable — preferred for pharma, food, and cleanroom use' },
  { factor: 'Repairability', wood: 'Easily repaired plank-by-plank and re-treated; low cost to keep in service', plastic: 'Generally not repairable — a cracked pallet is usually scrapped' },
  { factor: 'Weight', wood: 'Heavier', plastic: 'Lighter — can marginally reduce air-freight weight' },
  { factor: 'Lifespan (closed loop)', wood: 'Good; excellent value when repaired', plastic: 'Longer in a controlled, returnable pool' },
  { factor: 'Disposal / recycling', wood: 'Biodegradable; repairable and recyclable', plastic: 'Recyclable but not biodegradable' },
  { factor: 'Best fit', wood: 'One-way and general export, most warehouse storage', plastic: 'Hygiene-critical goods and closed-loop returnable systems' },
]

const faqs = [
  {
    question: 'Are wooden or plastic pallets better for export from Sri Lanka?',
    answer:
      'For most exports, heat-treated wooden pallets are the better choice: they cost far less, are accepted worldwide once ISPM 15 heat-treated and IPPC-stamped, and are easily repaired. Plastic pallets are worth the premium mainly for hygiene-critical cargo (pharmaceuticals, food) or closed-loop returnable systems where the same pallets come back.',
  },
  {
    question: 'Do plastic pallets need ISPM 15 treatment?',
    answer:
      'No. ISPM 15 applies only to wood packaging material, so plastic pallets are exempt and do not need heat treatment or an IPPC stamp. Wooden export pallets do require ISPM 15 heat treatment — CeyPall provides this with a treatment certificate on every order.',
  },
  {
    question: 'Why are plastic pallets more expensive than wooden pallets?',
    answer:
      'Plastic pallets are moulded from petroleum-based polymer, which costs more per unit than locally sourced timber, and they are typically priced 3–5× higher than an equivalent wooden pallet. That premium only pays back in closed-loop systems where the pallet is reused many times.',
  },
  {
    question: 'Can wooden pallets be used for food or pharmaceutical goods?',
    answer:
      'Wooden pallets are widely used for general and food-grade export, but their porous surface cannot be sterilised the way plastic can. For pharmaceutical, cleanroom, or wash-down environments, non-porous plastic pallets are usually preferred. For everything else, heat-treated wooden pallets are the practical, lower-cost standard.',
  },
]

const sections = [
  {
    heading: 'Cost',
    body: 'On upfront price, wood wins clearly. A wooden pallet is a fraction of the cost of a comparable plastic pallet, which typically sells for three to five times as much. For one-way export shipments — where the pallet leaves with the goods and does not come back — that price gap is decisive, because a premium plastic pallet you never see again is money left at the destination. Plastic only recovers its cost in a closed loop where the same pallets are reused dozens of times.',
  },
  {
    heading: 'Export compliance and ISPM 15',
    body: 'Every country that enforces ISPM 15 requires wooden (and other solid-wood) packaging to be heat-treated and stamped with the IPPC mark. CeyPall heat-treats to a 56°C core for at least 30 minutes and supplies an IPPC-stamped pallet with a treatment certificate, so a wooden pallet is fully export-legal. Plastic pallets sit outside ISPM 15 entirely — they are not wood packaging material, so they need no treatment or stamp. That exemption is a genuine convenience for plastic, but heat-treated wood is just as universally accepted at the border.',
  },
  {
    heading: 'Hygiene',
    body: 'Plastic is non-porous and can be washed and sanitised, which is why it is the default for pharmaceuticals, food processing, and cleanroom logistics. Wood is porous: it can be cleaned but not truly sterilised. For general export goods, apparel, tea, rubber, spices, and most warehouse storage, that distinction rarely matters — but if your cargo has strict hygiene requirements, plastic earns its premium.',
  },
  {
    heading: 'Repairability',
    body: 'A wooden pallet is repairable plank by plank: a broken board is replaced, the pallet is re-treated if needed, and it goes back into service for a small fraction of its original cost. A cracked plastic pallet usually cannot be repaired and is scrapped or recycled. Over a fleet, repairable wood keeps more pallets in circulation for less money.',
  },
  {
    heading: 'When plastic is genuinely the right call',
    body: 'Plastic is the better choice when hygiene is non-negotiable (pharma, food, cleanroom), when you run a closed-loop returnable pool where the same pallets cycle back to you, or when you need a consistent tare weight for automated handling. If none of those apply — and for most Sri Lankan exporters they do not — heat-treated wooden pallets deliver the same border acceptance at a far lower cost. CeyPall manufactures wooden pallets only, and we would rather tell you honestly when plastic fits your use case than sell you the wrong pallet.',
  },
]

export default function WoodenVsPlasticPalletsPage() {
  return (
    <>
      <SchemaScript schema={breadcrumbJsonLd} />

      {/* Header */}
      <section className="wood-texture section-padding">
        <div className="container-content">
          <FadeUp>
            <SectionHeader
              as="h1"
              eyebrow="Buyer's guide"
              title="Wooden vs Plastic Pallets in Sri Lanka"
              subtitle="A balanced comparison for exporters and warehouses — cost, hygiene, ISPM 15 export compliance, repairability, and when plastic is genuinely the better choice."
              light
            />
          </FadeUp>
        </div>
      </section>

      {/* Direct answer + comparison table */}
      <section className="section-padding cream-texture">
        <div className="container-content">
          <AnswerBlock question="In short: wooden or plastic pallets?">
            For most Sri Lankan exporters, <strong>heat-treated wooden pallets</strong> are the better
            choice — they cost a fraction of plastic, are accepted worldwide once ISPM 15 heat-treated and
            IPPC-stamped, and are easily repaired. <strong>Plastic pallets</strong> earn their 3–5×
            premium mainly for hygiene-critical goods (pharma, food) or closed-loop returnable systems.
          </AnswerBlock>

          <FadeUp>
            <div className="overflow-x-auto mt-4 max-w-3xl">
              <table className="w-full border-collapse font-body text-sm">
                <caption className="sr-only">
                  Comparison of wooden and plastic pallets across cost, compliance, hygiene, and repairability
                </caption>
                <thead>
                  <tr className="bg-primary text-cream">
                    <th scope="col" className="text-left font-semibold px-4 py-3 border border-warm-gray">Factor</th>
                    <th scope="col" className="text-left font-semibold px-4 py-3 border border-warm-gray">Wooden pallets</th>
                    <th scope="col" className="text-left font-semibold px-4 py-3 border border-warm-gray">Plastic pallets</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row) => (
                    <tr key={row.factor} className="odd:bg-white/60 even:bg-warm-gray/20 align-top">
                      <th scope="row" className="text-left font-medium text-charcoal/80 px-4 py-3 border border-warm-gray">{row.factor}</th>
                      <td className="text-charcoal/70 px-4 py-3 border border-warm-gray">{row.wood}</td>
                      <td className="text-charcoal/70 px-4 py-3 border border-warm-gray">{row.plastic}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Detailed comparison */}
      <section className="section-padding bg-warm-gray/40">
        <div className="container-content">
          <div className="max-w-2xl">
            {sections.map((s, i) => (
              <FadeUp key={s.heading} delay={i * 0.05}>
                <div className={i > 0 ? 'mt-8' : ''}>
                  <h2 className="font-display text-xl font-semibold text-primary mb-3">{s.heading}</h2>
                  <p className="font-body text-sm text-charcoal/70 leading-relaxed">{s.body}</p>
                </div>
              </FadeUp>
            ))}

            <FadeUp>
              <p className="font-body text-sm text-charcoal/70 leading-relaxed mt-8">
                If wooden pallets fit your shipments, see our{' '}
                <Link href="/heat-treated-pallets" className="text-accent hover:text-accent-hover underline underline-offset-2 transition-colors">
                  ISPM 15 heat-treated pallets
                </Link>{' '}
                and{' '}
                <Link href="/pallet-pricing-sri-lanka" className="text-accent hover:text-accent-hover underline underline-offset-2 transition-colors">
                  what drives pallet pricing in Sri Lanka
                </Link>.
              </p>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FaqSection faqs={faqs} className="section-padding cream-texture" />

      {/* CTA */}
      <section className="bg-accent py-16">
        <div className="container-content flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="font-display text-2xl text-white">Need certified wooden pallets?</h2>
            <p className="font-body text-sm text-white/80 mt-1">
              ISPM 15 heat-treated, IPPC-stamped, delivered island-wide across Sri Lanka.
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
