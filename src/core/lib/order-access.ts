import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'
import jwt from 'jsonwebtoken'
import { verifyAuthToken } from '@/core/lib/session'

const cookieName = 'order_access'
const maxAge = 60 * 60 * 24

export async function isOrderAdmin(): Promise<boolean> {
  const token = (await cookies()).get('auth_token')?.value
  return !!token && verifyAuthToken(token)?.role === 'admin'
}

async function grantedOrders(): Promise<string[]> {
  const token = (await cookies()).get(cookieName)?.value
  if (!token) return []
  try {
    const payload = jwt.verify(token, process.env.AUTH_JWT_SECRET!, { audience: 'order-access', algorithms: ['HS256'] })
    if (typeof payload === 'string' || !Array.isArray(payload.orders)) return []
    return payload.orders.filter((id: unknown): id is string => typeof id === 'string')
  } catch { return [] }
}

export async function canAccessOrder(id: string): Promise<boolean> {
  return await isOrderAdmin() || (await grantedOrders()).includes(id)
}

export async function grantOrderAccess(response: NextResponse, ids: string[], replace = false) {
  const orders = [...new Set([...(replace ? [] : await grantedOrders()), ...ids])].slice(-50)
  const token = jwt.sign({ orders }, process.env.AUTH_JWT_SECRET!, { audience: 'order-access', expiresIn: maxAge, algorithm: 'HS256' })
  response.cookies.set(cookieName, token, { httpOnly: true, secure: process.env.NODE_ENV === 'production', sameSite: 'lax', path: '/', maxAge })
  response.headers.set('Cache-Control', 'private, no-store')
  return response
}
