import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const WWW_HOST = 'www.ceypall.com'
const BASE = `https://${WWW_HOST}`

export function middleware(request: NextRequest) {
  const host = request.headers.get('host')?.split(':')[0] ?? ''
  const { pathname, search } = request.nextUrl

  if (host === 'ceypall.com') {
    return NextResponse.redirect(`${BASE}${pathname}${search}`, 308)
  }

  const response = NextResponse.next()

  const canonical = pathname === '/' ? BASE : `${BASE}${pathname}`
  response.headers.set(
    'Link',
    `<${canonical}>; rel="alternate"; hreflang="en-LK", <${canonical}>; rel="alternate"; hreflang="x-default"`,
  )

  return response
}

export const config = {
  matcher: '/((?!_next/static|_next/image|api/|favicon\\.ico|favicon\\.png|apple-touch-icon\\.png|.*\\.(?:svg|png|jpg|jpeg|gif|webp|avif|ico|css|js|woff2?|xml|txt|webmanifest)).*)',
}
