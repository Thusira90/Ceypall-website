import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { FadeUp } from '@/components/ui/FadeUp'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Button } from '@/components/ui/Button'
import { SchemaScript } from '@/components/ui/SchemaScript'

export const metadata: Metadata = {
  title: 'Industrial Pallets Sri Lanka | Heavy-Duty Wooden Pallets',
  description:
    'CeyPall manufactures heavy-duty industrial wooden pallets in Sri Lanka for manufacturing, warehousing and heavy cargo — load-rated, ISPM 15 heat treated or VPI-treated for long-term storage. Island-wide delivery.',
  twitter: {
    description:
      'Heavy-duty industrial wooden pallets manufactured in Sri Lanka. Load-rated for machinery, drums and heavy cargo. ISPM 15 heat treated or VPI-treated. Island-wide delivery.',
  },
  alternates: {
    canonical: 'https://www.ceypall.com/industrial-pallets-sri-lanka',
  },
  openGraph: {
    title: 'Industrial Pallets Sri Lanka | CeyPall (Pvt) Ltd',
    description:
      'Heavy-duty industrial wooden pallets manufactured in Sri Lanka. Load-rated for heavy cargo, ISPM 15 heat treated or VPI-treated for storage. Island-wide delivery.',
    url: 'https://www.ceypall.com/industrial-pallets-sri-lanka',
  },
}

// ── Structured data ────────────────────────────────────────────────────────

const speakableJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Industrial Pallets Sri Lanka | Heavy-Duty Wooden Pallets',
  url: 'https://www.ceypall.com/industrial-pallets-sri-lanka',
  speakable: {
    '@type': 'SpeakableSpecification',
    cssSelector: ['h1', 'h2', '.faq-answer'],
  },
}

const productJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'Heavy-Duty Industrial Wooden Pallet',
  description:
    'Load-rated industrial wooden pallet manufactured in Sri Lanka for heavy cargo, manufacturing and warehousing. Reinforced deck boards and stringers. ISPM 15 heat treated for export or vacuum pressure impregnated for long-term storage.',
  image: 'https://www.ceypall.com/Storage.png',
  brand: { '@type': 'Brand', name: 'CeyPall' },
  category: 'Wooden Pallets',
  offers: {
    '@type': 'AggregateOffer',
    priceCurrency: 'LKR',
    lowPrice: '2450.00',
    highPrice: '8750.00',
    availability: 'https://schema.org/InStock',
    url: 'https://www.ceypall.com/industrial-pallets-sri-lanka',
    seller: { '@id': 'https://www.ceypall.com/#organization' },
  },
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is an industrial pallet?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'An industrial pallet is a heavy-duty wooden pallet built with reinforced deck boards and stringers to carry high loads in manufacturing, warehousing and heavy-cargo applications. It is stronger than a standard export pallet and is rated for repeated handling and heavier weights. CeyPall manufactures industrial pallets to your load rating, ISPM 15 heat treated for export or VPI-treated for storage.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much weight can an industrial pallet hold?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Industrial pallet load ratings depend on timber grade, deck thickness and stringer configuration. Standard-duty pallets typically carry 1,000–1,500 kg, while heavy-duty industrial pallets can be built to carry 2,000 kg or more. CeyPall designs the deck and framing to your specified static and dynamic load requirements.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between heat treatment and VPI for industrial pallets?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Heat treatment (HT) heats the wood core to 56°C to meet ISPM 15 for export — it is a phytosanitary treatment, not a preservative. Vacuum pressure impregnation (VPI) forces Boron Borax preservative deep into the timber under pressure, protecting against fungal decay and insect attack for years. For industrial pallets that stay in a warehouse long-term, VPI is the better choice; for export, heat treatment is required.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are industrial pallets suitable for racking?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Industrial pallets can be built for racking with the deck stiffness and bottom-board configuration needed to bear their rated load across a rack beam gap without sagging. Tell us your racking type and beam spacing and we will specify a pallet that performs safely in your storage system.',
      },
    },
    {
      '@type': 'Question',
      name: 'Which industries use industrial pallets?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Industrial pallets are used across manufacturing, warehousing, logistics, rubber and tyre production, chemical and drum handling, engineering, and food and beverage. Any operation moving heavy, dense or high-volume goods relies on load-rated pallets. CeyPall supplies these sectors island-wide across Sri Lanka.',
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
      name: 'Industrial Pallets Sri Lanka',
      item: 'https://www.ceypall.com/industrial-pallets-sri-lanka',
    },
  ],
}

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Industrial Pallet Manufacturing',
  description:
    'Heavy-duty industrial wooden pallet manufacturing in Sri Lanka. Load-rated for heavy cargo, ISPM 15 heat treated or vacuum pressure impregnated, island-wide delivery.',
  provider: { '@id': 'https://www.ceypall.com/#organization' },
  serviceType: 'Pallet Manufacturing',
  areaServed: { '@type': 'Country', name: 'Sri Lanka' },
}

// ── Page data ──────────────────────────────────────────────────────────────

const loadClasses = [
  { grade: 'Light duty', load: 'Up to 1,000 kg', use: 'Cartons, boxed goods, apparel and general palletised cargo.' },
  { grade: 'Standard duty', load: '1,000–1,500 kg', use: 'Mixed manufacturing output, distribution and export loads.' },
  { grade: 'Heavy duty', load: '1,500–2,000 kg+', use: 'Machinery, drums, tyres, dense industrial and engineering goods.' },
]

const treatmentRows = [
  { feature: 'Purpose', ht: 'Phytosanitary — kills pests for export', vpi: 'Preservative — long-term decay & pest protection' },
  { feature: 'Method', ht: 'Core heated to 56°C for 30+ min', vpi: 'Boron Borax forced in under vacuum & pressure' },
  { feature: 'Best for', ht: 'Export pallets (ISPM 15)', vpi: 'Long-term warehouse & storage pallets' },
  { feature: 'IPPC stamp', ht: 'Yes — accepted worldwide', vpi: 'Not an export treatment on its own' },
  { feature: 'Protection life', ht: 'Single-use export focus', vpi: 'Multi-year protection' },
]

const industries = [
  { heading: 'Manufacturing', body: 'Load-rated pallets for production lines, finished-goods handling and inter-factory movement of heavy output.' },
  { heading: 'Warehousing & Logistics', body: 'Racking-grade pallets built for repeated handling and safe storage across distribution operations.' },
  { heading: 'Rubber & Tyre', body: 'Dense, heavy products need reinforced decks and stringers. We build to the weight your loads demand.' },
  { heading: 'Chemical & Drums', body: 'Pallets configured to hold drums and IBCs securely for heavy chemical and liquid cargo.' },
  { heading: 'Engineering & Machinery', body: 'Reinforced bases sized and rated for heavy equipment and engineered components.' },
  { heading: 'Food & Beverage', body: 'Hygienic, load-rated pallets for bulk food and beverage handling and storage.' },
]

const faqs = [
  {
    q: 'What is an industrial pallet?',
    a: 'An industrial pallet is a heavy-duty wooden pallet built with reinforced deck boards and stringers to carry high loads in manufacturing, warehousing and heavy-cargo applications. It is stronger than a standard export pallet and rated for repeated handling and heavier weights. We manufacture industrial pallets to your load rating, ISPM 15 heat treated for export or VPI-treated for storage.',
  },
  {
    q: 'How much weight can an industrial pallet hold?',
    a: 'Load ratings depend on timber grade, deck thickness and stringer configuration. Standard-duty pallets typically carry 1,000–1,500 kg, while heavy-duty industrial pallets can be built to carry 2,000 kg or more. We design the deck and framing to your specified static and dynamic load requirements.',
  },
  {
    q: 'What is the difference between heat treatment and VPI for industrial pallets?',
    a: 'Heat treatment (HT) heats the wood core to 56°C to meet ISPM 15 for export — it is a phytosanitary treatment, not a preservative. Vacuum pressure impregnation (VPI) forces Boron Borax preservative deep into the timber under pressure, protecting against fungal decay and insect attack for years. For pallets that stay in a warehouse long-term, VPI is the better choice; for export, heat treatment is required.',
  },
  {
    q: 'Are industrial pallets suitable for racking?',
    a: 'Yes. Industrial pallets can be built for racking with the deck stiffness and bottom-board configuration needed to bear their rated load across a rack beam gap without sagging. Tell us your racking type and beam spacing and we will specify a pallet that performs safely in your storage system.',
  },
  {
    q: 'Which industries use industrial pallets?',
    a: 'Industrial pallets are used across manufacturing, warehousing, logistics, rubber and tyre production, chemical and drum handling, engineering, and food and beverage. Any operation moving heavy, dense or high-volume goods relies on load-rated pallets. We supply these sectors island-wide across Sri Lanka.',
  },
]

// ── Page component ─────────────────────────────────────────────────────────

export default function IndustrialPalletsSriLankaPage() {
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
            <li className="text-charcoal/80 font-medium">Industrial Pallets Sri Lanka</li>
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
                  Heavy-Duty & Load-Rated
                </p>
                <h1 className="font-display text-display-lg text-cream">
                  Industrial Pallets in Sri Lanka
                </h1>
                <span className="block w-10 h-0.5 bg-accent mt-4 mb-5" />
                <p className="font-body text-base text-cream/80 leading-relaxed mb-8">
                  CeyPall manufactures <strong className="text-cream">heavy-duty industrial wooden pallets</strong> for manufacturing, warehousing and heavy cargo — load-rated, reinforced, and{' '}
                  <Link href="/heat-treated-pallets" className="text-accent/90 hover:text-accent underline underline-offset-2 transition-colors">
                    heat treated
                  </Link>{' '}
                  for export or VPI-treated for long-term storage. Delivered island-wide.
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
                  alt="Heavy-duty industrial wooden pallets in warehouse storage, manufactured by CeyPall in Sri Lanka"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── Section 1: What is an industrial pallet (direct answer) ──────── */}
      <section className="section-padding cream-texture">
        <div className="container-content">
          <div className="max-w-3xl">
            <FadeUp>
              <SectionHeader eyebrow="Definition" title="What Is an Industrial Pallet?" />
              <div className="space-y-4 font-body text-sm text-charcoal/70 leading-relaxed">
                <p className="faq-answer">
                  An <strong>industrial pallet</strong> is a heavy-duty wooden pallet built with reinforced deck boards and stringers to carry high loads in manufacturing, warehousing and heavy-cargo applications. It is stronger than a standard export pallet and rated for repeated handling and heavier weights.
                </p>
                <p>
                  CeyPall manufactures industrial pallets to your specified load rating. For export loads we{' '}
                  <Link href="/heat-treated-pallets" className="text-accent underline underline-offset-2 hover:text-accent-hover transition-colors">
                    heat treat
                  </Link>{' '}
                  and IPPC-stamp them to ISPM 15; for pallets that stay in your warehouse, we can vacuum pressure impregnate the timber for years of protection. Need a specific footprint? See our{' '}
                  <Link href="/custom-wooden-pallets-sri-lanka" className="text-accent underline underline-offset-2 hover:text-accent-hover transition-colors">
                    custom wooden pallets
                  </Link>; for EU sizing, see our{' '}
                  <Link href="/euro-pallets-sri-lanka" className="text-accent underline underline-offset-2 hover:text-accent-hover transition-colors">
                    Euro pallets
                  </Link>.
                </p>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── Section 2: Load classes ─────────────────────────────────────── */}
      <section className="section-padding bg-warm-gray/40">
        <div className="container-content">
          <FadeUp>
            <SectionHeader
              eyebrow="Load ratings"
              title="Industrial Pallet Duty Classes"
              subtitle="We build to your load requirement. These are the classes we manufacture most often — the exact rating is set by timber grade, deck thickness and stringer configuration."
            />
          </FadeUp>
          <FadeUp delay={0.1}>
            <div className="mt-10 border border-warm-gray overflow-x-auto max-w-3xl">
              <table className="w-full border-collapse min-w-[520px]">
                <thead>
                  <tr className="bg-primary">
                    <th className="text-left font-body text-xs font-semibold tracking-[0.12em] uppercase text-accent px-6 py-4">Duty class</th>
                    <th className="text-left font-body text-xs font-semibold tracking-[0.12em] uppercase text-accent px-6 py-4">Typical load</th>
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

      {/* ── Section 3: HT vs VPI ────────────────────────────────────────── */}
      <section className="section-padding cream-texture">
        <div className="container-content">
          <FadeUp>
            <SectionHeader
              eyebrow="Which treatment?"
              title="Heat Treatment vs Vacuum Pressure Impregnation"
              subtitle="Export pallets need heat treatment for ISPM 15. Long-term warehouse pallets are better protected by VPI. Here is the difference."
            />
          </FadeUp>
          <FadeUp delay={0.1}>
            <div className="mt-10 border border-warm-gray overflow-x-auto">
              <table className="w-full border-collapse min-w-[560px]">
                <thead>
                  <tr className="bg-primary">
                    <th className="text-left font-body text-xs font-semibold tracking-[0.12em] uppercase text-accent px-6 py-4">Feature</th>
                    <th className="text-left font-body text-xs font-semibold tracking-[0.12em] uppercase text-accent px-6 py-4">Heat Treatment (HT)</th>
                    <th className="text-left font-body text-xs font-semibold tracking-[0.12em] uppercase text-accent px-6 py-4">VPI</th>
                  </tr>
                </thead>
                <tbody>
                  {treatmentRows.map((row, i) => (
                    <tr key={row.feature} className={`border-t border-warm-gray ${i % 2 === 0 ? 'bg-white' : 'bg-cream'}`}>
                      <td className="font-body text-sm font-semibold text-primary px-6 py-4">{row.feature}</td>
                      <td className="font-body text-sm text-charcoal/70 px-6 py-4">{row.ht}</td>
                      <td className="font-body text-sm text-charcoal/70 px-6 py-4">{row.vpi}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-6 max-w-2xl font-body text-sm text-charcoal/60 leading-relaxed">
              Not sure which treatment your operation needs?{' '}
              <Link href="/contact" className="text-accent underline underline-offset-2 hover:text-accent-hover transition-colors">
                Contact us
              </Link>{' '}
              with how and where your pallets will be used and we will recommend the right specification.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* ── Section 4: Industries ───────────────────────────────────────── */}
      <section className="section-padding bg-warm-gray/40">
        <div className="container-content">
          <FadeUp>
            <SectionHeader eyebrow="Industries served" title="Who Uses Industrial Pallets" />
          </FadeUp>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-warm-gray">
            {industries.map(({ heading, body }, i) => (
              <FadeUp key={heading} delay={i * 0.06}>
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

      {/* ── Section 5: FAQ ──────────────────────────────────────────────── */}
      <section className="section-padding cream-texture">
        <div className="container-content">
          <FadeUp>
            <SectionHeader eyebrow="Common questions" title="Industrial Pallet FAQs" />
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

      {/* ── Section 6: CTA ──────────────────────────────────────────────── */}
      <section className="bg-accent py-20">
        <div className="container-content">
          <FadeUp>
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="font-display text-display-md text-white">Order Industrial Pallets from CeyPall</h2>
              <span className="block w-10 h-0.5 bg-white/40 mt-4 mb-5 mx-auto" />
              <p className="font-body text-base text-white/80 leading-relaxed mb-8">
                Heavy-duty, load-rated wooden pallets —{' '}
                <Link href="/heat-treated-pallets" className="text-white underline underline-offset-2 hover:text-white/80 transition-colors">
                  heat treated
                </Link>{' '}
                for export or VPI-treated for storage. Manufactured in Sri Lanka, delivered island-wide.
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
