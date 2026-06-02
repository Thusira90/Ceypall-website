import type { Metadata } from 'next'
import { GeoLandingPage } from '@/components/geo/GeoLandingPage'

export const metadata: Metadata = {
  title: 'ISPM 15 Wooden Pallets — Colombo Port & Western Province',
  description:
    'CeyPall supplies heat-treated, IPPC-stamped wooden pallets to Colombo exporters, port logistics operators, and warehouse businesses across the Western Province. ISPM 15 certified.',
  openGraph: {
    title: 'ISPM 15 Wooden Pallets — Colombo Port & Western Province | CeyPall',
    description:
      'Heat-treated, ISPM 15-compliant pallets for Colombo port exporters. Volume capacity, full documentation, and reliable delivery. CeyPall (Pvt) Ltd.',
    url: 'https://www.ceypall.com/wooden-pallets-colombo',
  },
  alternates: {
    canonical: 'https://www.ceypall.com/wooden-pallets-colombo',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://www.ceypall.com/#business',
  name: 'CeyPall (Pvt) Ltd',
  description:
    'ISPM 15 certified wooden pallet manufacturer supplying heat-treated export pallets to Colombo port exporters and warehouse businesses across the Western Province.',
  url: 'https://www.ceypall.com/wooden-pallets-colombo',
  telephone: ['+94714711417', '+94769494944', '+94312277752'],
  email: 'office@ceypall.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '1088, Colombo Road, Daluwakotuwa',
    addressLocality: 'Kochchikade',
    postalCode: '11540',
    addressCountry: 'LK',
  },
  areaServed: [
    { '@type': 'City', name: 'Colombo' },
    { '@type': 'Place', name: 'Port of Colombo' },
    { '@type': 'AdministrativeArea', name: 'Western Province' },
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Export & Storage Pallets — Colombo',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Product',
          name: 'Heat-Treated ISPM 15 Pallets — Colombo',
          description:
            'ISPM 15-compliant heat-treated wooden pallets for Port of Colombo export shipments. IPPC stamped with treatment certificate.',
          image: 'https://www.ceypall.com/hero.jpg',
          brand: { '@type': 'Brand', name: 'CeyPall' },
          offers: {
            '@type': 'Offer',
            priceCurrency: 'LKR',
            price: '0',
            availability: 'https://schema.org/InStock',
            url: 'https://www.ceypall.com/wooden-pallets-colombo',
            seller: { '@type': 'Organization', name: 'CeyPall (Pvt) Ltd' },
          },
        },
      },
    ],
  },
}

export default function ColomboPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <GeoLandingPage
        city="Colombo"
        eyebrow="Colombo Port & Western Province"
        heading="ISPM 15 Pallets for Colombo Port Exporters."
        subheading="Supplying heat-treated, IPPC-stamped wooden pallets to Colombo's exporters, port logistics operators, and warehouse businesses across the Western Province — with full documentation for customs clearance."
        reasons={[
          {
            number: '01',
            title: 'Port-Ready Compliance',
            body: 'Every pallet meets ISPM 15 requirements for international shipment through the Port of Colombo. Heat-treated to 56°C core temperature, IPPC-stamped, and accompanied by a signed treatment certificate accepted by customs globally.',
          },
          {
            number: '02',
            title: 'Volume Capacity',
            body: 'We have the manufacturing capacity to support large, recurring orders. We work with some of Sri Lanka\'s leading exporters and can match your shipping frequency — weekly, fortnightly, or monthly supply schedules.',
          },
          {
            number: '03',
            title: 'Full Documentation',
            body: 'We provide complete paperwork: ISPM 15 heat treatment certificate, treatment records, and IPPC stamp registration details. Everything your freight forwarder and customs broker needs, ready with every delivery.',
          },
        ]}
        industries={[
          'Tea & Rubber Exports',
          'Pharmaceuticals',
          'FMCG & Consumer Goods',
          'Port Logistics Operators',
          'Apparel & Garment Brands',
          'Coconut & Spice Exporters',
          'Chemical & Industrial Products',
        ]}
        deliveryTime="60–90 minutes"
        deliveryNote="We supply to Colombo and the Western Province on scheduled deliveries aligned with your container stuffing dates and vessel departure schedules."
        faqs={[
          {
            question: 'Do you supply to the Colombo area and Port of Colombo?',
            answer:
              'Yes. We supply pallets to exporters, logistics operators, and warehouse businesses across Colombo and the Western Province. Our Kochchikade facility is approximately 55 km from Colombo Fort on the coastal A3 corridor. We schedule deliveries to align with container stuffing and vessel departure dates — contact us with your timeline and we\'ll plan accordingly.',
          },
          {
            question: 'Can you handle high-volume recurring orders?',
            answer:
              "Yes. We work with some of Sri Lanka's largest exporters who require consistent, high-volume pallet supply. We can set up recurring delivery schedules to match your shipment frequency. Contact us to discuss your volume requirements and we'll provide pricing and a delivery plan.",
          },
          {
            question: 'What documentation comes with every delivery?',
            answer:
              'Every CeyPall delivery includes an official ISPM 15 heat treatment certificate confirming treatment at 56°C core temperature for a minimum of 30 minutes. This is the standard documentation required by customs authorities in all ISPM 15-signatory countries — over 180 nations including the EU, USA, UK, Australia, Japan, China, and the Middle East.',
          },
        ]}
      />
    </>
  )
}
