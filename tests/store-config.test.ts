import test from 'node:test'
import assert from 'node:assert/strict'
import { siteConfig } from '../src/client/config/site.config'
import { isDisabledStoreApi, isPublicLinkEnabled, isStorefrontPath } from '../src/core/lib/store'

test('Desativação distingue loja de portfólio, serviços e categorias editoriais', () => {
  for (const path of ['/loja', '/loja/produto/box', '/loja?ordem=preco', '/carrinho', '/pedido/123', '/checkout', '/minha-conta']) assert.equal(isStorefrontPath(path), true, path)
  for (const path of ['/lojamar', '/blog/categoria/vidro', '/servicos/fachadas-de-vidro', '/projetos/loja-de-departamentos']) assert.equal(isStorefrontPath(path), false, path)
})

test('Flag bloqueia APIs públicas e mutações comerciais mas preserva administração compartilhada', () => {
  const previous = siteConfig.store.enabled
  try {
    siteConfig.store.enabled = false
  for (const path of ['/api/orders', '/api/products', '/api/categorias', '/api/frete', '/api/clients', '/api/asaas/webhook', '/api/mercado-pago/preference']) assert.equal(isDisabledStoreApi(path, 'POST'), true, path)
  for (const path of ['/api/admin/products', '/api/admin/products/123', '/api/admin/orders']) {
    assert.equal(isDisabledStoreApi(path, 'GET'), false)
    assert.equal(isDisabledStoreApi(path, 'PATCH'), true)
  }
  for (const path of ['/api/admin/blog/posts', '/api/admin/blog/categories', '/api/admin/pages/123', '/api/cloudinary/upload', '/api/auth/login']) assert.equal(isDisabledStoreApi(path, 'POST'), false, path)
  assert.equal(isPublicLinkEnabled('/loja'), false)
  assert.equal(isPublicLinkEnabled('/servicos'), true)
  } finally { siteConfig.store.enabled = previous }
})

test('Reativação pela mesma flag libera rotas, APIs e links sem mudança de código', () => {
  const previous = siteConfig.store.enabled
  try {
    siteConfig.store.enabled = true
    assert.equal(isPublicLinkEnabled('/loja'), true)
    assert.equal(isDisabledStoreApi('/api/orders', 'POST'), false)
    assert.equal(isDisabledStoreApi('/api/admin/products/123', 'DELETE'), false)
    assert.equal(isDisabledStoreApi('/api/asaas/webhook', 'POST'), false)
  } finally { siteConfig.store.enabled = previous }
})
