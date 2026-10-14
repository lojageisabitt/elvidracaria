import type { ReactNode } from 'react'
import { requireStoreEnabled } from '@/core/lib/store-server'

export default function ClientsLayout({ children }: { children: ReactNode }) {
  requireStoreEnabled()
  return children
}
