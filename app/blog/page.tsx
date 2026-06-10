import type { Metadata } from 'next'
import Link from 'next/link'
import { getAllBlogPosts } from '@/lib/blog'
import { FadeUp } from '@/components/ui/FadeUp'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { SchemaScript } from '@/components/ui/SchemaScript'

export const metadata: Metadata = {
  title: 'Blog — ISPM 15 & Export Pallet Guides',
  description:
    'Expert guides on ISPM 15, wooden pallets, and export packaging for Sri Lankan exporters and manufacturers.',
  openGraph: {
    url: '/blog',
  },
}

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.ceypall.com/' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.ceypall.com/blog' },
  ],
}

export default function BlogPage() {
  const posts = getAllBlogPosts()

  return (
    <>
      {/* ── JSON-LD ─────────────────────────────────────────────────────── */}
      <SchemaScript schema={breadcrumbJsonLd} />

      {/* Header */}
      <section className="wood-texture section-padding">
        <div className="container-content">
          <FadeUp>
            <SectionHeader
              eyebrow="From the blog"
              title="Guides & insights."
              subtitle="Expert articles on ISPM 15, wooden pallets, and export packaging for Sri Lankan exporters."
              light
            />
          </FadeUp>
        </div>
      </section>

      {/* Posts */}
      <section className="section-padding cream-texture">
        <div className="container-content">
          <div className="max-w-3xl space-y-0">
            {posts.map((post, index) => (
              <FadeUp key={post.slug} delay={index * 0.08}>
                <article className="py-10 border-b border-warm-gray last:border-0">
                  <p className="font-body text-xs font-semibold tracking-[0.12em] uppercase text-accent mb-3">
                    {new Date(post.date).toLocaleDateString('en-LK', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </p>
                  <h2 className="font-display text-2xl font-semibold text-primary mb-3 leading-snug">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="hover:text-accent transition-colors duration-150"
                    >
                      {post.title}
                    </Link>
                  </h2>
                  <p className="font-body text-sm text-charcoal/70 leading-relaxed mb-5">
                    {post.description}
                  </p>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-1.5 font-body text-sm font-semibold text-accent hover:text-accent-hover transition-colors duration-150"
                  >
                    Read article
                    <svg className="w-3.5 h-3.5" viewBox="0 0 14 14" fill="none">
                      <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </Link>
                </article>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-20">
        <div className="container-content">
          <FadeUp>
            <div className="max-w-2xl">
              <p className="font-body text-xs font-semibold tracking-[0.15em] uppercase text-accent mb-4">
                Need certified pallets?
              </p>
              <p className="font-display text-3xl font-semibold text-cream mb-6 leading-snug">
                Ready to order ISPM 15-certified pallets?
              </p>
              <p className="font-body text-sm text-cream/70 leading-relaxed mb-8">
                CeyPall manufactures heat-treated, IPPC-stamped export pallets with island-wide
                delivery across Sri Lanka.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-white font-body font-semibold text-sm px-6 py-3 transition-colors duration-200"
              >
                Get a quote →
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>
    </>
  )
}
