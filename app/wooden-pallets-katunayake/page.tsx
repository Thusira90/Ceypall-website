import type { Metadata } from 'next'
import { GeoLandingPage } from '@/components/geo/GeoLandingPage'

export const metadata: Metadata = {
  title: 'ISPM 15 Wooden Pallets — Katunayake FTZ & Seeduwa',
  description:
    'CeyPall supplies heat-treated, IPPC-stamped export pallets to BOI companies and exporters in the Katunayake Free Trade Zone and Seeduwa area. ISPM 15 certified. Treatment certificate included.',
  openGraph: {
    title: 'ISPM 15 Wooden Pallets — Katunayake FTZ & Seeduwa | CeyPall',
    description:
      'Heat-treated, IPPC-stamped export pallets supplied to BOI companies and exporters in the Katunayake Free Trade Zone. ISPM 15 certified. CeyPall (Pvt) Ltd.',
    url: 'https://www.ceypall.com/wooden-pallets-katunayake',
  },
  alternates: {
    canonical: 'https://www.ceypall.com/wooden-pallets-katunayake',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://www.ceypall.com/#business',
  name: 'CeyPall (Pvt) Ltd',
  description:
    'ISPM 15 certified wooden pallet manufacturer supplying heat-treated export pallets to the Katunayake Free Trade Zone and Seeduwa area.',
  url: 'https://www.ceypall.com/wooden-pallets-katunayake',
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
    { '@type': 'City', name: 'Katunayake' },
    { '@type': 'Place', name: 'Katunayake Free Trade Zone' },
    { '@type': 'City', name: 'Seeduwa' },
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Export & Storage Pallets — Katunayake',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Product',
          name: 'Heat-Treated ISPM 15 Pallets — Katunayake',
          description:
            'ISPM 15-compliant heat-treated wooden pallets for BOI and FTZ export shipments. IPPC stamped with treatment certificate.',
          image: 'https://www.ceypall.com/hero.jpg',
          brand: { '@type': 'Brand', name: 'CeyPall' },
          offers: {
            '@type': 'Offer',
            priceCurrency: 'LKR',
            price: '0',
            availability: 'https://schema.org/InStock',
            url: 'https://www.ceypall.com/wooden-pallets-katunayake',
            seller: { '@type': 'Organization', name: 'CeyPall (Pvt) Ltd' },
          },
        },
      },
    ],
  },
}

export default function KatunayakePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <GeoLandingPage
        city="Katunayake"
        eyebrow="Katunayake Free Trade Zone"
        heading="Export Pallets for Katunayake Manufacturers."
        subheading="ISPM 15-certified, IPPC-stamped wooden pallets supplied directly to BOI companies and exporters in the Katunayake Free Trade Zone and Seeduwa area. Treatment certificate included with every order."
        reasons={[
          {
            number: '01',
            title: 'BOI & FTZ Compliance',
            body: 'Our pallets are ISPM 15 certified and IPPC stamped, meeting all requirements for BOI export shipments. Every order is accompanied by a signed heat treatment certificate — accepted at customs worldwide.',
          },
          {
            number: '02',
            title: 'Close to the FTZ',
            body: 'Our Kochchikade facility is approximately 35 km from the Katunayake Free Trade Zone, allowing us to dispatch quickly against your container loading date. No long-distance logistics overhead.',
          },
          {
            number: '03',
            title: 'Bulk Orders, Reliable Lead Times',
            body: 'We handle high-volume orders for garment, apparel, and manufacturing exporters — with consistent production capacity and delivery schedules aligned to vessel departures.',
          },
        ]}
        industries={[
          'Garments & Apparel',
          'Electronics Manufacturing',
          'Food Processing',
          'Rubber Products',
          'Logistics & Freight Forwarding',
          'BOI-Registered Companies',
          'Export Trading Companies',
        ]}
        deliveryTime="35–50 minutes"
        deliveryNote="We regularly supply to the Katunayake FTZ and Seeduwa area. Contact us with your container date and we'll plan delivery around it."
        faqs={[
          {
            question: 'Do ISPM 15 pallets comply with BOI export requirements?',
            answer:
              'Yes. ISPM 15 is an internationally mandated standard for wooden packing material used in export shipments. CeyPall pallets are heat-treated to 56°C core temperature for a minimum of 30 minutes, IPPC-stamped, and come with a treatment certificate — fully compliant with BOI export requirements and accepted in all major markets including the EU, USA, UK, Australia, China, and the Middle East.',
          },
          {
            question: 'How quickly can you deliver to the Katunayake FTZ?',
            answer:
              'Typically within 1–2 business days for standard orders. Our Kochchikade facility is approximately 35 km from the FTZ, so we can respond quickly to time-sensitive orders. Contact us with your container loading date and we\'ll plan the delivery to fit your schedule.',
          },
          {
            question: 'Do you supply garment factories and BOI-registered companies?',
            answer:
              'Yes. We regularly supply apparel manufacturers, logistics operators, and BOI-registered companies in the Katunayake area. We can accommodate recurring standing orders and blanket purchase arrangements for companies with regular export volumes.',
          },
        ]}
      />
    </>
  )
}
