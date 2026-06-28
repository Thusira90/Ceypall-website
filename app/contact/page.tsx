import type { Metadata } from 'next'
import { FadeUp } from '@/components/ui/FadeUp'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { ContactForm } from '@/components/contact/ContactForm'
import { SchemaScript } from '@/components/ui/SchemaScript'

export const metadata: Metadata = {
  title: 'Contact — Get a Quote',
  description:
    'Request a quote from CeyPall (Pvt) Ltd for ISPM 15 heat-treated export pallets or vacuum pressure impregnated storage pallets. Call +94 312 277 752 or email office@ceypall.com.',
  alternates: {
    canonical: 'https://www.ceypall.com/contact',
  },
}

const contactDetails = [
  {
    label: 'Phone',
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none">
        <path
          d="M3 2h3l1.5 3.5-1.75 1a8.5 8.5 0 004.75 4.75l1-1.75L15 11v3a1 1 0 01-1 1A13 13 0 012 3a1 1 0 011-1z"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinejoin="round"
        />
      </svg>
    ),
    lines: [
      <a key="p2" href="tel:+94714711417" className="hover:text-primary transition-colors">+94 714 711 417</a>,
      <a key="p3" href="tel:+94769494944" className="hover:text-primary transition-colors">+94 769 494 944</a>,
      <a key="p1" href="tel:+94312277752" className="hover:text-primary transition-colors">+94 312 277 752</a>,
    ],
  },
  {
    label: 'Email',
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none">
        <rect x="1" y="3" width="14" height="10" rx="1" stroke="currentColor" strokeWidth="1.2" />
        <path d="M1 4l7 5 7-5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    lines: [
      <a key="e1" href="mailto:office@ceypall.com" className="hover:text-primary transition-colors">office@ceypall.com</a>,
    ],
  },
  {
    label: 'Address',
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none">
        <path
          d="M8 1a5 5 0 015 5c0 3.5-5 9-5 9S3 9.5 3 6a5 5 0 015-5z"
          stroke="currentColor"
          strokeWidth="1.2"
        />
        <circle cx="8" cy="6" r="1.5" stroke="currentColor" strokeWidth="1.2" />
      </svg>
    ),
    lines: [
      <span key="a1">1088, Colombo Road, Daluwakotuwa,</span>,
      <span key="a2">Kochchikade, Sri Lanka 11540</span>,
    ],
  },
]

const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'CeyPall (Pvt) Ltd',
  description:
    "Sri Lanka's dedicated export pallet manufacturer. ISPM 15 certified, IPPC-stamped heat treated wooden pallets for exporters island-wide.",
  url: 'https://www.ceypall.com',
  telephone: '+94714711417',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '1088 Colombo Road',
    addressLocality: 'Kochchikade',
    addressRegion: 'Western Province',
    postalCode: '11540',
    addressCountry: 'LK',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 7.2533,
    longitude: 79.8518,
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    opens: '08:30',
    closes: '17:30',
  },
  areaServed: {
    '@type': 'Country',
    name: 'Sri Lanka',
  },
  hasMap: 'https://maps.google.com/?q=1088+Colombo+Road+Kochchikade+Sri+Lanka',
}

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.ceypall.com/' },
    { '@type': 'ListItem', position: 2, name: 'Contact', item: 'https://www.ceypall.com/contact' },
  ],
}

export default function ContactPage() {
  return (
    <>
      {/* ── JSON-LD ─────────────────────────────────────────────────────── */}
      <SchemaScript schema={localBusinessJsonLd} />
      <SchemaScript schema={breadcrumbJsonLd} />

      {/* Header */}
      <section className="wood-texture section-padding">
        <div className="container-content">
          <FadeUp>
            <SectionHeader
              as="h1"
              eyebrow="Get in touch"
              title="Contact CeyPall — Get a Quote"
              subtitle="Request a quote, ask a question, or discuss a custom order. We respond promptly."
              light
            />
          </FadeUp>
        </div>
      </section>

      {/* Form + details */}
      <section className="section-padding cream-texture">
        <div className="container-content">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-16 items-start">
            {/* Form */}
            <FadeUp>
              <div>
                <p className="font-body text-xs font-semibold tracking-[0.15em] uppercase text-accent mb-6">
                  Send an enquiry
                </p>
                <ContactForm />
              </div>
            </FadeUp>

            {/* Contact details */}
            <FadeUp delay={0.1}>
              <div className="space-y-8">
                {/* Contact info card */}
                <div className="bg-primary p-8">
                  <p className="font-body text-xs font-semibold tracking-[0.15em] uppercase text-accent mb-6">
                    Contact details
                  </p>
                  <div className="space-y-6">
                    {contactDetails.map(({ label, icon, lines }) => (
                      <div key={label} className="flex gap-4">
                        <div className="w-8 h-8 bg-cream/8 flex items-center justify-center text-accent flex-shrink-0">
                          {icon}
                        </div>
                        <div>
                          <p className="font-body text-xs font-semibold text-cream/50 uppercase tracking-wider mb-1.5">
                            {label}
                          </p>
                          <div className="space-y-0.5">
                            {lines.map((line, i) => (
                              <p key={i} className="font-body text-sm text-cream/80">
                                {line}
                              </p>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Sister company */}
                <div className="bg-warm-gray/60 border border-warm-gray p-6">
                  <p className="font-body text-xs font-semibold tracking-[0.12em] uppercase text-charcoal/50 mb-3">
                    Related services
                  </p>
                  <p className="font-body text-sm text-charcoal/70 leading-relaxed">
                    Need timber treatment or kiln drying services? Visit our sister company{' '}
                    <strong className="text-primary font-semibold">St. Xavier Timber</strong> at{' '}
                    <a
                      href="https://stxaviertimber.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent underline underline-offset-2 hover:text-accent-hover transition-colors"
                    >
                      stxaviertimber.com
                    </a>{' '}
                    for chemical impregnation and kiln drying services.
                  </p>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="h-[400px] bg-warm-gray relative overflow-hidden">
        <iframe
          title="CeyPall (Pvt) Ltd — 1088 Colombo Road, Kochchikade, Sri Lanka"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.8904994383297!2d79.85182467448487!3d7.253301814253568!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2e99a0e8b9d67%3A0x1c722fe3db65d2df!2sCeyPall%20(Pvt)%20Ltd!5e0!3m2!1sen!2slk!4v1780915709649!5m2!1sen!2slk"
          className="w-full h-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
        <div className="absolute inset-0 pointer-events-none ring-1 ring-inset ring-warm-gray" />
      </section>
    </>
  )
}
