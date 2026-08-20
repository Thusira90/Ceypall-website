import type { Metadata } from 'next'
import Link from 'next/link'
import { FadeUp } from '@/components/ui/FadeUp'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { SchemaScript } from '@/components/ui/SchemaScript'
import { AnswerBlock } from '@/components/ui/AnswerBlock'
import { RelatedLinks } from '@/components/ui/RelatedLinks'
import { SpecificationCalculator } from '@/components/tools/SpecificationCalculator'

export const metadata: Metadata = {
  title: 'Pallet Specification Calculator | Recommended Board, Stringer & Treatment',
  description:
    'Enter your pallet dimensions, maximum load, entry type and application. Get an indicative CeyPall specification — board thickness, stringer, deck type and treatment.',
  alternates: { canonical: 'https://www.ceypall.com/pallet-specification-calculator' },
  openGraph: {
    title: 'Pallet Specification Calculator | CeyPall',
    description: 'Get an indicative pallet specification — board thickness, stringer, deck configuration and treatment — from your load and application.',
    url: 'https://www.ceypall.com/pallet-specification-calculator',
    images: [{ url: '/OPENGIMAGE.jpg', width: 1200, height: 630, alt: 'CeyPall pallet specification calculator' }],
  },
  twitter: { description: 'Enter your load and application — get an indicative pallet specification from CeyPall.', images: ['/OPENGIMAGE.jpg'] },
}

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.ceypall.com/' },
    { '@type': 'ListItem', position: 2, name: 'Pallet Specification Calculator', item: 'https://www.ceypall.com/pallet-specification-calculator' },
  ],
}

const webAppJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Pallet Specification Calculator',
  description: 'Free online calculator that recommends wooden pallet board thickness, stringer size, deck configuration and treatment from load, dimensions, entry type and application.',
  url: 'https://www.ceypall.com/pallet-specification-calculator',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  provider: { '@id': 'https://www.ceypall.com/#organization' },
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'How do you specify a wooden pallet?', acceptedAnswer: { '@type': 'Answer', text: 'A wooden pallet specification includes six things: dimensions (length × width), maximum load, entry type (two-way or four-way), deck configuration (single or double), treatment (ISPM 15 heat treatment, VPI or untreated) and application (export, domestic, racking or storage). Load and application drive the timber, board thickness and stringer choices.' } },
    { '@type': 'Question', name: 'What board thickness should a pallet use?', acceptedAnswer: { '@type': 'Answer', text: 'Light-duty pallets (up to 1,000 kg) commonly use 15 mm deck boards. Standard-duty pallets (1,000–1,500 kg) use 18 mm. Heavy-duty (1,500–2,000 kg) use 22 mm. Extra heavy-duty builds use 25 mm or more with reinforced stringers or block framing.' } },
    { '@type': 'Question', name: 'When should I choose VPI over ISPM 15 heat treatment?', acceptedAnswer: { '@type': 'Answer', text: 'ISPM 15 heat treatment is required for export — it kills pests but does not protect against future decay. VPI (vacuum pressure impregnation with Boron Borax) is a preservative treatment for pallets that stay in a warehouse long-term. If the pallet will be racked or stored for years, choose VPI. If it will be exported, choose ISPM 15.' } },
  ],
}

export default function SpecCalcPage() {
  return (
    <>
      <SchemaScript schema={breadcrumbJsonLd} />
      <SchemaScript schema={webAppJsonLd} />
      <SchemaScript schema={faqJsonLd} />

      <section className="wood-texture section-padding">
        <div className="container-content">
          <FadeUp>
            <SectionHeader
              as="h1"
              eyebrow="Free tool"
              title="Pallet Specification Calculator"
              subtitle="Enter your dimensions, load, entry type and application — get an indicative CeyPall specification, then confirm the final build with our engineering team."
              light
            />
          </FadeUp>
        </div>
      </section>

      <section className="section-padding cream-texture">
        <div className="container-content">
          <AnswerBlock question="In short: how do I specify a pallet?">
            Six inputs drive it: <strong>dimensions, load, entry type, deck configuration, treatment and application</strong>. This calculator maps them to CeyPall&apos;s build classes so you get a realistic board-thickness and stringer recommendation before you send an enquiry.
          </AnswerBlock>
          <FadeUp>
            <SpecificationCalculator />
          </FadeUp>
        </div>
      </section>

      <section className="section-padding bg-warm-gray/40">
        <div className="container-content max-w-3xl">
          <FadeUp>
            <h2 className="font-display text-2xl font-semibold text-primary mb-4">How the recommendation is set</h2>
            <p className="font-body text-sm text-charcoal/70 leading-relaxed mb-5">
              CeyPall builds pallets across four duty classes: light (up to 1,000 kg), standard (1,000–1,500 kg), heavy-duty (1,500–2,000 kg) and extra heavy-duty (2,000 kg+). Each class has a matched board thickness and stringer size that safely bears the rated load under normal handling.
            </p>
            <p className="font-body text-sm text-charcoal/70 leading-relaxed mb-5">
              Application then sets the deck configuration and treatment. Racking or long-term storage needs a double deck with full bottom boards; export applications need ISPM 15 heat treatment and IPPC stamping; warehouse-only pallets that need multi-year protection get VPI (vacuum pressure impregnation with Boron Borax).
            </p>
            <p className="font-body text-sm text-charcoal/70 leading-relaxed">
              This calculator gives you a defensible starting point. For a final specification and quotation, our engineering team confirms timber species, deck spacing, nail pattern and cost against your exact cargo and handling profile — see the{' '}
              <Link href="/pallet-load-capacity" className="text-accent hover:text-accent-hover underline underline-offset-2">
                pallet load capacity guide
              </Link>{' '}
              for the underlying engineering.
            </p>
          </FadeUp>
        </div>
      </section>

      <RelatedLinks
        links={[
          { href: '/pallet-load-capacity', title: 'Pallet Load Capacity', description: 'Static, dynamic and racking loads explained.' },
          { href: '/heavy-duty-pallets-sri-lanka', title: 'Heavy-Duty Pallets', description: 'Load-rated pallets for 1,500–2,000 kg+ cargo.' },
          { href: '/custom-wooden-pallets-sri-lanka', title: 'Custom Wooden Pallets', description: 'Bespoke pallets built to any dimension.' },
          { href: '/container-pallet-calculator', title: 'Container Calculator', description: 'How many pallets fit a 20ft or 40ft container.' },
        ]}
      />
    </>
  )
}
