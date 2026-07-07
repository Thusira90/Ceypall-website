import { FadeUp } from '@/components/ui/FadeUp'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { SchemaScript } from '@/components/ui/SchemaScript'

export interface FaqItem {
  question: string
  answer: string
}

interface FaqSectionProps {
  faqs: FaqItem[]
  eyebrow?: string
  title?: string
  /** Extra classes for the wrapping <section> (e.g. background utility). */
  className?: string
}

/**
 * Renders an on-page FAQ block AND emits matching FAQPage JSON-LD, so the
 * questions/answers are both human-readable and machine-extractable by search
 * engines and AI answer engines. Keep the visible copy and the schema in sync
 * by driving both from the same `faqs` array.
 */
export function FaqSection({
  faqs,
  eyebrow = 'Common questions',
  title = 'Frequently asked questions.',
  className = 'section-padding bg-warm-gray/40',
}: FaqSectionProps) {
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.answer,
      },
    })),
  }

  return (
    <section className={className}>
      <SchemaScript schema={faqJsonLd} />
      <div className="container-content">
        <FadeUp>
          <SectionHeader eyebrow={eyebrow} title={title} />
        </FadeUp>

        <FadeUp delay={0.1}>
          <div className="mt-10 max-w-2xl space-y-8">
            {faqs.map((f) => (
              <div key={f.question} className="border-b border-warm-gray pb-6">
                <h3 className="font-display text-base font-semibold text-primary mb-3">
                  {f.question}
                </h3>
                <p className="font-body text-sm text-charcoal/70 leading-relaxed">{f.answer}</p>
              </div>
            ))}
          </div>
        </FadeUp>
      </div>
    </section>
  )
}
