import type { Metadata } from 'next'
import { FadeUp } from '@/components/ui/FadeUp'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { SchemaScript } from '@/components/ui/SchemaScript'
import { Button } from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'Case Studies — How Sri Lankan Exporters Solved Pallet Compliance Challenges',
  description:
    'Real results from Sri Lankan exporters who switched to CeyPall for ISPM 15 certified pallets. Case studies from apparel, tea, and food manufacturing industries.',
  alternates: {
    canonical: 'https://www.ceypall.com/case-studies',
  },
  openGraph: {
    title: 'Case Studies — Export Pallet Success Stories | CeyPall',
    description:
      'Real results from Sri Lankan exporters who switched to CeyPall for ISPM 15 certified pallets.',
    url: 'https://www.ceypall.com/case-studies',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Case Studies — Export Pallet Success Stories | CeyPall',
    description:
      'Real results from Sri Lankan exporters who switched to CeyPall for ISPM 15 certified pallets.',
  },
}

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.ceypall.com/' },
    { '@type': 'ListItem', position: 2, name: 'Case Studies', item: 'https://www.ceypall.com/case-studies' },
  ],
}

interface CaseStudy {
  id: string
  industry: string
  title: string
  client: string
  location: string
  challenge: string
  solution: string[]
  results: { metric: string; value: string }[]
  testimonial: { quote: string; name: string; role: string }
}

const caseStudies: CaseStudy[] = [
  {
    id: 'apparel-katunayake',
    industry: 'Apparel & Garments',
    title: 'Eliminating Shipment Rejections for a Katunayake Apparel Exporter',
    client: 'A BOI-registered apparel manufacturer',
    location: 'Katunayake Free Trade Zone',
    challenge:
      'This garment manufacturer was sourcing pallets from a local supplier who was not NPQS-registered. The pallets appeared to be heat treated but carried invalid IPPC stamps — the registration number did not match any approved provider. Over a six-month period, three EU-bound shipments were held at destination ports for phytosanitary inspection. Two required re-treatment at the importer\'s expense, costing approximately LKR 850,000 in fees and delays. The third resulted in a formal compliance warning from the buyer\'s logistics team, threatening the trading relationship.',
    solution: [
      'Switched all export pallets to CeyPall — NPQS-registered, IPPC-stamped, with treatment certificates for every order',
      'Standardised on 1200 x 800 mm Euro pallets across all EU shipments for consistent container loading',
      'Established a recurring weekly delivery schedule aligned with the factory\'s production cycle',
      'Provided batch-level treatment certificates with every delivery for the customer\'s export documentation files',
    ],
    results: [
      { metric: 'Shipment rejections', value: '0 in 18 months' },
      { metric: 'Compliance warnings', value: 'Zero since switching' },
      { metric: 'Delivery lead time', value: '3 working days' },
      { metric: 'Documentation', value: 'Certificate with every order' },
    ],
    testimonial: {
      quote: 'We had no idea our previous supplier\'s IPPC stamps were invalid until our EU buyer flagged it. Since switching to CeyPall, we have not had a single compliance issue.',
      name: 'Mr. Ainsley Christie',
      role: 'BOI-registered apparel manufacturer, Katunayake FTZ',
    },
  },
  {
    id: 'tea-nuwara-eliya',
    industry: 'Tea Export',
    title: 'Reliable Pallet Supply for a Hill Country Tea Exporter',
    client: 'A mid-scale tea factory and exporter',
    location: 'Nuwara Eliya District',
    challenge:
      'This tea factory exports approximately 40 containers per month to buyers in the Middle East, Japan, and Europe. Their previous pallet supplier was based in Colombo and could not reliably deliver to their upcountry location. Deliveries were frequently delayed by 5–7 days, causing the factory to hold finished tea in storage longer than necessary — increasing the risk of moisture absorption and quality degradation. Additionally, some pallets arrived with visible bark residue, which is a violation of ISPM 15 bark requirements and was flagged during a Japanese customs inspection.',
    solution: [
      'CeyPall established a scheduled fortnightly delivery route to the Nuwara Eliya facility',
      'Supplied pallets sized to match standard tea chest footprints for maximum container utilisation',
      'Implemented strict bark-free quality control — every pallet inspected before dispatch',
      'Provided a dedicated account contact for order scheduling and delivery coordination',
    ],
    results: [
      { metric: 'Delivery reliability', value: '98% on-time over 12 months' },
      { metric: 'Bark-related rejections', value: '0 since switching' },
      { metric: 'Storage holding time', value: 'Reduced by 4 days average' },
      { metric: 'Container utilisation', value: 'Improved with matched sizes' },
    ],
    testimonial: {
      quote: 'Finding a pallet supplier willing to deliver reliably to Nuwara Eliya was our biggest challenge. CeyPall solved that and the quality has been consistently excellent.',
      name: 'Mr. Shane De Silva',
      role: 'Tea factory and exporter, Nuwara Eliya',
    },
  },
  {
    id: 'food-manufacturing-biyagama',
    industry: 'Food Manufacturing',
    title: 'Scaling Pallet Supply for a Growing Food Manufacturer',
    client: 'A food processing and export company',
    location: 'Biyagama Export Processing Zone',
    challenge:
      'This food manufacturer exports processed coconut products and spices to 14 countries across the EU, Middle East, and Asia-Pacific. As their export volumes grew from 20 to 60 containers per month over 18 months, their existing pallet supplier could not scale to meet demand. Orders were split across three different suppliers with inconsistent quality — different wood species, varying moisture content, and unreliable treatment documentation. One batch from an alternative supplier had moisture content above 20%, which caused mould growth during a 28-day ocean transit to the UK, resulting in a partial shipment rejection worth approximately LKR 2.4 million.',
    solution: [
      'Consolidated all pallet supply through CeyPall as the sole provider — eliminating quality inconsistency',
      'Scaled from 200 to 600+ pallets per month with consistent 3–5 day lead times',
      'All pallets kiln-dried to below 15% moisture content before dispatch',
      'Treatment certificates provided for every batch, with digital copies emailed for faster export documentation processing',
    ],
    results: [
      { metric: 'Supply capacity', value: '600+ pallets/month' },
      { metric: 'Moisture rejections', value: '0 since consolidating' },
      { metric: 'Quality consistency', value: 'Single supplier standard' },
      { metric: 'Lead time at scale', value: '3–5 working days' },
    ],
    testimonial: {
      quote: 'When we were using three different suppliers, quality was a lottery. Consolidating with CeyPall gave us one consistent standard across every shipment, even as we tripled our volume.',
      name: 'Mr. Malinda Ranasinghe',
      role: 'Food processing company, Biyagama EPZ',
    },
  },
]

export default function CaseStudiesPage() {
  return (
    <>
      <SchemaScript schema={breadcrumbJsonLd} />

      {/* Hero */}
      <section className="wood-texture section-padding">
        <div className="container-content">
          <FadeUp>
            <SectionHeader
              as="h1"
              eyebrow="Case studies"
              title="Real Results From Real Exporters"
              subtitle="See how Sri Lankan exporters across apparel, tea, and food manufacturing solved pallet compliance challenges, eliminated shipment rejections, and scaled their supply chain with CeyPall."
              light
            />
          </FadeUp>
        </div>
      </section>

      {/* Stats bar */}
      <section className="bg-primary-dark py-10">
        <div className="container-content">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '0', label: 'Shipment rejections reported' },
              { value: '600+', label: 'Pallets/month at scale' },
              { value: '3–5', label: 'Day delivery lead time' },
              { value: '100%', label: 'ISPM 15 compliant' },
            ].map((stat) => (
              <FadeUp key={stat.label}>
                <div className="text-center">
                  <p className="font-display text-3xl md:text-4xl text-accent">{stat.value}</p>
                  <p className="font-body text-xs text-cream/60 mt-1 uppercase tracking-wider">{stat.label}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Case studies */}
      <section className="cream-texture">
        {caseStudies.map((study, index) => (
          <div key={study.id} className={index % 2 === 1 ? 'bg-white' : ''}>
            <div className="container-content section-padding">
              <FadeUp>
                <p className="font-body text-xs font-semibold tracking-[0.15em] uppercase text-accent mb-3">
                  {study.industry}
                </p>
                <h2 className="font-display text-display-lg text-primary mb-2">
                  {study.title}
                </h2>
                <p className="font-body text-sm text-charcoal/50 mb-8">
                  {study.client} · {study.location}
                </p>
              </FadeUp>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                {/* Challenge & Solution */}
                <div className="lg:col-span-2 space-y-8">
                  <FadeUp>
                    <div>
                      <h3 className="font-display text-lg text-primary mb-3 flex items-center gap-2">
                        <span className="w-8 h-8 bg-red-50 flex items-center justify-center flex-shrink-0">
                          <svg className="w-4 h-4 text-red-500" viewBox="0 0 16 16" fill="none">
                            <path d="M8 4v4M8 10.5v.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                            <circle cx="8" cy="8" r="6.5" stroke="currentColor" strokeWidth="1.2" />
                          </svg>
                        </span>
                        The Challenge
                      </h3>
                      <p className="font-body text-sm text-charcoal/70 leading-relaxed">
                        {study.challenge}
                      </p>
                    </div>
                  </FadeUp>

                  <FadeUp>
                    <div>
                      <h3 className="font-display text-lg text-primary mb-3 flex items-center gap-2">
                        <span className="w-8 h-8 bg-green-50 flex items-center justify-center flex-shrink-0">
                          <svg className="w-4 h-4 text-green-600" viewBox="0 0 16 16" fill="none">
                            <path d="M4 8l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <circle cx="8" cy="8" r="6.5" stroke="currentColor" strokeWidth="1.2" />
                          </svg>
                        </span>
                        The Solution
                      </h3>
                      <ul className="space-y-3">
                        {study.solution.map((item, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 flex-shrink-0" />
                            <span className="font-body text-sm text-charcoal/70 leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </FadeUp>

                  {/* Testimonial */}
                  <FadeUp>
                    <blockquote className="border-l-2 border-accent pl-5 py-2">
                      <p className="font-body text-sm text-charcoal/80 italic leading-relaxed">
                        &ldquo;{study.testimonial.quote}&rdquo;
                      </p>
                      <footer className="mt-3">
                        <p className="font-body text-xs font-semibold text-primary">
                          — {study.testimonial.name}
                        </p>
                        <p className="font-body text-xs text-charcoal/50">
                          {study.testimonial.role}
                        </p>
                      </footer>
                    </blockquote>
                  </FadeUp>
                </div>

                {/* Results sidebar */}
                <div>
                  <FadeUp>
                    <div className="bg-primary p-6 sticky top-24">
                      <h3 className="font-display text-lg text-cream mb-5">Results</h3>
                      <div className="space-y-5">
                        {study.results.map((result) => (
                          <div key={result.metric}>
                            <p className="font-display text-xl text-accent">{result.value}</p>
                            <p className="font-body text-xs text-cream/60 mt-0.5">{result.metric}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </FadeUp>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Industries we serve */}
      <section className="section-padding bg-white">
        <div className="container-content">
          <FadeUp>
            <SectionHeader
              eyebrow="Industries we serve"
              title="We Supply Exporters Across Every Sector"
              subtitle="CeyPall provides ISPM 15 certified pallets to companies across Sri Lanka's major export industries."
            />
          </FadeUp>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-10">
            {[
              'Apparel & Garments',
              'Tea & Beverages',
              'Food Processing',
              'Coconut Products',
              'Rubber & Tyres',
              'Electronics',
              'Chemicals',
              'Spices & Herbs',
              'Ceramics & Tiles',
              'Logistics & Freight',
              'Pharmaceuticals',
              'Industrial Goods',
            ].map((industry) => (
              <FadeUp key={industry}>
                <div className="flex items-center gap-3 p-4 bg-cream/60 border border-warm-gray/40">
                  <svg className="w-4 h-4 text-accent flex-shrink-0" viewBox="0 0 16 16" fill="none">
                    <path d="M4 8l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span className="font-body text-sm text-charcoal/70">{industry}</span>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-accent">
        <div className="container-content flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-display text-2xl text-white">Ready to solve your pallet supply challenges?</h3>
            <p className="font-body text-sm text-white/80 mt-1">
              ISPM 15 compliant, heat treated, IPPC stamped — delivered island-wide.
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
