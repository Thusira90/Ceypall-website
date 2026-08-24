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
  title: 'Wooden Pallets Kandy | ISPM 15 Export Pallets — CeyPall',
  description:
    'ISPM 15 heat-treated wooden pallets delivered to Kandy, Matale, Peradeniya and the Central Province tea and spice export belt. IPPC-stamped, certificate included.',
  alternates: { canonical: 'https://www.ceypall.com/wooden-pallets-kandy' },
  openGraph: {
    title: 'Wooden Pallets — Kandy | CeyPall',
    description: 'ISPM 15 heat-treated pallets for tea exporters, spice factories and manufacturers in Kandy, Matale and Peradeniya.',
    url: 'https://www.ceypall.com/wooden-pallets-kandy',
    images: [{ url: '/OPENGIMAGE.jpg', width: 1200, height: 630, alt: 'CeyPall pallets for Kandy tea and spice exporters' }],
  },
  twitter: { description: 'ISPM 15 pallets for Kandy — heat-treated, IPPC-stamped, delivered to Central Province tea and spice exporters.', images: ['/OPENGIMAGE.jpg'] },
}

const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://www.ceypall.com/#business',
  name: 'CeyPall (Pvt) Ltd',
  description: 'ISPM 15 wooden pallet manufacturer supplying tea exporters, spice factories and manufacturers in Kandy, Matale and Peradeniya.',
  url: 'https://www.ceypall.com/wooden-pallets-kandy',
  telephone: ['+94714711417', '+94769494944', '+94312277752'],
  email: 'office@ceypall.com',
  address: { '@type': 'PostalAddress', streetAddress: '1088, Colombo Road, Daluwakotuwa', addressLocality: 'Kochchikade', postalCode: '11540', addressCountry: 'LK' },
  areaServed: [
    { '@type': 'City', name: 'Kandy' },
    { '@type': 'City', name: 'Matale' },
    { '@type': 'City', name: 'Peradeniya' },
    { '@type': 'City', name: 'Katugastota' },
  ],
}

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.ceypall.com/' },
    { '@type': 'ListItem', position: 2, name: 'Wooden Pallets Kandy', item: 'https://www.ceypall.com/wooden-pallets-kandy' },
  ],
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Do you deliver pallets to Kandy?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. CeyPall delivers ISPM 15 heat-treated pallets to Kandy, Matale, Peradeniya and the Central Province. Our Kochchikade facility is roughly 130 km away — deliveries are dispatched on a scheduled route, typically the next working day after order confirmation.' } },
    { '@type': 'Question', name: 'How far is Kandy from CeyPall?', acceptedAnswer: { '@type': 'Answer', text: 'Kandy is approximately 130 km east of our Kochchikade facility, via the Colombo–Kandy Road (A1) or the Central Expressway (E04). Full-truck deliveries are the most cost-efficient for this distance — a distance premium applies to smaller upcountry orders.' } },
    { '@type': 'Question', name: 'Which industries in Kandy use CeyPall pallets?', acceptedAnswer: { '@type': 'Answer', text: 'Tea factories and exporters (up-country and mid-grown Ceylon tea), spice producers (cinnamon, pepper, cloves, cardamom), food manufacturers, and industrial goods manufacturers across Kandy, Matale and the Central Province.' } },
    { '@type': 'Question', name: 'Are your pallets suitable for tea and spice export?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. All CeyPall pallets are kiln-dried below 15% moisture content and heat-treated to ISPM 15 — critical for tea and spice cargo, which is hygroscopic and easily damaged by high pallet moisture. Every batch ships with an IPPC stamp and a signed treatment certificate.' } },
  ],
}

const industries = ['Tea factories & exporters', 'Spice producers', 'Food manufacturers', 'Industrial goods', 'Freight consolidators', 'Warehousing']

const faqs = [
  { q: 'Do you deliver pallets to Kandy?', a: 'Yes. CeyPall delivers ISPM 15 heat-treated pallets to Kandy, Matale, Peradeniya and the Central Province. Our Kochchikade facility is roughly 130 km away — deliveries are dispatched on a scheduled route, typically the next working day after order confirmation.' },
  { q: 'How far is Kandy from CeyPall?', a: 'Kandy is approximately 130 km east of our Kochchikade facility, via the Colombo–Kandy Road (A1) or the Central Expressway (E04). Full-truck deliveries are the most cost-efficient for this distance — a distance premium applies to smaller upcountry orders.' },
  { q: 'Which industries in Kandy use CeyPall pallets?', a: 'Tea factories and exporters (up-country and mid-grown Ceylon tea), spice producers (cinnamon, pepper, cloves, cardamom), food manufacturers, and industrial goods manufacturers across Kandy, Matale and the Central Province.' },
  { q: 'Are your pallets suitable for tea and spice export?', a: 'Yes. All CeyPall pallets are kiln-dried below 15% moisture content and heat-treated to ISPM 15 — critical for tea and spice cargo, which is hygroscopic and easily damaged by high pallet moisture. Every batch ships with an IPPC stamp and a signed treatment certificate.' },
]

export default function WoodenPalletsKandyPage() {
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
            <li className="text-charcoal/80 font-medium">Wooden Pallets Kandy</li>
          </ol>
        </div>
      </nav>

      <section className="wood-texture section-padding">
        <div className="container-content">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <FadeUp>
              <div>
                <p className="font-body text-xs font-semibold tracking-[0.15em] uppercase text-accent mb-4">Central Province · Tea &amp; Spice</p>
                <h1 className="font-display text-display-lg text-cream">Wooden Pallets for Kandy Tea &amp; Spice Exporters</h1>
                <span className="block w-10 h-0.5 bg-accent mt-4 mb-5" />
                <p className="font-body text-base text-cream/80 leading-relaxed mb-8">
                  <strong className="text-cream">ISPM 15 heat-treated pallets</strong> for tea factories, spice producers and manufacturers in Kandy, Matale and Peradeniya — kiln-dried below 15% MC, IPPC-stamped, delivered on scheduled upcountry runs.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button href="/contact" variant="primary" size="lg">Request a quotation →</Button>
                  <Button href="/pallets-for-tea-export" variant="outline-light" size="lg">Tea export pallets</Button>
                </div>
              </div>
            </FadeUp>
            <FadeUp delay={0.12}>
              <div className="aspect-[4/3] relative overflow-hidden">
                <Image src="/Storage.png" alt="ISPM 15 pallets loaded for Kandy tea and spice exporters" fill className="object-cover" priority />
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      <section className="section-padding cream-texture">
        <div className="container-content">
          <AnswerBlock question="In short: pallet supply to Kandy">
            Kochchikade is about <strong>130 km west of Kandy</strong>, via the A1 or Central Expressway. We deliver <strong>ISPM 15 heat-treated, IPPC-stamped pallets</strong> to Kandy, Matale and Peradeniya on scheduled upcountry routes — each batch shipped with a signed treatment certificate.
          </AnswerBlock>
        </div>
      </section>

      <section className="section-padding bg-warm-gray/40">
        <div className="container-content max-w-3xl">
          <FadeUp><SectionHeader eyebrow="Industries served" title="Who We Supply in Kandy" /></FadeUp>
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
          <FadeUp><SectionHeader eyebrow="Common questions" title="Kandy Pallet Supply FAQs" /></FadeUp>
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
          { href: '/pallets-for-tea-export', title: 'Tea Export Pallets', description: 'ISPM 15 pallets built for Ceylon tea consignments.' },
          { href: '/pallets-for-spice-export', title: 'Spice Export Pallets', description: 'Kiln-dried pallets for cinnamon, pepper and cardamom exports.' },
          { href: '/moisture-content-calculator', title: 'Moisture Content Calculator', description: 'Check pallet MC — critical for hygroscopic tea and spice cargo.' },
          { href: '/ispm-15-certification-sri-lanka', title: 'ISPM 15 Certification', description: 'How CeyPall meets ISPM 15 for export shipments.' },
        ]}
      />

      <section className="bg-accent py-20">
        <div className="container-content">
          <FadeUp>
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="font-display text-display-md text-white">Order Pallets in Kandy</h2>
              <span className="block w-10 h-0.5 bg-white/40 mt-4 mb-5 mx-auto" />
              <p className="font-body text-base text-white/80 leading-relaxed mb-8">ISPM 15 heat-treated pallets — delivered upcountry to Kandy, Matale and Peradeniya on scheduled routes.</p>
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
