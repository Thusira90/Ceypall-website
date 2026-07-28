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
        image: 'https://www.ceypall.com/hero.jpg',
        category: 'Wooden Pallets',
        brand: { '@type': 'Brand', name: 'CeyPall' },
        url: 'https://www.ceypall.com/products',
      },
    },
    {
      '@type': 'ListItem',
      position: 2,
      item: {
        '@type': 'Product',
        name: 'Vacuum Pressure Impregnated Pallets',
        description: 'Long-term warehouse pallets treated with Boron Borax under vacuum pressure. Up to 10 bar. 6-year warranty against pest contamination.',
        image: 'https://www.ceypall.com/hero.jpg',
        category: 'Wooden Pallets',
        brand: { '@type': 'Brand', name: 'CeyPall' },
        url: 'https://www.ceypall.com/products',
      },
    },
    {
      '@type': 'ListItem',
      position: 3,
      item: {
        '@type': 'Product',
        name: 'Custom Size Pallets',
        description: 'Custom wooden pallets manufactured to exact specifications with ISPM 15 heat treatment.',
        image: 'https://www.ceypall.com/hero.jpg',
        category: 'Wooden Pallets',
        brand: { '@type': 'Brand', name: 'CeyPall' },
        url: 'https://www.ceypall.com/products',
      },
    },
  ],
}
