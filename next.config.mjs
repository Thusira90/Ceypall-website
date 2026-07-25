/** @type {import('next').NextConfig} */

// On Vercel, preview and development deployments build with
// NODE_ENV === 'production' just like the real site, so they would otherwise be
// crawlable and could enter the index. VERCEL_ENV is 'production' only for the
// production deployment; every other build (preview/development) gets a
// blanket noindex header so preview URLs never rank or attract crawler traffic.
const isProductionDeploy = process.env.VERCEL_ENV === 'production'

const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  async headers() {
    if (isProductionDeploy) return []
    return [
      {
        source: '/:path*',
        headers: [{ key: 'X-Robots-Tag', value: 'noindex, nofollow' }],
      },
    ]
  },
  async redirects() {
    return [
      {
        source: '/ispm15-pallets-sri-lanka',
        destination: '/heat-treated-pallets',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
