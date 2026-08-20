import type { Metadata } from 'next'
import Link from 'next/link'
import { FadeUp } from '@/components/ui/FadeUp'
import { RelatedLinks } from '@/components/ui/RelatedLinks'
import { AnswerBlock } from '@/components/ui/AnswerBlock'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Button } from '@/components/ui/Button'
import { SchemaScript } from '@/components/ui/SchemaScript'

export const metadata: Metadata = {
  title: 'Food Grade Pallets Sri Lanka | ISPM 15 Heat Treated — CeyPall',
  description:
    'Food grade wooden pallets from CeyPall — heat treated to ISPM 15, no chemical residue, low moisture. Trusted by CBL Natural Foods, Akbar Brothers, and Ceylon Tea Marketing.',
  alternates: {
    canonical: 'https://www.ceypall.com/food-grade-pallets-sri-lanka',
  },
  openGraph: {
    title: 'Food Grade Wooden Pallets Sri Lanka | CeyPall (Pvt) Ltd',
    description:
      'ISPM 15 heat-treated food grade pallets — chemical-free heat treatment, kiln-dried below 15% MC, bark-free. Suitable for tea, spices, coconut and packaged food export.',
    url: 'https://www.ceypall.com/food-grade-pallets-sri-lanka',
    images: [
      {
        url: '/OPENGIMAGE.jpg',
        width: 1200,
        height: 630,
        alt: 'CeyPall — food grade wooden pallets, Sri Lanka',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Food Grade Pallets Sri Lanka | CeyPall',
    description:
      'Heat-treated food grade pallets — chemical-free, low moisture, ISPM 15 certified for food and beverage export.',
    images: ['/OPENGIMAGE.jpg'],
  },
}

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.ceypall.com/' },
    { '@type': 'ListItem', position: 2, name: 'Food Grade Pallets Sri Lanka', item: 'https://www.ceypall.com/food-grade-pallets-sri-lanka' },
  ],
}

const faqs = [
  {
    question: 'What makes a wooden pallet "food grade"?',
    answer:
      'A food grade wooden pallet is one that is safe to place in direct or near-direct contact with food packaging. In practice this means: (1) treated by heat only — not chemically fumigated with methyl bromide — so there is no chemical residue, (2) kiln-dried to a low moisture content to prevent mould and bacterial growth in transit, (3) bark-free and free of visible contamination, and (4) ISPM 15 certified with an IPPC stamp so it clears customs in food-importing countries. Every CeyPall pallet meets these four requirements as standard.',
  },
  {
    question: 'Are CeyPall pallets safe for tea, spices, and packaged food exports?',
    answer:
      'Yes. CeyPall pallets are heat treated — no chemical fumigation is used at any stage — and are trusted by leading Sri Lankan food and beverage exporters including CBL Natural Foods, CBL Global Foods, Akbar Brothers, and Ceylon Tea Marketing. Pallets are kiln-dried below 15% moisture content and bark-free, meeting the strictest food-safety requirements of Japanese, EU, and Middle Eastern buyers.',
  },
  {
    question: 'What is the difference between heat treated and chemically fumigated pallets for food?',
    answer:
      'Heat treatment raises the wood core to 56°C for at least 30 minutes to kill pests — no chemicals are used, so no residue is left on the wood. Methyl bromide (MB) fumigation uses a toxic chemical gas that can leave residue and is now banned or restricted for food contact in the EU, Japan, and many other markets. CeyPall exclusively uses heat treatment, which is universally accepted for food and beverage exports.',
  },
  {
    question: 'Do you supply food grade pallets to CBL, Akbar Brothers, and other food exporters?',
    answer:
      'Yes. CeyPall supplies food grade wooden pallets to major Sri Lankan food and beverage exporters — including CBL Natural Foods (Pvt) Ltd, CBL Global Foods (Pvt) Ltd, Akbar Brothers (Pvt) Ltd, Ceylon Tea Marketing (Pvt) Ltd, and Hemas Manufacturing (Pvt) Ltd. Recurring delivery schedules are available for high-volume food exporters.',
  },
  {
    question: 'Why is low moisture content important for food-grade pallets?',
    answer:
      'Wood at above 15% moisture content can encourage mould growth, especially inside sealed shipping containers during long ocean voyages. Mould contamination can spoil the food product, trigger buyer rejections, and lead to costly claims. CeyPall kiln-dries all pallets below 15% MC as standard, and below 12% on request for long-haul food shipments to Japan and Europe.',
  },
]

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: { '@type': 'Answer', text: faq.answer },
  })),
}

const features = [
  {
    number: '01',
    title: 'Chemical-Free Heat Treatment',
    body: 'Every pallet is treated by heat only — core raised to 56°C for a minimum of 30 minutes. No methyl bromide, no toxic residue. Safe for direct contact with food packaging and accepted by EU and Japanese food safety authorities.',
  },
  {
    number: '02',
    title: 'Kiln-Dried Below 15% MC',
    body: 'High moisture wood breeds mould inside sealed containers. Our food grade pallets are kiln-dried below 15% moisture content, with sub-12% MC available on request for long-haul food shipments.',
  },
  {
    number: '03',
    title: 'Bark-Free Guarantee',
    body: 'Every pallet is inspected to ensure complete bark removal before dispatch. Bark residue is a common cause of Japanese and EU customs rejections for food shipments — we eliminate it at source.',
  },
  {
    number: '04',
    title: 'Trusted by Food Exporters',
    body: 'CBL Natural Foods, CBL Global Foods, Akbar Brothers, Ceylon Tea Marketing, and Hemas Manufacturing all use CeyPall pallets for their export shipments. Our food-grade specification is proven in production.',
  },
]

const foodExportUses = [
  { product: 'Ceylon Tea', requirement: 'Chemical-free, low moisture, bark-free', buyers: 'Japan, EU, Middle East, Russia' },
  { product: 'Spices (cinnamon, pepper, cloves)', requirement: 'ISPM 15, no chemical residue', buyers: 'EU, USA, Middle East' },
  { product: 'Coconut products (DC, oil, milk)', requirement: 'Heat treated, food-safe', buyers: 'EU, USA, Australia, Middle East' },
  { product: 'Packaged foods & confectionery', requirement: 'ISPM 15, low moisture', buyers: 'EU, UK, USA, Middle East, Australia' },
  { product: 'Rice, pulses, and grains', requirement: 'Bark-free, chemical-free', buyers: 'Middle East, Africa' },
  { product: 'Fresh produce & seafood packaging', requirement: 'Low moisture, ISPM 15', buyers: 'EU, Middle East, Maldives' },
]

export default function FoodGradePalletsPage() {
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
                Food grade wooden pallets
              </p>
              <h1 className="font-display text-display-lg text-cream">
                Food Grade Pallets for Sri Lankan Food &amp; Beverage Exporters.
              </h1>
              <span className="block w-10 h-0.5 bg-accent mt-4 mb-5" />
              <p className="font-body text-base text-cream/80 leading-relaxed mb-8">
                ISPM 15 heat-treated wooden pallets — chemical-free, kiln-dried below 15% MC, bark-free.
                The choice of Sri Lanka&rsquo;s leading tea, spice, coconut, and packaged-food exporters.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button href="/contact" variant="primary" size="lg">
                  Request a quote →
                </Button>
                <Button href="/products" variant="outline-light" size="lg">
                  View all products
                </Button>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Answer block */}
      <section className="section-padding cream-texture">
        <div className="container-content">
          <AnswerBlock question="In short: what makes a pallet food grade?">
            A <strong>food grade wooden pallet</strong> is one that is safe to touch food packaging: <strong>heat treated only</strong> (no methyl bromide or chemical residue), <strong>kiln-dried below 15% moisture</strong> so it will not breed mould in transit, and <strong>bark-free and ISPM 15 certified</strong> so it clears customs in food-importing countries. Every CeyPall pallet meets these four requirements as standard.
          </AnswerBlock>

          <FadeUp>
            <div className="mb-12">
              <SectionHeader
                eyebrow="Why food exporters choose CeyPall"
                title="Built for food and beverage supply chains."
              />
            </div>
          </FadeUp>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-warm-gray">
            {features.map(({ number, title, body }) => (
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

      {/* Uses table */}
      <section className="section-padding bg-warm-gray/40">
        <div className="container-content">
          <FadeUp>
            <SectionHeader
              eyebrow="Applications"
              title="Food products shipped on CeyPall pallets."
            />
          </FadeUp>

          <FadeUp delay={0.1}>
            <div className="mt-10 overflow-x-auto">
              <table className="w-full font-body text-sm">
                <thead>
                  <tr className="border-b-2 border-primary/20">
                    <th className="text-left py-3 pr-6 font-semibold text-primary">Food product</th>
                    <th className="text-left py-3 pr-6 font-semibold text-primary">Pallet requirement</th>
                    <th className="text-left py-3 font-semibold text-primary">Buyer markets</th>
                  </tr>
                </thead>
                <tbody>
                  {foodExportUses.map(({ product, requirement, buyers }) => (
                    <tr key={product} className="border-b border-warm-gray">
                      <td className="py-3 pr-6 font-medium text-charcoal">{product}</td>
                      <td className="py-3 pr-6 text-charcoal/70">{requirement}</td>
                      <td className="py-3 text-charcoal/70">{buyers}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* HT vs MB context */}
      <section className="section-padding cream-texture">
        <div className="container-content">
          <FadeUp>
            <div className="max-w-2xl">
              <h2 className="font-display text-2xl font-semibold text-primary mb-6">
                Why heat treatment matters for food-grade pallets
              </h2>
              <p className="font-body text-sm text-charcoal/70 leading-relaxed mb-5">
                Wooden pallets destined for export are treated by one of two methods: heat treatment
                (HT) or methyl bromide fumigation (MB). For food shipments, only heat treatment is
                appropriate.
              </p>
              <p className="font-body text-sm text-charcoal/70 leading-relaxed mb-5">
                Methyl bromide is a toxic chemical gas that can leave residue on the wood. The EU
                has banned it, and Japan, USA, and most food-importing markets restrict or reject
                MB-treated pallets carrying food products. Heat treatment uses no chemicals at all —
                the pallet is simply raised to 56°C for at least 30 minutes to kill any pests.
              </p>
              <p className="font-body text-sm text-charcoal/70 leading-relaxed">
                CeyPall uses heat treatment exclusively. Read our full breakdown of{' '}
                <Link href="/blog/heat-treatment-vs-methyl-bromide-fumigation" className="text-accent hover:text-accent-hover underline underline-offset-2 transition-colors">
                  heat treatment vs methyl bromide fumigation
                </Link>
                {' '}for the technical detail.
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
              title="Food grade pallet FAQ."
            />
          </FadeUp>

          <FadeUp delay={0.1}>
            <div className="mt-10 max-w-2xl space-y-8">
              {faqs.map((faq) => (
                <div key={faq.question} className="border-b border-warm-gray pb-6">
                  <h3 className="font-display text-base font-semibold text-primary mb-3">
                    {faq.question}
                  </h3>
                  <p className="font-body text-sm text-charcoal/70 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Related pages */}
      <RelatedLinks
        links={[
          { href: '/heat-treated-pallets', title: 'Heat Treated Pallets', description: 'ISPM 15 heat treatment to 56°C — no chemicals, universally accepted.' },
          { href: '/pallets-for-tea-export', title: 'Pallets for Tea Export', description: 'Low-MC pallets sized for Ceylon tea chest shipments.' },
          { href: '/pallets-for-spice-export', title: 'Pallets for Spice Export', description: 'Bark-free, chemical-free pallets for cinnamon, pepper and cloves.' },
          { href: '/pallets-for-coconut-export', title: 'Pallets for Coconut Export', description: 'Heat-treated pallets for desiccated coconut, oil and milk exports.' },
        ]}
      />

      {/* CTA */}
      <section className="bg-accent py-16">
        <div className="container-content flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-display text-2xl text-white">Need food grade pallets for your next shipment?</h3>
            <p className="font-body text-sm text-white/80 mt-1">
              Chemical-free, low moisture, ISPM 15 certified. Delivered island-wide.
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
