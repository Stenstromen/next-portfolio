/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextRequest, NextResponse } from 'next/server'

export const config = {
  matcher: '/:path*',
}
 
export function middleware(request: NextRequest) {
  const nonce = Buffer.from(crypto.randomUUID()).toString('base64')
  const cspHeader = `
    default-src 'self';
    connect-src 'self' https://keys.openpgp.org https://www.google-analytics.com https://*.google-analytics.com https://*.analytics.google.com https://region1.google-analytics.com;
    script-src 'self' 'nonce-${nonce}' https://www.googletagmanager.com https://*.cloudflare.com https://*.cloudflareinsights.com https://stenstromen.se;
    style-src 'self' 'nonce-${nonce}';
    style-src-attr 'self' 'nonce-${nonce}';
    img-src 'self' blob: data: 'nonce-${nonce}' https://*.google-analytics.com https://*.googletagmanager.com;
    font-src 'self' data:;
    object-src 'none';
    base-uri 'self';
    form-action 'self';
    frame-ancestors 'none';
    upgrade-insecure-requests;
`
  const contentSecurityPolicyHeaderValue = cspHeader
    .replace(/\s{2,}/g, ' ')
    .trim()
 
  const response = NextResponse.next()
  
  // Add security headers
  response.headers.set('X-Frame-Options', 'DENY')
  response.headers.set('X-Content-Type-Options', 'nosniff')
  response.headers.set('Referrer-Policy', 'same-origin')
  
  // Set both the nonce and CSP headers on the response
  response.headers.set('x-nonce', nonce)
  response.headers.set(
    'Content-Security-Policy',
    contentSecurityPolicyHeaderValue
  )
 
  return response
}