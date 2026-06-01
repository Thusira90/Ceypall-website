import { getBlogPost, getAllBlogPosts } from '@/lib/blog'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import type { Metadata } from 'next'
import { FadeUp } from '@/components/ui/FadeUp'

interface Props {
  params: { slug: string }
}

export async function generateStaticParams() {
  const posts = getAllBlogPosts()
  return posts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getBlogPost(params.slug)
  if (!post) return {}
  return {
    title: `${post.title}`,
    description: post.description,
  }
}

export default function BlogPostPage({ params }: Props) {
  const post = getBlogPost(params.slug)
  if (!post) notFound()

  const paragraphs = post.content
    .trim()
    .split('\n')
    .filter((line) => line.trim() !== '')

  return (
    <>
      {/* Header */}
      <section className="wood-texture section-padding">
        <div className="container-content">
          <FadeUp>
            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 font-body text-xs font-semibold tracking-[0.12em] uppercase text-cream/60 hover:text-accent transition-colors duration-150 mb-8"
            >
              <svg className="w-3 h-3" viewBox="0 0 12 12" fill="none">
                <path d="M10 6H2M5 2L1 6l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Back to blog
            </Link>
            <p className="font-body text-xs font-semibold tracking-[0.15em] uppercase text-accent mb-4">
              {new Date(post.date).toLocaleDateString('en-LK', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </p>
            <h1 className="font-display text-display-lg text-cream font-semibold leading-tight max-w-3xl">
              {post.title}
            </h1>
          </FadeUp>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding cream-texture">
        <div className="container-content">
          <FadeUp>
            <div className="max-w-2xl">
              {paragraphs.map((line, i) => {
                if (line.startsWith('### ')) {
                  return (
                    <h3 key={i} className="font-display text-lg font-semibold text-primary mt-10 mb-3">
                      {line.replace('### ', '')}
                    </h3>
                  )
                }
                if (line.startsWith('## ')) {
                  return (
                    <h2 key={i} className="font-display text-2xl font-semibold text-primary mt-12 mb-4 pt-4 border-t border-warm-gray">
                      {line.replace('## ', '')}
                    </h2>
                  )
                }
                if (line.startsWith('- ')) {
                  return (
                    <li key={i} className="flex items-start gap-3 mb-2">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full flex-shrink-0 mt-2" />
                      <span className="font-body text-sm text-charcoal/70 leading-relaxed">
                        {line.replace('- ', '')}
                      </span>
                    </li>
                  )
                }
                return (
                  <p key={i} className="font-body text-sm text-charcoal/70 leading-relaxed mb-5">
                    {line.replace(/\*\*(.*?)\*\*/g, '$1')}
                  </p>
                )
              })}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-accent py-16">
        <div className="container-content flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-display text-2xl text-white">Need ISPM 15-certified pallets?</h3>
            <p className="font-body text-sm text-white/80 mt-1">
              Certified, IPPC-stamped, and delivered island-wide across Sri Lanka.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 border-2 border-white text-white hover:bg-white hover:text-accent font-body font-semibold text-sm px-6 py-3 transition-colors duration-200 flex-shrink-0"
          >
            Request a quote →
          </Link>
        </div>
      </section>
    </>
  )
}
