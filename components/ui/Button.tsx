import Link from 'next/link'
import { cn } from '@/lib/utils'

type Variant = 'primary' | 'outline' | 'outline-light'
type Size = 'sm' | 'md' | 'lg'

interface ButtonProps {
  variant?: Variant
  size?: Size
  href?: string
  children: React.ReactNode
  className?: string
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  onClick?: () => void
}

const variantClasses: Record<Variant, string> = {
  primary:
    'bg-accent hover:bg-accent-hover text-white border-2 border-accent hover:border-accent-hover',
  outline:
    'bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-cream',
  'outline-light':
    'bg-transparent border-2 border-cream text-cream hover:bg-cream hover:text-primary',
}

const sizeClasses: Record<Size, string> = {
  sm: 'px-4 py-2 text-xs',
  md: 'px-6 py-3 text-sm',
  lg: 'px-8 py-4 text-base',
}

export function Button({
  variant = 'primary',
  size = 'md',
  href,
  children,
  className,
  type = 'button',
  disabled,
  onClick,
}: ButtonProps) {
  const classes = cn(
    'inline-flex items-center gap-2 font-body font-semibold tracking-wide transition-colors duration-200 cursor-pointer',
    variantClasses[variant],
    sizeClasses[size],
    disabled && 'opacity-50 cursor-not-allowed',
    className,
  )

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    )
  }

  return (
    <button type={type} className={classes} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  )
}
