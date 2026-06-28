/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
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
