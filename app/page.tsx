import type { Metadata } from 'next'
import { Hero } from '@/components/home/Hero'
import { TrustBar } from '@/components/home/TrustBar'
import { WhyCeyPall } from '@/components/home/WhyCeyPall'
import { ProductsOverview } from '@/components/home/ProductsOverview'
import { ClientsStrip } from '@/components/home/ClientsStrip'
import { QuoteCTA } from '@/components/home/QuoteCTA'
import { SchemaScript } from '@/components/ui/SchemaScript'
import { FaqSection } from '@/components/ui/FaqSection'

const homeFaqs = [
  {
    question: 'What is an ISPM 15 pallet?',
    answer:
      'An ISPM 15 pallet is a wooden pallet that has been heat-treated to a core temperature of 56°C for at least 30 minutes and stamped with the official IPPC mark. This certifies it is free of live pests and legal to use for exports to the 180+ countries that enforce the ISPM 15 standard.',
  },
  {
    question: 'Does CeyPall deliver pallets across Sri Lanka?',
    answer:
      'Yes. CeyPall delivers island-wide from its Kochchikade facility, including Colombo, Katunayake, Negombo, and all major export and industrial zones. Typical lead times are 3–5 days, and recurring delivery schedules can be arranged for regular exporters.',
  },
  {
    question: 'Are CeyPall pallets certified for export?',
    answer:
      'Yes. Every CeyPall pallet is heat-treated, IPPC-stamped (country code LK), and supplied with a treatment certificate. CeyPall is registered with the National Plant Quarantine Service (NPQS) of Sri Lanka as an approved ISPM 15 treatment provider.',
  },
  {
    question: 'What sizes of wooden pallets does CeyPall make?',
    answer:
      'CeyPall manufactures standard export pallets (1200 × 1000 mm), Euro pallets (1200 × 800 mm), and fully custom sizes built to your product and container specifications. Both two-way and four-way entry pallets are available.',
  },
  {
    question: 'How much do wooden pallets cost in Sri Lanka?',
    answer:
      'Pallet pricing depends on size, timber grade, load rating, and order volume. CeyPall provides per-order quotes so exporters only pay for the specification they need. Request a quote for current pricing on your pallet type and quantity.',
  },
  {
    question: 'What is the difference between heat treatment and chemical fumigation?',
    answer:
      'Heat treatment (HT) raises the wood core to 56°C for 30 minutes to kill pests, with no chemicals and universal acceptance. Methyl bromide fumigation (MB) uses a chemical gas that is being phased out and is no longer accepted by markets like the EU. CeyPall uses heat treatment exclusively.',
  },
]

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
    images: [
      {
        url: '/OPENGIMAGE.jpg',
        width: 1200,
        height: 630,
        alt: 'CeyPall — ISPM 15 certified wooden pallets, Sri Lanka',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ISPM 15 Wooden Pallet Manufacturer Sri Lanka | CeyPall',
    description:
      'Heat-treated, IPPC-stamped wooden pallets for Sri Lankan exporters. Custom sizes, island-wide delivery, ISPM 15 compliant.',
    images: ['/OPENGIMAGE.jpg'],
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
      <FaqSection faqs={homeFaqs} className="section-padding cream-texture" />
      <QuoteCTA />
    </>
  )
}
