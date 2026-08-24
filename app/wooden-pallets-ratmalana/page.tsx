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
  title: 'Wooden Pallets Ratmalana | ISPM 15 Export Pallets — CeyPall',
  description:
    'ISPM 15 heat-treated wooden pallets delivered to Ratmalana, Moratuwa, Dehiwala and the southern Colombo industrial belt. IPPC-stamped, certificate included.',
  alternates: { canonical: 'https://www.ceypall.com/wooden-pallets-ratmalana' },
  openGraph: {
    title: 'Wooden Pallets — Ratmalana | CeyPall',
    description: 'ISPM 15 heat-treated pallets for factories and exporters in Ratmalana, Moratuwa and Dehiwala.',
    url: 'https://www.ceypall.com/wooden-pallets-ratmalana',
    images: [{ url: '/OPENGIMAGE.jpg', width: 1200, height: 630, alt: 'CeyPall pallets for Ratmalana exporters' }],
  },
  twitter: { description: 'ISPM 15 pallets for Ratmalana — heat-treated, IPPC-stamped, delivered on schedule.', images: ['/OPENGIMAGE.jpg'] },
}

const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://www.ceypall.com/#business',
  name: 'CeyPall (Pvt) Ltd',
  description: 'ISPM 15 wooden pallet manufacturer serving factories and exporters in Ratmalana, Moratuwa and the southern Colombo industrial belt.',
  url: 'https://www.ceypall.com/wooden-pallets-ratmalana',
  telephone: ['+94714711417', '+94769494944', '+94312277752'],
  email: 'office@ceypall.com',
  address: { '@type': 'PostalAddress', streetAddress: '1088, Colombo Road, Daluwakotuwa', addressLocality: 'Kochchikade', postalCode: '11540', addressCountry: 'LK' },
  areaServed: [
    { '@type': 'City', name: 'Ratmalana' },
    { '@type': 'City', name: 'Moratuwa' },
    { '@type': 'City', name: 'Dehiwala' },
    { '@type': 'City', name: 'Mount Lavinia' },
  ],
}

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.ceypall.com/' },
    { '@type': 'ListItem', position: 2, name: 'Wooden Pallets Ratmalana', item: 'https://www.ceypall.com/wooden-pallets-ratmalana' },
  ],
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Do you deliver pallets to Ratmalana?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. CeyPall delivers ISPM 15 heat-treated pallets to Ratmalana, Moratuwa, Dehiwala and the southern Colombo industrial belt. Our Kochchikade facility is roughly 45 km away, with delivery typically inside a working day for scheduled orders.' } },
    { '@type': 'Question', name: 'How far is CeyPall from Ratmalana?', acceptedAnswer: { '@type': 'Answer', text: 'Ratmalana is approximately 45 km south of our Kochchikade facility. Access is via the Colombo–Katunayake Expressway (E03) and Galle Road (A2). Typical delivery time is 60–90 minutes depending on traffic.' } },
    { '@type': 'Question', name: 'Which industries in Ratmalana use CeyPall pallets?', acceptedAnswer: { '@type': 'Answer', text: 'Garment and apparel factories, electronics assemblers, chemicals manufacturers, packaging distributors, engineering workshops and 3PL warehouses across the Ratmalana industrial estate and the Moratuwa manufacturing corridor.' } },
    { '@type': 'Question', name: 'Can you supply Moratuwa manufacturers as well?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Ratmalana, Moratuwa and Katubedda form a continuous industrial belt. We deliver ISPM 15 export pallets across the belt on a single trip, with recurring schedules aligned to your container loading dates.' } },
  ],
}

const industries = ['Garment & apparel', 'Electronics assembly', 'Chemicals & rubber', 'Packaging distributors', 'Engineering workshops', '3PL & warehousing']

const faqs = [
  { q: 'Do you deliver pallets to Ratmalana?', a: 'Yes. CeyPall delivers ISPM 15 heat-treated pallets to Ratmalana, Moratuwa, Dehiwala and the southern Colombo industrial belt. Our Kochchikade facility is roughly 45 km away, with delivery typically inside a working day for scheduled orders.' },
  { q: 'How far is CeyPall from Ratmalana?', a: 'Ratmalana is approximately 45 km south of our Kochchikade facility. Access is via the Colombo–Katunayake Expressway (E03) and Galle Road (A2). Typical delivery time is 60–90 minutes depending on traffic.' },
  { q: 'Which industries in Ratmalana use CeyPall pallets?', a: 'Garment and apparel factories, electronics assemblers, chemicals manufacturers, packaging distributors, engineering workshops and 3PL warehouses across the Ratmalana industrial estate and the Moratuwa manufacturing corridor.' },
  { q: 'Can you supply Moratuwa manufacturers as well?', a: 'Yes. Ratmalana, Moratuwa and Katubedda form a continuous industrial belt. We deliver ISPM 15 export pallets across the belt on a single trip, with recurring schedules aligned to your container loading dates.' },
]

export default function WoodenPalletsRatmalanaPage() {
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
            <li className="text-charcoal/80 font-medium">Wooden Pallets Ratmalana</li>
          </ol>
        </div>
      </nav>

      <section className="wood-texture section-padding">
        <div className="container-content">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <FadeUp>
              <div>
                <p className="font-body text-xs font-semibold tracking-[0.15em] uppercase text-accent mb-4">Ratmalana & Moratuwa Belt</p>
                <h1 className="font-display text-display-lg text-cream">Wooden Pallets for Ratmalana Exporters</h1>
                <span className="block w-10 h-0.5 bg-accent mt-4 mb-5" />
                <p className="font-body text-base text-cream/80 leading-relaxed mb-8">
                  <strong className="text-cream">ISPM 15 heat-treated pallets</strong> for garment factories, electronics assemblers and export businesses across the Ratmalana industrial estate, Moratuwa and Dehiwala — IPPC-stamped, on schedule.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button href="/contact" variant="primary" size="lg">Request a quotation →</Button>
                  <Button href="/wooden-pallets-colombo" variant="outline-light" size="lg">Colombo supply</Button>
                </div>
              </div>
            </FadeUp>
            <FadeUp delay={0.12}>
              <div className="aspect-[4/3] relative overflow-hidden">
                <Image src="/Storage.png" alt="ISPM 15 pallets loaded for Ratmalana exporters" fill className="object-cover" priority />
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      <section className="section-padding cream-texture">
        <div className="container-content">
          <AnswerBlock question="In short: pallet supply to Ratmalana">
            Kochchikade is about <strong>45 km north of Ratmalana</strong>, via the Colombo–Katunayake Expressway and Galle Road. We deliver <strong>ISPM 15 heat-treated, IPPC-stamped pallets</strong> with a signed treatment certificate for every batch — accepted at customs worldwide.
          </AnswerBlock>
        </div>
      </section>

      <section className="section-padding bg-warm-gray/40">
        <div className="container-content max-w-3xl">
          <FadeUp><SectionHeader eyebrow="Industries served" title="Who We Supply in Ratmalana" /></FadeUp>
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
          <FadeUp><SectionHeader eyebrow="Common questions" title="Ratmalana Pallet Supply FAQs" /></FadeUp>
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
          { href: '/wooden-pallets-katunayake', title: 'Katunayake FTZ', description: 'Wooden pallets for the Katunayake Free Trade Zone.' },
          { href: '/pallets-for-apparel-export', title: 'Apparel Export Pallets', description: 'Euro and US-size pallets for garment exporters.' },
          { href: '/ispm-15-certification-sri-lanka', title: 'ISPM 15 Certification', description: 'How CeyPall meets ISPM 15 for export shipments.' },
        ]}
      />

      <section className="bg-accent py-20">
        <div className="container-content">
          <FadeUp>
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="font-display text-display-md text-white">Order Pallets in Ratmalana</h2>
              <span className="block w-10 h-0.5 bg-white/40 mt-4 mb-5 mx-auto" />
              <p className="font-body text-base text-white/80 leading-relaxed mb-8">ISPM 15 heat-treated pallets — delivered on schedule to Ratmalana and the Moratuwa belt.</p>
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
