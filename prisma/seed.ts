// prisma/seed.ts
import 'dotenv/config'
import { PrismaClient } from '../src/generated/client'
import { PrismaPg } from '@prisma/adapter-pg'
import { Pool } from 'pg'
import bcrypt from 'bcryptjs'

const pool = new Pool({ connectionString: process.env.DATABASE_URL! })
const adapter = new PrismaPg(pool)
const prisma = new PrismaClient({ adapter })

async function main() {
  console.log('🧹 Limpando banco...')

  await prisma.postSEO.deleteMany()
  await prisma.post.deleteMany()
  await prisma.blogCategory.deleteMany()
  await prisma.orderItem.deleteMany()
  await prisma.order.deleteMany()
  await prisma.productImage.deleteMany()
  await prisma.productColor.deleteMany()
  await prisma.size.deleteMany()
  await prisma.product.deleteMany()
  await prisma.category.deleteMany()
  await prisma.customPage.deleteMany()
  await prisma.adminUser.deleteMany()

  console.log('✅ Banco limpo!')

  // ─────────────────────────────────────────
  // 🔐 ADMIN
  // ─────────────────────────────────────────
  await prisma.adminUser.create({
    data: {
      email: process.env.SEED_ADMIN_EMAIL || 'admin@elvidracaria.com.br',
      passwordHash: await bcrypt.hash(process.env.SEED_ADMIN_PASSWORD!, 10),
      role: 'admin',
    },
  })
  console.log('✅ Admin da E & L Vidraçaria criado!')

  // ─────────────────────────────────────────
  // 🛍️ CATEGORIAS DE PRODUTO
  // ─────────────────────────────────────────
  const [catSites, catMarketing, catSuporte] = await Promise.all([
    prisma.category.create({ data: { name: 'Box e Banheiros', slug: 'box-e-banheiros' } }),
    prisma.category.create({ data: { name: 'Vidros e Espelhos', slug: 'vidros-e-espelhos' } }),
    prisma.category.create({ data: { name: 'Serralheria e Estruturas', slug: 'serralheria-e-estruturas' } }),
  ])

  // ─────────────────────────────────────────
  // 🛍️ PRODUTOS (6 serviços E & L Vidraçaria)
  // ─────────────────────────────────────────
  const produtos = [
    {
      name: 'Box de Vidro Temperado para Banheiro',
      slug: 'box-vidro-temperado-banheiro',
      description: 'Box de vidro temperado sob medida para banheiros residenciais e comerciais no Rio de Janeiro. Instalação com acabamento preciso, segurança e opções de vidro transparente, fumê ou jateado.',
      price: 0.00,
      stock: 99,
      handmade: false,
      categories: [catSites.id],
      colors: [
        { name: 'Transparente', hex: '#EAF4F8' },
        { name: 'Fumê', hex: '#59636B' },
        { name: 'Jateado', hex: '#D9E0E3' },
      ],
      sizes: ['Sob medida'],
    },
    {
      name: 'Espelhos Sob Medida',
      slug: 'espelhos-sob-medida',
      description: 'Espelhos sob medida para banheiros, salas, quartos, academias, lojas e ambientes comerciais. Projetos personalizados com instalação profissional e acabamento de alta qualidade.',
      price: 0.00,
      stock: 99,
      handmade: false,
      categories: [catMarketing.id],
      colors: [
        { name: 'Prata', hex: '#C0C0C0' },
        { name: 'Bronze', hex: '#8C6A43' },
        { name: 'Fumê', hex: '#5A5A5A' },
      ],
      sizes: ['Sob medida'],
    },
    {
      name: 'Vidro Temperado Sob Medida',
      slug: 'vidro-temperado-sob-medida',
      description: 'Vidros temperados sob medida para portas, janelas, divisórias, fachadas e projetos residenciais ou comerciais. Solução resistente, segura e adequada às necessidades de cada ambiente.',
      price: 0.00,
      stock: 99,
      handmade: false,
      categories: [catMarketing.id],
      colors: [
        { name: 'Incolor', hex: '#EAF4F8' },
        { name: 'Verde', hex: '#8FAFA3' },
        { name: 'Fumê', hex: '#59636B' },
      ],
      sizes: ['Sob medida'],
    },
    {
      name: 'Vidro Jateado',
      slug: 'vidro-jateado',
      description: 'Vidro jateado sob medida para quem busca privacidade sem perder luminosidade. Indicado para banheiros, portas, divisórias, escritórios, consultórios e ambientes comerciais.',
      price: 0.00,
      stock: 99,
      handmade: false,
      categories: [catMarketing.id],
      colors: [{ name: 'Jateado', hex: '#D9E0E3' }],
      sizes: ['Sob medida'],
    },
    {
      name: 'Vidro Fumê',
      slug: 'vidro-fume',
      description: 'Vidro fumê sob medida para portas, janelas, fachadas, divisórias e projetos decorativos. Oferece visual moderno, maior privacidade e acabamento elegante para residências e empresas.',
      price: 0.00,
      stock: 99,
      handmade: false,
      categories: [catMarketing.id],
      colors: [{ name: 'Fumê', hex: '#59636B' }],
      sizes: ['Sob medida'],
    },
    {
      name: 'Serralheria para Projetos em Vidro',
      slug: 'serralheria-projetos-em-vidro',
      description: 'Serviços de serralheria para instalação e suporte de portas, janelas, divisórias, fachadas e estruturas com vidro. Soluções sob medida com segurança e bom acabamento.',
      price: 0.00,
      stock: 99,
      handmade: false,
      categories: [catSuporte.id],
      colors: [
        { name: 'Alumínio', hex: '#A8A9AD' },
        { name: 'Preto', hex: '#1A1A1A' },
        { name: 'Branco', hex: '#F5F5F5' },
      ],
      sizes: ['Sob medida'],
    },
  ]

  for (const p of produtos) {
    await prisma.product.create({
      data: {
        name: p.name,
        slug: p.slug,
        description: p.description,
        price: p.price,
        stock: p.stock,
        handmade: p.handmade,
        categories: { connect: p.categories.map((id) => ({ id })) },
        colors: { create: p.colors },
        sizes: { create: p.sizes.map((name) => ({ name })) },
        images: {
          create: [{ url: '/upnode-placeholder.png' }],
        },
      },
    })
  }
  console.log('✅ 6 serviços criados!')

  // ─────────────────────────────────────────
  // 📝 BLOG — CATEGORIAS
  // ─────────────────────────────────────────
  const [blogSEO, blogVendas, blogPresenca] = await Promise.all([
    prisma.blogCategory.create({
      data: {
        name: 'Box para Banheiro',
        slug: 'box-para-banheiro',
        description: 'Dicas para escolher, instalar e conservar box de vidro temperado para banheiro.',
        showOnHome: true,
        featured: true,
        order: 1,
      },
    }),
    prisma.blogCategory.create({
      data: {
        name: 'Vidros e Espelhos',
        slug: 'vidros-e-espelhos',
        description: 'Ideias, aplicações e cuidados com vidros temperados, espelhos, vidros fumê e jateados.',
        showOnHome: true,
        featured: false,
        order: 2,
      },
    }),
    prisma.blogCategory.create({
      data: {
        name: 'Dicas de Vidraçaria',
        slug: 'dicas-de-vidracaria',
        description: 'Orientações para contratar uma vidraçaria e planejar projetos em vidro com segurança.',
        showOnHome: true,
        featured: false,
        order: 3,
      },
    }),
  ])

  // ─────────────────────────────────────────
  // 📝 BLOG — POSTS
  // ─────────────────────────────────────────
  const posts = [
    {
      title: 'Box de vidro para banheiro: como escolher o modelo ideal',
      slug: 'box-de-vidro-para-banheiro-como-escolher',
      excerpt: 'Conheça os principais modelos de box de vidro temperado e saiba o que avaliar antes de pedir um orçamento para o seu banheiro.',
      content: `## Por que escolher um box de vidro temperado?

O box de vidro temperado ajuda a manter o banheiro seco, organizado e mais fácil de limpar. Além da função prática, ele valoriza o ambiente e pode ser produzido sob medida para aproveitar melhor o espaço disponível.

O vidro temperado é indicado para esse tipo de instalação porque passa por um processo que aumenta sua resistência. Quando corretamente medido e instalado, oferece segurança e durabilidade para o uso diário.

## Principais modelos de box para banheiro

### Box de correr

É uma das opções mais utilizadas em banheiros pequenos e médios. As folhas deslizam sobre trilhos, evitando que a abertura ocupe espaço dentro ou fora da área do banho.

### Box de abrir

Funciona como uma porta e costuma ser indicado quando existe espaço livre suficiente para a abertura. O resultado é elegante e facilita a entrada na área do chuveiro.

### Box de canto

É utilizado quando o chuveiro fica no encontro de duas paredes. Pode ter abertura de correr ou outras configurações, conforme as medidas e o formato do banheiro.

## Qual vidro escolher?

O vidro transparente amplia visualmente o ambiente e combina com diferentes estilos de decoração. O vidro fumê cria um visual mais marcante e oferece maior privacidade. Já o vidro jateado permite a passagem de luz, mas reduz a visão direta da área interna.

A escolha deve considerar a iluminação, as cores do banheiro, o nível de privacidade desejado e o estilo do projeto.

## A medição faz diferença

Cada banheiro possui medidas e condições de instalação diferentes. Por isso, o box deve ser planejado após uma avaliação correta do vão, do alinhamento das paredes e da posição de bancadas, vasos sanitários, janelas e acessórios.

Uma medição profissional reduz folgas inadequadas, problemas de abertura e retrabalho durante a instalação.

## Cuidados para conservar o box

- Evite produtos abrasivos e palhas de aço
- Use detergente neutro e pano macio
- Não force portas ou roldanas
- Mantenha trilhos e ferragens limpos
- Solicite manutenção ao perceber desalinhamento ou dificuldade de abertura

## Box sob medida no Rio de Janeiro

A E & L Vidraçaria desenvolve projetos de box de vidro temperado sob medida, com atendimento personalizado e instalação profissional no Rio de Janeiro. Para escolher o modelo adequado ao seu banheiro, solicite uma avaliação e um orçamento de acordo com as medidas do espaço.`,
      categoryId: blogSEO.id,
      published: true,
      seo: {
        metaTitle: 'Box de Vidro para Banheiro no Rio | E & L Vidraçaria',
        metaDesc: 'Saiba como escolher box de vidro temperado para banheiro e solicite um projeto sob medida no Rio de Janeiro.',
        keywords: 'box de vidro, box para banheiro, box blindex, vidro temperado, vidraçaria no Rio de Janeiro',
      },
    },
    {
      title: 'Espelho sob medida: como valorizar ambientes residenciais e comerciais',
      slug: 'espelho-sob-medida-valorizar-ambientes',
      excerpt: 'Veja como espelhos sob medida podem ampliar, iluminar e transformar banheiros, salas, quartos, academias, lojas e escritórios.',
      content: `## Por que investir em um espelho sob medida?

O espelho é um elemento funcional e decorativo capaz de transformar um ambiente. Quando produzido sob medida, ele se adapta ao espaço disponível, acompanha o projeto do móvel ou da parede e proporciona um acabamento mais harmonioso.

Além de facilitar o uso diário, o espelho pode ampliar visualmente ambientes pequenos, distribuir melhor a luz e destacar detalhes da decoração.

## Onde usar espelhos sob medida?

### Banheiros e lavabos

Espelhos instalados acima da bancada podem ocupar somente a área da pia ou cobrir uma parede maior. A medida correta ajuda a alinhar o espelho com armários, luminárias, tomadas e revestimentos.

### Salas e corredores

Em salas, halls e corredores, o espelho pode aumentar a sensação de profundidade e tornar o espaço mais iluminado. O posicionamento deve considerar o que será refletido para criar um resultado agradável.

### Quartos e closets

Espelhos de corpo inteiro são úteis em portas, paredes e áreas de vestir. Em closets, podem ser integrados ao projeto para aproveitar melhor o espaço.

### Academias, lojas e ambientes comerciais

Academias, estúdios, salões de beleza, lojas e escritórios utilizam espelhos para melhorar a experiência do público e valorizar o ambiente. Nesses locais, o planejamento das dimensões e das emendas é especialmente importante.

## Tipos e acabamentos

O espelho prata é o modelo mais tradicional e combina com praticamente qualquer ambiente. Espelhos fumê e bronze oferecem um efeito decorativo mais sofisticado e podem ser utilizados em projetos específicos.

Também é possível definir detalhes como lapidação, bisotê, recortes e formatos personalizados, de acordo com a aplicação e com as possibilidades técnicas do projeto.

## O que avaliar antes da instalação?

- Medidas exatas da parede ou do móvel
- Condições da superfície onde será instalado
- Presença de tomadas, interruptores e luminárias
- Umidade do ambiente
- Posição das emendas em projetos maiores
- Tipo de acabamento desejado

## Como limpar corretamente?

Utilize pano macio e produto próprio para vidros ou uma solução suave. Evite aplicar excesso de líquido diretamente nas bordas, principalmente em ambientes úmidos, e não use materiais abrasivos que possam riscar a superfície.

## Espelhos sob medida no Rio de Janeiro

A E & L Vidraçaria produz e instala espelhos sob medida para residências e estabelecimentos comerciais no Rio de Janeiro. Solicite um orçamento para desenvolver uma solução adequada às medidas, ao uso e ao estilo do seu ambiente.`,
      categoryId: blogVendas.id,
      published: true,
      seo: {
        metaTitle: 'Espelhos Sob Medida no Rio de Janeiro | E & L Vidraçaria',
        metaDesc: 'Descubra como usar espelhos sob medida em banheiros, salas, academias e lojas. Peça seu orçamento no Rio de Janeiro.',
        keywords: 'espelho sob medida, espelhos no Rio de Janeiro, espelho para banheiro, espelho para academia, vidraçaria',
      },
    },
    {
      title: 'Como escolher uma vidraçaria no Rio de Janeiro com segurança',
      slug: 'como-escolher-vidracaria-no-rio-de-janeiro',
      excerpt: 'Saiba o que avaliar antes de contratar uma vidraçaria para box, espelhos, portas, janelas, divisórias e outros projetos em vidro.',
      content: `## A escolha da vidraçaria influencia todo o projeto

Projetos em vidro exigem medidas corretas, materiais adequados e instalação cuidadosa. Uma escolha baseada somente no menor preço pode resultar em atrasos, acabamento inadequado, peças incompatíveis com o espaço ou necessidade de refazer o serviço.

Antes de contratar, vale analisar a experiência da empresa, a clareza do orçamento e a atenção dada às necessidades do ambiente.

## Verifique quais serviços são oferecidos

Uma vidraçaria completa pode atender diferentes demandas, como:

- Box de vidro temperado para banheiro
- Espelhos sob medida
- Portas e janelas de vidro
- Divisórias para ambientes
- Vidros transparentes, fumê e jateados
- Fachadas e projetos comerciais
- Serralheria para estruturas e instalação de vidros

Confirmar os serviços disponíveis ajuda a centralizar o projeto e manter um padrão de acabamento.

## Solicite uma avaliação das medidas

A medição é uma etapa essencial. O profissional deve observar dimensões, nivelamento, pontos de fixação, interferências e condições da estrutura.

Em box para banheiro, por exemplo, é necessário avaliar a posição do chuveiro, do vaso sanitário, da bancada e da área de abertura. Em portas, janelas e divisórias, também devem ser considerados circulação, ferragens e segurança.

## Peça um orçamento detalhado

O orçamento deve informar de forma clara o serviço, o tipo de vidro, as medidas, os acabamentos e as condições combinadas. Isso facilita a comparação entre propostas e reduz dúvidas durante a execução.

Também é importante confirmar como funcionam a instalação, o atendimento após o serviço e eventuais ajustes necessários.

## Observe o acabamento e a comunicação

Uma boa empresa explica as opções disponíveis, orienta sobre limitações técnicas e mantém uma comunicação objetiva. O cuidado com ferragens, alinhamento, vedação, limpeza e acabamento final faz diferença no resultado.

## Escolha o vidro adequado para cada aplicação

Nem todo vidro serve para qualquer uso. Ambientes e estruturas diferentes podem exigir vidro temperado, espelho, vidro jateado, fumê ou outra solução. A indicação deve considerar segurança, privacidade, luminosidade e estética.

## Vidraçaria na Vila da Penha e no Rio de Janeiro

A E & L Vidraçaria está localizada na Avenida Brás de Pina, na Vila da Penha, e oferece soluções em vidros para projetos residenciais e comerciais no Rio de Janeiro. Entre em contato para explicar sua necessidade e solicitar um orçamento personalizado.`,
      categoryId: blogPresenca.id,
      published: true,
      seo: {
        metaTitle: 'Vidraçaria no Rio de Janeiro: Como Escolher | E & L',
        metaDesc: 'Veja como escolher uma vidraçaria no Rio para box, espelhos e vidros sob medida com segurança e bom acabamento.',
        keywords: 'vidraçaria no Rio de Janeiro, vidraçaria Vila da Penha, vidros sob medida, box de vidro, espelhos',
      },
    },
  ]

  for (const p of posts) {
    await prisma.post.create({
      data: {
        title: p.title,
        slug: p.slug,
        excerpt: p.excerpt,
        content: p.content,
        categoryId: p.categoryId,
        published: p.published,
        seo: { create: p.seo },
      },
    })
  }
  console.log('✅ 3 posts criados!')

  // ─────────────────────────────────────────
  // 📄 PÁGINAS CUSTOMIZADAS
  // ─────────────────────────────────────────
  await prisma.customPage.createMany({
    data: [
      {
        slug: 'sobre',
        title: 'Sobre a E & L Vidraçaria',
        introText: 'A E & L Vidraçaria oferece soluções em vidros para projetos residenciais e comerciais no Rio de Janeiro, com serviços de box para banheiro, vidros temperados, espelhos sob medida, vidros jateados, vidros fumê e serralheria.',
        section1Title: 'Qualidade e atendimento em cada projeto',
        section1Text: 'Localizada na Avenida Brás de Pina, na Vila da Penha, a E & L Vidraçaria trabalha com atendimento personalizado para entender as medidas, o estilo e as necessidades de cada ambiente. O objetivo é entregar soluções funcionais, seguras e com excelente acabamento para residências, empresas, lojas, academias e outros espaços.',
      },
      {
        slug: 'personalizado',
        title: 'Projetos em vidro sob medida',
        introText: 'Cada ambiente exige uma solução diferente. Por isso, a E & L Vidraçaria desenvolve projetos sob medida para banheiros, salas, quartos, varandas, escritórios, lojas e outros espaços residenciais ou comerciais.',
        section1Title: 'Soluções planejadas para o seu espaço',
        section1Text: 'O projeto considera as medidas do ambiente, o tipo de uso, a segurança, a privacidade, a luminosidade e o acabamento desejado. Trabalhamos com box de vidro temperado, espelhos, portas, janelas, divisórias, vidros fumê, vidros jateados e estruturas de serralheria.',
        faq: [
          {
            pergunta: 'Quais serviços a E & L Vidraçaria oferece?',
            resposta: 'Trabalhamos com box para banheiro, vidros temperados, espelhos sob medida, vidros jateados, vidros fumê, portas, janelas, divisórias e serviços de serralheria para projetos em vidro.',
          },
          {
            pergunta: 'Os projetos são feitos sob medida?',
            resposta: 'Sim. As medidas, o tipo de vidro, os acabamentos e a forma de instalação são definidos de acordo com as características e necessidades de cada ambiente.',
          },
          {
            pergunta: 'Como solicitar um orçamento?',
            resposta: 'Entre em contato pelos canais disponíveis no site e envie as informações do projeto. Quando necessário, a equipe orientará sobre medidas, avaliação do local e opções de acabamento.',
          },
          {
            pergunta: 'A vidraçaria atende projetos residenciais e comerciais?',
            resposta: 'Sim. A E & L Vidraçaria atende residências, lojas, escritórios, academias e outros estabelecimentos comerciais no Rio de Janeiro.',
          },
        ],
      },
    ],
  })
  console.log('✅ Páginas sobre e personalizado criadas!')

  console.log('')
  console.log('🎉 Seed completo! E & L Vidraçaria pronta.')
  console.log('   Admin: admin@elvidracaria.com.br')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })