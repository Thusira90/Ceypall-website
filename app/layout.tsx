import type { Metadata } from 'next'
import { Playfair_Display, DM_Sans, Nunito } from 'next/font/google'
import Script from 'next/script'
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
                description: 'ISPM 15-compliant heat-treated wooden pallets with IPPC stamp and treatment certificate.',
                offers: { '@type': 'Offer', priceCurrency: 'LKR', price: '0', availability: 'https://schema.org/InStock', url: 'https://www.ceypall.com/products', seller: { '@type': 'Organization', name: 'CeyPall (Pvt) Ltd' } },
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Product',
                name: 'Vacuum Pressure Impregnated Pallets',
                description: 'Long-term warehouse pallets treated with Boron Borax under vacuum pressure. Up to 10 bar. 6-year warranty against pest contamination.',
                offers: { '@type': 'Offer', priceCurrency: 'LKR', price: '0', availability: 'https://schema.org/InStock', url: 'https://www.ceypall.com/products', seller: { '@type': 'Organization', name: 'CeyPall (Pvt) Ltd' } },
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Product',
                name: 'Custom Size Pallets',
                description: 'Custom wooden pallets manufactured to exact specifications with ISPM 15 heat treatment.',
                offers: { '@type': 'Offer', priceCurrency: 'LKR', price: '0', availability: 'https://schema.org/InStock', url: 'https://www.ceypall.com/products', seller: { '@type': 'Organization', name: 'CeyPall (Pvt) Ltd' } },
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
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-18176480799"
          strategy="afterInteractive"
        />
        <Script id="google-ads-tag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-18176480799');
          `}
        </Script>
        <Nav />
        <main className="flex-1 pt-[72px]">{children}</main>
        <Footer />
        
          href="https://wa.me/94714711417?text=Hi%20CeyPall%2C%20I%20need%20a%20pallet%20quote.%20What%20information%20do%20you%20need%20from%20me%3F"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-[#25D366] hover:bg-[#20BA5A] text-white text-sm font-semibold px-4 py-3 shadow-lg transition-all duration-200 hover:scale-105"
          style={{ borderRadius: '50px' }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 flex-shrink-0">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
            <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.112 1.526 5.836L.057 23.215a.75.75 0 00.916.927l5.596-1.451A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.71 9.71 0 01-4.953-1.355l-.355-.211-3.655.948.977-3.533-.232-.366A9.712 9.712 0 012.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z"/>
          </svg>
          Chat with us
        </a>
      </body>
    </html>
  )
}
