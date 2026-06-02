import type { Metadata } from 'next'
import { GeoLandingPage } from '@/components/geo/GeoLandingPage'

export const metadata: Metadata = {
  title: 'ISPM 15 Wooden Pallets — Negombo & Wattala',
  description:
    'CeyPall delivers heat-treated, ISPM 15-certified wooden pallets to Negombo and the Wattala region. Export pallets and storage pallets manufactured in Kochchikade, just 20 km away.',
  openGraph: {
    title: 'ISPM 15 Wooden Pallets — Negombo & Wattala | CeyPall',
    description:
      'Heat-treated, ISPM 15-certified wooden pallets delivered to Negombo exporters and manufacturers. CeyPall (Pvt) Ltd — Kochchikade, Sri Lanka.',
    url: 'https://www.ceypall.com/wooden-pallets-negombo',
  },
  alternates: {
    canonical: 'https://www.ceypall.com/wooden-pallets-negombo',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://www.ceypall.com/#business',
  name: 'CeyPall (Pvt) Ltd',
  description:
    'ISPM 15 certified wooden pallet manufacturer supplying heat-treated export and storage pallets to Negombo and the Wattala region.',
  url: 'https://www.ceypall.com/wooden-pallets-negombo',
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
    { '@type': 'City', name: 'Negombo' },
    { '@type': 'City', name: 'Wattala' },
    { '@type': 'Place', name: 'Gampaha District' },
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Export & Storage Pallets — Negombo',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Product',
          name: 'Heat-Treated ISPM 15 Pallets — Negombo',
          description:
            'ISPM 15-compliant heat-treated wooden pallets for Negombo exporters. IPPC stamped with treatment certificate.',
          image: 'https://www.ceypall.com/hero.jpg',
          brand: { '@type': 'Brand', name: 'CeyPall' },
          offers: {
            '@type': 'Offer',
            priceCurrency: 'LKR',
            price: '0',
            availability: 'https://schema.org/InStock',
            url: 'https://www.ceypall.com/wooden-pallets-negombo',
            seller: { '@type': 'Organization', name: 'CeyPall (Pvt) Ltd' },
          },
        },
      },
    ],
  },
}

export default function NegomboPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <GeoLandingPage
        city="Negombo"
        eyebrow="Negombo & Wattala Region"
        heading="Wooden Pallets Delivered to Negombo."
        subheading="Heat-treated, ISPM 15-compliant export pallets and long-term storage pallets — manufactured in Kochchikade, just 20 km from Negombo, and delivered to your door."
        reasons={[
          {
            number: '01',
            title: 'Closest ISPM 15 Supplier',
            body: "CeyPall's Kochchikade factory is just 20 km from Negombo, making us the nearest ISPM 15-certified pallet manufacturer to the area. Fast deliveries without long-haul logistics delays.",
          },
          {
            number: '02',
            title: 'Export & Storage in One Place',
            body: 'Whether you need heat-treated pallets for export compliance or vacuum pressure impregnated pallets for long-term warehouse use, we manufacture both from a single facility with a single point of contact.',
          },
          {
            number: '03',
            title: 'Flexible Order Quantities',
            body: "From trial orders to full container loads, we work with businesses of all sizes. We don't set minimum quantities that price out growing exporters — tell us what you need and we'll find the right solution.",
          },
        ]}
        industries={[
          'Food & Beverage Processing',
          'Seafood & Canning',
          'Spice & Coconut Exports',
          'Textile Manufacturers',
          'Small & Medium Exporters',
          'Logistics Operators',
          'Airport Cargo Businesses',
        ]}
        deliveryTime="25–35 minutes"
        deliveryNote="Negombo and Wattala are within our standard delivery area. We supply regularly to businesses across the region and can accommodate urgent orders."
        faqs={[
          {
            question: 'Do you deliver to Negombo and Wattala?',
            answer:
              'Yes. Negombo and Wattala are within our standard delivery area. Our Kochchikade facility is approximately 20 km from central Negombo, and we regularly supply businesses across the region. Standard delivery is typically arranged within 1–2 business days.',
          },
          {
            question: 'What is the minimum order quantity?',
            answer:
              "We don't apply a rigid minimum. We work with orders from small batches upward — we'd rather help you find the right quantity for your needs than turn away smaller businesses. Contact us and we'll work out what makes sense for your operation.",
          },
          {
            question: 'Do you supply food and seafood exporters?',
            answer:
              'Yes. Our heat-treated pallets are suitable for all export commodities including food products, spices, canned goods, and seafood. They meet ISPM 15 requirements and are IPPC-stamped — compliant with international food export packaging requirements.',
          },
        ]}
      />
    </>
  )
}
