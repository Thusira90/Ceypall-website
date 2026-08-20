import type { Metadata } from 'next'
import { FadeUp } from '@/components/ui/FadeUp'
import { RelatedLinks } from '@/components/ui/RelatedLinks'
import { AnswerBlock } from '@/components/ui/AnswerBlock'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Button } from '@/components/ui/Button'
import { SchemaScript } from '@/components/ui/SchemaScript'

export const metadata: Metadata = {
  title: 'Wholesale Wooden Pallets Sri Lanka | Bulk Supply — CeyPall',
  description:
    'Wholesale ISPM 15 wooden pallets from CeyPall — bulk supply for exporters, freight forwarders, and manufacturers. Recurring delivery schedules, container-load quantities, island-wide.',
  alternates: {
    canonical: 'https://www.ceypall.com/wholesale-pallets-sri-lanka',
  },
  openGraph: {
    title: 'Wholesale Wooden Pallets Sri Lanka | CeyPall (Pvt) Ltd',
    description:
      'Bulk wooden pallet supply for Sri Lankan exporters and freight forwarders. ISPM 15 certified, recurring delivery schedules, container-load quantities.',
    url: 'https://www.ceypall.com/wholesale-pallets-sri-lanka',
    images: [
      {
        url: '/OPENGIMAGE.jpg',
        width: 1200,
        height: 630,
        alt: 'CeyPall — wholesale wooden pallets, Sri Lanka',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Wholesale Pallets Sri Lanka | CeyPall',
    description:
      'Wholesale, bulk ISPM 15 pallet supply for exporters and freight forwarders. Recurring schedules, island-wide delivery.',
    images: ['/OPENGIMAGE.jpg'],
  },
}

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.ceypall.com/' },
    { '@type': 'ListItem', position: 2, name: 'Wholesale Pallets Sri Lanka', item: 'https://www.ceypall.com/wholesale-pallets-sri-lanka' },
  ],
}

const faqs = [
  {
    question: 'What is the minimum order for wholesale wooden pallets from CeyPall?',
    answer:
      'CeyPall supplies orders at every scale — from single-batch trial orders through to full container-load and recurring monthly volumes. There is no fixed minimum: contact us with your target quantity, size, and delivery cadence and we will confirm pricing and lead time.',
  },
  {
    question: 'Do you offer recurring or scheduled delivery for regular exporters?',
    answer:
      'Yes. For exporters, freight forwarders, and manufacturers with predictable pallet usage, CeyPall arranges recurring delivery schedules — weekly, fortnightly, or monthly — timed to your container stuffing dates and vessel departures. Recurring schedules improve pricing certainty and eliminate last-minute sourcing.',
  },
  {
    question: 'Can you supply container-load quantities of pallets?',
    answer:
      'Yes. Our Kochchikade facility is set up for container-load supply, with in-house heat treatment chambers and dedicated stamping and QC. For larger orders we can also coordinate direct delivery to your container stuffing location — Colombo Port, Katunayake, Hambantota, or any BOI Export Processing Zone.',
  },
  {
    question: 'What is the wholesale lead time?',
    answer:
      'Standard lead time is 3–5 working days for orders within the Western Province. For bulk and container-load orders, lead time depends on quantity and specification — typically 5–10 working days. Recurring-schedule customers have their production slots reserved in advance, so lead time is effectively zero.',
  },
  {
    question: 'Do you supply pallets to other pallet resellers and distributors?',
    answer:
      'Yes. We supply pallets on a wholesale basis to freight forwarders, packaging distributors, and pallet resellers who serve exporters we do not reach directly. All pallets carry CeyPall\'s NPQS IPPC stamp (LK-0175) and full treatment documentation.',
  },
]

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: { '@type': 'Answer', text: faq.answer },
  })),
}

const advantages = [
  {
    number: '01',
    title: 'Container-Load Capacity',
    body: 'Our Kochchikade facility is dimensioned for container-load supply — in-house heat treatment chambers, dedicated QC, and direct A3 highway access for outbound logistics.',
  },
  {
    number: '02',
    title: 'Recurring Delivery Schedules',
    body: 'Weekly, fortnightly, or monthly deliveries timed to your stuffing dates. Production slots are reserved in advance so your pallets are ready when your containers are.',
  },
  {
    number: '03',
    title: 'Every Pallet Documented',
    body: 'Bulk does not mean generic. Every pallet in every delivery is IPPC-stamped with our NPQS provider code LK-0175 and comes with a signed heat treatment certificate.',
  },
  {
    number: '04',
    title: 'Locally Sourced Timber',
    body: 'Rubber wood and Lunumidella from Sri Lankan plantations. Local sourcing insulates our pricing from FX volatility and shipping delays that hit imported-timber suppliers.',
  },
]

const buyerTypes = [
  { buyer: 'Direct exporters', use: 'Tea, apparel, coconut, rubber, spices — one specification, high volume, predictable cadence' },
  { buyer: 'Freight forwarders', use: 'Multi-client pallet supply, stuffing at Colombo Port and Katunayake' },
  { buyer: 'Manufacturers (BOI EPZ)', use: 'Continuous production lines requiring same-week resupply' },
  { buyer: 'Packaging distributors', use: 'Wholesale onward supply to smaller exporters' },
  { buyer: 'Contract packers / 3PLs', use: 'Bulk pallet inventory for varied client shipments' },
]

export default function WholesalePalletsPage() {
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
                Wholesale &amp; bulk supply
              </p>
              <h1 className="font-display text-display-lg text-cream">
                Wholesale Wooden Pallets — Bulk Supply for Sri Lankan Exporters.
              </h1>
              <span className="block w-10 h-0.5 bg-accent mt-4 mb-5" />
              <p className="font-body text-base text-cream/80 leading-relaxed mb-8">
                Container-load wooden pallet supply for exporters, freight forwarders, and
                manufacturers. ISPM 15 certified, IPPC-stamped, delivered on recurring schedules
                timed to your container stuffing dates.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button href="/contact" variant="primary" size="lg">
                  Discuss a bulk order →
                </Button>
                <Button href="/products" variant="outline-light" size="lg">
                  View products
                </Button>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Answer block */}
      <section className="section-padding cream-texture">
        <div className="container-content">
          <AnswerBlock question="In short: does CeyPall supply wholesale wooden pallets in Sri Lanka?">
            Yes. CeyPall supplies <strong>wholesale, bulk, and container-load</strong> quantities of ISPM 15 certified wooden pallets to exporters, freight forwarders, and manufacturers across Sri Lanka. <strong>Recurring delivery schedules</strong> — weekly, fortnightly, or monthly — are arranged for regular buyers. Every pallet is IPPC-stamped and shipped with a treatment certificate.
          </AnswerBlock>

          <FadeUp>
            <div className="mb-12">
              <SectionHeader
                eyebrow="Why buy in bulk from CeyPall"
                title="Built for volume, without cutting corners."
              />
            </div>
          </FadeUp>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-warm-gray">
            {advantages.map(({ number, title, body }) => (
              <FadeUp key={number}>
                <div className="bg-cream p-8 flex flex-col gap-5 h-full">
                  <span className="font-display text-4xl font-bold text-warm-gray select-none">
                    {number}
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-primary mb-3">{title}</h3>
                    <p className="font-body text-sm text-charcoal/65 leading-relaxed">{body}</p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Who buys bulk */}
      <section className="section-padding bg-warm-gray/40">
        <div className="container-content">
          <FadeUp>
            <SectionHeader
              eyebrow="Who buys wholesale"
              title="Who CeyPall supplies at wholesale scale."
            />
          </FadeUp>

          <FadeUp delay={0.1}>
            <div className="mt-10 overflow-x-auto">
              <table className="w-full font-body text-sm">
                <thead>
                  <tr className="border-b-2 border-primary/20">
                    <th className="text-left py-3 pr-6 font-semibold text-primary w-1/3">Buyer type</th>
                    <th className="text-left py-3 font-semibold text-primary">Typical usage pattern</th>
                  </tr>
                </thead>
                <tbody>
                  {buyerTypes.map(({ buyer, use }) => (
                    <tr key={buyer} className="border-b border-warm-gray">
                      <td className="py-3 pr-6 font-medium text-charcoal">{buyer}</td>
                      <td className="py-3 text-charcoal/70">{use}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* How wholesale works */}
      <section className="section-padding cream-texture">
        <div className="container-content">
          <FadeUp>
            <div className="max-w-2xl">
              <h2 className="font-display text-2xl font-semibold text-primary mb-6">
                How a wholesale relationship with CeyPall works
              </h2>
              <p className="font-body text-sm text-charcoal/70 leading-relaxed mb-5">
                For one-off bulk orders, the process is the same as any other quote — send us your
                specification, quantity, and required delivery date, and we confirm pricing and lead
                time.
              </p>
              <p className="font-body text-sm text-charcoal/70 leading-relaxed mb-5">
                For ongoing supply, we set up a <strong>recurring delivery schedule</strong>: your
                monthly (or weekly) requirement is locked into our production calendar so pallets are
                ready to dispatch on your stuffing dates without a fresh quote each time. This is how
                most of our larger exporter clients work with us.
              </p>
              <p className="font-body text-sm text-charcoal/70 leading-relaxed">
                Wholesale pricing depends on volume, specification, and cadence. To open a
                conversation, send us your annual pallet requirement and we will build a proposal
                specific to your operation.
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
              title="Wholesale pallet FAQ."
            />
          </FadeUp>

          <FadeUp delay={0.1}>
            <div className="mt-10 max-w-2xl space-y-8">
              {faqs.map((faq) => (
                <div key={faq.question} className="border-b border-warm-gray pb-6">
                  <h3 className="font-display text-base font-semibold text-primary mb-3">
                    {faq.question}
                  </h3>
                  <p className="font-body text-sm text-charcoal/70 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Related */}
      <RelatedLinks
        links={[
          { href: '/export-pallet-manufacturer-sri-lanka', title: 'Export Pallet Manufacturer', description: 'ISPM 15 certified pallets for every Sri Lankan export destination.' },
          { href: '/wooden-pallets-sri-lanka', title: 'Island-Wide Delivery', description: 'Supply to every BOI EPZ, industrial estate, and port hub.' },
          { href: '/industrial-pallets-sri-lanka', title: 'Industrial Pallets', description: 'Heavy-duty pallets rated for 1,000–2,000 kg and above.' },
          { href: '/custom-wooden-pallets-sri-lanka', title: 'Custom Pallets', description: 'Bespoke sizes for exporters with non-standard cargo footprints.' },
        ]}
      />

      {/* CTA */}
      <section className="bg-accent py-16">
        <div className="container-content flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-display text-2xl text-white">Planning a bulk pallet order?</h3>
            <p className="font-body text-sm text-white/80 mt-1">
              Send us your annual requirement — we&rsquo;ll build a proposal for your operation.
            </p>
          </div>
          <Button href="/contact" variant="outline-light" size="lg">
            Discuss a bulk order →
          </Button>
        </div>
      </section>
    </>
  )
}
