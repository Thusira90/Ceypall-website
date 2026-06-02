export const productSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      item: {
        '@type': 'Product',
        name: 'Heat-Treated ISPM 15 Pallets',
        description: 'ISPM 15-compliant heat-treated wooden pallets with IPPC stamp and treatment certificate. Core heated to 56 degrees Celsius for 30 minutes minimum.',
        offers: {
          '@type': 'Offer',
          priceCurrency: 'LKR',
          price: '0',
          availability: 'https://schema.org/InStock',
          url: 'https://www.ceypall.com/products',
          seller: { '@type': 'Organization', name: 'CeyPall (Pvt) Ltd' },
        },
      },
    },
    {
      '@type': 'ListItem',
      position: 2,
      item: {
        '@type': 'Product',
        name: 'Vacuum Pressure Impregnated Pallets',
        description: 'Long-term warehouse pallets treated with Boron Borax under vacuum pressure. Up to 10 bar. 6-year warranty against pest contamination.',
        offers: {
          '@type': 'Offer',
          priceCurrency: 'LKR',
          price: '0',
          availability: 'https://schema.org/InStock',
          url: 'https://www.ceypall.com/products',
          seller: { '@type': 'Organization', name: 'CeyPall (Pvt) Ltd' },
        },
      },
    },
    {
      '@type': 'ListItem',
      position: 3,
      item: {
        '@type': 'Product',
        name: 'Custom Size Pallets',
        description: 'Custom wooden pallets manufactured to exact specifications with ISPM 15 heat treatment.',
        offers: {
          '@type': 'Offer',
          priceCurrency: 'LKR',
          price: '0',
          availability: 'https://schema.org/InStock',
          url: 'https://www.ceypall.com/products',
          seller: { '@type': 'Organization', name: 'CeyPall (Pvt) Ltd' },
        },
      },
    },
  ],
}
