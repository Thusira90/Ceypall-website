import { cn } from '@/lib/utils'

interface SectionHeaderProps {
  eyebrow?: string
  title: string
  subtitle?: string
  align?: 'left' | 'center'
  light?: boolean
  className?: string
  as?: 'h1' | 'h2'
}

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = 'left',
  light = false,
  className,
  as: Tag = 'h2',
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        'max-w-2xl',
        align === 'center' && 'mx-auto text-center',
        className,
      )}
    >
      {eyebrow && (
        <p
          className={cn(
            'font-body text-xs font-semibold tracking-[0.15em] uppercase mb-3',
            light ? 'text-accent-light' : 'text-accent',
          )}
        >
          {eyebrow}
        </p>
      )}
      <Tag
        className={cn(
          'font-display text-display-lg',
          light ? 'text-cream' : 'text-primary',
        )}
      >
        {title}
      </Tag>
      {align === 'left' && (
        <span
          className={cn(
            'block w-10 h-0.5 mt-4 mb-5',
            light ? 'bg-accent-light' : 'bg-accent',
          )}
        />
      )}
      {align === 'center' && (
        <span
          className={cn(
            'block w-10 h-0.5 mt-4 mb-5 mx-auto',
            light ? 'bg-accent-light' : 'bg-accent',
          )}
        />
      )}
      {subtitle && (
        <p
          className={cn(
            'font-body text-base leading-relaxed',
            light ? 'text-cream/80' : 'text-charcoal/70',
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}
