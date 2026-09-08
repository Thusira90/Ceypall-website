import type { MetadataRoute } from 'next'
import { execSync } from 'node:child_process'
import fs from 'node:fs'
import path from 'node:path'
import { getAllBlogPosts } from '@/lib/blog'

const BASE = 'https://www.ceypall.com'

// Resolve each URL path to the on-disk source file that owns it, then read
// that file's most recent git-commit date. Runs at build time. Git is present
// in every deployment path this project uses (Vercel checks the repo out
// before running `next build`); if git isn't available for any reason the
// helper falls back to the file's mtime, then to today's date.
function sourceFileFor(urlPath: string): string | null {
  const rel = urlPath.replace(BASE, '').replace(/^\//, '')
  const cwd = process.cwd()
  const candidates = rel
    ? [
        `app/${rel}/page.tsx`,
        `app/${rel}/page.mdx`,
        `app/${rel}/page.jsx`,
        `app/${rel}/page.ts`,
      ]
    : ['app/page.tsx', 'app/page.mdx']
  for (const c of candidates) {
    const abs = path.join(cwd, c)
    if (fs.existsSync(abs)) return abs
  }
  return null
}

const gitDateCache = new Map<string, Date>()

function lastModifiedFor(urlPath: string): Date {
  const src = sourceFileFor(urlPath)
  if (!src) return new Date()
  if (gitDateCache.has(src)) return gitDateCache.get(src)!
  try {
    const iso = execSync(`git log -1 --format=%cI -- "${src}"`, {
      encoding: 'utf-8',
      stdio: ['pipe', 'pipe', 'ignore'],
    }).trim()
    if (iso) {
      const d = new Date(iso)
      gitDateCache.set(src, d)
      return d
    }
  } catch {}
  try {
    const d = fs.statSync(src).mtime
    gitDateCache.set(src, d)
    return d
  } catch {}
  return new Date()
}

const staticRoutes: Array<{
  path: string
  changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency']
  priority: number
}> = [
  { path: '',                                          changeFrequency: 'monthly', priority: 1.0 },
  { path: '/export-pallet-manufacturer-sri-lanka',     changeFrequency: 'monthly', priority: 1.0 },
  { path: '/products',                                 changeFrequency: 'monthly', priority: 0.9 },
  { path: '/heat-treated-pallets',                     changeFrequency: 'monthly', priority: 0.9 },
  { path: '/contact',                                  changeFrequency: 'yearly',  priority: 0.8 },
  { path: '/how-it-works',                             changeFrequency: 'monthly', priority: 0.8 },
  { path: '/pallet-pricing-sri-lanka',                 changeFrequency: 'monthly', priority: 0.8 },
  { path: '/wooden-pallets-sri-lanka',                 changeFrequency: 'monthly', priority: 0.8 },
  { path: '/euro-pallets-sri-lanka',                   changeFrequency: 'monthly', priority: 0.8 },
  { path: '/custom-wooden-pallets-sri-lanka',          changeFrequency: 'monthly', priority: 0.8 },
  { path: '/industrial-pallets-sri-lanka',             changeFrequency: 'monthly', priority: 0.8 },
  { path: '/wooden-pallets-colombo',                   changeFrequency: 'monthly', priority: 0.7 },
  { path: '/wooden-pallets-katunayake',                changeFrequency: 'monthly', priority: 0.7 },
  { path: '/wooden-pallets-negombo',                   changeFrequency: 'monthly', priority: 0.7 },
  { path: '/clients',                                  changeFrequency: 'monthly', priority: 0.7 },
  { path: '/about',                                    changeFrequency: 'yearly',  priority: 0.6 },
  { path: '/container-pallet-calculator',              changeFrequency: 'yearly',  priority: 0.7 },
  { path: '/wooden-vs-plastic-pallets-sri-lanka',      changeFrequency: 'monthly', priority: 0.8 },
  { path: '/knowledge-centre',                         changeFrequency: 'weekly',  priority: 0.8 },
  { path: '/case-studies',                             changeFrequency: 'monthly', priority: 0.7 },
  { path: '/moisture-content-calculator',              changeFrequency: 'yearly',  priority: 0.7 },
  { path: '/pallets-for-tea-export',                   changeFrequency: 'monthly', priority: 0.8 },
  { path: '/pallets-for-apparel-export',               changeFrequency: 'monthly', priority: 0.8 },
  { path: '/pallets-for-coconut-export',               changeFrequency: 'monthly', priority: 0.8 },
  { path: '/pallets-for-rubber-export',                changeFrequency: 'monthly', priority: 0.8 },
  { path: '/pallets-for-spice-export',                 changeFrequency: 'monthly', priority: 0.8 },
  { path: '/food-grade-pallets-sri-lanka',             changeFrequency: 'monthly', priority: 0.8 },
  { path: '/ispm-15-certification-sri-lanka',          changeFrequency: 'monthly', priority: 0.9 },
  { path: '/wholesale-pallets-sri-lanka',              changeFrequency: 'monthly', priority: 0.8 },
  { path: '/pallet-supplier-sri-lanka',                changeFrequency: 'monthly', priority: 0.9 },
  { path: '/heavy-duty-pallets-sri-lanka',             changeFrequency: 'monthly', priority: 0.8 },
  { path: '/pallet-load-capacity',                     changeFrequency: 'monthly', priority: 0.8 },
  { path: '/wooden-pallets-biyagama',                  changeFrequency: 'monthly', priority: 0.7 },
  { path: '/wooden-pallets-wattala',                   changeFrequency: 'monthly', priority: 0.7 },
  { path: '/wooden-pallets-peliyagoda',                changeFrequency: 'monthly', priority: 0.7 },
  { path: '/wooden-pallets-ja-ela',                    changeFrequency: 'monthly', priority: 0.7 },
  { path: '/wooden-pallets-kelaniya',                  changeFrequency: 'monthly', priority: 0.7 },
  { path: '/wooden-pallets-ratmalana',                 changeFrequency: 'monthly', priority: 0.7 },
  { path: '/wooden-pallets-kandy',                     changeFrequency: 'monthly', priority: 0.7 },
  { path: '/wooden-pallets-galle',                     changeFrequency: 'monthly', priority: 0.7 },
  { path: '/pallet-terminology-glossary',              changeFrequency: 'monthly', priority: 0.8 },
  { path: '/pallets-for-seafood-export',               changeFrequency: 'monthly', priority: 0.8 },
  { path: '/pallets-for-machinery-export',             changeFrequency: 'monthly', priority: 0.8 },
  { path: '/pallets-for-pharmaceutical-export',        changeFrequency: 'monthly', priority: 0.8 },
  { path: '/pallet-specification-calculator',          changeFrequency: 'yearly',  priority: 0.7 },
]

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllBlogPosts()

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map(({ path: p, changeFrequency, priority }) => ({
    url: `${BASE}${p}`,
    lastModified: lastModifiedFor(`${BASE}${p}`),
    changeFrequency,
    priority,
  }))

  const blogRoutes: MetadataRoute.Sitemap = [
    { url: `${BASE}/blog`, lastModified: posts[0] ? new Date(posts[0].date) : new Date(), changeFrequency: 'weekly', priority: 0.7 },
    ...posts.map((post) => ({
      url: `${BASE}/blog/${post.slug}`,
      lastModified: new Date(post.lastUpdated ?? post.date),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    })),
  ]

  return [...staticEntries, ...blogRoutes]
}
