import { requireStoreEnabled } from '@/core/lib/store-server'
import type { Metadata } from 'next'
import type { ReactNode } from 'react'

export const metadata: Metadata = { robots: { index: false, follow: false } }

export default function TransactionLayout({ children }: { children: ReactNode }) {
  requireStoreEnabled()

  return children
}
