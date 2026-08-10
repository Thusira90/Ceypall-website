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

// Assumed average value per lead in LKR (avg order × close rate). Fed into
// GA4 as `value`/`currency` on key events so channel ROI is measurable
// (was Rs 0 across the board before). Update the constant to re-value all
// historical lead-shaped events going forward.
export const LEAD_VALUE_LKR = 25000
export const LEAD_CURRENCY = 'LKR'

/**
 * Fire a lead-shaped conversion (WhatsApp, phone or form). Adds
 * value/currency so GA4 reports non-zero revenue against the traffic
 * source that produced the lead.
 */
export function trackLead(action: string, params: GtagParams = {}): void {
  trackConversion(action, {
    value: LEAD_VALUE_LKR,
    currency: LEAD_CURRENCY,
    ...params,
  })
}
