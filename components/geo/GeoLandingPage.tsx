import { FadeUp } from '@/components/ui/FadeUp'
import { Button } from '@/components/ui/Button'
import { SectionHeader } from '@/components/ui/SectionHeader'

export interface GeoReason {
  number: string
  title: string
  body: string
}

export interface GeoFaq {
  question: string
  answer: string
}

export interface GeoLandingPageProps {
  city: string
  eyebrow: string
  heading: string
  subheading: string
  reasons: GeoReason[]
  industries: string[]
  deliveryTime: string
  deliveryNote: string
  faqs: GeoFaq[]
}

export function GeoLandingPage({
  city,
  eyebrow,
  heading,
  subheading,
  reasons,
  industries,
  deliveryTime,
  deliveryNote,
  faqs,
}: GeoLandingPageProps) {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section className="wood-texture section-padding">
        <div className="container-content">
          <FadeUp>
            <div className="max-w-2xl">
              <p className="font-body text-xs font-semibold tracking-[0.15em] uppercase text-accent mb-4">
                {eyebrow}
              </p>
              <h1 className="font-display text-display-lg text-cream">
                {heading}
              </h1>
              <span className="block w-10 h-0.5 bg-accent mt-4 mb-5" />
              <p className="font-body text-base text-cream/80 leading-relaxed mb-8">
                {subheading}
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

      {/* ── Why CeyPall for [City] ──────────────────────────────────── */}
      <section className="section-padding cream-texture">
        <div className="container-content">
          <FadeUp>
            <div className="mb-12">
              <SectionHeader
                eyebrow={`Serving ${city}`}
                title={`Why exporters in ${city} choose CeyPall.`}
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
                  Who we supply in {city}.
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
                      <p className="font-body text-sm text-cream/90 font-semibold">{deliveryTime}</p>
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
                      <p className="font-body text-sm text-cream/80 leading-relaxed">{deliveryNote}</p>
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
              Need pallets delivered to {city}?
            </h2>
            <p className="font-body text-sm text-white/80 mt-1">
              Send us your size, quantity, and required date — we'll confirm quickly.
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
