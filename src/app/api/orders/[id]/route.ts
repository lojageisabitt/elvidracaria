import { disabledStoreResponse } from '@/core/lib/store-server'
import { canAccessOrder, isOrderAdmin } from '@/core/lib/order-access'
import { NextResponse } from 'next/server'
import { prisma } from '@/core/lib/prisma'

export async function GET(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const disabled = disabledStoreResponse()
  if (disabled) return disabled

  const { id } = await params

  if (!await canAccessOrder(id)) return NextResponse.json({ error: 'Pedido não encontrado' }, { status: 404 })

  if (!id) {
    return NextResponse.json({ error: 'ID não enviado' }, { status: 400 })
  }

  const order = await prisma.order.findUnique({
    where: { id },
    include: { items: true },
  })

  if (!order) {
    return NextResponse.json({ error: 'Pedido não encontrado' }, { status: 404 })
  }

  return NextResponse.json(order, { headers: { 'Cache-Control': 'private, no-store' } })
}

export async function PATCH(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const disabled = disabledStoreResponse()
  if (disabled) return disabled

  const { id } = await params

  if (!await canAccessOrder(id)) return NextResponse.json({ error: 'Pedido não encontrado' }, { status: 404 })

  if (!id) {
    return NextResponse.json({ error: 'ID não enviado' }, { status: 400 })
  }

  try {
    const body = await req.json()

    const order = await prisma.order.update({
      where: { id },
      data: await isOrderAdmin() ? body : { customerId: typeof body.customerId === 'string' ? body.customerId : undefined },
      include: { items: true },
    })

    return NextResponse.json(order, { headers: { 'Cache-Control': 'private, no-store' } })
  } catch (error: any) {
    console.error('Erro ao atualizar pedido:', error)
    return NextResponse.json({ error: 'Erro ao atualizar pedido' }, { status: 500 })
  }
}