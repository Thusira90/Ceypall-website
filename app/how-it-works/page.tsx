import type { Metadata } from 'next'
import Image from 'next/image'
import { FadeUp } from '@/components/ui/FadeUp'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Button } from '@/components/ui/Button'
import { SchemaScript } from '@/components/ui/SchemaScript'

export const metadata: Metadata = {
  title: 'How It Works — Our Pallet Manufacturing Process',
  description:
    'A transparent look at how CeyPall manufactures ISPM 15-certified pallets — from timber sourcing through boron pre-treatment, heat treatment, IPPC stamping, and delivery.',
  alternates: {
    canonical: 'https://www.ceypall.com/how-it-works',
  },
  openGraph: {
    title: 'How It Works — Our Pallet Manufacturing Process | CeyPall',
    description:
      'A transparent look at how CeyPall manufactures ISPM 15-certified pallets — from timber sourcing through boron pre-treatment, heat treatment, IPPC stamping, and delivery.',
    url: 'https://www.ceypall.com/how-it-works',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How It Works — Our Pallet Manufacturing Process | CeyPall',
    description:
      'From timber sourcing to IPPC stamping — how CeyPall manufactures ISPM 15-certified pallets.',
  },
}

const steps = [
  {
    number: '01',
    title: 'Timber sourcing',
    body: 'We use two locally sourced timber species as our primary materials — rubber wood and Lunumidella — both widely available in Sri Lanka and well suited for pallet manufacturing due to their structural strength and durability.',
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 28 28" fill="none">
        <path d="M14 4v20M6 10l8-6 8 6M4 20h20" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8 14v6M20 14v6M14 14v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    number: '02',
    title: 'Boron chemical pre-treatment',
    body: 'Before assembly, all timber components are immersed in a boron chemical bath at temperatures between 45°C and 60°C for 30–45 minutes. This standard pre-treatment is applied to every pallet we manufacture — export or storage — ensuring baseline protection against insects and fungal growth.',
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 28 28" fill="none">
        <path d="M8 6h12v12a6 6 0 01-12 0V6z" stroke="currentColor" strokeWidth="1.8" />
        <path d="M5 6h18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M11 12c1 1 5 1 6 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M14 10v5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    number: '03',
    title: 'Pallet assembly',
    body: 'Sized and treated planks and blocks are assembled into pallets using industrial nailing equipment. Pallets are built to standard international dimensions or to custom specifications.',
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 28 28" fill="none">
        <rect x="3" y="8" width="22" height="5" rx="1" stroke="currentColor" strokeWidth="1.8" />
        <rect x="3" y="15" width="22" height="5" rx="1" stroke="currentColor" strokeWidth="1.8" />
        <rect x="5" y="20" width="4" height="5" rx="0.5" stroke="currentColor" strokeWidth="1.5" />
        <rect x="12" y="20" width="4" height="5" rx="0.5" stroke="currentColor" strokeWidth="1.5" />
        <rect x="19" y="20" width="4" height="5" rx="0.5" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    number: '04',
    title: 'ISPM 15 heat treatment',
    body: 'Assembled pallets are loaded into our heat treatment chambers. The chamber raises the core temperature of the wood to 56°C, maintained for a minimum of 30 minutes. Treatment continues until the average moisture content of the wood falls below 15%. This process typically takes several days depending on initial moisture levels.',
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 28 28" fill="none">
        <path d="M14 4v4M14 20v4M4 14H8M20 14h4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <circle cx="14" cy="14" r="6" stroke="currentColor" strokeWidth="1.8" />
        <path d="M11 14c0-1.66 1.34-3 3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="14" cy="14" r="2" fill="currentColor" opacity="0.4" />
      </svg>
    ),
  },
  {
    number: '05',
    title: 'IPPC stamping',
    body: 'Once heat treatment is complete, each pallet is stamped with our IPPC mark — the internationally recognised symbol confirming ISPM 15 compliance — along with CeyPall\'s official registration number issued by the National Plant Quarantine Service of Sri Lanka.',
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 28 28" fill="none">
        <rect x="4" y="4" width="20" height="20" rx="2" stroke="currentColor" strokeWidth="1.8" />
        <path d="M8 14l4 4 8-8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    number: '06',
    title: 'Treatment certificate & delivery',
    body: 'A treatment certificate is issued for every order. Pallets are then scheduled for delivery to your location across Sri Lanka.',
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 28 28" fill="none">
        <path d="M4 8h20v14a2 2 0 01-2 2H6a2 2 0 01-2-2V8z" stroke="currentColor" strokeWidth="1.8" />
        <path d="M4 8l10-4 10 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M10 16h8M10 12h5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
]

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.ceypall.com/' },
    { '@type': 'ListItem', position: 2, name: 'How It Works', item: 'https://www.ceypall.com/how-it-works' },
  ],
}

const howToJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How CeyPall Manufactures ISPM 15 Certified Pallets',
  description:
    'The step-by-step process CeyPall uses to manufacture ISPM 15 certified, IPPC-stamped wooden pallets for Sri Lankan exporters.',
  totalTime: 'P5D',
  supply: [
    { '@type': 'HowToSupply', name: 'Rubber wood timber' },
    { '@type': 'HowToSupply', name: 'Lunumidella timber' },
    { '@type': 'HowToSupply', name: 'Boron chemical solution' },
    { '@type': 'HowToSupply', name: 'Industrial nails' },
  ],
  tool: [
    { '@type': 'HowToTool', name: 'Heat treatment kiln' },
    { '@type': 'HowToTool', name: 'Industrial nailing equipment' },
    { '@type': 'HowToTool', name: 'IPPC branding iron' },
    { '@type': 'HowToTool', name: 'Boron chemical treatment tank' },
  ],
  step: [
    {
      '@type': 'HowToStep',
      position: 1,
      name: 'Timber sourcing',
      text: 'Source rubber wood and Lunumidella timber — both locally available in Sri Lanka and well suited for pallet manufacturing due to their structural strength and durability.',
    },
    {
      '@type': 'HowToStep',
      position: 2,
      name: 'Boron chemical pre-treatment',
      text: 'Immerse all timber components in a boron chemical bath at temperatures between 45°C and 60°C for 30–45 minutes, providing baseline protection against insects and fungal growth.',
    },
    {
      '@type': 'HowToStep',
      position: 3,
      name: 'Pallet assembly',
      text: 'Assemble sized and treated planks and blocks into pallets using industrial nailing equipment. Build to standard international dimensions or custom specifications.',
    },
    {
      '@type': 'HowToStep',
      position: 4,
      name: 'ISPM 15 heat treatment',
      text: 'Load assembled pallets into heat treatment chambers. Raise core temperature to 56°C, maintained for a minimum of 30 minutes, until moisture content falls below 15%.',
    },
    {
      '@type': 'HowToStep',
      position: 5,
      name: 'IPPC stamping',
      text: 'Stamp each pallet with the IPPC mark confirming ISPM 15 compliance, along with CeyPall\'s official registration number issued by the National Plant Quarantine Service of Sri Lanka.',
    },
    {
      '@type': 'HowToStep',
      position: 6,
      name: 'Treatment certificate and delivery',
      text: 'Issue a treatment certificate for the order and schedule delivery to the customer\'s location across Sri Lanka.',
    },
  ],
}

export default function HowItWorksPage() {
  return (
    <>
      {/* ── JSON-LD ─────────────────────────────────────────────────────── */}
      <SchemaScript schema={breadcrumbJsonLd} />
      <SchemaScript schema={howToJsonLd} />

      {/* Header */}
      <section className="wood-texture section-padding">
        <div className="container-content">
          <FadeUp>
            <SectionHeader
              as="h1"
              eyebrow="Manufacturing process"
              title="How It Works — Our Pallet Manufacturing Process"
              subtitle="A transparent, step-by-step process — from raw timber to certified, delivery-ready pallets."
              light
            />
          </FadeUp>
        </div>
      </section>

      {/* Steps */}
      <section className="section-padding cream-texture">
        <div className="container-content">
          <div className="relative">
            {/* Vertical timeline line */}
            <div className="hidden lg:block absolute left-8 top-0 bottom-0 w-px bg-warm-gray" />

            <div className="space-y-0">
              {steps.map((step, index) => (
                <FadeUp key={step.number} delay={index * 0.08}>
                  <div className="grid grid-cols-1 lg:grid-cols-[4rem_1fr] gap-0 lg:gap-10 group">
                    {/* Step indicator */}
                    <div className="hidden lg:flex flex-col items-center">
                      <div className="relative z-10 w-16 h-16 bg-cream border-2 border-warm-gray group-hover:border-accent flex items-center justify-center transition-colors duration-300 flex-shrink-0">
                        <div className="text-primary/60 group-hover:text-accent transition-colors duration-300">
                          {step.icon}
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="pb-12 border-b border-warm-gray last:border-0 last:pb-0">
                      <div className="flex items-start gap-5 mb-4">
                        {/* Mobile icon */}
                        <div className="lg:hidden w-12 h-12 bg-primary/8 flex items-center justify-center text-primary flex-shrink-0">
                          {step.icon}
                        </div>
                        <div>
                          <span className="font-body text-xs font-semibold text-accent tracking-[0.12em] uppercase">
                            Step {step.number}
                          </span>
                          <h3 className="font-display text-xl font-semibold text-primary mt-1">
                            {step.title}
                          </h3>
                        </div>
                      </div>
                      <p className="font-body text-sm text-charcoal/70 leading-relaxed max-w-2xl lg:mt-0">
                        {step.body}
                      </p>
                    </div>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process image */}
      <section className="bg-primary">
        <FadeUp>
          <div className="relative w-full aspect-[16/9] overflow-hidden">
            <Image
              src="/how-it-works.png"
              alt="CeyPall pallet manufacturing process"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-primary/20" />
          </div>
        </FadeUp>
      </section>

      {/* Quality assurance note */}
      <section className="bg-primary py-14">
        <div className="container-content">
          <FadeUp>
            <div className="flex items-start gap-6 max-w-3xl">
              <div className="w-12 h-12 bg-accent flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2L4 6v6c0 5.55 3.84 10.74 8 12 4.16-1.26 8-6.45 8-12V6l-8-4z" fill="currentColor" opacity="0.2" />
                  <path d="M12 2L4 6v6c0 5.55 3.84 10.74 8 12 4.16-1.26 8-6.45 8-12V6l-8-4z" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div>
                <p className="font-body text-xs font-semibold tracking-[0.12em] uppercase text-accent mb-2">
                  Quality assurance
                </p>
                <p className="font-body text-sm text-cream/80 leading-relaxed">
                  CeyPall is officially registered with the National Plant Quarantine Service of Sri Lanka
                  as a certified ISPM 15 heat treatment provider. Every batch we produce is traceable to
                  our registration.
                </p>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding-sm py-16 bg-accent">
        <div className="container-content flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-display text-2xl text-white">Ready to place an order?</h3>
            <p className="font-body text-sm text-white/80 mt-1">
              We&apos;ll handle the rest — certified, stamped, and delivered.
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
