import type { Metadata } from 'next'
import { Hero } from '@/components/home/Hero'
import { TrustBar } from '@/components/home/TrustBar'
import { WhyCeyPall } from '@/components/home/WhyCeyPall'
import { ProductsOverview } from '@/components/home/ProductsOverview'
import { ClientsStrip } from '@/components/home/ClientsStrip'
import { QuoteCTA } from '@/components/home/QuoteCTA'
import { SchemaScript } from '@/components/ui/SchemaScript'

const speakableJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'ISPM 15 Wooden Pallet Manufacturer Sri Lanka | CeyPall',
  url: 'https://www.ceypall.com',
  speakable: {
    '@type': 'SpeakableSpecification',
    cssSelector: ['h1', '.hero-subtitle', '.trust-bar'],
  },
}
export const metadata: Metadata = {
  title: {
    absolute: 'ISPM 15 Wooden Pallet Manufacturer Sri Lanka | CeyPall',
  },
  description:
    'Heat-treated, IPPC-stamped wooden pallets for Sri Lankan exporters. Custom sizes, island-wide delivery, ISPM 15 compliant. CeyPall (Pvt) Ltd.',
  alternates: {
    canonical: 'https://www.ceypall.com',
  },
  openGraph: {
    title: 'ISPM 15 Wooden Pallet Manufacturer Sri Lanka | CeyPall',
    description:
      'Heat-treated, IPPC-stamped wooden pallets for Sri Lankan exporters. Custom sizes, island-wide delivery, ISPM 15 compliant. CeyPall (Pvt) Ltd.',
    url: 'https://www.ceypall.com',
    siteName: 'CeyPall (Pvt) Ltd',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ISPM 15 Wooden Pallet Manufacturer Sri Lanka | CeyPall',
    description:
      'Heat-treated, IPPC-stamped wooden pallets for Sri Lankan exporters. Custom sizes, island-wide delivery, ISPM 15 compliant.',
  },
}

export default function HomePage() {
  return (
    <>
      <SchemaScript schema={speakableJsonLd} />
      <Hero />
      <TrustBar />
      <WhyCeyPall />
      <ProductsOverview />
      <ClientsStrip />
      <QuoteCTA />
    </>
  )
}
