'use client'

import { useEffect } from 'react'
import { trackConversion, CONVERSION_EVENTS } from '@/lib/analytics'

// A single delegated click listener that fires conversion events for every
// phone (tel:), email (mailto:), WhatsApp (wa.me) and off-site link on the
// site — no need to wire an onClick into each of the many links across
// pages and the footer.
export function ConversionTracker() {
  useEffect(() => {
    function onClick(e: MouseEvent) {
      const anchor = (e.target as HTMLElement | null)?.closest('a')
      if (!anchor) return
      const href = anchor.getAttribute('href') || ''

      if (href.startsWith('tel:')) {
        trackConversion(CONVERSION_EVENTS.phoneClick, { link_url: href })
        return
      }
      if (href.startsWith('mailto:')) {
        trackConversion(CONVERSION_EVENTS.emailClick, { link_url: href })
        return
      }
      if (href.includes('wa.me') || href.includes('api.whatsapp.com')) {
        trackConversion(CONVERSION_EVENTS.whatsappClick, { link_url: href })
        return
      }
      // Outbound: any absolute link that isn't ours (facebook, instagram,
      // linkedin, chatgpt.com referrers we send back, etc.).
      if (/^https?:\/\//i.test(href) && !href.includes('ceypall.com')) {
        try {
          const host = new URL(href).hostname
          trackConversion(CONVERSION_EVENTS.outboundClick, { link_url: href, destination: host })
        } catch {
          // Malformed href — ignore silently, the click still works.
        }
      }
    }

    document.addEventListener('click', onClick)
    return () => document.removeEventListener('click', onClick)
  }, [])

  return null
}
