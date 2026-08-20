import type { Metadata } from 'next'
import Link from 'next/link'
import { FadeUp } from '@/components/ui/FadeUp'
import { RelatedLinks } from '@/components/ui/RelatedLinks'
import { AnswerBlock } from '@/components/ui/AnswerBlock'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Button } from '@/components/ui/Button'
import { SchemaScript } from '@/components/ui/SchemaScript'

export const metadata: Metadata = {
  title: 'Pallets for Machinery Export Sri Lanka | Heavy-Duty ISPM 15',
  description:
    'Heavy-duty ISPM 15 wooden pallets and custom bases for Sri Lankan machinery, engineering and heavy-cargo exporters. Load-rated, IPPC-stamped, engineered to weight.',
  alternates: { canonical: 'https://www.ceypall.com/pallets-for-machinery-export' },
  openGraph: {
    title: 'Machinery Export Pallets Sri Lanka | CeyPall',
    description: 'Heavy-duty, load-rated ISPM 15 pallets for machinery and engineering exports. Custom bases built to your cargo weight and footprint.',
    url: 'https://www.ceypall.com/pallets-for-machinery-export',
    images: [{ url: '/OPENGIMAGE.jpg', width: 1200, height: 630, alt: 'CeyPall heavy-duty pallets for machinery export' }],
  },
  twitter: { description: 'Heavy-duty ISPM 15 pallets and custom bases for machinery exports from Sri Lanka.', images: ['/OPENGIMAGE.jpg'] },
}

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.ceypall.com/' },
    { '@type': 'ListItem', position: 2, name: 'Pallets for Machinery Export', item: 'https://www.ceypall.com/pallets-for-machinery-export' },
  ],
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Can wooden pallets carry heavy machinery for export?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, when engineered to the load. CeyPall builds heavy-duty pallets and custom timber bases rated for 1,500–2,500 kg or more, using thicker deck boards, wider stringers and reinforced framing. We ISPM 15 heat-treat and IPPC-stamp every unit for international shipment.' } },
    { '@type': 'Question', name: 'What is a machinery skid or export base?', acceptedAnswer: { '@type': 'Answer', text: 'A machinery skid is a timber base custom-built to the footprint and weight of a specific machine or assembly. It differs from a standard pallet in that dimensions, entry type, board thickness and stringer layout are all specified for that single cargo. CeyPall builds skids as well as heavy-duty pallets.' } },
    { '@type': 'Question', name: 'How is load capacity determined for a machinery pallet?', acceptedAnswer: { '@type': 'Answer', text: 'Load capacity is set by timber species, board thickness, stringer size, deck spacing and entry type. For machinery exports we need three numbers: static load (weight on the floor), dynamic load (weight during forklift handling) and the load distribution (evenly spread or concentrated). See the pallet load capacity guide.' } },
    { '@type': 'Question', name: 'Do you build ISPM 15 crating for machinery?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. We manufacture ISPM 15 heat-treated crates, cases and skids in addition to pallets. Every timber component is heat-treated to 56°C core temperature for at least 30 minutes and IPPC-stamped. A signed treatment certificate accompanies the shipment.' } },
    { '@type': 'Question', name: 'What industries fall under machinery export pallets?', acceptedAnswer: { '@type': 'Answer', text: 'Engineering firms, industrial equipment manufacturers, gearbox and motor suppliers, textile machinery exporters, packaging equipment builders, and general fabricators shipping heavy assemblies to Asia, the Middle East, Africa and beyond.' } },
  ],
}

const useCases = [
  { heading: 'Engineering & fabricated goods', body: 'Heavy castings, weldments and machined parts on load-rated bases with reinforced decks.' },
  { heading: 'Industrial equipment', body: 'Motors, gearboxes, compressors, pumps — custom skids sized to the machine footprint.' },
  { heading: 'Textile & apparel machinery', body: 'Sewing lines, looms, dyeing equipment — export skids that align with the machine base plate.' },
  { heading: 'Packaging & food-processing lines', body: 'Filling, sealing and conveying equipment — modular skids for multi-piece shipments.' },
  { heading: 'Construction & mining spares', body: 'Heavy castings and wear parts for global aftermarket supply.' },
  { heading: 'Automotive components', body: 'Bulk metal parts, sub-assemblies and tooling with dense weight concentration.' },
]

const faqs = [
  { q: 'Can wooden pallets carry heavy machinery for export?', a: 'Yes, when engineered to the load. CeyPall builds heavy-duty pallets and custom timber bases rated for 1,500–2,500 kg or more, using thicker deck boards, wider stringers and reinforced framing. We ISPM 15 heat-treat and IPPC-stamp every unit for international shipment.' },
  { q: 'What is a machinery skid or export base?', a: 'A machinery skid is a timber base custom-built to the footprint and weight of a specific machine or assembly. It differs from a standard pallet in that dimensions, entry type, board thickness and stringer layout are all specified for that single cargo. CeyPall builds skids as well as heavy-duty pallets.' },
  { q: 'How is load capacity determined for a machinery pallet?', a: 'Load capacity is set by timber species, board thickness, stringer size, deck spacing and entry type. For machinery exports we need three numbers: static load (weight on the floor), dynamic load (weight during forklift handling) and the load distribution (evenly spread or concentrated). See the pallet load capacity guide.' },
  { q: 'Do you build ISPM 15 crating for machinery?', a: 'Yes. We manufacture ISPM 15 heat-treated crates, cases and skids in addition to pallets. Every timber component is heat-treated to 56°C core temperature for at least 30 minutes and IPPC-stamped. A signed treatment certificate accompanies the shipment.' },
  { q: 'What industries fall under machinery export pallets?', a: 'Engineering firms, industrial equipment manufacturers, gearbox and motor suppliers, textile machinery exporters, packaging equipment builders, and general fabricators shipping heavy assemblies to Asia, the Middle East, Africa and beyond.' },
]

export default function PalletsForMachineryExportPage() {
  return (
    <>
      <SchemaScript schema={breadcrumbJsonLd} />
      <SchemaScript schema={faqJsonLd} />

      <nav aria-label="Breadcrumb" className="bg-cream border-b border-warm-gray">
        <div className="container-content py-3">
          <ol className="flex items-center gap-2 font-body text-xs text-charcoal/50">
            <li><Link href="/" className="hover:text-accent transition-colors duration-150">Home</Link></li>
            <li aria-hidden="true" className="select-none">›</li>
            <li className="text-charcoal/80 font-medium">Pallets for Machinery Export</li>
          </ol>
        </div>
      </nav>

      <section className="wood-texture section-padding">
        <div className="container-content max-w-3xl">
          <FadeUp>
            <p className="font-body text-xs font-semibold tracking-[0.15em] uppercase text-accent mb-4">Heavy-Duty & Custom Skids</p>
            <h1 className="font-display text-display-lg text-cream">Pallets for Machinery Export from Sri Lanka</h1>
            <span className="block w-10 h-0.5 bg-accent mt-4 mb-5" />
            <p className="font-body text-base text-cream/80 leading-relaxed mb-8">
              Heavy-duty <strong className="text-cream">ISPM 15 pallets</strong> and custom timber skids for machinery, engineering equipment and heavy-cargo exports — engineered to your load, IPPC-stamped, and built at our Kochchikade facility.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button href="/contact" variant="primary" size="lg">Request an engineered quote →</Button>
              <Button href="/heavy-duty-pallets-sri-lanka" variant="outline-light" size="lg">Heavy-duty pallet specs</Button>
            </div>
          </FadeUp>
        </div>
      </section>

      <section className="section-padding cream-texture">
        <div className="container-content">
          <AnswerBlock question="In short: how are machinery export pallets different?">
            They are <strong>load-rated at manufacture</strong>, not off the shelf. Board thickness, stringer size and deck configuration are engineered to your cargo weight and footprint. All timber is ISPM 15 heat-treated and IPPC-stamped, and we build custom skids for machines with non-standard bases.
          </AnswerBlock>
        </div>
      </section>

      <section className="section-padding bg-warm-gray/40">
        <div className="container-content">
          <FadeUp><SectionHeader eyebrow="Applications" title="Machinery & Heavy Cargo Use Cases" /></FadeUp>
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
          <FadeUp><SectionHeader eyebrow="Common questions" title="Machinery Export Pallet FAQs" /></FadeUp>
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
          { href: '/heavy-duty-pallets-sri-lanka', title: 'Heavy-Duty Pallets', description: 'Load-rated pallets for 1,500–2,000 kg+ cargo.' },
          { href: '/pallet-load-capacity', title: 'Pallet Load Capacity', description: 'Static, dynamic and racking load — how the rating is set.' },
          { href: '/custom-wooden-pallets-sri-lanka', title: 'Custom Wooden Pallets', description: 'Bespoke pallets and skids built to any footprint.' },
          { href: '/ispm-15-certification-sri-lanka', title: 'ISPM 15 Certification', description: 'The compliance standard for wooden export packaging.' },
        ]}
      />

      <section className="bg-accent py-20">
        <div className="container-content">
          <FadeUp>
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="font-display text-display-md text-white">Order Machinery Export Pallets</h2>
              <span className="block w-10 h-0.5 bg-white/40 mt-4 mb-5 mx-auto" />
              <p className="font-body text-base text-white/80 leading-relaxed mb-8">Send us your cargo weight, dimensions and destination — we&apos;ll engineer the base.</p>
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
