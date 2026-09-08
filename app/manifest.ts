import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'CeyPall (Pvt) Ltd — ISPM 15 Certified Wooden Pallets',
    short_name: 'CeyPall',
    description:
      "Sri Lanka's dedicated ISPM 15-certified wooden pallet manufacturer. Heat-treated, IPPC-stamped export pallets and VPI storage pallets, island-wide delivery.",
    start_url: '/',
    scope: '/',
    display: 'browser',
    background_color: '#ffffff',
    theme_color: '#1a3a2a',
    lang: 'en-LK',
    icons: [
      { src: '/favicon.png', sizes: '250x250', type: 'image/png', purpose: 'any' },
      { src: '/logo.png', sizes: '809x500', type: 'image/png', purpose: 'any' },
    ],
  }
}
