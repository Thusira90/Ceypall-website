import type { Metadata } from 'next'
import Link from 'next/link'
import { FadeUp } from '@/components/ui/FadeUp'
import { RelatedLinks } from '@/components/ui/RelatedLinks'
import { AnswerBlock } from '@/components/ui/AnswerBlock'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Button } from '@/components/ui/Button'
import { SchemaScript } from '@/components/ui/SchemaScript'

export const metadata: Metadata = {
  title: 'Pharmaceutical Pallets Sri Lanka | ISPM 15 GMP-Ready Pallets',
  description:
    'ISPM 15 heat-treated wooden pallets for Sri Lankan pharmaceutical and healthcare exporters — no chemical preservatives, kiln-dried, IPPC-stamped, GMP-friendly.',
  alternates: { canonical: 'https://www.ceypall.com/pallets-for-pharmaceutical-export' },
  openGraph: {
    title: 'Pharmaceutical Pallets Sri Lanka | CeyPall',
    description: 'ISPM 15 heat-treated pallets for pharma exporters — no chemical treatments, low moisture, IPPC-stamped for global shipment.',
    url: 'https://www.ceypall.com/pallets-for-pharmaceutical-export',
    images: [{ url: '/OPENGIMAGE.jpg', width: 1200, height: 630, alt: 'CeyPall ISPM 15 pallets for pharmaceutical exporters' }],
  },
  twitter: { description: 'ISPM 15 pallets for pharma and healthcare exporters — chemical-free heat treatment, low moisture, IPPC-stamped.', images: ['/OPENGIMAGE.jpg'] },
}

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.ceypall.com/' },
    { '@type': 'ListItem', position: 2, name: 'Pharmaceutical Pallets', item: 'https://www.ceypall.com/pallets-for-pharmaceutical-export' },
  ],
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Can wooden pallets be used for pharmaceutical exports?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Heat-treated (HT) wooden pallets are widely used in pharmaceutical supply chains because they carry no chemical preservatives, fungicides or fumigants — the treatment is purely thermal. CeyPall pallets are ISPM 15 heat-treated, IPPC-stamped and kiln-dried to below 15% moisture content.' } },
    { '@type': 'Question', name: 'Why are chemically-treated pallets a problem for pharma?', acceptedAnswer: { '@type': 'Answer', text: 'Methyl bromide (MB) fumigated pallets can leave chemical residues that contaminate pharmaceutical products or their packaging. Modern GMP and regulator guidance therefore strongly prefer HT pallets — the ISPM 15 heat-treatment stamp confirms no chemical fumigant was used.' } },
    { '@type': 'Question', name: 'What moisture content should pharma pallets have?', acceptedAnswer: { '@type': 'Answer', text: 'Low, and stable. Wet pallet timber can raise humidity inside a container, which affects hygroscopic actives and moisture-sensitive dosage forms. CeyPall pallets are kiln-dried to below 15% MC and stored under cover before dispatch.' } },
    { '@type': 'Question', name: 'Do you supply GMP-audited pharma manufacturers?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. We supply pharmaceutical, nutraceutical, medical device and Ayurvedic exporters across Sri Lanka. Recurring supply agreements let us lock the specification your quality team has approved and dispatch consistently against it.' } },
    { '@type': 'Question', name: 'Do you provide a treatment certificate?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Every ISPM 15 order ships with a signed treatment certificate — batch number, treatment date, core temperature and duration. The certificate is accepted at destination customs and is a standard document for GMP incoming-goods inspection.' } },
  ],
}

const useCases = [
  { heading: 'Finished pharmaceutical products', body: 'Tablets, capsules, oral liquids and topical formulations shipped in cartons on ISPM 15 pallets.' },
  { heading: 'API & bulk actives', body: 'Bulk drums and fibreboard containers on load-rated, low-moisture pallets.' },
  { heading: 'Medical devices', body: 'Sterile and non-sterile devices, diagnostics, disposables — chemical-free timber throughout.' },
  { heading: 'Nutraceuticals & supplements', body: 'Herbal, mineral and vitamin formulations for global health-food markets.' },
  { heading: 'Ayurvedic exports', body: 'Traditional formulations and raw botanicals shipping to Europe, the US and the Gulf.' },
  { heading: 'Clinical trial supplies', body: 'Controlled, documented supply for cold-chain and ambient shipments.' },
]

const faqs = [
  { q: 'Can wooden pallets be used for pharmaceutical exports?', a: 'Yes. Heat-treated (HT) wooden pallets are widely used in pharmaceutical supply chains because they carry no chemical preservatives, fungicides or fumigants — the treatment is purely thermal. CeyPall pallets are ISPM 15 heat-treated, IPPC-stamped and kiln-dried to below 15% moisture content.' },
  { q: 'Why are chemically-treated pallets a problem for pharma?', a: 'Methyl bromide (MB) fumigated pallets can leave chemical residues that contaminate pharmaceutical products or their packaging. Modern GMP and regulator guidance therefore strongly prefer HT pallets — the ISPM 15 heat-treatment stamp confirms no chemical fumigant was used.' },
  { q: 'What moisture content should pharma pallets have?', a: 'Low, and stable. Wet pallet timber can raise humidity inside a container, which affects hygroscopic actives and moisture-sensitive dosage forms. CeyPall pallets are kiln-dried to below 15% MC and stored under cover before dispatch.' },
  { q: 'Do you supply GMP-audited pharma manufacturers?', a: 'Yes. We supply pharmaceutical, nutraceutical, medical device and Ayurvedic exporters across Sri Lanka. Recurring supply agreements let us lock the specification your quality team has approved and dispatch consistently against it.' },
  { q: 'Do you provide a treatment certificate?', a: 'Yes. Every ISPM 15 order ships with a signed treatment certificate — batch number, treatment date, core temperature and duration. The certificate is accepted at destination customs and is a standard document for GMP incoming-goods inspection.' },
]

export default function PalletsForPharmaExportPage() {
  return (
    <>
      <SchemaScript schema={breadcrumbJsonLd} />
      <SchemaScript schema={faqJsonLd} />

      <nav aria-label="Breadcrumb" className="bg-cream border-b border-warm-gray">
        <div className="container-content py-3">
          <ol className="flex items-center gap-2 font-body text-xs text-charcoal/50">
            <li><Link href="/" className="hover:text-accent transition-colors duration-150">Home</Link></li>
            <li aria-hidden="true" className="select-none">›</li>
            <li className="text-charcoal/80 font-medium">Pharmaceutical Pallets</li>
          </ol>
        </div>
      </nav>

      <section className="wood-texture section-padding">
        <div className="container-content max-w-3xl">
          <FadeUp>
            <p className="font-body text-xs font-semibold tracking-[0.15em] uppercase text-accent mb-4">Pharma, Nutraceutical & Medical Devices</p>
            <h1 className="font-display text-display-lg text-cream">Pallets for Pharmaceutical Export from Sri Lanka</h1>
            <span className="block w-10 h-0.5 bg-accent mt-4 mb-5" />
            <p className="font-body text-base text-cream/80 leading-relaxed mb-8">
              <strong className="text-cream">ISPM 15 heat-treated pallets</strong> for pharmaceutical, nutraceutical, medical-device and Ayurvedic exporters — no chemical preservatives, low moisture, IPPC-stamped with a treatment certificate on every batch.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button href="/contact" variant="primary" size="lg">Request a quotation →</Button>
              <Button href="/heat-treated-pallets" variant="outline-light" size="lg">Heat treatment process</Button>
            </div>
          </FadeUp>
        </div>
      </section>

      <section className="section-padding cream-texture">
        <div className="container-content">
          <AnswerBlock question="In short: why heat-treated pallets for pharma?">
            Heat treatment is <strong>purely thermal — no chemicals</strong>. Timber is heated to 56°C core for at least 30 minutes and IPPC-stamped. That's what GMP incoming-goods inspection wants to see, and it's what regulators worldwide accept. Methyl-bromide fumigated pallets can leave residues that contaminate product; CeyPall pallets are HT only.
          </AnswerBlock>
        </div>
      </section>

      <section className="section-padding bg-warm-gray/40">
        <div className="container-content">
          <FadeUp><SectionHeader eyebrow="Applications" title="Pharma Export Use Cases" /></FadeUp>
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
          <FadeUp><SectionHeader eyebrow="Common questions" title="Pharma Pallet FAQs" /></FadeUp>
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
          { href: '/heat-treated-pallets', title: 'Heat-Treated Pallets', description: 'How ISPM 15 heat treatment works — chemical-free.' },
          { href: '/food-grade-pallets-sri-lanka', title: 'Food-Grade Pallets', description: 'Related hygiene-critical pallet specifications.' },
          { href: '/ispm-15-certification-sri-lanka', title: 'ISPM 15 Certification', description: 'The export compliance standard and treatment certificate.' },
          { href: '/pallet-supplier-sri-lanka', title: 'Pallet Supplier', description: 'Recurring supply agreements for quality-locked specifications.' },
        ]}
      />

      <section className="bg-accent py-20">
        <div className="container-content">
          <FadeUp>
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="font-display text-display-md text-white">Order Pharma-Grade Pallets</h2>
              <span className="block w-10 h-0.5 bg-white/40 mt-4 mb-5 mx-auto" />
              <p className="font-body text-base text-white/80 leading-relaxed mb-8">ISPM 15 heat-treated — no chemicals, low moisture, treatment certificate included.</p>
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
