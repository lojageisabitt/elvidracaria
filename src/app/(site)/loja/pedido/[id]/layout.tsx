import { requireStoreEnabled } from '@/core/lib/store-server'
import type { ReactNode } from 'react'
import { redirect } from 'next/navigation'
import { canAccessOrder } from '@/core/lib/order-access'

export default async function OrderLayout({ children, params }: { children: ReactNode; params: Promise<{ id: string }> }) {
  requireStoreEnabled()

  const { id } = await params
  if (!await canAccessOrder(id)) redirect('/loja/meus-pedidos')
  return children
}
