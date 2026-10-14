import { requireStoreEnabled } from '@/core/lib/store-server'
import { redirect } from 'next/navigation'

export default async function OrderPage({ params }: { params: Promise<{ orderId: string }> }) {
  requireStoreEnabled()

  const { orderId } = await params
  redirect('/loja/pedido/' + encodeURIComponent(orderId))
}
