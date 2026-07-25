'use client'

import Script from 'next/script'
import { useEffect, useState } from 'react'

// GA4 + Google Ads tags. Loaded ONLY on the canonical production host.
//
// Why not gate on NODE_ENV: on Vercel, preview deployments also build with
// NODE_ENV === 'production', so a NODE_ENV gate lets the production GA tag fire
// on every preview URL — polluting the property with vercel.app referral and
// short-session "Direct" traffic. Gate on the Vercel environment variable and
// the live hostname instead. Set NEXT_PUBLIC_VERCEL_ENV in the Vercel project
// (production scope = "production") so it is inlined into the client bundle.
const GA_MEASUREMENT_ID = 'G-Z1LQXV56LN'
const GOOGLE_ADS_ID = 'AW-18176480799'
const PRODUCTION_HOST = 'www.ceypall.com'

export function Analytics() {
  // Start false so SSR and first client render agree (no hydration mismatch),
  // then enable after mount once we can read the real hostname.
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    const isProd =
      process.env.NEXT_PUBLIC_VERCEL_ENV === 'production' &&
      window.location.hostname === PRODUCTION_HOST
    if (isProd) setEnabled(true)
  }, [])

  if (!enabled) return null

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics-tag" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}');
          gtag('config', '${GOOGLE_ADS_ID}');
        `}
      </Script>
    </>
  )
}
