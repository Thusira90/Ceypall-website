import type { Metadata } from 'next'
import Image from 'next/image'
import { FadeUp } from '@/components/ui/FadeUp'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { SchemaScript } from '@/components/ui/SchemaScript'
import { Button } from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'Products — Wooden Pallets for Export & Storage',
  description:
    'CeyPall manufactures heat-treated ISPM 15 pallets for export and vacuum pressure impregnated pallets for long-term storage. All standard sizes and custom dimensions available.',
  openGraph: {
    url: '/products',
  },
}

const exportFeatures = [
  'Core heated to 56°C for a minimum of 30 minutes',
  'ISPM 15 compliant — accepted in all major export markets',
  'IPPC stamped with CeyPall\'s registered number',
  'Treatment certificate provided with every order',
  'All pallets receive boron chemical pre-treatment (dip) as standard before assembly',
  'Primary materials: locally sourced rubber wood and Lunumidella',
  'Moisture content reduced to below 15%',
]

const storageFeatures = [
  'Vacuum pressure impregnation — Boron Borax under up to 10 bar pressure',
  'Protection guaranteed for up to 6 years',
  'Ideal for warehousing, racking systems, and any long-term storage application',
  'Enhanced durability compared to standard pallets',
]

const sizes = [
  { dimensions: '1200 × 1000 mm', standard: 'Euro standard' },
  { dimensions: '1200 × 800 mm', standard: 'Euro pallet (EUR/EPAL)' },
  { dimensions: '1219 × 1016 mm', standard: 'North American standard (48″ × 40″)' },
  { dimensions: '1100 × 1100 mm', standard: 'Asia/Pacific standard' },
  { dimensions: 'Custom', standard: 'Available on request' },
]

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.ceypall.com/' },
    { '@type': 'ListItem', position: 2, name: 'Products', item: 'https://www.ceypall.com/products' },
  ],
}

export default function ProductsPage() {
  return (
    <>
      {/* ── JSON-LD ─────────────────────────────────────────────────────── */}
      <SchemaScript schema={breadcrumbJsonLd} />

      {/* Page header */}
      <section className="wood-texture section-padding">
        <div className="container-content">
          <FadeUp>
            <SectionHeader
              eyebrow="Our products"
              title="Our Pallets."
              subtitle="We manufacture wooden pallets for export and storage — all boron pre-treated as standard, with additional vacuum pressure impregnation available for long-term storage applications."
              light
            />
          </FadeUp>
        </div>
      </section>

      {/* Product 1 — Heat-treated */}
      <section className="section-padding cream-texture">
        <div className="container-content">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <FadeUp>
              <div>
                <span className="inline-block font-body text-xs font-semibold tracking-[0.15em] uppercase text-accent mb-4">
                  Export pallets
                </span>
                <h2 className="font-display text-display-md text-primary mb-4">
                  Heat-Treated Wooden Pallets
                </h2>
                <span className="divider-amber" />
                <p className="font-body text-sm text-charcoal/70 leading-relaxed">
                  Our heat-treated pallets are manufactured specifically for international export. Each
                  pallet is processed in our heat treatment chambers where the core of the wood is
                  brought to 56°C and maintained for a minimum of 30 minutes. This process eliminates
                  harmful pests, bacteria, and fungi, ensuring the pallet meets ISPM 15 international
                  phytosanitary standards.
                </p>
                <p className="font-body text-sm text-charcoal/70 leading-relaxed mt-4">
                  Before manufacturing, all timber undergoes a boron chemical pre-treatment — immersion
                  in a controlled chemical bath at 45°C–60°C for 30–45 minutes — to ensure deep
                  protection and prevent post-treatment contamination. Every ISPM 15-compliant pallet is
                  stamped with our IPPC logo (including our registration number) and comes with a
                  treatment certificate.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Button href="/heat-treated-pallets" variant="primary" size="md">
                    Learn more about heat treated pallets →
                  </Button>
                  <Button href="/export-pallet-manufacturer-sri-lanka" variant="outline" size="md">
                    Export pallet manufacturing →
                  </Button>
                </div>
              </div>
            </FadeUp>

            <FadeUp delay={0.12}>
              <div>
                {/* Visual placeholder */}
                <div className="aspect-[4/3] border border-warm-gray relative overflow-hidden mb-6 bg-cream">
                  <Image
                    src="/ippc-logo.png"
                    alt="IPPC stamp — ISPM 15 certified heat treatment"
                    fill
                    className="object-contain p-8 mix-blend-multiply"
                  />
                  <div className="absolute top-4 right-4 bg-accent px-3 py-1.5">
                    <p className="font-body text-xs font-semibold text-white tracking-wider">IPPC STAMPED</p>
                  </div>
                </div>

                <div className="bg-primary p-6">
                  <p className="font-body text-xs font-semibold tracking-[0.12em] uppercase text-accent mb-4">
                    Key features
                  </p>
                  <ul className="space-y-3">
                    {exportFeatures.map((f) => (
                      <li key={f} className="flex items-start gap-3">
                        <svg className="w-3.5 h-3.5 text-accent flex-shrink-0 mt-0.5" viewBox="0 0 14 14" fill="none">
                          <path d="M2 7l3.5 3.5L12 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span className="font-body text-xs text-cream/80 leading-relaxed">{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Product 2 — Storage */}
      <section className="section-padding bg-warm-gray/40">
        <div className="container-content">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <FadeUp delay={0.12} className="order-2 lg:order-1">
              <div>
                {/* Visual placeholder */}
                <div className="aspect-[4/3] border border-warm-gray relative overflow-hidden mb-6 bg-cream">
                  <Image
                    src="/Storage.png"
                    alt="VPI storage pallets — vacuum pressure impregnated"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-primary px-3 py-1.5">
                    <p className="font-body text-xs font-semibold text-cream tracking-wider">6-YR WARRANTY</p>
                  </div>
                </div>

                <div className="bg-charcoal p-6">
                  <p className="font-body text-xs font-semibold tracking-[0.12em] uppercase text-accent mb-4">
                    Key features
                  </p>
                  <ul className="space-y-3">
                    {storageFeatures.map((f) => (
                      <li key={f} className="flex items-start gap-3">
                        <svg className="w-3.5 h-3.5 text-accent flex-shrink-0 mt-0.5" viewBox="0 0 14 14" fill="none">
                          <path d="M2 7l3.5 3.5L12 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span className="font-body text-xs text-cream/80 leading-relaxed">{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </FadeUp>

            <FadeUp className="order-1 lg:order-2">
              <div>
                <span className="inline-block font-body text-xs font-semibold tracking-[0.15em] uppercase text-accent mb-4">
                  Storage pallets
                </span>
                <h2 className="font-display text-display-md text-primary mb-4">
                  Vacuum Pressure Impregnated Pallets
                </h2>
                <span className="divider-amber" />
                <p className="font-body text-sm text-charcoal/70 leading-relaxed">
                  For warehouse and racking applications where pallets are used long-term, we offer
                  vacuum pressure impregnation. The Boron Borax solution is forced to the core of the
                  wood under pressures of up to 10 bar (145 PSI), providing deep and lasting
                  protection.
                </p>
                <p className="font-body text-sm text-charcoal/70 leading-relaxed mt-4">
                  These pallets carry a warranty of up to 6 years against pest contamination. They are
                  particularly suited for warehousing, racking systems, and any application where
                  pallets are stored rather than exported.
                </p>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Standard sizes */}
      <section className="section-padding cream-texture">
        <div className="container-content">
          <FadeUp>
            <SectionHeader
              eyebrow="Dimensions"
              title="Standard pallet sizes."
              subtitle="All standard international dimensions, plus custom sizes on request."
            />
          </FadeUp>

          <FadeUp delay={0.1} className="mt-10">
            <div className="border border-warm-gray overflow-hidden">
              <div className="grid grid-cols-2 bg-primary px-6 py-4">
                <p className="font-body text-xs font-semibold tracking-[0.12em] uppercase text-accent">
                  Size
                </p>
                <p className="font-body text-xs font-semibold tracking-[0.12em] uppercase text-accent">
                  Standard
                </p>
              </div>
              {sizes.map((row, i) => (
                <div
                  key={row.dimensions}
                  className={`grid grid-cols-2 px-6 py-4 border-t border-warm-gray ${i % 2 === 0 ? 'bg-white' : 'bg-cream'}`}
                >
                  <p className="font-body text-sm font-semibold text-primary">{row.dimensions}</p>
                  <p className="font-body text-sm text-charcoal/70">{row.standard}</p>
                </div>
              ))}
            </div>

            <p className="mt-6 font-body text-sm text-charcoal/60 leading-relaxed">
              Not sure which size you need? Contact us and we&apos;ll help you choose the right pallet for
              your cargo and destination.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-accent py-16">
        <div className="container-content flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-display text-2xl text-white">Get a quote for your order</h3>
            <p className="font-body text-sm text-white/80 mt-1">
              Tell us your size, quantity, and treatment requirements.
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
