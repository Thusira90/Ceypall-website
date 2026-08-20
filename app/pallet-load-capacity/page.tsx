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
  title: 'Pallet Load Capacity | How Much Weight Can a Wooden Pallet Hold?',
  description:
    'Wooden pallet load capacity explained — static, dynamic and racking loads, timber grade, board thickness and stringer design. Engineering guide from CeyPall, Sri Lanka.',
  twitter: {
    description:
      'How much weight can a wooden pallet hold? Static vs dynamic vs racking load, and the six factors that set the rating.',
    images: ['/OPENGIMAGE.jpg'],
  },
  alternates: {
    canonical: 'https://www.ceypall.com/pallet-load-capacity',
  },
  openGraph: {
    title: 'Pallet Load Capacity Guide | CeyPall',
    description:
      'Static, dynamic and racking loads explained — plus the timber, thickness and stringer choices that determine what a wooden pallet can safely hold.',
    url: 'https://www.ceypall.com/pallet-load-capacity',
    images: [
      { url: '/OPENGIMAGE.jpg', width: 1200, height: 630, alt: 'CeyPall pallet load capacity guide' },
    ],
  },
}

const speakableJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Pallet Load Capacity | How Much Weight Can a Wooden Pallet Hold?',
  url: 'https://www.ceypall.com/pallet-load-capacity',
  speakable: { '@type': 'SpeakableSpecification', cssSelector: ['h1', 'h2', '.faq-answer'] },
}

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TechArticle',
  headline: 'Pallet Load Capacity: How Much Weight Can a Wooden Pallet Hold?',
  description:
    'Engineering guide to wooden pallet load ratings — static, dynamic and racking load — and the timber, board thickness and stringer configuration that determine them.',
  author: { '@id': 'https://www.ceypall.com/#organization' },
  publisher: { '@id': 'https://www.ceypall.com/#organization' },
  mainEntityOfPage: 'https://www.ceypall.com/pallet-load-capacity',
  image: 'https://www.ceypall.com/OPENGIMAGE.jpg',
  inLanguage: 'en',
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much weight can a wooden pallet hold?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A standard wooden pallet typically carries 1,000–1,500 kg static load. Heavy-duty pallets can be built to bear 2,000 kg or more. The exact rating depends on timber species, board thickness, stringer configuration, deck spacing and whether the pallet will be lifted, stacked or racked.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between static, dynamic and racking load?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Static load is the weight a pallet can hold sitting on a flat floor. Dynamic load is the weight it can safely carry while being lifted or moved by a forklift or pallet jack — typically lower than static load. Racking load is the weight the pallet can bear when supported only at its edges on rack beams, and it is usually the lowest of the three because the pallet spans an unsupported gap.',
      },
    },
    {
      '@type': 'Question',
      name: 'What determines pallet load capacity?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Timber species and grade, board thickness, stringer or block dimensions, deck spacing, entry type and bottom-deck configuration all determine load capacity. Denser timber and thicker boards carry more load; tighter deck spacing distributes point loads; reinforced stringers control deflection under weight.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does moisture content affect pallet load capacity?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Wet or high-moisture timber loses stiffness, and the pallet will deflect and fail at loads it would otherwise bear. Heat-treated pallets are dried during processing; long-term outdoor exposure can raise moisture again. For accurate specification, timber should be at production-standard moisture content when the pallet is loaded.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I specify load capacity when ordering?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Tell CeyPall four things: the maximum weight the pallet will carry, whether it will be lifted or moved (dynamic), whether it will be racked, and how the load is distributed (evenly across the deck or on a narrow footprint). We will specify the timber, board thickness and stringer configuration to meet the requirement.',
      },
    },
  ],
}

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.ceypall.com/' },
    { '@type': 'ListItem', position: 2, name: 'Knowledge Centre', item: 'https://www.ceypall.com/knowledge-centre' },
    { '@type': 'ListItem', position: 3, name: 'Pallet Load Capacity', item: 'https://www.ceypall.com/pallet-load-capacity' },
  ],
}

const loadTypes = [
  {
    heading: 'Static load',
    body: 'Weight the pallet holds sitting on a flat floor. Highest of the three ratings — the deck is fully supported. Example: a heavy-duty pallet may hold 2,000 kg static.',
  },
  {
    heading: 'Dynamic load',
    body: 'Weight the pallet can safely carry while being moved by a forklift or pallet jack. Typically 40–60% of static load. This is the rating that matters for actual handling.',
  },
  {
    heading: 'Racking load',
    body: 'Weight the pallet can bear when supported only at its edges on rack beams. Usually the lowest rating because the pallet spans an unsupported gap and deflects under weight.',
  },
]

const factors = [
  { heading: 'Timber species', body: 'Denser hardwoods carry more load per unit thickness than softer species. Grade (knots, splits, grain) also affects strength.' },
  { heading: 'Board thickness', body: 'A 22–25 mm deck board resists bending far more than a 15–18 mm board — thickness scales stiffness non-linearly.' },
  { heading: 'Stringer / block size', body: 'Wider or taller stringers control how load transfers to the floor and reduce mid-span sag under weight.' },
  { heading: 'Deck spacing', body: 'Tighter top-deck spacing distributes point loads across more boards, protecting fragile or narrow-footprint cargo.' },
  { heading: 'Entry type', body: 'Two-way pallets with continuous stringers are typically stiffer under heavy static loads; four-way gives handling flexibility.' },
  { heading: 'Bottom deck', body: 'A full or reinforced bottom deck resists diagonal deflection and is essential for racking and stacked storage.' },
]

const failureModes = [
  { title: 'Deck-board fracture', body: 'Board bends beyond its elastic limit under a point load — usually from an under-specified board thickness for the cargo.' },
  { title: 'Stringer crack', body: 'Stringer splits along the grain, often at a nail or notch, under repeated dynamic loads or racking deflection.' },
  { title: 'Nail pull-out', body: 'Cyclic handling loosens nails, boards separate, and the load shifts. Prevented by correct nail pattern and timber density.' },
  { title: 'Racking deflection', body: 'Pallet sags in mid-span on the rack beam, dropping cargo or fouling the rack below. Caused by racking-rated load being exceeded, or by wet timber.' },
]

const faqs = [
  {
    q: 'How much weight can a wooden pallet hold?',
    a: 'A standard wooden pallet typically carries 1,000–1,500 kg static load. Heavy-duty pallets can be built to bear 2,000 kg or more. The exact rating depends on timber species, board thickness, stringer configuration, deck spacing and whether the pallet will be lifted, stacked or racked.',
  },
  {
    q: 'What is the difference between static, dynamic and racking load?',
    a: 'Static load is the weight a pallet can hold sitting on a flat floor. Dynamic load is the weight it can safely carry while being lifted or moved by a forklift or pallet jack — typically lower than static load. Racking load is the weight the pallet can bear when supported only at its edges on rack beams, and it is usually the lowest of the three because the pallet spans an unsupported gap.',
  },
  {
    q: 'What determines pallet load capacity?',
    a: 'Timber species and grade, board thickness, stringer or block dimensions, deck spacing, entry type and bottom-deck configuration all determine load capacity. Denser timber and thicker boards carry more load; tighter deck spacing distributes point loads; reinforced stringers control deflection under weight.',
  },
  {
    q: 'Does moisture content affect pallet load capacity?',
    a: 'Yes. Wet or high-moisture timber loses stiffness, and the pallet will deflect and fail at loads it would otherwise bear. Heat-treated pallets are dried during processing; long-term outdoor exposure can raise moisture again. For accurate specification, timber should be at production-standard moisture content when the pallet is loaded.',
  },
  {
    q: 'How do I specify load capacity when ordering?',
    a: 'Tell CeyPall four things: the maximum weight the pallet will carry, whether it will be lifted or moved (dynamic), whether it will be racked, and how the load is distributed (evenly across the deck or on a narrow footprint). We will specify the timber, board thickness and stringer configuration to meet the requirement.',
  },
]

export default function PalletLoadCapacityPage() {
  return (
    <>
      <SchemaScript schema={articleJsonLd} />
      <SchemaScript schema={faqJsonLd} />
      <SchemaScript schema={breadcrumbJsonLd} />
      <SchemaScript schema={speakableJsonLd} />

      <nav aria-label="Breadcrumb" className="bg-cream border-b border-warm-gray">
        <div className="container-content py-3">
          <ol className="flex items-center gap-2 font-body text-xs text-charcoal/50">
            <li><Link href="/" className="hover:text-accent transition-colors duration-150">Home</Link></li>
            <li aria-hidden="true" className="select-none">›</li>
            <li><Link href="/knowledge-centre" className="hover:text-accent transition-colors duration-150">Knowledge Centre</Link></li>
            <li aria-hidden="true" className="select-none">›</li>
            <li className="text-charcoal/80 font-medium">Pallet Load Capacity</li>
          </ol>
        </div>
      </nav>

      <section className="wood-texture section-padding">
        <div className="container-content">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <FadeUp>
              <div>
                <p className="font-body text-xs font-semibold tracking-[0.15em] uppercase text-accent mb-4">
                  Engineering Guide
                </p>
                <h1 className="font-display text-display-lg text-cream">
                  How Much Weight Can a Wooden Pallet Hold?
                </h1>
                <span className="block w-10 h-0.5 bg-accent mt-4 mb-5" />
                <p className="font-body text-base text-cream/80 leading-relaxed mb-8">
                  Wooden pallet load capacity depends on three different load types — <strong className="text-cream">static, dynamic and racking</strong> — and six specification choices at manufacture. Here is how CeyPall engineers pallets to a stated load.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button href="/contact" variant="primary" size="lg">Get an engineered quote →</Button>
                  <Button href="/heavy-duty-pallets-sri-lanka" variant="outline-light" size="lg">Heavy-duty pallets</Button>
                </div>
              </div>
            </FadeUp>

            <FadeUp delay={0.12}>
              <div className="aspect-[4/3] relative overflow-hidden">
                <Image
                  src="/Storage.png"
                  alt="Load-rated wooden pallets bearing stacked industrial cargo"
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
          <AnswerBlock question="In short: how much weight can a wooden pallet hold?">
            A standard wooden pallet holds <strong>1,000–1,500 kg static load</strong>. Heavy-duty builds carry <strong>2,000 kg or more</strong>. Dynamic (handling) load is typically 40–60% of static, and racking load is lower again — always specify the rating that matches how the pallet will actually be used.
          </AnswerBlock>
        </div>
      </section>

      <section className="section-padding bg-warm-gray/40">
        <div className="container-content">
          <FadeUp>
            <SectionHeader eyebrow="Three load types" title="Static vs Dynamic vs Racking" subtitle="A pallet has three different capacity numbers. Choosing the right one for your application prevents mid-shipment failures." />
          </FadeUp>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-px bg-warm-gray">
            {loadTypes.map(({ heading, body }, i) => (
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
            <SectionHeader eyebrow="What sets the rating" title="Six Specification Factors" />
          </FadeUp>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-warm-gray">
            {factors.map(({ heading, body }, i) => (
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

      <section className="section-padding bg-warm-gray/40">
        <div className="container-content">
          <FadeUp>
            <SectionHeader eyebrow="Failure modes" title="How Overloaded Pallets Fail" subtitle="Understanding failure modes is the fastest way to specify the right pallet the first time." />
          </FadeUp>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-px bg-warm-gray max-w-4xl">
            {failureModes.map(({ title, body }, i) => (
              <FadeUp key={title} delay={i * 0.06}>
                <div className="bg-cream p-8 flex flex-col gap-3 h-full">
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
            <SectionHeader eyebrow="Common questions" title="Load Capacity FAQs" />
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
          { href: '/heavy-duty-pallets-sri-lanka', title: 'Heavy-Duty Pallets', description: 'Load-rated pallets for machinery, drums and dense cargo.' },
          { href: '/industrial-pallets-sri-lanka', title: 'Industrial Pallets', description: 'Load-rated pallets across duty classes for manufacturing.' },
          { href: '/moisture-content-calculator', title: 'Moisture Content Calculator', description: 'Timber moisture affects stiffness — check yours.' },
          { href: '/custom-wooden-pallets-sri-lanka', title: 'Custom Pallets', description: 'Bespoke pallets engineered to your load requirement.' },
        ]}
      />

      <section className="bg-accent py-20">
        <div className="container-content">
          <FadeUp>
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="font-display text-display-md text-white">Need a Load-Rated Pallet?</h2>
              <span className="block w-10 h-0.5 bg-white/40 mt-4 mb-5 mx-auto" />
              <p className="font-body text-base text-white/80 leading-relaxed mb-8">
                Tell us your load, footprint and handling. We will engineer and quote the right specification.
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
