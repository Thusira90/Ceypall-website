import type { Metadata } from 'next'
import Link from 'next/link'
import { FadeUp } from '@/components/ui/FadeUp'
import { RelatedLinks } from '@/components/ui/RelatedLinks'
import { AnswerBlock } from '@/components/ui/AnswerBlock'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Button } from '@/components/ui/Button'
import { SchemaScript } from '@/components/ui/SchemaScript'

export const metadata: Metadata = {
  title: 'Pallets for Seafood Export Sri Lanka | ISPM 15 Cold-Chain Pallets',
  description:
    'ISPM 15 heat-treated wooden pallets for Sri Lankan seafood exporters — sized for insulated cartons and freezer containers, kiln-dried, IPPC-stamped.',
  alternates: { canonical: 'https://www.ceypall.com/pallets-for-seafood-export' },
  openGraph: {
    title: 'Pallets for Seafood Export Sri Lanka | CeyPall',
    description: 'ISPM 15 pallets for seafood exporters. Kiln-dried, low-moisture, IPPC-stamped for global reefer shipments.',
    url: 'https://www.ceypall.com/pallets-for-seafood-export',
    images: [{ url: '/OPENGIMAGE.jpg', width: 1200, height: 630, alt: 'CeyPall pallets for seafood exporters' }],
  },
  twitter: { description: 'ISPM 15 pallets for Sri Lankan seafood exporters — reefer-ready, IPPC-stamped, low-moisture.', images: ['/OPENGIMAGE.jpg'] },
}

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.ceypall.com/' },
    { '@type': 'ListItem', position: 2, name: 'Pallets for Seafood Export', item: 'https://www.ceypall.com/pallets-for-seafood-export' },
  ],
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Are ISPM 15 pallets required for seafood exports?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Every wooden pallet used to export goods internationally — including fresh and frozen seafood — must be ISPM 15 compliant. That means the timber has been heat-treated to a core temperature of 56°C for at least 30 minutes and IPPC-stamped. CeyPall pallets meet the standard and ship with a signed treatment certificate.' } },
    { '@type': 'Question', name: 'Why does moisture content matter for seafood pallets?', acceptedAnswer: { '@type': 'Answer', text: 'Reefer containers run at controlled sub-zero or chilled temperatures. Wet pallet timber releases moisture that condenses and refreezes inside the container, causing packaging damage and hygiene issues. CeyPall kiln-dries pallets to below 15% moisture content before dispatch.' } },
    { '@type': 'Question', name: 'What pallet size suits insulated seafood cartons?', acceptedAnswer: { '@type': 'Answer', text: 'The 1200 × 1000 mm pallet is the general export standard and pairs well with common insulated seafood cartons. For EU-bound shipments, 1200 × 800 Euro pallets are preferred. We also build custom sizes to match your specific carton footprint for tighter container utilisation.' } },
    { '@type': 'Question', name: 'Do you supply seafood exporters in Negombo and the Southern Province?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. CeyPall delivers to seafood processors in Negombo, Chilaw, Beruwala, Galle and Koggala, plus consolidators serving Colombo Port for reefer shipments to Japan, the EU, the US and the Middle East.' } },
    { '@type': 'Question', name: 'Are your pallets food-safe?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Our export pallets are heat-treated only — no fungicides, no chemical preservatives — so they are suitable for food and food-adjacent cargo. See our food-grade pallets page for details on the standards we follow.' } },
  ],
}

const useCases = [
  { heading: 'Fresh chilled tuna & swordfish', body: 'Kiln-dried pallets pair with insulated cartons for air and sea reefer shipments to Japan and the EU.' },
  { heading: 'Frozen shrimp & prawn', body: 'Load-rated pallets sized to processor carton footprints for reefer container consolidation.' },
  { heading: 'Value-added seafood', body: 'Cooked, marinated and IQF seafood in cartons or trays — low-moisture, IPPC-stamped pallets throughout.' },
  { heading: 'Live lobster & crab', body: 'Ventilated pallet configurations for air freight shipments to Asia and the Middle East.' },
  { heading: 'Dried fish & shark', body: 'Standard export pallets for shelf-stable cargo bound for South Asia and the Gulf.' },
  { heading: 'Aquaculture harvests', body: 'Recurring supply for shrimp and finfish farms shipping through Colombo Port.' },
]

const faqs = [
  { q: 'Are ISPM 15 pallets required for seafood exports?', a: 'Yes. Every wooden pallet used to export goods internationally — including fresh and frozen seafood — must be ISPM 15 compliant. That means the timber has been heat-treated to a core temperature of 56°C for at least 30 minutes and IPPC-stamped. CeyPall pallets meet the standard and ship with a signed treatment certificate.' },
  { q: 'Why does moisture content matter for seafood pallets?', a: 'Reefer containers run at controlled sub-zero or chilled temperatures. Wet pallet timber releases moisture that condenses and refreezes inside the container, causing packaging damage and hygiene issues. CeyPall kiln-dries pallets to below 15% moisture content before dispatch.' },
  { q: 'What pallet size suits insulated seafood cartons?', a: 'The 1200 × 1000 mm pallet is the general export standard and pairs well with common insulated seafood cartons. For EU-bound shipments, 1200 × 800 Euro pallets are preferred. We also build custom sizes to match your specific carton footprint for tighter container utilisation.' },
  { q: 'Do you supply seafood exporters in Negombo and the Southern Province?', a: 'Yes. CeyPall delivers to seafood processors in Negombo, Chilaw, Beruwala, Galle and Koggala, plus consolidators serving Colombo Port for reefer shipments to Japan, the EU, the US and the Middle East.' },
  { q: 'Are your pallets food-safe?', a: 'Yes. Our export pallets are heat-treated only — no fungicides, no chemical preservatives — so they are suitable for food and food-adjacent cargo. See our food-grade pallets page for details on the standards we follow.' },
]

export default function PalletsForSeafoodExportPage() {
  return (
    <>
      <SchemaScript schema={breadcrumbJsonLd} />
      <SchemaScript schema={faqJsonLd} />

      <nav aria-label="Breadcrumb" className="bg-cream border-b border-warm-gray">
        <div className="container-content py-3">
          <ol className="flex items-center gap-2 font-body text-xs text-charcoal/50">
            <li><Link href="/" className="hover:text-accent transition-colors duration-150">Home</Link></li>
            <li aria-hidden="true" className="select-none">›</li>
            <li className="text-charcoal/80 font-medium">Pallets for Seafood Export</li>
          </ol>
        </div>
      </nav>

      <section className="wood-texture section-padding">
        <div className="container-content max-w-3xl">
          <FadeUp>
            <p className="font-body text-xs font-semibold tracking-[0.15em] uppercase text-accent mb-4">Seafood & Cold Chain</p>
            <h1 className="font-display text-display-lg text-cream">Pallets for Seafood Export from Sri Lanka</h1>
            <span className="block w-10 h-0.5 bg-accent mt-4 mb-5" />
            <p className="font-body text-base text-cream/80 leading-relaxed mb-8">
              <strong className="text-cream">ISPM 15 heat-treated pallets</strong> engineered for reefer containers and insulated cartons — kiln-dried below 15% moisture, IPPC-stamped, food-safe. Supplied to seafood exporters shipping through Colombo, Katunayake and Southern Province ports.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button href="/contact" variant="primary" size="lg">Request a quotation →</Button>
              <Button href="/food-grade-pallets-sri-lanka" variant="outline-light" size="lg">Food-grade specs</Button>
            </div>
          </FadeUp>
        </div>
      </section>

      <section className="section-padding cream-texture">
        <div className="container-content">
          <AnswerBlock question="In short: what makes a seafood export pallet different?">
            Two things: <strong>ISPM 15 compliance</strong> (mandatory for all wooden export packaging) and <strong>low moisture content</strong>. Reefer containers punish wet pallets — condensation and refreeze damage cartons and cargo. CeyPall pallets are kiln-dried to <strong>below 15% MC</strong> and IPPC-stamped for global reefer shipping.
          </AnswerBlock>
        </div>
      </section>

      <section className="section-padding bg-warm-gray/40">
        <div className="container-content">
          <FadeUp><SectionHeader eyebrow="Applications" title="Seafood Export Use Cases" /></FadeUp>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-warm-gray">
            {useCases.map(({ heading, body }, i) => (
              <FadeUp key={heading} delay={i * 0.06}>
                <div className="bg-cream p-8 flex flex-col gap-3 h-full">
                  <h3 className="font-display text-base font-semibold text-primary">{heading}</h3>
                  <p className="font-body text-sm text-charcoal/65 leading-relaxed">{body}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding cream-texture">
        <div className="container-content">
          <FadeUp><SectionHeader eyebrow="Common questions" title="Seafood Export Pallet FAQs" /></FadeUp>
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
          { href: '/food-grade-pallets-sri-lanka', title: 'Food-Grade Pallets', description: 'Food-safe pallet specifications — heat-treated only, no fungicides.' },
          { href: '/ispm-15-certification-sri-lanka', title: 'ISPM 15 Certification', description: 'The export compliance standard for wooden pallets.' },
          { href: '/moisture-content-calculator', title: 'Moisture Content Calculator', description: 'Check your pallet timber moisture before dispatch.' },
          { href: '/container-pallet-calculator', title: 'Container Calculator', description: 'How many pallets fit in a reefer or dry container.' },
        ]}
      />

      <section className="bg-accent py-20">
        <div className="container-content">
          <FadeUp>
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="font-display text-display-md text-white">Order Seafood Export Pallets</h2>
              <span className="block w-10 h-0.5 bg-white/40 mt-4 mb-5 mx-auto" />
              <p className="font-body text-base text-white/80 leading-relaxed mb-8">ISPM 15 heat-treated, kiln-dried, IPPC-stamped — reefer-ready.</p>
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
