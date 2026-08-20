import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { FadeUp } from '@/components/ui/FadeUp'
import { RelatedLinks } from '@/components/ui/RelatedLinks'
import { AnswerBlock } from '@/components/ui/AnswerBlock'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Button } from '@/components/ui/Button'
import { SchemaScript } from '@/components/ui/SchemaScript'

export const metadata: Metadata = {
  title: 'Wooden Pallets Peliyagoda | ISPM 15 Pallets for Colombo Port',
  description:
    'ISPM 15 heat-treated wooden pallets delivered to Peliyagoda distribution centres and freight consolidators serving Colombo Port. IPPC-stamped, certificate included.',
  alternates: { canonical: 'https://www.ceypall.com/wooden-pallets-peliyagoda' },
  openGraph: {
    title: 'Wooden Pallets — Peliyagoda | CeyPall',
    description: 'ISPM 15 pallets for Peliyagoda distribution, warehousing and freight consolidation serving Colombo Port.',
    url: 'https://www.ceypall.com/wooden-pallets-peliyagoda',
    images: [{ url: '/OPENGIMAGE.jpg', width: 1200, height: 630, alt: 'CeyPall pallets for Peliyagoda logistics' }],
  },
  twitter: { description: 'ISPM 15 pallets for Peliyagoda distribution and Colombo Port freight consolidators.', images: ['/OPENGIMAGE.jpg'] },
}

const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://www.ceypall.com/#business',
  name: 'CeyPall (Pvt) Ltd',
  description: 'ISPM 15 wooden pallet manufacturer serving Peliyagoda distribution, warehousing and freight consolidators feeding Colombo Port.',
  url: 'https://www.ceypall.com/wooden-pallets-peliyagoda',
  telephone: ['+94714711417', '+94769494944', '+94312277752'],
  email: 'office@ceypall.com',
  address: { '@type': 'PostalAddress', streetAddress: '1088, Colombo Road, Daluwakotuwa', addressLocality: 'Kochchikade', postalCode: '11540', addressCountry: 'LK' },
  areaServed: [
    { '@type': 'City', name: 'Peliyagoda' },
    { '@type': 'City', name: 'Kelaniya' },
    { '@type': 'City', name: 'Wattala' },
    { '@type': 'Place', name: 'Colombo Port' },
  ],
}

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.ceypall.com/' },
    { '@type': 'ListItem', position: 2, name: 'Wooden Pallets Peliyagoda', item: 'https://www.ceypall.com/wooden-pallets-peliyagoda' },
  ],
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Do you deliver pallets to Peliyagoda?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. CeyPall delivers ISPM 15 heat-treated pallets to Peliyagoda warehouses, distribution centres and freight consolidators feeding Colombo Port. Our Kochchikade facility is about 30 km away, so scheduled orders are typically same-day.' } },
    { '@type': 'Question', name: 'How does CeyPall serve Colombo Port shipments?', acceptedAnswer: { '@type': 'Answer', text: 'Peliyagoda is the primary consolidation belt for Colombo Port shipments. We deliver ISPM 15 pallets on your loading schedule, IPPC-stamped with a signed treatment certificate accepted at destination customs.' } },
    { '@type': 'Question', name: 'Can CeyPall handle recurring supply for Peliyagoda 3PLs?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Many Peliyagoda 3PLs and consolidators run weekly or shipment-linked supply agreements with CeyPall. Recurring supply lets us hold buffer stock to standard specifications and dispatch against your vessel departures.' } },
    { '@type': 'Question', name: 'What pallet sizes are best for Colombo Port container loading?', acceptedAnswer: { '@type': 'Answer', text: 'Container utilisation is highest with 1200 × 1000 mm (21 pallets per 20ft; 42 per 40ft) or 1200 × 800 Euro pallets (25 per 20ft; 50 per 40ft). We build both, and can custom-size to your carton footprint if the standard sizes waste cube.' } },
  ],
}

const industries = ['3PL warehouses', 'Freight consolidators', 'Distribution centres', 'Colombo Port exporters', 'FMCG distributors', 'Cold-chain logistics']

const faqs = [
  { q: 'Do you deliver pallets to Peliyagoda?', a: 'Yes. CeyPall delivers ISPM 15 heat-treated pallets to Peliyagoda warehouses, distribution centres and freight consolidators feeding Colombo Port. Our Kochchikade facility is about 30 km away, so scheduled orders are typically same-day.' },
  { q: 'How does CeyPall serve Colombo Port shipments?', a: 'Peliyagoda is the primary consolidation belt for Colombo Port shipments. We deliver ISPM 15 pallets on your loading schedule, IPPC-stamped with a signed treatment certificate accepted at destination customs.' },
  { q: 'Can CeyPall handle recurring supply for Peliyagoda 3PLs?', a: 'Yes. Many Peliyagoda 3PLs and consolidators run weekly or shipment-linked supply agreements with CeyPall. Recurring supply lets us hold buffer stock to standard specifications and dispatch against your vessel departures.' },
  { q: 'What pallet sizes are best for Colombo Port container loading?', a: 'Container utilisation is highest with 1200 × 1000 mm (21 pallets per 20ft; 42 per 40ft) or 1200 × 800 Euro pallets (25 per 20ft; 50 per 40ft). We build both, and can custom-size to your carton footprint if the standard sizes waste cube.' },
]

export default function WoodenPalletsPeliyagodaPage() {
  return (
    <>
      <SchemaScript schema={localBusinessJsonLd} />
      <SchemaScript schema={breadcrumbJsonLd} />
      <SchemaScript schema={faqJsonLd} />

      <nav aria-label="Breadcrumb" className="bg-cream border-b border-warm-gray">
        <div className="container-content py-3">
          <ol className="flex items-center gap-2 font-body text-xs text-charcoal/50">
            <li><Link href="/" className="hover:text-accent transition-colors duration-150">Home</Link></li>
            <li aria-hidden="true" className="select-none">›</li>
            <li className="text-charcoal/80 font-medium">Wooden Pallets Peliyagoda</li>
          </ol>
        </div>
      </nav>

      <section className="wood-texture section-padding">
        <div className="container-content">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <FadeUp>
              <div>
                <p className="font-body text-xs font-semibold tracking-[0.15em] uppercase text-accent mb-4">Colombo Port Consolidation Belt</p>
                <h1 className="font-display text-display-lg text-cream">Wooden Pallets for Peliyagoda Logistics</h1>
                <span className="block w-10 h-0.5 bg-accent mt-4 mb-5" />
                <p className="font-body text-base text-cream/80 leading-relaxed mb-8">
                  <strong className="text-cream">ISPM 15 heat-treated pallets</strong> for Peliyagoda 3PLs, distribution centres and freight consolidators serving <Link href="/wooden-pallets-colombo" className="text-accent/90 hover:text-accent underline underline-offset-2">Colombo Port</Link> — dispatched to your vessel departure schedule.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button href="/contact" variant="primary" size="lg">Request a quotation →</Button>
                  <Button href="/container-pallet-calculator" variant="outline-light" size="lg">Container calculator</Button>
                </div>
              </div>
            </FadeUp>
            <FadeUp delay={0.12}>
              <div className="aspect-[4/3] relative overflow-hidden">
                <Image src="/Storage.png" alt="ISPM 15 pallets stacked at Peliyagoda distribution centre" fill className="object-cover" priority />
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      <section className="section-padding cream-texture">
        <div className="container-content">
          <AnswerBlock question="In short: pallet supply to Peliyagoda">
            Peliyagoda is the <strong>primary consolidation belt for Colombo Port</strong>. Our Kochchikade facility is about 30 km away — usually same-day for scheduled orders. Every pallet ships <strong>ISPM 15 heat-treated, IPPC-stamped</strong>, with a signed treatment certificate accepted at destination customs.
          </AnswerBlock>
        </div>
      </section>

      <section className="section-padding bg-warm-gray/40">
        <div className="container-content max-w-3xl">
          <FadeUp><SectionHeader eyebrow="Industries served" title="Who We Supply in Peliyagoda" /></FadeUp>
          <FadeUp delay={0.1}>
            <div className="mt-8 flex flex-wrap gap-3">
              {industries.map((i) => (
                <span key={i} className="inline-flex items-center px-4 py-2 bg-white border border-warm-gray font-body text-sm text-charcoal/80">{i}</span>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      <section className="section-padding cream-texture">
        <div className="container-content">
          <FadeUp><SectionHeader eyebrow="Common questions" title="Peliyagoda Pallet Supply FAQs" /></FadeUp>
          <FadeUp delay={0.08}>
            <div className="mt-10 max-w-3xl divide-y divide-warm-gray border-t border-b border-warm-gray">
              {faqs.map(({ q, a }) => (
                <details key={q} className="group py-1">
                  <summary className="flex items-center justify-between gap-4 cursor-pointer list-none py-6 [&::-webkit-details-marker]:hidden">
                    <h3 className="font-display text-base font-semibold text-primary">{q}</h3>
                    <span className="flex-shrink-0 w-6 h-6 rounded-full border border-warm-gray flex items-center justify-center transition-transform duration-200 group-open:rotate-45">
                      <svg className="w-3 h-3 text-charcoal/60" viewBox="0 0 12 12" fill="none"><path d="M6 2v8M2 6h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg>
                    </span>
                  </summary>
                  <p className="pb-6 font-body text-sm text-charcoal/70 leading-relaxed faq-answer">{a}</p>
                </details>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      <RelatedLinks
        links={[
          { href: '/wooden-pallets-colombo', title: 'Colombo & Port', description: 'ISPM 15 pallets for Colombo exporters and Port operators.' },
          { href: '/wooden-pallets-wattala', title: 'Wattala', description: 'Wooden pallets for the Wattala–Peliyagoda corridor.' },
          { href: '/container-pallet-calculator', title: 'Container Calculator', description: 'How many pallets fit in a 20ft or 40ft container.' },
          { href: '/pallet-supplier-sri-lanka', title: 'Pallet Supplier', description: 'Recurring supply agreements for 3PLs and consolidators.' },
        ]}
      />

      <section className="bg-accent py-20">
        <div className="container-content">
          <FadeUp>
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="font-display text-display-md text-white">Order Pallets for Peliyagoda</h2>
              <span className="block w-10 h-0.5 bg-white/40 mt-4 mb-5 mx-auto" />
              <p className="font-body text-base text-white/80 leading-relaxed mb-8">ISPM 15 heat-treated pallets — dispatched to your vessel schedule.</p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button href="/contact" variant="outline-light" size="lg">Request a quotation →</Button>
                <a href="tel:+94714711417" className="inline-flex items-center gap-2 font-body font-semibold text-base text-white/90 hover:text-white transition-colors duration-200">
                  <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none"><path d="M3 2h3l1 3-1.5 1.5c.9 1.8 2.2 3.1 4 4L11 9l3 1v3a1 1 0 01-1 1C5.4 14 2 10.6 2 3a1 1 0 011-1z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  071 471 1417
                </a>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>
    </>
  )
}
