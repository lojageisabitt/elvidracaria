import test from 'node:test'
import assert from 'node:assert/strict'

const base = process.env.SEO_TEST_URL || 'http://127.0.0.1:3100'
const storeEnabled = process.env.STORE_ENABLED === 'true'
const missing = 'seo-check-nonexistent-20261013'

for (const cookie of ['', 'order_access=invalid; auth_token=invalid']) {
  test('Pedidos negam acesso sem autorização válida: ' + (cookie ? 'cookie inválido' : 'anônimo'), async () => {
    for (const path of ['/api/orders', '/api/orders/' + missing, '/api/orders/find?orderId=' + missing]) {
      const response = await fetch(base + path, { headers: { cookie } })
      assert.equal(response.status, path === '/api/orders' && storeEnabled ? 403 : 404)
      assert.ok(!('email' in await response.json()))
    }
    const patch = await fetch(base + '/api/orders/' + missing, { method: 'PATCH', headers: { cookie, 'Content-Type': 'application/json' }, body: JSON.stringify({ statusPagamento: 'approved' }) })
    assert.equal(patch.status, 404)
  })
}

test('Páginas transacionais publicam noindex', { skip: !storeEnabled }, async () => {
  for (const path of ['/loja/checkout', '/loja/carrinho', '/loja/meus-pedidos', '/carrinho', '/pedido/' + missing]) {
    const response = await fetch(base + path)
    const html = await response.text()
    assert.match(html, /<meta name="robots" content="noindex, nofollow"/)
  }
})

test('Pedido e pagamento redirecionam visitantes não autorizados', { skip: !storeEnabled }, async () => {
  for (const suffix of ['', '/pagamento']) {
    const response = await fetch(base + '/loja/pedido/' + missing + suffix, { redirect: 'manual' })
    assert.equal(response.status, 307)
    assert.ok(response.headers.get('location').endsWith('/loja/meus-pedidos'))
  }
})

test('Produtos e categorias inexistentes retornam HTTP 404', async () => {
  for (const path of ['/loja/produto/', '/loja/categoria/', '/blog/categoria/']) {
    const response = await fetch(base + path + missing)
    assert.equal(response.status, 404, path)
  }
})

test('Robots permite ler noindex e sitemap exclui páginas transacionais', async () => {
  const robots = await (await fetch(base + '/robots.txt')).text()
  assert.ok(!/Disallow:.*(?:pedido|carrinho|checkout|loja)/.test(robots))
  const xml = await (await fetch(base + '/sitemap.xml')).text()
  assert.match(xml, /\/servicos\/box-de-vidro/)
  assert.match(xml, /\/onde-atendemos/)
  assert.match(xml, /\/projetos\/club-men/)
  assert.ok(!/\/(?:admin|api|pedido|carrinho|offline|preparar-offline)|\/loja\/(?:pedido|carrinho|checkout|meus-pedidos)/.test(xml))
})

test('Cookie administrativo forjado não permite ler pedidos', async () => {
  const response = await fetch(base + '/admin/pedidos/' + missing, { redirect: 'manual', headers: { cookie: 'auth_token=invalid' } })
  assert.equal(response.status, 307)
  assert.ok(response.headers.get('location').endsWith('/admin/login'))
})
