import type { Metadata } from 'next'
import { Hero } from '@/components/home/Hero'
import { TrustBar } from '@/components/home/TrustBar'
import { WhyCeyPall } from '@/components/home/WhyCeyPall'
import { ProductsOverview } from '@/components/home/ProductsOverview'
import { ClientsStrip } from '@/components/home/ClientsStrip'
import { QuoteCTA } from '@/components/home/QuoteCTA'
import { SchemaScript } from '@/components/ui/SchemaScript'

export const metadata: Metadata = {
  title: {
    absolute: 'CeyPall (Pvt) Ltd — ISPM 15 Certified Wooden Pallets | Sri Lanka',
  },
  description:
    'Heat-treated, IPPC-stamped wooden pallets for Sri Lankan exporters. Custom sizes, island-wide delivery, ISPM 15 compliant. CeyPall (Pvt) Ltd.',
  openGraph: {
    url: '/',
  },
}

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': 'https://www.ceypall.com/#organization',
  name: 'CeyPall (Pvt) Ltd',
  url: 'https://www.ceypall.com',
  description:
    "Sri Lanka's dedicated ISPM 15-certified wooden pallet manufacturer. IPPC-stamped heat treated pallets for export, supplying island-wide.",
  telephone: '+94714711417',
  email: 'office@ceypall.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '1088 Colombo Road',
    addressLocality: 'Kochchikade',
    addressRegion: 'Western Province',
    postalCode: '11540',
    addressCountry: 'LK',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 7.2533,
    longitude: 79.8518,
  },
  foundingDate: '2005',
  areaServed: {
    '@type': 'Country',
    name: 'Sri Lanka',
  },
  sameAs: [
    'https://www.facebook.com/profile.php?id=61587265021762',
    'https://www.instagram.com/ceypall/',
    'https://www.linkedin.com/company/ceypall-pvt-ltd/',
  ],
}

const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://www.ceypall.com/#local-business',
  name: 'CeyPall (Pvt) Ltd',
  description:
    "Sri Lanka's dedicated export pallet manufacturer. ISPM 15 certified, IPPC-stamped heat treated wooden pallets for exporters island-wide.",
  url: 'https://www.ceypall.com',
  telephone: '+94714711417',
  email: 'office@ceypall.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '1088 Colombo Road',
    addressLocality: 'Kochchikade',
    addressRegion: 'Western Province',
    postalCode: '11540',
    addressCountry: 'LK',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 7.2533,
    longitude: 79.8518,
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    opens: '08:30',
    closes: '17:30',
  },
  hasMap: 'https://maps.google.com/?q=1088+Colombo+Road+Kochchikade+Sri+Lanka',
  sameAs: [
    'https://www.facebook.com/profile.php?id=61587265021762',
    'https://www.instagram.com/ceypall/',
    'https://www.linkedin.com/company/ceypall-pvt-ltd/',
  ],
}

const webSiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': 'https://www.ceypall.com/#website',
  name: 'CeyPall (Pvt) Ltd',
  url: 'https://www.ceypall.com',
  description: "Sri Lanka's dedicated ISPM 15-certified wooden pallet manufacturer.",
  publisher: {
    '@id': 'https://www.ceypall.com/#organization',
  },
}

export default function HomePage() {
  return (
    <>
      {/* ── JSON-LD ─────────────────────────────────────────────────────── */}
      <SchemaScript schema={organizationJsonLd} />
      <SchemaScript schema={localBusinessJsonLd} />
      <SchemaScript schema={webSiteJsonLd} />

      <Hero />
      <TrustBar />
      <WhyCeyPall />
      <ProductsOverview />
      <ClientsStrip />
      <QuoteCTA />
    </>
  )
}
