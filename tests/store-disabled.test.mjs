import test from 'node:test'
import assert from 'node:assert/strict'
import jwt from 'jsonwebtoken'
import nextEnv from '@next/env'

nextEnv.loadEnvConfig(process.cwd())
const base = process.env.SEO_TEST_URL || 'http://127.0.0.1:3100'
const missing = 'store-disabled-test-nonexistent'
const adminToken = jwt.sign({ id: 'store-disabled-test', email: 'test@example.invalid', role: 'admin' }, process.env.AUTH_JWT_SECRET, { expiresIn: '5m', algorithm: 'HS256' })
const adminCookie = 'auth_token=' + adminToken

// Requests with a body deliberately contain invalid input. A disabled handler must
// return before parsing it, accessing the database or calling payment providers.
test('Todas as rotas comerciais retornam 404 real, sem redirecionar', async () => {
  const paths = ['/loja', '/loja/produto/' + missing, '/loja/categoria/todos', '/loja/carrinho', '/loja/checkout', '/loja/meus-pedidos', '/loja/pedido/' + missing, '/loja/pedido/' + missing + '/pagamento', '/carrinho', '/pedido/' + missing, '/checkout', '/minha-conta']
  for (const path of paths) for (const cookie of ['', adminCookie]) {
    const response = await fetch(base + path, { redirect: 'manual', headers: { cookie } })
    assert.equal(response.status, 404, path)
    assert.equal(response.headers.get('location'), null, path)
    const html = await response.text()
    assert.ok(!html.includes('Adicionar ao carrinho'), path)
  }
})

test('APIs comerciais, inclusive webhooks, não operam com módulo desativado', async () => {
  const paths = ['/api/products', '/api/categorias', '/api/orders', '/api/orders/' + missing, '/api/orders/find', '/api/frete', '/api/clients', '/api/asaas/create-customer', '/api/asaas/create-payment', '/api/asaas/pix-qrcode', '/api/asaas/validate-key', '/api/asaas/webhook', '/api/mercado-pago/preference', '/api/mercado-pago/webhook']
  for (const path of paths) for (const method of ['GET', 'POST', 'PATCH', 'DELETE']) {
    const response = await fetch(base + path, { method, redirect: 'manual', headers: { cookie: adminCookie, 'Content-Type': 'application/json' }, ...(method !== 'GET' ? { body: '{invalid-json' } : {}) })
    assert.equal(response.status, 404, method + ' ' + path)
    assert.equal(response.headers.get('cache-control'), 'no-store')
    assert.match((await response.json()).error, /indisponível/)
  }
})

test('Gravações comerciais administrativas são bloqueadas e leituras históricas autenticadas continuam', async () => {
  for (const path of ['/api/admin/products', '/api/admin/products/' + missing, '/api/admin/orders']) for (const method of ['POST', 'PATCH', 'DELETE']) {
    const response = await fetch(base + path, { method, headers: { cookie: adminCookie, 'Content-Type': 'application/json' }, body: '{invalid-json' })
    assert.equal(response.status, 404, method + ' ' + path)
  }
  for (const path of ['/api/admin/products', '/api/admin/orders', '/api/admin/blog/posts', '/api/admin/blog/categories']) {
    const response = await fetch(base + path, { headers: { cookie: adminCookie } })
    assert.equal(response.status, 200, path)
    await response.body.cancel()
  }
  for (const path of ['/admin/products/new', '/admin/products/' + missing + '/edit', '/admin/clients']) {
    const response = await fetch(base + path, { headers: { cookie: adminCookie }, redirect: 'manual' })
    assert.equal(response.status, 404, path)
  }
})

test('Páginas institucionais e WhatsApp permanecem ativos sem links comerciais', async () => {
  for (const path of ['/', '/sobre', '/servicos', '/servicos/box-de-vidro', '/onde-atendemos', '/projetos', '/projetos/club-men', '/blog', '/duvidas-frequentes', '/avaliacoes']) {
    const response = await fetch(base + path)
    assert.equal(response.status, 200, path)
    const html = await response.text()
    assert.match(html, /https:\/\/wa.me\//, path)
    assert.ok(!/href=["']\/(?:loja|carrinho|checkout|pedido)(?:[\/"'?#])/.test(html), path)
    assert.ok(!html.includes('Adicionar ao carrinho'), path)
  }
})

test('Sitemap, manifesto e preparação offline não expõem a loja virtual', async () => {
  const sitemap = await (await fetch(base + '/sitemap.xml')).text()
  assert.match(sitemap, /\/servicos\/box-de-vidro/)
  assert.match(sitemap, /\/projetos\/club-men/)
  assert.match(sitemap, /\/blog/)
  assert.ok(!/<loc>[^<]*\/(?:loja|carrinho|pedido|checkout)(?:\/|<)/.test(sitemap))
  const manifest = await (await fetch(base + '/manifest.webmanifest')).json()
  assert.equal(manifest.start_url, '/')
  assert.ok(!JSON.stringify(manifest).includes('/loja'))
  const offline = await (await fetch(base + '/preparar-offline')).text()
  assert.ok(!offline.includes('/loja'))
})
