'use client'

import { usePathname } from 'next/navigation'

// Paid-ad landing pages run without the site nav and footer so the only
// actions on the page are the quote form, Call and WhatsApp.
export const LANDING_PATHS = ['/get-a-quote']

export function HideOnLanding({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  if (pathname && LANDING_PATHS.includes(pathname)) return null
  return <>{children}</>
}
