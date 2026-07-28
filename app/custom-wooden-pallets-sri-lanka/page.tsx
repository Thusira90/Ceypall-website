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
  title: 'Custom Wooden Pallets Sri Lanka | Built to Your Spec',
  description:
    'CeyPall builds custom wooden pallets in Sri Lanka to any dimension, load rating and entry type — ISPM 15 heat treated, IPPC stamped for non-standard cargo.',
  twitter: {
    description:
      'Custom wooden pallets built to your exact dimensions in Sri Lanka. Any size, load rating and entry type. ISPM 15 heat treated. Island-wide delivery.',
    images: ['/OPENGIMAGE.jpg'],
  },
  alternates: {
    canonical: 'https://www.ceypall.com/custom-wooden-pallets-sri-lanka',
  },
  openGraph: {
    title: 'Custom Wooden Pallets Sri Lanka | CeyPall (Pvt) Ltd',
    description:
      'Bespoke wooden pallets built to any dimension and load rating in Sri Lanka. ISPM 15 heat treated, IPPC stamped, island-wide delivery.',
    url: 'https://www.ceypall.com/custom-wooden-pallets-sri-lanka',
    images: [
      {
        url: '/OPENGIMAGE.jpg',
        width: 1200,
        height: 630,
        alt: 'CeyPall — ISPM 15 certified wooden pallets, Sri Lanka',
      },
    ],
  },
}

// ── Structured data ────────────────────────────────────────────────────────

const speakableJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Custom Wooden Pallets Sri Lanka | Built to Your Spec',
  url: 'https://www.ceypall.com/custom-wooden-pallets-sri-lanka',
  speakable: {
    '@type': 'SpeakableSpecification',
    cssSelector: ['h1', 'h2', '.faq-answer'],
  },
}

const productJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'Custom Wooden Pallets — Built to Specification',
  description:
    'Bespoke wooden pallets manufactured in Sri Lanka to any dimension, load rating, entry type and deck configuration. ISPM 15 heat treated to 56°C core temperature and IPPC stamped for export.',
  image: 'https://www.ceypall.com/HT%20Pallet%2007.png',
  brand: { '@type': 'Brand', name: 'CeyPall' },
  category: 'Wooden Pallets',
  offers: {
    '@type': 'AggregateOffer',
    priceCurrency: 'LKR',
    lowPrice: '2450.00',
    highPrice: '8750.00',
    availability: 'https://schema.org/InStock',
    url: 'https://www.ceypall.com/custom-wooden-pallets-sri-lanka',
    seller: { '@id': 'https://www.ceypall.com/#organization' },
  },
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is a custom wooden pallet?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A custom wooden pallet is a pallet built to non-standard dimensions or a specific load rating rather than an off-the-shelf size. It is used when cargo does not fit a standard footprint — oversized machinery, chemical drums, engine parts, or products that need a particular entry type or deck configuration. CeyPall manufactures custom pallets to any specification, ISPM 15 heat treated for export.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can CeyPall build pallets to any size?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. CeyPall manufactures wooden pallets to any length, width and height you specify. Provide your cargo dimensions, weight and container type and we design a pallet that maximises container utilisation and supports the load safely. There is no fixed size limit — from compact display pallets to oversized machinery bases.',
      },
    },
    {
      '@type': 'Question',
      name: 'What information do you need to quote a custom pallet?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'To quote a custom pallet we need the required dimensions (length × width × height), the load weight per pallet, the entry type (two-way or four-way), the deck configuration (single or double deck), the quantity, and whether it is for export or storage. If you are unsure, send your cargo details and we will recommend a specification.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are custom pallets ISPM 15 certified?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Every custom pallet built for export is heat treated to a core temperature of 56°C for at least 30 minutes and stamped with our registered IPPC mark, making it ISPM 15 compliant. Custom pallets intended for long-term local storage can instead be vacuum pressure impregnated for extended protection.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the minimum order for custom pallets?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Minimum order quantity depends on the size and complexity of the custom design. CeyPall handles both one-off special orders and large recurring contracts. Contact us with your specification and quantity for a quotation and lead time.',
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
      name: 'Custom Wooden Pallets Sri Lanka',
      item: 'https://www.ceypall.com/custom-wooden-pallets-sri-lanka',
    },
  ],
}

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Custom Wooden Pallet Manufacturing',
  description:
    'Bespoke wooden pallet manufacturing in Sri Lanka to any dimension, load rating and entry type. ISPM 15 heat treated, IPPC stamped, island-wide delivery.',
  provider: { '@id': 'https://www.ceypall.com/#organization' },
  serviceType: 'Pallet Manufacturing',
  areaServed: { '@type': 'Country', name: 'Sri Lanka' },
}

// ── Page data ──────────────────────────────────────────────────────────────

const specParams = [
  {
    num: '01',
    title: 'Dimensions',
    desc: 'Any length × width × height. We design to your cargo footprint and container type for maximum utilisation.',
  },
  {
    num: '02',
    title: 'Load rating',
    desc: 'Deck board thickness, stringer count and timber grade are matched to your load weight — from light display pallets to heavy machinery bases.',
  },
  {
    num: '03',
    title: 'Entry type',
    desc: 'Two-way or four-way forklift and pallet-jack entry, depending on how your cargo will be handled.',
  },
  {
    num: '04',
    title: 'Deck configuration',
    desc: 'Single or double deck, open or closed boards, with or without perimeter framing — built for your product and stacking needs.',
  },
]

const useCases = [
  {
    heading: 'Machinery & Equipment',
    body: 'Oversized or heavy machinery rarely fits a standard footprint. We build reinforced bases to the exact dimensions and weight rating your equipment needs for safe transit.',
  },
  {
    heading: 'Drums & Chemical Containers',
    body: 'Cylindrical loads need the right board spacing and cradle configuration. We design custom pallets that hold drums and IBCs securely for shipping and storage.',
  },
  {
    heading: 'Engine & Automotive Parts',
    body: 'Dense, high-value components require pallets sized to protect them and load efficiently into containers. We build to your part dimensions and stacking plan.',
  },
  {
    heading: 'Non-Standard Container Loads',
    body: 'When cargo dimensions leave wasted container space on standard pallets, a custom footprint recovers that space — reducing the number of containers you ship.',
  },
  {
    heading: 'Display & Retail Pallets',
    body: 'Compact, presentable pallets for retail-ready and point-of-sale shipments, built to the size your buyer specifies.',
  },
  {
    heading: 'Export Crates & Boxes',
    body: 'Beyond pallets, we build custom wooden crates and boxes to specification — ISPM 15 treated for international shipment of fragile or high-value goods.',
  },
]

const process = [
  { step: '01', title: 'Share your spec', body: 'Send your cargo dimensions, weight, quantity and destination. If you are unsure of the ideal design, describe the product and we will recommend a specification.' },
  { step: '02', title: 'Design & quote', body: 'We design a pallet to your requirements — dimensions, load rating, entry and deck configuration — and return a quotation with lead time.' },
  { step: '03', title: 'Manufacture & treat', body: 'On approval we manufacture your pallets and heat treat them to ISPM 15 (or vacuum pressure impregnate for storage), then apply the IPPC stamp.' },
  { step: '04', title: 'Document & deliver', body: 'Treatment certificates and compliance documentation are prepared and your order is delivered island-wide, on schedule.' },
]

const faqs = [
  {
    q: 'What is a custom wooden pallet?',
    a: 'A custom wooden pallet is a pallet built to non-standard dimensions or a specific load rating rather than an off-the-shelf size. It is used when cargo does not fit a standard footprint — oversized machinery, chemical drums, engine parts, or products needing a particular entry type or deck configuration. We manufacture custom pallets to any specification, ISPM 15 heat treated for export.',
  },
  {
    q: 'Can CeyPall build pallets to any size?',
    a: 'Yes. We manufacture wooden pallets to any length, width and height you specify. Provide your cargo dimensions, weight and container type and we design a pallet that maximises container utilisation and supports the load safely — from compact display pallets to oversized machinery bases.',
  },
  {
    q: 'What information do you need to quote a custom pallet?',
    a: 'We need the required dimensions (length × width × height), the load weight per pallet, the entry type (two-way or four-way), the deck configuration (single or double deck), the quantity, and whether it is for export or storage. If you are unsure, send your cargo details and we will recommend a specification.',
  },
  {
    q: 'Are custom pallets ISPM 15 certified?',
    a: 'Yes. Every custom pallet built for export is heat treated to a core temperature of 56°C for at least 30 minutes and IPPC stamped, making it ISPM 15 compliant. Custom pallets for long-term local storage can instead be vacuum pressure impregnated for extended protection.',
  },
  {
    q: 'What is the minimum order for custom pallets?',
    a: 'Minimum order depends on the size and complexity of the design. We handle both one-off special orders and large recurring contracts. Contact us with your specification and quantity for a quotation and lead time.',
  },
]

// ── Page component ─────────────────────────────────────────────────────────

export default function CustomWoodenPalletsSriLankaPage() {
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
            <li className="text-charcoal/80 font-medium">Custom Wooden Pallets Sri Lanka</li>
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
                  Built to Specification — ISPM 15 Certified
                </p>
                <h1 className="font-display text-display-lg text-cream">
                  Custom Wooden Pallets in Sri Lanka
                </h1>
                <span className="block w-10 h-0.5 bg-accent mt-4 mb-5" />
                <p className="font-body text-base text-cream/80 leading-relaxed mb-8">
                  CeyPall builds wooden pallets to <strong className="text-cream">any dimension, load rating and entry type</strong> —{' '}
                  <Link href="/heat-treated-pallets" className="text-accent/90 hover:text-accent underline underline-offset-2 transition-colors">
                    heat treated
                  </Link>{' '}
                  to ISPM 15 and IPPC stamped. Bespoke sizes for machinery, drums, engine parts and non-standard cargo. Delivered island-wide.
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
                  src="/HT Pallet 07.png"
                  alt="Custom wooden pallets built to specification by CeyPall in Sri Lanka, ISPM 15 heat treated"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── Section 1: What is a custom pallet (direct answer) ───────────── */}
      <section className="section-padding cream-texture">
        <div className="container-content">
          <AnswerBlock question="In short: can CeyPall build pallets to any size?">
            Yes. CeyPall manufactures <strong>custom wooden pallets to any length, width and height</strong> — matched to your cargo footprint, load weight, entry type and deck configuration. There is no fixed size limit, from compact display pallets to oversized machinery bases. Export pallets are <strong>ISPM 15 heat-treated and IPPC-stamped</strong>; storage pallets can be VPI-treated instead.
          </AnswerBlock>

          <div className="max-w-3xl">
            <FadeUp>
              <SectionHeader eyebrow="Definition" title="What Is a Custom Wooden Pallet?" />
              <div className="space-y-4 font-body text-sm text-charcoal/70 leading-relaxed">
                <p className="faq-answer">
                  A <strong>custom wooden pallet</strong> is a pallet built to non-standard dimensions or a specific load rating rather than an off-the-shelf size. It is used when cargo does not fit a standard footprint — oversized machinery, chemical drums, engine parts, or products that need a particular entry type or deck configuration.
                </p>
                <p>
                  CeyPall manufactures custom pallets to any specification. Because we control the whole process — from timber sourcing to{' '}
                  <Link href="/heat-treated-pallets" className="text-accent underline underline-offset-2 hover:text-accent-hover transition-colors">
                    heat treatment
                  </Link>{' '}
                  and IPPC stamping — under one roof, we can build a pallet around your exact cargo and still deliver it export-ready. For standard European sizing, see our{' '}
                  <Link href="/euro-pallets-sri-lanka" className="text-accent underline underline-offset-2 hover:text-accent-hover transition-colors">
                    Euro pallets
                  </Link>; for heavy-duty needs, see our{' '}
                  <Link href="/industrial-pallets-sri-lanka" className="text-accent underline underline-offset-2 hover:text-accent-hover transition-colors">
                    industrial pallets
                  </Link>.
                </p>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── Section 2: What we customise ────────────────────────────────── */}
      <section className="section-padding bg-warm-gray/40">
        <div className="container-content">
          <FadeUp>
            <SectionHeader eyebrow="Specify anything" title="What You Can Customise" />
          </FadeUp>
          <ol className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-px bg-warm-gray">
            {specParams.map(({ num, title, desc }, i) => (
              <FadeUp key={num} delay={i * 0.07}>
                <li className="bg-cream p-8 flex flex-col gap-4 h-full list-none">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex items-center justify-center w-8 h-8 bg-accent text-white font-body text-xs font-bold flex-shrink-0">{num}</span>
                    <h3 className="font-display text-base font-semibold text-primary">{title}</h3>
                  </div>
                  <p className="font-body text-sm text-charcoal/65 leading-relaxed">{desc}</p>
                </li>
              </FadeUp>
            ))}
          </ol>
        </div>
      </section>

      {/* ── Section 3: Use cases ────────────────────────────────────────── */}
      <section className="section-padding cream-texture">
        <div className="container-content">
          <FadeUp>
            <SectionHeader eyebrow="Applications" title="What We Build Custom Pallets For" />
          </FadeUp>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-warm-gray">
            {useCases.map(({ heading, body }, i) => (
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

      {/* ── Section 4: Process ──────────────────────────────────────────── */}
      <section className="section-padding bg-warm-gray/40">
        <div className="container-content">
          <FadeUp>
            <SectionHeader
              eyebrow="How it works"
              title="From Specification to Delivery"
              subtitle="Four steps from your cargo details to export-ready pallets at your door."
            />
          </FadeUp>
          <ol className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-warm-gray">
            {process.map(({ step, title, body }, i) => (
              <FadeUp key={step} delay={i * 0.06}>
                <li className="bg-cream p-8 flex flex-col gap-4 h-full list-none">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex items-center justify-center w-8 h-8 bg-accent text-white font-body text-xs font-bold flex-shrink-0">{step}</span>
                    <h3 className="font-display text-base font-semibold text-primary leading-snug">{title}</h3>
                  </div>
                  <p className="font-body text-sm text-charcoal/65 leading-relaxed">{body}</p>
                </li>
              </FadeUp>
            ))}
          </ol>
        </div>
      </section>

      {/* ── Section 5: FAQ ──────────────────────────────────────────────── */}
      <section className="section-padding cream-texture">
        <div className="container-content">
          <FadeUp>
            <SectionHeader eyebrow="Common questions" title="Custom Pallet FAQs" />
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

      {/* ── Related pages ─────────────────────────────────────────────── */}
      <RelatedLinks
        links={[
          { href: '/heat-treated-pallets', title: 'Heat Treated Pallets', description: 'ISPM 15 heat treatment to 56°C, IPPC-stamped and export-ready.' },
          { href: '/industrial-pallets-sri-lanka', title: 'Industrial Pallets', description: 'Heavy-duty pallets rated for 1,000–2,000 kg and above.' },
          { href: '/euro-pallets-sri-lanka', title: 'Euro Pallets', description: 'Standard 1200 × 800 mm Euro pallets for EU and UK exports.' },
          { href: '/container-pallet-calculator', title: 'Container Pallet Calculator', description: 'See how many pallets fit a 20ft, 40ft or high-cube container.' },
        ]}
      />

      {/* ── Section 6: CTA ──────────────────────────────────────────────── */}
      <section className="bg-accent py-20">
        <div className="container-content">
          <FadeUp>
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="font-display text-display-md text-white">Get a Custom Pallet Built to Your Spec</h2>
              <span className="block w-10 h-0.5 bg-white/40 mt-4 mb-5 mx-auto" />
              <p className="font-body text-base text-white/80 leading-relaxed mb-8">
                Send us your cargo dimensions and weight. We design, manufacture,{' '}
                <Link href="/heat-treated-pallets" className="text-white underline underline-offset-2 hover:text-white/80 transition-colors">
                  heat treat
                </Link>{' '}
                and deliver — anywhere in Sri Lanka.
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
