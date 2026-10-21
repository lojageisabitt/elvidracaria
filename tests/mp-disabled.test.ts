import test, { after } from 'node:test'
import assert from 'node:assert/strict'
import { NextRequest } from 'next/server'
import { prisma } from '../src/core/lib/prisma'
import { oauthReady, checkoutReady } from '../src/core/lib/mp/security'
import { startOAuth } from '../src/core/lib/mp/oauth'
if (process.env.UPNODE_MP_ISOLATED_TEST !== 'yes' || new URL(process.env.DATABASE_URL!).hostname !== '127.0.0.1') throw Error('Isolated test only')
after(() => prisma.$disconnect())
test('Loja desativada mantém OAuth e pagamentos indisponíveis mesmo com variáveis preenchidas', async () => {
 assert.equal(oauthReady(), false); assert.equal(checkoutReady(), false)
 await assert.rejects(startOAuth(new Request('http://localhost:3219/api/mercado-pago/oauth/start')))
})
test('APIs Mercado Pago bloqueiam antes de ler corpo ou persistir pagamento/webhook', async () => {
 const {default:Module}=await import('node:module')
 const load=(Module as any)._load
 ;(Module as any)._load=function(id:string,...args:unknown[]){if(id==='next/navigation')return {redirect(){throw Error('Unexpected redirect')}};return load.call(this,id,...args)}
 let POST:typeof import('../src/app/api/mercado-pago/[...path]/route').POST, webhook:typeof import('../src/app/api/mercado-pago/webhook/route').POST
 try{POST=(await import('../src/app/api/mercado-pago/[...path]/route')).POST;webhook=(await import('../src/app/api/mercado-pago/webhook/route')).POST}finally{(Module as any)._load=load}
 for (const [url, handler] of [['payment', POST], ['webhook', webhook]] as const) {
  const r=await handler(new NextRequest('http://localhost:3219/api/mercado-pago/'+url, {method:'POST',body:'{invalid'}))
  assert.equal(r.status,404)
 }
 assert.equal(await prisma.mercadoPagoPayment.count(),0)
 assert.equal(await prisma.upnodeCommissionEntry.count(),0)
 assert.equal(await prisma.mercadoPagoWebhookEvent.count(),0)
})
