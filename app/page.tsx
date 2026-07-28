import type { Metadata } from 'next'
import { Hero } from '@/components/home/Hero'
import { TrustBar } from '@/components/home/TrustBar'
import { WhyCeyPall } from '@/components/home/WhyCeyPall'
import { ProductsOverview } from '@/components/home/ProductsOverview'
import { ClientsStrip } from '@/components/home/ClientsStrip'
import { QuoteCTA } from '@/components/home/QuoteCTA'
import { SchemaScript } from '@/components/ui/SchemaScript'
import { FaqSection } from '@/components/ui/FaqSection'
import { AnswerBlock } from '@/components/ui/AnswerBlock'

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

const heatTreatmentServiceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'ISPM 15 Heat Treatment',
  serviceType: 'ISPM 15 heat treatment of wooden pallets',
  description:
    'ISPM 15-compliant heat treatment of wooden pallets — core temperature raised to 56°C for a minimum of 30 minutes, IPPC-stamped (country code LK) with a treatment certificate. Registered with the National Plant Quarantine Service (NPQS) of Sri Lanka.',
  provider: { '@id': 'https://www.ceypall.com/#organization' },
  areaServed: { '@type': 'Country', name: 'Sri Lanka' },
  url: 'https://www.ceypall.com/heat-treated-pallets',
}

const customPalletServiceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Custom Pallet Manufacturing',
  serviceType: 'Custom wooden pallet manufacturing',
  description:
    'Custom wooden pallets manufactured to your exact dimensions, load rating, and entry type — standard export (1200 × 1000 mm), Euro (1200 × 800 mm), or fully bespoke sizes, all with ISPM 15 heat treatment and island-wide delivery.',
  provider: { '@id': 'https://www.ceypall.com/#organization' },
  areaServed: { '@type': 'Country', name: 'Sri Lanka' },
  url: 'https://www.ceypall.com/custom-wooden-pallets-sri-lanka',
}

const orderingHowToJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to Order Pallets from CeyPall',
  description:
    'The steps to order ISPM 15-certified wooden pallets from CeyPall, from first enquiry to delivery with a treatment certificate.',
  step: [
    {
      '@type': 'HowToStep',
      position: 1,
      name: 'Send an enquiry',
      text: 'Contact CeyPall through the website enquiry form, WhatsApp, or by phone on +94 71 471 1417.',
      url: 'https://www.ceypall.com/contact',
    },
    {
      '@type': 'HowToStep',
      position: 2,
      name: 'Share your specifications',
      text: 'Provide the pallet size, quantity, treatment type (export or storage), and delivery location, plus any special requirements.',
    },
    {
      '@type': 'HowToStep',
      position: 3,
      name: 'Receive a quotation',
      text: 'CeyPall responds with a quotation, typically within one working day.',
    },
    {
      '@type': 'HowToStep',
      position: 4,
      name: 'Production and ISPM 15 heat treatment',
      text: 'Approved orders are manufactured, boron pre-treated, heat-treated to ISPM 15 standard, and IPPC-stamped with a treatment certificate.',
    },
    {
      '@type': 'HowToStep',
      position: 5,
      name: 'Delivery',
      text: 'Finished pallets are delivered to your location island-wide across Sri Lanka, with the treatment certificate for every order.',
    },
  ],
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
      <SchemaScript schema={heatTreatmentServiceJsonLd} />
      <SchemaScript schema={customPalletServiceJsonLd} />
      <SchemaScript schema={orderingHowToJsonLd} />
      <Hero />
      <TrustBar />
      <section className="cream-texture pt-14 pb-2">
        <div className="container-content">
          <AnswerBlock question="In short: what does CeyPall do?">
            CeyPall (Pvt) Ltd is <strong>Sri Lanka&apos;s dedicated ISPM 15-certified wooden pallet
            manufacturer</strong>. It supplies <strong>heat-treated, IPPC-stamped export pallets</strong> —
            each with a treatment certificate — plus VPI storage pallets, in standard (1200 × 1000 mm),
            Euro (1200 × 800 mm) and custom sizes. NPQS-registered, with island-wide delivery and 3–5 day
            lead times.
          </AnswerBlock>
        </div>
      </section>
      <WhyCeyPall />
      <ProductsOverview />
      <ClientsStrip />
      <FaqSection faqs={homeFaqs} className="section-padding cream-texture" />
      <QuoteCTA />
    </>
  )
}
