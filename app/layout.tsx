import type { Metadata } from 'next'
import { Playfair_Display, DM_Sans, Nunito } from 'next/font/google'
import './globals.css'
import { Nav } from '@/components/layout/Nav'
import { Footer } from '@/components/layout/Footer'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
})

const nunito = Nunito({
  subsets: ['latin'],
  variable: '--font-logo',
  display: 'swap',
  weight: ['900'],
})

export const metadata: Metadata = {
  metadataBase: new URL('https://ceypall.com'),
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
  title: {
    default: 'CeyPall (Pvt) Ltd — ISPM 15 Certified Wooden Pallets, Sri Lanka',
    template: '%s | CeyPall (Pvt) Ltd',
  },
  description:
    'CeyPall manufactures heat-treated, IPPC-stamped wooden pallets for export and storage. ISPM 15 certified. Custom sizes. Island-wide delivery across Sri Lanka.',
  keywords: [
    'wooden pallets Sri Lanka',
    'ISPM 15 pallets',
    'IPPC stamped pallets',
    'heat treated pallets',
    'export pallets Sri Lanka',
    'pallet manufacturer Sri Lanka',
    'boron treated pallets',
    'vacuum pressure impregnated pallets',
    'pallet manufacturer Kochchikade',
    'CeyPall',
  ],
  authors: [{ name: 'CeyPall (Pvt) Ltd', url: 'https://ceypall.com' }],
  creator: 'CeyPall (Pvt) Ltd',
  publisher: 'CeyPall (Pvt) Ltd',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    siteName: 'CeyPall (Pvt) Ltd',
    locale: 'en_LK',
    type: 'website',
    url: 'https://ceypall.com',
    title: 'CeyPall (Pvt) Ltd — ISPM 15 Certified Wooden Pallets, Sri Lanka',
    description:
      'CeyPall manufactures heat-treated, IPPC-stamped wooden pallets for export and storage. ISPM 15 certified. Custom sizes. Island-wide delivery across Sri Lanka.',
    images: [
      {
        url: '/hero.jpg',
        width: 1200,
        height: 630,
        alt: 'CeyPall — ISPM 15 certified wooden pallets, Sri Lanka',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CeyPall (Pvt) Ltd — ISPM 15 Certified Wooden Pallets, Sri Lanka',
    description:
      'Heat-treated, IPPC-stamped wooden pallets for Sri Lankan exporters. Custom sizes, island-wide delivery, ISPM 15 compliant.',
    images: ['/hero.jpg'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'LocalBusiness',
        '@id': 'https://www.ceypall.com/#business',
        name: 'CeyPall (Pvt) Ltd',
        description:
          "Sri Lanka's dedicated ISPM 15-certified wooden pallet manufacturer. Heat-treated, IPPC-stamped export pallets with island-wide delivery.",
        url: 'https://www.ceypall.com',
        logo: 'https://www.ceypall.com/logo.png',
        image: 'https://www.ceypall.com/hero.jpg',
        telephone: ['+94312277752', '+94714711417', '+94769494944'],
        email: 'office@ceypall.com',
        address: {
          '@type': 'PostalAddress',
          streetAddress: '1088, Colombo Road, Daluwakotuwa',
          addressLocality: 'Kochchikade',
          postalCode: '11540',
          addressCountry: 'LK',
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: 7.4167,
          longitude: 79.8667,
        },
        areaServed: { '@type': 'Country', name: 'Sri Lanka' },
        foundingDate: '2005',
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Wooden Pallets',
          itemListElement: [
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Product',
                name: 'Heat-Treated ISPM 15 Pallets',
                description:
                  'ISPM 15-compliant heat-treated wooden pallets with IPPC stamp and treatment certificate. Core heated to 56°C for 30 minutes minimum.',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Product',
                name: 'Vacuum Pressure Impregnated Pallets',
                description:
                  'Long-term warehouse pallets treated with Boron Borax under vacuum pressure. Up to 10 bar. 6-year warranty against pest contamination.',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Product',
                name: 'Custom Size Pallets',
                description:
                  'Custom wooden pallets manufactured to exact specifications with ISPM 15 heat treatment.',
              },
            },
          ],
        },
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'What is ISPM 15?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'ISPM 15 is a global standard that requires wooden pallets used in international trade to be heat-treated and stamped with the IPPC mark. Over 180 countries require it including the EU, USA, UK, and Australia.',
            },
          },
          {
            '@type': 'Question',
            name: 'Are CeyPall pallets accepted in the EU, USA, and Australia?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. CeyPall pallets are ISPM 15 compliant and IPPC-stamped, accepted in all major international markets including the EU, USA, UK, Australia, China, Japan, and the Middle East.',
            },
          },
          {
            '@type': 'Question',
            name: 'Do you provide a treatment certificate?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. Every CeyPall order includes an official heat treatment certificate confirming ISPM 15 compliance.',
            },
          },
          {
            '@type': 'Question',
            name: 'Can you manufacture custom pallet sizes?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. CeyPall manufactures all standard international dimensions and custom sizes to your exact specifications with full ISPM 15 heat treatment.',
            },
          },
          {
            '@type': 'Question',
            name: 'Where is CeyPall located?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'CeyPall (Pvt) Ltd is located at 1088, Colombo Road, Daluwakotuwa, Kochchikade, Sri Lanka 11540.',
            },
          },
        ],
      },
    ],
  }

  return (
    <html lang="en" className={`${playfair.variable} ${dmSans.variable} ${nunito.variable}`}>
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" sizes="any" />
        <link rel="shortcut icon" href="/favicon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <Nav />
        <main className="flex-1 pt-[72px]">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
