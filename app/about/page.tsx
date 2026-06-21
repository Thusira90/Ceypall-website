import type { Metadata } from 'next'
import { FadeUp } from '@/components/ui/FadeUp'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Button } from '@/components/ui/Button'
import { SchemaScript } from '@/components/ui/SchemaScript'

export const metadata: Metadata = {
  title: 'About — Our Story & Certifications',
  description:
    "Learn about CeyPall — Sri Lanka's dedicated ISPM 15-certified wooden pallet manufacturer, with timber expertise dating to 1955 and pallet manufacturing since 2005. IPPC registered. Supplying island-wide.",
  twitter: {
    description:
      "Learn about CeyPall — Sri Lanka's dedicated ISPM 15-certified wooden pallet manufacturer, with timber expertise dating to 1955 and pallet manufacturing since 2005. IPPC registered. Supplying island-wide.",
  },
  openGraph: {
    title: 'About CeyPall — Our Story & Certifications | CeyPall (Pvt) Ltd',
    description:
      "Learn about CeyPall — Sri Lanka's dedicated ISPM 15-certified wooden pallet manufacturer, with timber expertise dating to 1955 and pallet manufacturing since 2005. IPPC registered. Supplying island-wide.",
    url: '/about',
  },
}

const aboutPageJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  '@id': 'https://www.ceypall.com/about#webpage',
  name: 'About CeyPall — Our Story & Certifications',
  url: 'https://www.ceypall.com/about',
  description:
    "Learn about CeyPall — Sri Lanka's dedicated ISPM 15-certified wooden pallet manufacturer, with timber expertise dating to 1955 and pallet manufacturing since 2005.",
  publisher: {
    '@type': 'Organization',
    '@id': 'https://www.ceypall.com/#organization',
    name: 'CeyPall (Pvt) Ltd',
    url: 'https://www.ceypall.com',
  },
  about: {
    '@type': 'Organization',
    name: 'CeyPall (Pvt) Ltd',
    foundingDate: '2005',
    description: "Sri Lanka's dedicated ISPM 15-certified wooden pallet manufacturer.",
    address: {
      '@type': 'PostalAddress',
      streetAddress: '1088 Colombo Road',
      addressLocality: 'Kochchikade',
      postalCode: '11540',
      addressCountry: 'LK',
    },
    sameAs: [
      'https://www.facebook.com/profile.php?id=61587265021762',
      'https://www.instagram.com/ceypall/',
      'https://www.linkedin.com/company/ceypall-pvt-ltd/',
    ],
  },
}

const whyItems = [
  { label: 'Timber expertise since 1955' },
  { label: 'Pallet manufacturing since 2005' },
  { label: 'Officially IPPC registered in Sri Lanka' },
  { label: 'ISPM 15 certified — export compliant' },
  { label: 'Locally sourced rubber wood and Lunumidella' },
  { label: 'Treatment certificates with every order' },
  { label: 'Island-wide delivery' },
  { label: 'Trusted by 40+ companies' },
]

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.ceypall.com/' },
    { '@type': 'ListItem', position: 2, name: 'About', item: 'https://www.ceypall.com/about' },
  ],
}

export default function AboutPage() {
  return (
    <>
      {/* ── JSON-LD ─────────────────────────────────────────────────────── */}
      <SchemaScript schema={aboutPageJsonLd} />
      <SchemaScript schema={breadcrumbJsonLd} />

      {/* Header */}
      <section className="wood-texture section-padding">
        <div className="container-content">
          <FadeUp>
            <SectionHeader
              eyebrow="About us"
              title="CeyPall Pvt Ltd."
              subtitle="Sri Lanka's dedicated ISPM 15-certified wooden pallet manufacturer."
              light
            />
          </FadeUp>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding cream-texture">
        <div className="container-content">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <FadeUp>
              <div>
                <SectionHeader
                  eyebrow="Our story"
                  title="Built on decades of timber expertise."
                />
                <p className="font-body text-sm text-charcoal/70 leading-relaxed mb-5">
                  CeyPall (Pvt) Ltd is a Sri Lankan manufacturer of high-quality wooden pallets, built
                  specifically for international export markets. Our business is rooted in a timber
                  legacy that stretches back to 1955 — over seven decades of working with wood.
                </p>
                <p className="font-body text-sm text-charcoal/70 leading-relaxed mb-5">
                  Since 2005, our focus has been the manufacture of ISPM 15-compliant pallets for
                  exporters, freight companies, and manufacturers across Sri Lanka. Every pallet we
                  produce undergoes certified heat treatment and is manufactured under strict quality
                  controls.
                </p>
                <p className="font-body text-sm text-charcoal/70 leading-relaxed">
                  We are recognised by the National Plant Quarantine Service of Sri Lanka as a certified
                  heat treatment provider, and every pallet we ship carries the IPPC stamp as proof of
                  compliance.
                </p>
              </div>
            </FadeUp>

            {/* Timeline visual */}
            <FadeUp delay={0.1}>
              <div className="bg-primary p-8 space-y-0">
                <p className="font-body text-xs font-semibold tracking-[0.15em] uppercase text-accent mb-8">
                  Our timeline
                </p>
                {[
                  { year: '1955', label: 'Timber business founded', sub: 'Seven decades of working with wood' },
                  { year: '2005', label: 'Pallet manufacturing launched', sub: 'Focused on export-grade ISPM 15 pallets' },
                  { year: '2010s', label: 'IPPC registration secured', sub: 'National Plant Quarantine Service, Sri Lanka' },
                  { year: 'Today', label: '40+ active clients', sub: 'Island-wide delivery network' },
                ].map(({ year, label, sub }, i, arr) => (
                  <div key={year} className="flex gap-6">
                    <div className="flex flex-col items-center">
                      <div className="w-3 h-3 bg-accent flex-shrink-0 mt-0.5" />
                      {i < arr.length - 1 && <div className="w-px flex-1 bg-cream/10 my-1" />}
                    </div>
                    <div className={`pb-8 ${i === arr.length - 1 ? 'pb-0' : ''}`}>
                      <span className="font-display text-sm font-semibold text-accent">{year}</span>
                      <p className="font-body text-sm font-medium text-cream mt-0.5">{label}</p>
                      <p className="font-body text-xs text-cream/50 mt-0.5">{sub}</p>
                    </div>
                  </div>
                ))}
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section-padding bg-charcoal">
        <div className="container-content">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5">
            <FadeUp>
              <div className="bg-charcoal p-10">
                <div className="w-10 h-10 bg-accent/15 flex items-center justify-center mb-6">
                  <svg className="w-5 h-5 text-accent" viewBox="0 0 20 20" fill="none">
                    <circle cx="10" cy="10" r="7" stroke="currentColor" strokeWidth="1.5" />
                    <circle cx="10" cy="10" r="3" stroke="currentColor" strokeWidth="1.5" />
                    <path d="M10 3V1M10 19v-2M3 10H1M19 10h-2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </div>
                <h3 className="font-display text-xl font-semibold text-cream mb-4">Our vision</h3>
                <p className="font-body text-sm text-cream/70 leading-relaxed">
                  To become the leading and preferred provider of high-quality, efficient, and
                  sustainable pallet solutions — driven by innovation, customer satisfaction, and a
                  commitment to the environment.
                </p>
              </div>
            </FadeUp>

            <FadeUp delay={0.08}>
              <div className="bg-charcoal p-10">
                <div className="w-10 h-10 bg-accent/15 flex items-center justify-center mb-6">
                  <svg className="w-5 h-5 text-accent" viewBox="0 0 20 20" fill="none">
                    <path d="M10 2l2 4 4.5.5-3.25 3.2.8 4.5L10 12l-4.05 2.2.8-4.5L3.5 6.5 8 6z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3 className="font-display text-xl font-semibold text-cream mb-4">Our mission</h3>
                <p className="font-body text-sm text-cream/70 leading-relaxed">
                  To deliver outstanding quality, value, and service to our customers through advanced
                  technology, trained personnel, and environmentally responsible practices. We are
                  committed to providing safe, durable, and customisable pallet solutions — and through
                  innovation, efficiency, and integrity, to achieving sustainable growth and a positive
                  impact on the communities we serve.
                </p>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Why CeyPall */}
      <section className="section-padding cream-texture">
        <div className="container-content">
          <FadeUp>
            <SectionHeader
              eyebrow="Why choose us"
              title="What sets us apart."
            />
          </FadeUp>

          <FadeUp delay={0.1}>
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl">
              {whyItems.map(({ label }) => (
                <div key={label} className="flex items-center gap-3 py-3 border-b border-warm-gray">
                  <div className="w-5 h-5 bg-accent flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-white" viewBox="0 0 12 12" fill="none">
                      <path d="M2 6l2.5 2.5L10 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <span className="font-body text-sm text-charcoal/80">{label}</span>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-20">
        <div className="container-content">
          <div className="max-w-2xl">
            <FadeUp>
              <p className="font-body text-xs font-semibold tracking-[0.15em] uppercase text-accent mb-4">
                Work with us
              </p>

              <p className="font-body text-sm text-cream/75 leading-relaxed mb-8">
                Whether you&apos;re an exporter needing certified pallets for your next shipment, a
                manufacturer looking for a reliable supply, or a logistics company seeking a long-term
                partner — we&apos;d love to hear from you.
              </p>
              <Button href="/contact" variant="primary" size="lg">
                Get in touch →
              </Button>
            </FadeUp>
          </div>
        </div>
      </section>
    </>
  )
}
