import type { Metadata } from 'next'
import Link from 'next/link'
import { FadeUp } from '@/components/ui/FadeUp'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Button } from '@/components/ui/Button'
import { SchemaScript } from '@/components/ui/SchemaScript'

export const metadata: Metadata = {
  title: 'Pallets for Rubber Export Sri Lanka | ISPM 15 Certified',
  description:
    'ISPM 15 heat-treated wooden pallets for Sri Lankan rubber exporters. Heavy-duty pallets for crepe rubber, RSS sheets, and latex products. IPPC stamped with island-wide delivery.',
  alternates: {
    canonical: 'https://www.ceypall.com/pallets-for-rubber-export',
  },
  openGraph: {
    title: 'Pallets for Rubber Export Sri Lanka | CeyPall (Pvt) Ltd',
    description:
      'Heavy-duty ISPM 15 certified pallets for rubber exporters. Built to handle heavy bales and sheets. IPPC stamped.',
    url: 'https://www.ceypall.com/pallets-for-rubber-export',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pallets for Rubber Export Sri Lanka | CeyPall',
    description:
      'ISPM 15 certified pallets for rubber exporters. Heavy-duty construction, IPPC stamped, treatment certificates.',
  },
}

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.ceypall.com/' },
    { '@type': 'ListItem', position: 2, name: 'Pallets for Rubber Export', item: 'https://www.ceypall.com/pallets-for-rubber-export' },
  ],
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What type of pallet is best for rubber bale export?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Rubber bales are heavy — typically 33.3 kg or 50 kg per bale, with palletised loads reaching 1,000–1,500 kg. CeyPall manufactures heavy-duty pallets with reinforced deck boards and closer bearer spacing to handle these loads safely. Standard 1200 x 1000 mm pallets are most common for rubber exports.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do rubber exporters need ISPM 15 pallets?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. All wooden packaging used in international trade must comply with ISPM 15, regardless of the commodity being shipped. This applies to pallets used for crepe rubber, RSS (Ribbed Smoked Sheets), centrifuged latex, and all other rubber products exported from Sri Lanka.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you supply pallets to rubber factories in the Wet Zone?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. CeyPall delivers to rubber-producing regions across Sri Lanka including Kalutara, Ratnapura, Kegalle, Galle, and Matara districts. We also supply to rubber processing factories in Colombo, Gampaha, and the Western Province industrial zones.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can pallets be reused for multiple rubber shipments?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'CeyPall pallets are built for durability, but ISPM 15 compliance requires the IPPC stamp to remain legible. If pallets are returned in good condition with a readable stamp, they can be reused for subsequent export shipments. For long-term warehouse storage of rubber stocks, we recommend our VPI (vacuum pressure impregnated) pallets which carry a 6-year protection warranty.',
      },
    },
  ],
}

const reasons = [
  {
    number: '01',
    title: 'Heavy-Duty Construction',
    body: 'Rubber bales and sheets are dense and heavy. CeyPall pallets are built with reinforced deck boards and closer bearer spacing to handle palletised loads of 1,000–1,500 kg — standard for rubber export shipments.',
  },
  {
    number: '02',
    title: 'ISPM 15 Certified',
    body: 'Every pallet is heat treated to 56°C core temperature for a minimum of 30 minutes and carries a valid IPPC stamp registered with the National Plant Quarantine Service of Sri Lanka.',
  },
  {
    number: '03',
    title: 'Wet Zone Delivery',
    body: 'We deliver to rubber-producing districts across Sri Lanka — Kalutara, Ratnapura, Kegalle, Galle, and Matara. Scheduled delivery routes with 3–5 day lead times.',
  },
  {
    number: '04',
    title: 'VPI Pallets for Storage',
    body: 'For rubber stocks held in long-term warehouse storage, we offer vacuum pressure impregnated (VPI) pallets with Boron Borax treatment and a 6-year protection warranty against pest damage and fungal decay.',
  },
]

const rubberProducts = [
  { product: 'Crepe rubber', weight: 'Heavy (bales 33.3–50 kg)', requirement: 'Heavy-duty pallets, ISPM 15' },
  { product: 'RSS (Ribbed Smoked Sheets)', weight: 'Heavy (bales 111.1 kg)', requirement: 'Heavy-duty pallets, ISPM 15' },
  { product: 'Centrifuged latex (drums)', weight: 'Very heavy (drums 200+ kg)', requirement: 'Heavy-duty pallets, ISPM 15' },
  { product: 'Sole crepe', weight: 'Moderate', requirement: 'Standard pallets, ISPM 15' },
  { product: 'Rubber gloves', weight: 'Light (boxes)', requirement: 'Standard pallets, ISPM 15' },
  { product: 'Rubber tyres & products', weight: 'Moderate to heavy', requirement: 'Standard or heavy-duty, ISPM 15' },
]

const destinations = [
  { market: 'China', notes: 'Largest importer of Sri Lankan rubber' },
  { market: 'India', notes: 'Major regional buyer' },
  { market: 'European Union', notes: 'Premium market — tyre and industrial use' },
  { market: 'United States', notes: 'Industrial and automotive rubber' },
  { market: 'Japan', notes: 'High-quality rubber products' },
  { market: 'Pakistan', notes: 'Growing market for Sri Lankan rubber' },
]

export default function PalletsForRubberExportPage() {
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
                Rubber export pallets
              </p>
              <h1 className="font-display text-display-lg text-cream">
                Heavy-Duty ISPM 15 Pallets for Rubber Exporters.
              </h1>
              <span className="block w-10 h-0.5 bg-accent mt-4 mb-5" />
              <p className="font-body text-base text-cream/80 leading-relaxed mb-8">
                Reinforced wooden pallets built for the weight demands of crepe rubber, RSS sheets,
                and latex drums. ISPM 15 certified, IPPC stamped, with delivery to all
                rubber-producing regions across Sri Lanka.
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
                title="Built to carry the weight of rubber exports."
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

      {/* Rubber products table */}
      <section className="section-padding bg-warm-gray/40">
        <div className="container-content">
          <FadeUp>
            <SectionHeader
              eyebrow="Products we support"
              title="Pallets for every rubber product category."
            />
          </FadeUp>

          <FadeUp delay={0.1}>
            <div className="mt-10 overflow-x-auto">
              <table className="w-full font-body text-sm">
                <thead>
                  <tr className="border-b-2 border-primary/20">
                    <th className="text-left py-3 pr-6 font-semibold text-primary">Product</th>
                    <th className="text-left py-3 pr-6 font-semibold text-primary">Load weight</th>
                    <th className="text-left py-3 font-semibold text-primary">Pallet requirement</th>
                  </tr>
                </thead>
                <tbody>
                  {rubberProducts.map(({ product, weight, requirement }) => (
                    <tr key={product} className="border-b border-warm-gray">
                      <td className="py-3 pr-6 font-medium text-charcoal">{product}</td>
                      <td className="py-3 pr-6 text-charcoal/70">{weight}</td>
                      <td className="py-3 text-charcoal/70">{requirement}</td>
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
              title="Accepted in every major rubber-importing country."
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

      {/* Content section */}
      <section className="section-padding cream-texture">
        <div className="container-content">
          <FadeUp>
            <div className="max-w-2xl">
              <h2 className="font-display text-2xl font-semibold text-primary mb-6">
                Sri Lanka&apos;s Rubber Export Industry
              </h2>
              <p className="font-body text-sm text-charcoal/70 leading-relaxed mb-5">
                Sri Lanka is a significant producer of natural rubber, with plantations concentrated
                in the Wet Zone districts of Kalutara, Ratnapura, Kegalle, Galle, and Matara. The
                country exports crepe rubber, ribbed smoked sheets (RSS), centrifuged latex, sole
                crepe, and a growing range of manufactured rubber products.
              </p>
              <p className="font-body text-sm text-charcoal/70 leading-relaxed mb-5">
                Rubber products present unique pallet requirements due to their weight. A standard
                bale of crepe rubber weighs 33.3 kg, and palletised loads routinely reach 1,000–1,500
                kg. Centrifuged latex shipped in drums can be even heavier. Standard lightweight
                pallets are insufficient — rubber exporters need heavy-duty pallets with reinforced
                construction.
              </p>
              <p className="font-body text-sm text-charcoal/70 leading-relaxed">
                Plan your container loading with our{' '}
                <Link href="/container-pallet-calculator" className="text-accent hover:text-accent-hover underline underline-offset-2 transition-colors">
                  Container Pallet Calculator
                </Link>, or learn about pallet compliance in our guide:{' '}
                <Link href="/blog/what-is-ispm-15" className="text-accent hover:text-accent-hover underline underline-offset-2 transition-colors">
                  What is ISPM 15?
                </Link>
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
              title="Rubber export pallet FAQ."
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
            <h3 className="font-display text-2xl text-white">Need heavy-duty pallets for rubber export?</h3>
            <p className="font-body text-sm text-white/80 mt-1">
              ISPM 15 certified, reinforced construction, delivered to rubber-producing regions.
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
