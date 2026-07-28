// IndexNow submitter — pings the IndexNow API (Bing, Yandex, and other
// participating engines) so changed URLs get discovered in minutes instead of
// waiting for the next organic crawl.
//
// Zero dependencies (Node 20+ global fetch). By default it submits every URL
// in the live sitemap; pass specific paths/URLs as arguments to submit just
// those.
//
// Usage:
//   node scripts/indexnow.mjs                      # submit all sitemap URLs
//   node scripts/indexnow.mjs /products /about     # submit only these paths
//   node scripts/indexnow.mjs https://www.ceypall.com/products
//
// The key file must be reachable at KEY_LOCATION (public/<key>.txt is deployed
// to the site root). If you rotate the key, update KEY + rename the public file.

const KEY = '4a4d73542846d9d18f78b45754f3e8dc'
const HOST = 'www.ceypall.com'
const ORIGIN = `https://${HOST}`
const KEY_LOCATION = `${ORIGIN}/${KEY}.txt`
const ENDPOINT = 'https://api.indexnow.org/indexnow'

async function sitemapUrls() {
  const res = await fetch(`${ORIGIN}/sitemap.xml`)
  if (!res.ok) throw new Error(`sitemap.xml returned ${res.status}`)
  const body = await res.text()
  const locs = [...body.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].trim())
  if (locs.length === 0) throw new Error('sitemap.xml contained no <loc> entries')
  return locs
}

// Normalise an argument (path or full URL) to an absolute production URL.
function toUrl(arg) {
  if (/^https?:\/\//i.test(arg)) return arg
  return `${ORIGIN}/${arg.replace(/^\//, '')}`
}

async function main() {
  const args = process.argv.slice(2)
  const urlList = args.length ? args.map(toUrl) : await sitemapUrls()

  console.log(`Submitting ${urlList.length} URL(s) to IndexNow via ${ENDPOINT}`)
  urlList.forEach((u) => console.log(`  • ${u}`))

  const res = await fetch(ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify({ host: HOST, key: KEY, keyLocation: KEY_LOCATION, urlList }),
  })

  // IndexNow returns 200 (accepted) or 202 (accepted, pending validation).
  const text = await res.text().catch(() => '')
  if (res.status === 200 || res.status === 202) {
    console.log(`\n✅ IndexNow accepted the submission (HTTP ${res.status}).`)
  } else {
    console.error(`\n❌ IndexNow returned HTTP ${res.status}. ${text}`)
    if (res.status === 403) {
      console.error(`   403 usually means the key file at ${KEY_LOCATION} is not yet live — deploy first, then retry.`)
    }
    process.exit(1)
  }
}

main().catch((e) => {
  console.error('IndexNow submit failed:', e.message)
  process.exit(1)
})
