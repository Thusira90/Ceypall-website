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
  title: 'Heavy-Duty Pallets Sri Lanka | Load-Rated Wooden Pallets — CeyPall',
  description:
    'Heavy-duty wooden pallets built in Sri Lanka for machinery, drums and dense cargo. Load-rated 1,500–2,000 kg+, reinforced deck and stringers. ISPM 15 or VPI-treated.',
  twitter: {
    description:
      'CeyPall heavy-duty wooden pallets — load-rated for machinery, drums and heavy industrial cargo. Manufactured in Sri Lanka, delivered island-wide.',
    images: ['/OPENGIMAGE.jpg'],
  },
  alternates: {
    canonical: 'https://www.ceypall.com/heavy-duty-pallets-sri-lanka',
  },
  openGraph: {
    title: 'Heavy-Duty Wooden Pallets Sri Lanka | CeyPall',
    description:
      'Heavy-duty load-rated wooden pallets for machinery, drums and dense cargo. ISPM 15 heat treated for export or VPI-treated for storage. Made in Sri Lanka.',
    url: 'https://www.ceypall.com/heavy-duty-pallets-sri-lanka',
    images: [
      { url: '/OPENGIMAGE.jpg', width: 1200, height: 630, alt: 'CeyPall heavy-duty wooden pallets' },
    ],
  },
}

const speakableJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Heavy-Duty Pallets Sri Lanka | CeyPall',
  url: 'https://www.ceypall.com/heavy-duty-pallets-sri-lanka',
  speakable: { '@type': 'SpeakableSpecification', cssSelector: ['h1', 'h2', '.faq-answer'] },
}

const productJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'Heavy-Duty Wooden Pallet',
  description:
    'Load-rated heavy-duty wooden pallet manufactured in Sri Lanka. Reinforced deck boards and stringers for 1,500–2,000 kg+ static load. ISPM 15 heat treated or VPI-treated.',
  image: 'https://www.ceypall.com/Storage.png',
  brand: { '@type': 'Brand', name: 'CeyPall' },
  category: 'Heavy-Duty Wooden Pallets',
  offers: {
    '@type': 'AggregateOffer',
    priceCurrency: 'LKR',
    lowPrice: '3250.00',
    highPrice: '8750.00',
    availability: 'https://schema.org/InStock',
    url: 'https://www.ceypall.com/heavy-duty-pallets-sri-lanka',
    seller: { '@id': 'https://www.ceypall.com/#organization' },
  },
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is a heavy-duty wooden pallet?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A heavy-duty wooden pallet is a load-rated pallet built with thicker deck boards, wider stringers or block-style framing so it can safely carry 1,500 kg or more. It is designed for machinery, drums, tyres and other dense industrial cargo where a standard pallet would deflect or fail.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much weight can a heavy-duty pallet hold?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'CeyPall heavy-duty pallets are typically rated for 1,500–2,000 kg static load, with higher capacities available on request. The exact figure depends on timber species, board thickness, stringer size and deck configuration. We design and build to your specified static, dynamic and racking loads.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between a heavy-duty pallet and a standard pallet?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Standard export pallets are optimised for cost and light-to-medium cargo — typically up to 1,000–1,500 kg. Heavy-duty pallets use thicker boards (often 22–25 mm+ instead of 15–18 mm), reinforced stringers and tighter deck spacing to carry heavier, denser loads without failure over repeated handling.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can heavy-duty pallets be used for export?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Heavy-duty pallets can be heat treated to ISPM 15 and IPPC-stamped just like standard export pallets. This is common for machinery, engineering equipment and tyre exports where cargo weight and international shipping both apply.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are heavy-duty pallets suitable for racking?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, provided the pallet is specified for racking. Racking load is different from static or dynamic load because the pallet is only supported at its edges on the beam. Tell us your racking type, beam spacing and rated load and we will design the deck and stringer to bear that load without deflection.',
      },
    },
  ],
}

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.ceypall.com/' },
    { '@type': 'ListItem', position: 2, name: 'Products', item: 'https://www.ceypall.com/products' },
    { '@type': 'ListItem', position: 3, name: 'Heavy-Duty Pallets Sri Lanka', item: 'https://www.ceypall.com/heavy-duty-pallets-sri-lanka' },
  ],
}

const loadClasses = [
  { grade: 'Heavy duty', load: '1,500–2,000 kg', use: 'Machinery, engineering equipment, dense industrial cargo.' },
  { grade: 'Extra heavy duty', load: '2,000–2,500 kg', use: 'Tyres, drums, heavy castings, bulk metal parts.' },
  { grade: 'Custom heavy build', load: '2,500 kg+', use: 'Specified per project — timber and framing engineered to load.' },
]

const specDrivers = [
  { heading: 'Timber species & grade', body: 'Denser, higher-grade timber carries more load per unit thickness and resists compression failure under repeated handling.' },
  { heading: 'Deck board thickness', body: 'Heavy-duty decks typically use 22–25 mm+ boards versus 15–18 mm for standard export pallets — the deck resists bending under concentrated loads.' },
  { heading: 'Stringer configuration', body: 'Wider or taller stringers, or block framing, control how load is transferred to the floor and forklift and prevent sag.' },
  { heading: 'Deck spacing', body: 'Tighter top-deck spacing distributes point loads across more boards, protecting fragile or narrow-footprint cargo.' },
  { heading: 'Entry type', body: 'Four-way entry gives handling flexibility; two-way entry with continuous stringers is often stiffer for heavy static loads.' },
  { heading: 'Bottom deck', body: 'A full or reinforced bottom deck is essential for racking and stacked storage — it prevents diagonal deflection under load.' },
]

const applications = [
  { heading: 'Machinery & engineering', body: 'Load-rated bases for gearboxes, motors, compressors, castings and fabricated assemblies.' },
  { heading: 'Drum & IBC handling', body: 'Four-drum and IBC-format pallets built to bear liquid chemical and lubricant loads securely.' },
  { heading: 'Tyre & rubber', body: 'Dense crepe rubber, RSS sheets and tyre exports need pallets that will not fail mid-shipment.' },
  { heading: 'Metal & fabricated goods', body: 'Pallets for coils, plates, pipes and bulk metal parts, with reinforced decks for concentrated loads.' },
  { heading: 'Ceramics & tiles', body: 'Heavy stacked loads on tight deck spacing to prevent point-load damage.' },
  { heading: 'Food & beverage bulk', body: 'Bulk food-grade loads that combine weight with hygiene requirements.' },
]

const faqs = [
  {
    q: 'What is a heavy-duty wooden pallet?',
    a: 'A heavy-duty wooden pallet is a load-rated pallet built with thicker deck boards, wider stringers or block framing so it can safely carry 1,500 kg or more. It is designed for machinery, drums, tyres and other dense industrial cargo where a standard pallet would deflect or fail.',
  },
  {
    q: 'How much weight can a heavy-duty pallet hold?',
    a: 'CeyPall heavy-duty pallets are typically rated for 1,500–2,000 kg static load, with higher capacities available on request. The exact figure depends on timber species, board thickness, stringer size and deck configuration. We design and build to your specified static, dynamic and racking loads.',
  },
  {
    q: 'What is the difference between a heavy-duty pallet and a standard pallet?',
    a: 'Standard export pallets are optimised for cost and light-to-medium cargo — typically up to 1,000–1,500 kg. Heavy-duty pallets use thicker boards (often 22–25 mm+ instead of 15–18 mm), reinforced stringers and tighter deck spacing to carry heavier, denser loads without failure over repeated handling.',
  },
  {
    q: 'Can heavy-duty pallets be used for export?',
    a: 'Yes. Heavy-duty pallets can be heat treated to ISPM 15 and IPPC-stamped just like standard export pallets. This is common for machinery, engineering equipment and tyre exports where cargo weight and international shipping both apply.',
  },
  {
    q: 'Are heavy-duty pallets suitable for racking?',
    a: 'Yes, provided the pallet is specified for racking. Racking load is different from static or dynamic load because the pallet is only supported at its edges on the beam. Tell us your racking type, beam spacing and rated load and we will design the deck and stringer to bear that load without deflection.',
  },
]

export default function HeavyDutyPalletsSriLankaPage() {
  return (
    <>
      <SchemaScript schema={productJsonLd} />
      <SchemaScript schema={faqJsonLd} />
      <SchemaScript schema={breadcrumbJsonLd} />
      <SchemaScript schema={speakableJsonLd} />

      <nav aria-label="Breadcrumb" className="bg-cream border-b border-warm-gray">
        <div className="container-content py-3">
          <ol className="flex items-center gap-2 font-body text-xs text-charcoal/50">
            <li><Link href="/" className="hover:text-accent transition-colors duration-150">Home</Link></li>
            <li aria-hidden="true" className="select-none">›</li>
            <li><Link href="/products" className="hover:text-accent transition-colors duration-150">Products</Link></li>
            <li aria-hidden="true" className="select-none">›</li>
            <li className="text-charcoal/80 font-medium">Heavy-Duty Pallets Sri Lanka</li>
          </ol>
        </div>
      </nav>

      <section className="wood-texture section-padding">
        <div className="container-content">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <FadeUp>
              <div>
                <p className="font-body text-xs font-semibold tracking-[0.15em] uppercase text-accent mb-4">
                  Load-Rated 1,500–2,000 kg+
                </p>
                <h1 className="font-display text-display-lg text-cream">
                  Heavy-Duty Wooden Pallets in Sri Lanka
                </h1>
                <span className="block w-10 h-0.5 bg-accent mt-4 mb-5" />
                <p className="font-body text-base text-cream/80 leading-relaxed mb-8">
                  Reinforced <strong className="text-cream">heavy-duty wooden pallets</strong> for machinery, drums and dense cargo — thicker decks, wider stringers, engineered for high static and racking loads.{' '}
                  <Link href="/heat-treated-pallets" className="text-accent/90 hover:text-accent underline underline-offset-2 transition-colors">
                    Heat treated
                  </Link>{' '}
                  for export or VPI-treated for storage.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button href="/contact" variant="primary" size="lg">Request a Quotation →</Button>
                  <Button href="/pallet-load-capacity" variant="outline-light" size="lg">Pallet load capacity guide</Button>
                </div>
              </div>
            </FadeUp>

            <FadeUp delay={0.12}>
              <div className="aspect-[4/3] relative overflow-hidden">
                <Image
                  src="/Storage.png"
                  alt="Heavy-duty wooden pallets bearing industrial machinery load — manufactured by CeyPall, Sri Lanka"
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
          <AnswerBlock question="In short: what is a heavy-duty wooden pallet?">
            A load-rated pallet built with thicker deck boards (typically <strong>22–25 mm+</strong>), reinforced stringers and tighter deck spacing so it can safely bear <strong>1,500 kg or more</strong>. Used for machinery, drums, tyres and dense industrial cargo where a standard pallet would deflect or fail.
          </AnswerBlock>

          <div className="max-w-3xl">
            <FadeUp>
              <SectionHeader eyebrow="Definition" title="Built for Weight, Not Just Volume" />
              <div className="space-y-4 font-body text-sm text-charcoal/70 leading-relaxed">
                <p className="faq-answer">
                  Standard export pallets are engineered for cost and light-to-medium cargo. A heavy-duty pallet takes the same footprint and re-engineers every component — timber grade, board thickness, stringer size, deck spacing and bottom deck — to bear heavier loads through repeated handling, stacking and racking.
                </p>
                <p>
                  CeyPall builds heavy-duty pallets to a stated static load, dynamic load and (where required) racking load. Tell us how the pallet will be used and we will specify the timber, thickness and framing that meet the requirement — see the{' '}
                  <Link href="/pallet-load-capacity" className="text-accent underline underline-offset-2 hover:text-accent-hover transition-colors">
                    pallet load capacity guide
                  </Link>{' '}
                  for the underlying engineering.
                </p>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      <section className="section-padding bg-warm-gray/40">
        <div className="container-content">
          <FadeUp>
            <SectionHeader eyebrow="Load classes" title="Heavy-Duty Pallet Ratings" subtitle="Common rating bands we manufacture. Exact figures are set at design against your specified static, dynamic and racking loads." />
          </FadeUp>
          <FadeUp delay={0.1}>
            <div className="mt-10 border border-warm-gray overflow-x-auto max-w-3xl">
              <table className="w-full border-collapse min-w-[520px]">
                <thead>
                  <tr className="bg-primary">
                    <th className="text-left font-body text-xs font-semibold tracking-[0.12em] uppercase text-accent px-6 py-4">Class</th>
                    <th className="text-left font-body text-xs font-semibold tracking-[0.12em] uppercase text-accent px-6 py-4">Static load</th>
                    <th className="text-left font-body text-xs font-semibold tracking-[0.12em] uppercase text-accent px-6 py-4">Typical use</th>
                  </tr>
                </thead>
                <tbody>
                  {loadClasses.map((row, i) => (
                    <tr key={row.grade} className={`border-t border-warm-gray ${i % 2 === 0 ? 'bg-white' : 'bg-cream'}`}>
                      <td className="font-body text-sm font-semibold text-primary px-6 py-4">{row.grade}</td>
                      <td className="font-body text-sm text-charcoal/70 px-6 py-4">{row.load}</td>
                      <td className="font-body text-sm text-charcoal/65 px-6 py-4">{row.use}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </FadeUp>
        </div>
      </section>

      <section className="section-padding cream-texture">
        <div className="container-content">
          <FadeUp>
            <SectionHeader eyebrow="What sets the rating" title="Six Specification Drivers" />
          </FadeUp>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-warm-gray">
            {specDrivers.map(({ heading, body }, i) => (
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
            <SectionHeader eyebrow="Applications" title="Where Heavy-Duty Pallets Are Used" />
          </FadeUp>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-warm-gray">
            {applications.map(({ heading, body }, i) => (
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
            <SectionHeader eyebrow="Common questions" title="Heavy-Duty Pallet FAQs" />
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
          { href: '/industrial-pallets-sri-lanka', title: 'Industrial Pallets', description: 'Load-rated pallets across duty classes for manufacturing and warehousing.' },
          { href: '/pallet-load-capacity', title: 'Pallet Load Capacity', description: 'How much weight a wooden pallet can hold — and what sets the rating.' },
          { href: '/custom-wooden-pallets-sri-lanka', title: 'Custom Wooden Pallets', description: 'Bespoke pallets built to any size, load and entry type.' },
          { href: '/pallets-for-rubber-export', title: 'Rubber Export Pallets', description: 'Heavy-duty pallets for crepe rubber, RSS sheets and latex.' },
        ]}
      />

      <section className="bg-accent py-20">
        <div className="container-content">
          <FadeUp>
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="font-display text-display-md text-white">Order Heavy-Duty Pallets</h2>
              <span className="block w-10 h-0.5 bg-white/40 mt-4 mb-5 mx-auto" />
              <p className="font-body text-base text-white/80 leading-relaxed mb-8">
                Reinforced, load-rated wooden pallets — manufactured in Sri Lanka, delivered island-wide.
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
