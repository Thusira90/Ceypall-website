// SEO audit — crawls the running site and validates the on-page SEO
// fundamentals that break silently: canonical tags, titles, meta
// descriptions, a single H1, valid JSON-LD, and internal links that 404.
//
// Zero dependencies (Node 20+ global fetch). Reads every URL from the
// live /sitemap.xml, fetches each page, and reports ERRORS (fail the
// build) and WARNINGS (surface but don't block).
//
// Usage: BASE_URL=http://localhost:3000 node scripts/seo-audit.mjs

const BASE = (process.env.BASE_URL || 'http://localhost:3000').replace(/\/$/, '')
const PROD_ORIGIN = 'https://www.ceypall.com'

const errors = []
const warnings = []
const err = (page, msg) => errors.push(`${page} — ${msg}`)
const warn = (page, msg) => warnings.push(`${page} — ${msg}`)

async function getText(url) {
  const res = await fetch(url, { redirect: 'manual' })
  const body = await res.text()
  return { status: res.status, body }
}

// Pull all <loc> values out of the sitemap.
async function getSitemapUrls() {
  const { status, body } = await getText(`${BASE}/sitemap.xml`)
  if (status !== 200) throw new Error(`sitemap.xml returned ${status}`)
  const locs = [...body.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].trim())
  if (locs.length === 0) throw new Error('sitemap.xml contained no <loc> entries')
  // Map production origin -> local base so we can crawl the running server.
  return locs.map((u) => u.replace(PROD_ORIGIN, BASE))
}

function checkPage(prodUrl, localUrl, body) {
  // Canonical — exactly one, pointing at the production URL of THIS page.
  const canonicals = [...body.matchAll(/<link[^>]+rel=["']canonical["'][^>]*>/gi)]
  if (canonicals.length === 0) {
    err(prodUrl, 'missing canonical tag')
  } else if (canonicals.length > 1) {
    err(prodUrl, `${canonicals.length} canonical tags (must be exactly 1)`)
  } else {
    const href = canonicals[0][0].match(/href=["']([^"']+)["']/i)?.[1]
    const expected = prodUrl.replace(/\/$/, '')
    if (!href) {
      err(prodUrl, 'canonical tag has no href')
    } else if (href.replace(/\/$/, '') !== expected) {
      err(prodUrl, `canonical points to "${href}" but should be "${prodUrl}"`)
    }
  }

  // Title — present and a sane length.
  const title = body.match(/<title[^>]*>([^<]*)<\/title>/i)?.[1]?.trim()
  if (!title) err(prodUrl, 'missing <title>')
  else if (title.length < 10) warn(prodUrl, `title very short (${title.length} chars): "${title}"`)
  else if (title.length > 70) warn(prodUrl, `title long (${title.length} chars, may truncate in SERP)`)

  // Meta description — present and a sane length.
  const desc = body
    .match(/<meta[^>]+name=["']description["'][^>]*>/i)?.[0]
    ?.match(/content=["']([^"']*)["']/i)?.[1]
    ?.trim()
  if (!desc) err(prodUrl, 'missing meta description')
  else if (desc.length < 50) warn(prodUrl, `meta description short (${desc.length} chars)`)
  else if (desc.length > 175) warn(prodUrl, `meta description long (${desc.length} chars)`)

  // Exactly one H1.
  const h1s = [...body.matchAll(/<h1[\s>]/gi)]
  if (h1s.length === 0) err(prodUrl, 'no <h1> on page')
  else if (h1s.length > 1) warn(prodUrl, `${h1s.length} <h1> tags (should be 1)`)

  // JSON-LD structured data — at least one block, and every block must parse.
  const ldBlocks = [...body.matchAll(/<script[^>]+type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)]
  if (ldBlocks.length === 0) {
    warn(prodUrl, 'no JSON-LD structured data')
  } else {
    ldBlocks.forEach((m, i) => {
      try {
        JSON.parse(m[1].trim())
      } catch {
        err(prodUrl, `JSON-LD block #${i + 1} is invalid JSON`)
      }
    })
  }

  // Collect internal links for the broken-link pass.
  return [...body.matchAll(/href=["'](\/[^"'#?]*)["']/gi)]
    .map((m) => m[1])
    .filter((h) => !h.startsWith('//'))
}

async function main() {
  console.log(`SEO audit against ${BASE}\n`)
  const urls = await getSitemapUrls()
  console.log(`Found ${urls.length} URLs in sitemap.\n`)

  const internalLinks = new Set()

  for (const localUrl of urls) {
    const prodUrl = localUrl.replace(BASE, PROD_ORIGIN)
    const { status, body } = await getText(localUrl)
    if (status !== 200) {
      err(prodUrl, `returned HTTP ${status} (in sitemap but not reachable)`)
      continue
    }
    const links = checkPage(prodUrl, localUrl, body)
    links.forEach((l) => internalLinks.add(l.replace(/\/$/, '') || '/'))
  }

  // Broken internal link scan. Navigable page links must return 200
  // (hard error). Static assets (favicon/images/etc.) only warn, since
  // an asset hiccup is cosmetic, not an SEO ranking issue — and Next's
  // dev server is known to 500 on public/favicon.ico.
  const isAsset = (p) => /\.(ico|png|jpe?g|svg|gif|webp|avif|txt|xml|pdf|css|js|woff2?)$/i.test(p)
  console.log(`Checking ${internalLinks.size} unique internal links...\n`)
  for (const path of internalLinks) {
    const { status } = await getText(`${BASE}${path}`)
    if (status >= 400) {
      if (isAsset(path)) warn('asset-link', `${path} → HTTP ${status}`)
      else err('internal-link', `${path} → HTTP ${status}`)
    }
  }

  // Report.
  if (warnings.length) {
    console.log(`⚠️  ${warnings.length} warning(s):`)
    warnings.forEach((w) => console.log(`   - ${w}`))
    console.log('')
  }
  if (errors.length) {
    console.log(`❌ ${errors.length} error(s):`)
    errors.forEach((e) => console.log(`   - ${e}`))
    console.log('\nSEO audit FAILED.')
    process.exit(1)
  }
  console.log('✅ SEO audit passed — no blocking issues.')
}

main().catch((e) => {
  console.error('SEO audit crashed:', e.message)
  process.exit(1)
})
