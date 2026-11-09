import Link from 'next/link'
import { FadeUp } from '@/components/ui/FadeUp'
import { SectionHeader } from '@/components/ui/SectionHeader'

export interface NearbyArea {
  href: string
  name: string
  note: string
}

interface LocalDetailsProps {
  /** Display name of the area, e.g. "Kandy". */
  city: string
  /** Short paragraphs on how exports from this area reach port and where pallets fit in. */
  shipping: string[]
  /** Neighbouring location pages to cross-link. */
  nearby: NearbyArea[]
}

const deliveryChecklist = [
  {
    title: 'A unique number on every pallet',
    body: 'Each pallet carries its own number, which links it to its manufacturing date, the boron batch its timber was treated in, and its heat-treatment date.',
  },
  {
    title: 'IPPC mark applied to the wood',
    body: 'The ISPM 15 mark shows the IPPC symbol, country code LK, our NPQS producer code and HT for heat treatment.',
  },
  {
    title: 'A treatment certificate for the batch',
    body: 'The certificate travels with the delivery, lists every pallet number in the batch and confirms heat treatment to 56°C core for at least 30 minutes under NPQS registration LK-0175.',
  },
  {
    title: 'Kiln-dried timber',
    body: 'Pallets are kiln-dried to below 15% moisture content, which reduces the risk of condensation damage inside a sealed container.',
  },
]

/**
 * Location-specific logistics context, the per-delivery checklist and links to
 * neighbouring service areas. Used on the shorter location landing pages so each
 * one carries local detail and links into the rest of the location cluster.
 */
export function LocalDetails({ city, shipping, nearby }: LocalDetailsProps) {
  return (
    <>
      <section className="section-padding cream-texture">
        <div className="container-content max-w-3xl">
          <FadeUp>
            <SectionHeader eyebrow="Local logistics" title={`Shipping exports from ${city}`} />
          </FadeUp>
          <FadeUp delay={0.08}>
            <div className="mt-8 space-y-4">
              {shipping.map((p) => (
                <p key={p.slice(0, 40)} className="font-body text-base text-charcoal/75 leading-relaxed">
                  {p}
                </p>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      <section className="section-padding bg-warm-gray/40">
        <div className="container-content">
          <FadeUp>
            <SectionHeader eyebrow="Every delivery" title={`What arrives at your ${city} site`} />
          </FadeUp>
          <FadeUp delay={0.08}>
            <ul className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
              {deliveryChecklist.map(({ title, body }) => (
                <li key={title} className="bg-white border border-warm-gray p-6">
                  <h3 className="font-display text-base font-semibold text-primary mb-2">{title}</h3>
                  <p className="font-body text-sm text-charcoal/70 leading-relaxed">{body}</p>
                </li>
              ))}
            </ul>
          </FadeUp>
        </div>
      </section>

      <section className="section-padding cream-texture">
        <div className="container-content">
          <FadeUp>
            <SectionHeader eyebrow="Nearby" title={`Areas near ${city} we also supply`} />
          </FadeUp>
          <FadeUp delay={0.08}>
            <ul className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {nearby.map(({ href, name, note }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="block h-full bg-white border border-warm-gray p-5 hover:border-accent transition-colors duration-150"
                  >
                    <span className="block font-display text-base font-semibold text-primary">Wooden pallets {name}</span>
                    <span className="block mt-1 font-body text-sm text-charcoal/65">{note}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </FadeUp>
        </div>
      </section>
    </>
  )
}
