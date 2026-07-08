// Serves /llms.txt — a plain-text guide for AI crawlers and answer engines,
// pointing them at CeyPall's most useful pages. Emerging convention modelled
// on https://llmstxt.org. Keep entries in sync with the sitemap.

const BODY = `# CeyPall (Pvt) Ltd

> Sri Lanka's dedicated ISPM 15-certified wooden pallet manufacturer. We make
> heat-treated, IPPC-stamped wooden pallets for export and storage, in standard
> and custom sizes, with island-wide delivery. Founded 2005, based in
> Kochchikade, Western Province. NPQS-registered heat treatment provider.

Key facts:
- ISPM 15 heat treatment: core temperature 56°C for a minimum of 30 minutes.
- Every pallet is IPPC-stamped (country code LK) with a treatment certificate.
- Pallets are kiln-dried to below 15% moisture content.
- Registered with the National Plant Quarantine Service (NPQS), Sri Lanka.
- Contact: office@ceypall.com · +94 71 471 1417 · 1088 Colombo Road, Daluwakotuwa, Kochchikade.

## Core pages
- [Home](https://www.ceypall.com): ISPM 15 wooden pallet manufacturer, Sri Lanka.
- [Export pallet manufacturer](https://www.ceypall.com/export-pallet-manufacturer-sri-lanka): Export-grade pallet manufacturing overview.
- [Products](https://www.ceypall.com/products): Pallet types, sizes, and specifications.
- [Heat-treated pallets](https://www.ceypall.com/heat-treated-pallets): How ISPM 15 heat treatment works.
- [Euro pallets](https://www.ceypall.com/euro-pallets-sri-lanka): Euro-standard 1200 × 800 mm pallets for EU/UK export.
- [Custom wooden pallets](https://www.ceypall.com/custom-wooden-pallets-sri-lanka): Bespoke pallets built to any dimension and load rating.
- [Industrial pallets](https://www.ceypall.com/industrial-pallets-sri-lanka): Heavy-duty, load-rated pallets for manufacturing and warehousing.
- [Pallet pricing](https://www.ceypall.com/pallet-pricing-sri-lanka): What drives wooden pallet cost in Sri Lanka.
- [How it works](https://www.ceypall.com/how-it-works): Ordering, treatment, and delivery process.
- [Contact](https://www.ceypall.com/contact): Request a quote.

## Industry guides
- [Tea export pallets](https://www.ceypall.com/pallets-for-tea-export)
- [Apparel export pallets](https://www.ceypall.com/pallets-for-apparel-export)
- [Coconut export pallets](https://www.ceypall.com/pallets-for-coconut-export)
- [Rubber export pallets](https://www.ceypall.com/pallets-for-rubber-export)
- [Spice & cinnamon export pallets](https://www.ceypall.com/pallets-for-spice-export)

## Locations
- [Wooden pallets Sri Lanka (island-wide)](https://www.ceypall.com/wooden-pallets-sri-lanka)
- [Wooden pallets Colombo](https://www.ceypall.com/wooden-pallets-colombo)
- [Wooden pallets Katunayake](https://www.ceypall.com/wooden-pallets-katunayake)
- [Wooden pallets Negombo](https://www.ceypall.com/wooden-pallets-negombo)

## Tools & knowledge
- [Container pallet calculator](https://www.ceypall.com/container-pallet-calculator)
- [Moisture content calculator](https://www.ceypall.com/moisture-content-calculator)
- [Knowledge Centre](https://www.ceypall.com/knowledge-centre)
- [Blog](https://www.ceypall.com/blog): Guides on ISPM 15, IPPC certification, and pallet compliance.
`

export function GET(): Response {
  return new Response(BODY, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=86400',
    },
  })
}
