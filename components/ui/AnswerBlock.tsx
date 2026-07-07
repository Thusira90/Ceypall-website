import { FadeUp } from '@/components/ui/FadeUp'

interface AnswerBlockProps {
  /** The question this block answers, e.g. "What is ISPM 15?". Rendered as a small label. */
  question: string
  /** A self-contained 40–60 word direct answer, phrased so it stands alone when quoted. */
  children: React.ReactNode
}

/**
 * A short, self-contained direct answer to a specific question, styled as a
 * highlighted callout. Answer engines (AI Overviews, ChatGPT, Perplexity) and
 * featured snippets favour a clean, standalone answer placed high on the page.
 */
export function AnswerBlock({ question, children }: AnswerBlockProps) {
  return (
    <FadeUp>
      <div className="border-l-2 border-accent bg-primary/5 pl-6 pr-6 py-5 my-8 max-w-2xl">
        <p className="font-body text-xs font-semibold tracking-[0.12em] uppercase text-accent mb-2">
          {question}
        </p>
        <p className="font-body text-base text-charcoal/85 leading-relaxed">{children}</p>
      </div>
    </FadeUp>
  )
}
