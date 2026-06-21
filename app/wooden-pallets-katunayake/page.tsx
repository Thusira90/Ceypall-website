import type { Metadata } from 'next'
import { FadeUp } from '@/components/ui/FadeUp'
import { Button } from '@/components/ui/Button'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { SchemaScript } from '@/components/ui/SchemaScript'

export const metadata: Metadata = {
  title: 'ISPM 15 Wooden Pallets — Katunayake FTZ & Seeduwa',
  description:
    'CeyPall supplies heat-treated, IPPC-stamped export pallets to BOI companies and exporters in the Katunayake Free Trade Zone and Seeduwa area. ISPM 15 certified. Treatment certificate included.',
  twitter: {
    description:
      'CeyPall supplies heat-treated, IPPC-stamped export pallets to BOI companies and exporters in the Katunayake Free Trade Zone and Seeduwa area. ISPM 15 certified. Treatment certificate included.',
  },
  openGraph: {
    title: 'ISPM 15 Wooden Pallets — Katunayake FTZ & Seeduwa | CeyPall (Pvt) Ltd',
    description:
      'Heat-treated, IPPC-stamped export pallets supplied to BOI companies and exporters in the Katunayake Free Trade Zone. ISPM 15 certified. CeyPall (Pvt) Ltd.',
    url: 'https://www.ceypall.com/wooden-pallets-katunayake',
  },
  alternates: {
    canonical: 'https://www.ceypall.com/wooden-pallets-katunayake',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://www.ceypall.com/#business',
  name: 'CeyPall (Pvt) Ltd',
  description:
    'ISPM 15 certified wooden pallet manufacturer supplying heat-treated export pallets to the Katunayake Free Trade Zone and Seeduwa area.',
  url: 'https://www.ceypall.com/wooden-pallets-katunayake',
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
    { '@type': 'City', name: 'Katunayake' },
    { '@type': 'Place', name: 'Katunayake Free Trade Zone' },
    { '@type': 'City', name: 'Seeduwa' },
  ],
}

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.ceypall.com/' },
    { '@type': 'ListItem', position: 2, name: 'Wooden Pallets Katunayake', item: 'https://www.ceypall.com/wooden-pallets-katunayake' },
  ],
}

const reasons = [
  {
    number: '01',
    title: 'BOI & FTZ Compliance',
    body: 'Our pallets are ISPM 15 certified and IPPC stamped, meeting all requirements for BOI export shipments. Every order is accompanied by a signed heat treatment certificate — accepted at customs worldwide.',
  },
  {
    number: '02',
    title: 'Close to the FTZ',
    body: 'Our Kochchikade facility is approximately 35 km from the Katunayake Free Trade Zone, allowing us to dispatch quickly against your container loading date. No long-distance logistics overhead.',
  },
  {
    number: '03',
    title: 'Bulk Orders, Reliable Lead Times',
    body: 'We handle high-volume orders for garment, apparel, and manufacturing exporters — with consistent production capacity and delivery schedules aligned to vessel departures.',
  },
]

const industries = [
  'Garments & Apparel',
  'Electronics Manufacturing',
  'Food Processing',
  'Rubber Products',
  'Logistics & Freight Forwarding',
  'BOI-Registered Companies',
  'Export Trading Companies',
]

const nearbyZones = [
  { zone: 'Katunayake EPZ', district: 'Gampaha', industries: 'Apparel, electronics, high-value manufacturing', driveTime: '20–30 min' },
  { zone: 'Biyagama EPZ', district: 'Gampaha', industries: 'Electronics, chemicals, industrial manufacturing', driveTime: '45–60 min' },
  { zone: 'Wathupitiwela EPZ', district: 'Gampaha', industries: 'Mixed manufacturing, low-polluting industries', driveTime: '50–65 min' },
  { zone: 'Mirigama EPZ', district: 'Gampaha', industries: 'Export-focused manufacturing', driveTime: '60–75 min' },
  { zone: 'Malwatta EPZ', district: 'Gampaha', industries: 'Mixed export industries', driveTime: '30–45 min' },
  { zone: 'Seethawaka EPZ', district: 'Colombo', industries: 'Apparel, rubber, chemicals', driveTime: '75–90 min' },
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
    question: 'Do ISPM 15 pallets comply with BOI export requirements?',
    answer:
      'Yes. ISPM 15 is an internationally mandated standard for wooden packing material used in export shipments. CeyPall pallets are heat-treated to 56°C core temperature for a minimum of 30 minutes, IPPC-stamped, and come with a treatment certificate — fully compliant with BOI export requirements and accepted in all major markets including the EU, USA, UK, Australia, China, and the Middle East.',
  },
  {
    question: 'How quickly can you deliver to the Katunayake FTZ?',
    answer:
      'Typically within 1–2 business days for standard orders. Our Kochchikade facility is approximately 35 km from the FTZ, so we can respond quickly to time-sensitive orders. Contact us with your container loading date and we\'ll plan the delivery to fit your schedule.',
  },
  {
    question: 'Do you supply garment factories and BOI-registered companies?',
    answer:
      'Yes. We regularly supply apparel manufacturers, logistics operators, and BOI-registered companies in the Katunayake area. We can accommodate recurring standing orders and blanket purchase arrangements for companies with regular export volumes.',
  },
]

export default function KatunayakePage() {
  return (
    <>
      <SchemaScript schema={jsonLd} />
      <SchemaScript schema={breadcrumbJsonLd} />

      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section className="wood-texture section-padding">
        <div className="container-content">
          <FadeUp>
            <div className="max-w-2xl">
              <p className="font-body text-xs font-semibold tracking-[0.15em] uppercase text-accent mb-4">
                Katunayake Free Trade Zone
              </p>
              <h1 className="font-display text-display-lg text-cream">
                Export Pallets for Katunayake Manufacturers.
              </h1>
              <span className="block w-10 h-0.5 bg-accent mt-4 mb-5" />
              <p className="font-body text-base text-cream/80 leading-relaxed mb-8">
                ISPM 15-certified, IPPC-stamped wooden pallets supplied directly to BOI companies and
                exporters in the Katunayake Free Trade Zone and Seeduwa area. Treatment certificate
                included with every order.
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

      {/* ── Why CeyPall for Katunayake ───────────────────────────────── */}
      <section className="section-padding cream-texture">
        <div className="container-content">
          <FadeUp>
            <div className="mb-12">
              <SectionHeader
                eyebrow="Serving Katunayake"
                title="Why exporters in Katunayake choose CeyPall."
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
                  Who we supply in Katunayake.
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
                  Delivery & service area
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
                      <p className="font-body text-sm text-cream/90 font-semibold">35–50 minutes</p>
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
                        We regularly supply to the Katunayake FTZ and Seeduwa area. Contact us with
                        your container date and we&apos;ll plan delivery around it.
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
                eyebrow="North-Western Corridor"
                title="Nearby Zones We Also Supply"
              />
              <p className="font-body text-sm text-charcoal/70 leading-relaxed mt-4 max-w-2xl">
                CeyPall&apos;s Kochchikade facility sits at the centre of Sri Lanka&apos;s north-western
                industrial corridor. In addition to Katunayake FTZ, we regularly supply manufacturers
                and logistics operators in the following nearby zones:
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
              Mawathagama, Polgahawela, Horana, Kandy, and all other BOI zones island-wide — see
              our{' '}
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
              Need pallets delivered to Katunayake?
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
