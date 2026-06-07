import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { FadeUp } from '@/components/ui/FadeUp'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Button } from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'Heat Treated Pallets Sri Lanka | ISPM 15 Certified | CeyPall',
  description:
    'ISPM 15 certified heat treated wooden pallets from CeyPall, Sri Lanka. IPPC-stamped, export-ready pallets with island-wide delivery. Custom sizes for tea, apparel, rubber and coconut exporters.',
  alternates: {
    canonical: 'https://ceypall.com/heat-treated-pallets',
  },
  openGraph: {
    title: 'Heat Treated Pallets — ISPM 15 Certified | CeyPall (Pvt) Ltd',
    description:
      'ISPM 15 certified heat treated wooden pallets from CeyPall, Sri Lanka. IPPC-stamped, export-ready pallets with island-wide delivery. Custom sizes for tea, apparel, rubber and coconut exporters.',
    url: 'https://www.ceypall.com/heat-treated-pallets',
  },
}

const productJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'Heat Treated Pallets',
  description:
    'ISPM 15 certified heat treated wooden pallets manufactured by CeyPall (Pvt) Ltd in Sri Lanka. IPPC-stamped, export-ready with island-wide delivery.',
  brand: {
    '@type': 'Brand',
    name: 'CeyPall',
  },
  manufacturer: {
    '@type': 'Organization',
    name: 'CeyPall (Pvt) Ltd',
    url: 'https://ceypall.com',
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
  offers: {
    '@type': 'Offer',
    priceCurrency: 'LKR',
    availability: 'https://schema.org/InStock',
    url: 'https://ceypall.com/heat-treated-pallets',
    seller: {
      '@type': 'Organization',
      name: 'CeyPall (Pvt) Ltd',
    },
  },
  additionalProperty: [
    { '@type': 'PropertyValue', name: 'Certification', value: 'ISPM 15' },
    { '@type': 'PropertyValue', name: 'Treatment Method', value: 'Heat Treatment (HT)' },
    { '@type': 'PropertyValue', name: 'IPPC Stamped', value: 'Yes' },
  ],
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What temperature are heat treated pallets heated to?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Heat treated pallets must reach a minimum core wood temperature of 56°C (132.8°F), maintained for at least 30 continuous minutes. This is the standard specified by ISPM 15 and is effective at eliminating wood-borne pests at all life stages.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do heat treated pallets need to be re-treated over time?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. The heat treatment lasts for the lifetime of the pallet. However, if any part of the pallet is repaired or a component is replaced, the entire pallet must be re-treated and re-stamped with a new IPPC mark.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between heat treated and kiln dried pallets?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Kiln drying reduces moisture content in wood but is not automatically equivalent to ISPM 15 heat treatment. Heat treatment specifically requires achieving a core temperature of 56°C for 30 minutes, verified by temperature probes and certified by a registered treatment provider. Only pallets treated under an approved ISPM 15 programme can carry the IPPC stamp.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can heat treated pallets be used for food export?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Because heat treatment uses no chemicals, heat treated pallets are suitable for direct and indirect food-contact applications. This makes them appropriate for tea, spice, coconut product and other food export from Sri Lanka.',
      },
    },
    {
      '@type': 'Question',
      name: 'What happens if I export goods on a pallet without an IPPC stamp?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The shipment may be stopped at the destination port. Customs authorities can quarantine the goods, fumigate the packaging at the exporter\'s expense, or reject the shipment entirely. Non-compliance can also result in fines and damage your reputation with importing buyers.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does CeyPall provide treatment certificates?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. CeyPall provides full treatment documentation including heat treatment certificates, batch treatment records and IPPC compliance letters for every order.',
      },
    },
    {
      '@type': 'Question',
      name: 'What pallet sizes does CeyPall offer?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'CeyPall manufactures standard international sizes (1200×1000mm, 1200×800mm, 1100×1100mm) and custom dimensions to fit any container or cargo specification.',
      },
    },
    {
      '@type': 'Question',
      name: 'How quickly can CeyPall deliver heat treated pallets?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Lead times depend on order volume and specification. For standard sizes, CeyPall typically delivers within 3–5 working days.',
      },
    },
  ],
}

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://ceypall.com' },
    { '@type': 'ListItem', position: 2, name: 'Products', item: 'https://ceypall.com/products' },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Heat Treated Pallets',
      item: 'https://ceypall.com/heat-treated-pallets',
    },
  ],
}

const processSteps = [
  {
    step: '01',
    title: 'Timber Selection and Preparation',
    body: 'We source rubber wood and other approved timber species. All timber is debarked and cut to the required dimensions before treatment. Debarking is a mandatory pre-treatment requirement under ISPM 15, as bark can harbour pests even after heat treatment.',
  },
  {
    step: '02',
    title: 'Kiln Loading',
    body: 'Pallets or pallet components are loaded into our heat treatment kiln. Temperature probes are placed at the core of the thickest wood sections to ensure accurate monitoring throughout the process.',
  },
  {
    step: '03',
    title: 'Heating Phase',
    body: 'The kiln temperature is raised until the core temperature of the wood reaches a minimum of 56°C. This is the critical threshold established by the IPPC as effective for eliminating quarantine-significant pests at all life stages — eggs, larvae, pupae and adults.',
  },
  {
    step: '04',
    title: 'Holding Phase',
    body: 'Once the 56°C core temperature is achieved, it is maintained for a minimum of 30 continuous minutes. Our standard treatment cycle exceeds this minimum to provide additional assurance, particularly for thicker timber sections.',
  },
  {
    step: '05',
    title: 'Cooling and Inspection',
    body: 'After the holding phase, the kiln is opened and pallets are allowed to cool. Each batch is inspected and treatment records are logged, including time-temperature data from the core probes.',
  },
  {
    step: '06',
    title: 'IPPC Stamping',
    body: 'Every compliant pallet is stamped with our IPPC mark: the IPPC wheat sheaf logo, country code LK (Sri Lanka), our producer registration number (assigned by the NPQS), and the treatment code HT.',
  },
]

const ippcComponents = [
  {
    label: 'IPPC Logo',
    desc: 'The wheat sheaf symbol of the International Plant Protection Convention. Confirms the pallet was treated under an IPPC-approved programme.',
  },
  {
    label: 'Country Code (LK)',
    desc: 'Identifies the country where the treatment was carried out. LK is the ISO code for Sri Lanka.',
  },
  {
    label: 'Registration Number',
    desc: "A unique number assigned by the National Plant Quarantine Service (NPQS) of Sri Lanka to the treatment provider. This traces back to CeyPall's facility and treatment records.",
  },
  {
    label: 'Treatment Code (HT)',
    desc: 'Confirms the treatment method was heat treatment as defined in ISPM 15.',
  },
]

const htAdvantages = [
  {
    label: 'No chemical residue',
    desc: 'Heat treatment uses thermal energy only. No residues on wood, safe for food-contact packaging.',
  },
  {
    label: 'Environmentally responsible',
    desc: 'No harmful emissions, no ozone depletion.',
  },
  {
    label: 'Permanent effectiveness',
    desc: 'Treatment lasts for the lifetime of the pallet provided no components are replaced.',
  },
  {
    label: 'Broader acceptance',
    desc: 'Several countries have already banned methyl bromide. Heat treatment is universally accepted across all 195 IPPC member nations.',
  },
  {
    label: 'Reduced moisture and weight',
    desc: 'Heating drives moisture out of the wood, reducing pallet weight and lowering mould risk during transit.',
  },
]

const industries = [
  {
    name: 'Tea Exporters',
    desc: 'Pallets sized for tea chests and bulk packaging, fully ISPM 15 compliant for global tea markets.',
  },
  {
    name: 'Apparel and Garment Exporters',
    desc: 'Consistent pallet supply for factories in Katunayake, Biyagama and Seethawaka EPZs. Standard and custom sizes.',
  },
  {
    name: 'Coconut Product Exporters',
    desc: 'From desiccated coconut to coconut oil and activated carbon. IPPC-stamped pallets for EU, US and Asian markets.',
  },
  {
    name: 'Rubber Product Exporters',
    desc: 'Durable, load-rated pallets for heavy goods including rubber gloves, tyres and industrial components.',
  },
  {
    name: 'General Manufacturers and Freight Forwarders',
    desc: 'Standard sizes (1200×1000mm, 1200×800mm, 1100×1100mm) and custom dimensions for logistics operations across Sri Lanka.',
  },
]

const whyFeatures = [
  {
    title: 'ISPM 15 Certified',
    body: 'Registered heat treatment provider with the NPQS. Every pallet carries our official IPPC stamp.',
  },
  {
    title: 'On-Site Kiln',
    body: 'Treatment kiln at our manufacturing facility in Kochchikade. We control the entire process from timber to finished pallet.',
  },
  {
    title: 'Custom Sizing',
    body: 'Pallets manufactured to any specification for non-standard cargo dimensions and load requirements.',
  },
  {
    title: 'Island-Wide Delivery',
    body: 'Delivery to factories, EPZs and ports across Sri Lanka including Colombo Port and Katunayake.',
  },
  {
    title: 'Full Documentation',
    body: 'Treatment certificates, IPPC compliance documentation and heat treatment records for every consignment.',
  },
]

const faqs = [
  {
    q: 'What temperature are heat treated pallets heated to?',
    a: 'Heat treated pallets must reach a minimum core wood temperature of 56°C (132.8°F), maintained for at least 30 continuous minutes. This is the standard specified by ISPM 15 and is effective at eliminating wood-borne pests at all life stages.',
  },
  {
    q: 'Do heat treated pallets need to be re-treated over time?',
    a: 'No. The heat treatment lasts for the lifetime of the pallet. However, if any part of the pallet is repaired or a component is replaced, the entire pallet must be re-treated and re-stamped with a new IPPC mark.',
  },
  {
    q: 'What is the difference between heat treated and kiln dried pallets?',
    a: 'Kiln drying reduces moisture content in wood but is not automatically equivalent to ISPM 15 heat treatment. Heat treatment specifically requires achieving a core temperature of 56°C for 30 minutes, which must be verified by temperature probes and certified by a registered treatment provider. Only pallets treated under an approved ISPM 15 programme can carry the IPPC stamp.',
  },
  {
    q: 'Can heat treated pallets be used for food export?',
    a: 'Yes. Because heat treatment uses no chemicals, heat treated pallets are suitable for direct and indirect food-contact applications. This makes them appropriate for tea, spice, coconut product and other food export from Sri Lanka.',
  },
  {
    q: 'What happens if I export goods on a pallet without an IPPC stamp?',
    a: "The shipment may be stopped at the destination port. Customs authorities can quarantine the goods, fumigate the packaging at the exporter's expense, or reject the shipment entirely. Non-compliance can also result in fines and damage your reputation with importing buyers.",
  },
  {
    q: 'Does CeyPall provide treatment certificates?',
    a: 'Yes. We provide full treatment documentation including heat treatment certificates, batch treatment records and IPPC compliance letters for every order.',
  },
  {
    q: 'What pallet sizes does CeyPall offer?',
    a: 'We manufacture standard international sizes (1200×1000mm, 1200×800mm, 1100×1100mm) and custom dimensions to fit any container or cargo specification.',
  },
  {
    q: 'How quickly can CeyPall deliver heat treated pallets?',
    a: 'Lead times depend on order volume and specification. For standard sizes, we typically deliver within 3–5 working days. Contact us for a specific timeline based on your requirements.',
  },
]

export default function HeatTreatedPalletsPage() {
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
            <li className="text-charcoal/80 font-medium">Heat Treated Pallets</li>
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
                  ISPM 15 Certified — Sri Lanka
                </p>
                <h1 className="font-display text-display-lg text-cream">
                  Heat Treated Pallets Sri Lanka
                </h1>
                <span className="block w-10 h-0.5 bg-accent mt-4 mb-5" />
                <p className="font-body text-base text-cream/80 leading-relaxed mb-8">
                  ISPM 15 certified, IPPC-stamped export pallets from CeyPall — manufactured and heat treated at our facility in Kochchikade with island-wide delivery.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button href="/contact" variant="primary" size="lg">
                    Get a Quotation →
                  </Button>
                  <Button href="/products" variant="outline-light" size="lg">
                    View all products
                  </Button>
                </div>
              </div>
            </FadeUp>

            <FadeUp delay={0.12}>
              {/* Hero image */}
              <div className="aspect-[4/3] relative overflow-hidden">
                <Image
                  src="/HT PALLET 12.PNG"
                  alt="ISPM 15 certified heat treated wooden pallets manufactured by CeyPall in Sri Lanka"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── What Are Heat Treated Pallets ───────────────────────────────── */}
      <section className="section-padding cream-texture">
        <div className="container-content">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <FadeUp>
              <div>
                <SectionHeader
                  eyebrow="Explanation"
                  title="What Are Heat Treated Pallets?"
                />
                <div className="space-y-4 font-body text-sm text-charcoal/70 leading-relaxed">
                  <p>
                    Heat treated pallets are wooden pallets that have been heated in a controlled kiln until the wood reaches a minimum core temperature of 56°C, maintained for at least 30 continuous minutes. This process eliminates insects, larvae, fungi and other wood-borne pests without the use of chemicals.
                  </p>
                  <p>
                    Heat treatment is the internationally approved method for making wooden packaging materials safe for cross-border shipment. It is governed by{' '}
                    <Link href="/ispm15-pallets-sri-lanka" className="text-accent underline underline-offset-2 hover:text-accent-hover transition-colors">
                      ISPM 15
                    </Link>{' '}
                    (International Standards for Phytosanitary Measures No. 15), a regulation developed by the International Plant Protection Convention (IPPC) under the United Nations Food and Agriculture Organization.
                  </p>
                  <p>
                    Every heat treated pallet that meets ISPM 15 requirements carries an official IPPC stamp. This stamp includes the country code (LK for Sri Lanka), the treatment provider&apos;s unique registration number assigned by the National Plant Quarantine Service (NPQS), and the treatment code HT — confirming the pallet has been heat treated to the required standard.
                  </p>
                  <p>
                    CeyPall (Pvt) Ltd is a registered ISPM 15 heat treatment provider in Sri Lanka, operating from our facility in Kochchikade. Every pallet we produce is heat treated in our on-site kiln and stamped with our IPPC mark before leaving the factory.
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
                    { label: 'Treatment standard', value: 'ISPM 15 (IPPC)' },
                    { label: 'Core temperature required', value: '56°C minimum' },
                    { label: 'Holding duration', value: '30 continuous minutes minimum' },
                    { label: 'Treatment mark', value: 'IPPC stamp (HT code)' },
                    { label: 'Countries enforcing ISPM 15', value: '195 member nations' },
                    { label: 'CeyPall registration', value: 'NPQS-registered provider' },
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

      {/* ── Why Required for Export ─────────────────────────────────────── */}
      <section className="section-padding bg-warm-gray/40">
        <div className="container-content">
          <FadeUp>
            <SectionHeader
              eyebrow="Compliance"
              title="Why Heat Treatment Is Required for Export Pallets"
            />
          </FadeUp>

          <FadeUp delay={0.08}>
            <div className="mt-8 max-w-3xl space-y-4 font-body text-sm text-charcoal/70 leading-relaxed">
              <p>
                Any wooden packaging material used in international trade must comply with{' '}
                <Link href="/ispm15-pallets-sri-lanka" className="text-accent underline underline-offset-2 hover:text-accent-hover transition-colors">
                  ISPM 15
                </Link>
                . This includes pallets, crates, dunnage and other solid wood packaging with a thickness greater than 6mm. The regulation exists because untreated wood can harbour invasive insects and plant diseases that threaten agriculture and forestry in the destination country.
              </p>
              <p>
                Without a valid IPPC stamp confirming heat treatment, wooden pallets will be rejected at the port of entry. Customs authorities in importing countries routinely inspect wood packaging, and non-compliant shipments face fumigation charges, quarantine delays or outright rejection.
              </p>
              <p>
                For Sri Lankan exporters, this is especially relevant. Sri Lanka exports tea, apparel, rubber products, coconut-based goods, spices and manufactured components to destinations across Europe, North America, the Middle East, East Asia and Australasia. Every one of these destinations enforces ISPM 15. Using non-compliant pallets puts the entire shipment at risk.
              </p>
            </div>
          </FadeUp>

          <FadeUp delay={0.14}>
            <div className="mt-8 inline-flex items-center gap-3 bg-primary px-6 py-4">
              <svg className="w-5 h-5 text-accent flex-shrink-0" viewBox="0 0 20 20" fill="none">
                <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="1.5" />
                <path d="M10 6v4l2.5 2.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
              <p className="font-body text-sm font-semibold text-cream/90">
                Heat treatment is not optional for export. It is a legal requirement enforced by 195 member countries of the IPPC.
              </p>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── Process Steps ──────────────────────────────────────────────── */}
      <section className="section-padding cream-texture">
        <div className="container-content">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <FadeUp>
              <div>
                <SectionHeader
                  eyebrow="Our process"
                  title="How CeyPall Heat Treats Pallets"
                />
                <p className="font-body text-sm text-charcoal/70 leading-relaxed">
                  Every batch goes through a monitored, documented treatment cycle. Here is our process from raw timber to IPPC-stamped pallet.
                </p>
              </div>
            </FadeUp>

            {/* Process images — mosaic */}
            <FadeUp delay={0.12}>
              <div className="flex flex-col gap-3">
                <div className="aspect-[4/3] relative overflow-hidden border border-warm-gray">
                  <Image
                    src="/HT PALLET CHAMBER.JPG"
                    alt="Heat treatment kiln chamber at CeyPall manufacturing facility, Kochchikade Sri Lanka"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="aspect-[3/4] relative overflow-hidden border border-warm-gray">
                    <Image
                      src="/HT Pallet 04.jpg"
                      alt="CeyPall ISPM 15 heat treated pallet — close up detail"
                      fill
                      sizes="(max-width: 1024px) 50vw, 25vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="aspect-[3/4] relative overflow-hidden border border-warm-gray">
                    <Image
                      src="/HT Pallet 02.jpg"
                      alt="Heat treated wooden pallets ready for export — CeyPall Sri Lanka"
                      fill
                      sizes="(max-width: 1024px) 50vw, 25vw"
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </FadeUp>
          </div>

          {/* Step cards */}
          <ol className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-warm-gray">
            {processSteps.map(({ step, title, body }, i) => (
              <FadeUp key={step} delay={i * 0.06}>
                <li className="bg-cream p-8 flex flex-col gap-4 h-full list-none">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex items-center justify-center w-8 h-8 bg-accent text-white font-body text-xs font-bold flex-shrink-0">
                      {step}
                    </span>
                    <h3 className="font-display text-base font-semibold text-primary leading-snug">
                      {title}
                    </h3>
                  </div>
                  <p className="font-body text-sm text-charcoal/65 leading-relaxed">{body}</p>
                </li>
              </FadeUp>
            ))}
          </ol>
        </div>
      </section>

      {/* ── IPPC Mark ──────────────────────────────────────────────────── */}
      <section className="section-padding bg-warm-gray/40">
        <div className="container-content">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <FadeUp>
              <div>
                <SectionHeader
                  eyebrow="Certification mark"
                  title="Understanding the IPPC Mark on Your Pallet"
                />
                <p className="font-body text-sm text-charcoal/70 leading-relaxed mb-8">
                  The IPPC stamp on a heat treated pallet is not just a logo. It is a regulatory mark that customs authorities around the world are trained to inspect. Each component has a specific meaning:
                </p>

                <ul className="space-y-0 divide-y divide-warm-gray border-t border-b border-warm-gray">
                  {ippcComponents.map(({ label, desc }) => (
                    <li key={label} className="py-5">
                      <p className="font-body text-sm font-semibold text-primary mb-1">{label}</p>
                      <p className="font-body text-sm text-charcoal/65 leading-relaxed">{desc}</p>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 bg-primary p-5">
                  <p className="font-body text-sm text-cream/80 leading-relaxed">
                    <span className="font-semibold text-accent">Note:</span> If any part of a heat treated pallet is later repaired or replaced, the pallet must be re-treated and re-stamped. The original IPPC mark must be obliterated and a new mark applied after the fresh treatment cycle.
                  </p>
                </div>
              </div>
            </FadeUp>

            {/* IPPC / HT stamp image */}
            <FadeUp delay={0.12}>
              <div className="aspect-[3/2] border border-warm-gray bg-cream relative overflow-hidden">
                <Image
                  src="/HT logo.png"
                  alt="IPPC stamp on CeyPall heat treated export pallet showing LK country code and HT treatment mark"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── HT vs Fumigation ───────────────────────────────────────────── */}
      <section className="section-padding cream-texture">
        <div className="container-content">
          <FadeUp>
            <SectionHeader
              eyebrow="Treatment comparison"
              title="Heat Treatment vs Methyl Bromide Fumigation"
            />
          </FadeUp>

          <FadeUp delay={0.08}>
            <p className="mt-0 max-w-3xl font-body text-sm text-charcoal/70 leading-relaxed">
              ISPM 15 historically approved two treatment methods: heat treatment (HT) and methyl bromide fumigation (MB). However, methyl bromide is an ozone-depleting substance and its use is being phased out under the Montreal Protocol. Heat treatment is the preferred and dominant method globally.
            </p>
          </FadeUp>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {htAdvantages.map(({ label, desc }, i) => (
              <FadeUp key={label} delay={i * 0.07}>
                <div className="border border-warm-gray bg-white p-6 h-full">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="w-5 h-5 bg-accent flex-shrink-0 flex items-center justify-center">
                      <svg className="w-3 h-3 text-white" viewBox="0 0 12 12" fill="none">
                        <path d="M2 6l2.5 2.5L10 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <h3 className="font-display text-sm font-semibold text-primary">{label}</h3>
                  </div>
                  <p className="font-body text-xs text-charcoal/65 leading-relaxed">{desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>

          <FadeUp delay={0.1}>
            <p className="mt-8 inline-block font-body text-sm font-semibold text-primary border-l-2 border-accent pl-4">
              CeyPall uses heat treatment exclusively. We do not use methyl bromide or any chemical fumigation.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* ── Industries We Serve ────────────────────────────────────────── */}
      <section className="section-padding bg-warm-gray/40">
        <div className="container-content">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Stacked pallets / transport image */}
            <FadeUp className="order-2 lg:order-1">
              <div className="aspect-[4/3] relative overflow-hidden border border-warm-gray">
                <Image
                  src="/HT PALLET TRANSPORT.jpg"
                  alt="Stack of ISPM 15 certified heat treated wooden pallets ready for delivery — CeyPall Sri Lanka"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </FadeUp>

            <FadeUp delay={0.08} className="order-1 lg:order-2">
              <SectionHeader
                eyebrow="Who we supply"
                title="Industries We Serve"
              />
              <ul className="mt-2 space-y-0 divide-y divide-warm-gray border-t border-b border-warm-gray">
                {industries.map(({ name, desc }) => (
                  <li key={name} className="py-5">
                    <p className="font-body text-sm font-semibold text-primary mb-1">{name}</p>
                    <p className="font-body text-sm text-charcoal/65 leading-relaxed">{desc}</p>
                  </li>
                ))}
              </ul>
              <p className="mt-6 font-body text-sm text-charcoal/60">
                Not listed?{' '}
                <Link href="/contact" className="text-accent underline underline-offset-2 hover:text-accent-hover transition-colors">
                  Contact us
                </Link>{' '}
                — if your business exports goods, we almost certainly supply what you need.
              </p>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── Why Choose CeyPall ─────────────────────────────────────────── */}
      <section className="section-padding cream-texture">
        <div className="container-content">
          <FadeUp>
            <SectionHeader
              eyebrow="Why CeyPall"
              title="Why Choose CeyPall for Heat Treated Pallets"
              subtitle="We manufacture, treat and stamp every pallet at our Kochchikade facility. One supplier, full control, full documentation."
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
                Request a quote →
              </Button>
              <Button href="/products" variant="outline" size="lg">
                View all products
              </Button>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── FAQ Accordion ──────────────────────────────────────────────── */}
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

      {/* ── CTA ────────────────────────────────────────────────────────── */}
      <section className="bg-accent py-20">
        <div className="container-content">
          <FadeUp>
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="font-display text-display-md text-white">
                Get ISPM 15 Certified Heat Treated Pallets
              </h2>
              <span className="block w-10 h-0.5 bg-white/40 mt-4 mb-5 mx-auto" />
              <p className="font-body text-base text-white/80 leading-relaxed mb-8">
                Contact CeyPall for a quotation or to discuss your export pallet requirements.
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
