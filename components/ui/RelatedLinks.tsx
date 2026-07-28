import Link from 'next/link'
import { FadeUp } from '@/components/ui/FadeUp'
import { SectionHeader } from '@/components/ui/SectionHeader'

export interface RelatedLink {
  href: string
  title: string
  description: string
}

interface RelatedLinksProps {
  links: RelatedLink[]
  eyebrow?: string
  title?: string
  /** Extra classes for the wrapping <section> (e.g. background utility). */
  className?: string
}

/**
 * A curated grid of contextual links to related pages. Placed near the foot of
 * a page (before the CTA), it tightens topic clusters — helping both readers and
 * crawlers move between related pages — and spreads internal link equity across
 * the product, industry, and location pages that make up each cluster.
 */
export function RelatedLinks({
  links,
  eyebrow = 'Keep exploring',
  title = 'Related pages',
  className = 'section-padding bg-warm-gray/40',
}: RelatedLinksProps) {
  if (!links.length) return null

  return (
    <section className={className}>
      <div className="container-content">
        <FadeUp>
          <SectionHeader eyebrow={eyebrow} title={title} />
        </FadeUp>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
          {links.map((l) => (
            <FadeUp key={l.href}>
              <Link
                href={l.href}
                className="group block h-full bg-cream/60 border border-warm-gray hover:border-accent p-6 transition-all duration-200 hover:shadow-sm"
              >
                <h3 className="font-display text-base font-semibold text-primary group-hover:text-accent transition-colors duration-200">
                  {l.title}
                </h3>
                <p className="font-body text-sm text-charcoal/60 mt-2 leading-relaxed">
                  {l.description}
                </p>
                <span className="inline-flex items-center gap-1 font-body text-sm font-medium text-accent mt-4">
                  Read more
                  <svg className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" viewBox="0 0 14 14" fill="none">
                    <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </Link>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  )
}
