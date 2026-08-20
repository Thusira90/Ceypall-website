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
  title: 'Pallet Supplier Sri Lanka | Wooden Pallet Supply — CeyPall',
  description:
    'CeyPall is a manufacturer and pallet supplier in Sri Lanka — standard, custom, export and ISPM 15 heat-treated wooden pallets. Recurring supply, island-wide delivery.',
  twitter: {
    description:
      'Buy wooden pallets from CeyPall — Sri Lanka pallet supplier and manufacturer. Standard, custom and ISPM 15 export pallets. One-off orders and recurring supply.',
    images: ['/OPENGIMAGE.jpg'],
  },
  alternates: {
    canonical: 'https://www.ceypall.com/pallet-supplier-sri-lanka',
  },
  openGraph: {
    title: 'Pallet Supplier Sri Lanka | CeyPall (Pvt) Ltd',
    description:
      'Manufacturer + supplier of wooden pallets in Sri Lanka. Standard, custom, export and ISPM 15 pallets. Recurring supply and island-wide delivery.',
    url: 'https://www.ceypall.com/pallet-supplier-sri-lanka',
    images: [
      { url: '/OPENGIMAGE.jpg', width: 1200, height: 630, alt: 'CeyPall — Sri Lanka pallet supplier' },
    ],
  },
}

const speakableJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Pallet Supplier Sri Lanka | CeyPall',
  url: 'https://www.ceypall.com/pallet-supplier-sri-lanka',
  speakable: { '@type': 'SpeakableSpecification', cssSelector: ['h1', 'h2', '.faq-answer'] },
}

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Wooden Pallet Supply',
  description:
    'Manufacturer and pallet supplier in Sri Lanka. Standard, custom and ISPM 15 heat-treated wooden pallets, delivered island-wide with one-off and recurring supply.',
  provider: { '@id': 'https://www.ceypall.com/#organization' },
  serviceType: 'Pallet Supply',
  areaServed: { '@type': 'Country', name: 'Sri Lanka' },
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Where can I buy wooden pallets in Sri Lanka?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'CeyPall is a wooden pallet manufacturer and supplier in Sri Lanka. We supply standard, custom, export and ISPM 15 heat-treated pallets directly from our factory at 1088 Colombo Road, Daluwakotuwa, and deliver island-wide. Request a quotation with your dimensions, quantity and application and we will price and schedule your order.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you supply pallets in small quantities?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. We supply one-off orders as well as recurring weekly and monthly supply contracts. For very small quantities we recommend confirming your specification early so we can schedule production alongside other batches.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can CeyPall handle recurring pallet supply?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Many CeyPall customers run recurring supply — weekly, monthly or shipment-linked — with agreed specifications, pricing and delivery windows. Recurring supply lets us pre-buy timber, maintain jigs for your specification and hold buffer stock for urgent releases.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you deliver pallets across Sri Lanka?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. We deliver island-wide, with regular movements to Colombo, Katunayake, Negombo, Seeduwa, Biyagama, Wattala, Peliyagoda, Ja-Ela, Horana, Koggala and Galle. Delivery is quoted with the order based on distance, quantity and vehicle type.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between a pallet manufacturer and a pallet supplier?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A pallet supplier resells pallets sourced from other producers. A pallet manufacturer builds them. CeyPall is both — we manufacture at our own facility, so specification, timber, treatment and quality are controlled in-house rather than passed through a middleman.',
      },
    },
  ],
}

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.ceypall.com/' },
    { '@type': 'ListItem', position: 2, name: 'Pallet Supplier Sri Lanka', item: 'https://www.ceypall.com/pallet-supplier-sri-lanka' },
  ],
}

const supplyOptions = [
  { title: 'Standard pallets', body: 'Common footprints held in production rotation — quick turnaround for straightforward orders.' },
  { title: 'Custom pallets', body: 'Any dimension, load rating, entry type and deck configuration, built to your specification.' },
  { title: 'Export pallets', body: 'ISPM 15 heat treated and IPPC-stamped for shipment to any destination worldwide.' },
  { title: 'Heavy-duty pallets', body: 'Reinforced load-rated pallets for machinery, drums and dense industrial cargo.' },
  { title: 'Euro pallets', body: '1200 × 800 EU-standard pallets, ISPM 15 compliant for European export.' },
  { title: 'Recurring supply', body: 'Weekly or monthly agreements with locked specification, pricing and delivery slots.' },
]

const serviceAreas = [
  'Colombo', 'Katunayake', 'Negombo', 'Seeduwa', 'Biyagama', 'Wattala',
  'Peliyagoda', 'Ja-Ela', 'Horana', 'Koggala', 'Galle', 'Kandy',
]

const industries = [
  { heading: 'Tea exporters', body: 'ISPM 15 pallets sized for tea chests and bulk cartons.' },
  { heading: 'Apparel & garments', body: 'Export pallets for garment factories in Katunayake, Biyagama and Seeduwa.' },
  { heading: 'Coconut & spice', body: 'Heat-treated pallets for coconut, cinnamon and spice exporters.' },
  { heading: 'Rubber & tyre', body: 'Heavy-duty pallets for dense crepe, RSS sheets and tyre exports.' },
  { heading: 'Seafood & food', body: 'Food-grade and export pallets for cold-chain and processed goods.' },
  { heading: 'Machinery & engineering', body: 'Load-rated pallets and custom bases for heavy equipment.' },
]

const faqs = [
  {
    q: 'Where can I buy wooden pallets in Sri Lanka?',
    a: 'CeyPall is a wooden pallet manufacturer and supplier in Sri Lanka. We supply standard, custom, export and ISPM 15 heat-treated pallets directly from our factory at 1088 Colombo Road, Daluwakotuwa, and deliver island-wide. Request a quotation with your dimensions, quantity and application and we will price and schedule your order.',
  },
  {
    q: 'Do you supply pallets in small quantities?',
    a: 'Yes. We supply one-off orders as well as recurring weekly and monthly supply contracts. For very small quantities we recommend confirming your specification early so we can schedule production alongside other batches.',
  },
  {
    q: 'Can CeyPall handle recurring pallet supply?',
    a: 'Yes. Many CeyPall customers run recurring supply — weekly, monthly or shipment-linked — with agreed specifications, pricing and delivery windows. Recurring supply lets us pre-buy timber, maintain jigs for your specification and hold buffer stock for urgent releases.',
  },
  {
    q: 'Do you deliver pallets across Sri Lanka?',
    a: 'Yes. We deliver island-wide, with regular movements to Colombo, Katunayake, Negombo, Seeduwa, Biyagama, Wattala, Peliyagoda, Ja-Ela, Horana, Koggala and Galle. Delivery is quoted with the order based on distance, quantity and vehicle type.',
  },
  {
    q: 'What is the difference between a pallet manufacturer and a pallet supplier?',
    a: 'A pallet supplier resells pallets sourced from other producers. A pallet manufacturer builds them. CeyPall is both — we manufacture at our own facility, so specification, timber, treatment and quality are controlled in-house rather than passed through a middleman.',
  },
]

export default function PalletSupplierSriLankaPage() {
  return (
    <>
      <SchemaScript schema={serviceJsonLd} />
      <SchemaScript schema={faqJsonLd} />
      <SchemaScript schema={breadcrumbJsonLd} />
      <SchemaScript schema={speakableJsonLd} />

      <nav aria-label="Breadcrumb" className="bg-cream border-b border-warm-gray">
        <div className="container-content py-3">
          <ol className="flex items-center gap-2 font-body text-xs text-charcoal/50">
            <li><Link href="/" className="hover:text-accent transition-colors duration-150">Home</Link></li>
            <li aria-hidden="true" className="select-none">›</li>
            <li className="text-charcoal/80 font-medium">Pallet Supplier Sri Lanka</li>
          </ol>
        </div>
      </nav>

      <section className="wood-texture section-padding">
        <div className="container-content">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <FadeUp>
              <div>
                <p className="font-body text-xs font-semibold tracking-[0.15em] uppercase text-accent mb-4">
                  Manufacturer + Supplier
                </p>
                <h1 className="font-display text-display-lg text-cream">
                  Pallet Supplier in Sri Lanka
                </h1>
                <span className="block w-10 h-0.5 bg-accent mt-4 mb-5" />
                <p className="font-body text-base text-cream/80 leading-relaxed mb-8">
                  CeyPall is a <strong className="text-cream">wooden pallet manufacturer and supplier</strong> based in Daluwakotuwa. We supply standard, custom,{' '}
                  <Link href="/export-pallet-manufacturer-sri-lanka" className="text-accent/90 hover:text-accent underline underline-offset-2 transition-colors">
                    export
                  </Link>{' '}
                  and{' '}
                  <Link href="/ispm-15-certification-sri-lanka" className="text-accent/90 hover:text-accent underline underline-offset-2 transition-colors">
                    ISPM 15
                  </Link>{' '}
                  heat-treated pallets — one-off orders and recurring supply, delivered island-wide.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button href="/contact" variant="primary" size="lg">Request a Quotation →</Button>
                  <Button href="/products" variant="outline-light" size="lg">View all products</Button>
                </div>
              </div>
            </FadeUp>

            <FadeUp delay={0.12}>
              <div className="aspect-[4/3] relative overflow-hidden">
                <Image
                  src="/Storage.png"
                  alt="Wooden pallets stacked at CeyPall factory — Sri Lanka pallet supplier"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      <section className="section-padding cream-texture">
        <div className="container-content">
          <AnswerBlock question="In short: how do I buy pallets from CeyPall?">
            Send us your <strong>dimensions, quantity, load requirement, treatment (export or domestic) and delivery location</strong>. We quote from our factory, schedule production, and deliver island-wide. We handle one-off orders and recurring weekly or monthly supply.
          </AnswerBlock>

          <div className="max-w-3xl">
            <FadeUp>
              <SectionHeader eyebrow="How supply works" title="Manufacturer, Not a Middleman" />
              <div className="space-y-4 font-body text-sm text-charcoal/70 leading-relaxed">
                <p className="faq-answer">
                  Because CeyPall manufactures in-house, every specification — timber species, board thickness, deck configuration, treatment — is set at production, not passed through a reseller. That gives you a shorter quotation-to-delivery cycle, consistent quality across batches and a single point of accountability from timber to delivery.
                </p>
                <p>
                  For repeat buyers we set up recurring supply agreements with locked specifications, agreed pricing and pre-scheduled deliveries. See our{' '}
                  <Link href="/wholesale-pallets-sri-lanka" className="text-accent underline underline-offset-2 hover:text-accent-hover transition-colors">
                    wholesale pallet
                  </Link>{' '}
                  page for bulk supply.
                </p>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      <section className="section-padding bg-warm-gray/40">
        <div className="container-content">
          <FadeUp>
            <SectionHeader eyebrow="What we supply" title="Pallet Supply Options" />
          </FadeUp>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-warm-gray">
            {supplyOptions.map(({ title, body }, i) => (
              <FadeUp key={title} delay={i * 0.06}>
                <div className="bg-cream p-8 flex flex-col gap-3 h-full">
                  <div className="w-6 h-6 bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-3.5 h-3.5 text-accent" viewBox="0 0 14 14" fill="none">
                      <path d="M2 7l3.5 3.5L12 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <h3 className="font-display text-base font-semibold text-primary">{title}</h3>
                  <p className="font-body text-sm text-charcoal/65 leading-relaxed">{body}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding cream-texture">
        <div className="container-content">
          <FadeUp>
            <SectionHeader eyebrow="Delivery" title="Island-Wide Service Areas" subtitle="Regular delivery routes across Sri Lanka. Other locations quoted on request." />
          </FadeUp>
          <FadeUp delay={0.1}>
            <div className="mt-10 flex flex-wrap gap-3 max-w-3xl">
              {serviceAreas.map((area) => (
                <span key={area} className="inline-flex items-center px-4 py-2 bg-white border border-warm-gray font-body text-sm text-charcoal/80">
                  {area}
                </span>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      <section className="section-padding bg-warm-gray/40">
        <div className="container-content">
          <FadeUp>
            <SectionHeader eyebrow="Industries served" title="Who We Supply" />
          </FadeUp>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-warm-gray">
            {industries.map(({ heading, body }, i) => (
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
          <FadeUp>
            <SectionHeader eyebrow="Common questions" title="Pallet Supply FAQs" />
          </FadeUp>
          <FadeUp delay={0.08}>
            <div className="mt-10 max-w-3xl divide-y divide-warm-gray border-t border-b border-warm-gray">
              {faqs.map(({ q, a }) => (
                <details key={q} className="group py-1">
                  <summary className="flex items-center justify-between gap-4 cursor-pointer list-none py-6 [&::-webkit-details-marker]:hidden">
                    <h3 className="font-display text-base font-semibold text-primary">{q}</h3>
                    <span className="flex-shrink-0 w-6 h-6 rounded-full border border-warm-gray flex items-center justify-center transition-transform duration-200 group-open:rotate-45">
                      <svg className="w-3 h-3 text-charcoal/60" viewBox="0 0 12 12" fill="none">
                        <path d="M6 2v8M2 6h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                      </svg>
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
          { href: '/export-pallet-manufacturer-sri-lanka', title: 'Export Pallet Manufacturer', description: 'ISPM 15 heat-treated pallets built for export.' },
          { href: '/pallet-pricing-sri-lanka', title: 'Pallet Pricing', description: 'What drives wooden pallet cost in Sri Lanka.' },
          { href: '/wholesale-pallets-sri-lanka', title: 'Wholesale Pallets', description: 'Bulk supply pricing and recurring contracts.' },
          { href: '/custom-wooden-pallets-sri-lanka', title: 'Custom Pallets', description: 'Any dimension, load rating and entry type.' },
        ]}
      />

      <section className="bg-accent py-20">
        <div className="container-content">
          <FadeUp>
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="font-display text-display-md text-white">Get a Pallet Supply Quote</h2>
              <span className="block w-10 h-0.5 bg-white/40 mt-4 mb-5 mx-auto" />
              <p className="font-body text-base text-white/80 leading-relaxed mb-8">
                One-off orders or recurring supply — manufactured in Sri Lanka, delivered island-wide.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button href="/contact" variant="outline-light" size="lg">Request a quotation →</Button>
                <a href="tel:+94714711417" className="inline-flex items-center gap-2 font-body font-semibold text-base text-white/90 hover:text-white transition-colors duration-200">
                  <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none">
                    <path d="M3 2h3l1 3-1.5 1.5c.9 1.8 2.2 3.1 4 4L11 9l3 1v3a1 1 0 01-1 1C5.4 14 2 10.6 2 3a1 1 0 011-1z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
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
