import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Force apex ceypall.com → www.ceypall.com so Google consolidates ranking
// signals on the canonical host. GSC was splitting ~17% of clicks onto the
// non-www hostname before this ran.
export function middleware(request: NextRequest) {
  const host = request.headers.get('host') || ''
  if (host === 'ceypall.com') {
    const url = new URL(request.url)
    url.host = 'www.ceypall.com'
    url.protocol = 'https:'
    return NextResponse.redirect(url, 308)
  }
  return NextResponse.next()
}

export const config = {
  matcher: [
    // Run on every path except Next internals and static assets.
    '/((?!_next/|_static/|favicon.ico|robots.txt|sitemap.xml).*)',
  ],
}
