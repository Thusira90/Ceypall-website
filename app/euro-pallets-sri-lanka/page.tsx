import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { FadeUp } from '@/components/ui/FadeUp'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Button } from '@/components/ui/Button'
import { SchemaScript } from '@/components/ui/SchemaScript'

export const metadata: Metadata = {
  title: 'Euro Pallets Sri Lanka | 1200 × 800 mm EUR Pallets',
  description:
    'CeyPall manufactures Euro-standard 1200 × 800 mm wooden pallets in Sri Lanka — ISPM 15 heat treated and IPPC stamped for exports to the EU and UK. Island-wide delivery.',
  twitter: {
    description:
      'Euro-size (1200 × 800 mm) wooden pallets manufactured in Sri Lanka. ISPM 15 heat treated, IPPC stamped for EU-bound exports. Custom quantities, island-wide delivery.',
  },
  alternates: {
    canonical: 'https://www.ceypall.com/euro-pallets-sri-lanka',
  },
  openGraph: {
    title: 'Euro Pallets Sri Lanka | CeyPall (Pvt) Ltd',
    description:
      'Euro-standard 1200 × 800 mm wooden pallets manufactured in Sri Lanka. ISPM 15 heat treated, IPPC stamped for EU and UK exports. Island-wide delivery.',
    url: 'https://www.ceypall.com/euro-pallets-sri-lanka',
  },
}

// ── Structured data ────────────────────────────────────────────────────────

const speakableJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Euro Pallets Sri Lanka | 1200 × 800 mm EUR Pallets',
  url: 'https://www.ceypall.com/euro-pallets-sri-lanka',
  speakable: {
    '@type': 'SpeakableSpecification',
    cssSelector: ['h1', 'h2', '.faq-answer'],
  },
}

const productJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'Euro Pallet (1200 × 800 mm) — ISPM 15 Heat Treated',
  description:
    'Euro-standard 1200 × 800 mm wooden pallet manufactured in Sri Lanka. Four-way entry, ISPM 15 heat treated to 56°C core temperature and IPPC stamped for export to the EU and UK.',
  image: 'https://www.ceypall.com/Euro%20Pallet2.jpg',
  brand: { '@type': 'Brand', name: 'CeyPall' },
  category: 'Wooden Pallets',
  offers: {
    '@type': 'AggregateOffer',
    priceCurrency: 'LKR',
    lowPrice: '2450.00',
    highPrice: '8750.00',
    availability: 'https://schema.org/InStock',
    url: 'https://www.ceypall.com/euro-pallets-sri-lanka',
    seller: { '@id': 'https://www.ceypall.com/#organization' },
  },
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is a Euro pallet?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A Euro pallet is a wooden pallet built to the European standard dimensions of 1200 × 800 mm with four-way forklift entry. It is the most widely used pallet size across the European Union and United Kingdom, designed to fit standard EU truck, rack and warehouse systems. CeyPall manufactures pallets to these exact dimensions, ISPM 15 heat treated for export.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are the dimensions of a Euro pallet?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A standard Euro pallet measures 1200 mm long × 800 mm wide, with a typical height of 144 mm and an unloaded weight of around 20–25 kg. It supports a working load of up to 1,500 kg. CeyPall builds Euro-size pallets to these dimensions and can adjust deck thickness and board count to match your load rating.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between a Euro pallet and an EPAL pallet?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '"Euro pallet" refers to the 1200 × 800 mm size standard. "EPAL" is a licensed certification mark issued by the European Pallet Association for pallets built to a controlled specification and entered into the EPAL exchange pool. CeyPall manufactures Euro-standard (1200 × 800 mm) pallets that are ISPM 15 heat treated and IPPC stamped for export — the dimensions your EU buyer expects — without the EPAL exchange licence.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are Euro pallets ISPM 15 certified at CeyPall?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Every Euro-size pallet CeyPall manufactures is heat treated to a core temperature of 56°C for at least 30 minutes and stamped with our registered IPPC mark. This makes them compliant with ISPM 15 and accepted at customs across the EU, UK and all IPPC member countries.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need Euro pallets to ship to the European Union?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You are not legally required to use the 1200 × 800 mm size, but most EU importers, retailers and distribution centres are built around it — their racking, trucks and handling equipment are sized for Euro pallets. Shipping on Euro-size pallets avoids re-palletisation charges at the destination and speeds up handling. The legal requirement is ISPM 15 heat treatment, which all CeyPall pallets meet.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much do Euro pallets cost in Sri Lanka?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Euro pallet prices in Sri Lanka depend on timber grade, deck configuration, load rating and order quantity. As a general guide CeyPall pallets range from approximately LKR 2,450 to LKR 8,750 per unit. Contact CeyPall with your quantity and specification for an exact quotation.',
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
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Euro Pallets Sri Lanka',
      item: 'https://www.ceypall.com/euro-pallets-sri-lanka',
    },
  ],
}

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Euro Pallet Manufacturing',
  description:
    'Manufacture of Euro-standard 1200 × 800 mm wooden pallets in Sri Lanka. ISPM 15 heat treated, IPPC stamped, with island-wide delivery for EU and UK exporters.',
  provider: { '@id': 'https://www.ceypall.com/#organization' },
  serviceType: 'Pallet Manufacturing',
  areaServed: { '@type': 'Country', name: 'Sri Lanka' },
}

// ── Page data ──────────────────────────────────────────────────────────────

const specs = [
  { label: 'Standard size', value: '1200 × 800 mm' },
  { label: 'Entry', value: 'Four-way' },
  { label: 'Typical height', value: '144 mm' },
  { label: 'Unloaded weight', value: '20–25 kg' },
  { label: 'Working load', value: 'Up to 1,500 kg' },
  { label: 'Treatment', value: 'ISPM 15 heat treatment (HT)' },
]

const comparisonRows = [
  { feature: 'Dimensions', euro: '1200 × 800 mm', iso: '1200 × 1000 mm', asia: '1100 × 1100 mm' },
  { feature: 'Primary market', euro: 'EU & UK', iso: 'Global / most common', asia: 'Asia & Australia' },
  { feature: 'Fits EU racking', euro: 'Yes — designed for it', iso: 'Partially', asia: 'No' },
  { feature: 'Typical cargo', euro: 'Apparel, consumer goods', iso: 'General export', asia: 'Drums, bulk packaging' },
  { feature: 'Entry', euro: 'Four-way', iso: 'Two-way or four-way', asia: 'Four-way' },
]

const useCases = [
  {
    heading: 'Apparel & Consumer Goods to the EU',
    body: 'European retailers and distribution centres are built around the 1200 × 800 mm footprint. Shipping garments and consumer goods on Euro-size pallets means your cargo slots straight into your buyer\'s racking without re-palletisation.',
  },
  {
    heading: 'UK Distribution',
    body: 'The Euro pallet is a default across UK warehousing and retail supply chains. For exporters supplying UK importers and third-party logistics providers, matching the expected footprint speeds up unloading and avoids handling surcharges.',
  },
  {
    heading: 'Mixed & Palletised Freight',
    body: 'Freight forwarders consolidating LCL and groupage cargo for European destinations often specify Euro pallets so shipments integrate cleanly with other palletised goods at the destination hub.',
  },
]

const faqs = [
  {
    q: 'What is a Euro pallet?',
    a: 'A Euro pallet is a wooden pallet built to the European standard dimensions of 1200 × 800 mm with four-way forklift entry. It is the most widely used pallet size across the EU and UK, designed to fit standard European truck, rack and warehouse systems. We manufacture pallets to these exact dimensions, ISPM 15 heat treated for export.',
  },
  {
    q: 'What are the dimensions of a Euro pallet?',
    a: 'A standard Euro pallet measures 1200 mm long × 800 mm wide, with a typical height of 144 mm and an unloaded weight of around 20–25 kg. It supports a working load of up to 1,500 kg. We can adjust deck thickness and board count to match your specific load rating.',
  },
  {
    q: 'What is the difference between a Euro pallet and an EPAL pallet?',
    a: '"Euro pallet" refers to the 1200 × 800 mm size standard. "EPAL" is a licensed certification mark issued by the European Pallet Association for pallets built to a controlled specification and entered into the EPAL exchange pool. We manufacture Euro-standard (1200 × 800 mm) pallets that are ISPM 15 heat treated and IPPC stamped for export — the dimensions your EU buyer expects — without the EPAL exchange licence.',
  },
  {
    q: 'Are your Euro pallets ISPM 15 certified?',
    a: 'Yes. Every Euro-size pallet we manufacture is heat treated to a core temperature of 56°C for at least 30 minutes and stamped with our registered IPPC mark. This makes them compliant with ISPM 15 and accepted at customs across the EU, UK and all IPPC member countries.',
  },
  {
    q: 'Do I need Euro pallets to ship to the European Union?',
    a: 'You are not legally required to use the 1200 × 800 mm size, but most EU importers and distribution centres are built around it — their racking, trucks and handling equipment are sized for Euro pallets. Shipping on Euro-size pallets avoids re-palletisation charges and speeds up handling. The legal requirement is ISPM 15 heat treatment, which all our pallets meet.',
  },
  {
    q: 'How much do Euro pallets cost?',
    a: 'Prices depend on timber grade, deck configuration, load rating and order quantity. As a general guide our pallets range from approximately LKR 2,450 to LKR 8,750 per unit. Contact us with your quantity and specification for an exact quotation.',
  },
]

// ── Page component ─────────────────────────────────────────────────────────

export default function EuroPalletsSriLankaPage() {
  return (
    <>
      {/* ── JSON-LD ─────────────────────────────────────────────────────── */}
      <SchemaScript schema={productJsonLd} />
      <SchemaScript schema={faqJsonLd} />
      <SchemaScript schema={breadcrumbJsonLd} />
      <SchemaScript schema={serviceJsonLd} />
      <SchemaScript schema={speakableJsonLd} />

      {/* ── Breadcrumb ──────────────────────────────────────────────────── */}
      <nav aria-label="Breadcrumb" className="bg-cream border-b border-warm-gray">
        <div className="container-content py-3">
          <ol className="flex items-center gap-2 font-body text-xs text-charcoal/50">
            <li>
              <Link href="/" className="hover:text-accent transition-colors duration-150">Home</Link>
            </li>
            <li aria-hidden="true" className="select-none">›</li>
            <li>
              <Link href="/products" className="hover:text-accent transition-colors duration-150">Products</Link>
            </li>
            <li aria-hidden="true" className="select-none">›</li>
            <li className="text-charcoal/80 font-medium">Euro Pallets Sri Lanka</li>
          </ol>
        </div>
      </nav>

      {/* ── Hero ────────────────────────────────────────────────────────── */}
      <section className="wood-texture section-padding">
        <div className="container-content">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <FadeUp>
              <div>
                <p className="font-body text-xs font-semibold tracking-[0.15em] uppercase text-accent mb-4">
                  1200 × 800 mm — ISPM 15 Certified
                </p>
                <h1 className="font-display text-display-lg text-cream">
                  Euro Pallets in Sri Lanka
                </h1>
                <span className="block w-10 h-0.5 bg-accent mt-4 mb-5" />
                <p className="font-body text-base text-cream/80 leading-relaxed mb-8">
                  CeyPall manufactures Euro-standard <strong className="text-cream">1200 × 800 mm</strong> wooden pallets in Sri Lanka —{' '}
                  <Link href="/heat-treated-pallets" className="text-accent/90 hover:text-accent underline underline-offset-2 transition-colors">
                    heat treated
                  </Link>{' '}
                  to ISPM 15 and IPPC stamped for export to the EU and UK. Four-way entry, built to fit European racking, delivered island-wide.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button href="/contact" variant="primary" size="lg">Request a Quotation →</Button>
                  <Button href="/products" variant="outline-light" size="lg">View all products</Button>
                </div>
              </div>
            </FadeUp>

            <FadeUp delay={0.12}>
              <div className="aspect-[1534/717] relative overflow-hidden bg-white">
                <Image
                  src="/Euro Pallet2.jpg"
                  alt="Euro-standard 1200 x 800 mm wooden pallet manufactured by CeyPall in Sri Lanka, ISPM 15 heat treated"
                  fill
                  className="object-contain object-center"
                  priority
                />
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── Section 1: What is a Euro pallet (direct answer) ─────────────── */}
      <section className="section-padding cream-texture">
        <div className="container-content">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <FadeUp>
              <div>
                <SectionHeader eyebrow="Definition" title="What Is a Euro Pallet?" />
                <div className="space-y-4 font-body text-sm text-charcoal/70 leading-relaxed">
                  <p className="faq-answer">
                    A <strong>Euro pallet</strong> is a wooden pallet built to the European standard footprint of <strong>1200 × 800 mm</strong> with four-way forklift entry. It is the most widely used pallet size across the European Union and United Kingdom, sized to fit standard EU trucks, racking and warehouse systems.
                  </p>
                  <p>
                    CeyPall manufactures pallets to these exact dimensions, then{' '}
                    <Link href="/heat-treated-pallets" className="text-accent underline underline-offset-2 hover:text-accent-hover transition-colors">
                      heat treats
                    </Link>{' '}
                    and IPPC-stamps every unit so it clears customs anywhere ISPM 15 applies. For exporters supplying European buyers, matching this footprint means your cargo slots directly into your customer&apos;s handling systems — no costly re-palletisation at the destination.
                  </p>
                  <p>
                    Need a different footprint? See our{' '}
                    <Link href="/custom-wooden-pallets-sri-lanka" className="text-accent underline underline-offset-2 hover:text-accent-hover transition-colors">
                      custom wooden pallets
                    </Link>{' '}
                    and{' '}
                    <Link href="/industrial-pallets-sri-lanka" className="text-accent underline underline-offset-2 hover:text-accent-hover transition-colors">
                      heavy-duty industrial pallets
                    </Link>.
                  </p>
                </div>
              </div>
            </FadeUp>

            <FadeUp delay={0.12}>
              <div className="bg-primary p-8">
                <p className="font-body text-xs font-semibold tracking-[0.15em] uppercase text-accent mb-6">
                  Euro pallet specification
                </p>
                <ul className="space-y-5">
                  {specs.map(({ label, value }) => (
                    <li key={label} className="flex flex-col gap-1 border-b border-cream/10 pb-5 last:border-0 last:pb-0">
                      <span className="font-body text-xs text-cream/50 uppercase tracking-wider">{label}</span>
                      <span className="font-body text-sm font-semibold text-cream/90">{value}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── Section 2: Size comparison ──────────────────────────────────── */}
      <section className="section-padding bg-warm-gray/40">
        <div className="container-content">
          <FadeUp>
            <SectionHeader
              eyebrow="Which size do I need?"
              title="Euro Pallet vs Other Standard Sizes"
              subtitle="The right footprint depends on your destination market. Here is how the Euro pallet compares to the two other sizes we manufacture most often."
            />
          </FadeUp>

          <FadeUp delay={0.1}>
            <div className="mt-10 border border-warm-gray overflow-x-auto">
              <table className="w-full border-collapse min-w-[560px]">
                <thead>
                  <tr className="bg-primary">
                    <th className="text-left font-body text-xs font-semibold tracking-[0.12em] uppercase text-accent px-6 py-4">Feature</th>
                    <th className="text-left font-body text-xs font-semibold tracking-[0.12em] uppercase text-accent px-6 py-4">Euro (EUR)</th>
                    <th className="text-left font-body text-xs font-semibold tracking-[0.12em] uppercase text-accent px-6 py-4">ISO 1200 × 1000</th>
                    <th className="text-left font-body text-xs font-semibold tracking-[0.12em] uppercase text-accent px-6 py-4">Asian 1100 × 1100</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row, i) => (
                    <tr key={row.feature} className={`border-t border-warm-gray ${i % 2 === 0 ? 'bg-white' : 'bg-cream'}`}>
                      <td className="font-body text-sm font-semibold text-primary px-6 py-4">{row.feature}</td>
                      <td className="font-body text-sm text-charcoal/70 px-6 py-4">{row.euro}</td>
                      <td className="font-body text-sm text-charcoal/70 px-6 py-4">{row.iso}</td>
                      <td className="font-body text-sm text-charcoal/70 px-6 py-4">{row.asia}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-6 max-w-2xl font-body text-sm text-charcoal/60 leading-relaxed">
              Not sure which size suits your cargo and destination?{' '}
              <Link href="/container-pallet-calculator" className="text-accent underline underline-offset-2 hover:text-accent-hover transition-colors">
                Use our container pallet calculator
              </Link>{' '}
              or{' '}
              <Link href="/contact" className="text-accent underline underline-offset-2 hover:text-accent-hover transition-colors">
                contact us
              </Link>{' '}
              with your product dimensions and shipping route.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* ── Section 3: Use cases ────────────────────────────────────────── */}
      <section className="section-padding cream-texture">
        <div className="container-content">
          <FadeUp>
            <SectionHeader eyebrow="When to use them" title="Who Needs Euro Pallets" />
          </FadeUp>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-warm-gray">
            {useCases.map(({ heading, body }, i) => (
              <FadeUp key={heading} delay={i * 0.07}>
                <div className="bg-cream p-8 flex flex-col gap-3 h-full">
                  <div className="w-6 h-6 bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-3.5 h-3.5 text-accent" viewBox="0 0 14 14" fill="none">
                      <path d="M2 7l3.5 3.5L12 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <h3 className="font-display text-base font-semibold text-primary">{heading}</h3>
                  <p className="font-body text-sm text-charcoal/65 leading-relaxed">{body}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 4: FAQ ──────────────────────────────────────────────── */}
      <section className="section-padding bg-warm-gray/40">
        <div className="container-content">
          <FadeUp>
            <SectionHeader eyebrow="Common questions" title="Euro Pallet FAQs" />
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

      {/* ── Section 5: CTA ──────────────────────────────────────────────── */}
      <section className="bg-accent py-20">
        <div className="container-content">
          <FadeUp>
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="font-display text-display-md text-white">Order Euro Pallets from CeyPall</h2>
              <span className="block w-10 h-0.5 bg-white/40 mt-4 mb-5 mx-auto" />
              <p className="font-body text-base text-white/80 leading-relaxed mb-8">
                Euro-standard 1200 × 800 mm pallets,{' '}
                <Link href="/heat-treated-pallets" className="text-white underline underline-offset-2 hover:text-white/80 transition-colors">
                  heat treated
                </Link>{' '}
                to ISPM 15 and IPPC stamped — manufactured in Sri Lanka, delivered island-wide.
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
