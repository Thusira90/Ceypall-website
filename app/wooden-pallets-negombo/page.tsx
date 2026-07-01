import type { Metadata } from 'next'
import { FadeUp } from '@/components/ui/FadeUp'
import { Button } from '@/components/ui/Button'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { SchemaScript } from '@/components/ui/SchemaScript'

export const metadata: Metadata = {
  title: 'ISPM 15 Wooden Pallets — Negombo & Wattala',
  description:
    'CeyPall delivers heat-treated, ISPM 15-certified wooden pallets to Negombo and the Wattala region. Export pallets and storage pallets manufactured in Kochchikade, just 20 km away.',
  twitter: {
    description:
      'CeyPall delivers heat-treated, ISPM 15-certified wooden pallets to Negombo and the Wattala region. Export pallets and storage pallets manufactured in Kochchikade, just 20 km away.',
  },
  openGraph: {
    title: 'ISPM 15 Wooden Pallets — Negombo & Wattala | CeyPall (Pvt) Ltd',
    description:
      'Heat-treated, ISPM 15-certified wooden pallets delivered to Negombo exporters and manufacturers. CeyPall (Pvt) Ltd — Kochchikade, Sri Lanka.',
    url: 'https://www.ceypall.com/wooden-pallets-negombo',
  },
  alternates: {
    canonical: 'https://www.ceypall.com/wooden-pallets-negombo',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://www.ceypall.com/#business',
  name: 'CeyPall (Pvt) Ltd',
  description:
    'ISPM 15 certified wooden pallet manufacturer supplying heat-treated export and storage pallets to Negombo and the Wattala region.',
  url: 'https://www.ceypall.com/wooden-pallets-negombo',
  telephone: ['+94714711417', '+94769494944', '+94312277752'],
  email: 'office@ceypall.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '1088, Colombo Road, Daluwakotuwa',
    addressLocality: 'Kochchikade',
    postalCode: '11540',
    addressCountry: 'LK',
  },
  areaServed: [
    { '@type': 'City', name: 'Negombo' },
    { '@type': 'City', name: 'Wattala' },
    { '@type': 'Place', name: 'Gampaha District' },
  ],
}

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.ceypall.com/' },
    { '@type': 'ListItem', position: 2, name: 'Wooden Pallets Negombo', item: 'https://www.ceypall.com/wooden-pallets-negombo' },
  ],
}

const reasons = [
  {
    number: '01',
    title: 'Closest ISPM 15 Supplier',
    body: "CeyPall's Kochchikade factory is just 20 km from Negombo, making us the nearest ISPM 15-certified pallet manufacturer to the area. Fast deliveries without long-haul logistics delays.",
  },
  {
    number: '02',
    title: 'Export & Storage in One Place',
    body: 'Whether you need heat-treated pallets for export compliance or vacuum pressure impregnated pallets for long-term warehouse use, we manufacture both from a single facility with a single point of contact.',
  },
  {
    number: '03',
    title: 'Flexible Order Quantities',
    body: "From trial orders to full container loads, we work with businesses of all sizes. We don't set minimum quantities that price out growing exporters — tell us what you need and we'll find the right solution.",
  },
]

const industries = [
  'Food & Beverage Processing',
  'Seafood & Canning',
  'Spice & Coconut Exports',
  'Textile Manufacturers',
  'Small & Medium Exporters',
  'Logistics Operators',
  'Airport Cargo Businesses',
]

const nearbyZones = [
  { zone: 'Malwatta EPZ', district: 'Gampaha', industries: 'Mixed export industries', driveTime: '30–45 min' },
  { zone: 'Katunayake EPZ', district: 'Gampaha', industries: 'Apparel, electronics, high-value manufacturing', driveTime: '20–30 min' },
  { zone: 'Biyagama EPZ', district: 'Gampaha', industries: 'Electronics, chemicals, industrial manufacturing', driveTime: '45–60 min' },
  { zone: 'Wathupitiwela EPZ', district: 'Gampaha', industries: 'Mixed manufacturing', driveTime: '50–65 min' },
  { zone: 'Mirigama EPZ', district: 'Gampaha', industries: 'Export-focused manufacturing', driveTime: '60–75 min' },
  { zone: 'Seethawaka EPZ', district: 'Colombo', industries: 'Apparel, rubber, chemicals', driveTime: '75–90 min' },
  { zone: 'Horana EPZ', district: 'Kalutara', industries: 'Apparel, food processing, packaging', driveTime: '90–110 min' },
]

const allZones = [
  { zone: 'Katunayake EPZ', district: 'Gampaha', industries: 'Apparel, electronics, high-value manufacturing' },
  { zone: 'Biyagama EPZ', district: 'Gampaha', industries: 'Electronics, chemicals, industrial manufacturing' },
  { zone: 'Wathupitiwela EPZ', district: 'Gampaha', industries: 'Mixed manufacturing, low-polluting industries' },
  { zone: 'Mirigama EPZ', district: 'Gampaha', industries: 'Export-focused manufacturing' },
  { zone: 'Malwatta EPZ', district: 'Gampaha', industries: 'Mixed export industries' },
  { zone: 'Seethawaka EPZ', district: 'Colombo', industries: 'Apparel, rubber, chemicals, mixed manufacturing' },
  { zone: 'Horana EPZ', district: 'Kalutara', industries: 'Apparel, food processing, packaging' },
  { zone: 'Koggala EPZ', district: 'Galle', industries: 'Garments, manufacturing' },
  { zone: 'Mirijjawila EPZ', district: 'Hambantota', industries: 'Export-oriented manufacturing' },
  { zone: 'Mawathagama EPZ', district: 'Kurunegala', industries: 'Low-polluting industries' },
  { zone: 'Polgahawela EPZ', district: 'Kurunegala', industries: 'Mixed manufacturing' },
  { zone: 'Bingiriya EPZ', district: 'Kurunegala', industries: 'Light manufacturing, sustainable industries' },
  { zone: 'Kandy Industrial Park', district: 'Kandy', industries: 'Mixed industries, central Sri Lanka' },
  { zone: 'Pannala Industrial Estate', district: 'Kurunegala', industries: 'Manufacturing' },
  { zone: 'Atchchuveli Industrial Estate', district: 'Jaffna', industries: 'Manufacturing, northern Sri Lanka' },
  { zone: 'Colombo Port & surrounds', district: 'Colombo', industries: 'All export industries — Peliyagoda, Ja-Ela, Ekala, Wattala' },
  { zone: 'Hambantota Port zone', district: 'Hambantota', industries: 'Southern export hub' },
  { zone: 'Trincomalee Port zone', district: 'Trincomalee', industries: 'Eastern export hub' },
  { zone: 'Nuwara Eliya / Hatton', district: 'Nuwara Eliya', industries: 'Tea export' },
  { zone: 'Ratnapura / Balangoda', district: 'Ratnapura', industries: 'Tea, rubber, gems export' },
  { zone: 'Kandy / Matale', district: 'Kandy', industries: 'Tea, spices, coconut export' },
]

const faqs = [
  {
    question: 'Do you deliver to Negombo and Wattala?',
    answer:
      'Yes. Negombo and Wattala are within our standard delivery area. Our Kochchikade facility is approximately 20 km from central Negombo, and we regularly supply businesses across the region. Standard delivery is typically arranged within 1–2 business days.',
  },
  {
    question: 'What is the minimum order quantity?',
    answer:
      "We don't apply a rigid minimum. We work with orders from small batches upward — we'd rather help you find the right quantity for your needs than turn away smaller businesses. Contact us and we'll work out what makes sense for your operation.",
  },
  {
    question: 'Do you supply food and seafood exporters?',
    answer:
      'Yes. Our heat-treated pallets are suitable for all export commodities including food products, spices, canned goods, and seafood. They meet ISPM 15 requirements and are IPPC-stamped — compliant with international food export packaging requirements.',
  },
]

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
}

export default function NegomboPage() {
  return (
    <>
      <SchemaScript schema={jsonLd} />
      <SchemaScript schema={breadcrumbJsonLd} />
      <SchemaScript schema={faqJsonLd} />

      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section className="wood-texture section-padding">
        <div className="container-content">
          <FadeUp>
            <div className="max-w-2xl">
              <p className="font-body text-xs font-semibold tracking-[0.15em] uppercase text-accent mb-4">
                Negombo &amp; Wattala Region
              </p>
              <h1 className="font-display text-display-lg text-cream">
                Wooden Pallets Delivered to Negombo.
              </h1>
              <span className="block w-10 h-0.5 bg-accent mt-4 mb-5" />
              <p className="font-body text-base text-cream/80 leading-relaxed mb-8">
                Heat-treated, ISPM 15-compliant export pallets and long-term storage pallets —
                manufactured in Kochchikade, just 20 km from Negombo, and delivered to your door.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button href="/contact" variant="primary" size="lg">
                  Request a quote →
                </Button>
                <Button href="/products" variant="outline-light" size="lg">
                  View products
                </Button>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── Why CeyPall for Negombo ──────────────────────────────────── */}
      <section className="section-padding cream-texture">
        <div className="container-content">
          <FadeUp>
            <div className="mb-12">
              <SectionHeader
                eyebrow="Serving Negombo"
                title="Why exporters in Negombo choose CeyPall."
              />
            </div>
          </FadeUp>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-warm-gray">
            {reasons.map(({ number, title, body }) => (
              <FadeUp key={number}>
                <div className="bg-cream p-8 flex flex-col gap-5 h-full">
                  <span className="font-display text-4xl font-bold text-warm-gray select-none">
                    {number}
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-primary mb-3">
                      {title}
                    </h3>
                    <p className="font-body text-sm text-charcoal/65 leading-relaxed">{body}</p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── Industries + Delivery ───────────────────────────────────── */}
      <section className="section-padding bg-warm-gray/40">
        <div className="container-content">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Industries */}
            <FadeUp>
              <div>
                <p className="font-body text-xs font-semibold tracking-[0.15em] uppercase text-accent mb-5">
                  Industries served
                </p>
                <h2 className="font-display text-display-md text-primary mb-6">
                  Who we supply in Negombo.
                </h2>
                <div className="flex flex-wrap gap-2">
                  {industries.map((industry) => (
                    <span
                      key={industry}
                      className="font-body text-sm text-charcoal/80 bg-cream border border-warm-gray px-4 py-2"
                    >
                      {industry}
                    </span>
                  ))}
                </div>
                <p className="mt-6 font-body text-sm text-charcoal/60 leading-relaxed">
                  Not listed here? If your business exports or stores goods, we almost certainly
                  supply what you need.{' '}
                  <a href="/contact" className="text-accent underline underline-offset-2 hover:text-accent-hover transition-colors">
                    Ask us.
                  </a>
                </p>
              </div>
            </FadeUp>

            {/* Delivery info */}
            <FadeUp delay={0.1}>
              <div className="bg-primary p-8">
                <p className="font-body text-xs font-semibold tracking-[0.15em] uppercase text-accent mb-6">
                  Delivery &amp; service area
                </p>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-8 h-8 bg-cream/8 flex items-center justify-center text-accent flex-shrink-0">
                      <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none">
                        <path d="M2 6h9l3 3v3H2V6z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
                        <path d="M2 6V4a1 1 0 011-1h6a1 1 0 011 1v2" stroke="currentColor" strokeWidth="1.2" />
                        <circle cx="5" cy="12" r="1.25" stroke="currentColor" strokeWidth="1.2" />
                        <circle cx="11" cy="12" r="1.25" stroke="currentColor" strokeWidth="1.2" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-body text-xs font-semibold text-cream/50 uppercase tracking-wider mb-1">
                        Typical drive time
                      </p>
                      <p className="font-body text-sm text-cream/90 font-semibold">25–35 minutes</p>
                      <p className="font-body text-xs text-cream/60 mt-0.5">from our Kochchikade facility</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-8 h-8 bg-cream/8 flex items-center justify-center text-accent flex-shrink-0">
                      <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none">
                        <circle cx="8" cy="6" r="3" stroke="currentColor" strokeWidth="1.2" />
                        <path d="M2.5 14c0-3.5 2.5-5 5.5-5s5.5 1.5 5.5 5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-body text-xs font-semibold text-cream/50 uppercase tracking-wider mb-1">
                        Service note
                      </p>
                      <p className="font-body text-sm text-cream/80 leading-relaxed">
                        Negombo and Wattala are within our standard delivery area. We supply regularly
                        to businesses across the region and can accommodate urgent orders.
                      </p>
                    </div>
                  </div>

                  <div className="border-t border-cream/10 pt-6">
                    <p className="font-body text-xs text-cream/60 leading-relaxed">
                      Serving the full island — Colombo, Gampaha, Kurunegala, Kandy, and beyond.
                    </p>
                  </div>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── Nearby zones table ───────────────────────────────────────── */}
      <section className="section-padding cream-texture">
        <div className="container-content">
          <FadeUp>
            <div className="mb-8">
              <SectionHeader
                eyebrow="Western &amp; North-Western Corridor"
                title="Nearby Zones We Also Supply"
              />
              <p className="font-body text-sm text-charcoal/70 leading-relaxed mt-4 max-w-2xl">
                CeyPall&apos;s Kochchikade facility is on the A3 coastal corridor, making it
                well-positioned to serve Negombo, Wattala, and Ja-Ela as well as a broad range of
                industrial zones across the western and north-western corridor:
              </p>
            </div>
          </FadeUp>

          <FadeUp delay={0.05}>
            <div className="overflow-x-auto">
              <table className="w-full text-sm font-body border-collapse">
                <thead>
                  <tr className="bg-primary text-cream">
                    <th className="text-left px-4 py-3 font-semibold text-xs tracking-[0.08em] uppercase">
                      Zone
                    </th>
                    <th className="text-left px-4 py-3 font-semibold text-xs tracking-[0.08em] uppercase">
                      District
                    </th>
                    <th className="text-left px-4 py-3 font-semibold text-xs tracking-[0.08em] uppercase">
                      Primary Industries
                    </th>
                    <th className="text-left px-4 py-3 font-semibold text-xs tracking-[0.08em] uppercase whitespace-nowrap">
                      Approx. Drive Time from Kochchikade
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {nearbyZones.map(({ zone, district, industries: ind, driveTime }, i) => (
                    <tr key={zone} className={i % 2 === 0 ? 'bg-cream' : 'bg-cream/50'}>
                      <td className="px-4 py-3 text-charcoal font-semibold">{zone}</td>
                      <td className="px-4 py-3 text-charcoal/70">{district}</td>
                      <td className="px-4 py-3 text-charcoal/65">{ind}</td>
                      <td className="px-4 py-3 text-charcoal/70 whitespace-nowrap">{driveTime}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </FadeUp>

          <FadeUp delay={0.1}>
            <p className="mt-6 font-body text-sm text-charcoal/70 leading-relaxed">
              For deliveries to zones further afield — including Koggala, Mirijjawila, Bingiriya,
              Mawathagama, Polgahawela, Kandy, and all other BOI zones island-wide — see our{' '}
              <a
                href="/wooden-pallets-sri-lanka"
                className="text-accent underline underline-offset-2 hover:text-accent-hover transition-colors"
              >
                island-wide delivery page
              </a>
              .
            </p>
          </FadeUp>
        </div>
      </section>

      {/* ── All Sri Lanka EPZ reference table ───────────────────────── */}
      <section className="section-padding bg-warm-gray/40">
        <div className="container-content">
          <FadeUp>
            <div className="mb-8">
              <SectionHeader
                eyebrow="Full Coverage"
                title="All Sri Lanka Export Processing Zones — Full Coverage"
              />
              <p className="font-body text-sm text-charcoal/70 leading-relaxed mt-4 max-w-2xl">
                CeyPall delivers ISPM 15 certified export pallets to every BOI Export Processing Zone
                and industrial estate in Sri Lanka. The complete zone reference:
              </p>
            </div>
          </FadeUp>

          <FadeUp delay={0.05}>
            <div className="overflow-x-auto">
              <table className="w-full text-sm font-body border-collapse">
                <thead>
                  <tr className="bg-primary text-cream">
                    <th className="text-left px-4 py-3 font-semibold text-xs tracking-[0.08em] uppercase">
                      Zone / Industrial Area
                    </th>
                    <th className="text-left px-4 py-3 font-semibold text-xs tracking-[0.08em] uppercase">
                      District
                    </th>
                    <th className="text-left px-4 py-3 font-semibold text-xs tracking-[0.08em] uppercase">
                      Primary Industries
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {allZones.map(({ zone, district, industries: ind }, i) => (
                    <tr key={zone} className={i % 2 === 0 ? 'bg-cream' : 'bg-cream/50'}>
                      <td className="px-4 py-3 text-charcoal font-semibold">{zone}</td>
                      <td className="px-4 py-3 text-charcoal/70">{district}</td>
                      <td className="px-4 py-3 text-charcoal/65">{ind}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── FAQ ─────────────────────────────────────────────────────── */}
      <section className="section-padding cream-texture">
        <div className="container-content">
          <FadeUp>
            <div className="mb-12">
              <SectionHeader
                eyebrow="Common questions"
                title="Frequently asked questions."
              />
            </div>
          </FadeUp>

          <div className="max-w-3xl space-y-0 divide-y divide-warm-gray border-t border-b border-warm-gray">
            {faqs.map(({ question, answer }, i) => (
              <FadeUp key={i} delay={i * 0.05}>
                <div className="py-7">
                  <h3 className="font-display text-lg font-semibold text-primary mb-3">
                    {question}
                  </h3>
                  <p className="font-body text-sm text-charcoal/70 leading-relaxed">{answer}</p>
                </div>
              </FadeUp>
            ))}
          </div>

          <FadeUp delay={0.1}>
            <p className="mt-8 font-body text-sm text-charcoal/60">
              More questions?{' '}
              <a href="/contact" className="text-accent underline underline-offset-2 hover:text-accent-hover transition-colors">
                Contact us directly
              </a>{' '}
              or call{' '}
              <a href="tel:+94714711417" className="text-accent underline underline-offset-2 hover:text-accent-hover transition-colors">
                +94 714 711 417
              </a>
              .
            </p>
          </FadeUp>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────────────── */}
      <section className="bg-accent py-16">
        <div className="container-content flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="font-display text-2xl text-white">
              Need pallets delivered to Negombo?
            </h2>
            <p className="font-body text-sm text-white/80 mt-1">
              Send us your size, quantity, and required date — we&apos;ll confirm quickly.
            </p>
          </div>
          <Button href="/contact" variant="outline-light" size="lg">
            Request a quote →
          </Button>
        </div>
      </section>
    </>
  )
}
