'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {
  Facebook,
  Menu,
  MessageCircle,
  Phone,
  ShoppingCart,
  X,
} from 'lucide-react'

import { useCart } from '@/core/context/CartContext'
import { siteConfig } from '@/client/config/site.config'

export default function Header() {
  const [open, setOpen] = useState(false)
  const { totalItems } = useCart()

  const whatsappHref = `https://wa.me/${siteConfig.whatsapp}`

  return (
    <header className="fixed top-0 z-50 w-full shadow-sm">
      <div className="hidden border-b border-slate-200 bg-[#ececec] md:block">
        <div className="mx-auto flex h-8 max-w-6xl items-center justify-end gap-5 px-4 text-[15px] text-[#0b4ea2]">
          <a
            href="https://www.instagram.com/elvidracaria"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 transition-opacity hover:opacity-80"
          >
            <span className="inline-flex h-4 w-4 items-center justify-center rounded-full border border-current">
              <span className="block h-2 w-2 rounded-full border border-current" />
            </span>
            <span>elvidracaria</span>
          </a>

          <a
            href="https://www.facebook.com/elvidracaria"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 transition-opacity hover:opacity-80"
          >
            <Facebook className="h-4 w-4 fill-current" />
            <span>elvidracaria</span>
          </a>

          <a
            href="tel:+5521964683530"
            className="inline-flex items-center gap-1.5 transition-opacity hover:opacity-80"
          >
            <MessageCircle className="h-4 w-4" />
            <span>(21) 96468-3530</span>
          </a>

          <a
            href="tel:+5521970441065"
            className="inline-flex items-center gap-1.5 transition-opacity hover:opacity-80"
          >
            <MessageCircle className="h-4 w-4" />
            <span>(21) 97044-1065</span>
          </a>
        </div>
      </div>

      <div className="bg-[#004aad]">
        <div className="mx-auto flex h-[56px] max-w-6xl items-center justify-between px-4 md:h-[58px]">
          <Link href="/" className="relative z-10 flex shrink-0 items-center">
            <Image
              src={siteConfig.logoHorizontal}
              alt={siteConfig.logoAlt}
              width={74}
              height={74}
              className="mt-0 h-[58px] w-auto md:-mt-1 md:h-[78px]"
              priority
            />
          </Link>

          <nav className="hidden items-center gap-7 text-[15px] font-normal text-white md:flex">
            {siteConfig.navLinks.map((link, index) => (
              <div key={link.href} className="flex items-center gap-7">
                <Link
                  href={link.href}
                  className="transition-opacity hover:opacity-80"
                >
                  {link.label}
                </Link>

                {index < siteConfig.navLinks.length - 1 ? (
                  <span className="text-white/70">·</span>
                ) : null}
              </div>
            ))}

            <Link
              href="/loja/carrinho"
              className="relative inline-flex items-center gap-2 transition-opacity hover:opacity-80"
              aria-label="Carrinho"
            >
              <ShoppingCart className="h-4 w-4" />
              <span>Carrinho</span>
              {totalItems > 0 ? (
                <span className="absolute -right-3 -top-2 inline-flex h-5 min-w-[1.25rem] items-center justify-center rounded-full bg-white px-1.5 text-[11px] font-bold text-[#004aad]">
                  {totalItems}
                </span>
              ) : null}
            </Link>
          </nav>

          <div className="hidden items-center md:flex">
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-10 items-center gap-2 rounded-full bg-[#16c75f] px-6 text-[15px] font-medium text-white transition-all hover:brightness-105"
            >
              <span>Fazer orçamento</span>
              <MessageCircle className="h-4 w-4" />
            </a>
          </div>

          <div className="flex items-center gap-3 md:hidden">
            <Link
              href="/loja/carrinho"
              className="relative text-white"
              aria-label="Carrinho"
            >
              <ShoppingCart className="h-5 w-5" />
              {totalItems > 0 ? (
                <span className="absolute -right-2 -top-2 flex h-4 min-w-[1rem] items-center justify-center rounded-full bg-white px-1 text-[10px] font-bold text-[#004aad]">
                  {totalItems}
                </span>
              ) : null}
            </Link>

            <button
              type="button"
              onClick={() => setOpen(!open)}
              aria-label={open ? 'Fechar menu' : 'Abrir menu'}
              className="text-white"
            >
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {open ? (
          <div className="border-t border-white/10 bg-[#004aad] md:hidden">
            <nav className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-5 text-white">
              {siteConfig.mobileNavLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-sm transition-opacity hover:opacity-80"
                >
                  {link.label}
                </Link>
              ))}

              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex h-11 items-center justify-center gap-2 rounded-full bg-[#16c75f] px-5 text-sm font-medium text-white"
              >
                <span>Fazer orçamento</span>
                <MessageCircle className="h-4 w-4" />
              </a>

              <a
                href="tel:+5521964683530"
                className="inline-flex items-center gap-2 text-sm text-white/90"
              >
                <Phone className="h-4 w-4" />
                <span>(21) 96468-3530</span>
              </a>
            </nav>
          </div>
        ) : null}
      </div>
    </header>
  )
}