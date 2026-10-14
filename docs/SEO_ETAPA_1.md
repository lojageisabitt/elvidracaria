# Correções SEO — etapa 1

## Alterações

- Contato aponta para a seção existente de orçamento, sem alteração visual.
- Links de espelhos e fachadas apontam para os serviços existentes.
- Noindex nos segmentos transacionais; robots permite rastrear essas páginas.
- Rotas antigas de carrinho/pedidos redirecionam para a loja.
- Produtos e categorias inexistentes retornam 404, verificado por HTTP.
- Sitemap inclui páginas públicas, serviços, áreas atendidas, projetos, artigos publicados, categorias e produtos disponíveis. A página personalizada só entra quando o registro existe. A categoria todos usa canonical da loja e não entra como URL duplicada. Falhas de fontes dinâmicas são registradas sem impedir URLs estáticas.
- Canonical explícito nas páginas públicas dinâmicas incluídas no sitemap.
- Acesso a pedidos exige cookie assinado concedido na criação ou consulta por e-mail e CPF; a consulta troca as permissões para os pedidos encontrados. Cookie HttpOnly, SameSite=Lax, Secure em produção, validade de 24 horas. Listagem geral exige administrador.
- Assinatura e perfil administrativo são validados no middleware.
- Clientes não podem alterar status de pagamento pelo PATCH, e parâmetros da URL não aprovam pagamentos.
- Pedidos e páginas de pagamento são excluídos do cache offline.

## Verificações

- TypeScript: passou.
- Build de produção: passou; executado fora do sandbox após erro de acesso do compilador no Windows.
- Sete testes HTTP em localhost: passaram. Arquivo tests/seo-orders.test.mjs. Para repetir: npm run build, npm run start -- --hostname 127.0.0.1 --port 3100 e node --test tests/seo-orders.test.mjs.
- Lint completo: executado; permanece com 66 erros e 16 avisos existentes. Comparação de diagnósticos com HEAD: nenhum erro novo nos arquivos alterados ou criados. O script foi atualizado para ESLint porque Next.js 16 não oferece next lint.
- git diff --check: passou.
- Nenhum deploy ou push realizado.

## Limites

A consulta existente por e-mail e CPF foi preservada. Esses dados não substituem verificação de identidade por código enviado ao cliente. Esta etapa fecha acesso direto por ID, listagem pública, cookies administrativos forjados e alteração arbitrária de status; não constitui auditoria completa de todos os fluxos de pagamento. Não foram criados pedidos nem feitos pagamentos nos testes.

## Arquivos alterados ou criados

- package.json
- src/app/(site)/blog/[slug]/page.tsx
- src/app/(site)/blog/categoria/[slug]/page.tsx
- src/app/(site)/blog/page.tsx
- src/app/(site)/loja/categoria/[slug]/page.tsx
- src/app/(site)/loja/page.tsx
- src/app/(site)/loja/pedido/[id]/page.tsx
- src/app/(site)/loja/produto/[slug]/page.tsx
- src/app/(site)/personalizado/page.tsx
- src/app/(site)/servicos/page.tsx
- src/app/api/admin/orders/route.ts
- src/app/api/orders/[id]/route.ts
- src/app/api/orders/find/route.ts
- src/app/api/orders/route.ts
- src/app/carrinho/page.tsx
- src/app/pedido/[orderId]/page.tsx
- src/app/robots.ts
- src/app/sitemap.ts
- src/app/sw.ts
- src/client/config/site.config.ts
- src/client/home/HomePage.tsx
- src/middleware.ts
- src/app/(site)/loja/carrinho/layout.tsx
- src/app/(site)/loja/checkout/layout.tsx
- src/app/(site)/loja/meus-pedidos/layout.tsx
- src/app/(site)/loja/pedido/[id]/layout.tsx
- src/app/(site)/loja/pedido/layout.tsx
- src/app/carrinho/layout.tsx
- src/app/pedido/layout.tsx
- src/core/lib/order-access.ts
- tests/seo-orders.test.mjs
- docs/SEO_ETAPA_1.md
