import { requireStoreEnabled } from '@/core/lib/store-server'
import { redirect } from 'next/navigation'

export default function CartPage() {
  requireStoreEnabled()

  redirect('/loja/carrinho')
}
