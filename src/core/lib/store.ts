import { siteConfig } from '@/client/config/site.config'

const storefrontPrefixes = ['/loja', '/carrinho', '/checkout', '/pedido', '/minha-conta']
const publicApiPrefixes = ['/api/products', '/api/categorias', '/api/orders', '/api/frete', '/api/asaas', '/api/mercado-pago', '/api/clients']
const adminApiPrefixes = ['/api/admin/products', '/api/admin/orders']

function matchesPrefix(pathname: string, prefixes: string[]): boolean {
  const path = pathname.split(/[?#]/, 1)[0]
  return prefixes.some(prefix => path === prefix || path.startsWith(prefix + '/'))
}

export function isStorefrontPath(pathname: string): boolean {
  return matchesPrefix(pathname, storefrontPrefixes)
}

export function isPublicStoreApiPath(pathname: string): boolean {
  return matchesPrefix(pathname, publicApiPrefixes)
}

export function isDisabledStoreApi(pathname: string, method: string): boolean {
  if (siteConfig.store.enabled) return false
  return isPublicStoreApiPath(pathname) ||
    (matchesPrefix(pathname, adminApiPrefixes) && !['GET', 'HEAD', 'OPTIONS'].includes(method.toUpperCase()))
}

export function isPublicLinkEnabled(href: string): boolean {
  return siteConfig.store.enabled || !isStorefrontPath(href)
}

export function isStoreEnabled(): boolean {
  return siteConfig.store.enabled
}
