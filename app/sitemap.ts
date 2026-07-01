import type { MetadataRoute } from 'next'
import { getAllBlogPosts } from '@/lib/blog'

const BASE = 'https://www.ceypall.com'

// Static pages — update lastModified whenever the page content changes.
const staticRoutes: MetadataRoute.Sitemap = [
  { url: BASE,                                               lastModified: new Date('2026-05-19'), changeFrequency: 'monthly', priority: 1.0 },
  { url: `${BASE}/export-pallet-manufacturer-sri-lanka`,     lastModified: new Date('2026-05-20'), changeFrequency: 'monthly', priority: 1.0 },
  { url: `${BASE}/products`,                                 lastModified: new Date('2026-05-19'), changeFrequency: 'monthly', priority: 0.9 },
  { url: `${BASE}/heat-treated-pallets`,                     lastModified: new Date('2026-05-20'), changeFrequency: 'monthly', priority: 0.9 },
  { url: `${BASE}/contact`,                                  lastModified: new Date('2026-05-19'), changeFrequency: 'yearly',  priority: 0.8 },
  { url: `${BASE}/how-it-works`,                             lastModified: new Date('2026-05-19'), changeFrequency: 'monthly', priority: 0.8 },
  { url: `${BASE}/pallet-pricing-sri-lanka`,                 lastModified: new Date('2026-05-20'), changeFrequency: 'monthly', priority: 0.8 },
  { url: `${BASE}/wooden-pallets-sri-lanka`,                 lastModified: new Date('2026-05-20'), changeFrequency: 'monthly', priority: 0.8 },
  { url: `${BASE}/wooden-pallets-colombo`,                   lastModified: new Date('2026-05-20'), changeFrequency: 'monthly', priority: 0.7 },
  { url: `${BASE}/wooden-pallets-katunayake`,                lastModified: new Date('2026-05-20'), changeFrequency: 'monthly', priority: 0.7 },
  { url: `${BASE}/wooden-pallets-negombo`,                   lastModified: new Date('2026-05-20'), changeFrequency: 'monthly', priority: 0.7 },
  { url: `${BASE}/clients`,                                  lastModified: new Date('2026-05-19'), changeFrequency: 'monthly', priority: 0.7 },
  { url: `${BASE}/about`,                                    lastModified: new Date('2026-05-19'), changeFrequency: 'yearly',  priority: 0.6 },
  { url: `${BASE}/container-pallet-calculator`,              lastModified: new Date('2026-06-30'), changeFrequency: 'yearly',  priority: 0.7 },
  { url: `${BASE}/knowledge-centre`,                         lastModified: new Date('2026-07-01'), changeFrequency: 'weekly',  priority: 0.8 },
]

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllBlogPosts()

  const blogRoutes: MetadataRoute.Sitemap = [
    // Blog index — lastModified reflects newest post date
    { url: `${BASE}/blog`, lastModified: posts[0] ? new Date(posts[0].date) : new Date('2026-05-20'), changeFrequency: 'weekly', priority: 0.7 },
    // Individual posts
    ...posts.map((post) => ({
      url: `${BASE}/blog/${post.slug}`,
      lastModified: new Date(post.date),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    })),
  ]

  return [...staticRoutes, ...blogRoutes]
}
