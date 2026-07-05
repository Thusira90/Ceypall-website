// Lightweight conversion tracking. Fires GA4 events through the gtag
// instance set up in app/layout.tsx (G-Z1LQXV56LN). Mark these events as
// "key events" in GA4 and import them into Google Ads to count them as
// conversions — no per-event Ads conversion labels needed in code.

type GtagParams = Record<string, unknown>

declare global {
  interface Window {
    gtag?: (command: string, action: string, params?: GtagParams) => void
    dataLayer?: unknown[]
  }
}

/**
 * Send a GA4 event. No-ops safely during SSR or before gtag has loaded
 * (falls back to a dataLayer push so nothing is lost).
 */
export function trackConversion(action: string, params: GtagParams = {}): void {
  if (typeof window === 'undefined') return
  if (typeof window.gtag === 'function') {
    window.gtag('event', action, params)
  } else {
    window.dataLayer = window.dataLayer || []
    window.dataLayer.push({ event: action, ...params })
  }
}

// Event names — kept stable so GA4 key-event config doesn't break.
export const CONVERSION_EVENTS = {
  whatsappClick: 'contact_whatsapp',
  phoneClick: 'contact_phone',
  formSubmit: 'generate_lead',
} as const
