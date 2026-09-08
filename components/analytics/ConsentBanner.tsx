'use client'

import { useEffect, useState } from 'react'

const STORAGE_KEY = 'ceypall_consent'

export function ConsentBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY)
      if (!stored) setVisible(true)
    } catch {
      setVisible(true)
    }
  }, [])

  const decide = (choice: 'granted' | 'denied') => {
    try {
      localStorage.setItem(STORAGE_KEY, choice)
    } catch {}
    if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
      window.gtag('consent', 'update', {
        ad_storage: choice,
        ad_user_data: choice,
        ad_personalization: choice,
        analytics_storage: choice,
      } as never)
    }
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Cookie consent"
      className="fixed bottom-4 left-4 right-4 z-[60] sm:left-6 sm:right-auto sm:max-w-md bg-white border border-charcoal/10 shadow-xl p-5"
    >
      <p className="font-body text-sm text-charcoal leading-relaxed">
        We use cookies to measure site traffic and improve your experience. You can accept or
        decline analytics and advertising cookies.
      </p>
      <div className="mt-4 flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => decide('granted')}
          className="font-body text-sm font-semibold px-4 py-2 bg-primary text-white hover:bg-primary/90 transition-colors"
        >
          Accept
        </button>
        <button
          type="button"
          onClick={() => decide('denied')}
          className="font-body text-sm font-semibold px-4 py-2 border border-charcoal/20 text-charcoal hover:bg-charcoal/5 transition-colors"
        >
          Decline
        </button>
      </div>
    </div>
  )
}
