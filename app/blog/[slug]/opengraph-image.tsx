import { ImageResponse } from 'next/og'
import { getBlogPost } from '@/lib/blog'

export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image({ params }: { params: { slug: string } }) {
  const post = getBlogPost(params.slug)

  return new ImageResponse(
    (
      <div
        style={{
          background: '#1a2e1a',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          padding: '60px',
        }}
      >
        <div
          style={{
            color: '#c8a84b',
            fontSize: '18px',
            marginBottom: '20px',
            fontFamily: 'sans-serif',
          }}
        >
          CeyPall (Pvt) Ltd · ISPM 15 Certified Wooden Pallets · Sri Lanka
        </div>
        <div
          style={{
            color: '#ffffff',
            fontSize: '52px',
            fontFamily: 'sans-serif',
            fontWeight: 'bold',
            lineHeight: 1.2,
            maxWidth: '900px',
          }}
        >
          {post?.title ?? 'CeyPall Blog'}
        </div>
        <div
          style={{
            color: '#a0a0a0',
            fontSize: '22px',
            fontFamily: 'sans-serif',
            marginTop: '24px',
            maxWidth: '800px',
          }}
        >
          {post?.description ?? ''}
        </div>
      </div>
    ),
    size
  )
}
