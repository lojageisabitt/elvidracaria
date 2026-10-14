import 'server-only'
import { notFound } from 'next/navigation'
import { NextResponse } from 'next/server'
import { isStoreEnabled } from './store'

export function requireStoreEnabled(): void {
  if (!isStoreEnabled()) notFound()
}

// Called before body parsing, database queries or payment-provider requests.
export function disabledStoreResponse(): NextResponse | null {
  return isStoreEnabled() ? null : NextResponse.json(
    { error: 'Módulo de loja indisponível.' },
    { status: 404, headers: { 'Cache-Control': 'no-store', 'X-Robots-Tag': 'noindex' } },
  )
}
