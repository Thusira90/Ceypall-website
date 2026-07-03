import type { Metadata } from 'next'
import Link from 'next/link'
import { FadeUp } from '@/components/ui/FadeUp'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Button } from '@/components/ui/Button'
import { SchemaScript } from '@/components/ui/SchemaScript'

export const metadata: Metadata = {
  title: 'Pallets for Spice & Cinnamon Export Sri Lanka | ISPM 15 Certified',
  description:
    'ISPM 15 heat-treated wooden pallets for Sri Lankan spice and cinnamon exporters. Low moisture content, bark-free, food-safe. IPPC stamped with delivery to Matale, Kandy, Galle, and all spice-producing regions.',
  alternates: {
    canonical: 'https://www.ceypall.com/pallets-for-spice-export',
  },
  openGraph: {
    title: 'Pallets for Spice & Cinnamon Export Sri Lanka | CeyPall (Pvt) Ltd',
    description:
      'ISPM 15 certified pallets for spice and cinnamon exporters. Low MC, food-safe, IPPC stamped, island-wide delivery.',
    url: 'https://www.ceypall.com/pallets-for-spice-export',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pallets for Spice & Cinnamon Export Sri Lanka | CeyPall',
    description:
      'ISPM 15 certified pallets for spice exporters. Low moisture, food-safe, IPPC stamped, treatment certificates.',
  },
}

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.ceypall.com/' },
    { '@type': 'ListItem', position: 2, name: 'Pallets for Spice & Cinnamon Export', item: 'https://www.ceypall.com/pallets-for-spice-export' },
  ],
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What type of pallets do cinnamon exporters in Sri Lanka need?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Cinnamon exporters need ISPM 15 certified, heat-treated wooden pallets with a valid IPPC stamp. Pallets must be kiln-dried to below 15% moisture content to protect cinnamon from moisture absorption during ocean transit. CeyPall supplies food-safe, bark-free pallets in standard 1200x1000mm and 1200x800mm Euro sizes.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why is low moisture content important for spice export pallets?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Spices like cinnamon, pepper, cloves, and cardamom are hygroscopic — they absorb moisture from their surroundings. High moisture in pallet wood creates humidity inside sealed shipping containers, causing spices to clump, develop mould, or lose flavour and aroma. CeyPall kiln-dries all pallets below 15% MC to prevent this.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you deliver pallets to spice-producing regions in Sri Lanka?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. CeyPall delivers to all major spice-producing districts including Matale, Kandy, Galle, Matara, Ratnapura, and Badulla. We also deliver to spice processing and packing facilities in Colombo, Gampaha, and the Western Province industrial zones.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do EU and US buyers require specific pallet standards for spice imports?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. The EU requires all wooden packaging to be ISPM 15 compliant with HT (heat treatment) — methyl bromide is not accepted. The US FDA also scrutinises wooden packaging for food-contact products. Many EU spice importers additionally require treatment certificates and bark-free timber as standard.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is Sri Lanka a major cinnamon exporter?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sri Lanka produces approximately 90% of the world\'s true cinnamon (Cinnamomum verum), also known as Ceylon cinnamon. The country exports cinnamon quills, cinnamon bark oil, and cinnamon leaf oil to over 50 countries. Sri Lanka also exports pepper, cloves, cardamom, nutmeg, and turmeric.',
      },
    },
  ],
}

const reasons = [
  {
    number: '01',
    title: 'Low Moisture Content',
    body: 'Spices are hygroscopic and absorb moisture from their surroundings. All CeyPall pallets are kiln-dried below 15% MC, preventing humidity build-up inside containers during 14-35 day ocean voyages.',
  },
  {
    number: '02',
    title: 'Food-Safe & Bark-Free',
    body: 'Our pallets are manufactured from clean, bark-free rubber wood and Lunumidella. Heat treatment at 56°C eliminates pests without chemical residues — safe for direct contact with food-grade spice packaging.',
  },
  {
    number: '03',
    title: 'ISPM 15 Certified',
    body: 'Every pallet carries a valid IPPC stamp registered with the National Plant Quarantine Service of Sri Lanka. Heat treatment certificates provided with every order for customs documentation.',
  },
  {
    number: '04',
    title: 'Spice Region Delivery',
    body: 'We deliver to Matale, Kandy, Galle, Matara, Ratnapura, and all spice-producing districts. Scheduled delivery routes with 3-5 day lead times coordinated with your shipping schedule.',
  },
]

const spiceProducts = [
  { product: 'Cinnamon quills (Ceylon cinnamon)', sensitivity: 'High — absorbs moisture, loses aroma', markets: 'Mexico, EU, US, Middle East, India' },
  { product: 'Cinnamon bark oil', sensitivity: 'Moderate — sealed containers', markets: 'EU, US, Japan' },
  { product: 'Pepper (black & white)', sensitivity: 'High — mould risk in humid conditions', markets: 'India, EU, US, Middle East' },
  { product: 'Cloves', sensitivity: 'High — volatile oils affected by moisture', markets: 'India, EU, Middle East' },
  { product: 'Cardamom', sensitivity: 'High — loses flavour in humid storage', markets: 'Middle East, India, EU' },
  { product: 'Nutmeg & mace', sensitivity: 'High — moisture causes mould and aflatoxin', markets: 'EU, US, India' },
  { product: 'Turmeric (dried)', sensitivity: 'Moderate — colour and potency affected', markets: 'India, EU, US, Middle East' },
]

const destinations = [
  { market: 'Mexico', notes: 'Largest buyer of Ceylon cinnamon globally' },
  { market: 'European Union', notes: 'Premium market — strict food safety and ISPM 15 enforcement' },
  { market: 'United States', notes: 'Growing demand for true Ceylon cinnamon' },
  { market: 'India', notes: 'Major market for pepper, cloves, and cardamom' },
  { market: 'Middle East', notes: 'Strong demand for cinnamon, cardamom, and pepper' },
  { market: 'Japan', notes: 'High-quality spice market with strict compliance' },
]

export default function PalletsForSpiceExportPage() {
  return (
    <>
      <SchemaScript schema={breadcrumbJsonLd} />
      <SchemaScript schema={faqJsonLd} />

      {/* Hero */}
      <section className="wood-texture section-padding">
        <div className="container-content">
          <FadeUp>
            <div className="max-w-2xl">
              <p className="font-body text-xs font-semibold tracking-[0.15em] uppercase text-accent mb-4">
                Spice & cinnamon export pallets
              </p>
              <h1 className="font-display text-display-lg text-cream">
                ISPM 15 Pallets for Sri Lankan Spice Exporters.
              </h1>
              <span className="block w-10 h-0.5 bg-accent mt-4 mb-5" />
              <p className="font-body text-base text-cream/80 leading-relaxed mb-8">
                Heat-treated, IPPC-stamped wooden pallets for Ceylon cinnamon, pepper, cloves,
                and cardamom exporters. Kiln-dried below 15% MC to protect moisture-sensitive
                spices during ocean transit. Delivery to all spice-producing regions.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button href="/contact" variant="primary" size="lg">
                  Request a quote &rarr;
                </Button>
                <Button href="/products" variant="outline-light" size="lg">
                  View all products
                </Button>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Why CeyPall */}
      <section className="section-padding cream-texture">
        <div className="container-content">
          <FadeUp>
            <div className="mb-12">
              <SectionHeader
                eyebrow="Why CeyPall"
                title="Protecting Ceylon spices from harvest to shelf."
              />
            </div>
          </FadeUp>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-warm-gray">
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

      {/* Spice products table */}
      <section className="section-padding bg-warm-gray/40">
        <div className="container-content">
          <FadeUp>
            <SectionHeader
              eyebrow="Products we support"
              title="Pallets for every spice category."
            />
          </FadeUp>

          <FadeUp delay={0.1}>
            <div className="mt-10 overflow-x-auto">
              <table className="w-full font-body text-sm">
                <thead>
                  <tr className="border-b-2 border-primary/20">
                    <th className="text-left py-3 pr-6 font-semibold text-primary">Spice product</th>
                    <th className="text-left py-3 pr-6 font-semibold text-primary">Moisture sensitivity</th>
                    <th className="text-left py-3 font-semibold text-primary">Key markets</th>
                  </tr>
                </thead>
                <tbody>
                  {spiceProducts.map(({ product, sensitivity, markets }) => (
                    <tr key={product} className="border-b border-warm-gray">
                      <td className="py-3 pr-6 font-medium text-charcoal">{product}</td>
                      <td className="py-3 pr-6 text-charcoal/70">{sensitivity}</td>
                      <td className="py-3 text-charcoal/70">{markets}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Export destinations */}
      <section className="section-padding bg-charcoal">
        <div className="container-content">
          <FadeUp>
            <SectionHeader
              eyebrow="Export markets"
              title="Accepted in every major spice-importing country."
              light
            />
          </FadeUp>

          <FadeUp delay={0.1}>
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5">
              {destinations.map(({ market, notes }) => (
                <div key={market} className="bg-charcoal p-6">
                  <h3 className="font-display text-base font-semibold text-cream mb-2">
                    {market}
                  </h3>
                  <p className="font-body text-xs text-cream/50">{notes}</p>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Content section */}
      <section className="section-padding cream-texture">
        <div className="container-content">
          <FadeUp>
            <div className="max-w-2xl">
              <h2 className="font-display text-2xl font-semibold text-primary mb-6">
                Sri Lanka&apos;s Spice Export Industry &amp; Pallet Requirements
              </h2>
              <p className="font-body text-sm text-charcoal/70 leading-relaxed mb-5">
                Sri Lanka produces approximately 90% of the world&apos;s true cinnamon
                (Cinnamomum verum), commonly known as Ceylon cinnamon. The spice industry is
                concentrated in the southern and central provinces, with cinnamon cultivation
                centred in Galle, Matara, and Ratnapura districts, and other spices grown across
                Matale, Kandy, and Badulla.
              </p>
              <p className="font-body text-sm text-charcoal/70 leading-relaxed mb-5">
                Spice products present unique pallet requirements due to their sensitivity to
                moisture. Cinnamon quills, pepper, cloves, and cardamom are all hygroscopic
                &mdash; they absorb moisture from their environment. When packed in sealed
                containers with high-moisture pallet wood, the resulting humidity can cause
                clumping, mould growth, flavour loss, and in severe cases, aflatoxin
                contamination that renders the product unsaleable.
              </p>
              <p className="font-body text-sm text-charcoal/70 leading-relaxed">
                Check your pallet moisture levels with our{' '}
                <Link href="/moisture-content-calculator" className="text-accent hover:text-accent-hover underline underline-offset-2 transition-colors">
                  Moisture Content Calculator
                </Link>, or plan your container loading with the{' '}
                <Link href="/container-pallet-calculator" className="text-accent hover:text-accent-hover underline underline-offset-2 transition-colors">
                  Container Pallet Calculator
                </Link>. Learn more about compliance in our guide:{' '}
                <Link href="/blog/what-is-ispm-15" className="text-accent hover:text-accent-hover underline underline-offset-2 transition-colors">
                  What is ISPM 15?
                </Link>
              </p>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-warm-gray/40">
        <div className="container-content">
          <FadeUp>
            <SectionHeader
              eyebrow="Common questions"
              title="Spice export pallet FAQ."
            />
          </FadeUp>

          <FadeUp delay={0.1}>
            <div className="mt-10 max-w-2xl space-y-8">
              {faqJsonLd.mainEntity.map((item: { '@type': string; name: string; acceptedAnswer: { '@type': string; text: string } }) => (
                <div key={item.name} className="border-b border-warm-gray pb-6">
                  <h3 className="font-display text-base font-semibold text-primary mb-3">
                    {item.name}
                  </h3>
                  <p className="font-body text-sm text-charcoal/70 leading-relaxed">
                    {item.acceptedAnswer.text}
                  </p>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-accent py-16">
        <div className="container-content flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-display text-2xl text-white">Need pallets for spice or cinnamon export?</h3>
            <p className="font-body text-sm text-white/80 mt-1">
              ISPM 15 certified, kiln-dried below 15% MC, delivered to spice-producing regions.
            </p>
          </div>
          <Button href="/contact" variant="outline-light" size="lg">
            Request a quote &rarr;
          </Button>
        </div>
      </section>
    </>
  )
}
