import type { Metadata } from 'next'
import Link from 'next/link'
import { getAllBlogPosts } from '@/lib/blog'
import { FadeUp } from '@/components/ui/FadeUp'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { SchemaScript } from '@/components/ui/SchemaScript'
import { Button } from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'Knowledge Centre — Export Pallet Guides, Tools & Resources',
  description:
    'Free guides, calculators, and resources for Sri Lankan exporters. Learn about ISPM 15 compliance, pallet sizes, container loading, heat treatment, and export packaging regulations.',
  alternates: {
    canonical: 'https://www.ceypall.com/knowledge-centre',
  },
  openGraph: {
    title: 'Knowledge Centre — Export Pallet Guides, Tools & Resources | CeyPall',
    description:
      'Free guides, calculators, and resources for Sri Lankan exporters. ISPM 15 compliance, pallet sizes, container loading, and more.',
    url: 'https://www.ceypall.com/knowledge-centre',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Knowledge Centre — Export Pallet Guides, Tools & Resources | CeyPall',
    description:
      'Free guides, calculators, and resources for Sri Lankan exporters. ISPM 15 compliance, pallet sizes, container loading, and more.',
  },
}

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.ceypall.com/' },
    { '@type': 'ListItem', position: 2, name: 'Knowledge Centre', item: 'https://www.ceypall.com/knowledge-centre' },
  ],
}

const collectionJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'CeyPall Knowledge Centre',
  description:
    'Comprehensive resource library for Sri Lankan exporters — guides on ISPM 15, pallet sizes, container loading, heat treatment, and export compliance.',
  url: 'https://www.ceypall.com/knowledge-centre',
  publisher: {
    '@type': 'Organization',
    name: 'CeyPall (Pvt) Ltd',
    url: 'https://www.ceypall.com',
  },
}

const tools = [
  {
    title: 'Container Pallet Calculator',
    description: 'Calculate how many pallets fit in a 20ft, 40ft, or 40ft HC container. Get a visual floor plan instantly.',
    href: '/container-pallet-calculator',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M3 9h18M9 3v18" stroke="currentColor" strokeWidth="1.5" />
        <path d="M13 13h4M13 17h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
]

const guideClusters = [
  {
    title: 'ISPM 15 & Compliance',
    description: 'Everything exporters need to know about ISPM 15 certification, IPPC stamps, and phytosanitary compliance.',
    slugs: [
      'what-is-ispm-15',
      'why-sri-lankan-exporters-need-ippc-certified-pallets',
      'how-to-read-ippc-stamp',
      'sri-lanka-export-packaging-regulations-2026',
      'why-shipments-get-rejected-customs-pallet-issues',
    ],
  },
  {
    title: 'Pallet Types & Treatment',
    description: 'Compare treatment methods, wood species, and pallet types to choose the right option for your cargo.',
    slugs: [
      'heat-treatment-vs-methyl-bromide-fumigation',
      'vacuum-pressure-impregnated-vs-heat-treated-pallets',
    ],
  },
  {
    title: 'Container Loading & Sizes',
    description: 'Optimise your container space with the right pallet dimensions and loading patterns.',
    slugs: [
      'standard-pallet-sizes-sri-lanka',
      'how-many-pallets-fit-in-a-container',
    ],
  },
  {
    title: 'Industry & Market Guides',
    description: 'Sector-specific pallet guidance for tea, apparel, and EU-bound exports.',
    slugs: [
      'wooden-pallets-for-tea-export-sri-lanka',
      'pallet-requirements-exporting-to-eu-from-sri-lanka',
    ],
  },
  {
    title: 'Choosing a Supplier',
    description: 'What to look for in a pallet supplier — certifications, documentation, and red flags.',
    slugs: [
      'how-to-choose-pallet-supplier-sri-lanka',
    ],
  },
]

export default function KnowledgeCentrePage() {
  const allPosts = getAllBlogPosts()
  const postMap = new Map(allPosts.map((p) => [p.slug, p]))

  return (
    <>
      <SchemaScript schema={breadcrumbJsonLd} />
      <SchemaScript schema={collectionJsonLd} />

      {/* Hero */}
      <section className="wood-texture section-padding">
        <div className="container-content">
          <FadeUp>
            <SectionHeader
              as="h1"
              eyebrow="Knowledge centre"
              title="Export Pallet Guides, Tools & Resources"
              subtitle="Everything Sri Lankan exporters need to know about wooden pallets — from ISPM 15 compliance to container loading optimisation. Free guides and interactive tools."
              light
            />
          </FadeUp>
        </div>
      </section>

      {/* Interactive Tools */}
      <section className="section-padding cream-texture">
        <div className="container-content">
          <FadeUp>
            <SectionHeader
              eyebrow="Interactive tools"
              title="Calculators & Planning Tools"
              subtitle="Free tools to help you plan shipments, choose pallet sizes, and optimise container space."
            />
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {tools.map((tool) => (
              <FadeUp key={tool.href}>
                <Link
                  href={tool.href}
                  className="group block bg-white border border-warm-gray hover:border-accent p-6 transition-all duration-200 hover:shadow-sm"
                >
                  <div className="w-12 h-12 bg-primary/8 flex items-center justify-center text-primary group-hover:bg-accent/10 group-hover:text-accent transition-colors duration-200 mb-4">
                    {tool.icon}
                  </div>
                  <h3 className="font-display text-lg text-primary group-hover:text-accent transition-colors duration-200">
                    {tool.title}
                  </h3>
                  <p className="font-body text-sm text-charcoal/60 mt-2 leading-relaxed">
                    {tool.description}
                  </p>
                  <span className="inline-flex items-center gap-1 font-body text-sm font-medium text-accent mt-4">
                    Use tool
                    <svg className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" viewBox="0 0 14 14" fill="none">
                      <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </Link>
              </FadeUp>
            ))}

            {/* Coming soon placeholder */}
            <FadeUp>
              <div className="block bg-warm-gray/30 border border-warm-gray/60 border-dashed p-6">
                <div className="w-12 h-12 bg-warm-gray/40 flex items-center justify-center text-charcoal/30 mb-4">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
                    <path d="M12 7v5l3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </div>
                <h3 className="font-display text-lg text-charcoal/40">
                  More Tools Coming Soon
                </h3>
                <p className="font-body text-sm text-charcoal/30 mt-2 leading-relaxed">
                  Moisture content calculator, pallet size selector, and more.
                </p>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Guides by Topic */}
      <section className="section-padding bg-white">
        <div className="container-content">
          <FadeUp>
            <SectionHeader
              eyebrow="Technical guides"
              title="Guides by Topic"
              subtitle="In-depth articles organised by subject. Whether you need to understand ISPM 15 compliance or choose the right pallet size, start here."
            />
          </FadeUp>

          <div className="space-y-12 mt-10">
            {guideClusters.map((cluster) => {
              const posts = cluster.slugs
                .map((slug) => postMap.get(slug))
                .filter(Boolean)

              if (posts.length === 0) return null

              return (
                <FadeUp key={cluster.title}>
                  <div className="border-b border-warm-gray pb-10 last:border-0">
                    <h3 className="font-display text-xl text-primary mb-1">
                      {cluster.title}
                    </h3>
                    <p className="font-body text-sm text-charcoal/60 mb-5">
                      {cluster.description}
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {posts.map((post) => post && (
                        <Link
                          key={post.slug}
                          href={`/blog/${post.slug}`}
                          className="group flex items-start gap-3 p-4 bg-cream/60 hover:bg-cream border border-transparent hover:border-warm-gray transition-all duration-200"
                        >
                          <svg className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" viewBox="0 0 16 16" fill="none">
                            <path d="M4 2h8a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V4a2 2 0 012-2z" stroke="currentColor" strokeWidth="1.2" />
                            <path d="M5 6h6M5 9h4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                          </svg>
                          <div>
                            <span className="font-body text-sm font-medium text-primary group-hover:text-accent transition-colors duration-150">
                              {post.title}
                            </span>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </FadeUp>
              )
            })}
          </div>

          <FadeUp>
            <div className="mt-10">
              <Button href="/blog" variant="outline" size="md">
                View all guides →
              </Button>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Case Studies */}
      <section className="section-padding cream-texture">
        <div className="container-content">
          <FadeUp>
            <SectionHeader
              eyebrow="Case studies"
              title="Real Results From Real Exporters"
              subtitle="See how Sri Lankan exporters solved pallet compliance challenges, reduced shipment rejections, and optimised their supply chain with CeyPall."
            />
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            {[
              { title: 'Eliminating Shipment Rejections', industry: 'Apparel & Garments', location: 'Katunayake FTZ', result: '0 rejections in 18 months' },
              { title: 'Reliable Pallet Supply', industry: 'Tea Export', location: 'Nuwara Eliya', result: '98% on-time delivery' },
              { title: 'Scaling Pallet Supply', industry: 'Food Manufacturing', location: 'Biyagama EPZ', result: '600+ pallets/month' },
            ].map((study) => (
              <FadeUp key={study.title}>
                <div className="bg-white border border-warm-gray p-6">
                  <p className="font-body text-xs font-semibold tracking-[0.12em] uppercase text-accent mb-2">
                    {study.industry}
                  </p>
                  <h3 className="font-display text-lg text-primary mb-1">{study.title}</h3>
                  <p className="font-body text-xs text-charcoal/50 mb-4">{study.location}</p>
                  <p className="font-display text-xl text-accent">{study.result}</p>
                </div>
              </FadeUp>
            ))}
          </div>

          <FadeUp>
            <div className="mt-8">
              <Button href="/case-studies" variant="outline" size="md">
                Read all case studies →
              </Button>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-accent">
        <div className="container-content flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-display text-2xl text-white">Need pallets for your next shipment?</h3>
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
