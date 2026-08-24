import type { Metadata } from 'next'
import Link from 'next/link'
import { FadeUp } from '@/components/ui/FadeUp'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { SchemaScript } from '@/components/ui/SchemaScript'
import { AnswerBlock } from '@/components/ui/AnswerBlock'
import { Button } from '@/components/ui/Button'
import { RelatedLinks } from '@/components/ui/RelatedLinks'

export const metadata: Metadata = {
  title: 'Pallet Terminology Glossary — 50+ Terms Defined | CeyPall',
  description:
    'Plain-English definitions for 50+ pallet, ISPM 15 and export packaging terms — from block pallets and chamfered boards to IPPC marks, kiln drying, dunnage and VPI.',
  alternates: { canonical: 'https://www.ceypall.com/pallet-terminology-glossary' },
  openGraph: {
    title: 'Pallet Terminology Glossary | CeyPall',
    description: 'Plain-English definitions for 50+ pallet, ISPM 15 and export packaging terms used by Sri Lankan exporters and freight forwarders.',
    url: 'https://www.ceypall.com/pallet-terminology-glossary',
    images: [{ url: '/OPENGIMAGE.jpg', width: 1200, height: 630, alt: 'CeyPall pallet terminology glossary' }],
  },
  twitter: { description: 'Plain-English definitions for 50+ pallet, ISPM 15 and export packaging terms.', images: ['/OPENGIMAGE.jpg'] },
}

type Term = { term: string; definition: string; related?: string[] }

const terms: Term[] = [
  { term: 'Block pallet', definition: 'A pallet built with nine solid wooden blocks (four corners, four mid-edges, one centre) between the top and bottom decks, allowing four-way forklift and pallet-jack entry from any side. The Euro pallet (EPAL) is the best-known block pallet.', related: ['Stringer pallet', 'Four-way entry', 'Euro pallet'] },
  { term: 'Stringer pallet', definition: 'A pallet built with three or more parallel timber stringers running the full length between the top and bottom decks. Cheaper to produce than block pallets but only fully accessible to forklifts from two sides (or four sides with notched stringers).', related: ['Block pallet', 'Notched stringer'] },
  { term: 'Notched stringer', definition: 'A stringer with two openings cut into its underside so a pallet jack or forklift can enter from all four sides. A cost-efficient way to get partial four-way entry on a stringer pallet without going to full block construction.' },
  { term: 'Four-way entry', definition: 'A pallet that a forklift or pallet jack can pick up from any of the four sides. All block pallets are four-way entry; notched stringer pallets provide partial four-way entry.' },
  { term: 'Two-way entry', definition: 'A pallet a forklift can only enter from two opposite sides. Standard on non-notched stringer pallets. Cheaper but slower to handle in a busy warehouse.' },
  { term: 'Deck board', definition: 'The horizontal timber board on the top or bottom of the pallet that carries the load. A standard pallet has several deck boards on the top deck and fewer on the bottom deck.' },
  { term: 'Lead board (edge board)', definition: 'The outermost top-deck boards on each end of the pallet — the ones that take the impact when the pallet is set down or forklifted. Often thicker or wider than the interior deck boards.' },
  { term: 'Chamfered board', definition: 'A deck board with the leading edge bevelled at an angle so a pallet jack can slide onto it without catching. Used on ground-level pick pallets.' },
  { term: 'Bottom deck', definition: 'The lower surface of a double-deck pallet. Provides floor stability and prevents the load from crushing the goods below when stacked.' },
  { term: 'Skid', definition: 'A single-deck pallet with no bottom boards — cheaper and lighter than a full double-deck pallet but not stackable and not suitable for pallet racking.' },
  { term: 'Pallet deck', definition: 'The full top surface formed by the deck boards. The usable "floor" of the pallet on which cargo sits.' },
  { term: 'Runner', definition: 'A stringer that runs the length of the pallet under the top deck, supporting the load and providing the fork entry channel.' },
  { term: 'Block', definition: 'A short solid wooden post (typically 100 × 145 mm cross-section) sandwiched between the top and bottom decks of a block pallet. Nine blocks per pallet is standard.' },

  { term: 'ISPM 15', definition: 'International Standards for Phytosanitary Measures No. 15 — the global standard requiring all wooden packaging used in international trade to be heat treated (or fumigated) and IPPC-stamped. Enforced by 180+ countries at import.', related: ['IPPC mark', 'Heat treatment', 'NPQS'] },
  { term: 'IPPC', definition: 'International Plant Protection Convention — the UN treaty administered by the FAO that publishes ISPM 15 and other phytosanitary standards for cross-border trade.' },
  { term: 'IPPC mark', definition: 'The official stamp burned or branded into every ISPM 15-compliant pallet: the IPPC wheat symbol, the two-letter country code (LK for Sri Lanka), the producer registration number, and the treatment abbreviation (HT for heat treatment).', related: ['ISPM 15', 'HT', 'NPQS'] },
  { term: 'HT (Heat Treatment)', definition: 'The ISPM 15 treatment method in which the wood core is raised to 56 °C for a minimum of 30 continuous minutes to kill insects and larvae. HT is accepted in every ISPM 15 country including the EU, US, UK and Australia.', related: ['MB', 'Kiln drying'] },
  { term: 'MB (Methyl Bromide)', definition: 'A chemical fumigation method historically allowed under ISPM 15 but now banned by the European Union (since 2010) and the United Kingdom, and restricted in many other markets under the Montreal Protocol. Not suitable for EU-bound cargo.', related: ['HT'] },
  { term: 'NPQS', definition: 'National Plant Quarantine Service of Sri Lanka — the Department of Agriculture authority that registers ISPM 15 heat-treatment providers and issues producer codes for the IPPC mark. Only NPQS-registered manufacturers can legally issue IPPC-stamped pallets in Sri Lanka.' },
  { term: 'Treatment certificate', definition: 'An official document issued by an NPQS-registered manufacturer confirming the ISPM 15 heat-treatment date, temperature, duration, batch reference and producer code for a specific consignment of pallets. Often requested by EU, Australian and Middle Eastern customs.' },
  { term: 'Phytosanitary', definition: 'Relating to the health of plants. Phytosanitary measures like ISPM 15 exist to prevent invasive insects and plant diseases from crossing borders inside wooden packaging.' },
  { term: 'Kiln drying', definition: 'The controlled reduction of moisture content in freshly sawn timber by baking it in a kiln. Kiln drying is performed alongside ISPM 15 heat treatment to bring pallets to below 15% moisture content — the safe threshold for export cargo.' },
  { term: 'Moisture content (MC)', definition: 'The percentage of water present in wood, measured as (wet weight − dry weight) / dry weight × 100. Export pallets should be below 15% MC to avoid container-rain damage in transit.', related: ['Container rain', 'Kiln drying'] },

  { term: 'Container rain (container sweat)', definition: 'Condensation that forms on the ceiling and walls of a sealed shipping container when warm, humid air (often from wet pallets) meets cooler container surfaces during ocean transit. Drips onto cargo, causing mould, corrosion and product damage.', related: ['Moisture content (MC)'] },
  { term: 'Desiccant', definition: 'An absorbent pouch (typically silica gel or calcium chloride) placed inside a shipping container to soak up ambient moisture and reduce container-rain risk. Often used alongside low-MC pallets for hygroscopic cargo like tea and spices.' },
  { term: 'Hygroscopic cargo', definition: 'Cargo that readily absorbs moisture from surrounding air — tea, spices, desiccated coconut, powdered milk, cocoa. Especially sensitive to pallet moisture and container rain.' },
  { term: 'Dunnage', definition: 'Loose wooden boards, blocks or air bags placed between cargo and container walls (or between stacks) to prevent shifting in transit. Wooden dunnage is subject to ISPM 15 just like pallets.' },
  { term: 'Blocking and bracing', definition: 'The general practice of securing cargo inside a container with dunnage, straps, or wooden frames so it cannot shift, tip or slide during ocean transit.' },
  { term: 'Consignment', definition: 'A single shipment of goods from one exporter to one importer, typically travelling under one bill of lading. A consignment may include one or many pallets.' },
  { term: 'Bill of lading (BL)', definition: 'The primary shipping document issued by the carrier acknowledging receipt of cargo for shipment. Names the exporter, importer, cargo description and destination. The ISPM 15 treatment certificate is usually filed alongside the BL.' },

  { term: 'Euro pallet (EPAL / EUR)', definition: 'The 1200 × 800 mm block pallet standard used across the European Union and defined by EPAL (European Pallet Association). Two Euro pallets fit precisely side-by-side in a standard European truck.', related: ['Block pallet', 'EPAL'] },
  { term: 'EPAL', definition: 'European Pallet Association — the body that licenses and certifies Euro pallet manufacture, defines the EUR pallet specification and runs the exchange pool for reused EPAL pallets across Europe.' },
  { term: 'ISO pallet', definition: 'A pallet built to an ISO 6780 standard size. The six ISO sizes are 1200 × 1000 mm (most common globally), 1200 × 800 mm (Euro), 1140 × 1140, 1219 × 1016 (US 48 × 40 inch), 1067 × 1067, and 1100 × 1100 mm.' },
  { term: '48 × 40 pallet (GMA)', definition: 'The 1219 × 1016 mm (48 × 40 inch) stringer pallet standard in the United States, defined by the Grocery Manufacturers Association (GMA). Fits US truck trailers efficiently.' },
  { term: 'CHEP pallet', definition: 'A wooden or plastic pallet rented from the CHEP pool (owned by Brambles), typically painted blue. Most wooden CHEP pallets in export use are ISPM 15 heat-treated, but always verify the IPPC mark on the actual pallet before loading.' },

  { term: 'Dynamic load', definition: 'The maximum weight a pallet can carry while being moved by a forklift or pallet jack. Always lower than the static load.', related: ['Static load', 'Racking load'] },
  { term: 'Static load', definition: 'The maximum weight a pallet can hold while resting on a flat surface. Higher than the dynamic load because there is no motion stress.' },
  { term: 'Racking load', definition: 'The maximum weight a pallet can hold while suspended in a racking system between two beams (supported only at the ends). The most demanding load rating — often about a third of the static load.' },
  { term: 'Deflection', definition: 'The amount a loaded pallet bends downward at the centre when suspended between rack beams. Excessive deflection means the pallet is under-spec for the load.' },

  { term: 'BOI', definition: 'Board of Investment of Sri Lanka — the government agency that registers and oversees export-oriented manufacturers, including all businesses inside the Export Processing Zones (EPZs) at Katunayake, Biyagama, Koggala and others.' },
  { term: 'EPZ (Export Processing Zone)', definition: 'A designated industrial estate where export manufacturers operate under BOI-administered tax and customs concessions. Sri Lanka has 12+ EPZs including Katunayake, Biyagama, Koggala and Mirigama.' },
  { term: 'FTZ (Free Trade Zone)', definition: 'Used interchangeably with EPZ in Sri Lankan usage. The Katunayake Free Trade Zone is the country\'s largest, hosting hundreds of apparel and electronics manufacturers.' },
  { term: '3PL (Third-Party Logistics)', definition: 'A logistics provider that handles warehousing, order fulfilment and freight for other businesses. Major users of pallets in Sri Lanka include Peliyagoda- and Wattala-based 3PL operators serving Colombo Port.' },
  { term: 'Freight forwarder', definition: 'A company that arranges the shipping of goods on behalf of exporters — booking container space, handling customs paperwork and coordinating pallet loading. Freight forwarders do not usually source pallets themselves; that responsibility lies with the exporter.' },

  { term: 'VPI (Vacuum Pressure Impregnation)', definition: 'A wood preservation process in which Boron Borax preservative is forced into the wood under pressures up to 10 bar (145 PSI), penetrating the core of every plank and block. VPI pallets carry a pest warranty of up to 6 years — used for long-term warehousing and racking, not export.', related: ['HT (Heat Treatment)'] },
  { term: 'Boron treatment', definition: 'A wood preservative treatment using Boron or Boron Borax salts to protect against fungal decay and wood-boring insects. Used in VPI (deep) and as a surface pre-treatment before ISPM 15 heat treatment.' },
  { term: 'Rubber wood', definition: 'The timber of the para rubber tree (Hevea brasiliensis), widely available in Sri Lanka as a by-product of the rubber-latex industry. The most common and cost-efficient timber species used in CeyPall pallets.' },
  { term: 'Lunumidella', definition: 'A Sri Lankan hardwood (Melia dubia) used for pallets that require higher structural strength or a specific load rating. An alternative to rubber wood on custom or heavy-duty orders.' },
  { term: 'Debarked', definition: 'Timber with the outer bark removed. Under ISPM 15, treated wood packaging must be free of bark beyond very small allowable pieces — untreated bark can hide pests that survive heat treatment.' },
  { term: 'Fastener', definition: 'A generic term for the nails, spiral nails, screws or staples that hold a pallet together. Higher-grade export pallets use ring-shank or spiral nails for pull-out resistance.' },

  { term: 'One-way pallet (export pallet)', definition: 'A pallet built for a single journey — from the manufacturer, through export, to the destination — where it is typically discarded, recycled, or entered into a local pool. Most Sri Lankan export pallets are one-way pallets.' },
  { term: 'Returnable pallet', definition: 'A durable pallet designed to be reused many times. Common in closed-loop supply chains and pool systems like EPAL and CHEP. Rare in Sri Lankan export contexts because the return logistics are usually uneconomic.' },
  { term: 'Container', definition: 'A standard ISO shipping container. The most common sizes for Sri Lankan exports are the 20-foot (holds roughly 10–11 pallets on a single layer) and 40-foot (roughly 20–24 pallets).', related: ['Container rain (container sweat)'] },
  { term: 'High cube (HC)', definition: 'A 40-foot shipping container with about 30 cm of additional internal height compared to a standard 40-foot container. Often used to accommodate a second stacked pallet layer.' },
]

const termsSorted = [...terms].sort((a, b) => a.term.localeCompare(b.term))

const letters = Array.from(new Set(termsSorted.map((t) => t.term[0].toUpperCase()))).sort()

const definedTermSetJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'DefinedTermSet',
  '@id': 'https://www.ceypall.com/pallet-terminology-glossary#glossary',
  name: 'Pallet Terminology Glossary',
  description:
    'Plain-English definitions for pallet, ISPM 15, export packaging and Sri Lankan logistics terminology used across the CeyPall site.',
  hasDefinedTerm: termsSorted.map((t) => ({
    '@type': 'DefinedTerm',
    name: t.term,
    description: t.definition,
    inDefinedTermSet: 'https://www.ceypall.com/pallet-terminology-glossary#glossary',
    url: `https://www.ceypall.com/pallet-terminology-glossary#${t.term
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-|-$/g, '')}`,
  })),
}

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.ceypall.com/' },
    { '@type': 'ListItem', position: 2, name: 'Pallet Terminology Glossary', item: 'https://www.ceypall.com/pallet-terminology-glossary' },
  ],
}

function slug(term: string) {
  return term.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')
}

export default function PalletTerminologyGlossaryPage() {
  return (
    <>
      <SchemaScript schema={definedTermSetJsonLd} />
      <SchemaScript schema={breadcrumbJsonLd} />

      <nav aria-label="Breadcrumb" className="bg-cream border-b border-warm-gray">
        <div className="container-content py-3">
          <ol className="flex items-center gap-2 font-body text-xs text-charcoal/50">
            <li><Link href="/" className="hover:text-accent transition-colors duration-150">Home</Link></li>
            <li aria-hidden="true" className="select-none">›</li>
            <li className="text-charcoal/80 font-medium">Pallet Terminology Glossary</li>
          </ol>
        </div>
      </nav>

      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section className="wood-texture section-padding">
        <div className="container-content">
          <FadeUp>
            <div className="max-w-3xl">
              <p className="font-body text-xs font-semibold tracking-[0.15em] uppercase text-accent mb-4">
                Reference
              </p>
              <h1 className="font-display text-display-lg text-cream">
                Pallet Terminology Glossary
              </h1>
              <span className="block w-10 h-0.5 bg-accent mt-4 mb-5" />
              <p className="font-body text-base text-cream/80 leading-relaxed mb-8">
                Plain-English definitions for {terms.length}+ pallet, ISPM 15 and export packaging
                terms used by Sri Lankan exporters, freight forwarders and warehouse operators. From
                block pallets and chamfered boards to IPPC marks, kiln drying, container rain and VPI.
              </p>
              <div className="flex flex-wrap gap-2">
                {letters.map((L) => (
                  <a
                    key={L}
                    href={`#letter-${L}`}
                    className="inline-flex items-center justify-center w-9 h-9 border border-cream/25 text-cream/85 hover:bg-accent hover:text-white hover:border-accent transition-colors duration-150 font-body text-sm font-semibold"
                    aria-label={`Jump to terms beginning with ${L}`}
                  >
                    {L}
                  </a>
                ))}
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── AEO direct answer ─────────────────────────────────────────── */}
      <section className="section-padding cream-texture">
        <div className="container-content">
          <AnswerBlock question="In short: what is this glossary for?">
            A single reference for the technical terms that appear across CeyPall&apos;s ISPM 15
            pallet documentation, quotes and export paperwork — designed so exporters, freight
            forwarders and customs officers can look up any pallet or phytosanitary term in one place.
          </AnswerBlock>
        </div>
      </section>

      {/* ── Glossary ─────────────────────────────────────────────────── */}
      <section className="section-padding bg-warm-gray/40">
        <div className="container-content">
          <FadeUp>
            <div className="mb-10">
              <SectionHeader eyebrow={`${terms.length}+ terms`} title="A–Z Glossary" />
            </div>
          </FadeUp>

          <div className="max-w-4xl space-y-12">
            {letters.map((L) => {
              const group = termsSorted.filter((t) => t.term[0].toUpperCase() === L)
              return (
                <div key={L} id={`letter-${L}`} className="scroll-mt-24">
                  <FadeUp>
                    <h2 className="font-display text-3xl font-bold text-primary border-b border-warm-gray pb-3 mb-6">
                      {L}
                    </h2>
                  </FadeUp>
                  <dl className="space-y-6">
                    {group.map((t) => (
                      <FadeUp key={t.term}>
                        <div id={slug(t.term)} className="scroll-mt-24 bg-cream border border-warm-gray p-6">
                          <dt className="font-display text-lg font-semibold text-primary mb-2">
                            {t.term}
                          </dt>
                          <dd className="font-body text-sm text-charcoal/75 leading-relaxed">
                            {t.definition}
                          </dd>
                          {t.related && t.related.length > 0 && (
                            <p className="mt-3 font-body text-xs text-charcoal/55">
                              <span className="font-semibold uppercase tracking-wider text-accent">See also: </span>
                              {t.related.map((r, i) => (
                                <span key={r}>
                                  <a
                                    href={`#${slug(r)}`}
                                    className="text-accent hover:text-accent-hover underline underline-offset-2 transition-colors"
                                  >
                                    {r}
                                  </a>
                                  {i < t.related!.length - 1 ? ', ' : ''}
                                </span>
                              ))}
                            </p>
                          )}
                        </div>
                      </FadeUp>
                    ))}
                  </dl>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── Related pages ───────────────────────────────────────────── */}
      <RelatedLinks
        links={[
          { href: '/ispm-15-certification-sri-lanka', title: 'ISPM 15 Certification', description: 'How CeyPall meets ISPM 15 for export shipments.' },
          { href: '/heat-treated-pallets', title: 'Heat Treated Pallets', description: 'The kiln process, temperature, duration and IPPC stamp.' },
          { href: '/pallet-load-capacity', title: 'Pallet Load Capacity', description: 'Static, dynamic and racking load ratings by pallet type.' },
          { href: '/wooden-vs-plastic-pallets-sri-lanka', title: 'Wooden vs Plastic Pallets', description: 'When each type is the right answer for your cargo.' },
        ]}
      />

      {/* ── CTA ─────────────────────────────────────────────────────── */}
      <section className="bg-accent py-16">
        <div className="container-content flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="font-display text-2xl text-white">
              Term you can&apos;t find here?
            </h2>
            <p className="font-body text-sm text-white/80 mt-1">
              Ask us — we&apos;ll answer directly and add it to the glossary.
            </p>
          </div>
          <Button href="/contact" variant="outline-light" size="lg">
            Ask a question →
          </Button>
        </div>
      </section>
    </>
  )
}
