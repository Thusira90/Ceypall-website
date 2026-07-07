// Single source of truth for the site's editorial author. Used to build the
// Person `author` in Article JSON-LD and the on-page byline/bio, so E-E-A-T
// signals stay consistent everywhere. Update the copy here to change it site-wide.

export const author = {
  honorific: 'Mr.',
  name: 'Thusira Ranasinghe',
  jobTitle: 'Founder & Managing Director',
  // Stable identifier for this Person entity across the site's structured data.
  id: 'https://www.ceypall.com/#author-thusira',
  url: 'https://www.ceypall.com/about',
  bio: 'Mr. Thusira Ranasinghe is the founder of CeyPall (Pvt) Ltd, Sri Lanka’s dedicated ISPM 15-certified export pallet manufacturer, established in 2005. He oversees the company’s heat treatment and IPPC certification process at its Kochchikade facility and works directly with tea, apparel, coconut, and rubber exporters on export-compliant pallet supply.',
} as const

/** Full display name including honorific, e.g. "Mr. Thusira Ranasinghe". */
export const authorDisplayName = `${author.honorific} ${author.name}`

/** Person JSON-LD node for use as an Article `author`. */
export const authorJsonLd = {
  '@type': 'Person',
  '@id': author.id,
  name: author.name,
  honorificPrefix: author.honorific,
  jobTitle: author.jobTitle,
  url: author.url,
  worksFor: { '@id': 'https://www.ceypall.com/#organization' },
} as const
