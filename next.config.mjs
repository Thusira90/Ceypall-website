/** @type {import('next').NextConfig} */

// On Vercel, preview and development deployments build with
// NODE_ENV === 'production' just like the real site, so they would otherwise be
// crawlable and could enter the index. VERCEL_ENV is 'production' only for the
// production deployment; every other build (preview/development) gets a
// blanket noindex header so preview URLs never rank or attract crawler traffic.
const isProductionDeploy = process.env.VERCEL_ENV === 'production'

const nextConfig = {
  trailingSlash: false,
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
        source: '/:path*',
        has: [{ type: 'host', value: 'ceypall.com' }],
        destination: 'https://www.ceypall.com/:path*',
        permanent: true,
      },
      // Old image filenames (spaces/capitals) → lowercase-hyphenated.
      {
        source: '/Euro%20Pallet.jpg',
        destination: '/euro-pallet.jpg',
        permanent: true,
      },
      {
        source: '/Euro%20Pallet2.jpg',
        destination: '/euro-pallet2.jpg',
        permanent: true,
      },
      {
        source: '/HT%20logo.png',
        destination: '/ht-logo.png',
        permanent: true,
      },
      {
        source: '/HT%20Pallet%2002.jpg',
        destination: '/ht-pallet-02.jpg',
        permanent: true,
      },
      {
        source: '/HT%20Pallet%2004.jpg',
        destination: '/ht-pallet-04.jpg',
        permanent: true,
      },
      {
        source: '/HT%20Pallet%2007.png',
        destination: '/ht-pallet-07.png',
        permanent: true,
      },
      {
        source: '/HT%20PALLET%2012.PNG',
        destination: '/ht-pallet-12.png',
        permanent: true,
      },
      {
        source: '/HT%20PALLET%20CHAMBER.JPG',
        destination: '/ht-pallet-chamber.jpg',
        permanent: true,
      },
      {
        source: '/HT%20PALLET%20TRANSPORT.jpg',
        destination: '/ht-pallet-transport.jpg',
        permanent: true,
      },
      {
        source: '/IMG_4627.png',
        destination: '/img-4627.png',
        permanent: true,
      },
      {
        source: '/OPENGIMAGE.jpg',
        destination: '/opengimage.jpg',
        permanent: true,
      },
      {
        source: '/Storage.png',
        destination: '/storage.png',
        permanent: true,
      },
      {
        source: '/ispm15-pallets-sri-lanka',
        destination: '/heat-treated-pallets',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
