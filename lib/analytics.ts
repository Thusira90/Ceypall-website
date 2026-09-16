// Lightweight conversion tracking. Fires GA4 events through the gtag
// instance set up in components/analytics/Analytics.tsx and Meta Pixel
// events through the fbq instance set up in
// components/analytics/MetaPixel.tsx. Mark the GA4 events as "key events"
// in GA4 and import them into Google Ads to count them as conversions —
// no per-event Ads conversion labels needed in code.

type EventParams = Record<string, unknown>

declare global {
  interface Window {
    gtag?: (command: string, action: string, params?: EventParams) => void
    fbq?: (command: string, event: string, params?: EventParams) => void
    dataLayer?: unknown[]
  }
}

/**
 * Send a GA4 event. No-ops safely during SSR or before gtag has loaded
 * (falls back to a dataLayer push so nothing is lost).
 */
export function trackConversion(action: string, params: EventParams = {}): void {
  if (typeof window === 'undefined') return
  if (typeof window.gtag === 'function') {
    window.gtag('event', action, params)
  } else {
    window.dataLayer = window.dataLayer || []
    window.dataLayer.push({ event: action, ...params })
  }
}

/**
 * Send a Meta Pixel event via fbq. No-ops when the Pixel isn't loaded
 * (dev, previews, or before NEXT_PUBLIC_META_PIXEL_ID is configured).
 */
export function trackMetaEvent(event: string, params: EventParams = {}): void {
  if (typeof window === 'undefined') return
  if (typeof window.fbq === 'function') {
    window.fbq('track', event, params)
  }
}

// GA4 event names — kept stable so GA4 key-event config doesn't break.
// Aligned with the pre-launch tracking spec so all three key events read
// clearly in GA4 and can be imported into Google Ads as conversions.
export const CONVERSION_EVENTS = {
  whatsappClick: 'whatsapp_click',
  phoneClick: 'phone_click',
  emailClick: 'email_click',
  formSubmit: 'quote_form_submit',
  outboundClick: 'outbound_click',
} as const
