import { cn } from '@/lib/utils'

interface LogoWordmarkProps {
  /** 'dark' = green+yellow on light bg (nav). 'light' = white+yellow on dark bg (footer). */
  variant?: 'dark' | 'light'
  className?: string
}

export function LogoWordmark({ variant = 'dark', className }: LogoWordmarkProps) {
  const stemColor = variant === 'dark' ? '#1C3A2B' : '#ffffff'
  const tailColor = variant === 'dark' ? '#F0C000' : '#ffffff'

  return (
    <span
      className={cn('font-logo font-black tracking-tight leading-none select-none', className)}
      aria-label="CeyPall"
    >
      <span style={{ color: stemColor }}>CeyP</span>
      <span style={{ color: tailColor }}>all</span>
    </span>
  )
}
