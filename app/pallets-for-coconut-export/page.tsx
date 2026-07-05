import type { Metadata } from 'next'
import Link from 'next/link'
import { FadeUp } from '@/components/ui/FadeUp'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Button } from '@/components/ui/Button'
import { SchemaScript } from '@/components/ui/SchemaScript'

export const metadata: Metadata = {
  title: 'Pallets for Coconut Export Sri Lanka | ISPM 15 Certified',
  description:
    'ISPM 15 heat-treated pallets for Sri Lankan coconut exporters. Kiln-dried below 15% MC for desiccated coconut, coconut oil, cream, and coir products. IPPC stamped.',
  alternates: {
    canonical: 'https://www.ceypall.com/pallets-for-coconut-export',
  },
  openGraph: {
    title: 'Pallets for Coconut Export Sri Lanka | CeyPall (Pvt) Ltd',
    description:
      'ISPM 15 certified pallets for coconut product exporters. Kiln-dried, IPPC stamped, island-wide delivery.',
    url: 'https://www.ceypall.com/pallets-for-coconut-export',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pallets for Coconut Export Sri Lanka | CeyPall',
    description:
      'ISPM 15 certified pallets for coconut exporters. Low MC, IPPC stamped, treatment certificates included.',
  },
}

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.ceypall.com/' },
    { '@type': 'ListItem', position: 2, name: 'Pallets for Coconut Export', item: 'https://www.ceypall.com/pallets-for-coconut-export' },
  ],
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What pallets are used for coconut product export from Sri Lanka?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sri Lankan coconut product exporters typically use 1200 x 1000 mm standard export pallets or 1200 x 800 mm Euro pallets depending on the destination market. All pallets must be ISPM 15 certified with a valid IPPC stamp for international shipments. CeyPall manufactures both standard and custom sizes.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why is moisture content critical for coconut product pallets?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Desiccated coconut, coconut milk powder, and coconut cream are highly sensitive to moisture contamination. High moisture in pallet wood can create humidity inside sealed containers during ocean transit, causing product degradation, clumping, or mould. CeyPall kiln-dries all pallets to below 15% MC to protect moisture-sensitive coconut products.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you supply pallets to coconut processing factories in the Coconut Triangle?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. CeyPall delivers to coconut processing facilities across the Coconut Triangle — Kurunegala, Puttalam, and Gampaha districts — as well as to factories in Colombo, Kalutara, and other coconut-producing areas. Our Kochchikade facility is centrally located for efficient delivery to these regions.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can CeyPall handle high-volume orders for large coconut exporters?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. We supply 600+ pallets per month to individual clients and can scale to meet growing demand. We work with coconut exporters shipping 20–60+ containers per month and can set up recurring delivery schedules with 3–5 day lead times.',
      },
    },
  ],
}

const reasons = [
  {
    number: '01',
    title: 'Low Moisture Content',
    body: 'Desiccated coconut and coconut milk powder are extremely moisture-sensitive. All CeyPall pallets are kiln-dried to below 15% MC — preventing humidity build-up inside containers during 14–35 day ocean voyages.',
  },
  {
    number: '02',
    title: 'Food-Safe Standards',
    body: 'Our pallets are manufactured from clean, bark-free rubber wood and Lunumidella. Heat treatment at 56°C eliminates pests without chemical residues — safe for direct contact with food-grade packaging.',
  },
  {
    number: '03',
    title: 'Scalable Supply',
    body: 'We supply 600+ pallets per month to individual clients and can scale as your export volumes grow. Consistent quality from a single supplier — no more juggling multiple vendors with varying standards.',
  },
  {
    number: '04',
    title: 'Coconut Triangle Delivery',
    body: 'We deliver to Kurunegala, Puttalam, Gampaha, and all coconut-producing districts. Scheduled routes with 3–5 day lead times, coordinated with your container stuffing schedule.',
  },
]

const products = [
  { product: 'Desiccated coconut', sensitivity: 'High — absorbs moisture readily', markets: 'EU, US, Middle East, Asia' },
  { product: 'Coconut oil (virgin & refined)', sensitivity: 'Moderate — packaging protects contents', markets: 'EU, US, Australia, Japan' },
  { product: 'Coconut cream & milk', sensitivity: 'High — sealed but temperature-sensitive', markets: 'EU, US, UK, Asia' },
  { product: 'Coconut water', sensitivity: 'Moderate — typically containerised', markets: 'EU, US, Middle East' },
  { product: 'Coir fibre & coir pith', sensitivity: 'Low — naturally moisture-resistant', markets: 'EU, US, China, India' },
  { product: 'Activated carbon (coconut shell)', sensitivity: 'Moderate — moisture affects quality', markets: 'EU, US, Japan, Korea' },
]

export default function PalletsForCoconutExportPage() {
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
                Coconut export pallets
              </p>
              <h1 className="font-display text-display-lg text-cream">
                ISPM 15 Pallets for Sri Lankan Coconut Exporters.
              </h1>
              <span className="block w-10 h-0.5 bg-accent mt-4 mb-5" />
              <p className="font-body text-base text-cream/80 leading-relaxed mb-8">
                Heat-treated, IPPC-stamped wooden pallets for desiccated coconut, coconut oil,
                coconut cream, coir, and activated carbon exporters. Kiln-dried below 15% MC to
                protect moisture-sensitive products during ocean transit.
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
                title="Protecting your coconut products from port to shelf."
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

      {/* Coconut products table */}
      <section className="section-padding bg-warm-gray/40">
        <div className="container-content">
          <FadeUp>
            <SectionHeader
              eyebrow="Products we support"
              title="Pallets for every coconut product category."
            />
          </FadeUp>

          <FadeUp delay={0.1}>
            <div className="mt-10 overflow-x-auto">
              <table className="w-full font-body text-sm">
                <thead>
                  <tr className="border-b-2 border-primary/20">
                    <th className="text-left py-3 pr-6 font-semibold text-primary">Product</th>
                    <th className="text-left py-3 pr-6 font-semibold text-primary">Moisture sensitivity</th>
                    <th className="text-left py-3 font-semibold text-primary">Key markets</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map(({ product, sensitivity, markets }) => (
                    <tr key={product} className="border-b border-warm-gray">
                      <td className="py-3 pr-6 font-medium text-charcoal">{product}</td>
                      <td className="py-3 pr-6 text-charcoal/70">{sensitivity}</td>
                      <td className="py-3 text-charcoal/70">{markets}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
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
                Sri Lanka&apos;s Coconut Export Industry
              </h2>
              <p className="font-body text-sm text-charcoal/70 leading-relaxed mb-5">
                Sri Lanka is one of the world&apos;s top five coconut-producing countries, with the
                industry centred in the &ldquo;Coconut Triangle&rdquo; spanning Kurunegala, Puttalam,
                and Gampaha districts. The country exports a wide range of coconut-derived products
                including desiccated coconut, virgin coconut oil, coconut cream, coir fibre, and
                activated carbon made from coconut shells.
              </p>
              <p className="font-body text-sm text-charcoal/70 leading-relaxed mb-5">
                All of these products require ISPM 15-compliant wooden pallets for international
                shipment. For moisture-sensitive products like desiccated coconut and coconut milk
                powder, pallet moisture content is particularly critical — excess moisture in the
                wood can create humidity inside sealed containers during ocean transit.
              </p>
              <p className="font-body text-sm text-charcoal/70 leading-relaxed">
                Use our{' '}
                <Link href="/container-pallet-calculator" className="text-accent hover:text-accent-hover underline underline-offset-2 transition-colors">
                  Container Pallet Calculator
                </Link>{' '}
                to optimise your loading plan, or check pallet moisture levels with our{' '}
                <Link href="/moisture-content-calculator" className="text-accent hover:text-accent-hover underline underline-offset-2 transition-colors">
                  Moisture Content Calculator
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
              title="Coconut export pallet FAQ."
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
            <h3 className="font-display text-2xl text-white">Need pallets for coconut product export?</h3>
            <p className="font-body text-sm text-white/80 mt-1">
              ISPM 15 certified, kiln-dried below 15% MC, delivered to the Coconut Triangle and beyond.
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
