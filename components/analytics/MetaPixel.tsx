'use client'

import Script from 'next/script'
import { useEffect, useState } from 'react'

// Meta Pixel base code. Loads only on the canonical production host so
// preview deployments and local dev don't pollute the Pixel data (same
// pattern as Analytics.tsx for GA4). No-ops entirely when
// NEXT_PUBLIC_META_PIXEL_ID is unset, so nothing breaks before the ID is
// configured in Vercel.
const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID
const PRODUCTION_HOST = 'www.ceypall.com'

export function MetaPixel() {
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    if (!META_PIXEL_ID) return
    const isProd =
      process.env.NEXT_PUBLIC_VERCEL_ENV === 'production' &&
      window.location.hostname === PRODUCTION_HOST
    if (isProd) setEnabled(true)
  }, [])

  if (!enabled || !META_PIXEL_ID) return null

  return (
    <>
      <Script id="meta-pixel" strategy="afterInteractive">
        {`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '${META_PIXEL_ID}');
          fbq('track', 'PageView');
        `}
      </Script>
      <noscript>
        {/* Meta Pixel noscript beacon: needs a raw 1x1 tracking pixel, not next/image. */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          height="1"
          width="1"
          style={{ display: 'none' }}
          alt=""
          src={`https://www.facebook.com/tr?id=${META_PIXEL_ID}&ev=PageView&noscript=1`}
        />
      </noscript>
    </>
  )
}
