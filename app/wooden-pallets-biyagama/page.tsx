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
  title: 'Wooden Pallets Biyagama | ISPM 15 Export Pallets — CeyPall',
  description:
    'ISPM 15 heat-treated wooden pallets delivered to the Biyagama Export Processing Zone and surrounding Gampaha industrial estates. IPPC-stamped, certificate included.',
  alternates: { canonical: 'https://www.ceypall.com/wooden-pallets-biyagama' },
  openGraph: {
    title: 'Wooden Pallets — Biyagama EPZ | CeyPall',
    description: 'ISPM 15 heat-treated pallets for exporters in the Biyagama Export Processing Zone. IPPC-stamped and delivered on schedule.',
    url: 'https://www.ceypall.com/wooden-pallets-biyagama',
    images: [{ url: '/OPENGIMAGE.jpg', width: 1200, height: 630, alt: 'CeyPall pallets for Biyagama EPZ' }],
  },
  twitter: { description: 'ISPM 15 pallets for the Biyagama EPZ — heat-treated, IPPC-stamped, delivered on your loading date.', images: ['/OPENGIMAGE.jpg'] },
}

const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://www.ceypall.com/#business',
  name: 'CeyPall (Pvt) Ltd',
  description: 'ISPM 15 wooden pallet manufacturer serving the Biyagama Export Processing Zone and Gampaha industrial estates.',
  url: 'https://www.ceypall.com/wooden-pallets-biyagama',
  telephone: ['+94714711417', '+94769494944', '+94312277752'],
  email: 'office@ceypall.com',
  address: { '@type': 'PostalAddress', streetAddress: '1088, Colombo Road, Daluwakotuwa', addressLocality: 'Kochchikade', postalCode: '11540', addressCountry: 'LK' },
  areaServed: [
    { '@type': 'City', name: 'Biyagama' },
    { '@type': 'Place', name: 'Biyagama Export Processing Zone' },
    { '@type': 'City', name: 'Kelaniya' },
    { '@type': 'City', name: 'Kaduwela' },
  ],
}

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.ceypall.com/' },
    { '@type': 'ListItem', position: 2, name: 'Wooden Pallets Biyagama', item: 'https://www.ceypall.com/wooden-pallets-biyagama' },
  ],
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Do you deliver pallets to Biyagama EPZ?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. CeyPall delivers ISPM 15 heat-treated pallets to BOI-registered exporters inside the Biyagama Export Processing Zone and the surrounding Gampaha industrial estates. Delivery is scheduled to your container loading date.' } },
    { '@type': 'Question', name: 'How long does delivery from Kochchikade to Biyagama take?', acceptedAnswer: { '@type': 'Answer', text: 'Biyagama is roughly 40–50 km from our Kochchikade facility. Typical delivery is same-day for scheduled orders, with a 45–75 minute drive depending on traffic on the Colombo–Kandy road and Kelani Valley routes.' } },
    { '@type': 'Question', name: 'What industries in Biyagama use CeyPall pallets?', acceptedAnswer: { '@type': 'Answer', text: 'Electronics manufacturers, chemical processors, apparel factories, industrial goods producers and logistics operators in the Biyagama EPZ regularly use our ISPM 15 export pallets and heavy-duty industrial pallets.' } },
    { '@type': 'Question', name: 'Are your pallets ISPM 15 compliant for export?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Every pallet is heat-treated to a core temperature of 56°C for at least 30 minutes and IPPC-stamped (country code LK). We provide a signed treatment certificate with every delivery.' } },
  ],
}

const industries = ['Electronics manufacturing', 'Chemical processing', 'Apparel & garments', 'Industrial goods', 'Logistics & 3PL', 'BOI-registered exporters']

const faqs = [
  { q: 'Do you deliver pallets to Biyagama EPZ?', a: 'Yes. CeyPall delivers ISPM 15 heat-treated pallets to BOI-registered exporters inside the Biyagama Export Processing Zone and the surrounding Gampaha industrial estates. Delivery is scheduled to your container loading date.' },
  { q: 'How long does delivery from Kochchikade to Biyagama take?', a: 'Biyagama is roughly 40–50 km from our Kochchikade facility. Typical delivery is same-day for scheduled orders, with a 45–75 minute drive depending on traffic on the Colombo–Kandy road and Kelani Valley routes.' },
  { q: 'What industries in Biyagama use CeyPall pallets?', a: 'Electronics manufacturers, chemical processors, apparel factories, industrial goods producers and logistics operators in the Biyagama EPZ regularly use our ISPM 15 export pallets and heavy-duty industrial pallets.' },
  { q: 'Are your pallets ISPM 15 compliant for export?', a: 'Yes. Every pallet is heat-treated to a core temperature of 56°C for at least 30 minutes and IPPC-stamped (country code LK). We provide a signed treatment certificate with every delivery.' },
]

export default function WoodenPalletsBiyagamaPage() {
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
            <li className="text-charcoal/80 font-medium">Wooden Pallets Biyagama</li>
          </ol>
        </div>
      </nav>

      <section className="wood-texture section-padding">
        <div className="container-content">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <FadeUp>
              <div>
                <p className="font-body text-xs font-semibold tracking-[0.15em] uppercase text-accent mb-4">Biyagama EPZ & Gampaha</p>
                <h1 className="font-display text-display-lg text-cream">Wooden Pallets for the Biyagama EPZ</h1>
                <span className="block w-10 h-0.5 bg-accent mt-4 mb-5" />
                <p className="font-body text-base text-cream/80 leading-relaxed mb-8">
                  <strong className="text-cream">ISPM 15 heat-treated pallets</strong> delivered to BOI exporters in the Biyagama Export Processing Zone, Kelaniya, Kaduwela and the surrounding Gampaha industrial estates — IPPC-stamped and scheduled to your container loading date.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button href="/contact" variant="primary" size="lg">Request a quotation →</Button>
                  <Button href="/ispm-15-certification-sri-lanka" variant="outline-light" size="lg">ISPM 15 guide</Button>
                </div>
              </div>
            </FadeUp>
            <FadeUp delay={0.12}>
              <div className="aspect-[4/3] relative overflow-hidden">
                <Image src="/Storage.png" alt="ISPM 15 pallets prepared for Biyagama EPZ exporters" fill className="object-cover" priority />
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      <section className="section-padding cream-texture">
        <div className="container-content">
          <AnswerBlock question="In short: pallet supply to Biyagama EPZ">
            CeyPall delivers <strong>ISPM 15 heat-treated, IPPC-stamped pallets</strong> to the Biyagama Export Processing Zone. Our Kochchikade facility is roughly <strong>40–50 km</strong> away — typically a 45–75 minute drive — so we schedule delivery to your container loading date and issue a signed treatment certificate with every load.
          </AnswerBlock>
        </div>
      </section>

      <section className="section-padding bg-warm-gray/40">
        <div className="container-content max-w-3xl">
          <FadeUp>
            <SectionHeader eyebrow="Industries served" title="Who We Supply in Biyagama" />
          </FadeUp>
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
          <FadeUp><SectionHeader eyebrow="Common questions" title="Biyagama Pallet Supply FAQs" /></FadeUp>
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
          { href: '/wooden-pallets-katunayake', title: 'Katunayake FTZ & Seeduwa', description: 'Wooden pallets for the Katunayake Free Trade Zone.' },
          { href: '/wooden-pallets-colombo', title: 'Colombo & Port', description: 'ISPM 15 pallets for Colombo exporters and the Port area.' },
          { href: '/ispm-15-certification-sri-lanka', title: 'ISPM 15 Certification', description: 'How CeyPall meets ISPM 15 for export shipments.' },
          { href: '/pallet-supplier-sri-lanka', title: 'Pallet Supplier', description: 'One-off orders and recurring supply island-wide.' },
        ]}
      />

      <section className="bg-accent py-20">
        <div className="container-content">
          <FadeUp>
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="font-display text-display-md text-white">Order Pallets for Biyagama EPZ</h2>
              <span className="block w-10 h-0.5 bg-white/40 mt-4 mb-5 mx-auto" />
              <p className="font-body text-base text-white/80 leading-relaxed mb-8">ISPM 15 heat-treated pallets, IPPC-stamped and delivered on your loading date.</p>
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
