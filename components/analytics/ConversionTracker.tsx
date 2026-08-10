'use client'

import { useEffect } from 'react'
import { trackLead, CONVERSION_EVENTS } from '@/lib/analytics'

// A single delegated click listener that fires conversion events for every
// phone (tel:) and WhatsApp (wa.me) link on the site — no need to wire an
// onClick into each of the many links across pages and the footer.
export function ConversionTracker() {
  useEffect(() => {
    function onClick(e: MouseEvent) {
      const anchor = (e.target as HTMLElement | null)?.closest('a')
      if (!anchor) return
      const href = anchor.getAttribute('href') || ''

      if (href.startsWith('tel:')) {
        trackLead(CONVERSION_EVENTS.phoneClick, { link_url: href })
      } else if (href.includes('wa.me') || href.includes('api.whatsapp.com')) {
        trackLead(CONVERSION_EVENTS.whatsappClick, { link_url: href })
      }
    }

    document.addEventListener('click', onClick)
    return () => document.removeEventListener('click', onClick)
  }, [])

  return null
}
