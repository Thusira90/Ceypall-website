import type { Metadata } from 'next'
import { FadeUp } from '@/components/ui/FadeUp'
import { Button } from '@/components/ui/Button'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { SchemaScript } from '@/components/ui/SchemaScript'

export const metadata: Metadata = {
  title: 'Wooden Pallet Pricing in Sri Lanka — What Determines the Cost',
  description:
    'The price of wooden pallets in Sri Lanka depends on several factors — wood species, dimensions, treatment type, order volume, and delivery distance. Get a quote from CeyPall for your specific requirements.',
  twitter: {
    description:
      'The price of wooden pallets in Sri Lanka depends on several factors — wood species, dimensions, treatment type, order volume, and delivery distance. Get a quote from CeyPall for your specific requirements.',
  },
  openGraph: {
    title: 'Wooden Pallet Pricing in Sri Lanka — What Determines the Cost | CeyPall (Pvt) Ltd',
    description:
      'The price of wooden pallets in Sri Lanka depends on several factors — wood species, dimensions, treatment type, order volume, and delivery distance. Get a quote from CeyPall for your specific requirements.',
    url: 'https://www.ceypall.com/pallet-pricing-sri-lanka',
  },
  alternates: {
    canonical: 'https://www.ceypall.com/pallet-pricing-sri-lanka',
  },
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much do wooden pallets cost in Sri Lanka?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Wooden pallet prices in Sri Lanka vary based on dimensions, timber species, treatment type, order volume, and delivery location. There is no fixed list price — each order is quoted individually. Contact CeyPall at +94 714 711 417 or through the contact form for a quotation specific to your requirements.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are heat treated pallets more expensive than untreated pallets?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Heat treated pallets carry a cost premium over untreated pallets because of the kiln treatment process, temperature monitoring, and IPPC certification documentation required. However, for any export shipment, ISPM 15 heat treated pallets are not optional — non-compliant pallets will be rejected at the destination port, making the treatment cost insignificant compared to the cost of a rejected shipment.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do larger pallet orders get a better price?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Larger volume orders and recurring supply contracts attract better per-unit pricing because fixed production costs are spread across more units. If you have an ongoing pallet requirement, contact CeyPall to discuss a supply contract and scheduled delivery arrangement.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the minimum order quantity at CeyPall?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Contact CeyPall directly at +94 714 711 417 to discuss minimum order quantities for your specific pallet size and treatment type. We supply both one-off orders and ongoing contracts.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is VPI treatment more expensive than heat treatment?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'VPI (vacuum pressure impregnation) treatment generally carries a higher unit cost than heat treatment due to the chemical impregnation process and longer treatment cycle. However, VPI pallets carry a pest warranty of up to 6 years, making them more cost-efficient for long-term warehousing and racking applications where heat treated pallets would need to be replaced more frequently.',
      },
    },
  ],
}

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.ceypall.com/' },
    { '@type': 'ListItem', position: 2, name: 'Pallet Pricing Sri Lanka', item: 'https://www.ceypall.com/pallet-pricing-sri-lanka' },
  ],
}

const factors = [
  {
    number: '01',
    title: 'Pallet Dimensions & Load Specification',
    body: 'The size of the pallet — length, width, and board thickness — directly affects the volume of timber used and therefore the base material cost. Standard international sizes (1200×1000mm, 1200×800mm, 1100×1100mm) are the most cost-efficient to produce. Custom dimensions require additional cutting and assembly time.',
    impact: 'Larger pallets and non-standard dimensions cost more than standard sizes.',
  },
  {
    number: '02',
    title: 'Timber Species',
    body: 'CeyPall primarily uses rubber wood (Hevea brasiliensis), which is locally available in Sri Lanka and well-suited to ISPM 15 heat treatment. Other timber species such as Lunumidella are available for specific load or durability requirements. Timber species affects both material cost and treatment efficiency.',
    impact: 'Rubber wood is the most cost-efficient species. Alternative species may carry a premium depending on availability.',
  },
  {
    number: '03',
    title: 'Treatment Type — Heat Treatment vs VPI',
    body: 'Heat treated (HT) pallets are required for international export and carry the IPPC stamp. Vacuum pressure impregnated (VPI) pallets are used for long-term warehousing and racking and carry a pest warranty of up to 6 years. The two treatment processes have different cost structures.',
    impact: 'VPI treatment generally carries a higher unit cost than heat treatment due to the chemical impregnation process and longer treatment cycle.',
  },
  {
    number: '04',
    title: 'Order Volume',
    body: 'Wooden pallet manufacturing involves fixed setup costs per production run. Larger orders spread these costs across more units, reducing the per-unit price. Small one-off orders have a higher per-unit cost than recurring high-volume contracts.',
    impact: 'Higher volume orders attract better per-unit pricing. Recurring supply contracts offer the most cost-efficient pricing structure.',
  },
  {
    number: '05',
    title: 'Delivery Location',
    body: 'CeyPall delivers island-wide from our Kochchikade facility. Delivery cost is affected by distance, road access, and whether the delivery is to a single drop point or multiple locations. Western Province deliveries are the most cost-efficient. Deliveries to the Southern, Central, or Northern provinces carry additional transport costs.',
    impact: 'Colombo and Western Province deliveries are lowest cost. Upcountry and southern deliveries carry a distance premium.',
  },
  {
    number: '06',
    title: 'Lead Time & Scheduling',
    body: 'Standard orders are fulfilled within 3–5 working days for common sizes. Urgent or same-day orders may carry a premium. Recurring scheduled deliveries aligned to your production cycle are the most efficient and cost-effective arrangement.',
    impact: 'Planned recurring orders are most cost-efficient. Urgent or short-notice orders may carry a premium.',
  },
]

const faqs = [
  {
    question: 'How much do wooden pallets cost in Sri Lanka?',
    answer:
      'Wooden pallet prices in Sri Lanka vary based on dimensions, timber species, treatment type, order volume, and delivery location. There is no fixed list price — each order is quoted individually. Contact CeyPall at +94 714 711 417 or through the contact form for a quotation specific to your requirements.',
  },
  {
    question: 'Are heat treated pallets more expensive than untreated pallets?',
    answer:
      'Heat treated pallets carry a cost premium over untreated pallets because of the kiln treatment process, temperature monitoring, and IPPC certification documentation required. However, for any export shipment, ISPM 15 heat treated pallets are not optional — non-compliant pallets will be rejected at the destination port, making the treatment cost insignificant compared to the cost of a rejected shipment.',
  },
  {
    question: 'Do larger pallet orders get a better price?',
    answer:
      'Yes. Larger volume orders and recurring supply contracts attract better per-unit pricing because fixed production costs are spread across more units. If you have an ongoing pallet requirement, contact CeyPall to discuss a supply contract and scheduled delivery arrangement.',
  },
  {
    question: 'What is the minimum order quantity at CeyPall?',
    answer:
      'Contact CeyPall directly at +94 714 711 417 to discuss minimum order quantities for your specific pallet size and treatment type. We supply both one-off orders and ongoing contracts.',
  },
  {
    question: 'Is VPI treatment more expensive than heat treatment?',
    answer:
      'VPI (vacuum pressure impregnation) treatment generally carries a higher unit cost than heat treatment due to the chemical impregnation process and longer treatment cycle. However, VPI pallets carry a pest warranty of up to 6 years, making them more cost-efficient for long-term warehousing and racking applications where heat treated pallets would need to be replaced more frequently.',
  },
]

export default function PalletPricingSriLankaPage() {
  return (
    <>
      <SchemaScript schema={faqJsonLd} />
      <SchemaScript schema={breadcrumbJsonLd} />

      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section className="wood-texture section-padding">
        <div className="container-content">
          <FadeUp>
            <div className="max-w-2xl">
              <p className="font-body text-xs font-semibold tracking-[0.15em] uppercase text-accent mb-4">
                Pricing Guide · Sri Lanka
              </p>
              <h1 className="font-display text-display-lg text-cream">
                What Determines the Price of Wooden Pallets in Sri Lanka?
              </h1>
              <span className="block w-10 h-0.5 bg-accent mt-4 mb-5" />
              <p className="font-body text-base text-cream/80 leading-relaxed mb-8">
                Wooden pallet pricing in Sri Lanka is not one-size-fits-all. Every order is priced
                based on your specific requirements — dimensions, treatment type, timber species,
                volume, and delivery location. Here is what goes into the cost of a pallet order.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button href="/contact" variant="primary" size="lg">
                  Request a quote →
                </Button>
                <Button href="/products" variant="outline-light" size="lg">
                  View products
                </Button>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── AEO direct answer ─────────────────────────────────────────── */}
      <section className="section-padding cream-texture">
        <div className="container-content">
          <FadeUp>
            <div className="max-w-3xl bg-primary p-8">
              <p className="font-body text-xs font-semibold tracking-[0.15em] uppercase text-accent mb-4">
                Direct answer
              </p>
              <p className="font-body text-base text-cream/90 leading-relaxed">
                The price of wooden pallets in Sri Lanka depends on five main factors: the pallet
                dimensions and load specification, the timber species used, the treatment type
                required (heat treatment or vacuum pressure impregnation), the order volume, and
                the delivery location. There is no standard list price — each order is quoted
                individually based on your specific requirements. Contact CeyPall at{' '}
                <a
                  href="tel:+94714711417"
                  className="text-accent underline underline-offset-2 hover:text-accent-hover transition-colors"
                >
                  +94 714 711 417
                </a>{' '}
                for a quotation.
              </p>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── Pricing factors ───────────────────────────────────────────── */}
      <section className="section-padding bg-warm-gray/40">
        <div className="container-content">
          <FadeUp>
            <div className="mb-12">
              <SectionHeader
                eyebrow="Pricing factors"
                title="6 Factors That Determine Wooden Pallet Pricing in Sri Lanka"
              />
            </div>
          </FadeUp>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-warm-gray">
            {factors.map(({ number, title, body, impact }) => (
              <FadeUp key={number}>
                <div className="bg-cream p-8 flex flex-col gap-5 h-full">
                  <span className="font-display text-4xl font-bold text-warm-gray select-none">
                    {number}
                  </span>
                  <div className="flex flex-col gap-3 flex-1">
                    <h3 className="font-display text-lg font-semibold text-primary">
                      {title}
                    </h3>
                    <p className="font-body text-sm text-charcoal/65 leading-relaxed">{body}</p>
                    <div className="mt-auto pt-4 border-t border-warm-gray">
                      <p className="font-body text-xs font-semibold tracking-[0.08em] uppercase text-accent mb-1">
                        Price impact
                      </p>
                      <p className="font-body text-sm text-charcoal/70 leading-relaxed">{impact}</p>
                    </div>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────────────── */}
      <section className="section-padding cream-texture">
        <div className="container-content">
          <div className="max-w-3xl">
            <FadeUp>
              <SectionHeader
                eyebrow="Get a quote"
                title="Get a Quote for Your Pallet Requirements"
              />
              <p className="font-body text-sm text-charcoal/70 leading-relaxed mt-6 mb-6">
                Every pallet order at CeyPall is quoted based on your specific requirements. To get
                an accurate price, contact us with: the pallet size and quantity you need, whether
                you require heat treatment (ISPM 15) or VPI treatment, your delivery location and
                required lead time, and whether this is a one-off order or a recurring requirement.
              </p>
              <Button href="/contact" variant="primary" size="lg">
                Request a Quote →
              </Button>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── FAQ ─────────────────────────────────────────────────────── */}
      <section className="section-padding bg-warm-gray/40">
        <div className="container-content">
          <FadeUp>
            <div className="mb-12">
              <SectionHeader
                eyebrow="Common questions"
                title="Frequently asked questions."
              />
            </div>
          </FadeUp>

          <div className="max-w-3xl space-y-0 divide-y divide-warm-gray border-t border-b border-warm-gray">
            {faqs.map(({ question, answer }, i) => (
              <FadeUp key={i} delay={i * 0.05}>
                <div className="py-7">
                  <h3 className="font-display text-lg font-semibold text-primary mb-3">
                    {question}
                  </h3>
                  <p className="font-body text-sm text-charcoal/70 leading-relaxed">{answer}</p>
                </div>
              </FadeUp>
            ))}
          </div>

          <FadeUp delay={0.1}>
            <p className="mt-8 font-body text-sm text-charcoal/60">
              More questions?{' '}
              <a
                href="/contact"
                className="text-accent underline underline-offset-2 hover:text-accent-hover transition-colors"
              >
                Contact us directly
              </a>{' '}
              or call{' '}
              <a
                href="tel:+94714711417"
                className="text-accent underline underline-offset-2 hover:text-accent-hover transition-colors"
              >
                +94 714 711 417
              </a>
              .
            </p>
          </FadeUp>
        </div>
      </section>

      {/* ── Bottom CTA banner ────────────────────────────────────────── */}
      <section className="bg-accent py-16">
        <div className="container-content flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="font-display text-2xl text-white">
              Ready to get a pallet price for your requirements?
            </h2>
            <p className="font-body text-sm text-white/80 mt-1">
              Send us your size, quantity, treatment type, and delivery location — we&apos;ll quote quickly.
            </p>
          </div>
          <Button href="/contact" variant="outline-light" size="lg">
            Request a Quote →
          </Button>
        </div>
      </section>
    </>
  )
}
