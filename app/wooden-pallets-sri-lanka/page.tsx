import type { Metadata } from 'next'
import { FadeUp } from '@/components/ui/FadeUp'
import { Button } from '@/components/ui/Button'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { SchemaScript } from '@/components/ui/SchemaScript'

export const metadata: Metadata = {
  title: 'ISPM 15 Wooden Pallets — Island-Wide Delivery Across Sri Lanka',
  description:
    'CeyPall delivers ISPM 15 certified, IPPC-stamped wooden pallets to every BOI Export Processing Zone, industrial estate, and port hub across Sri Lanka. Heat treated at our Kochchikade facility. Island-wide delivery.',
  twitter: {
    description:
      'CeyPall delivers ISPM 15 certified, IPPC-stamped wooden pallets to every BOI Export Processing Zone, industrial estate, and port hub across Sri Lanka. Heat treated at our Kochchikade facility. Island-wide delivery.',
  },
  openGraph: {
    title: 'ISPM 15 Wooden Pallets — Island-Wide Delivery Across Sri Lanka | CeyPall (Pvt) Ltd',
    description:
      'CeyPall delivers ISPM 15 certified, IPPC-stamped wooden pallets to every BOI Export Processing Zone, industrial estate, and port hub across Sri Lanka. Heat treated at our Kochchikade facility. Island-wide delivery.',
    url: 'https://www.ceypall.com/wooden-pallets-sri-lanka',
  },
  alternates: {
    canonical: 'https://www.ceypall.com/wooden-pallets-sri-lanka',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://www.ceypall.com/#business',
  name: 'CeyPall (Pvt) Ltd — Island-Wide Pallet Delivery Sri Lanka',
  description:
    'CeyPall delivers ISPM 15 certified, IPPC-stamped heat treated wooden pallets to all BOI Export Processing Zones, industrial estates, port hubs, and tea regions across Sri Lanka. Manufactured at Kochchikade.',
  url: 'https://www.ceypall.com/wooden-pallets-sri-lanka',
  telephone: ['+94714711417', '+94769494944', '+94312277752'],
  email: 'office@ceypall.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '1088, Colombo Road, Daluwakotuwa',
    addressLocality: 'Kochchikade',
    postalCode: '11540',
    addressCountry: 'LK',
  },
  areaServed: { '@type': 'Country', name: 'Sri Lanka' },
}

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.ceypall.com/' },
    { '@type': 'ListItem', position: 2, name: 'Wooden Pallets Sri Lanka', item: 'https://www.ceypall.com/wooden-pallets-sri-lanka' },
  ],
}

const reasons = [
  {
    number: '01',
    title: 'Every EPZ & Industrial Zone',
    body: 'We deliver to all 12 BOI Export Processing Zones and major industrial estates across Sri Lanka — from Katunayake in the north-west to Koggala in the south and Mirijjawila in Hambantota.',
  },
  {
    number: '02',
    title: 'All Ports & Export Hubs',
    body: 'Colombo Port, Hambantota Port, Trincomalee Port, and Bandaranaike International Airport cargo — we supply exporters and freight forwarders at every major Sri Lankan port and cargo gateway.',
  },
  {
    number: '03',
    title: 'Full ISPM 15 Documentation',
    body: 'Every delivery anywhere in Sri Lanka includes a heat treatment certificate, IPPC compliance letter, and batch treatment records — everything customs authorities require at every destination port worldwide.',
  },
]

const zoneRows = [
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

const provinces = [
  'Western Province',
  'North Western Province',
  'Central Province',
  'Southern Province',
  'Sabaragamuwa Province',
  'North Central Province',
  'Eastern Province',
  'Northern Province',
  'Uva Province',
]

const faqs = [
  {
    question: 'Does CeyPall deliver pallets to all BOI Export Processing Zones in Sri Lanka?',
    answer:
      'Yes. CeyPall delivers ISPM 15 certified, IPPC-stamped wooden pallets to all 12 BOI Export Processing Zones across Sri Lanka — including Katunayake, Biyagama, Seethawaka, Koggala, Mirigama, Wathupitiwela, Horana, Malwatta, Mawathagama, Polgahawela, Bingiriya, and Mirijjawila. Contact us with your zone, quantity, and delivery date and we will arrange accordingly.',
  },
  {
    question: 'Can CeyPall supply pallets to factories in the Southern Province?',
    answer:
      'Yes. We supply Koggala EPZ, Mirijjawila EPZ near Hambantota, and factories across the Southern Province. Delivery timelines depend on distance and order volume — contact us for a specific lead time and quotation.',
  },
  {
    question: 'Do you deliver to tea factories and estates in the hill country?',
    answer:
      'Yes. We supply wooden pallets to tea factories, packaging operations, and exporters in Nuwara Eliya, Hatton, Kandy, Matale, Ratnapura, and Balangoda. Tea pallets must be ISPM 15 compliant for all of Sri Lanka\'s export destinations. Contact us for delivery arrangements to upcountry locations.',
  },
  {
    question: 'What is the lead time for delivery to zones outside the Western Province?',
    answer:
      'For zones within the Western Province, standard lead time is 3–5 working days. For zones outside the Western Province — including Koggala, Mirijjawila, Kandy, Kurunegala, and Trincomalee — lead times vary by location and order volume. Contact us at +94 714 711 417 and we will confirm a specific delivery timeline for your location.',
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

export default function WoodenPalletsSriLankaPage() {
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
                Island-Wide Delivery · All Nine Provinces
              </p>
              <h1 className="font-display text-display-lg text-cream">
                ISPM 15 Pallets Delivered to Every Corner of Sri Lanka.
              </h1>
              <span className="block w-10 h-0.5 bg-accent mt-4 mb-5" />
              <p className="font-body text-base text-cream/80 leading-relaxed mb-8">
                CeyPall manufactures and delivers heat-treated, IPPC-stamped wooden pallets to BOI Export
                Processing Zones, industrial estates, port hubs, tea regions, and factories across all nine
                provinces — with full ISPM 15 documentation for every consignment.
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

      {/* ── Why CeyPall island-wide ───────────────────────────────────── */}
      <section className="section-padding cream-texture">
        <div className="container-content">
          <FadeUp>
            <div className="mb-12">
              <SectionHeader
                eyebrow="Serving All Sri Lanka"
                title="Why exporters across Sri Lanka choose CeyPall."
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

      {/* ── Zone coverage table ───────────────────────────────────────── */}
      <section className="section-padding bg-warm-gray/40">
        <div className="container-content">
          <FadeUp>
            <div className="mb-8">
              <SectionHeader
                eyebrow="Coverage"
                title="Sri Lanka's Export Processing Zones & Industrial Areas — All Covered"
              />
              <p className="font-body text-sm text-charcoal/70 leading-relaxed mt-4 max-w-2xl">
                CeyPall delivers ISPM 15 certified export pallets to manufacturers, freight forwarders,
                and logistics operators across every BOI Export Processing Zone and industrial estate in
                Sri Lanka. Every zone, every province.
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
                  {zoneRows.map(({ zone, district, industries }, i) => (
                    <tr
                      key={zone}
                      className={i % 2 === 0 ? 'bg-cream' : 'bg-cream/50'}
                    >
                      <td className="px-4 py-3 text-charcoal font-semibold">{zone}</td>
                      <td className="px-4 py-3 text-charcoal/70">{district}</td>
                      <td className="px-4 py-3 text-charcoal/65">{industries}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── Delivery & province coverage ─────────────────────────────── */}
      <section className="section-padding cream-texture">
        <div className="container-content">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Province coverage */}
            <FadeUp>
              <div>
                <p className="font-body text-xs font-semibold tracking-[0.15em] uppercase text-accent mb-5">
                  Province coverage
                </p>
                <h2 className="font-display text-display-md text-primary mb-6">
                  All nine provinces. Every delivery point.
                </h2>
                <div className="flex flex-wrap gap-2">
                  {provinces.map((province) => (
                    <span
                      key={province}
                      className="font-body text-sm text-charcoal/80 bg-cream border border-warm-gray px-4 py-2"
                    >
                      {province}
                    </span>
                  ))}
                </div>
                <p className="mt-6 font-body text-sm text-charcoal/60 leading-relaxed">
                  Not listed here? If your business exports or stores goods anywhere in Sri Lanka, we
                  almost certainly supply what you need.{' '}
                  <a
                    href="/contact"
                    className="text-accent underline underline-offset-2 hover:text-accent-hover transition-colors"
                  >
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
                        Manufacturing facility
                      </p>
                      <p className="font-body text-sm text-cream/90 font-semibold">
                        Island-wide delivery from Kochchikade
                      </p>
                      <p className="font-body text-xs text-cream/60 mt-0.5">
                        1088 Colombo Road, Daluwakotuwa — direct A3 highway access
                      </p>
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
                        Our manufacturing facility is located at 1088 Colombo Road, Daluwakotuwa,
                        Kochchikade — on the north-western coastal corridor with direct access to the
                        A3 highway. From here we deliver to factories, EPZs, ports, and warehouses
                        across all nine provinces. For high-volume or recurring orders we schedule
                        deliveries to align with your container stuffing dates and vessel departures.
                      </p>
                    </div>
                  </div>

                  <div className="border-t border-cream/10 pt-6">
                    <p className="font-body text-xs text-cream/60 leading-relaxed">
                      Serving all nine provinces — Western, North Western, Central, Southern,
                      Sabaragamuwa, North Central, Eastern, Northern, and Uva.
                    </p>
                  </div>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── FAQ ─────────────────────────────────────────────────────── */}
      <section className="section-padding bg-warm-gray/40">
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
              <a
                href="/contact"
                className="text-accent underline underline-offset-2 hover:text-accent-hover transition-colors"
              >
                Contact us directly
              </a>{' '}
              or call{' '}
              <a
                href="tel:+94714711417"
                className="text-accent underline underline-offset-2 hover:text-accent-hover transition-colors"
              >
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
              Need pallets delivered anywhere in Sri Lanka?
            </h2>
            <p className="font-body text-sm text-white/80 mt-1">
              Send us your zone, quantity, and required date — we&apos;ll confirm quickly.
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
