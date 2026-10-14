# E&L Vidraçaria — módulo de loja desativado

## Configuração e reativação

A única configuração é store.enabled em src/client/config/site.config.ts. O valor neste cliente é false.

Para reativar, alterar para true, executar npm run test:store, npx tsc --noEmit e npm run build, e validar os fluxos comerciais em ambiente de testes. Após iniciar o servidor local, os testes SEO da loja ativa podem ser executados com STORE_ENABLED=true e node --test tests/seo-orders.test.mjs. As variáveis de pagamento e autenticação existentes continuam necessárias. A reativação requer novo build; não depende de migração ou recuperação de arquivos apagados.

Os testes de desativação são executados com false: npm run test:store e npm run test:store:http (com servidor local em http://127.0.0.1:3100).

## Comportamento com false

- Loja, produtos, categorias comerciais, carrinho, checkout, pedidos e área do cliente: HTTP 404 real, sem redirecionar para a homepage. Guards no middleware e no servidor.
- APIs públicas de produtos, categorias, pedidos, frete, clientes/subcontas Asaas, pagamento, QR Code e webhooks: HTTP 404 antes de ler o corpo, consultar registros ou chamar fornecedores de pagamento.
- APIs administrativas de produtos: leitura autenticada preservada; criação, edição e exclusão bloqueadas. Pedidos existentes continuam acessíveis ao administrador.
- Formulários administrativos de criação/edição de produtos e gerenciamento de subcontas: indisponíveis, com código preservado.
- Blog, categorias editoriais, páginas personalizadas, autenticação administrativa, etiquetas e upload compartilhado: preservados.
- Navegação pública filtra links comerciais; widgets comerciais renderizam vazio sem executar seus hooks. Orçamento e WhatsApp continuam ativos.
- Provedor de carrinho foi movido para o layout da loja, eliminando leitura/gravação do carrinho nas páginas institucionais. O cabeçalho tinha uma dependência sem utilização do carrinho, removida.
- Dashboard institucional preserva acesso editorial; consultas a produtos e pedidos históricos permanecem somente leitura.
- Sitemap não consulta produtos/categorias comerciais nem inclui URLs da loja. Conteúdo e projetos sobre fachadas de lojas físicas foram preservados.
- Metadados das rotas bloqueadas não publicam o catálogo. Manifesto continua institucional. Lista de preparação offline filtra rotas da loja, mantendo a configuração original para reativação.
- Service worker exclui rotas comerciais do precache, impede uso do cache de navegação e remove respostas comerciais antigas do cache do navegador. Não apaga arquivos de imagens ou conteúdo.

## Dados e pagamentos

Nenhuma migração, gravação de registros, exclusão de dados, pagamento, deploy ou push foi executado nesta implementação ou nos testes. Prisma generate apenas gerou código durante o build; o schema e os arquivos gerados não fazem parte das alterações.

Webhooks retornam 404 enquanto a loja está desativada e não atualizam pedidos antigos. Na reativação, conferir eventuais pagamentos pendentes e a política de retentativas dos fornecedores antes de liberar vendas. A consulta legada de pedidos por e-mail e CPF e a proteção por cookie assinado continuam preservadas para quando o módulo voltar.

## Validações

- TypeScript: passou.
- Build: passou.
- Testes unitários da flag: 3 passaram, incluindo reativação apenas em memória.
- Testes HTTP: 10 passaram; 2 testes legados exclusivos da loja ativa foram ignorados pelo estado desativado. Zero falhas. Foram verificadas rotas com e sem cookie administrativo, APIs com corpos JSON inválidos, leituras históricas autenticadas e administração editorial. Nenhuma resposta com dados de clientes foi registrada no relatório.
- Lint completo: executado, com 64 erros e 16 avisos preexistentes. Comparação com a revisão anterior: nenhum erro de lint introduzido nos arquivos alterados/criados.
- Avisos preexistentes de build: convenção middleware descontinuada, Browserslist antigo, configuração SSL do PostgreSQL e imagens grandes não precacheadas.
- git diff --check: sem erros.

## Arquivos alterados/criados

- package.json
- src/app/(admin)/admin/layout.tsx
- src/app/(admin)/admin/page.tsx
- src/app/(admin)/admin/products/[id]/edit/page.tsx
- src/app/(admin)/admin/products/new/page.tsx
- src/app/(admin)/admin/products/page.tsx
- src/app/(site)/layout.tsx
- src/app/(site)/loja/carrinho/page.tsx
- src/app/(site)/loja/categoria/[slug]/page.tsx
- src/app/(site)/loja/checkout/page.tsx
- src/app/(site)/loja/layout.tsx
- src/app/(site)/loja/meus-pedidos/page.tsx
- src/app/(site)/loja/page.tsx
- src/app/(site)/loja/pedido/[id]/layout.tsx
- src/app/(site)/loja/pedido/[id]/pagamento/page.tsx
- src/app/(site)/loja/pedido/[id]/page.tsx
- src/app/(site)/loja/produto/[slug]/page.tsx
- src/app/(site)/preparar-offline/page.tsx
- src/app/api/admin/products/[id]/route.ts
- src/app/api/admin/products/route.ts
- src/app/api/asaas/create-customer/route.ts
- src/app/api/asaas/create-payment/route.ts
- src/app/api/asaas/pix-qrcode/route.ts
- src/app/api/asaas/validate-key/route.ts
- src/app/api/asaas/webhook/route.ts
- src/app/api/categorias/route.ts
- src/app/api/clients/route.ts
- src/app/api/frete/route.ts
- src/app/api/mercado-pago/preference/route.ts
- src/app/api/mercado-pago/webhook/route.ts
- src/app/api/orders/[id]/route.ts
- src/app/api/orders/find/route.ts
- src/app/api/orders/route.ts
- src/app/api/products/route.ts
- src/app/carrinho/layout.tsx
- src/app/carrinho/page.tsx
- src/app/pedido/[orderId]/page.tsx
- src/app/pedido/layout.tsx
- src/app/sitemap.ts
- src/app/sw.ts
- src/client/components/Footer.tsx
- src/client/components/Header.tsx
- src/client/config/site.config.ts
- src/core/components/CategoriasMenu.tsx
- src/core/components/CheckoutForm.tsx
- src/core/components/FreteCalculator.tsx
- src/core/components/HeroButtons.tsx
- src/core/components/ProductDetailClient.tsx
- src/middleware.ts
- tests/seo-orders.test.mjs
- src/app/(admin)/admin/clients/layout.tsx
- src/core/lib/store-server.ts
- src/core/lib/store.ts
- tests/store-config.test.ts
- tests/store-disabled.test.mjs
- docs/LOJA_DESATIVADA.md
