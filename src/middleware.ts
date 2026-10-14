import { jwtVerify } from 'jose'
// src/middleware.ts

import { NextResponse, type NextRequest } from 'next/server'

const PUBLIC_PATHS = [
  '/admin/login',
  '/admin/setup-admin',
  '/api/auth/login',
  '/api/auth/logout'
]

const AUTH_COOKIE_NAME = 'auth_token'

function redirectToLogin(req: NextRequest) {
  const url = req.nextUrl.clone()
  url.pathname = '/admin/login'
  url.search = ''
  return NextResponse.redirect(url)
}

export async function middleware(req: NextRequest) {
  const pathname = req.nextUrl.pathname

  // libera tudo fora do admin/api admin
  if (!pathname.startsWith('/admin') && !pathname.startsWith('/api/admin')) {
    return NextResponse.next()
  }

  // libera rotas públicas
  if (PUBLIC_PATHS.includes(pathname)) {
    return NextResponse.next()
  }

  const token = req.cookies.get(AUTH_COOKIE_NAME)?.value
  const secret = process.env.AUTH_JWT_SECRET
  if (!token || !secret) return redirectToLogin(req)

  try {
    const { payload } = await jwtVerify(token, new TextEncoder().encode(secret), { algorithms: ['HS256'] })
    if (payload.role !== 'admin') return redirectToLogin(req)
  } catch {
    return redirectToLogin(req)
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/admin/:path*', '/api/admin/:path*']
}