import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { FadeUp } from '@/components/ui/FadeUp'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Button } from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'Export Pallet Manufacturer Sri Lanka | ISPM 15 Certified | CeyPall',
  description:
    "CeyPall is Sri Lanka's dedicated export pallet manufacturer. ISPM 15 certified, IPPC-stamped heat treated wooden pallets for tea, apparel, coconut, rubber and general export. Custom sizes, island-wide delivery.",
  alternates: {
    canonical: 'https://www.ceypall.com/export-pallet-manufacturer-sri-lanka',
  },
  openGraph: {
    title: 'Export Pallet Manufacturer Sri Lanka | CeyPall (Pvt) Ltd',
    description:
      "CeyPall is Sri Lanka's dedicated export pallet manufacturer. ISPM 15 certified, IPPC-stamped heat treated wooden pallets for tea, apparel, coconut, rubber and general export. Custom sizes, island-wide delivery.",
    url: 'https://www.ceypall.com/export-pallet-manufacturer-sri-lanka',
  },
}

// ── Structured data ────────────────────────────────────────────────────────

const productJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'Export Wooden Pallets',
  description:
    'ISPM 15 certified export wooden pallets manufactured by CeyPall (Pvt) Ltd in Sri Lanka. Heat treated, IPPC-stamped, custom sizes with island-wide delivery.',
  brand: { '@type': 'Brand', name: 'CeyPall' },
  manufacturer: {
    '@type': 'Organization',
    name: 'CeyPall (Pvt) Ltd',
    url: 'https://www.ceypall.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '1088 Colombo Road',
      addressLocality: 'Daluwakotuwa',
      postalCode: '11540',
      addressCountry: 'LK',
    },
    telephone: '+94714711417',
  },
  category: 'Export Pallets',
  material: 'Wood',
  additionalProperty: [
    { '@type': 'PropertyValue', name: 'Certification', value: 'ISPM 15' },
    { '@type': 'PropertyValue', name: 'Treatment Method', value: 'Heat Treatment (HT)' },
    { '@type': 'PropertyValue', name: 'IPPC Stamped', value: 'Yes' },
    { '@type': 'PropertyValue', name: 'Delivery Coverage', value: 'Island-wide across Sri Lanka' },
  ],
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Do I need ISPM 15 pallets to export from Sri Lanka?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Any wooden packaging material used in international trade must comply with ISPM 15. This applies to all of Sri Lanka\'s export destinations including the EU, United States, United Kingdom, Japan, Australia, India, China, Middle East and all other IPPC member countries. Non-compliant pallets will be rejected at customs.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the IPPC stamp on an export pallet?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The IPPC stamp is the official mark that confirms a pallet has been treated in compliance with ISPM 15. It includes the IPPC logo, the country code (LK for Sri Lanka), the registered treatment provider\'s number, and the treatment code (HT for heat treatment). Customs authorities worldwide are trained to inspect this mark.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can CeyPall supply pallets for specific container sizes?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. CeyPall manufactures pallets in all standard international sizes and custom dimensions. Provide your container type (20ft, 40ft, 40ft HC) and cargo dimensions, and CeyPall will recommend the optimal pallet configuration for maximum container utilisation.',
      },
    },
    {
      '@type': 'Question',
      name: 'What wood species does CeyPall use?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'CeyPall primarily uses rubber wood (Hevea brasiliensis), which is widely available in Sri Lanka and approved for ISPM 15 treatment. Other timber species are available on request depending on load requirements and customer specifications.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does CeyPall deliver to my factory?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'CeyPall delivers island-wide to factories, EPZs, warehouses, freight forwarding companies and ports across Sri Lanka. Delivery coverage includes Colombo, Katunayake, Biyagama, Horana, Seethawaka, Koggala, Kandy and all major industrial areas.',
      },
    },
    {
      '@type': 'Question',
      name: 'What documentation does CeyPall provide?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Every consignment includes heat treatment certificates, IPPC compliance letters, batch treatment records and any additional documentation your freight forwarder or buyer requires for customs clearance.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I request a quotation?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Contact CeyPall by phone at 071 471 1417 or through the website contact form. Provide the pallet size, quantity, delivery location and any special requirements. CeyPall will respond with a quotation within one working day.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can CeyPall supply pallets on a recurring basis?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. CeyPall supplies many exporters on ongoing contracts with scheduled delivery. Production can be aligned with your factory shipping schedule to ensure stock availability when needed.',
      },
    },
  ],
}

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.ceypall.com' },
    { '@type': 'ListItem', position: 2, name: 'Products', item: 'https://www.ceypall.com/products' },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Export Pallet Manufacturer Sri Lanka',
      item: 'https://www.ceypall.com/export-pallet-manufacturer-sri-lanka',
    },
  ],
}

// ── Page data ──────────────────────────────────────────────────────────────

const complianceRequirements = [
  {
    num: '01',
    title: 'Debarked',
    desc: 'All bark must be removed from the timber before treatment. Bark can harbour pests even after heat treatment.',
  },
  {
    num: '02',
    title: 'Heat treated',
    desc: 'The wood must reach a minimum core temperature of 56°C, maintained for at least 30 continuous minutes. This eliminates wood-borne insects, larvae and fungi at all life stages.',
  },
  {
    num: '03',
    title: 'IPPC stamped',
    desc: 'Every compliant pallet must carry the official IPPC mark showing the country code (LK for Sri Lanka), the registered treatment provider\'s number, and the treatment code (HT for heat treatment).',
  },
]

const industries = [
  {
    heading: 'Tea Export Pallets',
    body: 'Sri Lanka is the world\'s fourth-largest tea producer, exporting to over 100 countries including Iraq, Russia, Turkey, Iran, Libya, the UAE and Japan. Tea chests, cartons and bulk packaging all ship on wooden pallets. We supply pallets sized for standard tea chest configurations, fully ISPM 15 compliant for every destination market.',
  },
  {
    heading: 'Apparel and Garment Export Pallets',
    body: 'The apparel sector is Sri Lanka\'s largest export earner at over US$4.4 billion annually. Garment factories in Katunayake, Biyagama, Seethawaka, Koggala and other export processing zones require a consistent, reliable supply of export-grade pallets for container loading. We deliver standard and custom pallet sizes on schedule to meet factory shipping timelines.',
  },
  {
    heading: 'Coconut Product Export Pallets',
    body: 'Coconut-based exports crossed US$1 billion for the first time in 2025, with desiccated coconut, coconut oil, coconut cream, activated carbon and coir products shipped primarily to the EU, US and East Asian markets. These products face strict phytosanitary inspection at destination. Our IPPC-stamped pallets ensure compliance.',
  },
  {
    heading: 'Rubber Product Export Pallets',
    body: 'Sri Lanka exports over US$1 billion in rubber and rubber-finished products annually — including industrial gloves, tyres, rubber sheets and latex goods. These are heavy, dense products requiring durable, load-rated pallets. We manufacture pallets designed for high-weight rubber product shipments with reinforced deck boards and stringers.',
  },
  {
    heading: 'Spice Export Pallets',
    body: 'Cinnamon, pepper, cloves, cardamom and nutmeg are exported from Sri Lanka to markets worldwide. Spice exports face particularly rigorous phytosanitary inspection due to the agricultural nature of the product. Heat treated, IPPC-stamped pallets are mandatory — no exceptions.',
  },
  {
    heading: 'General Manufacturing and Freight Forwarding',
    body: 'We work with logistics companies, freight forwarders, third-party warehouses and general manufacturers across the island. Whether you are consolidating mixed cargo, shipping electronic components, or supplying industrial equipment, we provide export-compliant pallets in any size and quantity.',
  },
]

const palletSizes = [
  { dim: '1200 × 1000 mm', name: 'ISO / Euro-Asian', use: 'Most common export pallet worldwide. Used across all industries.' },
  { dim: '1200 × 800 mm', name: 'EUR / Euro Pallet', use: 'Standard for European markets. Common for apparel and consumer goods.' },
  { dim: '1100 × 1100 mm', name: 'Asian Standard', use: 'Standard for Asian and Australian markets. Common for drums and bulk packaging.' },
  { dim: '1200 × 1200 mm', name: 'Large Format', use: 'Used for bulk industrial goods, drums and oversized cargo.' },
  { dim: 'Custom', name: 'Any dimension', use: 'Built to specification for non-standard containers, machinery or heavy cargo.' },
]

const processSteps = [
  {
    step: '01',
    title: 'Timber Sourcing',
    body: 'We source rubber wood and other approved timber species from local suppliers. All timber is inspected for quality, moisture content and structural integrity before use.',
  },
  {
    step: '02',
    title: 'Debarking and Cutting',
    body: 'Timber is debarked and precision-cut to the required dimensions using our production machinery. Debarking is a mandatory ISPM 15 pre-treatment requirement.',
  },
  {
    step: '03',
    title: 'Assembly',
    body: 'Pallets are assembled to specification — standard sizes or custom dimensions. Deck boards, stringers and blocks are secured using pneumatic nailing equipment to ensure structural consistency.',
  },
  {
    step: '04',
    title: 'Heat Treatment',
    body: 'Assembled pallets are loaded into our on-site heat treatment kiln. Temperature probes monitor the core wood temperature to ensure it reaches a minimum of 56°C and is maintained for at least 30 minutes. Treatment data is logged for every batch.',
  },
  {
    step: '05',
    title: 'IPPC Stamping',
    body: 'Every treated pallet is stamped with our official IPPC mark — the IPPC logo, country code LK, our NPQS registration number, and the HT treatment code. This stamp is the internationally recognised proof of compliance.',
  },
  {
    step: '06',
    title: 'Quality Check and Dispatch',
    body: 'Finished pallets are inspected for structural integrity, stamp clarity and dimensional accuracy before being loaded for delivery. Treatment certificates and compliance documentation are prepared for each consignment.',
  },
]

const deliveryZones = [
  { area: 'Colombo Port and surrounding areas', towns: 'Colombo, Wattala, Ja-Ela, Ekala, Peliyagoda' },
  { area: 'Katunayake Export Corridor', towns: 'Katunayake, Negombo, Seeduwa, Minuwangoda' },
  { area: 'Biyagama and Kaduwela EPZ', towns: 'Biyagama, Kaduwela, Malabe' },
  { area: 'Southern Industrial Zone', towns: 'Horana, Seethawaka, Avissawella' },
  { area: 'Galle and Southern Coast', towns: 'Koggala EPZ, Galle, Bata-Ata' },
  { area: 'Central and Upcountry', towns: 'Pallekele, Kandy, Nuwara Eliya (tea industry)' },
  { area: 'Eastern and Northern', towns: 'Trincomalee, Jaffna (on request)' },
]

const whyFeatures = [
  {
    title: 'Export-Only Focus',
    body: 'We are not a general timber company. CeyPall manufactures pallets exclusively for the export market. Every process, every quality check and every piece of documentation is built around export compliance.',
  },
  {
    title: 'ISPM 15 Certified',
    body: 'We are a registered heat treatment provider with the National Plant Quarantine Service (NPQS) of Sri Lanka. Our IPPC mark is officially recognised in all major trading nations.',
  },
  {
    title: 'On-Site Heat Treatment',
    body: 'Our heat treatment kiln is at our manufacturing facility. We control the entire chain — from raw timber to finished, stamped, export-ready pallet — under one roof.',
  },
  {
    title: 'Custom Sizing',
    body: 'We build pallets to any dimension. Non-standard cargo, unusual container configurations, heavy machinery — whatever the requirement, we manufacture to suit.',
  },
  {
    title: 'Full Compliance Documentation',
    body: 'Every order includes heat treatment certificates, IPPC compliance letters and batch treatment records. This documentation supports your customs clearance at the destination port.',
  },
  {
    title: 'Reliable Supply',
    body: 'We maintain production capacity for both one-off orders and ongoing contracts. Standard sizes are typically delivered within 3–5 working days.',
  },
]

const faqs = [
  {
    q: 'Do I need ISPM 15 pallets to export from Sri Lanka?',
    a: "Yes. Any wooden packaging material used in international trade must comply with ISPM 15. This applies to all of Sri Lanka's export destinations including the EU, United States, United Kingdom, Japan, Australia, India, China, Middle East and all other IPPC member countries. Non-compliant pallets will be rejected at customs.",
  },
  {
    q: 'What is the IPPC stamp on an export pallet?',
    a: 'The IPPC stamp is the official mark that confirms a pallet has been treated in compliance with ISPM 15. It includes the IPPC logo, the country code (LK for Sri Lanka), the registered treatment provider\'s number, and the treatment code (HT for heat treatment). Customs authorities worldwide are trained to inspect this mark.',
  },
  {
    q: 'Can CeyPall supply pallets for specific container sizes?',
    a: 'Yes. We manufacture pallets in all standard international sizes and custom dimensions. If you provide your container type (20ft, 40ft, 40ft HC) and cargo dimensions, we will recommend the optimal pallet configuration for maximum container utilisation.',
  },
  {
    q: 'What wood species does CeyPall use?',
    a: 'We primarily use rubber wood (Hevea brasiliensis), which is widely available in Sri Lanka and approved for ISPM 15 treatment. Other timber species are available on request depending on load requirements and customer specifications.',
  },
  {
    q: 'Does CeyPall deliver to my factory?',
    a: 'We deliver island-wide to factories, EPZs, warehouses, freight forwarding companies and ports across Sri Lanka. Delivery coverage includes Colombo, Katunayake, Biyagama, Horana, Seethawaka, Koggala, Kandy and all major industrial areas.',
  },
  {
    q: 'What documentation does CeyPall provide?',
    a: 'Every consignment includes heat treatment certificates, IPPC compliance letters, batch treatment records and any additional documentation your freight forwarder or buyer requires for customs clearance.',
  },
  {
    q: 'How do I request a quotation?',
    a: 'Contact us by phone at 071 471 1417 or through our website contact form. Provide the pallet size, quantity, delivery location and any special requirements. We will respond with a quotation within one working day.',
  },
  {
    q: 'Can CeyPall supply pallets on a recurring basis?',
    a: 'Yes. We supply many exporters on ongoing contracts with scheduled delivery. We can align pallet production with your factory shipping schedule to ensure stock availability when you need it.',
  },
]

// ── Page component ─────────────────────────────────────────────────────────

export default function ExportPalletManufacturerPage() {
  return (
    <>
      {/* ── JSON-LD ─────────────────────────────────────────────────────── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      {/* ── Breadcrumb ──────────────────────────────────────────────────── */}
      <nav aria-label="Breadcrumb" className="bg-cream border-b border-warm-gray">
        <div className="container-content py-3">
          <ol className="flex items-center gap-2 font-body text-xs text-charcoal/50">
            <li>
              <Link href="/" className="hover:text-accent transition-colors duration-150">
                Home
              </Link>
            </li>
            <li aria-hidden="true" className="select-none">›</li>
            <li>
              <Link href="/products" className="hover:text-accent transition-colors duration-150">
                Products
              </Link>
            </li>
            <li aria-hidden="true" className="select-none">›</li>
            <li className="text-charcoal/80 font-medium">Export Pallet Manufacturer Sri Lanka</li>
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
                  ISPM 15 Certified — Kochchikade, Sri Lanka
                </p>
                <h1 className="font-display text-display-lg text-cream">
                  Export Pallet Manufacturer in Sri Lanka
                </h1>
                <span className="block w-10 h-0.5 bg-accent mt-4 mb-5" />
                <p className="font-body text-base text-cream/80 leading-relaxed mb-8">
                  CeyPall (Pvt) Ltd manufactures{' '}
                  <Link href="/ispm15-pallets-sri-lanka" className="text-accent/90 hover:text-accent underline underline-offset-2 transition-colors">
                    ISPM 15
                  </Link>{' '}
                  certified, IPPC-stamped wooden pallets for Sri Lankan exporters.{' '}
                  <Link href="/heat-treated-pallets" className="text-accent/90 hover:text-accent underline underline-offset-2 transition-colors">
                    Heat treated
                  </Link>{' '}
                  at our facility in Kochchikade. Custom sizes. Island-wide delivery to factories, warehouses and ports.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button href="/contact" variant="primary" size="lg">
                    Request a Quotation →
                  </Button>
                  <Button href="/products" variant="outline-light" size="lg">
                    View all products
                  </Button>
                </div>
              </div>
            </FadeUp>

            <FadeUp delay={0.12}>
              {/* Hero image — replace with export-pallets-ceypall-sri-lanka.webp when available */}
              <div className="aspect-[4/3] relative overflow-hidden">
                <Image
                  src="/HT PALLET TRANSPORT.jpg"
                  alt="Export wooden pallets manufactured by CeyPall in Sri Lanka, ISPM 15 certified and IPPC stamped"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── Section 1: Sri Lanka's Dedicated Export Pallet Manufacturer ──── */}
      <section className="section-padding cream-texture">
        <div className="container-content">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <FadeUp>
              <div>
                <SectionHeader
                  eyebrow="About CeyPall"
                  title="Sri Lanka's Dedicated Export Pallet Manufacturer"
                />
                <div className="space-y-4 font-body text-sm text-charcoal/70 leading-relaxed">
                  <p>
                    CeyPall (Pvt) Ltd is a specialist wooden pallet manufacturer based in Kochchikade, Sri Lanka. We manufacture pallets exclusively for the export market — every pallet we produce is{' '}
                    <Link href="/heat-treated-pallets" className="text-accent underline underline-offset-2 hover:text-accent-hover transition-colors">
                      heat treated
                    </Link>{' '}
                    in our on-site kiln and stamped with our official IPPC mark before leaving the factory.
                  </p>
                  <p>
                    Sri Lanka&apos;s export economy depends on compliant packaging. Apparel shipments to the US and EU, tea exports to the Middle East and Russia, coconut products to Europe and East Asia, and rubber goods to global industrial markets — all require wooden pallets that meet{' '}
                    <Link href="/ispm15-pallets-sri-lanka" className="text-accent underline underline-offset-2 hover:text-accent-hover transition-colors">
                      ISPM 15
                    </Link>{' '}
                    international phytosanitary standards. Non-compliant pallets can result in customs rejections, fumigation charges, quarantine delays and damaged buyer relationships.
                  </p>
                  <p>
                    CeyPall exists to solve this problem. We supply export-ready pallets to manufacturers, freight forwarders and logistics companies across Sri Lanka. Our pallets are{' '}
                    <Link href="/heat-treated-pallets" className="text-accent underline underline-offset-2 hover:text-accent-hover transition-colors">
                      heat treated
                    </Link>
                    , IPPC-stamped, and delivered with full compliance documentation — ready for container loading and international shipment.
                  </p>
                </div>
              </div>
            </FadeUp>

            <FadeUp delay={0.12}>
              <div className="bg-primary p-8">
                <p className="font-body text-xs font-semibold tracking-[0.15em] uppercase text-accent mb-6">
                  At a glance
                </p>
                <ul className="space-y-5">
                  {[
                    { label: 'Facility location', value: 'Kochchikade, Sri Lanka' },
                    { label: 'Treatment standard', value: 'ISPM 15 (IPPC)' },
                    { label: 'Treatment method', value: 'Heat Treatment (HT) — 56°C core, 30 min' },
                    { label: 'Registration', value: 'NPQS-registered provider' },
                    { label: 'Countries compliant', value: 'All major trading nations' },
                    { label: 'Delivery', value: 'Island-wide across Sri Lanka' },
                    { label: 'Founded', value: '2005' },
                  ].map(({ label, value }) => (
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

      {/* ── Section 2: What Makes an Export Pallet Compliant ────────────── */}
      <section className="section-padding bg-warm-gray/40">
        <div className="container-content">
          <FadeUp>
            <SectionHeader
              eyebrow="Compliance"
              title="What Makes an Export Pallet Compliant?"
            />
          </FadeUp>

          <FadeUp delay={0.08}>
            <div className="mt-2 max-w-3xl space-y-4 font-body text-sm text-charcoal/70 leading-relaxed">
              <p>
                For a wooden pallet to be legally used in international shipping, it must meet the requirements of{' '}
                <Link href="/ispm15-pallets-sri-lanka" className="text-accent underline underline-offset-2 hover:text-accent-hover transition-colors">
                  ISPM 15
                </Link>{' '}
                — the International Standards for Phytosanitary Measures No. 15. This regulation is enforced by customs authorities worldwide. Sri Lanka, as both an exporter and importer, is a signatory to the International Plant Protection Convention (IPPC) that administers this standard.
              </p>
              <p>
                ISPM 15 requires that all wooden packaging materials used in international trade — including pallets, crates, dunnage and timber with a cross-section greater than 6mm — must be:
              </p>
            </div>
          </FadeUp>

          <ol className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-px bg-warm-gray">
            {complianceRequirements.map(({ num, title, desc }, i) => (
              <FadeUp key={num} delay={i * 0.07}>
                <li className="bg-cream p-8 flex flex-col gap-4 h-full list-none">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex items-center justify-center w-8 h-8 bg-accent text-white font-body text-xs font-bold flex-shrink-0">
                      {num}
                    </span>
                    <h3 className="font-display text-base font-semibold text-primary">{title}</h3>
                  </div>
                  <p className="font-body text-sm text-charcoal/65 leading-relaxed">{desc}</p>
                </li>
              </FadeUp>
            ))}
          </ol>

          <FadeUp delay={0.14}>
            <div className="mt-8 max-w-3xl space-y-4 font-body text-sm text-charcoal/70 leading-relaxed">
              <p>
                Without a valid IPPC stamp, wooden pallets will be rejected at the destination port. Customs authorities in the EU, United States, Japan, Australia, India, China and all major trading nations actively inspect wood packaging on arrival.
              </p>
              <p>
                CeyPall is registered with Sri Lanka's National Plant Quarantine Service (NPQS) as an approved ISPM 15 treatment provider. Every pallet we manufacture meets all three requirements — debarked,{' '}
                <Link href="/heat-treated-pallets" className="text-accent underline underline-offset-2 hover:text-accent-hover transition-colors">
                  heat treated
                </Link>{' '}
                to 56°C for 30+ minutes, and IPPC-stamped with our registered mark.
              </p>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── Section 3: Industries ────────────────────────────────────────── */}
      <section className="section-padding cream-texture">
        <div className="container-content">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <FadeUp>
              <div>
                <SectionHeader
                  eyebrow="Industries served"
                  title="Export Industries We Supply"
                />
                <p className="font-body text-sm text-charcoal/70 leading-relaxed">
                  Sri Lanka&apos;s merchandise exports reached a record US$14.4 billion in 2025. Apparel and textiles account for approximately 40% of total exports, followed by tea, rubber products, coconut-based goods, spices, gems and electronic components. Every one of these industries ships goods on wooden pallets that must comply with international phytosanitary standards.
                </p>
                <p className="mt-4 font-body text-sm text-charcoal/70 leading-relaxed">
                  CeyPall supplies export pallets to manufacturers and logistics operators across Sri Lanka&apos;s key export sectors:
                </p>
              </div>
            </FadeUp>

            {/* Industries image — replace with tea-export-pallets-sri-lanka.webp when available */}
            <FadeUp delay={0.12}>
              <div className="aspect-[4/3] relative overflow-hidden border border-warm-gray">
                <Image
                  src="/HT Pallet 04.jpg"
                  alt="Wooden export pallets for Sri Lankan tea industry, ISPM 15 compliant"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </FadeUp>
          </div>

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

      {/* ── Section 4: Pallet Sizes ──────────────────────────────────────── */}
      <section className="section-padding bg-warm-gray/40">
        <div className="container-content">
          <FadeUp>
            <SectionHeader
              eyebrow="Dimensions"
              title="Export Pallet Sizes and Specifications"
              subtitle="We manufacture pallets in all internationally standard sizes as well as custom dimensions built to your exact cargo and container specifications."
            />
          </FadeUp>

          <FadeUp delay={0.1}>
            <div className="mt-10 border border-warm-gray overflow-hidden max-w-3xl">
              <div className="grid grid-cols-3 bg-primary px-6 py-4">
                <p className="font-body text-xs font-semibold tracking-[0.12em] uppercase text-accent">Size</p>
                <p className="font-body text-xs font-semibold tracking-[0.12em] uppercase text-accent">Common Name</p>
                <p className="font-body text-xs font-semibold tracking-[0.12em] uppercase text-accent">Typical Use</p>
              </div>
              {palletSizes.map((row, i) => (
                <div
                  key={row.dim}
                  className={`grid grid-cols-3 px-6 py-4 border-t border-warm-gray ${i % 2 === 0 ? 'bg-white' : 'bg-cream'}`}
                >
                  <p className="font-body text-sm font-semibold text-primary">{row.dim}</p>
                  <p className="font-body text-sm text-charcoal/70">{row.name}</p>
                  <p className="font-body text-sm text-charcoal/65">{row.use}</p>
                </div>
              ))}
            </div>

            <p className="mt-6 max-w-2xl font-body text-sm text-charcoal/60 leading-relaxed">
              All pallets are available as two-way or four-way entry, with single or double deck options, and are manufactured from rubber wood or other approved timber species. If you are unsure which pallet size suits your cargo and container configuration,{' '}
              <Link href="/contact" className="text-accent underline underline-offset-2 hover:text-accent-hover transition-colors">
                contact us
              </Link>{' '}
              with your product dimensions and shipping route. We will recommend the optimal pallet specification for your requirements.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* ── Section 5: Manufacturing Process ────────────────────────────── */}
      <section className="section-padding cream-texture">
        <div className="container-content">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <FadeUp>
              <div>
                <SectionHeader
                  eyebrow="Our process"
                  title="How We Manufacture Export Pallets"
                />
                <p className="font-body text-sm text-charcoal/70 leading-relaxed">
                  Every pallet passes through a controlled, documented manufacturing and treatment cycle. Here is the complete process from raw timber to IPPC-stamped, export-ready pallet.
                </p>
              </div>
            </FadeUp>

            {/* Manufacturing image — replace with pallet-manufacturing-ceypall.webp when available */}
            <FadeUp delay={0.12}>
              <div className="aspect-[4/3] relative overflow-hidden border border-warm-gray">
                <Image
                  src="/HT PALLET CHAMBER.JPG"
                  alt="Pallet manufacturing and assembly at CeyPall facility in Kochchikade, Sri Lanka"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </FadeUp>
          </div>

          <ol className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-warm-gray">
            {processSteps.map(({ step, title, body }, i) => (
              <FadeUp key={step} delay={i * 0.06}>
                <li className="bg-cream p-8 flex flex-col gap-4 h-full list-none">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex items-center justify-center w-8 h-8 bg-accent text-white font-body text-xs font-bold flex-shrink-0">
                      {step}
                    </span>
                    <h3 className="font-display text-base font-semibold text-primary leading-snug">{title}</h3>
                  </div>
                  <p className="font-body text-sm text-charcoal/65 leading-relaxed">{body}</p>
                </li>
              </FadeUp>
            ))}
          </ol>
        </div>
      </section>

      {/* ── Section 6: Delivery Coverage ────────────────────────────────── */}
      <section className="section-padding bg-warm-gray/40">
        <div className="container-content">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <FadeUp>
              <div>
                <SectionHeader
                  eyebrow="Delivery network"
                  title="Island-Wide Delivery Across Sri Lanka"
                />
                <p className="font-body text-sm text-charcoal/70 leading-relaxed mb-8">
                  We deliver export pallets to factories, export processing zones, warehouses, freight forwarders and ports across Sri Lanka. Our delivery network covers all major industrial and export hubs:
                </p>

                <ul className="space-y-0 divide-y divide-warm-gray border-t border-b border-warm-gray">
                  {deliveryZones.map(({ area, towns }) => (
                    <li key={area} className="py-4">
                      <p className="font-body text-sm font-semibold text-primary mb-0.5">{area}</p>
                      <p className="font-body text-sm text-charcoal/60">{towns}</p>
                    </li>
                  ))}
                </ul>

                <p className="mt-6 font-body text-sm text-charcoal/60 leading-relaxed">
                  For large or recurring orders, we offer scheduled delivery to match your production and shipping cycles.{' '}
                  <Link href="/contact" className="text-accent underline underline-offset-2 hover:text-accent-hover transition-colors">
                    Contact us
                  </Link>{' '}
                  to discuss a delivery arrangement that fits your factory operations.
                </p>
              </div>
            </FadeUp>

            {/* Delivery image — replace with pallet-delivery-truck-ceypall.webp when available */}
            <FadeUp delay={0.12}>
              <div className="bg-primary p-8 h-full">
                <p className="font-body text-xs font-semibold tracking-[0.15em] uppercase text-accent mb-6">
                  Delivery details
                </p>
                <ul className="space-y-6">
                  {[
                    {
                      label: 'Facility location',
                      value: '1088 Colombo Road, Daluwakotuwa, Kochchikade — 11540',
                    },
                    {
                      label: 'Standard lead time',
                      value: '3–5 working days for standard sizes',
                    },
                    {
                      label: 'Large order scheduling',
                      value: 'Production aligned to your shipping cycle',
                    },
                    {
                      label: 'Coverage',
                      value: 'All provinces — Colombo, Western, Southern, Central, Sabaragamuwa, North Western, Northern, Eastern',
                    },
                  ].map(({ label, value }) => (
                    <li key={label} className="flex flex-col gap-1 border-b border-cream/10 pb-6 last:border-0 last:pb-0">
                      <span className="font-body text-xs text-cream/50 uppercase tracking-wider">{label}</span>
                      <span className="font-body text-sm text-cream/85 leading-relaxed">{value}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── Section 7: Why Choose CeyPall ───────────────────────────────── */}
      <section className="section-padding cream-texture">
        <div className="container-content">
          <FadeUp>
            <SectionHeader
              eyebrow="Why CeyPall"
              title="Why Sri Lankan Exporters Choose CeyPall"
              subtitle="One supplier. Full manufacturing control. Complete compliance documentation."
            />
          </FadeUp>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-warm-gray">
            {whyFeatures.map(({ title, body }, i) => (
              <FadeUp key={title} delay={i * 0.07}>
                <div className="bg-cream p-8 flex flex-col gap-3 h-full">
                  <div className="w-8 h-8 bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-accent" viewBox="0 0 16 16" fill="none">
                      <path d="M2 8l4 4 8-8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <h3 className="font-display text-base font-semibold text-primary">{title}</h3>
                  <p className="font-body text-sm text-charcoal/65 leading-relaxed">{body}</p>
                </div>
              </FadeUp>
            ))}
          </div>

          <FadeUp delay={0.1}>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button href="/contact" variant="primary" size="lg">
                Request a quotation →
              </Button>
              <Button href="/heat-treated-pallets" variant="outline" size="lg">
                About heat treated pallets
              </Button>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── Section 8: FAQ Accordion ─────────────────────────────────────── */}
      <section className="section-padding bg-warm-gray/40">
        <div className="container-content">
          <FadeUp>
            <SectionHeader
              eyebrow="Common questions"
              title="Frequently Asked Questions"
            />
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
                  <p className="pb-6 font-body text-sm text-charcoal/70 leading-relaxed">{a}</p>
                </details>
              ))}
            </div>
          </FadeUp>

          <FadeUp delay={0.12}>
            <p className="mt-8 font-body text-sm text-charcoal/60">
              More questions?{' '}
              <Link href="/contact" className="text-accent underline underline-offset-2 hover:text-accent-hover transition-colors">
                Contact us directly
              </Link>{' '}
              or call{' '}
              <a href="tel:+94714711417" className="text-accent underline underline-offset-2 hover:text-accent-hover transition-colors">
                +94 714 711 417
              </a>
              .
            </p>
          </FadeUp>
        </div>
      </section>

      {/* ── Section 9: CTA ──────────────────────────────────────────────── */}
      <section className="bg-accent py-20">
        <div className="container-content">
          <FadeUp>
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="font-display text-display-md text-white">
                Get Export-Ready Pallets from CeyPall
              </h2>
              <span className="block w-10 h-0.5 bg-white/40 mt-4 mb-5 mx-auto" />
              <p className="font-body text-base text-white/80 leading-relaxed mb-8">
                Contact us for a quotation. ISPM 15 certified, IPPC-stamped,{' '}
                <Link href="/heat-treated-pallets" className="text-white underline underline-offset-2 hover:text-white/80 transition-colors">
                  heat treated
                </Link>{' '}
                wooden pallets — manufactured in Sri Lanka, delivered island-wide.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button href="/contact" variant="outline-light" size="lg">
                  Request a quotation →
                </Button>
                <a
                  href="tel:+94714711417"
                  className="inline-flex items-center gap-2 font-body font-semibold text-base text-white/90 hover:text-white transition-colors duration-200"
                >
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
