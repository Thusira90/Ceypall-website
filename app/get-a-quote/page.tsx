import type { Metadata } from 'next'
import Image from 'next/image'
import { ContactForm } from '@/components/contact/ContactForm'
import { LogoWordmark } from '@/components/layout/LogoWordmark'

// Paid-ad landing page. Noindexed and left out of the sitemap so it never
// competes with the organic pages; Nav and Footer are hidden by HideOnLanding.
export const metadata: Metadata = {
  title: 'Wooden Pallets — Any Quantity, No Minimum Order',
  description:
    'ISPM 15 heat-treated wooden pallets from CeyPall, Kochchikade. No minimum order — one pallet to a full container. Quote within one business day.',
  robots: { index: false, follow: false },
  alternates: { canonical: 'https://www.ceypall.com/get-a-quote' },
}

const proof = [
  { value: 'LK-0175', label: 'NPQS-registered ISPM 15 provider' },
  { value: 'Rs 2,500–8,500', label: 'Typical price per pallet' },
  { value: '3–5 days', label: 'Standard lead time, island-wide' },
  { value: 'No MOQ', label: 'One pallet to a full container' },
]

const clients = ['Akbar Brothers', 'CBL Natural Foods', 'Hemas Manufacturing', 'GPV Lanka']

export default function GetAQuotePage() {
  return (
    <div className="-mt-[72px]">
      {/* Minimal header — logo only, no navigation exits */}
      <header className="bg-primary">
        <div className="container-content flex items-center justify-between py-4">
          <LogoWordmark variant="light" className="text-2xl" />
          <a
            href="tel:+94714711417"
            className="font-body text-sm font-semibold text-cream hover:text-accent transition-colors"
          >
            Call 0714 711 417
          </a>
        </div>
      </header>

      <section className="wood-texture py-12 lg:py-16">
        <div className="container-content grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div>
            <p className="font-body text-xs font-semibold tracking-[0.15em] uppercase text-accent mb-4">
              ISPM 15 · IPPC-stamped · Kochchikade
            </p>
            <h1 className="font-display text-display-lg text-cream leading-tight mb-5">
              Wooden Pallets in Sri Lanka — Any Quantity, No Minimum Order.
            </h1>
            <p className="font-body text-base text-cream/80 leading-relaxed mb-6">
              Heat-treated, IPPC-stamped export pallets and storage pallets, made in Kochchikade.
              Order a single pallet or a full container. Every pallet comes with a treatment
              certificate.
            </p>
            <div className="flex flex-wrap gap-3 mb-8">
              <a
                href="tel:+94714711417"
                className="inline-flex items-center justify-center font-body font-semibold px-6 py-3 text-sm bg-accent hover:bg-accent-hover text-white border-2 border-accent transition-colors"
              >
                Call 0714 711 417
              </a>
              <a
                href="https://wa.me/94714711417?text=Hi%20CeyPall%2C%20I%20need%20a%20pallet%20quote."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center font-body font-semibold px-6 py-3 text-sm border-2 border-cream text-cream hover:bg-cream hover:text-primary transition-colors"
              >
                WhatsApp us
              </a>
            </div>
            <div className="relative hidden lg:block aspect-[4/3] w-full">
              <Image
                src="/ht-pallet-02.jpg"
                alt="ISPM 15 heat-treated wooden pallets at CeyPall, Kochchikade"
                fill
                sizes="45vw"
                className="object-cover"
                priority
              />
            </div>
          </div>

          <div className="bg-cream p-6 sm:p-8 shadow-2xl">
            <h2 className="font-display text-xl font-semibold text-primary mb-1">Get a quote</h2>
            <p className="font-body text-sm text-charcoal/60 mb-6">
              Four quick questions. We reply within one business day, Mon–Sat 8:30am–5:30pm.
            </p>
            <ContactForm formLocation="quote-landing" compact />
          </div>
        </div>
      </section>

      {/* Proof row */}
      <section className="bg-primary-dark py-10">
        <div className="container-content grid grid-cols-2 md:grid-cols-4 gap-6">
          {proof.map(({ value, label }) => (
            <div key={label} className="text-center">
              <p className="font-display text-2xl font-semibold text-accent">{value}</p>
              <p className="font-body text-xs text-cream/70 mt-1">{label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="cream-texture py-10">
        <div className="container-content text-center">
          <p className="font-body text-xs font-semibold tracking-[0.15em] uppercase text-charcoal/50 mb-3">
            Supplying Sri Lankan exporters including
          </p>
          <p className="font-body text-sm text-charcoal/80">{clients.join(' · ')} and 30+ more</p>
          <p className="font-body text-xs text-charcoal/40 mt-8">
            CeyPall (Pvt) Ltd · Reg. No. PV 00341995 · 1088 Colombo Road, Daluwakotuwa,
            Kochchikade 11540
          </p>
        </div>
      </section>
    </div>
  )
}
