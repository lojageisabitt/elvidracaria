// src/client/config/site.config.ts

export const siteConfig = {
  nome: "E & L Vidraçaria",

  // Logo
  logoHorizontal: "/logo-elvidracaria.png",
  logoVertical: "/logo-elvidracaria-150x150.png",
  logoAlt: "Logo E & L Vidraçaria",

  // WhatsApp — dois números visíveis no header
  whatsapp: "5521964883630",
  whatsappDisplay: "(21) 96488-3630",
  whatsappMensagem: "Olá! Vim pelo site e gostaria de solicitar um orçamento.",

  // Header
  headerCta: "Fazer Orçamento",

  // Redes sociais — ícones no footer: Facebook, Instagram, WhatsApp
  instagram: "@elvidracaria",
  facebook: "elvidracaria",
  tiktok: "",

  cidade: "Rio de Janeiro, RJ",

 // Navegação desktop — visível no header do site
navLinks: [
  { label: "Início", href: "/" },
  { label: "Serviços", href: "/servicos" },
  { label: "Projetos", href: "/projetos" },
  { label: "Sobre", href: "/sobre" },
  { label: "Blog", href: "/blog" },
  { label: "Contato", href: "/contato" },
],

// Navegação mobile
mobileNavLinks: [
  { label: "Início", href: "/" },
  { label: "Serviços", href: "/servicos" },
  { label: "Projetos", href: "/projetos" },
  { label: "Sobre", href: "/sobre" },
  { label: "Onde atendemos", href: "/onde-atendemos" },
  { label: "Dúvidas frequentes", href: "/duvidas-frequentes" },
  { label: "Blog", href: "/blog" },
  { label: "Contato", href: "/contato" },
],

// Footer — navegação mais completa
footerNavLinks: [
  { label: "Início", href: "/" },
  { label: "Serviços", href: "/servicos" },
  { label: "Projetos", href: "/projetos" },
  { label: "Sobre", href: "/sobre" },
  { label: "Onde atendemos", href: "/onde-atendemos" },
  { label: "Dúvidas frequentes", href: "/duvidas-frequentes" },
  { label: "Blog", href: "/blog" },
  { label: "Contato", href: "/contato" },
],

  // Footer — benefícios (baseados nos serviços destacados)
  benefits: [
    { title: "Atendimento Rápido",      description: "Orçamento ágil e personalizado para o seu projeto" },
    { title: "Vidros de Alta Qualidade", description: "Trabalhamos com os melhores materiais do mercado" },
    { title: "Satisfação Garantida",    description: "Excelência no acabamento e total satisfação do cliente carioca" },
  ],


  footerDescription:
    "E & L Vidraçaria oferece soluções em vidros para toda a cidade do Rio de Janeiro. Trabalhamos com box para banheiros, vidros temperados, espelhos sob medida, janelas de vidro e muito mais.",
  copyrightTagline: "© 2025 E & L Vidraçaria. Todos os direitos reservados.",

  seo: {
    titulo: "E & L Vidraçaria – Vidros de Alta Qualidade no Rio de Janeiro",
    descricao:
      "Vidraçaria no Rio de Janeiro especializada em Blindex, vidros jateados, vidro fumê, espelhos, vidros temperados e serralheria. Atendimento rápido e personalizado.",
    url: "https://www.elvidracaria.com.br",
    ogImage: "/og-image.png",
    keywords: [
      "vidraçaria Rio de Janeiro",
      "Blindex RJ",
      "vidros temperados Rio de Janeiro",
      "espelhos sob medida RJ",
      "vidros jateados",
      "vidro fumê",
      "box para banheiro RJ",
      "serralheria Rio de Janeiro",
      "E L Vidraçaria",
      "vidraçaria Vila da Penha",
    ],
  },

   // ─── Instalação Off-Line do site no tablet ────────────────────────────────────────
  pwa: {
  enabled: true,

  shortName: "Nome do Negócio",

  orientation: "any" as const,

  icon192: "/pwa/icon-192.png",
  icon512: "/pwa/icon-512.png",
  maskableIcon512: "/pwa/icon-maskable-512.png",
  appleTouchIcon: "/pwa/apple-touch-icon.png",

  offlineRoutes: [
    "/",
    "/sobre",
    "/loja",
    "/blog",
  ],
},

  // ─── TEMA VISUAL ─────────────────────────────────────────
  // Cores extraídas do site: azul institucional + branco + cinza claro
  theme: {
    bgPrimary:     "#ffffff",
    bgSecondary:   "#f5f5f5",
    bgTertiary:    "#eeeeee",
    bgCard:        "#ffffff",
    bgHover:       "#e8f0fe",
    overlay:       "#00000080",

    textPrimary:   "#1a1a1a",
    textSecondary: "#333333",
    textTertiary:  "#555555",
    textMuted:     "#777777",
    textLight:     "#ffffff",
    textHeroMuted: "#e5e7eb",

    accent:        "#1565C0",   // azul institucional do site
    accentHover:   "#0D47A1",
    accentLight:   "#42A5F5",

    error:         "#dc2626",
    success:       "#16a34a",
    info:          "#1565C0",

    border:        "#e0e0e0",
    borderLight:   "#f0f0f0",

    adminBg:       "#f5f5f5",
    adminText:     "#1a1a1a",
    adminBorder:   "#e0e0e0",
  },
}