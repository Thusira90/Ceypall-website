import type { Metadata } from 'next'
import Link from 'next/link'
import { FadeUp } from '@/components/ui/FadeUp'
import { RelatedLinks } from '@/components/ui/RelatedLinks'
import { AnswerBlock } from '@/components/ui/AnswerBlock'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Button } from '@/components/ui/Button'
import { SchemaScript } from '@/components/ui/SchemaScript'

export const metadata: Metadata = {
  title: 'ISPM 15 Certification Sri Lanka — Complete Exporter Guide | CeyPall',
  description:
    'Complete guide to ISPM 15 certification in Sri Lanka: what it is, how the NPQS scheme works, how to get certified pallets, and how to read an IPPC stamp. From CeyPall — NPQS-registered ISPM 15 treatment provider LK-0175.',
  alternates: {
    canonical: 'https://www.ceypall.com/ispm-15-certification-sri-lanka',
  },
  openGraph: {
    title: 'ISPM 15 Certification Sri Lanka — Complete Exporter Guide | CeyPall',
    description:
      'The complete Sri Lankan exporter guide to ISPM 15: what the standard requires, how NPQS registration works, how to source certified pallets, and how to read the IPPC stamp.',
    url: 'https://www.ceypall.com/ispm-15-certification-sri-lanka',
    images: [
      {
        url: '/OPENGIMAGE.jpg',
        width: 1200,
        height: 630,
        alt: 'ISPM 15 certification in Sri Lanka — CeyPall exporter guide',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ISPM 15 Certification Sri Lanka | CeyPall',
    description:
      'Complete Sri Lankan exporter guide to ISPM 15 certification, NPQS registration, and the IPPC stamp.',
    images: ['/OPENGIMAGE.jpg'],
  },
}

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.ceypall.com/' },
    { '@type': 'ListItem', position: 2, name: 'ISPM 15 Certification Sri Lanka', item: 'https://www.ceypall.com/ispm-15-certification-sri-lanka' },
  ],
}

const faqs = [
  {
    question: 'What is ISPM 15 certification?',
    answer:
      'ISPM 15 — International Standards for Phytosanitary Measures No. 15 — is the global standard governing wood packaging material used in international trade. It requires that all solid wood packaging (pallets, crates, dunnage) be treated to eliminate pests, then marked with an official IPPC stamp identifying the country, the registered treatment provider, and the treatment method used. Over 180 countries enforce it.',
  },
  {
    question: 'How do I get ISPM 15 certified pallets in Sri Lanka?',
    answer:
      'You do not need to get certified yourself as an exporter — you source pallets from an NPQS-registered ISPM 15 treatment provider. In Sri Lanka the National Plant Quarantine Service (NPQS) maintains the register of approved providers. CeyPall is NPQS-registered under provider code LK-0175. Every pallet we supply is heat treated, IPPC-stamped, and shipped with a treatment certificate — no further paperwork or inspection is required from the exporter.',
  },
  {
    question: 'Who regulates ISPM 15 in Sri Lanka?',
    answer:
      'The National Plant Quarantine Service (NPQS), a division of the Sri Lanka Department of Agriculture, is the national plant protection organisation (NPPO) responsible for ISPM 15 in Sri Lanka. NPQS registers heat treatment providers, allocates provider codes (LK-XXXX), audits facilities, and reports compliance to the International Plant Protection Convention (IPPC).',
  },
  {
    question: 'What does an IPPC stamp on a Sri Lankan pallet look like?',
    answer:
      'The IPPC stamp is a bordered rectangle containing the IPPC wheat-ear symbol, a two-letter country code (LK for Sri Lanka), a unique provider registration number (e.g. LK-0175 for CeyPall), and a treatment code — HT for heat treatment or MB for methyl bromide fumigation. See our full guide: "How to read an IPPC stamp".',
  },
  {
    question: 'How is ISPM 15 heat treatment actually performed?',
    answer:
      'The pallet is placed in a purpose-built heat treatment chamber and the wood core is raised to a minimum of 56°C, held for at least 30 continuous minutes. Core temperature is measured with calibrated probes. Once the treatment is completed and logged, each pallet is IPPC-stamped and a treatment certificate is issued for the batch. Chemical fumigation (methyl bromide) is an alternative method but is banned or restricted in most modern markets — CeyPall exclusively uses heat treatment.',
  },
  {
    question: 'Which countries require ISPM 15 pallets from Sri Lanka?',
    answer:
      'Every major Sri Lankan export market enforces ISPM 15: European Union, United Kingdom, USA, Canada, Japan, China, Australia, New Zealand, South Korea, all GCC states, and Russia. In practice: if you export from Sri Lanka on a wooden pallet, that pallet must be ISPM 15 certified. Untreated pallets are refused at destination and the shipment is quarantined, fumigated at the exporter\'s expense, or destroyed.',
  },
  {
    question: 'How long does an ISPM 15 pallet stay certified?',
    answer:
      'The ISPM 15 treatment itself does not expire, and the IPPC stamp remains valid for the life of the pallet — provided the pallet is not repaired with untreated wood. If a pallet is repaired, the repaired pallet must be re-treated and re-stamped by an NPQS-registered provider before it can be used for export again.',
  },
]

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: { '@type': 'Answer', text: faq.answer },
  })),
}

const steps = [
  {
    number: '01',
    title: 'Request a quote',
    body: 'Send us your pallet size, quantity, and delivery location. We respond with pricing and lead time — typically within one working day.',
  },
  {
    number: '02',
    title: 'Manufacturing',
    body: 'Pallets are built from locally sourced rubber wood and Lunumidella at our Kochchikade facility, and boron pre-treated as standard.',
  },
  {
    number: '03',
    title: 'Heat treatment',
    body: 'Each batch is loaded into our NPQS-registered heat treatment chamber. Wood core is raised to 56°C and held for 30+ minutes, monitored by calibrated probes.',
  },
  {
    number: '04',
    title: 'IPPC stamping',
    body: 'Every pallet is stamped with the IPPC mark — including our registered provider code LK-0175 and the HT treatment code.',
  },
  {
    number: '05',
    title: 'Certificate + delivery',
    body: 'Pallets are delivered island-wide with a signed heat treatment certificate — the standard documentation required by customs authorities worldwide.',
  },
]

const stamps = [
  { element: 'IPPC symbol', meaning: 'The international wheat-ear symbol confirming compliance with the IPPC/ISPM 15 standard.' },
  { element: 'Country code — LK', meaning: 'The ISO country code for Sri Lanka. Identifies where the treatment was performed.' },
  { element: 'Provider code — e.g. 0175', meaning: 'The unique NPQS registration number for the treatment provider. CeyPall\'s code is 0175.' },
  { element: 'Treatment code — HT', meaning: 'Heat Treatment. The alternative code MB (methyl bromide fumigation) is now banned in the EU and restricted elsewhere.' },
]

export default function IspmCertificationPage() {
  return (
    <>
      <SchemaScript schema={breadcrumbJsonLd} />
      <SchemaScript schema={faqJsonLd} />

      {/* Hero */}
      <section className="wood-texture section-padding">
        <div className="container-content">
          <FadeUp>
            <div className="max-w-2xl">
              <p className="font-body text-xs font-semibold tracking-[0.15em] uppercase text-accent mb-4">
                Exporter guide
              </p>
              <h1 className="font-display text-display-lg text-cream">
                ISPM 15 Certification in Sri Lanka — Complete Exporter Guide.
              </h1>
              <span className="block w-10 h-0.5 bg-accent mt-4 mb-5" />
              <p className="font-body text-base text-cream/80 leading-relaxed mb-8">
                Everything Sri Lankan exporters need to know about ISPM 15 — what the standard is, how
                the NPQS scheme works, how to source certified pallets, and how to read the IPPC stamp.
                Written by CeyPall, NPQS-registered treatment provider LK-0175.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button href="/contact" variant="primary" size="lg">
                  Get certified pallets →
                </Button>
                <Button href="/heat-treated-pallets" variant="outline-light" size="lg">
                  Heat treatment details
                </Button>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Answer block */}
      <section className="section-padding cream-texture">
        <div className="container-content">
          <AnswerBlock question="In short: what is ISPM 15?">
            <strong>ISPM 15</strong> is the global standard for wood packaging used in international trade. It requires all solid-wood pallets, crates, and dunnage to be <strong>heat treated to 56°C for 30 minutes</strong> (or chemically fumigated) and <strong>stamped with the official IPPC mark</strong>. In Sri Lanka the standard is administered by the <strong>National Plant Quarantine Service (NPQS)</strong>, which registers approved treatment providers. Exporters do not need to certify themselves — they simply source pallets from an NPQS-registered provider like CeyPall (LK-0175).
          </AnswerBlock>
        </div>
      </section>

      {/* How to get certified */}
      <section className="section-padding bg-warm-gray/40">
        <div className="container-content">
          <FadeUp>
            <div className="mb-12">
              <SectionHeader
                eyebrow="How it works"
                title="How to get ISPM 15 certified pallets in Sri Lanka."
                subtitle="You do not need to get certified yourself. You source pallets from an NPQS-registered treatment provider — that is the entire process."
              />
            </div>
          </FadeUp>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-warm-gray">
            {steps.map(({ number, title, body }) => (
              <FadeUp key={number}>
                <div className="bg-cream p-8 flex flex-col gap-5 h-full">
                  <span className="font-display text-4xl font-bold text-warm-gray select-none">
                    {number}
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-primary mb-3">{title}</h3>
                    <p className="font-body text-sm text-charcoal/65 leading-relaxed">{body}</p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Reading the stamp */}
      <section className="section-padding cream-texture">
        <div className="container-content">
          <FadeUp>
            <SectionHeader
              eyebrow="The IPPC stamp"
              title="Reading a Sri Lankan IPPC stamp."
              subtitle="Every ISPM 15 pallet carries a stamp with four elements. Here is what each one means."
            />
          </FadeUp>

          <FadeUp delay={0.1}>
            <div className="mt-10 overflow-x-auto">
              <table className="w-full font-body text-sm">
                <thead>
                  <tr className="border-b-2 border-primary/20">
                    <th className="text-left py-3 pr-6 font-semibold text-primary w-1/3">Stamp element</th>
                    <th className="text-left py-3 font-semibold text-primary">Meaning</th>
                  </tr>
                </thead>
                <tbody>
                  {stamps.map(({ element, meaning }) => (
                    <tr key={element} className="border-b border-warm-gray">
                      <td className="py-3 pr-6 font-medium text-charcoal">{element}</td>
                      <td className="py-3 text-charcoal/70">{meaning}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </FadeUp>

          <FadeUp delay={0.15}>
            <p className="mt-6 font-body text-sm text-charcoal/60 max-w-2xl">
              For a fully illustrated breakdown with example stamps, see our guide:{' '}
              <Link href="/blog/how-to-read-ippc-stamp" className="text-accent hover:text-accent-hover underline underline-offset-2 transition-colors">
                How to read an IPPC stamp
              </Link>.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* NPQS + regulator context */}
      <section className="section-padding bg-warm-gray/40">
        <div className="container-content">
          <FadeUp>
            <div className="max-w-2xl">
              <h2 className="font-display text-2xl font-semibold text-primary mb-6">
                The NPQS scheme — Sri Lanka&rsquo;s ISPM 15 authority
              </h2>
              <p className="font-body text-sm text-charcoal/70 leading-relaxed mb-5">
                The <strong>National Plant Quarantine Service</strong> (NPQS), a division of Sri Lanka&rsquo;s
                Department of Agriculture, is the country&rsquo;s national plant protection organisation
                (NPPO). It is the legal authority responsible for implementing ISPM 15 in Sri Lanka.
              </p>
              <p className="font-body text-sm text-charcoal/70 leading-relaxed mb-5">
                NPQS audits and registers ISPM 15 treatment providers, allocates provider codes
                (formatted as LK-XXXX), monitors ongoing compliance, and reports data to the
                International Plant Protection Convention (IPPC). Each registered facility is subject to
                periodic inspection of its heat treatment chamber, temperature monitoring equipment, and
                stamping process.
              </p>
              <p className="font-body text-sm text-charcoal/70 leading-relaxed">
                CeyPall is a registered ISPM 15 heat treatment provider under NPQS code{' '}
                <strong>LK-0175</strong>. Every pallet we supply carries this code as part of the IPPC
                stamp.
              </p>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding cream-texture">
        <div className="container-content">
          <FadeUp>
            <SectionHeader
              eyebrow="Common questions"
              title="ISPM 15 certification FAQ."
            />
          </FadeUp>

          <FadeUp delay={0.1}>
            <div className="mt-10 max-w-2xl space-y-8">
              {faqs.map((faq) => (
                <div key={faq.question} className="border-b border-warm-gray pb-6">
                  <h3 className="font-display text-base font-semibold text-primary mb-3">
                    {faq.question}
                  </h3>
                  <p className="font-body text-sm text-charcoal/70 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Related */}
      <RelatedLinks
        links={[
          { href: '/heat-treated-pallets', title: 'Heat Treated Pallets', description: 'ISPM 15 heat treatment to 56°C, IPPC-stamped and export-ready.' },
          { href: '/blog/what-is-ispm-15', title: 'What is ISPM 15?', description: 'A shorter primer on the ISPM 15 standard for exporters.' },
          { href: '/blog/how-to-read-ippc-stamp', title: 'How to Read an IPPC Stamp', description: 'A visual walkthrough of the IPPC mark, element by element.' },
          { href: '/blog/why-sri-lankan-exporters-need-ippc-certified-pallets', title: 'Why exporters need IPPC pallets', description: 'The compliance and cost consequences of untreated pallets.' },
        ]}
      />

      {/* CTA */}
      <section className="bg-accent py-16">
        <div className="container-content flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-display text-2xl text-white">Need ISPM 15 certified pallets?</h3>
            <p className="font-body text-sm text-white/80 mt-1">
              NPQS-registered provider LK-0175. Every pallet stamped, every order documented.
            </p>
          </div>
          <Button href="/contact" variant="outline-light" size="lg">
            Request a quote →
          </Button>
        </div>
      </section>
    </>
  )
}
